import React from "react";
import { DataTable } from "@/app/comps/DataTable";
import { columns } from "./columns";
import { getDataForTable } from "@/lib/actions";
import Search from "@/app/comps/Search";

async function getGlobal() {
  const keyword = { query: "ai" }; //to be change to actual key words found in the artifact tag field

  try {
    const global = await getDataForTable(keyword);
    console.log(global);
    return global;
  } catch (error) {
    console.log(error);
  }
}

export default async function Page() {
  const data = await getGlobal();
  console.log(data);

  return (
    <section className="py-24">
      <Search />
      <div className="container">
        <h1>All Artifacts</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
