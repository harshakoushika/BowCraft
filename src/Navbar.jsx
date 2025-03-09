import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logoo from './assets/logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/Home" className="site-title"  ><img src={logoo} className="logo"></img>
        <div id="color">BOW CRAFT</div>
      </Link>
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/Explor">Explore</CustomLink>
        <CustomLink to="/Learn">Learn</CustomLink>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/Regsiter">Regsiter</CustomLink>
        <CustomLink to="/AboutUs">Contact Us</CustomLink>

      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}