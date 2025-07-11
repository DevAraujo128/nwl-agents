import { QuestionForm } from '@/components/question-form'
import { QuestionList } from '@/components/question-list'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Radio } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto px-4 py-8 max-w-4xl container">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <Button type="button" variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 size-4" />
                Voltar ao Início
              </Link>
            </Button>
            <Button type="button" variant="secondary" asChild>
              <Link
                to={`/room/${params.roomId}/audio`}
                className="flex items-center gap-2"
              >
                <Radio className="size-4" />
                Gravar Áudio
              </Link>
            </Button>
          </div>
          <h1 className="mb-2 font-bold text-foreground text-3xl">
            Sala de Perguntas
          </h1>
          <p className="text-muted-foreground">
            Faça perguntas e receba respostas com IA.
          </p>
        </div>
        <div className="mb-8">
          <QuestionForm roomId={params.roomId} />
        </div>
        <QuestionList roomId={params.roomId} />
      </div>
    </main>
  )
}
