import { Card, CardType } from "@/app/components/Card";

const data: CardType = {
  title: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  publishDate: new Date("2023-12-21"),
  img: {
    src: "/illustration-article.svg",
  },
  tags: ["Learning"],
  author: {
    name: "Greg Hooper",
    img: {
      src: "/image-avatar.webp",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-full bg-yellow px-4 w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <Card {...data} />
      </div>
    </main>
  );
}
