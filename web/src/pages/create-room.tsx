
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = Array<{
  id: string,
  name: string,
  questionCount: number,
  createdAt: string,
}>

export function CreateRoom() {

  const { data } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse = await response.json()

      return result
    }
  })


  return(
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 grid-cols-2 items-start">

        <div />
          <Card>
            <CardHeader>
              <CardTitle>
                Salas recentes
                <CardDescription>
                  Acesso rápido para as salas criadas recentemente
                </CardDescription>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {data?.map(room => {
                  return (
                      <Link
                      className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent" 
                      key={room.id}    
                      to={'/rooms/${room.id}'}         
                    >
                      <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-mediums">{room.name}</h3>

                        <div className="flex items-center gap-2">
                          <Badge className="text-xs" variant="secondary" >
                            {room.createdAt}
                          </Badge>
                          <Badge className="text-xs" variant="secondary" >
                            {room.questionCount} Pergunta(s)
                          </Badge>
                        </div>
                      </div>


                      <span className="flex items-center gap-1 text-sm">
                        Entrar
                        <ArrowRight className="size-3" />
                      </span>
                    </Link>    
                  )
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}