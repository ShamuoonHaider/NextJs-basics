import NavLinks from "./navlinks";
import NavSearch from "./navsearch";

const Navbar = () => {
  console.log("Rendering Navbar component");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

export default Navbar;
