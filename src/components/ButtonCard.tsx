import { ReactNode } from 'react'
import { CaretRight } from 'phosphor-react'

interface ButtonCardProps {
  url: string
  title: string
  description: string
  icon: ReactNode
}

export function ButtonCard({ url, title, description, icon }: ButtonCardProps) {
  return (
    <a
      href={url}
      className="flex bg-gray-700 rounded overflow-hidden items-stretch gap-3 md:gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">{icon}</div>
      <div className="py-6 leading-relaxed">
        <strong className="text-lg md:text-2xl">{title}</strong>
        <p className="text-xs md:text-sm text-gray-200 mt-2">{description}</p>
      </div>
      <div className="h-full p-6 flex items-center text-blue-500">
        <CaretRight size={24} />
      </div>
    </a>
  )
}
