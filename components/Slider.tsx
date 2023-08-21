import * as React from "react";
import {
	KeenSliderHooks,
	KeenSliderOptions,
	KeenSliderPlugin,
	useKeenSlider,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type Props<O = {}, P = {}, H extends string = KeenSliderHooks> = {
	components: React.ReactNode[];
	options?: KeenSliderOptions<O, P, H>;
	plugins?: KeenSliderPlugin<O, P, H>[];
};

const createDefaultOptions = (options: Props["options"]): Props["options"] => ({
	renderMode: "performance",
	slides: {
		perView: 3,
		spacing: 5,
	},
	breakpoints: {
		"(min-width: 768px)": {
			slides: {
				perView: 5,
			},
		},
		"(min-width: 1024px)": {
			slides: {
				perView: 6,
			},
		},
		"(min-width: 1280px)": {
			slides: {
				perView: 10,
			},
		},
	},
	...options,
});

const Slide = (item: React.ReactNode) => (
	<div className="keen-slider__slide">{item}</div>
);

const renderSlide = (item: React.ReactNode) => Slide(item);

export default function Slider({ components, options, plugins }: Props) {
	const [sliderRef] = useKeenSlider<HTMLDivElement>(
		createDefaultOptions(options),
		plugins
	);

	return (
		<div ref={sliderRef} className="keen-slider">
			{components.map(renderSlide)}
		</div>
	);
}
