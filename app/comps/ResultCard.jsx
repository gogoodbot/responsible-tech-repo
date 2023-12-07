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

  return (
    <Link href={`/artifact/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-muted-foreground">{data.summary}</p>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
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
