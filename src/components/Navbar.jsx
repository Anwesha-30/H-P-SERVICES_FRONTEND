import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        H&P PROJECTS
      </Link>
      <div className="nav-links">
        <Link to="/careers" className="nav-link">CAREERS</Link>
        <Link to="/contact" className="nav-link">CONTACT US</Link>
      </div>
    </nav>
  );
}