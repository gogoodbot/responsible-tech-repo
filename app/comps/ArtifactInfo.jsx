import React from "react";

function ArtifactInfo(data) {
  console.log("data", data);
  const artifact = data.artifactInfo[0];
  return <div>{artifact.name}</div>;
}

export default ArtifactInfo;
