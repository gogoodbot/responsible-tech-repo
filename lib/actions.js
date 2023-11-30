"use server";

import { supabase } from "@/lib/client";
import { unstable_noStore as noStore } from "next/cache";

//query to return data with all columns
const searchTable = async (tableName, searchFields, query) => {
  // Start building the query
  let queryBuilder = supabase.from(tableName).select();

  // Combine multiple search fields into a single OR condition
  const orCondition = searchFields
    .map((field) => `${field}.ilike.%${query}%`)
    .join(",");

  queryBuilder = queryBuilder.or(orCondition);

  const { data, error } = await queryBuilder.limit(500);

  if (error) {
    console.error(`Error searching in ${tableName}:`, error);
    throw error;
  }
  return data;
};

//query to return only columns needed for table in artifacts
const searchFiltedTable = async (tableName, searchFields, query) => {
  // Start building the query
  let queryBuilder = supabase
    .from(tableName)
    .select("name, summary, modified_on");

  // Combine multiple search fields into a single OR condition
  const orCondition = searchFields
    .map((field) => `${field}.ilike.%${query}%`)
    .join(",");

  queryBuilder = queryBuilder.or(orCondition);

  const { data, error } = await queryBuilder.limit(500); //number of results for filtered search for table

  // Add the table name to each object in the result
  const dataWithTableName = data.map((item) => ({ ...item, tableName }));

  if (error) {
    console.error(`Error searching in ${tableName}:`, error);
    throw error;
  }
  return dataWithTableName;
};

// v2 of global search
export async function globalSearch({ query }) {
  try {
    const resultsArray = await Promise.all([
      searchTable(
        "Organization",
        [
          "name",
          "website",
          "summary",
          "legal_status",
          "affiliation",
          "functional_role",
          "sector_focus",
          "scope",
          "communities_of_focus",
          "geographic_mandate",
          "hq_province",
          "hq_city",
          "status",
          "stage",
          "composition",
          "size",
        ],
        query
      ),
      searchTable(
        "Stakeholder",
        [
          "name",
          "summary",
          "role",
          "email",
          "phone",
          "website",
          "country",
          "state_province",
        ],
        query
      ),
      searchTable(
        "Policy",
        [
          "name",
          "summary",
          "country",
          "type",
          "link",
          "status",
          "mandate",
          "jurisdiction",
          "entity",
          "sub_entity",
          "notes",
        ],
        query
      ),
      searchTable(
        "Resource",
        ["name", "focus_area", "summary", "link", "notes"],
        query
      ),
      searchTable(
        "Litigation",
        [
          "name",
          "link",
          "summary",
          "country",
          "status",
          "mandate",
          "jurisdiction",
        ],
        query
      ),
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

export async function getDataForTable({ query }) {
  // console.log("query", query);
  try {
    const resultsArray = await Promise.all([
      searchFiltedTable(
        "Organization",
        [
          "name",
          "website",
          "summary",
          "legal_status",
          "affiliation",
          "functional_role",
          "sector_focus",
          "scope",
          "communities_of_focus",
          "geographic_mandate",
          "hq_province",
          "hq_city",
          "status",
          "stage",
          "composition",
          "size",
        ],
        query
      ),
      searchFiltedTable(
        "Stakeholder",
        [
          "name",
          "summary",
          "role",
          "email",
          "phone",
          "website",
          "country",
          "state_province",
        ],
        query
      ),
      searchFiltedTable(
        "Policy",
        [
          "name",
          "summary",
          "country",
          "type",
          "link",
          "status",
          "mandate",
          "jurisdiction",
          "entity",
          "sub_entity",
          "notes",
        ],
        query
      ),
      searchFiltedTable(
        "Resource",
        ["name", "focus_area", "summary", "link", "notes"],
        query
      ),
      searchFiltedTable(
        "Litigation",
        [
          "name",
          "link",
          "summary",
          "country",
          "status",
          "mandate",
          "jurisdiction",
        ],
        query
      ),
    ]);

    const combinedResults = resultsArray.flat();
    combinedResults.sort(
      (a, b) => new Date(b.modified_on) - new Date(a.modified_on)
    );

    return combinedResults;
  } catch (error) {
    console.error("Error during global search:", error);
    throw error;
  }
}
