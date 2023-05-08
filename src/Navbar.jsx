import { Link } from 'react-router-dom';
import logo from './assets/img/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="enlaces">
        <Link to="/clientes">
          <button>Clientes</button>
        </Link>
        <Link to="/productos">
          <button>Productos</button>
        </Link>
        <Link to="/proveedores">
          <button>Proveedores</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

