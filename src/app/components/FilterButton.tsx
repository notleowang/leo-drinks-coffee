'use client'

import { FilterIcons } from "@/utils/filterHandler";

type FilterButtonProps = {
    text: string;
    color: string;
    type: string;
    setFilter: (filter: string) => void;
    // isSelected: boolean;
}

export default function FilterButton({ text, color, type, setFilter}: FilterButtonProps) {
    return (
        <button
            onClick={() => setFilter(type)}
            // className={`${color} ${isSelected? 'selected' : ''} text-background rounded-full px-4 py-1 inline-flex space-x-1 place-items-center`}
            className={`${color} text-background rounded-full px-4 py-1 inline-flex space-x-1 place-items-center`}
        >
            {FilterIcons[type]}
            <p>{text}</p>
        </button>
    )
}