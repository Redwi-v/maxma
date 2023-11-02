import Sprite from "./sprite.svg"

const Icon = ({id, className, width, height}) => {
	return <svg className={className} width={width} height={height}>
		<use href={Sprite + `#${id}`}></use>
	</svg>;
};

export default Icon;
