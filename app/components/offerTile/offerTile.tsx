import Link from "next/link";
import { Offer } from "../../lib/definitions";
import NoExperienceBadge from "./noExperienceBadge";

type Props = {
    offer: Offer,
}

export default function OfferTile({ offer }: Props) {
    return (
        <div className="my-4 max-w-2xl border border-black rounded-sm">
            <a target="_blank" href={offer.offerUrl}>
                <div className="w-fit md:max-w-2xl p-4">
                    <p className="tracking-tight my-4">
                        {offer.description}
                    </p>

                    <p className="my-4">
                        <span>Technologies: </span>
                        {offer.technologies.join(', ')}
                    </p>

                    {offer.noExperienceRequired && <NoExperienceBadge />}
                </div>
            </a>
        </div>
    );
}