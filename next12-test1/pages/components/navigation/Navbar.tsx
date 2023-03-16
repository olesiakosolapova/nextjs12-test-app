import { useSelector } from "react-redux";
import Link from "next/link";
import { NavbarApiResponse } from "../../../store/interfaces";
import { StoreStateAll } from "../../../store/reducers/interfaces";

export const Navbar = () => {
  const links: NavbarApiResponse | null = useSelector(
    (state: StoreStateAll) => state.navbar.data
  );
  return (
    <nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1rem",
          fontSize: "1.5rem",
        }}
      >
        {links?.data.items?.map((link) => (
          <li key={link.name}>
            <Link href={`${link.uri}`}>{link.name}</Link>
          </li>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1rem",
          fontSize: "1.5rem",
        }}
      >
        <Link href="/vyrazte-za-kraskou-a-zviretem-nebo-za-loutkami-vikend-bude-kulturni">
          <a>Example Article</a>
        </Link>
      </div>
    </nav>
  );
};
