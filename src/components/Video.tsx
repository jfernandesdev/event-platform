import { DefaultUi, Youtube, Player } from '@vime/react'

import {
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image as IconImage,
} from 'phosphor-react'

import { ButtonCard } from './ButtonCard'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../graphql/generated'

interface VideoProps {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p>Carregando...</p>
      </div>
    )
  }

  console.log(data)

  return (
    <div className="flex-1 h-[calc(100vh_-_75px)] overflow-auto">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-4">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
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
