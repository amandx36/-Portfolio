import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
};

export const ProjectCard = ({ src, title, link }: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.06] transition border border-transparent bg-gradient-to-r from-amber-700 via-orange-800 to-red-900 p-[1px]"
    >
      <div className="bg-black rounded-lg">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-60 object-cover rounded-lg object-left-top"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
      </div>
    </Link>
  );
};
