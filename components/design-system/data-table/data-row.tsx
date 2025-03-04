'use client'

import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

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
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  return (
    <TableRow key={data.id}>
      {columns.map((column) => (
        <TableCell key={column.accessorKey}>
          {data[column.accessorKey]}
        </TableCell>
      ))}
      <TableCell>
        <Link href={`/user/${data.id}/edit`}>
          <Button variant="outline" size="sm">
            <Pencil className="h-3 w-3" />
            <span className="sr-only">Editar usuário</span>
          </Button>
        </Link>
      </TableCell>
      <TableCell>
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Trash className="h-3 w-3" />
              <span className="sr-only">Excluir usuário</span>
            </Button>
          </DialogTrigger>
          <DeleteDialog user={data} handleIsOpen={setIsDeleteDialogOpen} />
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
