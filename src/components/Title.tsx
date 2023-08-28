import clsx from 'clsx'

interface TitleProps {
  title: string
  className?: string
}

const Title: React.FC<TitleProps> = ({ title, className, ...props }) => {
  return (
    <h2
      className={clsx('font-medium tracking-tight text-gray-900', className)}
      {...props}
    >
      {title}
    </h2>
  )
}

export default Title
