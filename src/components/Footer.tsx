import { LogoRocketseat } from './LogoRocketseat'

export function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:justify-between items-center py-6 mx-6 border-t border-gray-600">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <LogoRocketseat />
        <span className=" text-base text-gray-300">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>

      <div>
        <a href="#" className=" text-base text-gray-300 hover:underline">
          Políticas de privacidade
        </a>
      </div>
    </div>
  )
}
