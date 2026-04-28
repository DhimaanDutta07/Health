import NavLink from "./Navlink";

const LINKS = [
    { label: 'Home', to: null },
    { label: 'About', to: '/about' },
    { label: 'Claims', to: '/claims' },
    { label: 'Claim Stories', to: '/claim-stories' },
    { label: 'Careers', to: '/careers' },
];

export default function NavLinks({ logged }) {
    return (
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="nav-links-desktop">
            {LINKS.map(({ label, to }) => (
                <li key={label}>
                    <NavLink to={to ?? (logged ? '/home' : '/')}>
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}