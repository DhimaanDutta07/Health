import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/auth.store'
import NavLogo from './navbar/NavLogo'
import NavLinks from './navbar/NavLinks';
import NavActions from './navbar/NavActions';
import MobileMenu from './navbar/MobileMenu';
import { navbarStyles } from './navbar/navbar.styles';



export default function Navbar({ isLoggedIn: loggedInProp, onOpenModal }) {
  const { isLoggedIn, logout } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const logged = loggedInProp !== undefined ? loggedInProp : isLoggedIn;

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <>
      <nav style={navbarStyles.nav}>
        <div className="nav-inner" style={navbarStyles.inner}>
          <NavLogo logged={logged} />
          <NavLinks logged={logged} />
          <NavActions
            logged={logged}
            onLogout={handleLogout}
            onHamburger={() => setMobileOpen(true)}
          />
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        logged={logged}
        onClose={() => setMobileOpen(false)}
        onLogout={handleLogout}
        onOpenModal={onOpenModal}
      />

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
        .profile-wrap .profile-dropdown {
          opacity: 0; visibility: hidden; transform: translateY(10px);
          transition: all 0.25s ease; z-index: 1000;
        }
        .profile-wrap:hover .profile-dropdown {
          opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
}