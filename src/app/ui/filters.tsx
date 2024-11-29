import FilterButton from "../components/FilterButton";

type FiltersProps = {
    selectedFilters: string[];
    // onFilterChange: (filter: string) => void;
}

const Filters = () => {
    const filterOptions = [
        { text: "HOT", color: "bg-[#DF8A8A]", iconType: "hot" },
        { text: "COLD", color: "bg-[#8ABDDF]", iconType: "cold" },
        { text: "SWEET", color: "bg-[#DF8ACE]", iconType: "hot" },
        { text: "BITTER", color: "bg-[#A98ADF]", iconType: "bitter" },
        { text: "ACIDIC", color: "bg-[#7ACE88]", iconType: "acidic" },
        { text: "NUTTY", color: "bg-[#CBA772]", iconType: "hot" },
    ];

    return (
        <div className="w-4/6 flex flex-wrap justify-center gap-x-2 gap-y-2">
            {filterOptions.map((filter, idx) => {
                return (
                    <FilterButton
                        key={idx}
                        text={filter.text}
                        color={filter.color}
                        iconType={filter.iconType}
                        isSelected={false}
                    />
                )
            })}

            {/* <FilterButton text="HOT" color="bg-[#DF8A8A]" iconType="hot"></FilterButton>
            <FilterButton text="COLD" color="bg-[#8ABDDF]" iconType="cold"></FilterButton>
            <FilterButton text="SWEET" color="bg-[#DF8ACE]" iconType="hot"></FilterButton>
            <FilterButton text="BITTER" color="bg-[#A98ADF]" iconType="bitter"></FilterButton>
            <FilterButton text="ACIDIC" color="bg-[#7ACE88]" iconType="acidic"></FilterButton>
            <FilterButton text="NUTTY" color="bg-[#CBA772]" iconType="hot"></FilterButton>
            <FilterButton text="FRUITY" color="bg-[#E5A47D]" iconType="fruity"></FilterButton> */}
        </div>
    )

}

export default Filters;