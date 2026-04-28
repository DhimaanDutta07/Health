import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

export default function About() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    setTimeout(() => {
      document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    }, 100);
    return () => observer.disconnect();
  }, []);

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
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
            fontSize: '0.82rem', fontWeight: 500, padding: '8px 22px', borderRadius: 50, marginBottom: '1.5rem'
          }}>
            <span style={{ width: 7, height: 7, background: '#4ADE80', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
            Since 2018 · IRDAI Licensed
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2.8rem,6vw,4.5rem)', lineHeight: 1.05, color: 'white', marginBottom: '1.2rem' }}>
            Our Story
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: 640, margin: '0 auto', lineHeight: 1.75 }}>
            In health insurance, the difference is not in the policy you buy—<br />
            it is in the experience you have when you need it the most.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div data-anim style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--ink)', marginBottom: '3rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Over the years, we observed a consistent gap. Policies were sold with ease, but during claims, individuals were often left navigating complexity on their own. What appeared simple at the time of purchase became uncertain, stressful, and at times overwhelming when it truly mattered.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                That insight shaped our approach. <strong>HealthInsuranceWale</strong> was built on a clear philosophy — insurance advice must be guided by claim outcomes, not just product features.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Powered by <strong>Insurewell Advisory</strong>, we focus on clarity, structure, and long-term support. Every recommendation is made with one question in mind: <em>Will this policy work seamlessly when the client needs it?</em>
              </p>
              <p>
                Over time, we have guided <strong>5,000+ families</strong>, helping them make informed decisions and supporting them through critical moments. Our role does not end at policy selection. In many ways, that is where our responsibility begins.
              </p>
            </div>

            {/* Real Case Highlight */}
            <div data-anim style={{
              background: 'white', borderRadius: 24, padding: '2.5rem', border: '1px solid var(--border)',
              boxShadow: '0 20px 50px rgba(15,37,87,0.07)', marginBottom: '3rem', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,var(--teal),var(--navy))' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.2rem' }}>
                <div style={{ fontSize: '1.5rem' }}>🧾</div>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.3rem', color: 'var(--navy)' }}>A Real Situation. A Real Outcome.</h3>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                One of our clients faced a hospitalization with a total bill exceeding <strong>₹18 lakh</strong>. The case initially encountered delays due to documentation gaps and coordination issues between the hospital and insurer. At that stage, the difference was not the policy — it was the support system behind it.
              </p>
              <div style={{ background: 'var(--teal-light)', borderRadius: 16, padding: '1.5rem', marginBottom: '1.2rem' }}>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.8rem', fontSize: '0.9rem' }}>Our team stepped in to:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Align documentation with insurer requirements',
                    'Coordinate directly with hospital TPA desk',
                    'Ensure timely communication and follow-ups',
                    'Guide the client through every stage of the process'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--ink)' }}>
                      <div style={{ width: 20, height: 20, background: 'var(--teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <i className="fas fa-check" style={{ fontSize: '0.55rem', color: 'white' }}></i>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--navy)', fontWeight: 700 }}>
                The result — the claim was successfully processed and settled.
              </p>
            </div>

            {/* What We Stand For */}
            <div data-anim style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>What We Stand For</h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We believe health insurance should deliver certainty in uncertain moments.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem' }} className="stand-grid">
                {[
                  { icon: 'fa-file-contract', title: 'Not just a policy document', text: 'Every clause explained in plain language before you sign.' },
                  { icon: 'fa-search-dollar', title: 'Not just a premium comparison', text: 'We evaluate claim settlement, hospital networks, and real-world performance.' },
                  { icon: 'fa-hands-helping', title: 'A reliable support system', text: 'We stand with you when it matters the most — during your claim.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'white', borderRadius: 20, padding: '1.8rem', border: '1px solid var(--border)',
                    transition: 'all 0.3s'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(15,37,87,0.1)'; e.currentTarget.style.borderColor = 'var(--teal)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    <div style={{ width: 44, height: 44, background: 'var(--teal-light)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <style>{`.stand-grid{@media(max-width:900px){grid-template-columns:1fr!important}}`}</style>
            </div>

            {/* Closing Thought */}
            <div data-anim style={{
              background: 'linear-gradient(135deg,var(--navy),#1A3A7A)', borderRadius: 24,
              padding: '3rem', color: 'white', textAlign: 'center', marginBottom: '3rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔚</div>
              <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.4rem', marginBottom: '1.2rem', lineHeight: 1.5 }}>
                At HealthInsuranceWale, we don't position ourselves as sellers of insurance.<br />
                We position ourselves as partners in your claim journey.
              </h3>
              <div style={{ width: 60, height: 2, background: 'var(--teal)', margin: '1.5rem auto' }}></div>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
                <strong style={{ color: 'white' }}>Rajat Kumar & Dolly Kumar</strong><br />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)' }}>Founders – Insurewell Advisory · HealthInsuranceWale.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDERS */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-anim>
            <div className="section-label">✦ The people behind the promise</div>
            <h2 className="section-title">Meet the Founders</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2.5rem', maxWidth: 820, margin: '0 auto' }}>
            {[
              { img: 'https://picsum.photos/id/1005/600/600', name: 'Rajat Kumar', role: 'Founder & Principal Advisor', desc: '20+ years in health insurance advisory. Specialises in claim structuring and high-value case management.' },
              { img: 'https://picsum.photos/id/1011/600/600', name: 'Dolly Kumar', role: 'Senior Health Insurance Advisor', desc: 'Expert in senior citizen plans, pre-existing condition cases, and policy portability guidance.' },
            ].map(person => (
              <div key={person.name} data-anim style={{
                background: 'var(--white)', borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(15,37,87,0.08)', border: '1px solid var(--border)',
                transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 30px 70px rgba(15,37,87,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 20px 50px rgba(15,37,87,0.08)'; }}
              >
                <div style={{ height: 280, overflow: 'hidden' }}>
                  <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.8rem' }}>
                  <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 4 }}>{person.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{person.role}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.65 }}>{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}