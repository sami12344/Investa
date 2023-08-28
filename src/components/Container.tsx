import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface ContainerProps {
  className?: string
  children?: ReactNode
}

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    />
  )
}

export default Container
