"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function BlogPage() {
  const [expandFirstPost, setExpandFirstPost] = useState(false);
  const [expandSecondPost, setExpandSecondPost] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-3xl font-bold text-center">Mi Blog</h1>
      </header>
      <div className="mt-8 mx-auto border-solid border-2 border-yellow-500 rounded-lg p-5">
        <Link href="/" className='text-white'>
          Regresa
        </Link>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">IA y la programación</h2>
            <p className="text-white ">La inteligencia artificial (IA) y la programación son dos áreas fundamentales en la tecnología moderna. La IA ha evolucionado considerablemente desde sus inicios en el siglo XX, con aplicaciones prácticas en una variedad de industrias. La programación, por otro lado, es el lenguaje mediante el cual los ingenieros y científicos de datos pueden dar vida a los conceptos de IA, escribiendo algoritmos que permiten a los sistemas aprender de datos, reconocer patrones y tomar decisiones autónomas. Si deseas obtener más información, haz clic en "Leer más"!</p>
            <button
              className="text-white mt-4 underline cursor-pointer"
              onClick={() => setExpandFirstPost(!expandFirstPost)}
            >
              {expandFirstPost ? "Leer menos" : "Leer más"}
            </button>
            {expandFirstPost && (
              <p className="text-white mt-4">
                En las próximas décadas, podemos esperar ver avances aún más significativos en campos como el aprendizaje automático, la visión por computadora y el procesamiento del lenguaje natural. La IA seguirá siendo un área emocionante y en evolución, con la programación como su motor principal.
              </p>
            )}
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Segundo Post</h2>
            <p className="text-white">Scrum es un marco de trabajo ágil utilizado en el desarrollo de software y en diversos proyectos empresariales para gestionar el trabajo de manera eficiente, fomentar la colaboración y adaptarse a los cambios de manera rápida. Si deseas aprender más sobre cómo Scrum puede optimizar el desarrollo de proyectos y mejorar la colaboración en tu equipo, haz clic en "Leer más"!</p>
            <button
              className="text-white mt-4 underline cursor-pointer"
              onClick={() => setExpandSecondPost(!expandSecondPost)}
            >
              {expandSecondPost ? "Leer menos" : "Leer más"}
            </button>
            {expandSecondPost && (
              <p className="text-white mt-4">
                Scrum ofrece una serie de beneficios para los equipos de desarrollo y las organizaciones, incluyendo flexibilidad, transparencia, colaboración y entrega continua de valor. Al utilizar Scrum de manera efectiva y elegir las herramientas adecuadas para apoyar su implementación, los equipos pueden mejorar la eficiencia y la calidad de sus proyectos.
              </p>
            )}
          </div>
        </div>
      </div>

    </main>
  );
}
