"use client";
import siteLocalData from "siteLocalData";
import Tools from "components/home/Tools";
import Certificates from "components/home/Certificates";
import Projects from "components/home/Projects";

const { tools, intro, certificates, projects } = siteLocalData;


export default function Page() {
	return (
		<main className="min-h-screen bg-amber-200 space-y-5">
			<h2 className="text-3xl px-5 py-14 text-center">{intro}</h2>
			<Tools tools={tools} />
			<Certificates certificates={certificates} />
			<Projects projects={projects} />
		</main>
	);
}
