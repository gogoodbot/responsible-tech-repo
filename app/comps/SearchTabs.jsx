import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResultCard from "./ResultCard";
import { organizationHome } from "@/lib/actions";

const SearchTabs = async () => {
  const organizations = await organizationHome();
  // console.log(organizations);
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
              <ResultCard data={{ organization }} />;
            })}
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="litigations">
        Change your litigations here.
      </TabsContent>
      <TabsContent value="policies">Change your policies here.</TabsContent>
      <TabsContent value="resources">Change your resources here.</TabsContent>
      <TabsContent value="stakeholders">
        Change your stakeholders here.
      </TabsContent>
    </Tabs>
  );
};

export default SearchTabs;
