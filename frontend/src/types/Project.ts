export interface Project {
    id?: number;
    title?: string;
    description: string;
    documentation?: string;
    media?: string[];
    creator: {
      name: string;
    };
  }