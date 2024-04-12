import Link from "next/link";
import { Offer } from "../lib/definitions";

type Props = {
    offer: Offer,
}

export default function OfferTile({ offer }: Props) {
    return (
        <div className="m-2 p-2  max-w-2xl border border-black rounded-sm">
            <a target="_blank" href={offer.offerLink}>
                <div className="w-fit md:max-w-2xl">
                    <div className={`border-l-8 pl-2 ${offer.noExperienceRequired ? 'border-green-500' : 'border-blue-500'}`}>
                        <p className="mb-2"><span className="font-bold">Job title:</span> {offer.title}</p>
                        <p className="mb-2"><span className="font-bold">Technologies:</span> {offer.technologies.map((tech, i) => <span key={`tech${i}`}>{tech}, </span>)}</p>
                    </div>
                    {offer.noExperienceRequired && <p><span className="text-green-500 font-bold">&#x2714;</span> No experience required!</p>}
                    <p className=""><span className="font-bold">Description:</span> {offer.description}</p>
                </div>
            </a>
        </div>
    );
}