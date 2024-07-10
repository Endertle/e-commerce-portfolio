import Collections from "./Collections";
import SideBarSection from "./SideBarSection";

function ExploreSection() {
  return (
    <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-[1fr_300px] gap-4 py-12">
      <Collections />
      <SideBarSection />
    </div>
  );
}
export default ExploreSection;
