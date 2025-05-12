import { Project } from "../../types/Project";

export interface ProjectMember {
    id: number;
    name: string;
    role: 'admin' | 'moderator' | 'member';
  }
  
/*
export const ProjectDetails = ({
    <div className="w-[30%] border-l pl-4">
    <h3 className="text-lg font-semibold mb-2">Miembros</h3>
    {member.user.name.length ? (
        <ul className="space-y-2">
        {members.map((member, idx) => (
            <li key={idx} className="text-gray-700 flex justify-between">
            <span>{member.name}</span>
            <span className="text-sm text-gray-500 italic">{member.role}</span>
            </li>
        ))}
        </ul>
    ) : (
        <p className="text-gray-500">No hay miembros aún.</p>
    )}
    </div>
});*/