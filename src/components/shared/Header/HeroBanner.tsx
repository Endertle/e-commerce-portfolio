// Components
import { Button } from "../../ui/button";

function HeroBanner() {
  return (
    <div className="bg-zinc-200 w-full py-36">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between gap-6 text-center">
        <h1 className="text-4xl font-semibold">
          Discover the Cozy Elegance of Fall
        </h1>
        <span className="text-2xl">
          Explore our curated collection of autumn-inspired decor and
          accessories.
        </span>
        <Button className="px-8 py-5">Shop Now</Button>
      </div>
    </div>
  );
}
export default HeroBanner;
