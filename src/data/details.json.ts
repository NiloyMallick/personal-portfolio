export interface Template {
  link: string;
  title: string;
  details: string;
  location: string;
  date: string;
};
const one: Template = {
  link: "https://www.evidentbd.com",
  title: "EvidentBD Ltd",
  location: "Dhaka, Bangladesh",
  details: "Directed & developed flagship services utilising modern tech-stacks to develop scalable and e cient applications. Expertise in containerization with Docker, coupled with my knowledge of Microservices architecture, has enabled me to create robust systems that can handle complex business logic. Spearheaded the development and implementation of an in-house HR services resulting in 50% reduction in operational cost and 30% increase in overall employee productivity.",
  date: "01.06.2022",
};
const two: Template = {
link: "https://www.ositsltd.com",
  title: "OS IT Solutions Ltd",
  location: "Dhaka Bangladesh",
  details: "Collaborated with Product Managers and Senior Developers to design and develop intuitive user experiences, resulting in a 30% increase in user engagement and a 25% increase in customer satisfaction.",
  date: "10.02.2022",
};

export const bytitle = {
  one,
    two,

};
export const details = Object.values(bytitle);
