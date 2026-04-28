import { Link } from 'react-router-dom';

export default function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            style={{ textDecoration: 'none', color: 'var(--ink)', fontSize: '0.9rem', fontWeight: 500, position: 'relative', paddingBottom: 3 }}
            onMouseEnter={e => e.currentTarget.querySelector('.underline').style.width = '100%'}
            onMouseLeave={e => e.currentTarget.querySelector('.underline').style.width = '0'}
        >
            {children}
            <span className="underline" style={{
                position: 'absolute', bottom: 0, left: 0,
                width: 0, height: 2, background: 'var(--teal)', transition: 'width 0.3s ease',
            }} />
        </Link>
    );
}