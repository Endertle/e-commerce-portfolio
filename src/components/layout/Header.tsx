// React router dom imports
import { Link } from "react-router-dom";

// Components
import HeaderSearchInput from "../shared/Header/HeaderSearchInput";
import HeaderButtons from "../shared/Header/HeaderButtons";

// utils
import { ONLINE_STORE_NAME } from "@/utils/constants";

function Header() {
  return (
    <header className="border py-3 sticky top-0 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-2">
        {/* logo icon link */}
        <Link to={"/"}>
          <span className="font-semibold text-lg">{ONLINE_STORE_NAME}</span>
        </Link>

        {/* Header input */}
        <HeaderSearchInput />

        {/* Header button group */}
        <HeaderButtons />
      </div>
    </header>
  );
}
export default Header;
