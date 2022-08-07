import { DefaultUi, Youtube, Player } from '@vime/react'
import {
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image as IconImage,
} from 'phosphor-react'

import { ButtonCard } from './ButtonCard'

import '@vime/core/themes/default.css'

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="KxNkjsowLpU" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/jfernandesdev.png"
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="text-2xl block">Jeferson Fernandes</strong>
                <span className="text-gray-200 text-sm block">
                  Front-end developer | JS | TS | Next
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="buttonWithIcon bg-green-500 hover:bg-green-700"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href="#"
              className="buttonWithIcon border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <ButtonCard
            url="#"
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu
                desenvolvimento"
            icon={<FileArrowDown size={40} />}
          />

          <ButtonCard
            url="#"
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            icon={<IconImage size={40} />}
          />
        </div>
      </div>
    </div>
  )
}
