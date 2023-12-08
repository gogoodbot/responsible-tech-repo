import React from "react";
import { DataTable } from "@/app/comps/DataTable";
import { columns } from "./columns";
import { getDataForTable, getDataWithId } from "@/lib/actions";
import Search from "@/app/comps/Search";
import ArtifactInfo from "@/app/comps/ArtifactInfo";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Results",
};

async function getGlobal() {
  const keyword = { query: "" }; //to be change to actual key words found in the artifact tag field

  try {
    const global = await getDataForTable(keyword);
    return global;
  } catch (error) {
    return { message: "Database error: Failed to fetch data" };
  }
}

async function getArtifactInfo(query) {
  try {
    const global = await getDataWithId(query);
    if (!global) {
      notFound();
    }
    return global;
  } catch (error) {
    return { message: "Database error: Failed to fetch data" };
  }
}

export default async function Page({ params }) {
  const artifactInfo = await getArtifactInfo(params.id);
  const data = await getGlobal();

  return (
    <section className="py-24">
      <div className="container">
      <ArtifactInfo params={artifactInfo} />

        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
