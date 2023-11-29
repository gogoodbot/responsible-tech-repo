import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { globalSearch } from "@/lib/actions";

export default async function ResultsCard(query) {
  console.log("resultCard",query);
  try {
    const global = await globalSearch(query);
  } catch (error) {
    console.log(error);
  }

  // console.log(global);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Digital Charter Implimentation Act</CardTitle>
        <CardDescription>(Bill C-27)</CardDescription>
        {/* <CardDescription>
            
          <Badge variant="secondary">Legislation</Badge>
          <Badge variant="secondary">Policy</Badge>
          <Badge variant="secondary">tag</Badge>
          </CardDescription> */}
      </CardHeader>

      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          condimentum justo tristique, lacinia erat dapibus, placerat justo.
          Fusce facilisis arcu vitae eleifend imperdiet. Praesent metus velit.
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
