'use client'

import { FilterIcons } from "@/utils/filterHandler";

type FilterButtonProps = {
    text: string;
    color: string;
    type: string;
    onClickFunction: (filter: string) => void;
    isSelected: boolean;
}

export default function FilterButton({ text, color, type, onClickFunction, isSelected }: FilterButtonProps) {
    return (
        <button
            onClick={() => onClickFunction(type)}
            className={`${color} ${isSelected ? 'selected' : ''} text-background rounded-full px-4 py-1 inline-flex space-x-1 place-items-center opacity-50 transition-opacity hover:opacity-100`}
            // className={`${color} text-background rounded-full px-4 py-1 inline-flex space-x-1 place-items-center`}
        >
            {FilterIcons[type]}
            <p>{text}</p>
        </button>
    )
}