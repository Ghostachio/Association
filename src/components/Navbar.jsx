import logo from "/public/Screenshot 2024-12-21 183040.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl ">
          <img src={logo} alt="" width="150px" className="rounded-lg" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#who">من نحن ؟</a>
          </li>
          <li>
            <a href="#projects">أهداف الجمعية</a>
          </li>
          <li>
            <a href="#team">أعضاء الجمعية</a>
          </li>
          <li>
            <a>Contacter nous </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
