require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

// const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;

// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

const makeSupabaseRequest = async (endpoint, method = "GET", data = null) => {
  const url = `${SUPABASE_URL}/rest/v1/${endpoint}`;
  const headers = {
    "content-type": "application/json",
    apikey: SUPABASE_API_KEY,
  };
  console.log("Request Data:", { method, url, headers, data });

  try {
    const response = await axios({
      method,
      url,
      headers,
      data,
    });
    console.log("Response Data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Supabase request error:", error);

    console.error("Supabase request error:", error.response.data);
    throw new Error("Supabase request failed");
  }
};

app.post("/resources", async (req, res) => {
  const resourceData = req.body;

  try {
    const result = await makeSupabaseRequest(
      "Resource",
      "POST",
      resourceData
    );
    console.log("Successfully created resource:", result);
    res.json(result);
  } catch (error) {
    console.error("Error creating resource:", error);
    res
      .status(500)
      .json({ error: `Failed to create resource: ${error.message}` });
  }
});

app.post("/artifacts", async (req, res) => {
  const artifactData = req.body;
  try {
    const result = await makeSupabaseRequest(
      "Artifact",
      "POST",
      artifactData
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to create artifact" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
