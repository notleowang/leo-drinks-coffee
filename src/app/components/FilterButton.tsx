import { FilterIcons } from "@/utils/filterHandler";

type FilterButtonProps = {
    text: string;
    color: string;
    iconType: string;
    isSelected: boolean;
}

const FilterButton = ({ text, color, iconType, isSelected }: FilterButtonProps) => {
    return (
        <button
            className={`${color} ${isSelected ? 'border-2 border-primary' : ''} text-background rounded-full px-4 py-1 inline-flex space-x-1 place-items-center`}
            
        >
            {FilterIcons[iconType]}
            <p>{text}</p>
        </button>
    )
}

export default FilterButton;