import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>
    </>
  )
}