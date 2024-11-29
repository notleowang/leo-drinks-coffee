import Link from "next/link";
// import ScoreBar from "../ui/scorebar";
// import { CircleFlag } from 'react-circle-flags';
import { toSlug } from "@/utils/slug";
// import { getTagIcon, getCountryCode } from "@/utils/tagHandler";

type ReviewCardProps = {
    shopId: string,
    drinkName: string;
    coffeeShopMap: Map<string, { name: string; country: string; city: string }>;
    rating: number;
    tags: string[] | null;
    date: Date;
    price: number;
    poopRating: number;
}

const ReviewCard = ({ shopId, drinkName, coffeeShopMap, rating, tags, date, price, poopRating }: ReviewCardProps) => {
    const coffeeShop = coffeeShopMap.get(shopId);

    let shopName = "";
    let country = "";
    let city = "";

    if (coffeeShop) {
        shopName = coffeeShop.name;
        country = toSlug(coffeeShop.country);
        city = toSlug(coffeeShop.city);
    }

    const entryURL = `/entries/${country}/${city}/${toSlug(shopName)}/${toSlug(drinkName)}`;

    const [year, month, day] = date.toLocaleString().split('-');
    const visit_date = `${month}-${day}-${year}`;

    return (

        // ENTIRE REVIEW CARD (INCLUDING ICONS)
        <Link href={entryURL}>
            <div className="relative review-card hover:scale-[1.015] ease-in-out transition flex flex-col gap-y-4">

                {/* SQUARE */}
                <div className="px-5 pt-5 pb-10 aspect-square">

                    <div className="flex flex-col h-full">

                        {/* DRINK NAME */}
                        <div>
                            <h3>{drinkName.toUpperCase()}</h3>
                        </div>

                        {/* ICONS */}
                        {/* <div className="flex flex-row items-center gap-x-1"> */}
                        {/* {<CircleFlag countryCode={getCountryCode(country) || "default"} width="30" height="30" />} */}
                        {/* {tags?.map((tag, idx) => {
                        return (
                            <div key={idx}>
                                {getTagIcon(tag)}
                            </div>
                        )
                    })} */}
                        {/* </div> */}

                        {/* DETAILS */}
                        <div className="flex-auto">
                            {/* <div className="review-details flex flex-col gap-y-3">
                            <div className="flex justify-between text-foreground">
                                <p>PRICE</p>
                                <p>${price.toFixed(2)}</p>
                            </div>

                            <div className="flex justify-between text-foreground">
                                <p>RATING</p>
                                <p>{rating.toFixed(1)}</p>
                            </div>
                        </div> */}
                        </div>

                        {/* SHOP NAME */}
                        <div>
                            <h4>{shopName.toUpperCase()}</h4>
                        </div>

                    </div>

                    {/* RATING BAR */}
                    {/* <div className="self-end">
                    <ScoreBar score={rating} />
                    <p>{rating.toFixed(1)} / 10.0</p>
                </div> */}

                    {/* LINK */}
                    {/* <div className="text-end">
                    <Link href={entryURL} className="text-foreground">
                        <button className="py-8 rounded-full bg-background hover:bg-tertiary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
                                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
                            </svg>
                        </button>
                    </Link>
                </div> */}

                    {/* DATE */}
                    <div className="date-tag text-center content-center absolute bottom-0 right-0 bg-primary w-20 h-6">
                        <p>
                            {visit_date}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ReviewCard;