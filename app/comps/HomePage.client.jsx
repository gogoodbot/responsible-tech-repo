'use client'

import React from "react";
import Hero from '../../components/home-page-ui/Hero';
import Search from "../../components/home-page-ui/Search";
import CategoryTab from "../../components/home-page-ui/CategoryTab";
import SubCategoryTab from "../../components/home-page-ui/SubCategoryTab";
import OrganizationCardList from "../../components/home-page-ui/OrganizationCardList";
import TopVoiceCardList from "../../components/home-page-ui/TopVoiceCardList";
import HomeCardList from "../../components/home-page-ui/HomeCardList";
import { useState } from "react";

const categoryData = [
    {
        category: 'Societal Impacts, Trust & Safety',
        sub_categories: ['Disinformation & DeepFakes',
            'Manipulation & Polarization',
            'Online Hate & Extremism',
            'Harassment, Bullying & Sexualization',
            'Attention, Mental Health & Well Being'],
        icon: 'Societal_Impacts_Trust_and_Safety'
    },
    {
        category: 'Online Crime & Law Enforcement Response',
        sub_categories: ['Online Financial Crimes',
            'Online Trafficking & Predators',
            'Cyber Security Attacks & Data Theft',
            'Online Foreign and Political Interference'],
        icon: 'Online_Crime_and_Law_Enforcement_Response'
    },
    {
        category: 'Equitable Inclusion, Access & Participation',
        sub_categories: ['Algorithmic & Data Bias',
            'Unequal Participation in Technology and AI Development',
            'Digital Inclusion & Access',
            'Unequal Investment',
            'Domestic AI and Innovation Capacity'],
        icon: 'Equitable_Inclusion_Access_and_Participation'
    },
    {
        category: 'Business Models & Incentive Structures',
        sub_categories: ['Data Collection, Control & Monetization',
            'Asymmetrical Power & Lobbies',
            'Workforce Displacement & Gig Economy',
            'Corporate Surveillance',
            'Financial Incentive Structures'],
        icon: 'Business_Models_and_Incentive_Structures'
    },
    {
        category: 'Public Policy & Enforcement',
        sub_categories: ["Governance Capacity for Rapid Tech Evolution",
            "Elections & Democratic Integrity",
            "Technology-Enabled State Surveillance",
            "Autonomous & AI-Enabled Weapons"],
        icon: 'Public_Policy_and_Enforcement'
    },
    {
        category: 'Civil Society Capacity',
        sub_categories: ['Independent and Resourced Public Interest Research',
            'Independent Public Interest Media',
            'Public Awareness, Civic Engagement and Action',
            'Responsible Tech and AI Education and Capacity'],
        icon: 'Civil_Society_Capacity'
    },

]

const HomePageClient = ({ organizations, topVoices, legislation, legalProcesses, resources }) => {

    const ALL_SUBCATEGORIES = 'All';

    const [selectedCategory, setSelectedCategory] = useState(categoryData[0])
    const [selectedSubCategory, setSelectedSubCategory] = useState(ALL_SUBCATEGORIES);

    return (
        <section className="container relative flex flex-col gap-16">
            <Hero />
            <Search />
            <hr />
            <section className="flex flex-col gap-10">
                <div className="grid grid-cols-6 gap-4">
                    {categoryData.map((category) => (
                        <CategoryTab data={category} key={category.category} isSelected={category === selectedCategory} setSelectedCategory={setSelectedCategory} setSelectedSubCategory={setSelectedSubCategory} allSubcategories={ALL_SUBCATEGORIES}
                        />
                    ))}

                </div>
                <div className="p-10 bg-[var(--primary-background)] rounded-3xl font-poppins flex flex-col gap-10 items-start">
                    <div className="flex gap-x-4">
                        <SubCategoryTab label="All" setSelectedSubCategory={setSelectedSubCategory} isSelected={selectedSubCategory === ALL_SUBCATEGORIES} />
                        {selectedCategory.sub_categories.map((subCategory) => (
                            <SubCategoryTab key={subCategory} label={subCategory} setSelectedSubCategory={setSelectedSubCategory} isSelected={selectedSubCategory === subCategory} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-10 items-start w-full">
                        <h2 className="font-bold text-2xl">Community</h2>
                        <OrganizationCardList data={organizations} />
                        <TopVoiceCardList data={topVoices} />
                    </div>
                    <HomeCardList visibleCard={3} data={legislation} title='Legislation' />
                    <HomeCardList visibleCard={3} data={legalProcesses} title='Legal Processes' />
                    <HomeCardList visibleCard={6} data={resources} title='Resources' />
                </div>
            </section>
        </section>
    )
}

export default HomePageClient;