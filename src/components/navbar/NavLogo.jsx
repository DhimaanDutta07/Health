import { Link } from 'react-router-dom';

export default function NavLogo({ logged }) {
    return (
        <Link to={logged ? '/dashboard' : '/'} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img
                src="logo-insurewell.png"
                alt="Insurewell Advisory"
                style={{ width: 46, height: 46, objectFit: 'contain', borderRadius: 10 }}
            />
            <div>
                <h1 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.1 }}>
                    Health InsuranceWale
                </h1>
                <p style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>by Insurewell Advisory</p>
            </div>
        </Link>
    );
}