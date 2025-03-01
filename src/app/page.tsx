import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import InputRoot, { InputField, InputIcon } from '@/components/input'
import { ArrowRight, Copy, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight />
      </Button>

      <IconButton type="submit">
        <Copy />
      </IconButton>

      <InputRoot>
        <InputIcon>
          <Mail />
        </InputIcon>

        <InputField />
      </InputRoot>
    </main>
  )
}
