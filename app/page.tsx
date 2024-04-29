"use client";

import { DataTable } from "./_components/data_table";
import { useDataFetching } from "./_hooks/useDataFetching";
import { Checkbox } from "@/components/ui/checkbox";



export default function HomePage() {
    

  
    const { data, columns } = useDataFetching();
    const i=     {
        id: "select",
        sticky: 'left',
        header: ({ table }) => {
            console.log(table)
            return (
          <Checkbox
            {...{
              checked: table.getIsSomeRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              //  onClick: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        )}
        ,
        cell:  ({ row }) => (
            <Checkbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onClick: row.getToggleSelectedHandler(),
              }}
            />
          ),
        
      }
          const  columnsSelection=[i,...columns]

            console.log(columns)
            
            // TASK : Create the feature for selecting rows in DataTable
            // const { rowSelection, setRowSelection } = useRowSelection();

    return (
        <div className="flex flex-col gap-10 items-center p-10">
            <span className="text-3xl text-gray-700 font-bold">Task Details</span>
            <div className="max-w-screen-lg flex size-full flex-col">
          
                <DataTable columns={columnsSelection} data={data}  />
     
            </div>
        </div>
    );
}
