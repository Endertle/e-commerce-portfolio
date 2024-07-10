import { Separator } from "../ui/separator";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import TopSellers from "./TopSellers";

function SideBarSection() {
  return (
    <div className="bg-background shadow-sm rounded-md py-8 px-6">
      <Categories />
      <Separator className="my-8" />
      <TopSellers />
      <Separator className="my-8" />
      <NewArrivals />
    </div>
  );
}
export default SideBarSection;
