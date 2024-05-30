import Image from 'next/image';

export default function Experience() {
  return (
    <section
      className="h-screen flex items-center bg-gray-900 shadow-lg shadow-blue-500/50 py-12 mt-20 mb-20"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-yellow-500 to-pink-600 text-5xl">
            My Experience
          </span>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
          During my tenure at Cari Latinoamérica as a software developer, I've been immersed in exciting and challenging projects that have expanded my knowledge and expertise in the software development realm. Working alongside a diverse and multicultural team, I've contributed to the creation of innovative solutions tailored to the Latin American market. From designing and implementing new features to optimizing existing processes
          </p>
          <div className="flex justify-center mt-8">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10 text-white text-end">
                  <time className="font-mono italic">2024</time>
                  <div className="text-lg font-black">
                    Cari Latinoamerica
                  </div>
                  <p className="text-gray-300">Software developer</p>
                  <div className="flex justify-center mt-5">
                    <Image
                      src={'/cari.png'}
                      width={300}
                      height={300}
                      alt='cari'
                      className="rounded-full"
                    />
                  </div>
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
