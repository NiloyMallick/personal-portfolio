export interface Template {
    title: string;
    details: string;
    name: string;
  };
  const one: Template = {
    title: "Programming Languages",
    details: "",
    name: "Python, C++, Java",
  };
  const two: Template = {
    title: "Back-end Technologies",
    details: "",
    name: "FastAPI, RabbitMQ, Radis, Django, Celery",
  };
  const three: Template = {
    title: "Platforms",
    details: "",
    name: "Jira, Clickup, Slack, Github, Gitlab",
  };
  const four: Template = {
    title: "DevOps Tools",
    details: "",
    name: "Docker, Kubernetes",
  };
  const five: Template = {
    title: "Version Control & CI/CD",
    details: "",
    name: "Git",
  };
  const six: Template = {
    title: "Database Management",
    details: "",
    name: "PostgreSQL, SQLite, MongoDB",
  };
  const seven: Template = {
    title: "Version Control & CI/CD",
    details: "",
    name: "Git",
  };
  
  export const bytitle = {
    one,
    two,
    three,
    four,
    five,
    six
  
  };
  export const skills = Object.values(bytitle);