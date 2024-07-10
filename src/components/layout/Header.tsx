// React router dom imports
import { Link } from "react-router-dom";

// Components
import HeaderSearchInput from "../shared/HeaderSearchInput";
import HeaderButtons from "../shared/HeaderButtons";

function Header() {
  return (
    <header className="border py-3">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-2">
        {/* logo icon link */}
        <Link to={"/"}>
          <span className="font-semibold text-lg">Acme Store</span>
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
