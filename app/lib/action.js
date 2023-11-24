"use server";

import { supabase } from "@/lib/client";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchOrganizations() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a reponse for demo purposes.
    // Don't do this in real life :)

    console.log("Fetching organization data...");
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const { data, error } = await supabase
      .from("Organization")
      .select("*")
      .limit(10);
    // if (error) throw error;

    console.log("action", data); // console.log('Data fetch complete after 3 seconds.');

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
