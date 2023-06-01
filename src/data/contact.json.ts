export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:mallickniloy@gmail.com",
  type: "Email",
  title: "mallickniloy@gmail.com",
};
const two: Template = {
link: "https://twitter.com/Mike_Andreuzza",
    type: "Twitter",
  title: "Mike_Andreuzza",
};
const three: Template = {
link: "https://read.cv/join/niloy_mallick",
  type: "Read CV",
  title: "niloy_mallick",
};
export const bytype = {
  one,
    // two,
  three,
};
export const contact = Object.values(bytype);
