'use client'

import Link from "next/link";
import { toSlug } from "@/utils/slug";
import { getCoffeeReviews, getCoffeeShops } from '@/utils/supabase/supabase';
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function Reviews() {

	const params = useSearchParams();
	const tags = params.get('tag');

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
		if (tags && reviews) {
			return reviews.filter((review: any) => review.tags.includes(tags));
		}
		return reviews;
	}, [reviews, tags]);

	if (filteredReviews && reviews) {
		return (
			<>
				{filteredReviews.map((review: any, idx) => {
					const shop = coffeeShopMap.get(review.coffee_shop_id);
					const [year, month, day] = review.visit_date.toLocaleString().split('-');
					const visitDate = `${month}-${day}-${year}`;
					const entryURL = `/entries/${shop.country}/${shop.city}/${toSlug(shop.name)}/${toSlug(review.drink_name)}`;

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
			</>
		)
	}
	else if (reviewsQueryError) {
		return <p>Error: {reviewsQueryError.message}</p>
	}
}