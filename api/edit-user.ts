'use server'

import { revalidateTag } from 'next/cache'

import { User } from '@/app/@types/user'

type UserDataToEdit = Omit<User, 'createdAt' | 'id'>

interface EditUserParams {
  userId: string
  userData: UserDataToEdit
}

export async function editUser({ userId, userData }: EditUserParams) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`)

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData),
    })

    if (!response.ok) {
      throw new Error(`Erro ao editar usuário: ${response.statusText}`)
    }

    revalidateTag('edit-user')

    const editedUser: User = await response.json()

    return editedUser
  } catch (error) {
    console.error(error)
    return null
  }
}
