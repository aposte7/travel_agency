import NavBarLink from "./NavBarLink";

function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between py-7">
      <div className="text-5xl font-semibold">Jadoo</div>

      <div className="flex w-[70%] items-center justify-between">
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
