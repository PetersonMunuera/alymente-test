import { User } from '@/app/@types/user'

const { API_URL } = process.env

interface GetUsersParams {
  page?: number
  limit?: number
}

export async function getUsers({ page, limit }: GetUsersParams) {
  const url = new URL(`${API_URL}/users`)

  if (page && limit) {
    url.searchParams.append('page', String(page))
    url.searchParams.append('limit', String(limit))
  }

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Erro ao buscar usuários: ${response.statusText}`)
    }

    const users: User[] = await response.json()

    return users
  } catch (error) {
    console.error(error)
    return []
  }
}
