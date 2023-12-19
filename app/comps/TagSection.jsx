import { Badge } from "@/components/ui/badge";
import { Hash } from "lucide-react";
import Link from "next/link";
import React from "react";

function TagSection({ tags }) {
  console.log("TAG SECTION");
  console.log(tags);
  return (
    <div className="mb-4 flex items-center">
      {tags &&
        tags.map((tag) => (
          <Badge
            className="cursor-pointer mr-4 bg-goodbot-primary-blue text-white hover:text-white hover:bg-black"
            key={tag}
          >
            <Hash className="mr-1" size={16} />
            <Link className="flex items-center" href={`/results?query=${tag}`}>
              {tag}
            </Link>
          </Badge>
        ))}
    </div>
  );
}

export default TagSection;
