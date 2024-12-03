'use client'

import Link from "next/link";
// import { toSlug } from "@/utils/slug";
import { getCoffeeReviews, getCoffeeShops } from '@/api/supabase/supabase';
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useFilter } from "@/contexts/FilterContext";

export default function Reviews() {

	const { selectedFilters } = useFilter();

	const { data: reviews, error: reviewsQueryError } = useQuery({
		queryKey: ['reviews'],
		queryFn: getCoffeeReviews,
	})

	const { data: shops, error: shopsQueryError } = useQuery({
		queryKey: ['shops'],
		queryFn: getCoffeeShops,
	})

	const coffeeShopMap = new Map();
	if (shops) {
		// Map coffee shop IDs to names for easier lookup
		for (const shop of shops) {
			// Map looks like this:
			// { id, {name, country, city} }
			coffeeShopMap.set(shop.id, {
				name: shop.name,
				country: shop.country,
				city: shop.city
			});
		}
	}

	const filteredReviews = useMemo(() => {
		if (reviews && selectedFilters.length > 0) {
			return reviews.filter((review) =>
				selectedFilters.every((filter) => review.tags.includes(filter))
			);
		}
		return reviews || [];
	}, [reviews, selectedFilters]);

	if (reviewsQueryError) {
		console.log(reviewsQueryError.message);
	}

	if (shopsQueryError) {
		console.log(shopsQueryError.message);
	}

	if (filteredReviews.length > 0) {
		return (
			<div className="grid grid-cols-3 gap-x-1 gap-y-1">
				{filteredReviews.map((review, idx) => {
					const shop = coffeeShopMap.get(review.coffee_shop_id);
					const [year, month, day] = review.visit_date.toLocaleString().split('-');
					const visitDate = `${month}-${day}-${year}`;
					// const entryURL = `/entries/${toSlug(shop.country)}/${toSlug(shop.city)}/${toSlug(shop.name)}/${toSlug(review.drink_name)}`;
					const entryURL = `/entries/${review.id}`;

					return (
						<Link key={idx} href={entryURL}>
							<div className="relative review-card hover:scale-[1.015] ease-in-out transition flex flex-col gap-y-4">

								{/* SQUARE */}
								<div className="px-5 pt-5 pb-10 aspect-square">

									<div className="flex flex-col h-full">
										{/* DRINK NAME */}
										<div>
											<h3>{review.drink_name.toUpperCase()}</h3>
										</div>

										{/* SHOP NAME */}
										<div>
											<h4>{shop.name.toUpperCase()}</h4>
										</div>

										{/* TAGS (for testing) */}
										<div>
											{review.tags.map((tag: string, idx: number) => {
												return (
													<p key={idx}>{tag}</p>
												)
											})}
										</div>
									</div>

									{/* DATE */}
									<div className="date-tag text-center content-center absolute bottom-0 right-0 bg-primary w-20 h-6">
										<p>
											{visitDate}
										</p>
									</div>

								</div>
							</div>
						</Link>
					)
				})}
			</div>
		)
	} else {
		return (
			<div className="text-center">
				<p>Could not find anything under those filters</p>
			</div>
		)
	}
}