'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import zod from 'zod'

import { User } from '@/app/@types/user'

import { Button } from './ui/button'
import { Input } from './ui/input'

const userFormSchema = zod.object({
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
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
  })

  function handleUserForm(data: UserFormData) {
    console.log(data)

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleUserForm)}
      className="max-w-lg space-y-4"
    >
      <div>
        <Input placeholder="Nome" {...register('name')} />
        <small>{errors.name?.message}</small>
      </div>
      <div>
        <Input placeholder="País" {...register('country')} />
        <small>{errors.country?.message}</small>
      </div>
      <div>
        <Input placeholder="Cidade" {...register('city')} />
        <small>{errors.city?.message}</small>
      </div>
      <div>
        <Input placeholder="Empresa" {...register('company')} />
        <small>{errors.company?.message}</small>
      </div>
      <div>
        <Input placeholder="Cargo" {...register('job')} />
        <small>{errors.job?.message}</small>
      </div>
      <div>
        <Input placeholder="Conta" {...register('account')} />
        <small>{errors.account?.message}</small>
      </div>
      <div>
        <Input placeholder="Nome da mãe" {...register('mother')} />
        <small>{errors.mother?.message}</small>
      </div>

      <Button type="submit">Salvar</Button>
    </form>
  )
}
