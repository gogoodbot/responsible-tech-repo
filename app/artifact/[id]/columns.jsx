"use client";

import { Button } from "@/components/ui/button";
import Image from 'next/image';

export const columns = [
  {
    accessorKey: "tableName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <Image
            src="https://img.icons8.com/nolan/64/0aa0f5/sorting-arrows--v1.png"
            alt="icon for column sort"
            width={24}
            height={24}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      const data = row.getValue("tableName");
      return (
        <div className="text-center">
          {data === "Stakeholder" ? "Thought Leaders" : data}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <Image
            src="https://img.icons8.com/nolan/64/0aa0f5/sorting-arrows--v1.png"
            alt="icon for column sort"
            width={24}
            height={24}
          />
        </Button>
      );
    },
  },
  {
    accessorKey: "summary",
    header: "Summary",
  },
  {
    accessorKey: "modified_on",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Updated
          <Image
            src="https://img.icons8.com/nolan/64/0aa0f5/sorting-arrows--v1.png"
            alt="icon for column sort"
            width={24}
            height={24}
          />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("modified_on"));
      const formatted = date.toLocaleDateString();
      return <div className="text-center">{formatted}</div>;
    },
  },
];
