
import TechMenu from "./techMenu";

type Props = {
    technologies: string[],
}

export default function Navbar({ technologies }: Props) {

    return (
        <nav className="flex w-full justify-center">
            <img className="w-72 mr-8" src="/logo.jpeg" alt="logo" />
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl font-bold my-4">
                    Junior friendly web-dev job offers
                </h1>
                <TechMenu technologies={technologies} />
            </div>
        </nav>
    );
}