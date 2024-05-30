import Image from "next/image";

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-900 shadow-lg shadow-blue-500/50 py-12 mt-10" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-br font-extrabold from-yellow-500 to-pink-600 text-5xl">
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Here you can find some of the projects I have worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Tarjeta de Proyecto 1 */}
          <div className="bg-gray-800 overflow-hidden shadow-md rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">Moon Maps</h3>
              <div className="mb-6">
                <Image
                  src={'/moonmaps.png'}
                  height={500}
                  width={400}
                  alt="moonmaps"
                  className="mb-4"
                />
              </div>
              <p className="text-sm text-gray-300 mb-6">
                This project aimed at creating a map application to visualize the bus routes in the city of Quetzaltenango, Guatemala, enhancing commuter experience and facilitating navigation within the city's public transportation system
              </p>
              <a href="https://github.com/bedhsk/moonmaps" target="_blank" className="text-yellow-500 hover:text-yellow-400 font-medium">GitHub</a>
            </div>
          </div>
          {/* Tarjeta de Proyecto 2 */}
          <div className="bg-gray-800 overflow-hidden shadow-md rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">EasyDrive</h3>
              <div className="mb-6">
                <Image
                  src={'/easydrive.png'}
                  height={500}
                  width={400}
                  alt="easydrive"
                  className="mb-4"
                />
              </div>
              <p className="text-sm text-gray-300 mb-6">
                This project centered around developing a car rental platform, offering users a seamless and convenient way to browse, book, and manage rental cars for their travel needs.
              </p>
              <a href="https://github.com/4drianqm/easydrive-demo" target="_blank" className="text-yellow-500 hover:text-yellow-400 font-medium">GitHub</a>
            </div>
          </div>
          {/* Tarjeta de Proyecto 3 */}
          <div className="bg-gray-800 overflow-hidden shadow-md rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">MP4 Player</h3>
              <div className="mb-6">
                <Image
                  src={'/mp4.png'}
                  height={500}
                  width={400}
                  alt="mp4player"
                  className="mb-4"
                />
              </div>
              <p className="text-sm text-gray-300 mb-6">
                This project focused on building an MP4 player, with support for various video formats and playback controls, aiming to deliver seamless playback of MP4 files while offering users a customizable and intuitive interface.
              </p>
              <a href="https://github.com/Josecc12/PlayerMp4" target="_blank" className="text-yellow-500 hover:text-yellow-400 font-medium">GitHub</a>
            </div>
          </div>
                    {/* Tarjeta de Proyecto 3 */}
                    <div className="bg-gray-800 overflow-hidden shadow-md rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">Bianca Proyect</h3>
              <div className="mb-6">
                <Image
                  src={'/profile.png'}
                  height={500}
                  width={400}
                  alt="mp4player"
                  className="mb-4"
                />
              </div>
              <p className="text-sm text-gray-300 mb-6">
              Our project aimed to develop an inventory management system tailored for a grocery store, providing an efficient and streamlined solution for managing stock levels, tracking products, and facilitating smooth operations.
              </p>
              <a href="https://github.com/4drianqm/Proyecto-Bianca" target="_blank" className="text-yellow-500 hover:text-yellow-400 font-medium">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
