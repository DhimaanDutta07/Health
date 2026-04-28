import { Link } from 'react-router-dom';

const WA_SVG = (
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.572a.5.5 0 0 0 .612.612l5.714-1.477A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.366l-.363-.214-3.766.972.992-3.663-.234-.374A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
);

const AGENCY_CODES = [
  { insurer: 'Care Health', name: 'Rajat Kumar', code: '20577513' },
  { insurer: 'Niva Bupa', name: 'Ramesh Kumar', code: 'DEL0131511' },
  { insurer: 'HDFC Ergo', name: 'Rajat Kumar', code: '200258209132' },
  { insurer: 'ICICI Lombard', name: 'Dolly Kumar', code: 'ILG54035' },
  { insurer: 'Star Health', name: 'Dolly Kumar', code: 'BA0000137413' },
];

export default function Footer({ onOpenModal }) {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.7)', padding: '4rem 0 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <img src="/logo-insurewell.png" alt="Insurewell" style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 8 }} />
              <div>
                <h1 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', fontFamily: "'DM Serif Display',serif" }}>Health Insurance Wale</h1>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>by Insurewell Advisory</p>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 260 }}>
              Honest. Simple. Secure. India's most trusted health insurance advisory — helping families find the right coverage and navigate claims since 2018.
            </p>
            <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 38, height: 38, background: 'var(--wa)', borderRadius: 10, marginTop: '1.2rem',
              transition: 'transform 0.2s'
            }}>
              <span style={{ width: 20, height: 20, fill: 'white', display: 'flex' }}>{WA_SVG}</span>
            </a>
          </div>

          <FooterCol title="Company" links={[
            { label: 'About Us', to: '/about' },
            { label: 'Claim Stories', to: '/claim-stories' },
            { label: 'Careers', to: '/careers' },
            { label: 'Blog', to: '/' },
          ]} />
          <FooterCol title="Services" links={[
            { label: 'Individual Plans', to: '/' },
            { label: 'Family Floater', to: '/' },
            { label: 'Senior Citizens', to: '/' },
            { label: 'Corporate Health', to: '/' },
          ]} />
          <div>
            <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>Support</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/claims" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem' }}>Claims Assistance</Link></li>
              <li>
                <button onClick={() => onOpenModal?.('call')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                  Free Consultation
                </button>
              </li>
              <li><a href="https://abha.gov.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem' }}>ABHA Govt</a></li>
              <li><a href="https://bimabharosa.irdai.gov.in/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem' }}>Bima Bharosa</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem' }}>Terms of Use</a></li>
            </ul>
          </div>
        </div>

        {/* Agency Codes */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2rem 0' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Agency Codes</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {AGENCY_CODES.map(({ insurer, name, code }) => (
              <div key={code} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '6px 14px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)'
              }}>
                <span style={{ color: 'var(--teal)', fontWeight: 600 }}>{insurer}</span>
                {' · '}{name}{' · '}<span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.75)' }}>{code}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IRDAI Disclaimer */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 0' }}>
          <p style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.8 }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>IRDAI Disclaimer: </span>
            HealthInsuranceWale.com is a platform powered by Insurewell Advisory for providing health insurance advisory services. We do not represent any specific insurance company. All insurance products are subject to terms, conditions, and exclusions as per the respective insurer. Please read policy documents carefully before purchase. Registered with IRDAI (License No: XXXXX).
          </p>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 0 2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)'
        }}>
          <span>© 2026 Insurewell Advisory · All Rights Reserved</span>
          <span>IRDAI Registration No. · CIN: U66000MH2018PTC000000</span>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:600px){ .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>{title}</h5>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {links.map(l => (
          <li key={l.label}>
            <Link to={l.to} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem' }}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}