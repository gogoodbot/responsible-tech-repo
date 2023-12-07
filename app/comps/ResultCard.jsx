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
// import { cardsHome } from "@/lib/actions";
import { Circle } from "lucide-react";

const ResultCard = ({ data }) => {
  const date = new Date(data.modified_on);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
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
            Organizations
          </div>
          <div className="flex items-center"></div>
          <div>{formattedDate}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
