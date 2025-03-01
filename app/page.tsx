import { ColumnType, DataTable } from '@/components/design-system/data-table'
import { users } from '@/components/design-system/data-table/data'

import { User } from './@types/user'

export default function Home() {
  const columns: ColumnType<User>[] = [
    {
      accessorKey: 'name',
      header: 'Nome',
    },
    {
      accessorKey: 'country',
      header: 'País',
    },
    {
      accessorKey: 'city',
      header: 'Cidade',
    },
    {
      accessorKey: 'company',
      header: 'Empresa',
    },
    {
      accessorKey: 'job',
      header: 'Cargo',
    },
  ]

  return (
    <div className="flex justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="w-[1200px]">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  )
}
