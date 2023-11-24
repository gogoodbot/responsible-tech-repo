// "use client";
import { fetchOrganizations } from "@/lib/actions";
// import React, { useState, useEffect } from "react";
// import { supabase } from "@/lib/client";

const Page = async () => {
  const organizations = await fetchOrganizations();
  console.log("page", organizations);
  return (
    <div>
      <ul>
        {organizations &&
          organizations.map((organization) => (
            <li key={organization.id}>{organization.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Page;

// "use client";

// import React, { useState, useEffect } from "react";
// import { supabase } from "@/lib/client";

// const Page = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("Organization")
//           .select("*")
//           .limit(5);
//         if (error) throw error;
//         setData(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <ul>
//         {data.map((organization) => (
//           <li key={organization.id}>{organization.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Page;
