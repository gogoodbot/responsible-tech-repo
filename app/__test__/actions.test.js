"use strict";

const { supabase } = require("../../lib/client");

// Function to create an artifact entry in the database
async function createArtifact(fkId, dataType) {
  const artifact = {
    [dataType]: fkId
  };
  const { data, error } = await supabase.from('Artifact').upsert(artifact);
  if (error) {
    console.error('Error creating artifact:', error.message);
    throw error;
  }
  return data;
}

// Function to add a child artifact entry, linking it to a parent artifact
async function addArtifactChild(artifactParentId, childId) {
  const data = { artifact_parent_id: artifactParentId, artifact_child_id: childId };
  const { data: acData, error } = await supabase.from('Artifact_Children').insert(data);
  if (error) {
    console.error('Error adding artifact child:', error.message);
    throw error;
  }
  return acData;
}

// Function to create a new item record in a specified table
async function newItem(field, value, table) {
  const row = {
    [field]: value
  };
  const { data, error } = await supabase.from(table).upsert(row);
  if (error) {
    console.error(`Error creating new item in ${table}:`, error.message);
    throw error;
  }
  for (const item of data) {
    await createArtifact(item[dataMap[table]], dataMap[table]);
  }
  return data;
}
