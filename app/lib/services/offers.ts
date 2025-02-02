import { Offer } from "../definitions";

export const offers = {
    getAll,
}

async function getAll():Promise<Offer[]> {
    const customHeaders = {
        "Content-Type": "application/json",
        "key": `${process.env.AUTH_KEY}`,
    };
    const offers = await fetch('http://localhost:3010/offers', {
        method: "GET",
        headers: customHeaders,
        next: {
            revalidate: 0,
        }
    }).then(response => response.json()) as any[];
    return offers.map(offer => {
        return {
            offerUrl: offer.offer_url,
            description: offer.description,
            technologies: offer.technologies,
            isJuniorFriendly: offer.is_junior_friendly,
            noExperienceRequired: offer.no_experience_required,
            offerValidDate: new Date(offer.offer_valid_date),
        }});
}