import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ isAuthenticated, user }) => {

  const links = [
    {
      className: styles.className,
      to: '/',
      name: 'Home'
    },
    {
      className: styles.className,
      to: '/catalog',
      name: 'Catalog'
    },
    {
      className: styles.className,
      to: '/about',
      name: 'About'
    },
  ]

  let guestNavigation = (
    <div id="guest">
      <li><Link className="menu" to="/login">Login</Link></li>
      <li><Link className="menu" to="/register">Register</Link></li>
    </div>
  );

  let userNavigation = (
    <div id="user">
      <span>Welcome, {user}</span>
      <li><Link className="menu" to="/logout">Logout</Link></li>
    </div>
  );

  return (
    <div className="row-1">
      <div class="main">
        <div class="container_12">
          <div class="grid_12">
            <nav>
              <ul class="menu">
                {links.map(link => (<li><Link className={link.className} to={link.to}>{link.name}</Link></li>))}
                {isAuthenticated
                  ? userNavigation
                  : guestNavigation
                }
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;