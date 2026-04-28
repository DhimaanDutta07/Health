import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useAuthStore from '../store/auth.store';

export default function Dashboard() {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();
  function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
      logout();
      navigate('/');
    }
  }

  return (
    <>
      <Navbar />
      <section style={{
        background:'linear-gradient(135deg,var(--navy) 0%,#1A3A7A 55%,#0F3460 100%)',
        minHeight:380,position:'relative',overflow:'hidden',display:'flex',alignItems:'center'
      }}>
        <div style={{maxWidth:1280,margin:'0 auto',padding:'0 2rem',position:'relative',zIndex:2,width:'100%'}}>
          <h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:'clamp(2.8rem,5.5vw,4.2rem)',lineHeight:1.05,color:'white',marginBottom:'0.6rem'}}>
            Welcome back, {user.full_name}
          </h1>
          <p style={{fontSize:'1.12rem',color:'rgba(255,255,255,0.85)',maxWidth:520}}>
            Your health shield is active and protecting your family.
          </p>
        </div>
      </section>

      {/* DASHBOARD CONTENT */}
      <section style={{padding:'4rem 0',background:'var(--cream)'}}>
        <div style={{maxWidth:1280,margin:'0 auto',padding:'0 2rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(360px,1fr))',gap:'2rem'}}>

            {/* Policy Overview */}
            <div style={{
              background:'white',border:'1px solid var(--border)',borderRadius:24,
              padding:'2.4rem',transition:'all 0.4s',position:'relative',overflow:'hidden'
            }}>
              <h3 style={{fontSize:'1.2rem',fontWeight:700,color:'var(--navy)',marginBottom:'1.4rem',display:'flex',alignItems:'center',gap:10}}>
                <i className="fas fa-shield-alt"></i> Your Active Policy
              </h3>
              <div style={{fontSize:'1.85rem',fontWeight:700,color:'var(--navy)',lineHeight:1.1,marginBottom:'0.8rem'}}>
                Family Health Shield Plan
              </div>
              <div style={{display:'inline-flex',alignItems:'center',gap:6,padding:'7px 20px',background:'var(--teal-light)',color:'var(--teal)',borderRadius:50,fontSize:'0.87rem',fontWeight:600}}>
                <i className="fas fa-circle" style={{fontSize:'0.5rem'}}></i> Active • Renews on 12 Oct 2026
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.2rem 2rem',marginTop:'1.8rem'}}>
                {[
                  ['Sum Insured','₹10,00,000'],
                  ['Covered Members','4 Members'],
                  ['Claim Settlement Ratio','98.7%'],
                  ['Next Renewal','12 Oct 2026'],
                ].map(([label,value]) => (
                  <div key={label}>
                    <div style={{color:'var(--muted)',fontSize:'0.82rem',marginBottom:4}}>{label}</div>
                    <div style={{fontWeight:700,color:'var(--ink)',fontSize:'1.15rem'}}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{
              background:'white',border:'1px solid var(--border)',borderRadius:24,padding:'2.4rem',
              transition:'all 0.4s'
            }}>
              <h3 style={{fontSize:'1.2rem',fontWeight:700,color:'var(--navy)',marginBottom:'1.4rem',display:'flex',alignItems:'center',gap:10}}>
                <i className="fas fa-bolt"></i> Quick Actions
              </h3>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                <button onClick={() => navigate('/claims')} style={{
                  padding:'16px 20px',border:'none',borderRadius:16,fontWeight:600,fontSize:'0.95rem',
                  cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                  background:'var(--teal)',color:'white',transition:'all 0.25s'
                }}>
                  <i className="fas fa-file-medical"></i> File a Claim
                </button>
                <button onClick={() => alert('Downloading your policy document...')} style={{
                  padding:'16px 20px',border:'none',borderRadius:16,fontWeight:600,fontSize:'0.95rem',
                  cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                  background:'var(--navy)',color:'white',transition:'all 0.25s'
                }}>
                  <i className="fas fa-download"></i> Download Policy
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div style={{
              background:'white',border:'1px solid var(--border)',borderRadius:24,padding:'2.4rem',
              transition:'all 0.4s'
            }}>
              <h3 style={{fontSize:'1.2rem',fontWeight:700,color:'var(--navy)',marginBottom:'1.4rem',display:'flex',alignItems:'center',gap:10}}>
                <i className="fas fa-history"></i> Recent Activity
              </h3>
              <div style={{marginTop:'1.8rem',lineHeight:1.8}}>
                <p><strong>Last Claim:</strong> 15 Mar 2026 <span style={{color:'var(--muted)',fontSize:'0.85rem'}}>(₹1,85,000 settled)</span></p>
                <p><strong>Policy Renewed:</strong> 12 Oct 2025</p>
                <p><strong>Document Updated:</strong> 08 Feb 2026</p>
              </div>
            </div>
          </div>

          <div style={{textAlign:'center',marginTop:'4rem',color:'var(--muted)',fontSize:'0.9rem'}}>
            <i className="fas fa-lock"></i> Your data is secure with us. 256-bit encrypted.
          </div>
        </div>
      </section>
    </>
  );
}
