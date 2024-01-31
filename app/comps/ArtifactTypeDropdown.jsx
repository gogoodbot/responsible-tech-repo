// ArtifactTypeDropdown.js

import React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function ArtifactTypeDropdown({ position, setPosition }) {
  const artifactTypes = ["Litigation", "Policy", "Resource", "Stakeholder", "Organization"];

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {position ? (
              <>
                {position}
              </>
            ) : (
              <>Types</>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {artifactTypes.map((artifactType) => (
              <DropdownMenuRadioItem key={artifactType} value={artifactType}>
                {artifactType}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
