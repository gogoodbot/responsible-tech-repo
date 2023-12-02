import React from "react";
import { DataTable } from "@/app/comps/DataTable";
import { columns } from "./columns";
import { getDataForTable, getDataWithId } from "@/lib/actions";
import Search from "@/app/comps/Search";
import ArtifactInfo from "@/app/comps/ArtifactInfo";

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

async function getArtifactInfo(query) {
  // const keyword = { query: "Digital" }; //to be change to actual key words found in the artifact tag field
  // console.log("query", query);
  try {
    const global = await getDataWithId(query);
    // console.log("global", global);
    return global;
  } catch (error) {
    console.log(error);
  }
}

export default async function Page({ params }) {
  const data = await getGlobal();
  // console.log(data);
  const artifactInfo = await getArtifactInfo(params.id);
  console.log("Artifact Info", artifactInfo);

  return (
    <section className="py-24">
      <Search />
      <div className="container">
        <DataTable columns={columns} data={data} />
        <ArtifactInfo artifactInfo={artifactInfo} />
      </div>
    </section>
  );
}
