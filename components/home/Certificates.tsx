import Slider from "components/Slider";
import Image from "next/image";
import autoSwitch from "utils/slider/plugins/autoSwitch";

type Certificate = {
	title: string;
	description: string;
	image: Image;
};

type Props = {
	certificates: Certificate[];
};

const Certificate = ({ title, description, image }: Certificate) => (
	<div className="text-center flex flex-col items-center">
		<h3 className="font-semibold">{title}</h3>
		<p>{description}</p>
		<Image {...image} />
	</div>
);

const renderCertificates = (item: Certificate) => Certificate(item);

export default function Certificates({ certificates }: Props) {
	return (
		<Slider
			components={certificates.map(renderCertificates)}
			options={{
				breakpoints: {
					"(min-width: 768px)": {
						slides: {
							perView: 2,
							spacing: 5,
						},
					},
				},
				renderMode: "performance",
				slides: {
					perView: 1,
				},
			}}
			plugins={[autoSwitch]}
		/>
	);
}
