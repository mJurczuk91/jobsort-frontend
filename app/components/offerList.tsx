'use client'
import { Offer } from "../lib/definitions"
import OfferTile from "./offerTile/offerTile"
import { OfferFiltersContext } from "../offerFiltersProvider"
import { useContext } from "react"

type Props = {
    offers: Offer[],
}

export default function OfferList({ offers }: Props) {
    const { offerFilters } = useContext(OfferFiltersContext);
    const filtered = offerFilters.length === 0 ?
        offers
        :
        offers.filter(offer => {
            const result = offerFilters.every(filter => {
                const found = offer.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()));
                console.log('found ', found);
                return found;
            })
            console.log(`offer list ${result}`);
            return result
        })
    return <div className="w-full flex flex-col items-center">
        <div>
            {offers.length === 0 ? 'No offers found'
                :
                filtered.map((offer, i) => <OfferTile key={i} offer={offer} />)}
        </div>
    </div>
}