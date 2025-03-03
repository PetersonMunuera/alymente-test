import { MouseEventHandler, ReactNode } from 'react'

import { Button as UIButton } from '../ui/button'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <UIButton
      type={type}
      variant={variant === 'primary' ? 'default' : variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </UIButton>
  )
}
