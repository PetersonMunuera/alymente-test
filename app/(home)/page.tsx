import { users } from '@/components/design-system/data'
import { DataTable } from '@/components/design-system/data-table'

import { columns } from './table-columns'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold tracking-tight">Usuários</h1>
      <DataTable columns={columns} data={users} />
    </div>
  )
}
