import { useSelector } from "react-redux";
import Link from "next/link";
import { NavbarApiResponse } from "../../../store/interfaces";
import { StoreStateAll } from "../../../store/reducers/interfaces";

const Navbar = () => {
  const links: NavbarApiResponse | null = useSelector(
    (state: StoreStateAll) => state.navbar.data
  );
  return (
    <section className="navigation">
      <div className="nav-container">
        <nav>
          <ul>
            {links?.data.items?.map((link) => (
              <li key={link.name}>
                <Link href={`${link.uri}`}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/vyrazte-za-kraskou-a-zviretem-nebo-za-loutkami-vikend-bude-kulturni">
                <a>Article</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
