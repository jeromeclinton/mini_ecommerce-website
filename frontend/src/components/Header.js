import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({ cartItems }) {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to="/">
            <img width="80px" src="/images/jerome.jpg" />
          </Link>
        </div>
      </div>
      <Search />
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to={"/cart"}>
          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}
