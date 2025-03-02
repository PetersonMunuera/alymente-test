import { MouseEventHandler, ReactNode } from 'react'

import { Button as UIButton } from '../ui/button'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
}: ButtonProps) {
  return (
    <UIButton
      type={type}
      variant={variant === 'primary' ? 'default' : variant}
      onClick={onClick}
    >
      {children}
    </UIButton>
  )
}
