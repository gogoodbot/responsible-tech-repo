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

const ResultCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
          pulvinar ipsum.{" "}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            Organizations
          </div>
          <div className="flex items-center"></div>
          <div>Updated April 2023</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
