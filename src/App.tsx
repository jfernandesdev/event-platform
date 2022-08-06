import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
      }
    }
  }
`
interface Lesson {
  id: string
  title: string
  teacher: {
    name: string
    bio: string
  }
}

export function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  return (
    <>
      <h1 className="title">Hello World!</h1>

      <ul>
        {data?.lessons.map((lesson: Lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </>
  )
}
