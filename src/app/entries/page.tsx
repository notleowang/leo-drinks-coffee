import Navbar from '../ui/navbar';
import Filters from '../ui/filters';
import ReviewCard from '../components/ReviewCard';
import { useState } from 'react';
import { getCoffeeReviews, getCoffeeShops } from '@/utils/supabase/supabase';

export default async function Page() {
    const reviews = await getCoffeeReviews();
    const coffeeShops = await getCoffeeShops();

    // Map coffee shop IDs to names for easier lookup
    let coffeeShopMap = new Map();
    for (let shop of coffeeShops) {

        // Map looks like this:
        // { id, {name, country, city} }
        coffeeShopMap.set(shop.id, {
            name: shop.name,
            country: shop.country,
            city: shop.city
        });
    }

    return (
        <div>
            <Navbar />

            <div className="text-center">
                <h1>ENTRIES</h1>
            </div>

            <div className="filters-section flex justify-center my-16">
                <Filters />
            </div>

            <div className="sort-section border-b-2 border-dotted border-foreground pb-2 my-16 text-end">
                <p>SORT BY</p>
            </div>

            <div className="grid grid-cols-3 gap-x-1 gap-y-1">
                {reviews.map((review) => {
                    return (
                        <ReviewCard
                            key={review.id}
                            shopId={review.coffee_shop_id}
                            drinkName={review.drink_name}
                            coffeeShopMap={coffeeShopMap}
                            rating={review.rating}
                            tags={review.tags}
                            date={review.visit_date}
                            price={review.price}
                            poopRating={review.poop_rating}
                        />
                    )
                })}
            </div>
        </div>
    );
}