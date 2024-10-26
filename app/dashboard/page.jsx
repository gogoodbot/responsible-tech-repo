'use client';

import React, { useState } from 'react';

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

  // Function to set the active class on the current section's <li>
  const getNavItemClass = (section) =>
    `font-poppins font-bold text-1xl cursor-pointer px-3 py-2 rounded-sm ${
      activeSection === section
        ? 'overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50'
        : ''
    }`;

  return (
    <section className='container relative mt-8'>
      <div className='flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <nav className='font-poppins font-bold text-1xl'>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li
              className={getNavItemClass('Litigation')}
              onClick={() => setActiveSection('Litigation')}
            >
              Litigation
            </li>
            <li
              className={getNavItemClass('Policy')}
              onClick={() => setActiveSection('Policy')}
            >
              Policy
            </li>
            <li
              className={getNavItemClass('Organization')}
              onClick={() => setActiveSection('Organization')}
            >
              Organization
            </li>
            <li
              className={getNavItemClass('Resource')}
              onClick={() => setActiveSection('Resource')}
            >
              Resource
            </li>
            <li
              className={getNavItemClass('Stakeholder')}
              onClick={() => setActiveSection('Stakeholder')}
            >
              Stakeholder
            </li>
          </ul>
        </nav>
      </div>

      <section className='overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50 px-3 py-1.5 rounded-sm'>
        {renderSection()}
      </section>
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
