"use client";

import React, { useState, useEffect } from "react";
import Search from "../comps/Search";
import { ResultsDataTable } from "@/components/results/ResultsDataTable";
import { ResultColumns } from "./ResultColumns";
import { getDataForTable } from "@/lib/actions"; // import data fetching function
import { DatePickerWithRange } from "@/components/results/date-picker";
import { DataTable } from "../comps/DataTable";
import { columns } from "../artifact/[id]/columns";

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
        <div className="container">
          <DatePickerWithRange />
          <Search />

          <h1>Search Results</h1>
          {/* Render DataTable with fetched data */}
          {/* <ResultsDataTable columns={ResultColumns} data={data} /> */}
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </>
  );
}
