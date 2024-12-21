const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#who">Qui somme nous ?</a>
          </li>
          <li>
            <a href="#projects">Nos Projets</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
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
