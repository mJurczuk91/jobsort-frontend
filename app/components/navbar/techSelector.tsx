'use client'
import { useState } from "react"

type Props = {
    tech:string,
    onClickFunction: (text:String)=>void,
}

export default function TechSelector({tech, onClickFunction }:Props){
    const [isActive, setIsActive] = useState<boolean>(false);
    const handleClick = () => {
        setIsActive(isActive => !isActive);
        onClickFunction(tech);
    }
    return <button className={`
        p-2 tracking-tight text-sm`}
        onClick={handleClick}
        >
            <div 
                className={
                    `flex flex-col items-center mx-2
                    ${isActive ? 'grayscale-0' : 'grayscale'}`
                }>
                <img
                    src={`/${tech}.png`} 
                    alt={tech} 
                    className="w-8"
                />
                {tech}
            </div>
            
    </button>
}