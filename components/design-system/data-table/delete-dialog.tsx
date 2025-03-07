'use client'

import { toast } from 'sonner'

import { deleteUser } from '@/api/delete-user'
import { User } from '@/app/@types/user'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface DeleteDialogProps {
  user: User
  handleIsOpen: (isOpen: boolean) => void
}

export function DeleteDialog({ user, handleIsOpen }: DeleteDialogProps) {
  async function handleDeleteUser() {
    const deletedUser = await deleteUser({ userId: user.id })

    const toastMessage = deletedUser
      ? `Usuário ${deletedUser.name} excluído com sucesso.`
      : 'Falha ao excluir usuário'

    toast(toastMessage)
    handleIsOpen(false)
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{user.name}</DialogTitle>
        <DialogDescription>
          Deseja realmente excluir esse usuário?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex gap-2">
        <DialogClose asChild>
          <Button type="button" variant="ghost">
            Cancelar
          </Button>
        </DialogClose>
        <Button type="submit" onClick={handleDeleteUser} variant="destructive">
          Excluir usuário
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
