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
    <main className="h-full min-h-full w-full bg-yellow px-6">
      <div className="flex h-full w-full items-center justify-center">
        <Card {...data} />
      </div>
    </main>
  );
}
