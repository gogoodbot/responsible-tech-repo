// TagSelectorList.js

import React from "react";
import { FormField } from "@/components/ui/form";
import TagSelector from "./TagSelector";
import { Button } from "@/components/ui/button";

export default function TagSelectorList({ form, selectedTags, onSelect, addTagSelector, removeLastTag }) {
  return (
    <FormField
      control={form?.control} //This ensures that if form is undefined or null, the code won't throw an error when trying to access the control property. Instead, it will return undefined. It's a way to handle potential nullish values in a more concise manner.
      name="tags"
      render={({ field }) => (
        <div>
          <Button className="mr-4" type="button" onClick={addTagSelector}>
            Add Tag
          </Button>
          {selectedTags.length > 0 && (
            <Button className="mr-4" type="button" onClick={removeLastTag}>
              Remove Last Tag
            </Button>
          )}
          {selectedTags.map((selectedTag, index) => (
            <div key={index} className="mb-2.5">
              <TagSelector selectedTag={selectedTag} onSelect={(tag) => onSelect(index, tag)} />
            </div>
          ))}
        </div>
      )}
    />
  );
}
