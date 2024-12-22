const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl ">
          <img
            src="/Screenshot 2024-12-21 183040.png"
            alt=""
            width="150px"
            className="rounded-lg"
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#who">Qui Sommes-Nous?</a>
          </li>
          <li>
            <a href="#projects">Objectifs</a>
          </li>
          <li>
            <a href="#team">Notre Équipe</a>
          </li>
          <li className="bg-green text-white rounded-md">
            <a href="#contact">Contacter nous </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
