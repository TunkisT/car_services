import { useState } from 'react';
import Link from 'next/link';
const NavMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='header-menu'>
      <div className='view-mobile'>
        <div
          className={
            'mobile-menu-icon ' + (menuOpen ? 'active-mobile-menu-icon' : '')
          }
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* mobile-menu-icon */}
      </div>
      <nav className={'main-nav ' + (menuOpen ? 'active-mobile-menu' : '')}>
        <ul className='main-menu'>
          <li className='has-children'>
            <Link href='/hosting'>HOME</Link>
          </li>
          <li className='has-children'>
            <Link href='/vps'>VEHICLE LIST</Link>
          </li>
          <li>
            <Link href='/dedicated'>PRICING</Link>
          </li>
          <li>
            <Link href='/email'>SERVICES</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <Link href='#'>
          <a className='button view-desktop'>Login</a>
        </Link>
      </nav>
    </div>
  );
};
export default NavMain;
