import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

function ClaimsPublic() {
  const handleBookCall = () => {
    window.open('https://cal.com/insure-well-6wcyz0/30min', '_blank');
  };
  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg,var(--navy) 0%,#1A3A7A 55%,#0F3460 100%)',
        minHeight: '70vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'
      }}>

        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none'
        }}></div>

        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
          alignItems: 'center', position: 'relative', zIndex: 1, width: '100%'
        }} className="claims-hero-inner">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)', color: 'white',
              fontSize: '0.78rem', fontWeight: 500, padding: '6px 16px', borderRadius: 50, marginBottom: '1.5rem'
            }}>
              <span style={{ width: 7, height: 7, background: '#4ADE80', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
              98.7% Claim Settlement Ratio · 24×7 Support
            </div>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.05, color: 'white', marginBottom: '1.2rem' }}>
              Claims that <span style={{ color: 'var(--teal)' }}>actually</span><br />get settled.<br /><span style={{ color: 'var(--teal)' }}>Fast.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 480 }}>
              From hospital admission to cashless approval to final settlement — we stay with you at every step. No running around. No stress. Just peace of mind.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button onClick={() => handleBookCall()} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'white', color: 'var(--navy)', borderRadius: 50, fontSize: '1rem',
                fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}><i className="fas fa-headset"></i> Speak to Claims Expert</button>
              <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'var(--wa)', color: 'white', borderRadius: 50, fontSize: '1rem', fontWeight: 700, textDecoration: 'none'
              }}><i className="fab fa-whatsapp"></i> WhatsApp Claims Help</a>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'white', fontSize: '1.1rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Average non-cash claim settlement time:<br />
              <strong style={{ fontSize: '2.8rem', color: 'var(--teal)' }}>30 minutes</strong>
            </p>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: 20, backdropFilter: 'blur(10px)' }}>
              <strong>10,000+</strong> claims successfully handled<br />
              <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Last year alone</span>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.claims-hero-inner{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '1rem 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'ticker 30s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(2)].map((_, loop) => (
            <span key={loop} style={{ display: 'contents' }}>
              {['✓ 98.7% Claim Settlement Ratio', '✓ Cashless at 10,000+ Hospitals', '✓ 24×7 Dedicated Claims Desk', '✓ Zero Paperwork Hassle'].map(text => (
                <span key={text} style={{ fontWeight: 600, color: 'var(--muted)', flexShrink: 0, padding: '0 1.5rem' }}>{text}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <div className="section-label">✦ Claims Assurance</div>
            <h2 className="section-title">How we make claims <span style={{ color: 'var(--teal)' }}>effortless</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>We don't just sell policies — we stand by you when it matters most.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '3.5rem' }} className="claims-3-grid">
            {[
              { num: '01', icon: 'fa-hospital', title: 'Admission Alert', text: 'Just inform us as soon as hospitalization happens. Our team coordinates directly with the hospital for cashless approval.' },
              { num: '02', icon: 'fa-file-medical', title: 'Instant Document Support', text: 'We guide you on exactly what documents are needed. Many customers get approval within 30–60 minutes.' },
              { num: '03', icon: 'fa-rupee-sign', title: 'Fast Settlement', text: 'Reimbursement claims are processed in an average of 4 days. We follow up relentlessly until you get your money.' },
            ].map(item => (
              <div key={item.num} style={{
                background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '3.5rem', color: 'var(--border)', lineHeight: 1, marginBottom: '1rem' }}>{item.num}</div>
                <div style={{ width: 48, height: 48, background: 'var(--teal-light)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: item.text }}></p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.claims-3-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CLAIMS STATS DETAILED */}
      <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3A7A)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--teal)', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.5rem' }}>✦ Claims Track Record</p>
            <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.8rem', color: 'white' }}>Our Claims Numbers</h3>
          </div>
          {/* Top row – summary */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {[
              { num: '1,539', label: 'Total Claims Filed' },
              { num: '₹2,19,51,665', label: 'Total Amount Processed' },
              { num: '₹1,94,47,018', label: 'Approved Claims Value' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2.4rem', fontWeight: 700, color: 'var(--teal)' }}>{num}</div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
          {/* Category breakdown */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }} className="claims-cat-grid">
            {[
              { icon: 'fa-hospital', label: 'Hospitalisation', count: 67, amount: '₹54,45,179', color: '#3B82F6' },
              { icon: 'fa-procedures', label: 'Day Care', count: 42, amount: '₹27,30,145', color: '#8B5CF6' },
              { icon: 'fa-heartbeat', label: 'Pre / Post', count: 528, amount: '₹10,72,773', color: '#EC4899' },
              { icon: 'fa-stethoscope', label: 'Health Checkup', count: 898, amount: '₹30,28,568', color: '#10B981' },
              { icon: 'fa-laptop-medical', label: 'HDC', count: 4, amount: '₹20,000', color: '#F59E0B' },
            ].map(({ icon, label, count, amount, color }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 16, padding: '1.2rem 1.8rem', textAlign: 'center', minWidth: 160,
                transition: 'all 0.3s'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = ''; }}
              >
                <div style={{ width: 40, height: 40, background: color + '30', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.8rem', color }}>
                  <i className={`fas ${icon}`}></i>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', lineHeight: 1.1 }}>{count}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.3rem' }}>{label}</div>
                <div style={{ fontSize: '0.85rem', color, fontWeight: 700 }}>{amount}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.claims-cat-grid{gap:0.7rem!important;}}`}</style>
      </div>

      {/* AGENCY CODES */}
      <div style={{ background: 'var(--navy)', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Our Agency Codes</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {[
              { insurer: 'Care Health', name: 'Rajat Kumar', code: '20577513' },
              { insurer: 'Niva Bupa', name: 'Ramesh Kumar', code: 'DEL0131511' },
              { insurer: 'HDFC Ergo', name: 'Rajat Kumar', code: '200258209132' },
              { insurer: 'ICICI Lombard', name: 'Dolly Kumar', code: 'ILG54035' },
              { insurer: 'Star Health', name: 'Dolly Kumar', code: 'BA0000137413' },
            ].map(({ insurer, name, code }) => (
              <div key={code} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '6px 14px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)'
              }}>
                <span style={{ color: 'var(--teal)', fontWeight: 700 }}>{insurer}</span>
                {' · '}{name}{' · '}<span style={{ fontFamily: 'monospace', color: 'white' }}>{code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="section" style={{ background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto' }}>
            Facing a claim? Don't worry.<br /><span style={{ color: 'var(--teal)' }}>We're here for you.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 520, margin: '1.5rem auto' }}>
            Call or WhatsApp our claims team right now. We'll guide you through every step.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <button onClick={() => handleBookCall()} style={{
              padding: '16px 32px', background: 'var(--navy)', color: 'white', border: 'none',
              borderRadius: 50, fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer'
            }}><i className="fas fa-phone"></i> Call Claims Helpline</button>
            <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
              padding: '16px 32px', background: 'var(--wa)', color: 'white', borderRadius: 50,
              fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10
            }}><i className="fab fa-whatsapp"></i> WhatsApp Claims Team</a>
          </div>
        </div>
      </section>
    </>
  );
}

function ClaimsLogged() {
  const [files, setFiles] = useState([]);
  const [form, setForm] = useState({ fullName: '', phone: '', policyNumber: '', insurer: '', claimType: '', claimCategory: '', totalBilledAmount: '', claimedAmount: '', description: '' });
  const fileInputRef = useRef();

  function handleFiles(fileList) {
    const newFiles = Array.from(fileList);
    setFiles(prev => [...prev, ...newFiles]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.claimType || !form.claimCategory || !form.totalBilledAmount || !form.claimedAmount || !form.description) {
      alert('Please fill all required fields.'); return;
    }
    alert(`✅ Claim submitted successfully!\n\nOur claims team will review your request within 2 hours.\n\nReference: CLM${Date.now().toString().slice(-6)}`);
  }

  const inputStyle = {
    width: '100%', padding: '13px 18px 13px 48px', border: '1.5px solid var(--border)',
    borderRadius: 12, fontSize: '1rem', outline: 'none', fontFamily: "'DM Sans',sans-serif",
    transition: 'border-color 0.2s', background: 'white'
  };
  const labelStyle = { display: 'block', fontWeight: 600, fontSize: '0.88rem', color: 'var(--navy)', marginBottom: 8 };

  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg,var(--navy) 0%,#1A3A7A 55%,#0F3460 100%)',
        minHeight: '45vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'
      }}>
        <div className="blob" style={{ width: 500, height: 500, background: 'var(--teal)', top: -150, right: -80 }}></div>
        <div className="blob" style={{ width: 350, height: 350, background: '#5B8DEF', bottom: -80, left: -40, animationDelay: '-3s' }}></div>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '0.82rem', fontWeight: 500, padding: '8px 22px', borderRadius: 50, marginBottom: '1.5rem' }}>
            <i className="fas fa-shield-alt"></i>&nbsp; 24×7 CLAIMS SUPPORT
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.05, color: 'white', marginBottom: '1rem' }}>Claims Made Easy</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>Our expert team is ready to handle your claim smoothly. Just fill the form below.</p>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: '4rem 0', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          {/* Step Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {['Your Details', 'Claim Info', 'Submit'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: i === 0 ? 'var(--teal)' : 'var(--border)',
                  color: i === 0 ? 'white' : 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.9rem'
                }}>{i + 1}</div>
                <span style={{ fontWeight: i === 0 ? 700 : 500, color: i === 0 ? 'var(--navy)' : 'var(--muted)', fontSize: '0.9rem' }}>{step}</span>
                {i < 2 && <div style={{ width: 40, height: 2, background: 'var(--border)' }}></div>}
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 24, padding: '3rem', boxShadow: '0 20px 50px rgba(15,37,87,0.08)' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="claims-form-grid">

                {/* Full Name */}
                <div>
                  <label style={labelStyle}>Full Name <span style={{ color: '#e11d48' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-user" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}></i>
                    <input type="text" style={inputStyle} placeholder="Enter your full name" value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))} />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone Number <span style={{ color: '#e11d48' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-phone" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}></i>
                    <input type="tel" style={inputStyle} placeholder="98765 43210" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                  </div>
                </div>

                {/* Policy Number */}
                <div>
                  <label style={labelStyle}>Policy Number</label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-file-alt" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}></i>
                    <input type="text" style={inputStyle} placeholder="POL123456789" value={form.policyNumber} onChange={e => setForm(p => ({ ...p, policyNumber: e.target.value }))} />
                  </div>
                </div>

                {/* Insurer */}
                <div>
                  <label style={labelStyle}>Insurance Company</label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-building" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', zIndex: 1 }}></i>
                    <select style={{ ...inputStyle, appearance: 'none' }} value={form.insurer} onChange={e => setForm(p => ({ ...p, insurer: e.target.value }))}>
                      <option value="">Select Company</option>
                      {['HDFC ERGO', 'Niva Bupa', 'Care Health', 'Star Health', 'ICICI Lombard', 'Others'].map(o => <option key={o} value={o.toLowerCase().replace(' ', '-')}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Claim Type */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={labelStyle}>Claim Type <span style={{ color: '#e11d48' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-clipboard-list" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', zIndex: 1 }}></i>
                    <select style={{ ...inputStyle, appearance: 'none' }} value={form.claimType} onChange={e => setForm(p => ({ ...p, claimType: e.target.value }))}>
                      <option value="">Select Claim Type</option>
                      <option>Cashless (Hospital directly bills insurance)</option>
                      <option>Reimbursement (You paid and want refund)</option>
                      <option>Pre-Authorization</option>
                      <option>Outpatient Treatment</option>
                      <option>Maternity Claim</option>
                      <option>Critical Illness Claim</option>
                    </select>
                  </div>
                </div>

                {/* Claim Category */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={labelStyle}>Claim Category <span style={{ color: '#e11d48' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-tags" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', zIndex: 1 }}></i>
                    <select style={{ ...inputStyle, appearance: 'none' }} value={form.claimCategory} onChange={e => setForm(p => ({ ...p, claimCategory: e.target.value }))}>
                      <option value="">Select Category</option>
                      {['Hospitalization', 'Daycare Procedure', 'Ambulance', 'Medicines / Pharmacy', 'Diagnostics / Tests', 'Doctor Consultation', 'Surgery', 'Maternity', 'Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Amounts */}
                <div>
                  <label style={labelStyle}>Total Billed Amount (₹) <span style={{ color: '#e11d48' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-indian-rupee-sign" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}></i>
                    <input type="number" style={inputStyle} placeholder="0" min="0" value={form.totalBilledAmount} onChange={e => setForm(p => ({ ...p, totalBilledAmount: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Claimed Amount (₹) <span style={{ color: '#e11d48' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-indian-rupee-sign" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}></i>
                    <input type="number" style={inputStyle} placeholder="0" min="0" value={form.claimedAmount} onChange={e => setForm(p => ({ ...p, claimedAmount: e.target.value }))} />
                  </div>
                </div>

                {/* Description */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={labelStyle}>Tell Us What Happened <span style={{ color: '#e11d48' }}>*</span></label>
                  <textarea style={{ ...inputStyle, padding: '13px 18px', minHeight: 120, resize: 'vertical' }} placeholder="Date of hospitalization, hospital name, diagnosis, treatment details..." value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
                </div>

                {/* Upload */}
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={labelStyle}>Supporting Documents (Max 10MB total)</label>
                  <div onClick={() => fileInputRef.current.click()}
                    onDragOver={e => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.background = 'var(--teal-light)'; }}
                    onDragLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = '#fafafa'; }}
                    onDrop={e => { e.preventDefault(); handleFiles(e.dataTransfer.files); e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = '#fafafa'; }}
                    style={{
                      border: '2px dashed var(--border)', borderRadius: 16, padding: '2.5rem',
                      textAlign: 'center', cursor: 'pointer', background: '#fafafa', transition: 'all 0.3s'
                    }}>
                    <i className="fas fa-cloud-upload-alt" style={{ fontSize: '2rem', color: 'var(--muted)', marginBottom: '0.5rem' }}></i>
                    <p><strong>Click to upload</strong> or drag & drop files here</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>PDF, JPG, JPEG, PNG • Maximum 10MB total</p>
                    <input ref={fileInputRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png" style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
                  </div>
                  {files.length > 0 && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {files.map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--teal-light)', borderRadius: 10, padding: '10px 16px' }}>
                          <i className="fas fa-file" style={{ color: 'var(--teal)' }}></i>
                          <span style={{ flex: 1, fontSize: '0.9rem' }}>{f.name}</span>
                          <button type="button" onClick={() => setFiles(p => p.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><i className="fas fa-times"></i></button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" style={{
                width: '100%', marginTop: '2rem', padding: '18px',
                background: 'linear-gradient(135deg,var(--navy),var(--navy-mid))',
                color: 'white', border: 'none', borderRadius: 16, fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.25s'
              }}>Submit Claim Request →</button>
            </form>

            <div style={{
              marginTop: '2rem', background: 'var(--teal-light)', borderRadius: 16,
              padding: '1.5rem', fontSize: '0.9rem', lineHeight: 1.8
            }}>
              <strong>What happens next?</strong><br /><br />
              • Our claims team reviews your request within 2 hours<br />
              • We will contact you for any additional documents<br />
              • Dedicated support till your claim is settled
            </div>
          </div>
        </div>
        <style>{`@media(max-width:700px){.claims-form-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}

export default function Claims() {
  const { isLoggedIn } = useAuthStore();
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <ClaimsLogged /> : <ClaimsPublic />}
      <Footer />
      <WAFloat />
    </>
  );
}