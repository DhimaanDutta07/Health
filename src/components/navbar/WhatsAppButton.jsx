import { WA_SVG } from '../../assets/SVG';

export default function WhatsAppButton() {
    return (

        <a href="https://wa.me/919971466960"
            target="_blank" rel="noreferrer"
            style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '9px 18px', background: 'var(--wa)', color: 'white',
                borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
            }
            }
        >
            <span style={{ width: 18, height: 18, display: 'flex' }}>{WA_SVG}</span>
            Chat on WhatsApp
        </a >
    );
}