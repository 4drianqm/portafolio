"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  const [expandFirstPost, setExpandFirstPost] = useState(false);
  const [expandSecondPost, setExpandSecondPost] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-gray-900">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-3xl font-bold text-center">Mi Blog</h1>
      </header>
      <div className="mt-8 mx-auto border-solid border-2 border-yellow-500 rounded-lg p-5">
        <Link href="/" className="text-white">
          Regresa
        </Link>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              IA y la programación
            </h2>
            <p className="text-white ">
              La inteligencia artificial IA y la programación son dos áreas
              fundamentales en la tecnología moderna. La IA ha evolucionado
              considerablemente desde sus inicios en el siglo XX, con
              aplicaciones prácticas en una variedad de industrias. La
              programación, por otro lado, es el lenguaje mediante el cual los
              ingenieros y científicos de datos pueden dar vida a los conceptos
              de IA, escribiendo algoritmos que permiten a los sistemas aprender
              de datos, reconocer patrones y tomar decisiones autónomas. Si
              deseas obtener más información, haz clic en Leer más!
            </p>
            <button
              className="text-white mt-4 underline cursor-pointer"
              onClick={() => setExpandFirstPost(!expandFirstPost)}
            >
              {expandFirstPost ? "Leer menos" : "Leer más"}
            </button>
            {expandFirstPost && (
              <p className="text-white mt-4">
                En las próximas décadas, podemos esperar ver avances aún más
                significativos en campos como el aprendizaje automático, la
                visión por computadora y el procesamiento del lenguaje natural.
                La IA seguirá siendo un área emocionante y en evolución, con la
                programación como su motor principal El concepto de inteligencia
                artificial ha estado presente en la cultura popular y la
                literatura desde hace mucho tiempo. Sin embargo, fue en el siglo
                XX cuando la idea comenzó a tomar forma concreta. Alan Turing,
                considerado uno de los padres de la computación, planteó la
                pregunta: ¿Pueden las máquinas pensar? Esta pregunta sentó las
                bases para el desarrollo de la IA. Los lenguajes de programación
                desempeñan un papel crucial en el desarrollo de sistemas de IA.
                Lenguajes como Python, R y Java son ampliamente utilizados en
                este campo debido a su versatilidad y capacidad para manejar
                grandes cantidades de datos. Frameworks como TensorFlow y
                PyTorch proporcionan a los desarrolladores herramientas
                poderosas para construir y entrenar modelos de IA de forma
                eficiente. La IA ha encontrado aplicaciones en una amplia gama
                de áreas, desde la medicina hasta la manufactura y el marketing.
                En el campo de la programación, la IA está transformando la
                forma en que se desarrollan y mantienen los sistemas de software
                Por ejemplo, en el desarrollo de software, la IA se utiliza para
                mejorar la detección de errores y vulnerabilidades, acelerar el
                proceso de prueba y depuración, y automatizar tareas repetitivas
                como la generación de código. Los sistemas de IA también están
                siendo utilizados para optimizar el rendimiento de las
                aplicaciones y mejorar la experiencia del usuario mediante la
                personalización y la recomendación de contenido A pesar de sus
                numerosos beneficios, la IA plantea una serie de desafíos y
                consideraciones éticas. Uno de los principales desafíos es el
                sesgo algorítmico, que puede perpetuar y amplificar las
                desigualdades existentes en la sociedad. Otro desafío importante
                es la privacidad y la seguridad de los datos, especialmente en
                un mundo cada vez más interconectado. Es fundamental que los
                desarrolladores y los responsables de la toma de decisiones
                consideren estos desafíos y trabajen para mitigar sus efectos
                negativos. La programación ética y responsable es esencial para
                garantizar que la IA se utilice de manera justa y equitativa. El
                futuro de la IA y la programación es emocionante y prometedor. A
                medida que la tecnología continúa avanzando, podemos esperar ver
                avances aún más significativos en campos como el aprendizaje
                automático, la visión por computadora y el procesamiento del
                lenguaje natural. La programación seguirá siendo el motor que
                impulsa estos avances, permitiendo a los desarrolladores
                transformar ideas abstractas en soluciones tangibles. En
                conclusión, la inteligencia artificial y la programación están
                intrínsecamente interconectadas. La programación es el medio a
                través del cual se materializan los conceptos de IA, mientras
                que la IA está redefiniendo la forma en que se desarrollan y se
                utilizan los sistemas de software. Al comprender y aprovechar
                esta intersección, podemos aprovechar todo el potencial de la
                tecnología para abordar los desafíos del mundo moderno y crear
                un futuro más innovador y sostenible..
              </p>
            )}
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Segundo Post</h2>
            <p className="text-white">
              Scrum es un marco de trabajo ágil utilizado en el desarrollo de
              software y en diversos proyectos empresariales para gestionar el
              trabajo de manera eficiente, fomentar la colaboración y adaptarse
              a los cambios de manera rápida. Si deseas aprender más sobre cómo
              Scrum puede optimizar el desarrollo de proyectos y mejorar la
              colaboración en tu equipo, haz clic en Leer más!
            </p>
            <button
              className="text-white mt-4 underline cursor-pointer"
              onClick={() => setExpandSecondPost(!expandSecondPost)}
            >
              {expandSecondPost ? "Leer menos" : "Leer más"}
            </button>
            {expandSecondPost && (
              <p className="text-white mt-4">
                Scrum ofrece una serie de beneficios para los equipos de
                desarrollo y las organizaciones, incluyendo flexibilidad,
                transparencia, colaboración y entrega continua de valor. Al
                utilizar Scrum de manera efectiva y elegir las herramientas
                adecuadas para apoyar su implementación, los equipos pueden
                mejorar la eficiencia y la calidad de sus proyectos. Scrum es un
                marco de trabajo ágil que se basa en principios como la
                transparencia, la inspección y la adaptación para gestionar
                proyectos de manera eficiente. Se caracteriza por su enfoque
                iterativo e incremental, dividido en ciclos de trabajo llamados
                sprints. Durante un sprint, el equipo trabaja en un conjunto
                específico de tareas definidas al principio del sprint y se
                compromete a completarlas dentro de un plazo fijo, generalmente
                de una a cuatro semanas. En Scrum, el equipo de trabajo se
                organiza en roles claramente definidos: Product Owner: Es
                responsable de definir y priorizar los elementos del producto en
                el backlog del producto, representando los intereses del cliente
                y asegurando el valor del producto. Scrum Master: Es el
                facilitador del equipo, encargado de eliminar obstáculos,
                fomentar la colaboración y garantizar que el equipo siga los
                principios y prácticas de Scrum. Equipo de Desarrollo: Son los
                profesionales que realizan el trabajo para entregar un
                incremento de producto potencialmente entregable al final de
                cada sprint. El proceso de Scrum incluye eventos clave como la
                planificación del sprint, la reunión diaria de seguimiento
                (daily scrum), la revisión del sprint y la retrospectiva del
                sprint. Estos eventos proporcionan oportunidades para la
                colaboración, la inspección y la adaptación, lo que permite al
                equipo responder de manera efectiva a los cambios y mejorar
                continuamente su proceso de trabajo. Beneficios de Scrum Scrum
                ofrece una serie de beneficios para los equipos de desarrollo y
                las organizaciones, incluyendo: Flexibilidad: Scrum permite a
                los equipos adaptarse rápidamente a los cambios de requisitos y
                prioridades del cliente, lo que resulta en una mayor capacidad
                de respuesta y una entrega más rápida de valor. Transparencia:
                El uso de artefactos como el backlog del producto y el tablero
                de tareas proporciona visibilidad sobre el progreso del proyecto
                y los objetivos a alcanzar, fomentando la transparencia y la
                comunicación dentro del equipo y con los stakeholders.
                Colaboración: Scrum fomenta la colaboración entre los miembros
                del equipo y promueve un enfoque centrado en el trabajo en
                equipo y la responsabilidad compartida. Entrega Continua de
                Valor: Al dividir el trabajo en incrementos entregables y
                realizar entregas frecuentes al final de cada sprint, Scrum
                permite a los equipos entregar valor de manera constante y
                gradual a lo largo del tiempo. Herramientas para Implementar
                Scrum Existen numerosas herramientas diseñadas específicamente
                para apoyar la implementación de Scrum en equipos de desarrollo.
                Algunas de las herramientas más populares incluyen: Jira: Una
                herramienta de gestión de proyectos ágil ampliamente utilizada
                que permite a los equipos planificar, realizar seguimiento y
                gestionar el trabajo utilizando metodologías ágiles como Scrum y
                Kanban. Trello: Una herramienta de gestión de proyectos visuales
                que utiliza tableros, listas y tarjetas para organizar y
                priorizar el trabajo. Es ideal para equipos pequeños y startups
                que buscan una solución simple y flexible. Azure DevOps: Una
                suite de herramientas integradas que incluye funciones de
                gestión de proyectos, seguimiento de problemas, control de
                versiones y automatización de la entrega, todo ello diseñado
                para admitir prácticas ágiles como Scrum y Kanban. Scrumwise:
                Una herramienta dedicada específicamente a la implementación de
                Scrum, que ofrece características como la planificación de
                sprints, el seguimiento del trabajo, la colaboración en equipo y
                la generación de informes. En resumen, Scrum es un marco de
                trabajo ágil poderoso que ofrece numerosos beneficios para los
                equipos de desarrollo y las organizaciones. Al utilizar Scrum de
                manera efectiva y elegir las herramientas adecuadas para apoyar
                su implementación, los equipos pueden mejorar la colaboración,
                la transparencia y la entrega continua de valor en sus
                proyectos.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
