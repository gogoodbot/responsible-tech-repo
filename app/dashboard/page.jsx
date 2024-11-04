'use client';

import React, { useState } from 'react';
import Litigation from '../artifact/Litigation/page';
import Policy from '../artifact/page';
import Organization from '../artifact/Organization/page';
import Resource from '../artifact/Resource/page';
import Stakeholder from '../artifact/Stakeholder/page';
import AddArtifact from '../artifact/AddArtifact';
import LitigationForm from '../api-forms/litigation-form/page';
import PolicyForm from '../api-forms/policy-form/page';
import OrganizationFrom from '../api-forms/organization-form/page';
import ResourceForm from '../api-forms/resource-form/page';
import StakeholderForm from '../api-forms/stakeholder-form/page';

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
  const renderForm = () => {
    switch (activeSection) {
      case 'Litigation':
        return <LitigationForm />;
      case 'Policy':
        return <PolicyForm />;
      case 'Organization':
        return <OrganizationFrom />;
      case 'Resource':
        return <ResourceForm />;
      case 'Stakeholder':
        return <StakeholderForm />;
      default:
        return <LitigationForm />;
    }
  };

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
        <AddArtifact toRender={toRender} />
      </section>
    );
  };

  return (
    <div className='container relative mt-8'>
      <NavSection />
      <ContentSection toRender={renderForm()} />
    </div>
  );
}

export default Dashboard;

// 'use client';

// import React, { useState } from 'react';
// import Litigation from '../artifact/Litigation/page';
// import Policy from '../artifact/page';
// import Organization from '../artifact/Organization/page';
// import Resource from '../artifact/Resource/page';
// import Stakeholder from '../artifact/Stakeholder/page';
// import Modal from '../comps/Modal';

// function Dashboard() {
//   const [activeSection, setActiveSection] = useState('Litigation');
//   const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state
//   const [modalPurpose, setModalPurpose] = useState('');
//   const [selectedLitigationId, setSelectedLitigationId] = useState(null); // For Edit/Delete
//   const sections = [
//     'Litigation',
//     'Policy',
//     'Organization',
//     'Resource',
//     'Stakeholder',
//   ];

//   // Function to set the active class on the current section's <li>
//   const getNavItemClass = (section) =>
//     `font-poppins font-bold text-1xl cursor-pointer px-3 py-2 rounded-sm ${
//       activeSection === section
//         ? 'overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50'
//         : ''
//     }`;

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Litigation':
//         return <Litigation />;
//       case 'Policy':
//         return <Policy />;
//       case 'Organization':
//         return <Organization />;
//       case 'Resource':
//         return <Resource />;
//       case 'Stakeholder':
//         return <Stakeholder />;
//       default:
//         return <Litigation />;
//     }
//   };

//   const NavSection = () => {
//     return (
//       <section className='flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
//         <nav className='font-poppins font-bold text-1xl'>
//           <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
//             {sections.map((section) => (
//               <li
//                 key={section}
//                 className={getNavItemClass(section)}
//                 onClick={() => setActiveSection(section)}
//               >
//                 {section}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </section>
//     );
//   };

//   const openModal = (purpose, id = null) => {
//     setModalPurpose(purpose);
//     setSelectedLitigationId(id);
//     setModalOpen(true);
//   };

//   const ContentSection = () => {
//     return (
//       <section className='overflow-hidden rounded-lg border bg-background dark:bg-transparent shadow bg-slate-50 px-3 py-1.5 '>
//         {renderSection()}
//         <button
//           className='font-poppins font-bold text-1xl cursor-pointer px-3 py-2 my-3 rounded-sm overflow-hidden border bg-goodbot-primary-blue dark:bg-transparent shadow'
//           onClick={() => openModal('create')}
//         >
//           Create a new Litigation
//         </button>
//       </section>
//     );
//   };

//   return (
//     <div className='container relative mt-8'>
//       <NavSection />
//       <ContentSection />
//       <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
//         {modalPurpose === 'create' && (
//           <div>
//             <h2>Create a New Litigation</h2>
//             <p>Provide details to create a new litigation.</p>
//           </div>
//         )}
//         {modalPurpose === 'edit' && selectedLitigationId && (
//           <div>
//             <h2>Edit Litigation</h2>
//             <p>Editing litigation with ID: {selectedLitigationId}</p>
//             {/* Form or content for editing */}
//           </div>
//         )}
//         {modalPurpose === 'delete' && selectedLitigationId && (
//           <div>
//             <h2>Delete Litigation</h2>
//             <p>
//               Are you sure you want to delete litigation with ID:{' '}
//               {selectedLitigationId}?
//             </p>
//             <button
//               onClick={() => {
//                 /* Handle delete confirmation here */
//               }}
//             >
//               Confirm Delete
//             </button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// }

// export default Dashboard;
