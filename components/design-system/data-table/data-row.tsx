import { Pencil, Search, Trash } from 'lucide-react'

import { User } from '@/app/@types/user'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { ColumnType } from '.'
import { DeleteDialog } from './delete-dialog'

interface DataRowProps {
  data: User
  columns: ColumnType<User>[]
}

export function DataRow({ data, columns }: DataRowProps) {
  return (
    <TableRow key={data.id}>
      <TableCell>
        <Button variant="outline" size="sm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do usuário</span>
        </Button>
      </TableCell>
      {columns.map((column) => (
        <TableCell key={column.accessorKey}>
          {data[column.accessorKey]}
        </TableCell>
      ))}
      <TableCell>
        <Button variant="outline" size="sm">
          <Pencil className="h-3 w-3" />
          <span className="sr-only">Editar usuário</span>
        </Button>
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Trash className="h-3 w-3" />
              <span className="sr-only">Excluir usuário</span>
            </Button>
          </DialogTrigger>
          <DeleteDialog user={data} />
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
