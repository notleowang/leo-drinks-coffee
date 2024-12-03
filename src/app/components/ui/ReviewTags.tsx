'use client'

import { useFilter } from "@/contexts/FilterContext";
import FilterButton from "../FilterButton";

export default function ReviewTags() {

    const { selectedFilters, setSelectedFilters } = useFilter();

    const filterOptions = [
        { text: "HOT", color: "bg-[#DF8A8A]", type: "hot" },
        { text: "COLD", color: "bg-[#8ABDDF]", type: "cold" },
        { text: "SWEET", color: "bg-[#DF8ACE]", type: "sweet" },
        { text: "BITTER", color: "bg-[#A98ADF]", type: "bitter" },
        { text: "ACIDIC", color: "bg-[#7ACE88]", type: "acidic" },
        { text: "NUTTY", color: "bg-[#CBA772]", type: "nutty" },
    ];

    const setFilter = (filter: string) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((selectedFilter) => selectedFilter !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
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
                        onClickFunction={setFilter}
                        isSelected={selectedFilters.includes(filter.type)}
                    />
                )
            })}
        </div>
    )

}