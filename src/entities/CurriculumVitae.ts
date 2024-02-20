export interface CurriculumVitae {
  personalData: PersonalData[];
  socialMedia: SocialMedia[];
  studies: Study[];
  languages: Language[];
  projects: Project[];
  programs: Program[];
  idioms: Idiom[];
  awards: any[];
  others: Other[];
  aboutMe: AboutMe[];
}

export interface PersonalData {
  id: number;
  name: string;
  job: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  language: string;
}

export interface SocialMedia {
  id: number;
  name: string;
  url: string;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  id_personal_data: number;
}

export interface Study {
  id: number;
  name: string;
  location: string;
  start_year: number;
  end_year: number;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  language: string;
  id_personal_data: number;
}

export interface Language {
  id: number;
  name: string;
  value: string;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  id_personal_data: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  language: string;
  id_personal_data: number;
}

export interface Program {
  id: number;
  name: string;
  value: string;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  id_personal_data: number;
}

export interface Idiom {
  id: number;
  name: string;
  level: string;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  language: string;
  id_personal_data: number;
}

export interface Other {
  id: number;
  name: string;
  location: string;
  start_year: number;
  end_year: number;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  language: string;
  id_personal_data: number;
}

export interface AboutMe {
  id: number;
  name: string;
  description: string;
  icon: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  language: string;
  id_personal_data: number;
}
