import { getUsers } from '@/api/users'
import { DataTable } from '@/components/design-system/data-table'
import { Pagination } from '@/components/pagination'

import { columns } from './table-columns'

interface HomeProps {
  searchParams?: Promise<{
    page?: string
  }>
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams
  const currentPage = Number(params?.page) || 1
  const itemsPerPage = 10

  const paginatedUsers = await getUsers({
    page: currentPage,
    limit: itemsPerPage,
  })
  const allUsers = await getUsers({})
  const totalCountUsers = allUsers.length

  return (
    <div className="flex flex-col gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold tracking-tight">Usuários</h1>
      <DataTable columns={columns} data={paginatedUsers} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalCount={totalCountUsers}
      />
    </div>
  )
}
