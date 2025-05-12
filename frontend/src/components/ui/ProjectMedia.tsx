interface ProjectMediaProps {
  media: string[];
  documentation?: string;
}

export const ProjectMedia = ({ media, documentation }: ProjectMediaProps) => {
  return (
    <div className="p-6 mb-4 rounded-xl shadow bg-white text-black w-[70%]">
      <h2 className="text-2xl font-bold text-gray-800">Multimedia del proyecto</h2>

      {documentation && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Documentación</h3>
          <a
            href={documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Ver documentación del proyecto
          </a>
        </div>
      )}

      {media && media.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.map((url, index) => {
            const isImage = url.match(/\.(jpeg|jpg|png|gif|webp)$/i);
            const isVideo = url.match(/\.(mp4|webm|ogg)$/i);
            const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");

            return (
              <div key={index} className="rounded-xl overflow-hidden bg-black">
                {isImage ? (
                  <img
                    src={url}
                    alt={`media-${index}`}
                    className="w-full h-64 object-cover"
                  />
                ) : isVideo ? (
                  <video controls className="w-full h-64 object-cover">
                    <source src={url} />
                    Tu navegador no soporta video HTML5.
                  </video>
                ) : isYouTube ? (
                  <iframe
                    className="w-full h-64"
                    src={transformYouTubeUrl(url)}
                    title={`youtube-${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline block text-center p-4"
                  >
                    Ver archivo externo
                  </a>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-4 bg-gray-100 rounded-xl text-center text-gray-500">
          Este proyecto no incluye archivos multimedia.
        </div>
      )}
    </div>
  );
};

function transformYouTubeUrl(url: string): string {
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
}
