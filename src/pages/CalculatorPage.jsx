import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function TermInsuranceCalculator() {
    const [inputs, setInputs] = useState({
        age: 25,
        coverage: 10000000,
        term: 30,
        gender: 'male',
        tobacco: 'no',
        monthlyExpenses: 50000,
        outstandingLoans: 0
    });

    const [estimate, setEstimate] = useState(0);

    useEffect(() => {
        // Updated logic: Monthly expenses and loans increase the risk profile slightly
        const baseRate = inputs.gender === 'male' ? 0.0005 : 0.00045;
        const ageMultiplier = 1 + (inputs.age - 18) * 0.07;
        const debtLoad = 1 + (inputs.outstandingLoans / 10000000); // Slight loading for high debt

        const annualPremium = (inputs.coverage * baseRate * ageMultiplier * debtLoad) / 10;
        setEstimate(Math.round(annualPremium / 12));
    }, [inputs]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    };

    // --- STYLES ---
    const cardStyle = {
        background: 'white',
        borderRadius: 24,
        padding: '2.5rem',
        border: '1px solid var(--border)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
    };

    const labelStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 600,
        color: 'var(--navy)',
        marginBottom: '0.4rem',
        fontSize: '0.95rem'
    };

    const descStyle = {
        fontSize: '0.75rem',
        color: 'var(--muted)',
        marginBottom: '1rem',
        lineHeight: '1.4'
    };

    const inputGroupStyle = {
        marginBottom: '1.8rem'
    };

    const textInputStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '12px',
        border: '1px solid var(--border)',
        fontSize: '1rem',
        color: 'var(--navy)',
        fontWeight: '600'
    };

    return (
        <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
            <Navbar />

            <header style={{ background: 'var(--navy)', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
                <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Human Life Value Calculator
                </h1>
                <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                    Go beyond basic estimates. Factor in your lifestyle and liabilities for a precision quote.
                </p>
            </header>

            <main style={{ maxWidth: 1100, margin: '-4rem auto 4rem', padding: '0 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

                    {/* Left side: Inputs */}
                    <div style={cardStyle}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>Financial Details</h3>

                        {/* Monthly Expenses */}
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>
                                Monthly Household Expenses <span>₹{inputs.monthlyExpenses.toLocaleString()}</span>
                            </label>
                            <p style={descStyle}>
                                Include groceries, rent/EMI, school fees, and utility bills. This ensures your family maintains their current lifestyle.
                            </p>
                            <input
                                type="number"
                                name="monthlyExpenses"
                                value={inputs.monthlyExpenses}
                                onChange={handleChange}
                                style={textInputStyle}
                            />
                        </div>

                        {/* Outstanding Loans */}
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>
                                Total Outstanding Loans <span>₹{inputs.outstandingLoans.toLocaleString()}</span>
                            </label>
                            <p style={descStyle}>
                                Home loans, car loans, or personal debts. Your insurance cover should be enough to wipe these out instantly.
                            </p>
                            <input
                                type="number"
                                name="outstandingLoans"
                                value={inputs.outstandingLoans}
                                onChange={handleChange}
                                placeholder="e.g. 5000000"
                                style={textInputStyle}
                            />
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

                        {/* Standard Inputs */}
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>
                                Life Cover Amount <span>₹ {(inputs.coverage / 10000000).toFixed(1)} Cr</span>
                            </label>
                            <p style={descStyle}>The total payout your nominee receives in the event of a claim.</p>
                            <input
                                type="range" name="coverage" min="2500000" max="50000000" step="500000"
                                value={inputs.coverage} onChange={handleChange}
                                style={{ width: '100%', accentColor: 'var(--teal)' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={labelStyle}>Current Age</label>
                                <input type="number" name="age" value={inputs.age} onChange={handleChange} style={textInputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Tobacco?</label>
                                <select name="tobacco" value={inputs.tobacco} onChange={handleChange} style={textInputStyle}>
                                    <option value="no">Non-Smoker</option>
                                    <option value="yes">Smoker</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Results */}
                    <div style={{
                        ...cardStyle,
                        background: 'linear-gradient(135deg, var(--navy) 0%, #1A3A7A 100%)',
                        color: 'white',
                        position: 'sticky',
                        top: '100px',
                        height: 'fit-content',
                        textAlign: 'center'
                    }}>
                        <p style={{ textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem', opacity: 0.7 }}>
                            Estimated Monthly Premium
                        </p>
                        <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: "'DM Serif Display', serif" }}>
                            ₹{estimate.toLocaleString()}*
                        </h2>

                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '16px', textAlign: 'left', marginTop: '1rem' }}>
                            <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--teal)' }}>Why this amount?</p>
                            <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.5 }}>
                                Based on your <strong>₹{inputs.outstandingLoans.toLocaleString()}</strong> in debt and <strong>₹{inputs.monthlyExpenses.toLocaleString()}</strong> monthly spend,
                                a cover of <strong>₹{(inputs.coverage / 10000000).toFixed(1)} Cr</strong> is recommended to ensure 100% debt-freedom for your family.
                            </p>
                        </div>

                        <button style={{
                            width: '100%', padding: '16px', marginTop: '2rem', borderRadius: '14px', border: 'none',
                            background: 'var(--teal)', color: 'white', fontWeight: 700, cursor: 'pointer'
                        }}>
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}