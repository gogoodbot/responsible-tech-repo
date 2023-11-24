import Search from "../comps/Search";
import Nav from "../comps/nav";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function search() {
  return (
    <>
    <Nav />

    <section className="flex-1 space-y-4 p-8 pt-6">
      <Search />

      <div className="flex flex-wrap overflow-hidden">
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 ">
          <Card>
            <CardHeader>
              <CardTitle>Digital Charter Implimentation Act</CardTitle>
              <CardDescription>
              (Bill C-27)
                </CardDescription>
              <CardDescription>
                
              <Badge variant="secondary">Legislation</Badge>
              <Badge variant="secondary">Policy</Badge>
              <Badge variant="secondary">tag</Badge>
              </CardDescription>
            </CardHeader>

            <CardContent>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum justo tristique, lacinia erat dapibus, placerat justo. Fusce facilisis arcu vitae eleifend imperdiet. Praesent metus velit.</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 ">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>

            <CardContent>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 ">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>

            <CardContent>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 ">
        <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>

            <CardContent>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

        </div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 ">

        <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>

            <CardContent>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <Badge variant="secondary">tag</Badge>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 "></div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 "></div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 "></div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 "></div>
        <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 "></div>
      </div>
    </section>
    </>
  );
}
