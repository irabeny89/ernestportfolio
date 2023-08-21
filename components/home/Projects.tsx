import Tools from "./Tools";
import Image from "next/image";
import { FaCloud, FaGithub } from "react-icons/fa";

type Link = {
	live: string;
	github: string;
};

type Project = {
	image: Image;
	title: string;
	summary: string;
	link: Link;
	tools: Tool[];
};

type Props = {
	projects: Project[];
};

const Project = ({ image, link, summary, title, tools }: Project) => {
	return (
		<div className="space-y-5 text-center flex flex-col items-center justify-between outline-double rounded-md w-[300px] h-[500px] overflow-auto py-5">
			<h3 className="underline font-semibold">{title}</h3>
			<small>{summary}</small>

			<Tools tools={tools}  />

			<Image {...image} />

			<div className="flex gap-10">
				<a href={link.live} className="flex items-center gap-2">
					<FaCloud size={20} /> Live
				</a>
				<a href={link.github} className="flex items-center gap-2">
					<FaGithub size={20} /> GitHub
				</a>
			</div>
		</div>
	);
};

const renderProject = (item: Project) => Project(item);

export default function Projects({ projects }: Props) {
	return (
		<div className="p-4 md:p-10">
			<div className="font-semibold text-lg">Projects:</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap justify-center py-10 gap-10">
				{projects.map(renderProject)}
			</div>
		</div>
	);
}
