import { Button } from '../ui/button'
import { Input as UIInput } from '../ui/input'
import { Label } from '../ui/label'

interface InputProps {
  disabled?: boolean
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
}

export function Input({ disabled, type, placeholder }: InputProps) {
  return <UIInput disabled={disabled} type={type} placeholder={placeholder} />
}

export function InputWithLabelAndButton({
  disabled,
  type,
  placeholder,
}: InputProps) {
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor={`input-${placeholder}`}>{placeholder}</Label>
      <UIInput
        id={`input-${placeholder}`}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
      />
      <Button type="submit">Enviar</Button>
    </div>
  )
}
