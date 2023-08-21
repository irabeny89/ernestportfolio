import Slider from "components/Slider";
import { KeenSliderInstance, KeenSliderHooks, KeenSliderOptions } from "keen-slider";

type Props = {
	tools: Tool[];
};
type Slider = KeenSliderInstance<{}, {}, KeenSliderHooks>;

const animation = { duration: 1e4, easing: (t: number) => t };
const options: KeenSliderOptions<{}, {}, KeenSliderHooks> = {
  loop: true,
	created(s: Slider) {
		s.moveToIdx(5, true, animation);
	},
	updated(s: Slider) {
		s.moveToIdx(s.track.details.abs + 5, true, animation);
	},
	animationEnded(s: Slider) {
		s.moveToIdx(s.track.details.abs + 5, true, animation);
	},
};

const Tool = ({ Icon, color, name }: Tool) => {
	return (
		<div className="flex items-center gap-1 text-sm font-semibold">
			<Icon color={color} size={20} /> {name}
		</div>
	);
};

const renderTools = (item: Tool) => Tool(item);

export default function Tools({ tools }: Props) {
	return (
		<div className="p-4 md:p-10 space-y-2">
			<div className="font-semibold text-lg">Tools:</div>
			<Slider components={tools.map(renderTools)} options={options} />
		</div>
	);
}
