export interface Card {
  id: string;
  title: string;
  price: string;
  list: string[];
  popular: boolean;
}

export interface Testimonial {
  id: string;
  photo: string;
  name: string;
  job: string;
  testimonial: string;
  external_url: string;
}

export interface Project {
  image: string;
  name: string;
  description: string;
  url: string;
  github: string;
}
