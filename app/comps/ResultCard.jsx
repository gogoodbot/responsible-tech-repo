"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle } from "lucide-react";
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

    const getCircleColor = () => {
      if (data.organization_id) {
        return 'text-blue-500 fill-blue-500'; // Color for organization
      }
      if (data.litigation_id) {
        return 'text-green-500 fill-green-500'; // Color for litigation
      }
      if (data.policy_id) {
        return 'text-red-500 fill-red-500'; // Color for policy
      }
      if (data.resource_id) {
        return 'text-yellow-500 fill-yellow-500'; // Color for resource
      }
      if (data.stakeholder_id) {
        return 'text-purple-500 fill-purple-500'; // Color for stakeholder
      }
      return 'text-sky-400 fill-sky-400'; // Default color
    };
    const circleColor = getCircleColor();

  return (
    <Link href={`/artifact/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{data.summary}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Circle className={`mr-1 h-3 w-3 ${circleColor}`} />
              {data.tableName}
            </div>
            <div className="flex items-center"></div>
            <div>{formattedDate}</div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ResultCard;
