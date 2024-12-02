'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// supabase is the db
const supabase = createClient(supabaseUrl, supabaseKey);

// returns the coffee-reviews table
export async function getCoffeeReviews() {
    console.log("Fetching Coffee Reviews");

    const { data, error } = await supabase
        .from('coffee-reviews')
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

// returns the coffee-shops table
export async function getCoffeeShops() {
    console.log("Fetching Coffee Shops");

    const { data, error } = await supabase
        .from('coffee-shops')
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getCoffeeShopName(review: any) {
    const { data, error } = await supabase.from('coffee-shops').select('name').eq('id', review.coffee_shop_id);

    if (error) {
        throw new Error(error.message);
    }

    console.log(data);
    return data;
}