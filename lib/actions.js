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

export async function globalSearch(query) {
  // Clear previous results
  // setResults([]);
  console.log("query", query);
  // Define a function to search a specific table
  const searchTable = async (tableName) => {
    const { data, error } = await supabase
      .from(tableName)
      .select("*") // Select all fields, ensure 'modified_on' is included
      .ilike("name", `%${query}%`) // Adjust the field if necessary
      .order("modified_on", { ascending: false }); // Sorting by 'modified_on' in descending order

    if (error) {
      console.log(`Error searching in ${tableName}:`, error);
    } else {
      return data;
    }
  };

  // Search in each table
  Promise.all([
    searchTable("Organization"),
    searchTable("Policy"),
    searchTable("Litigation"),
    searchTable("Stakeholder"),
    searchTable("Resource"),
  ]).then((resultsArray) => {
    // Flatten the results
    const combinedResults = resultsArray.flat();

    // Sort the combined results by 'modified_on' in descending order
    combinedResults.sort(
      (a, b) => new Date(b.modified_on) - new Date(a.modified_on)
    );

    // Set the sorted results
    return combinedResults;
  });
}
