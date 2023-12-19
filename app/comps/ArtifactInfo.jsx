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
  "name",
  "tags"
];


function ArtifactInfo({ params }) {
  const artifact = params[0];
  let keysInOrganization = Object.keys(artifact).filter(key => !bannedKeys.includes(key) && artifact[key]);

  // Move 'summary' to the beginning of the array
  keysInOrganization = ['summary', ...keysInOrganization.filter(key => key !== 'summary')];

  const formattedDate = new Date(artifact.modified_on).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 max-w-4xl mx-auto ">
      {keysInOrganization.map((key) => (
        <div key={key} className={`${key !== 'summary' ? 'mb-4' : 'mb-8'}`}>
          {key === 'summary' ? (
            <div>
              {/* <h2 className="text-3xl font-medium mb-2">Summary</h2> */}
              <p className="text-gray-700 dark:text-initial text-lg">{artifact[key]}</p>
            </div>
          ) : (
            <div className="text-sm">
              <h3 className="text-lg font-medium capitalize mb-1">{key.replace('_', ' ')}</h3>
              <p className="text-gray-700 dark:text-initial">
                {key === "modified_on" ? formattedDate : artifact[key]}
                {key === "link" && (
                  <a href={artifact[key]} className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                    Visit Link
                  </a>
                )}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ArtifactInfo;
