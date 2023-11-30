import Navbar from "@/app/comps/Navbar";
import React from "react";
import { DataTable } from "@/app/comps/DataTable";
import { columns } from "./columns";
// import { globalSearch } from "@/lib/actions";
import { getDataForTable } from "@/lib/actions";

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
  // const keyword = { query: "ai" }; //to be change to actual key words found in the artifact tag field
  const data = await getGlobal();
  console.log(data);

  // try {
  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <section className="py-24">
      <div className="container">
        <h1>All Artifacts</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
