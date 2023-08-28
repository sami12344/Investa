import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  variant?: 'solid' | 'outline'
  color?: 'blue' | 'white' | 'gray'
  className?: string
  href?: string
  children?: React.ReactNode
}

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    blue: 'relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-blue-900 hover:bg-white/90 active:bg-white/90 active:text-blue-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
} as const

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  color = 'gray',
  className,
  href,
  children,
  ...rest
}) => {
  const baseStyle = baseStyles[variant]
  const variantStyle = (variantStyles[variant] as Record<string, string>)[color]

  const combinedClassName = clsx(baseStyle, variantStyle, className)

 if (href) {
   return (
     <Link href={href} passHref={true} legacyBehavior={true}>
       <a className={combinedClassName} {...rest}>
         {children}
       </a>
     </Link>
   )
 } else {
   return (
     <button className={combinedClassName} {...rest}>
       {children}
     </button>
   )
 }
}

Button.displayName = 'Button'

export default Button
