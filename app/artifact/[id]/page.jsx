import React from "react";
import { DataTable } from "@/app/comps/DataTable";
import { columns } from "./columns";
import {
  getDataForTable,
  getDataWithId,
  artifactRecommendations,
  artifactSuggestions
} from "@/lib/actions";
import Search from "@/app/comps/Search";
import ArtifactInfo from "@/app/comps/ArtifactInfo";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArtifactModal from "@/app/comps/ArtifactModal";

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
  const titleArtifact = artifactInfo[0].name;
  const recommend = await artifactRecommendations(params.id);
  const suggest = await(artifactSuggestions(params.id))
  // console.log(recommend);

  return (
    <section className="container relative mt-10">
      <section className="overflow-hidden rounded-lg border bg-background shadow">
        <div className=" flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <h1 className="font-poppins font-bold text-xl pl-5">
                {titleArtifact}
              </h1>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              {/* main container */}

              <Tabs defaultValue="summary">
                <TabsList>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="related">Related</TabsTrigger>
                  <TabsTrigger value="feedback">Feedback</TabsTrigger>
                </TabsList>
                <TabsContent value="summary">
                  <ArtifactInfo params={artifactInfo} />
                </TabsContent>
                <TabsContent value="related">
                  <DataTable columns={columns} data={data} />
                </TabsContent>
                <TabsContent value="feedback">
                  <ArtifactModal/>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className=""></div>
        </div>
      </section>
    </section>
  );
}
