'use client'
import TechSelector from "./techSelector"
import { OfferFiltersContext } from "../../offerFiltersProvider";
import { useContext } from "react";


type Props = {
    technologies: string[],
}

export default function TechMenu({ technologies }: Props) {
    const { toggleTechFilter } = useContext(OfferFiltersContext);
    return <>
        <div className="flex flex-col items-center">
            <p>
                Filter offfers by technology:
            </p>
            <div>
                {technologies.map(tech => <TechSelector tech={tech} onClickFunction={toggleTechFilter} />)}
            </div>
        </div>
    </>
}