import { useState } from "react";
import { Button } from "./ui/Button";


interface ProjectData {
  title: string;
  description: string;
  documentation: string;
  media: string[];
}

interface Props {
  onSubmit: (data: ProjectData) => void;
}

export const ProjectForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [media, setMedia] = useState<string[]>([""]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, documentation, media });
  };

  const updateMediaLink = (index: number, value: string) => {
    const updated = [...media];
    updated[index] = value;
    setMedia(updated);
  };

  const addMediaLink = () => setMedia([...media, ""]);

  const removeMediaLink = (index: number) =>
    setMedia(media.filter((_, i) => i !== index));

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <label className="block font-medium text-gray-700">Título</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full text-gray-700 rounded"
        required
        minLength={2}
        maxLength={45}
        pattern=".*\S.*"
        title="El titulo no puede estar vacío"/>

      <label className="block font-medium text-gray-700">Descripción</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full text-gray-700 rounded"
        required
        minLength={2}
        maxLength={2000}/>
      <label className="block font-medium text-gray-700">Link a documentación</label>
      <input
        type="url"
        value={documentation}
        onChange={(e) => setDocumentation(e.target.value)}
        placeholder="https://notion.so/... o https://github.com/..."
        className="border p-2 w-full text-gray-700 rounded"
      />

      <label className="block font-medium text-gray-700">Links de multimedia</label>
      {media.map((link, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="url"
            value={link}
            onChange={(e) => updateMediaLink(index, e.target.value)}
            className="border p-2 w-full text-gray-700 rounded"
            placeholder={`Link multimedia #${index + 1}`}
            pattern="https?://.+"
            title="Debe ser un link válido"
          />
          {media.length > 1 && (
            <Button
              type="button"
              onClick={() => removeMediaLink(index)}
              className="text-sm p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none"viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round"d="M6 18L18 6M6 6l12 12" /></svg>
            </Button>
          )}
        </div>
      ))}

      <Button
        type="button"
        onClick={addMediaLink}
        className="text-sm text-white-600 cursor-pointer">
        + Agregar otro link multimedia
      </Button>

      <Button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full mt-4 cursor-pointer">
        Crear Proyecto
      </Button>
    </form>
  );
};
