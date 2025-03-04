import { getUserById } from '@/api/get-user-by-id'
import { UserForm } from '@/components/user-form'

interface EditUserPageParams {
  params: {
    id: string
  }
}

export default async function EditUserPage({ params }: EditUserPageParams) {
  const user = await getUserById({ userId: params.id })

  if (!user) return

  return (
    <div className="flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold tracking-tight">Editar usuário</h1>
      <UserForm userData={user} />
    </div>
  )
}
