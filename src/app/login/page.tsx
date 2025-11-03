import { Button, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";

export default function loginPage() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-zinc-900 w-1/4 p-4">
        <label>
          <Text as="div" size="1" mb="1" weight="bold">
            Nome/E-mail
          </Text>
          <TextField.Root
            placeholder="Digite seu nome/E-mail"
          />
        </label>
        <label>
          <Text as="div" size="1" className="pt-2" weight="bold">
            Senha
          </Text>
          <TextField.Root
            placeholder="Digite sua senha"
          />
        </label>
        <div className="flex flex-row justify-between items-center pt-3">
          <Link href="/esqueci-senha" className="text-purple-700">Esqueci minha senha</Link>
          <Button color='plum'>Entrar</Button>
        </div>
      </div>
    </div>
  );
}