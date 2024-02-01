"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import Link from "next/link";

const ResultCard = ({ data }) => {
  const date = new Date(data.modified_on);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const id =
    data.organization_id ||
    data.litigation_id ||
    data.policy_id ||
    data.resource_id ||
    data.stakeholder_id;

  const getIcon = () => {
    // Use up to 2 hex codes in the URL for colour gradient
    const iconMapping = {
      policy: "https://img.icons8.com/nolan/64/0aa0f5/0aa0f5/terms-and-conditions.png",
      organization: "https://img.icons8.com/nolan/64/7f0af5/7f0af5/company.png",
      litigation: "https://img.icons8.com/nolan/64/f73b6a/f73b6a/scales.png",
      resource: "https://img.icons8.com/nolan/64/f5a40a/f5a40a/commodity.png",
      stakeholder: "https://img.icons8.com/nolan/64/38bdf8/38bdf8/project-management.png", // default colour sky-400
    };
    if (data.organization_id) {
      return iconMapping.organization;
    }
    if (data.litigation_id) {
      return iconMapping.litigation;
    }
    if (data.policy_id) {
      return iconMapping.policy;
    }
    if (data.resource_id) {
      return iconMapping.resource;
    }
    if (data.stakeholder_id) {
      return iconMapping.stakeholder;
    }
    return iconMapping.policy;
  };

  const iconUrl = getIcon();

  return (
    <Link href={`/artifact/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle className>{data.name}</CardTitle>
          <CardDescription>{formattedDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{data.summary}</p>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Image src={iconUrl} width={16} height={16} alt={`${data.tableName} icon`} className="mr-1" />
              {data.tableName}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ResultCard;
