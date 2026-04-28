import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

import toast, { Toaster } from 'react-hot-toast';
export default function Careers() {
  const { isLoggedIn } = useAuthStore();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    setTimeout(() => document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el)), 100);
    return () => observer.disconnect();
  }, []);

  function submitCV() {
    window.location.href = `mailto:rajatk78@gmail.com`;
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar isLoggedIn={isLoggedIn} />

      {/* CAREERS HERO */}
      <section style={{
        background: 'linear-gradient(135deg,var(--navy) 0%,#1A3A7A 55%,#0F3460 100%)',
        minHeight: '70vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'
      }}>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
            fontSize: '0.82rem', fontWeight: 500, padding: '8px 22px', borderRadius: 50, marginBottom: '1.5rem'
          }}>
            <i className="fas fa-users"></i>&nbsp; JOIN OUR GROWING FAMILY
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(3rem,6vw,4.5rem)', lineHeight: 1.05, color: 'white', marginBottom: '1.2rem' }}>
            Build a Career<br />That Matters
          </h1>
          <p style={{ fontSize: '1.18rem', color: 'rgba(255,255,255,0.85)', maxWidth: 680, margin: '0 auto' }}>
            Help families protect what they love most. Work with purpose in a fast-growing, values-driven insurance advisory.
          </p>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section style={{ padding: '6rem 0', background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto 4rem', fontSize: '1.08rem', lineHeight: 1.85, color: 'var(--ink)', textAlign: 'center' }} data-anim>
            <p>
              We are always on the lookout for passionate, honest, and hardworking individuals who want to make a real difference in people's lives.
              Whether you're an experienced insurance advisor, a fresh talent, or someone who believes in transparent service — we'd love to hear from you.
            </p>
          </div>

          <div data-anim style={{
            maxWidth: 640, margin: '0 auto', background: 'var(--white)', borderRadius: 24,
            padding: '3rem', boxShadow: '0 20px 50px rgba(15,37,87,0.08)', textAlign: 'center'
          }}>
            <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '1rem' }}>Current Openings</h3>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', margin: '1.5rem 0' }}>
              We don't have any active openings at the moment.<br />
              But we always keep great profiles on file.
            </p>

            <div style={{
              background: 'var(--teal-light)', border: '1px solid var(--teal)', borderRadius: 16,
              padding: '1.5rem', margin: '2rem 0', fontSize: '1rem'
            }}>
              Send your CV to:<br />
              <strong style={{ color: 'var(--navy)', fontSize: '1.1rem' }}>rajatk78@gmail.com</strong>
            </div>

            <button onClick={submitCV} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 36px', background: 'linear-gradient(135deg,var(--navy),var(--navy-mid))',
              color: 'white', border: 'none', borderRadius: 50, fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.25s'
            }}>
              <i className="fas fa-paper-plane"></i> Send Your CV
            </button>

            <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: 'var(--muted)' }}>
              We review every application personally and will get back to you if there's a good fit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}
