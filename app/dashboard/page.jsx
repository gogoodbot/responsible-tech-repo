'use client';

import React, { useState } from 'react';
import Litigation from '../artifact/Litigation/page';
import Policy from '../artifact/page';
import Organization from '../artifact/Organization/page';
import Resource from '../artifact/Resource/page';
import Stakeholder from '../artifact/Stakeholder/page';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('Litigation');
  const sections = [
    'Litigation',
    'Policy',
    'Organization',
    'Resource',
    'Stakeholder',
  ];

  // Function to set the active class on the current section's <li>
  const getNavItemClass = (section) =>
    `font-poppins font-bold text-1xl cursor-pointer px-3 py-2 rounded-sm ${
      activeSection === section
        ? 'overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50'
        : ''
    }`;

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
    <section className='container relative mt-8'>
      <div className='flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <nav className='font-poppins font-bold text-1xl'>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            {sections.map((section) => (
              <li
                key={section}
                className={getNavItemClass(section)}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <section className='overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50 px-3 py-1.5 '>
        {renderSection()}
      </section>
      <button className='font-poppins font-bold text-1xl cursor-pointer px-3 py-2 my-3 rounded-sm overflow-hidden border bg-goodbot-primary-blue dark:bg-transparent shadow '>
        Create a new Litigation
      </button>
    </section>
  );
}

export default Dashboard;
