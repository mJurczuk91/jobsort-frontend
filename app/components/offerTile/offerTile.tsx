import Link from "next/link";
import { Offer } from "../../lib/definitions";
import NoExperienceBadge from "./noExperienceBadge";

type Props = {
    offer: Offer,
}

export default function OfferTile({ offer }: Props) {
    return (
        <div className="m-2 p-2  max-w-2xl border border-black rounded-sm">
            <a target="_blank" href={offer.offerUrl}>
                <div className="w-fit md:max-w-2xl">
                    {offer.noExperienceRequired && <NoExperienceBadge />}

                    <p className="">
                        {offer.description}
                    </p>
                </div>
            </a>
        </div>
    );
}