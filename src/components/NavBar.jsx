import { Menu } from "lucide-react";
import NavBarLink from "./NavBarLink";

function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between py-7">
      <div className="text-3xl font-semibold md:text-4xl lg:text-5xl">
        Jadoo
      </div>

      <div className="block md:hidden">
        <Menu />
      </div>
      <div className="hidden w-[75%] items-center justify-between gap-4 md:flex">
        <NavBarLink>Destination</NavBarLink>
        <NavBarLink>Hotels</NavBarLink>
        <NavBarLink>Flights</NavBarLink>
        <NavBarLink>Bookings</NavBarLink>
        <NavBarLink>Login</NavBarLink>
        <NavBarLink className="rounded-md border border-b-blue-500 px-3 py-1">
          sign Up
        </NavBarLink>

        <div href="#">EN</div>
      </div>
    </nav>
  );
}

export default NavBar;
