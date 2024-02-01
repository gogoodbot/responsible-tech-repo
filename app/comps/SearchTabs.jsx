import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cardsHome } from "@/lib/actions";
import Image from 'next/image';
import ResultCard from "./ResultCard";

const getCardsInfo = async (artifact) => {
  try {
    const cards = await cardsHome(artifact);
    return cards;
  } catch (error) {
    console.log(error);
  }
};

// Use up to 2 hex codes in the URL for colour gradient
const iconMapping = {
  policy: "https://img.icons8.com/nolan/64/06badb/0aa0f5/terms-and-conditions.png",
  organization: "https://img.icons8.com/nolan/64/06badb/0aa0f5/company.png",
  litigation: "https://img.icons8.com/nolan/64/06badb/0aa0f5/scales.png",
  resource: "https://img.icons8.com/nolan/64/06badb/0aa0f5/commodity.png",
  stakeholder: "https://img.icons8.com/nolan/64/06badb/0aa0f5/project-management.png",
};

const SearchTabs = async () => {
  const organizations = await getCardsInfo("Organization");
  const litigations = await getCardsInfo("Litigation");
  const policies = await getCardsInfo("Policy");
  const resources = await getCardsInfo("Resource");
  const stakeholders = await getCardsInfo("Stakeholder");

  return (
    <Tabs defaultValue="policies">
      <TabsList>
        <TabsTrigger value="policies">
          <Image src={iconMapping.policy} width={32} height={32} alt="Policies" className="mr-1" />
          Policies
        </TabsTrigger>
        <TabsTrigger value="organizations">
          <Image src={iconMapping.organization} width={32} height={32} alt="Organizations" className="mr-1" />
          Organizations
        </TabsTrigger>
        <TabsTrigger value="litigations">
          <Image src={iconMapping.litigation} width={32} height={32} alt="Litigations" className="mr-1" />
          Litigations
        </TabsTrigger>
        <TabsTrigger value="resources">
          <Image src={iconMapping.resource} width={32} height={32} alt="Resources" className="mr-1" />
          Resources
        </TabsTrigger>
        <TabsTrigger value="stakeholders">
          <Image src={iconMapping.stakeholder} width={32} height={32} alt="Thought Leaders" className="mr-1" />
          Thought Leaders
        </TabsTrigger>
      </TabsList>
      <TabsContent value="policies">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* map through first 4 policies in table to present */}
            {policies.map((policy) => {
              return (
                <ResultCard
                  key={policy.policy_id}
                  data={{ ...policy, tableName: "Policies" }}
                />
              );
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="organizations">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2">
            {/* map through first 4 organizations in table to present */}
            {organizations.map((organization) => {
              return (
                <ResultCard
                  key={organization.organization_id}
                  data={{ ...organization, tableName: "Organizations" }}
                />
              );
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="litigations">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2">
            {/* map through first 4 litigations in table to present */}
            {litigations.map((litigation) => {
              return (
                <ResultCard
                  key={litigation.litigation_id}
                  data={{ ...litigation, tableName: "Litigations" }}
                />
              );
            })}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2">
            {/* map through first 4 resources in table to present */}
            {resources.map((resource) => {
              return (
                <ResultCard
                  key={resource.resource_id}
                  data={{ ...resource, tableName: "Resources" }}
                />
              );
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="stakeholders">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2">
            {/* map through first 4 stakeholders in table to present */}
            {stakeholders.map((stakeholder) => {
              return (
                <ResultCard
                  key={stakeholder.stakeholder_id}
                  data={{ ...stakeholder, tableName: "Thought Leaders" }}
                />
              );
            })}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SearchTabs;
