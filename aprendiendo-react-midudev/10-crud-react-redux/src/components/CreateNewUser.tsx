import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useActions } from "../hooks/useActions";
import { useState } from "react";

interface resultState {
  result: 'OK' | 'ERROR' | null | 'EMAIL' | 'NAME' | 'GITHUB'
}

export function CreateNewUser() {
  const { addUser } = useActions()
  const [result, setResult] = useState<resultState['result']>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
    event.preventDefault()

    setResult(null)

    const form = event.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    // validaciones de campos
    if(!name && !email && !github) {
      return setResult('ERROR')
    }

    if (!name) {
      return setResult('NAME')
    }

    if (!github) {
      return setResult('GITHUB')
    }

    if (!email) {
      return setResult('EMAIL')
    }

    if(!email.includes('@')) {
      return setResult('EMAIL')
    }

    if(!email.includes('.com')) {
      return setResult('EMAIL')
    }

    addUser({ name, email, github })
    setResult('OK')
    form.reset()
  }

  return (
    <Card className="mt-5 p-5 w-full shadow-lg rounded mb-5 border-slate-600 ring-slate-300">
      <Title className="text-xl font-bold text-slate-950">Crear nuevo usuario</Title>
      
      <form className="mt-5" onSubmit={handleSubmit}>
        <TextInput
          name="name"
          placeholder="Escribe el nombre"
          className="w-full"
        />
        <TextInput 
          name="email"
          placeholder="Escribe el email"
          className="w-full"
        />
        <TextInput
          name="github"
          placeholder="Escribe el usuario de github"
          className="w-full"
        />

        <div>
          <Button
            type="submit"
            className="mt-5"
          >
            Crear Usuario
          </Button>
          <span>
            {result === 'OK' && <Badge className="text-green-600 font-bold bg-lime-100 rounded-lg ml-8 h-auto w-auto">Registro Exitoso!</Badge>}
            {result === 'ERROR' && <Badge className="text-red-600 font-bold bg-rose-200 rounded-lg ml-8 h-auto w-auto">ERROR: Debe completar todos los campos</Badge>}
            {result ===  'EMAIL' && <Badge className="text-red-600 font-bold bg-rose-200 rounded-lg ml-8 h-auto w-auto">ERROR: Verifique el email</Badge>}
            {result ===  'NAME' && <Badge className="text-red-600 font-bold bg-rose-200 rounded-lg ml-8 h-auto w-auto">ERROR: Verifique el name</Badge>}
            {result ===  'GITHUB' && <Badge className="text-red-600 font-bold bg-rose-200 rounded-lg ml-8 h-auto w-auto">ERROR: Verifique el user de GitHub</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}