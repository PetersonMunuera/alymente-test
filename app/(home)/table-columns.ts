import { ColumnType } from '@/components/design-system/data-table'

import { User } from '../@types/user'

export const columns: ColumnType<User>[] = [
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
