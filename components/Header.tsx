import Image from "next/image";
import { FaWhatsapp, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { CgMail, CgFileDocument } from "react-icons/cg";
import siteLocalData from "../siteLocalData";

type ContactT = Record<"type" | "line", string>;

const {
	author,
	avatar: { src, height, alt, width },
	contacts,
	title,
	cv,
} = siteLocalData;

const Phone = ({ line, type }: ContactT) => (
	<a
		href={`tel:${line}`}
		className="flex items-center gap-1 hover:bg-slate-100"
	>
		<FaPhone /> {type}
	</a>
);

const Whatsapp = ({ line, type }: ContactT) => (
	<a
		href={`https://api.whatsapp.com/send?phone=${line}&text=Hello ${author}`}
		className="flex items-center gap-1 hover:bg-slate-100"
	>
		<FaWhatsapp /> {type}
	</a>
);

const Email = ({ line, type }: ContactT) => (
	<a
		href={`mailto:${line}?subject=Good%20news%20${author}&body=Hello%20${author}`}
		className="flex items-center gap-1 hover:bg-slate-100"
	>
		<CgMail /> {type}
	</a>
);

const LinkedIn = ({ line, type }: ContactT) => (
	<a href={line} className="flex items-center gap-1 hover:bg-slate-100">
		<FaLinkedin /> {type}
	</a>
);

const GitHub = ({ line, type }: ContactT) => (
	<a href={line} className="flex items-center gap-1 hover:bg-slate-100">
		<FaGithub /> {type}
	</a>
);

const renderContact = (item: ContactT) =>
	item.type === "Phone" ? (
		<Phone key={item.type} {...item} />
	) : item.type === "Whatsapp" ? (
		<Whatsapp key={item.type} {...item} />
	) : item.type === "Email" ? (
		<Email key={item.type} {...item} />
	) : item.type === "Linkedin" ? (
		<LinkedIn key={item.type} {...item} />
	) : item.type === "Github" ? (
		<GitHub key={item.type} {...item} />
	) : null;

export default function Header() {
	return (
		<div className="p-5">
			<div className="flex flex-col items-center">
				<Image
					src={src}
					alt={alt}
					width={+width}
					height={+height}
					className="rounded-full ring-2 ring-orange-300"
				/>
				<div className="font-semibold">{author}</div>
				<div className="text-3xl font-bold">{title}</div>
			</div>

			<div>
				<div className="font-semibold text-center">Contact Info</div>
				<div className="outline-dashed rounded p-3 md:flex md:gap-4 w-fit mx-auto space-y-2">
					{contacts.map(renderContact)}
					<a
						href={cv.url}
						className="flex items-center gap-1 hover:bg-slate-100"
					>
						<CgFileDocument /> CV
					</a>
				</div>
			</div>
		</div>
	);
}
