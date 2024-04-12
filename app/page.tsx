import { offers } from "./lib/services/offers";
import OfferTile from "./components/offerTile";

export default async function Home() {
  const data = await offers.getAll();
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        {data.length === 0 ? 'No offers found'
          :
          data.map((offer, i) => <OfferTile key={i} offer={offer} />)}
      </div>
    </div>
  );
}
