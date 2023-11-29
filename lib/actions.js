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


// v1 of global search
// export async function globalSearch({ query }) {
//   // Clear previous results
//   // setResults([]);

//   const searchTable = async (tableName, searchField) => {
//     const { data, error } = await supabase
//       .from(tableName)
//       .select()
//       .ilike(searchField, `%${query}%`)
//       .limit(500);

//     console.log("data", data);

//     if (error) {
//       console.log(`Error searching in ${tableName}:`, error);
//     } else {
//       return data;
//     }
//   };


//   try {
//     const resultsArray = await Promise.all([
//       searchTable("Organization", "name"),
//       searchTable("Organization", "hq_city"),
//       searchTable("Resource", "title"),
//     ]);

//     const combinedResults = resultsArray.flat();

//     combinedResults.sort(
//       (a, b) => new Date(b.modified_on) - new Date(a.modified_on)
//     );

//     return combinedResults;
//   } catch (error) {
//     console.error("Error during global search:", error);
//     throw error; // Or handle the error as per your application's needs
//   }
// }





// v2 of global search
export async function globalSearch({ query }) {
  const searchTable = async (tableName, searchFields) => {
    // Start building the query
    let queryBuilder = supabase.from(tableName).select();

    // Combine multiple search fields into a single OR condition
    const orCondition = searchFields
      .map(field => `${field}.ilike.%${query}%`)
      .join(',');

    queryBuilder = queryBuilder.or(orCondition);

    const { data, error } = await queryBuilder.limit(500);

    if (error) {
      console.error(`Error searching in ${tableName}:`, error);
      throw error;
    }
    return data;
  };

  try {
    const resultsArray = await Promise.all([
      searchTable("Organization", ["name", "hq_city"]),
      searchTable("Resource", ["title"]),
    ]);

    const combinedResults = resultsArray.flat();

    combinedResults.sort(
      (a, b) => new Date(b.modified_on) - new Date(a.modified_on)
    );

    console.log("combinedResults", combinedResults);
    return combinedResults;
  } catch (error) {
    console.error("Error during global search:", error);
    throw error;
  }
}