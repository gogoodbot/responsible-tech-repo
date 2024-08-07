import React from "react";
import Navbar from "../comps/Navbar";
import ArtifactCreate from "../comps/ArtifactCreate";
import TagSelector from "../comps/ArtifactCreate";
import formSchema from "../comps/ArtifactCreate";

function createArtifactPage() {
  return (
    <section className="container mx-auto py-8">
      <div className="max-w-lg mx-auto">
        <ArtifactCreate />
      </div>
    </section>
  );
}

export default createArtifactPage;
