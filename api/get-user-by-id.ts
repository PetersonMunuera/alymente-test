'use server'

import { User } from '@/app/@types/user'

interface GetUserByIdParams {
  userId: string
}

export async function getUserById({ userId }: GetUserByIdParams) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`)

  try {
    const response = await fetch(url, {
      cache: 'force-cache',
      next: {
        tags: ['edit-user'],
      },
    })

    if (!response.ok) {
      throw new Error(`Erro ao buscar usuário: ${response.statusText}`)
    }

    const user: User = await response.json()

    return user
  } catch (error) {
    console.error(error)
    return null
  }
}
