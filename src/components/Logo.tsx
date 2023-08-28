import clsx from 'clsx'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface LogoProps {
  className?: string
  children?: ReactNode
}

const Logo = ({ className, children }: LogoProps) => {
  return (
    <Link href={'/'}>
      <h2
        className={clsx(
          'text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300',
          className
        )}
      >
        {children || 'Investa'}
      </h2>
    </Link>
  )
}

export default Logo
