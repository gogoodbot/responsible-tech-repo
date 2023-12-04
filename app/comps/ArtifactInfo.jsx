import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const bannedKeys = [
  "organization_id",
  "policy_id",
  "stakeholder_id",
  "litigation_id",
  "resource_id",
  "modified_by",
  "created_by",
  "created_on",
];

function ArtifactInfo({ params }) {
  const artifact = params[0];
  const keysInOrganization = Object.keys(artifact);
  let keysWithInfo = [];
  keysInOrganization.forEach((key) => {
    if (!bannedKeys.includes(key) && artifact[key]) {
      keysWithInfo.push(key);
    }
  });
  if (keysWithInfo.includes("summary")) {
    const sortKeys = keysWithInfo.filter((key) => key !== "summary");
    keysWithInfo = [...sortKeys, "summary"];
  }

  const rowNum = Math.ceil(keysWithInfo.length / 4);
  const date = new Date(artifact.modified_on);
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  artifact.modified_on = formatted;

  return (
    <section className={`grid grid-cols-4 grid-rows-${rowNum} gap-2 mt-5`}>
      {keysWithInfo.map((key) => {
        return (
          <Card
            className={`${
              key === "summary" && "row-start-" + rowNum + 1 + " col-span-4"
            }`}
            key={key}
          >
            <CardHeader>
              <CardTitle>
                {key === "modified_on"
                  ? "last updated"
                  : key === "start_date"
                  ? "start date"
                  : key}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {key !== "link" ? (
                  artifact[key]
                ) : (
                  <Link href={artifact[key]} target="_blank">
                    {artifact[key]}
                  </Link>
                )}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}

export default ArtifactInfo;
