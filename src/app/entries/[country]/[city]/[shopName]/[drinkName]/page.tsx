import Navbar from "@/app/components/ui/Navbar";
import { toSlug } from "@/utils/slug";

// temp
const entries = [
    { id: '1', title: 'Arabica', country: 'USA', city: 'California', date: '2024-11-15' },
    { id: '2', title: 'Modus', country: 'Canada', city: 'Vancouver', date: '2024-11-10' },
];

// Helps statically generate routes at build time instead of on-demand at request time.
export async function generateStaticParams() {
    return entries.map((entry) => ({
        country: toSlug(entry.country),
        city: toSlug(entry.city),
        shopName: toSlug(entry.title),
        drinkName: "placeholder"
    }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ country: string; city: string; shopName: string; drinkName: string}>
}) {
    const { country, city, shopName, drinkName } = await params
    return (
        <div>
            <Navbar />
            {country}{city}{shopName}
            {drinkName}
        </div>
    )
}