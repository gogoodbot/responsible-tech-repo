"use client"

import React, { useState, useEffect } from "react";
import Search from "../comps/Search";
import { DataTable } from "@/app/comps/DataTable"; // import DataTable
import { columns } from "../artifact/[id]/columns";
import { getDataForTable } from "@/lib/actions"; // import data fetching function

export default function Results({ searchParams }) {
  const [data, setData] = useState([]); // state to store the data
  const query = searchParams?.query || "";

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data using the query
        const fetchedData = await getDataForTable({ query });
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [query]);

  return (
    <>
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Search />

        <div className="container">
          <h1>Search Results</h1>
          {/* Render DataTable with fetched data */}
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </>
  );
}