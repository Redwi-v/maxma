import clsx from "clsx";

import "./Button.scss";

const Button = ({ text, icon, onClick = () => { }, isDisableHover }) => {
	return (
		<button
			onClick={e => onClick(e)}
			className={clsx("button", {
				"button--icon": icon,
				"button--hoverOff": isDisableHover
			})}
		>
			{icon ? <img src={icon} alt={"Иконка"} /> : text}
		</button>
	);
};

export default Button;
