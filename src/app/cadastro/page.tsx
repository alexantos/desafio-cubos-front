import { Button, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";

export default function loginPage() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-col gap-3 bg-zinc-900 w-1/4 p-4">
        <label>
          <Text as="div" size="1" weight="bold">
            Nome
          </Text>
          <TextField.Root
            placeholder="Digite seu nome"
          />
        </label>
        <label>
          <Text as="div" size="1" weight="bold">
            E-mail
          </Text>
          <TextField.Root
            placeholder="Digite e-mail"
          />
        </label>
        <label>
          <Text as="div" size="1" weight="bold">
            Senha
          </Text>
          <TextField.Root
            placeholder="Digite sua senha"
          />
        </label>
        <label>
          <Text as="div" size="1" weight="bold">
            Confirmação senha
          </Text>
          <TextField.Root
            placeholder="Digite sua senha novamente"
          />
        </label>
        <div className="flex flex-row justify-end items-center pt-3">
          <Button color='plum'>Cadastrar</Button>
        </div>
      </div>
    </div>
  );
}