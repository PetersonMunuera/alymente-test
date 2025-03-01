import { Pencil, Search, Trash } from 'lucide-react'

import { User } from '@/app/@types/user'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '../ui/button'

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
            <TableRow key={dataRow.id}>
              <TableCell>
                <Button variant="outline" size="sm">
                  <Search className="h-3 w-3" />
                  <span className="sr-only">Detalhes do usuário</span>
                </Button>
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.accessorKey}>
                  {dataRow[column.accessorKey]}
                </TableCell>
              ))}
              <TableCell>
                <Button variant="outline" size="sm">
                  <Pencil className="h-3 w-3" />
                  <span className="sr-only">Editar usuário</span>
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  <Trash className="h-3 w-3" />
                  <span className="sr-only">Excluir usuário</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
