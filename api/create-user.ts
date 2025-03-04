'use server'

import { revalidateTag } from 'next/cache'

import { User } from '@/app/@types/user'

type UserDataToCreate = Omit<User, 'createdAt' | 'id'>

interface CreateUserParams {
  user: UserDataToCreate
}

export async function createUser({ user }: CreateUserParams) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/users/`)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      throw new Error(`Erro ao cadastrar usuário: ${response.statusText}`)
    }

    revalidateTag('create-user')

    const createdUser: User = await response.json()

    return createdUser
  } catch (error) {
    console.error(error)
    return null
  }
}
