import { UserForm } from '@/components/user-form'

export default function CreateUserPage() {
  return (
    <div className="flex flex-col gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold tracking-tight">Cadastrar usuário</h1>
      <UserForm />
    </div>
  )
}
