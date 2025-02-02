'use client';

import React, { useState } from 'react';
import Litigation from '../litigation/page';
import Policy from '../policy/page';
import Organization from '../organization/page';
// import Resource from '../artifact/Resource/page';
// import Stakeholder from '../artifact/Stakeholder/page';
// import AddArtifact from '../artifact/AddArtifact';
// import LitigationForm from '../api-forms/litigation-form/page';
// import PolicyForm from '../api-forms/policy-form/page';
// import OrganizationFrom from '../api-forms/organization-form/page';
// import ResourceForm from '../api-forms/resource-form/page';
// import StakeholderForm from '../api-forms/stakeholder-form/page';

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

  // const renderSection = () => {
  //   switch (activeSection) {
  //     case 'Litigation':
  //       return <Litigation toRender={renderForm()} resourceName='litigation' />;
  //     case 'Policy':
  //       return <Policy toRender={renderForm()} resourceName='policy' />;
  //     case 'Organization':
  //       return <Organization />;
  //     case 'Resource':
  //       return <Resource />;
  //     case 'Stakeholder':
  //       return <Stakeholder />;
  //     default:
  //       return <Litigation />;
  //   }
  // };
  const renderSection = () => {
    switch (activeSection) {
      case 'Litigation':
        return <Litigation resourceName='litigation' />;
      case 'Policy':
        return <Policy resourceName='policy' />;
      case 'Organization':
        return <Organization />;
      // case 'Resource':
      //   return <Resource />;
      // case 'Stakeholder':
      //   return <Stakeholder />;
      default:
        return <Litigation />;
    }
  };

  // const renderForm = () => {
  //   switch (activeSection) {
  //     case 'Litigation':
  //       return <LitigationForm />;
  //     case 'Policy':
  //       return <PolicyForm />;
  //     case 'Organization':
  //       return <OrganizationFrom />;
  //     case 'Resource':
  //       return <ResourceForm />;
  //     case 'Stakeholder':
  //       return <StakeholderForm />;
  //     default:
  //       return <LitigationForm />;
  //   }
  // };

  const NavSection = () => {
    return (
      <section className='flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
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
      </section>
    );
  };

  const ContentSection = ({ toRender }) => {
    return (
      <section className='overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50 px-3 py-1.5 '>
        {renderSection()}
        {/* <AddArtifact toRender={toRender} activeSection={activeSection} /> */}
      </section>
    );
  };

  return (
    <div className='container relative mt-8'>
      <NavSection />
      {/* <ContentSection toRender={renderForm()} /> */}
      <ContentSection />
    </div>
  );
}

export default Dashboard;
