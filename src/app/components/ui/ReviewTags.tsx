'use client'

import FilterButton from "../FilterButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewTags() {

    const filterOptions = [
        { text: "HOT", color: "bg-[#DF8A8A]", type: "hot" },
        { text: "COLD", color: "bg-[#8ABDDF]", type: "cold" },
        { text: "SWEET", color: "bg-[#DF8ACE]", type: "sweet" },
        { text: "BITTER", color: "bg-[#A98ADF]", type: "bitter" },
        { text: "ACIDIC", color: "bg-[#7ACE88]", type: "acidic" },
        { text: "NUTTY", color: "bg-[#CBA772]", type: "nutty" },
    ];

    // const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    // const [filteredReviews, setFilteredReviews] = useState<any[]>([]);

    // const setFilter = (filter: string) => () => {
    //     if (selectedFilters.includes(filter)) {
    //         setSelectedFilters(selectedFilters.filter((selectedFilter) => selectedFilter !== filter));
    //     } else {
    //         setSelectedFilters([...selectedFilters, filter]);
    //     }
    // }

    const router = useRouter();

    const setFilter = (filter: string) => {
        if (filter) {
            router.push("?tag=" + filter);
        }
        if (!filter) {
            router.push("/");
        }
    }

    return (

        <div className="w-4/6 flex flex-wrap justify-center gap-x-2 gap-y-2">
            {filterOptions.map((filter, idx) => {
                return (
                    <FilterButton
                        key={idx}
                        text={filter.text}
                        color={filter.color}
                        type={filter.type}
                        setFilter={setFilter}
                        // isSelected={selectedFilters.includes(filter.type)}
                    />
                )
            })}
        </div>
    )

}