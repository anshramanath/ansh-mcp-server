export interface Profile {
  name: string;
  title: string;
  summary: string;
  hobbies: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
}

export const profile: Profile = {
  name: "Ansh Ramanath",
  title: "Junior studying Computational Biology + Computer Science @ UT Austin",
  summary:
    "Passionate about solving complex problems at the intersection of software engineering, " +
    "machine learning, and data science.",
  hobbies: "In my free time, I enjoy playing volleyball, discovering new restaurants, and watching movies.",
  location: "Austin, TX",
  email: "anshramanath04@gmail.com",
  links: {
    github: "https://github.com/anshramanath",
    linkedin: "https://www.linkedin.com/in/anshramanath",
    portfolio: "https://anshramanath.github.io/personal-portfolio-website/",
  },
};
