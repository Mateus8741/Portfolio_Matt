import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Gofinances",
    desc: "Organize suas finanças.",
    img: "https://camo.githubusercontent.com/da41beb7ab128aa683068f2757eed54498bbb740e8094f52f370f6632cfd2d31/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656c6961736763662f696d6167652f75706c6f61642f76313538373432333431302f676f66696e616e6365732f6d6f636b75705f6c71676e62742e706e67",
    github: "https://github.com/Mateus8741/gofinances",
    tags: ["React Native", "Axios", "Styled-Components"],
  },
  {
    id: 1,
    title: "RentX",
    desc: "Aluguel de carros de luxo por um preço camarada.",
    img: "https://github.com/Mateus8741/rentX/blob/main/assets/cover.png?raw=true",
    github: "https://github.com/Mateus8741/rentX",
    tags: ["React Native", "Axios", "Styled-Components"],
  },
  {
    id: 2,
    title: "Nlw Copa / Mobile",
    desc: "Faça o bolão da Copa 2022.",
    img: "https://github.com/rocketseat-education/nlw-copa-ignite/blob/main/.github/web.png?raw=true",
    github: "https://github.com/Mateus8741/mobile-nlw",
    tags: ["React Native", "Native Base", "Axios"],
  },
  {
    id: 3,
    title: "Nlw Copa / Web",
    desc: "Marque seus jogos da copa com amigos.",
    img: "https://s3-alpha.figma.com/hub/file/2546624899/29c09c86-896b-4aad-93a0-634098c64e43-cover.png",
    link: 'https://web-nlw-iota.vercel.app',
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["Next", "Tailwind", "Yarn"],
  },
  {
    id: 4,
    title: "ignite Feed",
    desc: "Dê o seu feedback.",
    img: "https://user-images.githubusercontent.com/62652109/204415067-c6fe82b6-a80b-4247-9154-4ee66f442396.png",
    link: 'https://ignite-feed-navy-nine.vercel.app',
    github: "https://github.com/Mateus8741/ignite_feed",
    tags: ["Next", "Tailwind", "Yarn"],
  },
  {
    id: 5,
    title: "ToDo List",
    desc: "Lista de tarefas.",
    img: "https://user-images.githubusercontent.com/62652109/204897079-743c9d12-0c7f-4d36-a6a3-8f09c4e44f37.png",
    link: 'https://desafio-01-ignite-2022-one.vercel.app',
    github: "https://github.com/Mateus8741/desafio_01_ignite_2022",
    tags: ["Vite", "Typescript"],
  },
  {
    id: 6,
    title: "Steevanz_test",
    desc: "Venda seus cursos online.",
    img: "https://user-images.githubusercontent.com/62652109/205197479-039acc20-f869-4cd8-a292-23837ba1416b.png",
    link: "https://test-steevanz-dtp4qa49f-mateus8741.vercel.app",
    github: "https://github.com/Mateus8741/test_Steevanz",
    tags: ["Angular", "Html", "SCSS", "API"],
  },
  {
    id: 7,
    title: "Post_list",
    desc: "Exibição de postagens de um blog",
    img: "https://user-images.githubusercontent.com/62652109/203363418-9376aca4-448c-41b3-86b4-1ebde22a5b1d.png",
    link: "https://post-list-orpin.vercel.app",
    github: "https://github.com/Mateus8741/post_list",
    tags: ["Vite", "Typescript", "Axios", "Tailwind"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
