import "./globals.css";
import HomePageClient from "./comps/HomePage.client";
import { cardsHome } from "@/lib/actions";

export const revalidate = 3600; // revalidate at most every hour

const getCardsInfo = async (artifact) => {
  try {
    const cards = await cardsHome(artifact);
    return cards;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {

  const organizations = await getCardsInfo("Organization");
  const litigations = await getCardsInfo("Litigation");
  const policies = await getCardsInfo("Policy");
  const resources = await getCardsInfo("Resource");
  const stakeholders = await getCardsInfo("Stakeholder");

  return (
    <HomePageClient organizations={organizations} />
  )

}
