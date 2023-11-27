import { fetchOrganizations } from "@/lib/actions";

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
