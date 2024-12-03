'use client'

import { createContext, useContext, useState } from "react";

type FilterContextType = {
    selectedFilters: string[];
    setSelectedFilters: (filters: string[]) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    return (
        <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
}