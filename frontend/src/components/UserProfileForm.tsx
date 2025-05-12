import React from "react";
import { Button } from "../components/ui/Button";

interface Props {
  name: string;
  email: string;
  password: string;
  onChange: (field: "name" | "email" | "password", value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSkip: () => void;
}

export const CompleteProfileForm: React.FC<Props> = ({
  name,
  email,
  password,
  onChange,
  onSubmit,
  onSkip,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 text-gray-700">
      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="Nombre"
        value={name}
        required
        minLength={2}
        maxLength={45}
        onChange={(e) => onChange("name", e.target.value)}/>
      <input
        className="w-full border px-3 py-2 rounded"
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => onChange("email", e.target.value)}/>
      <input
        className="w-full border px-3 py-2 rounded"
        type="password"
        placeholder="Contraseña"
        value={password}
        required
        minLength={6}
        onChange={(e) => onChange("password", e.target.value)}/>
      <div className="flex justify-between items-center">
        <Button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
          Guardar
        </Button>
        <Button
          type="button"
          onClick={onSkip}
          className="text-gray-600 cursor-pointer">
          Saltar
        </Button>
      </div>
    </form>
  );
};