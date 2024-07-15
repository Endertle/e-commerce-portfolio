// Icons
import { StarIcon } from "@heroicons/react/16/solid";

type RateProps = {
  rating: number;
};

function Rate({ rating }: RateProps) {
  return (
    <span className="flex gap-1 items-center text-zinc-500">
      <StarIcon className="w-4 h-4 text-zinc-900" />
      <span>{rating}</span>
    </span>
  );
}
export default Rate;
