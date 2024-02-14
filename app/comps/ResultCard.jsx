"use client";

import SearchIcon from '@/components/ui/SearchIcons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    if (data.organization_id) {
      return "organization";
    }
    if (data.litigation_id) {
      return "litigation";
    }
    if (data.policy_id) {
      return "policy";
    }
    if (data.resource_id) {
      return "resource";
    }
    if (data.stakeholder_id) {
      return "stakeholder";
    }
    return "policy";
  };

  const icon = getIcon();

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
              <SearchIcon type={icon} width={16} height={16} className="mr-1" />
              {data.tableName}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ResultCard;
