import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import CalcFloat from '../components/CalcFloat';
import useAuthStore from '../store/auth.store';

const WA_SVG = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.572a.5.5 0 0 0 .612.612l5.714-1.477A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.366l-.363-.214-3.766.972.992-3.663-.234-.374A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const TESTIMONIALS = [
  { id: 1, stars: '★★★★★', tag: 'Delhi', text: '"Finally got a plan that covers my pre-existing diabetes without a 4-year wait. The team was honest from day one — best decision ever!"', img: 'https://picsum.photos/id/64/64/64', name: 'Ramesh Sharma', role: 'Software Engineer, Noida' },
  { id: 2, stars: '★★★★★', tag: 'Mumbai', text: '"Claim settled in 4 days for my wife\'s surgery. No paperwork headache. The advisor guided us through every step at the hospital."', img: 'https://picsum.photos/id/1005/64/64', name: 'Priya Patel', role: 'Teacher, Mumbai' },
  { id: 3, stars: '★★★★★', tag: 'Bangalore', text: '"Compared 18 plans in one call. Saved ₹42,000 yearly and got better coverage. They even told me not to buy riders I didn\'t need!"', img: 'https://picsum.photos/id/201/64/64', name: 'Arjun Rao', role: 'Business Owner, Bangalore' },
  { id: 4, stars: '★★★★★', tag: 'Chennai', text: '"Policy issued in just 1 day! Every clause explained clearly. Finally a broker who actually puts the customer first."', img: 'https://picsum.photos/id/300/64/64', name: 'Suresh Gupta', role: 'Retired Banker, Chennai' },
  { id: 5, stars: '★★★★★', tag: 'Hyderabad', text: '"Saved ₹35,000 on premium while getting superior coverage for my parents. Super transparent team — no hidden surprises."', img: 'https://picsum.photos/id/1009/64/64', name: 'Meena Iyer', role: 'Homemaker, Hyderabad' },
  { id: 6, stars: '★★★★★', tag: 'Kolkata', text: '"During my father\'s emergency, the claims team handled everything. Cashless approval in 25 minutes. Absolute lifesaver."', img: 'https://picsum.photos/id/870/64/64', name: 'Anil Verma', role: 'Business Owner, Kolkata' },
];

export default function Home() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    setTimeout(() => {
      document.querySelectorAll('[data-anim], .process-card, .testi-card, .check-item').forEach(el => {
        observer.observe(el);
      });
      document.querySelectorAll('.process-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.12}s`;
      });
      document.querySelectorAll('.testi-card').forEach((card, i) => {
        card.style.transitionDelay = `${(i % 3) * 0.1}s`;
      });
      document.querySelectorAll('.check-item').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.08}s`;
      });
    }, 100);
    return () => observer.disconnect();
  }, []);
  const handleBookCall = () => {
    window.open('https://cal.com/insure-well-6wcyz0/30min', '_blank');
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg,var(--navy) 0%,#1A3A7A 55%,#0F3460 100%)',
        minHeight: '92vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center'
      }}>

        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0
        }}></div>

        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
          alignItems: 'center', position: 'relative', zIndex: 1, width: '100%'
        }} className="hero-inner-grid">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)', color: 'white',
              fontSize: '0.78rem', fontWeight: 500, padding: '6px 16px', borderRadius: 50,
              marginBottom: '1.5rem', animation: 'fadeUp 0.7s 0.2s both'
            }}>
              <span style={{ width: 7, height: 7, background: '#4ADE80', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
              IRDAI Approved · Trusted by 10,000+ Families
            </div>

            <h2 style={{
              fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2.4rem,5vw,4rem)',
              lineHeight: 1.1, color: 'white', marginBottom: '1.2rem',
              animation: 'fadeUp 0.7s 0.35s both'
            }}>
              Insurance Tab Kaam Aata Hai<br /><span style={{ color: 'var(--teal)' }}>Jab Claim Milta Hai.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 480, animation: 'fadeUp 0.7s 0.5s both' }}>
              At HealthInsuranceWale, we don't just help you choose a policy — we ensure you are supported at every step during claims.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, animation: 'fadeUp 0.7s 0.65s both' }}>
              <button onClick={() => handleBookCall()} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'white', color: 'var(--navy)', borderRadius: 50, fontSize: '1rem',
                fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.25s'
              }}>
                <i className="fas fa-headset"></i> Get Claim Guidance
              </button>
              <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'var(--wa)', color: 'white', borderRadius: 50, fontSize: '1rem',
                fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)'
              }}>
                <WA_SVG width="22" height="22" fill="white" /> Talk on WhatsApp
              </a>
            </div>

              <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', animation: 'fadeUp 0.7s 0.8s both', flexWrap: 'wrap' }}>
                <div><div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white' }}>5K+</div><div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Families Guided</div></div>
                <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }}></div>
                <div><div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white' }}>₹6 Cr+</div><div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Claims Assisted</div></div>
                <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }}></div>
                <div><div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white' }}>₹0</div><div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Consultation Fee</div></div>
              </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', animation: 'fadeLeft 0.8s 0.4s both' }} className="hero-card-wrap">
            <div style={{
              background: 'rgba(255,255,255,0.97)', borderRadius: 24, padding: '2rem',
              maxWidth: 340, width: '100%', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', position: 'relative'
            }}>
              <div style={{
                position: 'absolute', top: -12, right: 20, background: 'var(--gold)', color: 'var(--ink)',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', padding: '5px 14px', borderRadius: 50
              }}>✦ Most Recommended</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>Get your personalised plan</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>Cashless at 10,000+ hospitals · Honest advice · Zero pressure</p>
              <div style={{ margin: '1.2rem 0' }}>
                {[['fa-shield-alt', 'No room rent capping or co-pay'], ['fa-hospital', '10,000+ cashless network hospitals'], ['fa-bolt', 'Policy issued within 24 hours'], ['fa-headset', '24×7 claims & support team']].map(([icon, text]) => (
                  <div key={icon} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '0.83rem', color: 'var(--ink)' }}>
                    <div style={{ width: 28, height: 28, background: 'var(--teal-light)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', fontSize: '0.8rem', flexShrink: 0 }}>
                      <i className={`fas ${icon}`}></i>
                    </div>
                    {text}
                  </div>
                ))}
              </div>
              <button onClick={() => handleBookCall()} style={{
                width: '100%', padding: 14, background: 'linear-gradient(135deg,var(--navy),var(--navy-mid))',
                color: 'white', border: 'none', borderRadius: 14, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', marginTop: '1rem'
              }}>Get your free quote in 2 min →</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: '1rem' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>4.9/5 · 8,500+ Google reviews</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeLeft { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
          @media(max-width:900px){.hero-inner-grid{grid-template-columns:1fr!important}.hero-card-wrap{display:none!important}}
        `}</style>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '1rem 0', overflow: 'hidden' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'flex', gap: '4rem', alignItems: 'center', animation: 'scroll 28s linear infinite', width: 'max-content'
          }}>
            {[...Array(2)].map((_, loop) => (
              <span key={loop} style={{ display: 'contents' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/HDFC-Ergo-logo.png" alt="HDFC ERGO" style={{ height: 56, objectFit: 'contain', filter: 'grayscale(0.6)', opacity: 0.8 }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Niva_Bupa_Logo.jpg" alt="Niva Bupa" style={{ height: 56, objectFit: 'contain', filter: 'grayscale(0.6)', opacity: 0.8 }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png" alt="Care Health" style={{ height: 56, objectFit: 'contain', filter: 'grayscale(0.6)', opacity: 0.8 }} />
                <svg height="56" viewBox="0 0 200 40"><rect width="200" height="40" rx="6" fill="#E8001C" opacity="0.1" /><text x="10" y="27" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="#E8001C">★ Star Health</text></svg>
                <svg height="56" viewBox="0 0 220 40"><rect width="220" height="40" rx="6" fill="#F58220" opacity="0.1" /><text x="10" y="27" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#F58220">ICICI Lombard</text></svg>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }} data-anim>
            <div className="section-label">✦ How it works</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>From confusion to confidence<br />in 3 simple steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '3.5rem' }} className="process-grid-wrap">
            {[
              { num: '01', icon: 'fa-user-shield', title: 'Expert Guidance', text: "Our IRDAI-certified advisors understand your health needs and budget — with zero sales pressure and completely honest recommendations." },
              { num: '02', icon: 'fa-clipboard-check', title: 'Compare & Decide', text: "We compare plans across 15+ insurers, explain every clause in plain language, and get your policy issued quickly." },
              { num: '03', icon: 'fa-headset', title: 'Lifetime Support', text: "24×7 dedicated team for renewals, claims assistance and any question — we don't vanish after the sale." },
            ].map((item) => (
              <div key={item.num} className="process-card">
                <div className="process-num">{item.num}</div>
                <div className="process-icon"><i className={`fas ${item.icon}`}></i></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .process-card{background:var(--white);border:1px solid var(--border);border-radius:20px;padding:2rem;position:relative;overflow:hidden;transition:all 0.35s cubic-bezier(0.25,0.46,0.45,0.94);opacity:0;transform:translateY(30px);}
          .process-card.visible{opacity:1;transform:translateY(0);}
          .process-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--navy),var(--teal));transform:scaleX(0);transform-origin:left;transition:transform 0.4s ease;}
          .process-card:hover{transform:translateY(-8px)!important;box-shadow:0 20px 40px rgba(15,37,87,0.12);border-color:transparent;}
          .process-card:hover::before{transform:scaleX(1);}
          .process-num{font-family:'DM Serif Display',serif;font-size:3.5rem;color:var(--border);line-height:1;margin-bottom:1rem;transition:color 0.3s;}
          .process-card:hover .process-num{color:var(--teal);}
          .process-icon{width:48px;height:48px;background:var(--teal-light);border-radius:14px;display:flex;align-items:center;justify-content:center;color:var(--teal);font-size:1.2rem;margin-bottom:1rem;}
          .process-card h3{font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:0.5rem;}
          .process-card p{font-size:0.88rem;color:var(--muted);line-height:1.65;}
          @media(max-width:900px){.process-grid-wrap{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ABOUT HEALTH INSURANCE */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid-wrap">
            <div data-anim>
              <div className="section-label">✦ Why it matters</div>
              <h2 className="section-title">What is Health Insurance &amp; why do you need it?</h2>
              <p className="section-sub">Health insurance protects you from the financial shock of medical emergencies — covering hospitalisation, daycare procedures, and more.</p>
              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  ['01', 'Cashless Hospital Treatment', 'Get treated at 10,000+ network hospitals without paying a rupee upfront.'],
                  ['02', 'Tax Benefits under Section 80D', 'Save up to ₹25,000 every year on your premium payments.'],
                  ['03', 'Protect Your Life Savings', 'No need to liquidate assets or take loans during a health crisis.'],
                ].map(([num, title, text]) => (
                  <div key={num} style={{ display: 'flex', gap: '1.2rem' }}>
                    <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2.2rem', color: 'var(--teal)', opacity: 0.5, lineHeight: 1, flexShrink: 0, width: 40 }}>{num}</div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{title}</h4>
                      <p style={{ fontSize: '0.87rem', color: 'var(--muted)', lineHeight: 1.6 }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-anim data-delay="2">
              <div style={{ background: 'var(--navy)', borderRadius: 24, padding: '2.5rem', color: 'white' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', opacity: 0.9 }}>Key things to look for in a great health plan</h3>
                {['No room rent capping', 'No co-pay clause', 'Shorter pre-existing disease waiting period', 'Restoration benefit & unlimited sum insured', 'Modern treatment & AYUSH coverage', 'High claim settlement ratio (95%+)', 'Global treatment coverage option'].map((item, i) => (
                  <div key={i} className="check-item" style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '0.88rem', lineHeight: 1.5, opacity: 0, transform: 'translateX(-15px)', transition: 'all 0.4s ease' }}>
                    <div style={{ width: 22, height: 22, background: 'var(--teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.65rem', marginTop: 1 }}>
                      <i className="fas fa-check" style={{ fontSize: '0.6rem' }}></i>
                    </div>
                    {item}
                  </div>
                ))}
                <div style={{ marginTop: '1.5rem' }}>
                  <button onClick={() => handleBookCall()} style={{
                    width: '100%', padding: 14, background: 'var(--teal)', color: 'white',
                    border: 'none', borderRadius: 14, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer'
                  }}>Get expert advice free →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .check-item.visible{opacity:1!important;transform:translateX(0)!important;}
          @media(max-width:900px){.about-grid-wrap{grid-template-columns:1fr!important;}}
        `}</style>
      </section>
      {/* PORTABILITY SECTION */}
      <section className="section" style={{ background: 'var(--cream)', padding: '4rem 0' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }} data-anim>
            <div className="section-label">✦ Know your rights</div>
            <h2 className="section-title">Health Insurance Portability</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.65 }}>
              Switch insurers without losing your waiting periods or no-claim bonus.
              Keep the benefits you’ve already earned.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>

            <div className="port-card" style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid var(--border)'
            }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem', fontSize: '1.25rem' }}>
                Key Benefits of Portability
              </h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--ink)', lineHeight: 1.8 }}>
                <li>Carry forward waiting periods for pre-existing conditions</li>
                <li>Retain your No Claim Bonus and extra sum insured</li>
                <li>Switch to better coverage or lower premiums</li>
                <li>Access improved hospital networks</li>
              </ul>
            </div>

            <div className="port-card" style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid var(--border)'
            }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem', fontSize: '1.25rem' }}>
                When to Consider Porting
              </h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--ink)', lineHeight: 1.8 }}>
                <li>Renewal premium has increased sharply</li>
                <li>Poor claims experience or support</li>
                <li>Limited hospital network</li>
                <li>Better plans are now available</li>
              </ul>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }} data-anim>
            <button
              onClick={handleBookCall}
              style={{
                padding: '14px 36px',
                fontSize: '1.02rem',
                fontWeight: 700,
                background: 'var(--navy)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer'
              }}
            >
              Get Free Portability Advice →
            </button>
          </div>

        </div>

        <style>{`
          .port-card {
            transition: all 0.3s ease;
          }
          .port-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 35px rgba(15,37,87,0.08);
            border-color: var(--teal);
          }
          @media(max-width: 900px) {
            .section { padding: 3.5rem 1rem; }
          }
        `}</style>
      </section>
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">

          <div style={{ textAlign: 'center' }} data-anim>
            <div className="section-label">✦ Explore more</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>
              Explore other insurance options
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.8rem',
            marginTop: '3.5rem'
          }}>

            {[
              {
                title: 'Life Insurance',
                text: 'Secure your family’s financial future with comprehensive life coverage'
              },
              {
                title: 'Car Insurance',
                text: 'Protect your vehicle against accidents, theft, and third-party liabilities'
              },
              {
                title: 'Travel Insurance',
                text: 'Stay covered on every journey – domestic and international trips'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="process-card"
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 1.8rem',
                  position: 'relative'
                }}
              >
                <div className="process-icon" style={{ margin: '0 auto 1.2rem' }}>
                  <i className="fas fa-shield-alt"></i>
                </div>

                <h3 style={{ marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                  {item.text}
                </p>

                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--teal)',
                  background: 'var(--teal-light)',
                  padding: '6px 20px',
                  borderRadius: '50px',
                  letterSpacing: '0.4px'
                }}>
                  Coming Soon
                </div>
              </div>
            ))}

          </div>

        </div>

        <style>{`
    .process-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 20px;
      transition: all 0.35s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .process-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(15,37,87,0.1);
      border-color: var(--teal);
    }

    .process-icon {
      width: 62px;
      height: 62px;
      background: var(--teal-light);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--teal);
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    @media(max-width: 900px) {
      .process-card { padding: 2rem 1.5rem; }
    }
  `}</style>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }} data-anim>
            <div>
              <div className="section-label">✦ What families say</div>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Real families.<br />Real peace of mind.</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--navy)' }}>4.9</div>
                <div>
                  <div style={{ color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: 2 }}>★★★★★</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>/5 on Google · 8,500+ verified reviews</div>
                </div>
              </div>
            </div>
            <a href="#" style={{ color: 'var(--teal)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              Read all stories <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="testi-grid-wrap">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="testi-card" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 20, padding: '1.8rem', transition: 'all 0.3s', opacity: 0, transform: 'translateY(20px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>{t.stars}</div>
                  <div style={{ background: 'var(--teal-light)', color: 'var(--teal)', fontSize: '0.7rem', fontWeight: 600, padding: '3px 10px', borderRadius: 50 }}>{t.tag}</div>
                </div>
                <p style={{ fontSize: '0.87rem', color: 'var(--ink)', lineHeight: 1.7, marginBottom: '1.2rem' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src={t.img} alt={t.name} style={{ width: 38, height: 38, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .testi-card.visible{opacity:1!important;transform:translateY(0)!important;}
          .testi-card:hover{transform:translateY(-6px)!important;box-shadow:0 16px 40px rgba(15,37,87,0.1);border-color:var(--teal)!important;}
          @media(max-width:900px){.testi-grid-wrap{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* RECOGNITION & MILESTONES */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-anim>
            <div className="section-label">✦ Recognition & Milestones</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Our achievements are defined<br />by the trust our clients place in us.</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: 580, margin: '1rem auto 0', lineHeight: 1.7 }}>
              Especially during their most critical moments.
            </p>
          </div>

          {/* Client Impact */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="milestone-4-grid">
            {[
              { icon: 'fa-users', num: '6,700+', label: 'Families Guided', color: '#3B82F6' },
              { icon: 'fa-file-invoice-dollar', num: '₹6 Cr+', label: 'Claims Assisted', color: 'var(--teal)' },
              { icon: 'fa-chart-line', num: 'High', label: 'Claim Support Success Rate', color: '#8B5CF6' },
              { icon: 'fa-calendar-check', num: '20 Yrs', label: 'Experience in Advisory', color: 'var(--gold)' },
            ].map(({ icon, num, label, color }) => (
              <div key={label} style={{
                background: 'white', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem', textAlign: 'center',
                transition: 'all 0.3s'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(15,37,87,0.1)'; e.currentTarget.style.borderColor = color; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <div style={{ width: 48, height: 48, background: color + '18', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color, fontSize: '1.2rem', margin: '0 auto 1rem' }}>
                  <i className={`fas ${icon}`}></i>
                </div>
                <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2rem', color: 'var(--navy)', fontWeight: 700 }}>{num}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 6, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Key Achievements + Trust */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="milestone-2-grid">
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, background: 'var(--teal-light)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem' }}>Key Achievements</h3>
              </div>
              {[
                'Successfully handled high-value claims (₹10L+ / ₹15L+ cases)',
                'Expertise in complex cases — senior citizens & pre-existing conditions',
                'Strong experience in policy portability & claim structuring',
                'Built a claim-focused advisory model (rare in market)',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--ink)', lineHeight: 1.5 }}>
                  <div style={{ width: 20, height: 20, background: 'var(--teal-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <i className="fas fa-check" style={{ fontSize: '0.55rem', color: 'var(--teal)' }}></i>
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3A7A)', borderRadius: 20, padding: '2rem', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 style={{ fontWeight: 700, color: 'white', fontSize: '1rem' }}>Client Trust Indicators</h3>
              </div>
              {[
                { icon: 'fa-star', label: 'Google Rating', val: '4.8+ Stars' },
                { icon: 'fa-share-alt', label: 'Growth Model', val: 'Referral-driven' },
                { icon: 'fa-shield-alt', label: 'Advisory Focus', val: 'Claim-first approach' },
                { icon: 'fa-clock', label: 'Support', val: '24×7 claims desk' },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)' }}>
                    <i className={`fas ${icon}`} style={{ color: 'var(--teal)', width: 16 }}></i>{label}
                  </div>
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.milestone-4-grid{grid-template-columns:1fr 1fr!important;}.milestone-2-grid{grid-template-columns:1fr!important;}}
          @media(max-width:500px){.milestone-4-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="problem-grid">
            <div data-anim>
              <div className="section-label">🔴 The Reality</div>
              <h2 className="section-title">What Really Happens<br />at Claim Time?</h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Most people believe buying a policy is enough. But during hospitalization, reality is different.
              </p>
              {[
                { icon: 'fa-file-times', text: 'Confusing documentation requirements' },
                { icon: 'fa-hourglass-half', text: 'Delays from hospital or insurer side' },
                { icon: 'fa-cut', text: 'Partial approvals or unexpected deductions' },
                { icon: 'fa-user-slash', text: 'No proper guidance at critical moments' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 36, height: 36, background: '#FEF2F2', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8001C', flexShrink: 0 }}>
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <span style={{ fontSize: '0.93rem', color: 'var(--ink)' }}>{text}</span>
                </div>
              ))}
              <div style={{ marginTop: '1.8rem', background: 'var(--teal-light)', borderRadius: 14, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '1.1rem' }}>👉</span>
                <span style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>Policy lena easy hai. Claim manage karna nahi.</span>
              </div>
            </div>
            <div data-anim data-delay="2">
              <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3A7A)', borderRadius: 24, padding: '2.5rem', color: 'white' }}>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.4rem', marginBottom: '0.8rem', color: 'white' }}>This Is Where We Step In</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.8rem', fontSize: '0.93rem' }}>
                  HealthInsuranceWale, powered by Insurewell Advisory, is built on a claim-first approach. We focus on what actually matters —
                </p>
                <div style={{ background: 'rgba(10,191,163,0.2)', borderRadius: 14, padding: '16px 20px', marginBottom: '1.5rem', borderLeft: '3px solid var(--teal)' }}>
                  <span style={{ fontWeight: 700, color: 'var(--teal)', fontSize: '0.97rem' }}>👉 Will your insurance work smoothly when you need it?</span>
                </div>
                {[
                  'Pre-claim guidance (before hospitalization)',
                  'Hospital coordination support',
                  'Documentation structuring',
                  'Insurance company follow-ups',
                  'Reimbursement claim assistance',
                  'Claim rejection handling guidance',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    <div style={{ width: 20, height: 20, background: 'var(--teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className="fas fa-check" style={{ fontSize: '0.5rem', color: 'white' }}></i>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.problem-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CASE PROOF MINI */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-anim>
            <div className="section-label">🧾 Real Proof</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Real Situations. Real Outcomes.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '2.5rem' }} className="case-mini-grid">
            {[
              { badge: '₹18 Lakh Case', title: 'Structured claim support led to full settlement despite documentation delays.', icon: '🏥', color: '#E8001C' },
              { badge: 'Senior Citizen', title: 'Pre-existing condition case navigated successfully with zero major complications.', icon: '👴', color: '#F59E0B' },
              { badge: 'Policy Portability', title: 'Right policy switch. Claim delivered smoothly under new insurer within months.', icon: '🔄', color: 'var(--teal)' },
            ].map((c, i) => (
              <div key={i} className="process-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>{c.icon}</div>
                <span style={{ background: c.color + '20', color: c.color, fontSize: '0.72rem', fontWeight: 700, padding: '4px 12px', borderRadius: 50, letterSpacing: '0.5px' }}>{c.badge}</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.65, marginTop: '1rem' }}>{c.title}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }} data-anim>
            <a href="/claim-stories" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--teal)',
              fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem'
            }}>Read Full Case Studies <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i></a>
          </div>
        </div>
        <style>{`@media(max-width:900px){.case-mini-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* BOLD POSITIONING LINE */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div data-anim>
            <div style={{ width: 60, height: 3, background: 'var(--teal)', margin: '0 auto 2rem', borderRadius: 2 }}></div>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'white', lineHeight: 1.4, maxWidth: 700, margin: '0 auto' }}>
              We don't disappear after selling a policy.<br />
              <span style={{ color: 'var(--teal)' }}>We stand with you when it matters the most.</span>
            </h2>
            <div style={{ width: 60, height: 3, background: 'var(--teal)', margin: '2rem auto 0', borderRadius: 2 }}></div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-anim>
            <div className="section-label">✦ Is this for you?</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Who Should Talk to Us?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', maxWidth: 860, margin: '0 auto' }} className="who-grid">
            {[
              { icon: 'fa-search', title: 'Buying a new policy', text: 'Want to understand what you\'re actually buying and how it will perform at claim time.' },
              { icon: 'fa-question-circle', title: 'Unsure about your existing policy', text: 'Have a policy but don\'t fully understand the claim process or your coverage.' },
              { icon: 'fa-exclamation-triangle', title: 'Facing an ongoing claim issue', text: 'Dealing with delays, rejections, or documentation confusion right now.' },
              { icon: 'fa-heartbeat', title: 'Planning for parents or senior citizens', text: 'Need specialized guidance for high-risk or pre-existing condition cases.' },
            ].map(({ icon, title, text }) => (
              <div key={title} data-anim style={{
                display: 'flex', gap: '1.2rem', background: 'var(--cream)', borderRadius: 20, padding: '1.8rem',
                border: '1px solid var(--border)', transition: 'all 0.3s'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.background = 'white'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(15,37,87,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{ width: 44, height: 44, background: 'var(--teal-light)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', fontSize: '1.1rem', flexShrink: 0 }}>
                  <i className={`fas ${icon}`}></i>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.65 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:700px){.who-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA BAND */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div data-anim style={{
            background: 'linear-gradient(135deg,var(--navy),#1A3A7A)', borderRadius: 28,
            padding: '4rem 3rem', display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', gap: '2rem', flexWrap: 'wrap', position: 'relative', overflow: 'hidden', margin: '0 2rem'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%,rgba(10,191,163,0.2) 0%,transparent 60%)' }}></div>
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: 'white' }}>Ready to protect your family?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginTop: 8 }}>Our advisors are available right now — no spam, no pressure, just clarity.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', position: 'relative' }}>
              <button onClick={() => handleBookCall()} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'white', color: 'var(--navy)', borderRadius: 50, fontWeight: 700, fontSize: '0.95rem',
                border: 'none', cursor: 'pointer'
              }}><i className="fas fa-phone"></i> Book Free Call</button>
              <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'var(--wa)', color: 'white', borderRadius: 50, fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none'
              }}>
                <WA_SVG width="18" height="18" fill="white" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}