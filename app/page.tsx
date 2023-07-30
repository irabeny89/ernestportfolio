"use client";
import Image from "next/image";
import siteLocalData from "siteLocalData";
import { FaCloud, FaGithub } from "react-icons/fa";

const { tools, intro, certificates, projects } = siteLocalData;

const Certificate = ({
	title,
	description,
	image,
}: (typeof certificates)[0]) => {
	return (
		<div className="text-center flex flex-col items-center">
			<h3 className="font-semibold">{title}</h3>
			<p>{description}</p>
			<Image {...image} />
		</div>
	);
};

const Tool = ({ Icon, color, name }: (typeof tools)[0]) => {
	return (
		<div className="flex items-center gap-2 text-sm font-semibold">
			<Icon color={color} size={20} /> {name}
		</div>
	);
};

const Project = ({
	image,
	link,
	summary,
	title,
	tools,
}: (typeof projects)[0]) => {
	return (
		<div className="space-y-5 text-center flex flex-col items-center justify-between outline-double rounded-md w-[300px] h-[500px] overflow-auto py-5">
			<h3 className="underline font-semibold">{title}</h3>
			<small>{summary}</small>

			<div className="flex justify-center gap-4 overflow-auto w-full py-5">
				{tools.map(renderTools)}
			</div>

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

const renderProject = (item: (typeof projects)[0]) => Project(item);

const renderTools = (item: (typeof tools)[0]) => Tool(item);

const renderCertificate = (item: (typeof certificates)[0]) => Certificate(item);

export default function Page() {
	return (
		<main className="min-h-screen bg-amber-200">
			<h2 className="text-3xl px-5 py-14 text-center">{intro}</h2>
			<div className="p-4 md:p-10">
				<div className="font-semibold text-lg">Tools:</div>
				<div className="flex items-center gap-5 overflow-auto p-5">
					{tools.map(renderTools)}
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-center py-10 gap-5">
				{certificates.map(renderCertificate)}
			</div>
			<div className="p-4 md:p-10">
				<div className="font-semibold text-lg">Projects:</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap justify-center py-10 gap-10">
					{projects.map(renderProject)}
				</div>
			</div>
		</main>
	);
}
