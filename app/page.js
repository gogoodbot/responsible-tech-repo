'use client'

import "./globals.css";
import Hero from "./comps/Hero";
import Search from "./comps/Search";
import CategoryTab from "./comps/CategoryTab";
import SubCategoryTab from "./comps/SubCategoryTab";
import OrganizationCardList from "./comps/OrganizationCardList";
import TopVoiceCardList from "./comps/TopVoiceCardList";
import HomeCardList from "./comps/HomeCardList";
import { useState } from "react";

export const revalidate = 3600; // revalidate at most every hour

const categoryData = [
  {
    category: 'Societal Impacts, Trust & Safety',
    sub_categories: ['Disinformation & DeepFakes',
      'Manipulation & Polarization',
      'Online Hate & Extremism',
      'Harassment, Bullying & Sexualization',
      'Attention, Mental Health & Well Being']
  },
  {
    category: 'Online Crime & Law Enforcment Response',
    sub_categories: ["Online Financial Crimes",
      "Online Trafficking & Predators",
      "Cyber Security Attacks & Data Theft",
      "Online Foreign and Political Interference"]
  },
  {
    category: 'Equitable Inclusion, Access & Participation',
    sub_categories: ["Algorithmic & Data Bias",
      "Unequal Participation in Technology and AI Development",
      "Digital Inclusion & Access",
      "Unequal Investment",
      "Domestic AI and Innovation Capacity"]
  },
  {
    category: 'Business Models & Incentive Structures',
    sub_categories: ["Data Collection, Control & Monetization",
      "Asymmetrical Power & Lobbies",
      "Workforce Displacement & Gig Economy",
      "Corporate Surveillance",
      "Financial Incentive Structures"]
  },
  {
    category: 'Public Policy & Enforcement',
    sub_categories: ["Governance Capacity for Rapid Tech Evolution",
      "Elections & Democratic Integrity",
      "Technology-Enabled State Surveillance",
      "Autonomous & AI-Enabled Weapons"]
  },
  {
    category: 'Civil Society Capacity',
    sub_categories: ["Independent and Resourced Public Interest Research",
      "Independent Public Interest Media",
      "Public Awareness, Civic Engagement and Action",
      "Responsible Tech and AI Education and Capacity"]
  },

]

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState(categoryData[0])
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  return (
    <section className="container relative flex flex-col gap-16">
      <Hero />
      <Search />
      <hr />
      <section className="flex flex-col gap-10">
        <div className="grid grid-cols-6 gap-4">
          {categoryData.map((category) => (
            <CategoryTab data={category} key={category.category} isSelected={category === selectedCategory} setSelectedCategory={setSelectedCategory} setSelectedSubCategory={setSelectedSubCategory}
            />
          ))}

        </div>
        <div className="p-10 bg-[#ecfcff] rounded-3xl font-poppins flex flex-col gap-10 items-start">
          <div className="flex gap-x-4">
            <SubCategoryTab label="All" setSelectedSubCategory={setSelectedSubCategory} isSelected={selectedSubCategory === "All"} />
            {selectedCategory.sub_categories.map((subCategory) => (
              <SubCategoryTab key={subCategory} label={subCategory} setSelectedSubCategory={setSelectedSubCategory} isSelected={selectedSubCategory === subCategory} />
            ))}
          </div>
          <div className="flex flex-col gap-10 items-start w-full">
            <h2 className="font-bold text-2xl">Community</h2>
            <OrganizationCardList />
            <TopVoiceCardList />
          </div>
          <HomeCardList title='Legislation' />
          <HomeCardList title='Legal Processes' />
          <HomeCardList title='Resources' />
        </div>
      </section>
    </section>
  );
}
