'use server'

import { revalidateTag } from 'next/cache'

import { User } from '@/app/@types/user'

interface DeleteUserParams {
  userId: string
}

export async function deleteUser({ userId }: DeleteUserParams) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`)

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`Erro ao excluir usuário: ${response.statusText}`)
    }

    revalidateTag('delete-user')

    const deletedUser: User = await response.json()

    return deletedUser
  } catch (error) {
    console.error(error)
    return null
  }
}
