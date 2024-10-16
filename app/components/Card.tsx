import * as motion from "framer-motion/client"
import Image from "next/image";

export interface CardType {
  title: string;
  description: string;
  publishDate: Date;
  img: {
    src: string;
  };
  tags: string[];
  author: {
    name: string;
    img: {
      src: string;
    };
  };
}

export function Card({
  title,
  description,
  tags,
  publishDate,
  img,
  author,
}: CardType) {
  const date = publishDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <motion.div
      className="w-full max-w-[327px] space-y-6 rounded-[20px] border border-gray-950 bg-white p-6 shadow-[8px_8px_0_#000000] sm:max-w-96"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-[10px]">
        <Image
          className="absolute ml-[-31px] max-w-none sm:ml-0"
          src={img.src}
          alt="illustration"
          height={200}
          width={336}
        />
      </div>

      <div className="space-y-3">
        <div className="flex flex-row flex-wrap gap-2">
          {tags.map((tag: string) => (
            <div
              key={tag}
              className="rounded bg-yellow px-3 py-[4px] text-xs font-bold hover:cursor-pointer sm:text-sm"
            >
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm">Published {date}</p>
        <p className="text-xl font-bold hover:cursor-pointer hover:text-yellow sm:text-2xl">
          {title}
        </p>
        <p className="text-sm text-gray-500 sm:text-base">{description}</p>
      </div>

      <div className="flex items-center space-x-3 hover:cursor-pointer hover:text-yellow">
        <div className="w-8">
          <Image
            src={author.img.src}
            alt="image profil"
            width={64}
            height={64}
          />
        </div>
        <p className="text-sm font-bold">{author.name}</p>
      </div>
    </motion.div>
  );
}
