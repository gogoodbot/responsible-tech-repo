import Image from 'next/image';
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
  "tags",
];

// Use up to 2 hex codes in the URL for colour gradient
const iconMapping = {
  country: "https://img.icons8.com/nolan/64/06badb/0aa0f5/globe-earth.png",
  type: "https://img.icons8.com/nolan/64/06badb/0aa0f5/sorting-answers.png",
  link: "https://img.icons8.com/nolan/64/06badb/0aa0f5/internet.png",
  mandate: "https://img.icons8.com/nolan/64/06badb/0aa0f5/agreement.png",
  start_date: "https://img.icons8.com/nolan/64/06badb/0aa0f5/planner.png",
  modified_on: "https://img.icons8.com/nolan/64/06badb/0aa0f5/edit-property.png",
};

function ArtifactInfo({ params }) {
  const artifact = params[0];
  let keysInOrganization = Object.keys(artifact).filter(
    (key) => !bannedKeys.includes(key) && artifact[key]
  );

  // Move 'summary' to the beginning of the array
  keysInOrganization = [
    "summary",
    ...keysInOrganization.filter((key) => key !== "summary"),
  ];

  const formattedDate = new Date(artifact.modified_on).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="p-6 max-w-4xl mx-auto ">
      {keysInOrganization.map((key) => (
        <div key={key} className={`${key !== "summary" ? "mb-4" : "mb-8"}`}>
          {key === "summary" ? (
            <div>
              {/* <h2 className="text-3xl font-medium mb-2">Summary</h2> */}
              <p className="text-gray-700 dark:text-initial text-lg">
                {artifact[key]}
              </p>
            </div>
          ) : (
            <div className="text-sm flex items-center">
              <Image
                src={iconMapping[key]}
                alt={`${key} icon`}
                width={48}
                height={48}
                className="mr-2"
              />
              <div>
                <h3 className="text-lg font-medium capitalize mb-1">
                  {key.replace("_", " ")}
                </h3>
                <p className="text-gray-700 dark:text-initial">
                  {key === "modified_on" ? formattedDate : (
                    <>
                      {(key === "link" || key === "website") && (
                        <Link
                          href={artifact[key]}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {artifact[key]}
                        </Link>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ArtifactInfo;
