import { Button, Text, TextField } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function loginPage() {
  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="flex flex-row justify-end items-center gap-2">
        <TextField.Root
          placeholder="Pesquise por filmes"
        />
        <Button color='gray'>Filtros</Button>
        <Button color='violet'>Adicionar Filme</Button>
      </div>
      <div className="flex flex-col bg-zinc-900 p-6 w-full">
        <div className="grid grid-cols-5 gap-3">
          <Image
            src="/images/bumblebee.png"
            alt="Description of the image"
            width={500} // Required for local images
            height={300} // Required for local images
          />
          <Image
            src="/images/capita_marvel.png"
            alt="Description of the image"
            width={500} // Required for local images
            height={300} // Required for local images
          />
          <Image
            src="/images/alita.png"
            alt="Description of the image"
            width={500} // Required for local images
            height={300} // Required for local images
          />
          <Image
            src="/images/alita.png"
            alt="Description of the image"
            width={500} // Required for local images
            height={300} // Required for local images
          />
          <Image
            src="/images/alita.png"
            alt="Description of the image"
            width={500} // Required for local images
            height={300} // Required for local images
          />
          <Image
            src="/images/alita.png"
            alt="Description of the image"
            width={300} // Required for local images
            height={300} // Required for local images
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <Button color='violet'>&lt;</Button>
        <Button color="violet">1</Button>
        <Button color="violet">2</Button>
        <Button color="violet">3</Button>
        <Button color="violet">4</Button>
        <Button color="violet">5</Button>
        <Button color='violet'>&gt;</Button>
      </div>
    </div>
  );
}