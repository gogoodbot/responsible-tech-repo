// TagSelector.js

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";

export default function TagSelector({ selectedTag, onSelect }) {
  const [open, setOpen] = useState(false);
  const tagKeywords = [
    { value: "media", label: "Media" },
    { value: "social-innovation", label: "Social Innovation" },
    { value: "data", label: "Data" },
    // ... other tag keywords ...
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="w-[150px] justify-start">
          {selectedTag ? (
            <>
              {selectedTag.label}
            </>
          ) : (
            <>+ Add a tag</>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="right" align="start">
        <Command>
          <CommandInput placeholder="Find a proper tag..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {tagKeywords.map((tag) => (
                <CommandItem key={tag.value} value={tag.value} onSelect={() => { onSelect(tag); setOpen(false); }}>
                  <span>{tag.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
