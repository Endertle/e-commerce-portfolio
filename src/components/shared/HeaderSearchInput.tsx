// Icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Components
import { Input } from "../ui/input";

function HeaderSearchInput() {
  return (
    <div className="relative flex-1 max-w-md hidden sm:block">
      <div className="absolute left-2.5 top-2.5 text-muted-foreground">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </div>
      <Input
        type="search"
        placeholder="Search products..."
        className="w-full bg-background pl-8 pr-4 py-2 rounded-lg shadow-sm"
      />
    </div>
  );
}
export default HeaderSearchInput;
