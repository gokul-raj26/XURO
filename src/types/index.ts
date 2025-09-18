export interface Service {
  id: string;
  title: string;
  description: string;
    points?: string[]; 
  image: string;
  gradient: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  role: string;
  id: string;
  name: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
}