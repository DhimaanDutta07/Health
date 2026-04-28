import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

const CASE_STUDIES = [
  {
    id: 1,
    badge: '₹18 Lakh Case',
    badgeColor: '#E8001C',
    title: '₹18 Lakh Hospitalization. Structured Support. Successful Settlement.',
    situation: 'A client was admitted to a multi-speciality hospital with a critical condition. The total estimated bill crossed ₹18 lakh. While the policy coverage was sufficient, there were delays due to documentation gaps and coordination issues between the hospital and insurer.',
    challenges: [
      'Incomplete documentation submitted initially',
      'Lack of clarity on admissible expenses',
      'Delay in approval from insurer side',
      'Family under stress with rising bills',
    ],
    approach: [
      'Reviewed the entire case file and policy terms',
      'Coordinated directly with hospital TPA desk',
      'Structured documentation as per insurer requirements',
      'Ensured timely follow-ups and status tracking',
    ],
    outcome: 'The claim was processed and successfully settled, with minimal financial burden on the client.',
    insight: 'Even with the right policy, structured claim handling makes the difference.',
    icon: '🏥',
  },
  {
    id: 2,
    badge: 'Senior Citizen Case',
    badgeColor: '#F59E0B',
    title: 'Senior Citizen Case with Medical History — Smooth Claim Navigation',
    situation: 'A senior citizen client with pre-existing medical conditions required hospitalization. Such cases often face higher scrutiny, documentation checks, and possible partial approvals.',
    challenges: [
      'Medical history verification',
      'Policy clause interpretation',
      'Risk of deductions or delays',
      'Complex coordination with insurer',
    ],
    approach: [
      'Pre-verified policy coverage and conditions',
      'Guided family on exact documents required',
      'Ensured correct disclosure alignment',
      'Coordinated with insurer during processing',
    ],
    outcome: 'The claim was processed without major complications, ensuring a smooth experience for the family during a critical time.',
    insight: 'In senior citizen cases, clarity before and during claim is critical.',
    icon: '👴',
  },
  {
    id: 3,
    badge: 'Portability + Claim',
    badgeColor: '#0ABFA3',
    title: 'Right Policy Switch. Right Time. Claim Delivered When Needed.',
    situation: 'A client had an existing policy but faced low coverage, limited hospital network, and concerns about claim experience. They opted for policy portability with proper guidance.',
    challenges: [
      'Ensuring continuity benefits are retained',
      'Choosing a stronger insurer for long-term reliability',
      'Managing waiting periods and coverage structure',
      'Smooth transition without losing benefits',
    ],
    approach: [
      'Evaluated multiple insurers based on claim experience',
      'Structured portability without loss of benefits',
      'Guided client through transition process',
      'Aligned new policy with clients specific health profile',
    ],
    outcome: 'Within a few months, the client required hospitalization. The claim was handled smoothly under the new policy, validating the decision to switch.',
    insight: 'The right policy decision today directly impacts claim experience tomorrow.',
    icon: '🔄',
  },
];

const AGENCY_CODES = [
  { insurer: 'Care Health', name: 'Rajat Kumar', code: '20577513' },
  { insurer: 'Niva Bupa', name: 'Ramesh Kumar', code: 'DEL0131511' },
  { insurer: 'HDFC Ergo', name: 'Rajat Kumar', code: '200258209132' },
  { insurer: 'ICICI Lombard', name: 'Dolly Kumar', code: 'ILG54035' },
  { insurer: 'Star Health', name: 'Dolly Kumar', code: 'BA0000137413' },
];

export default function ClaimStories() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    setTimeout(() => {
      document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    }, 100);
    return () => observer.disconnect();
  }, []);

  const handleBookCall = () => window.open('https://cal.com/insure-well-6wcyz0/30min', '_blank');

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg,var(--navy) 0%,#1A3A7A 55%,#0F3460 100%)',
        minHeight: '60vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none'
        }}></div>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem', textAlign: 'center', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
            fontSize: '0.78rem', fontWeight: 500, padding: '6px 16px', borderRadius: 50, marginBottom: '1.5rem'
          }}>
            <span style={{ width: 7, height: 7, background: '#4ADE80', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
            Real Cases · Real Outcomes · Real Families
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2.8rem,5.5vw,4.5rem)', lineHeight: 1.05, color: 'white', marginBottom: '1.2rem' }}>
            Claim Success Stories
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
            These are not hypothetical examples. These are real situations where structured support made the difference between confusion and a settled claim.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <button onClick={handleBookCall} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
              background: 'white', color: 'var(--navy)', borderRadius: 50, fontSize: '1rem',
              fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}><i className="fas fa-phone"></i> Get Claim Guidance</button>
            <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
              background: 'var(--wa)', color: 'white', borderRadius: 50, fontSize: '1rem', fontWeight: 700, textDecoration: 'none'
            }}><i className="fab fa-whatsapp"></i> Talk on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-anim>
            <div className="section-label">🧾 Case Studies</div>
            <h2 className="section-title">Real Situations. Real Outcomes.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Each case below represents a moment where our involvement made a measurable difference.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {CASE_STUDIES.map((cs, idx) => (
              <div key={cs.id} data-anim style={{
                background: 'white', borderRadius: 28, overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(15,37,87,0.08)', border: '1px solid var(--border)'
              }}>
                {/* Case Header */}
                <div style={{
                  background: `linear-gradient(135deg,var(--navy),#1A3A7A)`,
                  padding: '2.5rem 3rem', position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', top: -30, right: -30, fontSize: '7rem', opacity: 0.08 }}>{cs.icon}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{
                      background: cs.badgeColor, color: 'white', fontSize: '0.72rem', fontWeight: 700,
                      padding: '4px 14px', borderRadius: 50, letterSpacing: '0.5px'
                    }}>CASE {idx + 1}</span>
                    <span style={{
                      background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.72rem', fontWeight: 600,
                      padding: '4px 14px', borderRadius: 50
                    }}>{cs.badge}</span>
                  </div>
                  <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', color: 'white', lineHeight: 1.3 }}>{cs.title}</h3>
                </div>

                {/* Case Body */}
                <div style={{ padding: '2.5rem 3rem' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: '0.8rem' }}>Situation</h4>
                    <p style={{ color: 'var(--ink)', lineHeight: 1.8, fontSize: '0.97rem' }}>{cs.situation}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="case-2col">
                    <div>
                      <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#E8001C', letterSpacing: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>Challenges</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {cs.challenges.map((c, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--ink)' }}>
                            <div style={{ width: 6, height: 6, background: '#E8001C', borderRadius: '50%', flexShrink: 0, marginTop: 7 }}></div>
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>Our Approach</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {cs.approach.map((a, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--ink)' }}>
                            <div style={{ width: 20, height: 20, background: 'var(--teal-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <i className="fas fa-check" style={{ fontSize: '0.5rem', color: 'var(--teal)' }}></i>
                            </div>
                            {a}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="case-2col">
                    <div style={{ background: 'var(--teal-light)', borderRadius: 16, padding: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: '0.6rem' }}>✅ Outcome</h4>
                      <p style={{ color: 'var(--navy)', fontWeight: 600, lineHeight: 1.7, fontSize: '0.95rem' }}>{cs.outcome}</p>
                    </div>
                    <div style={{ background: '#FFF8E7', border: '1px solid #F59E0B22', borderRadius: 16, padding: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#D97706', letterSpacing: 1, textTransform: 'uppercase', marginBottom: '0.6rem' }}>💡 Key Insight</h4>
                      <p style={{ color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.7, fontSize: '0.95rem' }}>{cs.insight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:700px){.case-2col{grid-template-columns:1fr!important;} .case-body-pad{padding:1.5rem!important;}}`}</style>
      </section>

      {/* AGENCY CODES */}
      <div style={{ background: 'var(--navy)', padding: '2rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Our Agency Codes</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {AGENCY_CODES.map(({ insurer, name, code }) => (
              <div key={code} style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8, padding: '7px 16px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)'
              }}>
                <span style={{ color: 'var(--teal)', fontWeight: 700 }}>{insurer}</span>
                {' · '}{name}{' · '}<span style={{ fontFamily: 'monospace', color: 'white' }}>{code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container">
          <div data-anim>
            <div className="section-label" style={{ margin: '0 auto 1rem' }}>✦ Don't wait for a claim situation</div>
            <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 1rem' }}>
              Get Clarity Today.<br /><span style={{ color: 'var(--teal)' }}>Avoid Confusion Tomorrow.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Whether you're choosing a policy or navigating an active claim, our team is here to guide you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleBookCall} style={{
                padding: '15px 32px', background: 'var(--navy)', color: 'white', border: 'none',
                borderRadius: 50, fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10
              }}><i className="fas fa-phone"></i> Book Free Consultation</button>
              <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
                padding: '15px 32px', background: 'var(--wa)', color: 'white', borderRadius: 50,
                fontSize: '1rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10
              }}><i className="fab fa-whatsapp"></i> Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}