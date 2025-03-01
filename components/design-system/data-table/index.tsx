import { User } from '@/app/@types/user'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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
            {columns.map((column) => (
              <TableHead key={column.accessorKey}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((dataRow) => (
            <TableRow key={dataRow.id}>
              {columns.map((column) => (
                <TableCell key={column.accessorKey}>
                  {dataRow[column.accessorKey]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
