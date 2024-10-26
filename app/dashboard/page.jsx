'use client';

import React, { useState } from 'react';
import Navbar from '../comps/Navbar';

function Litigation() {
  return <div>Litigation Content</div>;
}
function Policy() {
  return <div>Policy Content</div>;
}

function Organization() {
  return <div>Organization Content</div>;
}
function Resource() {
  return <div>Resource Content</div>;
}
function Stakeholder() {
  return <div>Stakeholder Content</div>;
}

function Dashboard() {
  const [activeSection, setActiveSection] = useState('Litigation');

  const renderSection = () => {
    switch (activeSection) {
      case 'Litigation':
        return <Litigation />;
      case 'Policy':
        return <Policy />;
      case 'Organization':
        return <Organization />;
      case 'Resource':
        return <Resource />;
      case 'Stakeholder':
        return <Stakeholder />;
      default:
        return <Litigation />;
    }
  };

  return (
    <section>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <nav className='font-poppins font-bold text-1xl'>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li onClick={() => setActiveSection('Litigation')}>Litigation</li>
            <li onClick={() => setActiveSection('Policy')}>Policy</li>
            <li onClick={() => setActiveSection('Organization')}>
              Organization
            </li>
            <li onClick={() => setActiveSection('Resource')}>Resource</li>
            <li onClick={() => setActiveSection('Stakeholder')}>Stakeholder</li>
          </ul>
        </nav>
      </div>
      <div>{renderSection()}</div>
    </section>
    // <section>
    //   <h2>Artifacts</h2>
    //   <ul>
    //     <li>Litigation</li>
    //     <li>Policy</li>
    //     <li>Organization</li>
    //     <li>Resource</li>
    //     <li>Stakeholder</li>
    //   </ul>
    // </section>
  );
}

export default Dashboard;
