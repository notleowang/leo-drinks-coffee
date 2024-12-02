import Navbar from '../components/ui/Navbar';
import ReviewTags from '../components/ui/ReviewTags';
import Reviews from '../components/Reviews';
import { getCoffeeReviews, getCoffeeShops } from '@/utils/supabase/supabase';
import { getQueryClient } from '@/lib/query';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function Page() {

    const queryClient = getQueryClient();       // creates a QueryClient when user enters the "Entries" page.

    // Prefetch the coffee-reviews data.
    await queryClient.prefetchQuery({
        queryKey: ['reviews'],
        queryFn: getCoffeeReviews,
    })

    // Prefetch the coffee-shops data.
    await queryClient.prefetchQuery({
        queryKey: ['shops'],
        queryFn: getCoffeeShops,
    })

    return (
        <div>
            <Navbar />

            <div className="text-center">
                <h1>ENTRIES</h1>
            </div>

            <div className="review-tags-section flex justify-center my-16">
                <ReviewTags />
            </div>

            <div className="sort-section border-b-2 border-dotted border-foreground pb-2 my-16 text-end">
                <p>SORT BY</p>
            </div>

            <div className="grid grid-cols-3 gap-x-1 gap-y-1">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <Reviews />
                </HydrationBoundary>
            </div>
        </div>
    );
}