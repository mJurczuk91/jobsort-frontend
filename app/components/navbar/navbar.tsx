'use client'
import TechSelector from "./techSelector";
import { OfferFiltersContext } from "../../offerFiltersProvider";
import { useContext } from "react";

type Props = {
    technologies: string[],
}

export default function Navbar({ technologies }: Props) {
    const { toggleTechFilter } = useContext(OfferFiltersContext);
    return (
        <nav>
            <div>
                {technologies.map(tech => <TechSelector tech={tech} onClickFunction={toggleTechFilter} />)}
            </div>
        </nav>
    );
}