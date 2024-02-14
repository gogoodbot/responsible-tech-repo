import SearchIcon from "@/components/ui/SearchIcons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cardsHome } from "@/lib/actions";
import ResultCard from "./ResultCard";

const getCardsInfo = async (artifact) => {
  try {
    const cards = await cardsHome(artifact);
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
    <Tabs defaultValue="policies">
      <TabsList>
        <TabsTrigger value="policies">
          <SearchIcon type="policy" width={32} height={32} className="mr-1" />
          Policies
        </TabsTrigger>
        <TabsTrigger value="organizations">
          <SearchIcon type="organization" width={32} height={32} className="mr-1" />
          Organizations
        </TabsTrigger>
        <TabsTrigger value="litigations">
          <SearchIcon type="litigation" width={32} height={32} className="mr-1" />
          Litigations
        </TabsTrigger>
        <TabsTrigger value="resources">
          <SearchIcon type="resource" width={32} height={32} className="mr-1" />
          Resources
        </TabsTrigger>
        <TabsTrigger value="stakeholders">
          <SearchIcon type="stakeholder" width={32} height={32} className="mr-1" />
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
