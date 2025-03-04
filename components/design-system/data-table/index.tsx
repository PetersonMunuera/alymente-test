import { User } from '@/app/@types/user'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { DataRow } from './data-row'

export type ColumnType<User> = {
  accessorKey: keyof User
  header: string
}

interface DataTableProps {
  columns: ColumnType<User>[]
  data: User[]
}

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[64px]"></TableHead>
            {columns.map((column) => (
              <TableHead key={column.accessorKey}>{column.header}</TableHead>
            ))}
            <TableHead className="w-[64px]"></TableHead>
            <TableHead className="w-[64px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((dataRow) => (
            <DataRow key={dataRow.id} columns={columns} data={dataRow} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
