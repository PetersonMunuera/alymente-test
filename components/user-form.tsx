'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import zod from 'zod'

import { createUser } from '@/api/create-user'
import { editUser } from '@/api/edit-user'
import { User } from '@/app/@types/user'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

const userFormSchema = zod.object({
  avatar: zod.string().min(1, { message: 'Campo obrigatório' }),
  name: zod.string().min(1, { message: 'Campo obrigatório' }),
  country: zod.string().min(1, { message: 'Campo obrigatório' }),
  city: zod.string().min(1, { message: 'Campo obrigatório' }),
  company: zod.string().min(1, { message: 'Campo obrigatório' }),
  job: zod.string().min(1, { message: 'Campo obrigatório' }),
  account: zod.string().min(1, { message: 'Campo obrigatório' }),
  mother: zod.string().min(1, { message: 'Campo obrigatório' }),
})

type UserFormData = zod.infer<typeof userFormSchema>
interface UserFormProps {
  userData?: User
}

export function UserForm({ userData }: UserFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    values: userData,
  })

  async function handleUserForm(data: UserFormData) {
    const user = !userData
      ? await createUser({ user: data })
      : await editUser({ userId: userData.id, userData: data })

    const toastMessage = user
      ? `Usuário ${user.name} ${!userData ? 'cadastrado' : 'editado'} com sucesso.`
      : 'Falha ao excluir usuário'

    toast(toastMessage)

    if (!userData) reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleUserForm)}
      className="max-w-lg space-y-4"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="picture">Avatar</Label>
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files
            if (file) {
              // Atualiza manualmente o campo de arquivos no formulário
              setValue('avatar', file[0].name, { shouldValidate: true })
            }
          }}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" placeholder="Nome" {...register('name')} />
        <div className="text-xs text-destructive">{errors.name?.message}</div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">País</Label>
        <Input id="country" placeholder="País" {...register('country')} />
        <div className="text-xs text-destructive">
          {errors.country?.message}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">Cidade</Label>
        <Input id="city" placeholder="Cidade" {...register('city')} />
        <div className="text-xs text-destructive">{errors.city?.message}</div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Empresa</Label>
        <Input id="company" placeholder="Empresa" {...register('company')} />
        <div className="text-xs text-destructive">
          {errors.company?.message}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="job">Cargo</Label>
        <Input id="job" placeholder="Cargo" {...register('job')} />
        <div className="text-xs text-destructive">{errors.job?.message}</div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="account">Conta</Label>
        <Input id="account" placeholder="Conta" {...register('account')} />
        <div className="text-xs text-destructive">
          {errors.account?.message}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="mother">Nome da mãe</Label>
        <Input id="mother" placeholder="Nome da mãe" {...register('mother')} />
        <div className="text-xs text-destructive">{errors.mother?.message}</div>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" type="reset">
          Limpar campos
        </Button>
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  )
}
