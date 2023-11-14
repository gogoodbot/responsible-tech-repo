import { Button } from "@/components/ui/button";
import React from "react";

const Tags = () => {
  return (
    <div className="flex justify-between gap-3 mt-5">
      <Button className="bg-goodbot-secondary-lightBlue text-goodbot-primary-starryNightBlack font-poppins font-semibold rounded-full">
        Very super hyper mega long tags
      </Button>
      <Button className="bg-goodbot-secondary-lightBlue text-goodbot-primary-starryNightBlack font-poppins font-semibold rounded-full">
        long but not that long tag
      </Button>
      <Button className="bg-goodbot-secondary-lightBlue text-goodbot-primary-starryNightBlack font-poppins font-semibold rounded-full">
        medium length tag
      </Button>
      <Button className="bg-goodbot-secondary-lightBlue text-goodbot-primary-starryNightBlack font-poppins font-semibold rounded-full">
        small tag
      </Button>
    </div>
  );
};

export default Tags;
