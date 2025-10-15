export interface Course {
  id: string;
  title: string;
  slug: string;
  highlights: string[];
  price: number;
  dateEN: string;
  dateTE: string;
  duration?: string;
  description?: string;
  curriculum?: string[];
  image: string;         // ✅ Added image field
  isFeatured?: boolean;
}

export interface Internship {
  id: string;
  title: string;
  duration: string;
  focus: string;
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}
