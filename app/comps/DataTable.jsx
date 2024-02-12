"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import SearchIcon from '@/components/ui/SearchIcons';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DataTable({ columns, data }) {
  const router = useRouter();
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleClick = (data) => {
    let tableId = "";
    if (data["Child_Id"]) {
      tableId = data["Child_Id"];
    } else if (data["id"]) {
      tableId = data["id"];
    } else {
      const lowerCaseTable =
        data.tableName[0].toLowerCase() + data.tableName.slice(1);
      console.log("lowerCaseTableName", lowerCaseTable);
      tableId = data[`${lowerCaseTable}_id`];
    }

    router.push(`/artifact/${tableId}`);
  };

  return (
    <div>
      {/* Categories */}
      <div className="flex flex-row justify-center gap-3 text-goodbot-primary-teal font-bold font-openSans">
        <Button
          className="hover:border-2 hover:border-goodbot-primary-teal hover:bg-white border-0 hover:text-goodbot-primary-teal bg-white text-goodbot-primary-teal font-bold font-openSans text-lg"
          onClick={() => table.getColumn("tableName")?.setFilterValue("")}
        >
          All
        </Button>
        <Button
          className="hover:border-2 hover:border-goodbot-primary-teal hover:bg-white border-0 hover:text-goodbot-primary-teal bg-white text-goodbot-primary-teal font-bold font-openSans text-lg"
          onClick={() =>
            table.getColumn("tableName")?.setFilterValue("Litigation")
          }
        >
          <SearchIcon type="litigation" width={32} height={32} />
          Litigation
        </Button>
        <Button
          className="hover:border-2 hover:border-goodbot-primary-teal hover:bg-white border-0 hover:text-goodbot-primary-teal bg-white text-goodbot-primary-teal font-bold font-openSans text-lg"
          onClick={() =>
            table.getColumn("tableName")?.setFilterValue("Organization")
          }
        >
          <SearchIcon type="organization" width={32} height={32} />
          Organization
        </Button>
        <Button
          className="hover:border-2 hover:border-goodbot-primary-teal hover:bg-white border-0 hover:text-goodbot-primary-teal bg-white text-goodbot-primary-teal font-bold font-openSans text-lg"
          onClick={() => table.getColumn("tableName")?.setFilterValue("Policy")}
        >
          <SearchIcon type="policy" width={32} height={32} />
          Policy
        </Button>
        <Button
          className="hover:border-2 hover:border-goodbot-primary-teal hover:bg-white border-0 hover:text-goodbot-primary-teal bg-white text-goodbot-primary-teal font-bold font-openSans text-lg"
          onClick={() =>
            table.getColumn("tableName")?.setFilterValue("Resource")
          }
        >
          <SearchIcon type="resource" width={32} height={32} />
          Resource
        </Button>
        <Button
          className="hover:border-2 hover:border-goodbot-primary-teal hover:bg-white border-0 hover:text-goodbot-primary-teal bg-white text-goodbot-primary-teal font-bold font-openSans text-lg"
          onClick={() =>
            table.getColumn("tableName")?.setFilterValue("Stakeholder")
          }
        >
          <SearchIcon type="stakeholder" width={48} height={48} />
          Thought Leader
        </Button>
      </div>
      {/* Filters */}
      <div className="flex flex-row justify-start gap-1">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by name..."
            value={table.getColumn("name")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
      </div>
      {/* table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    // passing data from the cell when clicked
                    <TableCell
                      onClick={() => handleClick(data[row.id])}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
