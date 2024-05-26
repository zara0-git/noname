interface Route {
  url: string;
  name: string;
  sub: Route[];
}

const routes = [
  {
    url: "/home",
    name: "Нүүр",
    sub: [{ url: "", name: "", sub: [] }],
  },
  {
    url: "/about",
    name: "Манай хамт олон",
    sub: [{ url: "", name: "", sub: [] }],
  },
  {
    url: "/tech",
    name: "Тоног төхөөрөмж",
    sub: [{ url: "", name: "", sub: [] }],
  },
  {
    url: "/contact",
    name: "Холбоо барих",
    sub: [{ url: "", name: "", sub: [] }],
  },
];

export default routes;