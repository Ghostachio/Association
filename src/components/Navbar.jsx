const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-svw flex-wrap ">
      <div className="flex-1 justify-center md:justify-normal">
        <a className="btn btn-ghost text-xl ">
          <img
            src="/Screenshot 2024-12-21 183040.png"
            alt=""
            className="w-[150px] rounded-lg object-cover"
          />
        </a>
      </div>
      <div className="flex-wrap md:flex-none">
        <ul className="menu menu-horizontal justify-center md:justify-normal">
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
