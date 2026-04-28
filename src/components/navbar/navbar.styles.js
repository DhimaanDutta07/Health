export const navbarStyles = {
    nav: {
        position: 'sticky', top: 0, zIndex: 1000,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        animation: 'slideDown 0.6s ease',
    },
    inner: {
        maxWidth: 1280, margin: '0 auto', padding: '0 2rem',
        height: 70, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '2rem',
    },
};

export const dropdownItemStyle = {
    padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10,
    color: 'var(--ink)', textDecoration: 'none', fontSize: '0.93rem',
    transition: 'background 0.2s',
};

export const hoverHandlers = {
    onMouseEnter: e => e.currentTarget.style.background = 'var(--teal-light)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
};