import { Link } from 'react-router-dom';
import { dropdownItemStyle, hoverHandlers } from './navbar.styles';

export default function ProfileDropdown({ onLogout }) {
    return (
        <div className="profile-wrap" style={{ position: 'relative' }}>
            <div className="profile-btn" style={{
                width: 42, height: 42, borderRadius: '50%', cursor: 'pointer',
                background: 'linear-gradient(135deg,var(--navy),var(--teal))',
                color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', border: '2px solid white', boxShadow: '0 2px 8px rgba(15,37,87,0.15)',
            }}>
                <i className="fas fa-user" />
            </div>

            <div className="profile-dropdown" style={{
                position: 'absolute', top: '100%', right: 0, marginTop: 8,
                background: 'white', border: '1px solid var(--border)', borderRadius: 14,
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)', width: 180, padding: '8px 0',
            }}>
                <Link to="/dashboard" style={dropdownItemStyle} {...hoverHandlers}>
                    <i className="fas fa-tachometer-alt" style={{ color: 'var(--teal)', width: 18 }} />
                    Dashboard
                </Link>
                <Link to="/profile" style={dropdownItemStyle} {...hoverHandlers}>
                    <i className="fa-solid fa-pencil" style={{ color: 'var(--teal)', width: 18 }} />
                    Edit Profile
                </Link>
                <button
                    onClick={onLogout}
                    style={{ ...dropdownItemStyle, width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    {...hoverHandlers}
                >
                    <i className="fas fa-sign-out-alt" style={{ color: 'var(--teal)', width: 18 }} />
                    Logout
                </button>
            </div>
        </div>
    );
}