import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <div className="nav-list-items">
          <img src="#" alt="logo" id="logo" />
          <li id="inicio">
            <a href="#">Inicio</a>
          </li>
          <li id="inicio">
            <a href="#">Tareas</a>
          </li>
          <li id="inicio">
            <a href="#">Contacto</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default Navbar;
