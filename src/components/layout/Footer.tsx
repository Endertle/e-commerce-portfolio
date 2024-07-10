import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-muted-foreground text-background p-6 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; 2024 Acme Store. All rights reserved.</p>
        <nav className="flex gap-4 md:gap-6">
          <Link to="#" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link to="#" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="#" className="text-sm hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
