import { useState, useRef, useEffect } from 'react';
import ProfileDropdown from './ProfileDropdown';
import WhatsAppButton from './WhatsAppButton';

function ToolsDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            <button
                className="btn-primary"
                onClick={() => setOpen(prev => !prev)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '9px 20px',
                    background: 'var(--navy)',
                    color: 'white',
                    borderRadius: 50,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Tools
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        transition: 'transform 0.2s ease',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                >
                    <path d="M2 4L6 8L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    background: 'white',
                    borderRadius: 12,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    minWidth: 160,
                    overflow: 'hidden',
                    zIndex: 1000,
                    border: '1px solid rgba(0,0,0,0.07)'
                }}>
                    <button
                        onClick={() => {
                            window.location.href = '/tools/calculator';
                            setOpen(false);
                        }}  
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            width: '100%',
                            padding: '11px 16px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            color: 'var(--navy)',
                            textAlign: 'left',
                            transition: 'background 0.15s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#f5f7fa'}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M7 8h10M7 12h4M7 16h4M15 12h2M15 16h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        HLV Calculator
                    </button>
                    {/* Add more tool items here */}
                </div>
            )}
        </div>
    );
}

export default function NavActions({ logged, onLogout, onHamburger }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {logged ? (
                <>
                    <ProfileDropdown onLogout={onLogout} />
                    <WhatsAppButton />
                </>
            ) : (
                <>
                    <ToolsDropdown />
                    <WhatsAppButton />
                </>
            )}
            <button
                className="hamburger"
                onClick={onHamburger}
                style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: 'var(--navy)' }}
            >
                <i className="fas fa-bars" />
            </button>
        </div>
    );
}