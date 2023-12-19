import { Badge } from "@/components/ui/badge";
import { Hash } from "lucide-react";
import Link from "next/link";
import React from "react";

function TagSection({ tags }) {
  return (
    <div className="mb-4 flex items-center">
      {tags &&
        tags.map((tag) => (
          <Badge
            className="cursor-pointer mr-4 bg-goodbot-primary-blue text-white hover:text-white hover:bg-black"
            key={tag.keyword}
          >
            <Hash className="mr-1" size={16} />
            <Link
              className="flex items-center"
              href={`/results?query=${tag.keyword}`}
            >
              {tag.keyword}
            </Link>
          </Badge>
        ))}
    </div>
  );
}

export default TagSection;
