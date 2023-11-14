import { Button } from "@/components/ui/button";
import React from "react";

const Tags = () => {
  return (
    <div className="flex justify-between gap-3 mt-5">
      <Button className="font-poppins font-semibold rounded-full">
        Very long tags
      </Button>
      <Button className="font-poppins font-semibold rounded-full">
        long tag
      </Button>
      <Button className="font-poppins font-semibold rounded-full">
        small tag
      </Button>
      <Button className="font-poppins font-semibold rounded-full">
        small tag
      </Button>
    </div>
  );
};

export default Tags;
