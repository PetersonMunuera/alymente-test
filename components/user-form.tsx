'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import zod from 'zod'

import { createUser } from '@/api/create-user'
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
  data?: User
}

export function UserForm({ data }: UserFormProps) {
  console.log(data)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
  })

  async function handleUserForm(data: UserFormData) {
    console.log(data)

    const createdUser = await createUser({ user: data })

    const toastMessage = createdUser
      ? `Usuário ${createdUser.name} cadastrado com sucesso.`
      : 'Falha ao excluir usuário'

    toast(toastMessage)

    reset()
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
        <Input placeholder="Nome" {...register('name')} />
        <div className="text-xs text-destructive">{errors.name?.message}</div>
      </div>
      <div className="space-y-2">
        <Input placeholder="País" {...register('country')} />
        <div className="text-xs text-destructive">
          {errors.country?.message}
        </div>
      </div>
      <div className="space-y-2">
        <Input placeholder="Cidade" {...register('city')} />
        <div className="text-xs text-destructive">{errors.city?.message}</div>
      </div>
      <div className="space-y-2">
        <Input placeholder="Empresa" {...register('company')} />
        <div className="text-xs text-destructive">
          {errors.company?.message}
        </div>
      </div>
      <div className="space-y-2">
        <Input placeholder="Cargo" {...register('job')} />
        <div className="text-xs text-destructive">{errors.job?.message}</div>
      </div>
      <div className="space-y-2">
        <Input placeholder="Conta" {...register('account')} />
        <div className="text-xs text-destructive">
          {errors.account?.message}
        </div>
      </div>
      <div className="space-y-2">
        <Input placeholder="Nome da mãe" {...register('mother')} />
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
