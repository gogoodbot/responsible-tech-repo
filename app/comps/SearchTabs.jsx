import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResultCard from "./ResultCard";
// import { organizationHome } from "@/lib/actions";
import { cardsHome } from "@/lib/actions";

const getCardsInfo = async (artifact) => {
  try {
    const cards = await cardsHome(artifact);
    // console.log("cards at searchTabs", cards);
    return cards;
  } catch (error) {
    console.log(error);
  }
};

const SearchTabs = async () => {
  const organizations = await getCardsInfo("Organization");
  const litigations = await getCardsInfo("Litigation");
  const policies = await getCardsInfo("Policy");
  const resources = await getCardsInfo("Resource");
  const stakeholders = await getCardsInfo("Stakeholder");
  return (
    <Tabs defaultValue="organizations">
      <TabsList>
        <TabsTrigger value="organizations">Organizations</TabsTrigger>
        <TabsTrigger value="litigations">Litigations</TabsTrigger>
        <TabsTrigger value="policies">Policies</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
      </TabsList>
      <TabsContent value="organizations">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* map through first 4 organizations in table to present */}
            {organizations.map((organization) => {
              return (
                <ResultCard
                  key={organization.organization_id}
                  data={organization}
                />
              );
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="litigations">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* map through first 4 litigations in table to present */}
            {litigations.map((Litigation) => {
              return (
                <ResultCard key={Litigation.Litigation_id} data={Litigation} />
              );
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="policies">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* map through first 4 litigations in table to present */}
            {policies.map((policy) => {
              return <ResultCard key={policy.policy_id} data={policy} />;
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="resources">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* map through first 4 litigations in table to present */}
            {resources.map((resource) => {
              return <ResultCard key={resource.resource_id} data={resource} />;
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="stakeholders">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* map through first 4 litigations in table to present */}
            {stakeholders.map((stakeholder) => {
              return (
                <ResultCard
                  key={stakeholder.stakeholder_id}
                  data={stakeholder}
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
