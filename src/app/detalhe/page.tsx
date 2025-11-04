import { Button, Text, TextField } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from 'react-player'


export default function loginPage() {
  return (
    <div className="flex flex-col bg-zinc-900 p-8 w-full">
      {/* <div className="bg-[url('/images/background.jpg')] bg-cover bg-center bg-no-repeat w-full opacity-75"> */}
      <div className="flex flex-col p-8 gap-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <div className="text-2xl">
              Bumblebee
            </div>
            <div className="text-sm">
              Título original: Bumblebee
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Button color='gray'>Deletar</Button>
            <Button color='violet'>Editar</Button>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col w-3/12">
            <Image
              src="/images/bumblebee.png"
              alt="Description of the image"
              width={300} // Required for local images
              height={300} // Required for local images
            />
          </div>
          <div className="flex flex-col w-9/12 gap-4">
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-row w-6/12 items-center">Todo herói tem um começo.</div>
              <div className="flex flex-row w-6/12 gap-2">
                <div className="flex flex-col bg-zinc-800 p-2">
                  <div className="text-gray-300">
                    CLASSIFICAÇÃO INDICATIVA
                  </div>
                  <div>
                    13 anos
                  </div>
                </div>
                <div className="flex flex-col bg-zinc-800 p-2">
                  <div className="text-gray-300">VOTOS</div>
                  <div>5704</div>
                </div>
                <div className="flex flex-col">67%</div>
              </div>
            </div>
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-6/12 bg-zinc-800 p-2">
                <div className="text-gray-300">SINOPSE</div>
                <div className="text-sm">
                  “Bumblebee” é um filme que se passa em 1987 e conta a história de um Autobot chamado Bumblebee que encontra refúgio em um ferro-velho de uma pequena cidade praiana da Califórnia. Charlie, uma adolescente prestes a completar 18 anos, encontra Bumblebee machucado e sem condições de uso. Quando ela o revive, percebe que este não é qualquer fusca amarelo1. O filme é uma mistura de animação e drama, com um tom leve e divertido, e se destaca por sua ambientação nos anos 80 e pela trilha sonora perfeita.
                </div>
              </div>
              <div className="flex flex-col w-6/12 gap-4">
                <div className="flex flex-row w-full gap-4">
                  <div className="flex flex-col w-1/2 bg-zinc-800 p-2">
                    <div className="text-gray-300">
                      LANÇAMENTO
                    </div>
                    <div>
                      20/12/2018
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 bg-zinc-800 p-2">
                    <div className="text-gray-300">
                      DURAÇÃO
                    </div>
                    <div>
                      1h 53m
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-4">
                  <div className="flex flex-col w-1/2 bg-zinc-800 p-2">
                    <div className="text-gray-300">
                      SITUAÇÃO
                    </div>
                    <div>
                      Lançamento
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 bg-zinc-800 p-2">
                    <div className="text-gray-300">
                      IDIOMA
                    </div>
                    <div>
                      Inglês
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-4">
                  <div className="flex flex-col w-1/2 bg-zinc-800 p-2">
                    <div className="text-gray-300">
                      ORÇAMENTO
                    </div>
                    <div>
                      $332.99M
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 bg-zinc-800 p-2">
                    <div className="text-gray-300">
                      RECEITA
                    </div>
                    <div>
                      $332.99M
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 bg-zinc-800 p-2">
                    <div className="text-gray-300">
                      LUCRO
                    </div>
                    <div>
                      $332.99M
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col  bg-zinc-800 p-2 gap-2">
                <div className="text-gray-300">
                  Generos
                </div>
                <div className="flex flex-row gap-2">
                  <div className="bg-purple-500 p-1 rounded-xs">
                    AÇÃO
                  </div>
                  <div className="bg-purple-500 p-1 rounded-xs">
                    AÇÃO
                  </div>
                  <div className="bg-purple-500 p-1 rounded-xs">
                    AÇÃO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="flex flex-col gap-4 p-8 h-screen">
        <div className="flex flex-row text-2xl">
          Trailer
        </div>
        <div className="w-full h-full">
          <ReactPlayer className="w-full h-full" style={{
            width: "100%",
            height: "76%",
          }} src='https://www.youtube.com/watch?v=lcwmDAYt22k' />
        </div>
      </div>
    </div>
  );
}