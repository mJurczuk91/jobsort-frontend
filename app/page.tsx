import { offers } from "./lib/services/offers";
import OfferList from "./components/offerList";
import Navbar from "./components/navbar/navbar";

const technologies = [
  'javascript',
  'typescript',
  'node',
  'react',
];

export default async function Home() {
  const data = await offers.getAll();
  return <>
    <Navbar technologies={technologies} />
    <OfferList offers={data} />
  </>
}
