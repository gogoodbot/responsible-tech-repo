import React from "react";
import { DataTable } from "@/app/comps/DataTable";
import { columns } from "./columns";
import { getDataForTable, getDataWithName } from "@/lib/actions";
import Search from "@/app/comps/Search";

async function getGlobal() {
  const keyword = { query: "Digital" }; //to be change to actual key words found in the artifact tag field

  try {
    const global = await getDataForTable(keyword);
    // console.log(global);
    return global;
  } catch (error) {
    console.log(error);
  }
}

async function getArtifactName(query) {
  // const keyword = { query: "Digital" }; //to be change to actual key words found in the artifact tag field
  console.log("query", query);
  try {
    const global = await getDataWithName(query);
    console.log("global", global);
    return global;
  } catch (error) {
    console.log(error);
  }
}

export default async function Page({ params }) {
  const data = await getGlobal();
  const artifactName = await getArtifactName(params.id);
  console.log("params", params);

  return (
    <section className="py-24">
      <Search />
      <div className="container">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
