'use client'
import { createContext, useState } from "react"

export type OfferFiltersContextType = {
    toggleTechFilter: (tech: String) => void,
    offerFilters: String[],
}

export const OfferFiltersContext = createContext<OfferFiltersContextType>({
    toggleTechFilter: (tech: String) => { },
    offerFilters: [] as String[],
})

type Props = {
    children: React.ReactNode,
}

export default function OfferFiltersProvider({ children }: Props) {
    const [offerFilters, setOfferFilters] = useState<String[]>([]);
    const toggleTechFilter = (tech: String) => {
        if (offerFilters.find(filter => filter === tech)) {
            setOfferFilters(offerFilters.filter(filter => filter !== tech));
        } else {
            setOfferFilters([tech, ...offerFilters]);
        }
    }
    return (
        <OfferFiltersContext.Provider value={{ toggleTechFilter, offerFilters }}>
            {children}
        </OfferFiltersContext.Provider>
    )
}