import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'glass scrolled' : ''} theme-light ${!isHome ? 'bg-dark' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            US<span>Next</span>Tech
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <Link to="/" className="nav-link">HOME</Link>

            <div className="nav-dropdown">
              <a href="/#services" className="nav-link dropdown-toggle">OUR SERVICES <span className="dropdown-arrow">▼</span></a>
              <div className="dropdown-menu">
                <Link to="/placement-services">PLACEMENT SERVICES</Link>
                <a href="/#services">STAFFING SERVICES</a>
                <a href="/#services">SOFTWARE DEVELOPMENT</a>
                <a href="/#services">BOOTCAMP TRAINING THAT BUILDS CAREERS</a>
              </div>
            </div>

            <a href="/#refer" className="nav-link">REFER &amp; EARN</a>
            <Link to="/about" className="nav-link">ABOUT</Link>
            <a href="/#career" className="nav-link">CAREER</a>
            <a href="/#contact" className="nav-link">CONTACT</a>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className={`hamburger-btn ${sidebarOpen ? 'open' : ''} ${isHome ? 'hamburger-light' : 'hamburger-dark'}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <aside className={`sidebar-drawer ${sidebarOpen ? 'open' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">US<span>Next</span>Tech</Link>
          <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link">🏠 Home</Link>

          <div className="sidebar-group">
            <p className="sidebar-group-label">Our Services</p>
            <Link to="/placement-services" className="sidebar-link sidebar-sub-link">→ Placement Services</Link>
            <a href="/#services" className="sidebar-link sidebar-sub-link">→ Staffing Services</a>
            <a href="/#services" className="sidebar-link sidebar-sub-link">→ Software Development</a>
            <a href="/#services" className="sidebar-link sidebar-sub-link">→ Bootcamp Training</a>
          </div>

          <a href="/#refer" className="sidebar-link">🎁 Refer &amp; Earn</a>
          <Link to="/about" className="sidebar-link">ℹ️ About</Link>
          <a href="/#career" className="sidebar-link">💼 Career</a>
          <a href="/#contact" className="sidebar-link">📬 Contact</a>
        </nav>

        {/* Sidebar Footer CTA */}
        <div className="sidebar-cta">
          <a href="/#contact" className="btn-sidebar-cta">Book Free Consultation</a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
