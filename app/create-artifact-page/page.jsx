import React from "react";
import Navbar from "../comps/Navbar";
import ArtifactCreate from "../comps/ArtifactCreate";
import TagSelector from "../comps/ArtifactCreate";
import formSchema from "../comps/ArtifactCreate";

function createArtifactPage() {
  return (
    <section className="container relative">
      <ArtifactCreate />
    </section>
  );
}

export default createArtifactPage;
