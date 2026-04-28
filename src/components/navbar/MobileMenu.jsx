import { Link } from 'react-router-dom';

export default function MobileMenu({ open, logged, onClose, onLogout, onOpenModal }) {
    const close = (fn) => () => { fn?.(); onClose(); };

    return (
        <div className={`mobile-menu ${open ? 'open' : ''}`}>
            <button className="mobile-close" onClick={onClose}>×</button>
            <Link to={logged ? '/dashboard' : '/'} onClick={onClose}>Home</Link>
            <Link to="/about" onClick={onClose}>About</Link>
            <Link to="/claims" onClick={onClose}>Claims</Link>
            <Link to="/claim-stories" onClick={onClose}>Claim Stories</Link>
            <Link to="/careers" onClick={onClose}>Careers</Link>
            {logged
                ? <button onClick={close(onLogout)}>Logout</button>
                : <button onClick={close(() => onOpenModal?.('call'))}>📞 Book a Free Call</button>
            }
            <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{ color: 'var(--wa)' }}>
                💬 Chat on WhatsApp
            </a>
        </div>
    );
}