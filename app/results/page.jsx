import Search from "../comps/Search";
import ResultsCard from "../comps/ResultCard";

export default function results() {
  return (
    <>
      <section className="flex-1 space-y-4 p-8 pt-6">
        <Search />

        <div className="flex flex-wrap overflow-hidden">
          <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 ">
            <ResultsCard />
          </div>

          <div className="w-1/4 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:w-1/4 lg:w-1/4 xl:w-1/4 "></div>
        </div>
      </section>
    </>
  );
}
