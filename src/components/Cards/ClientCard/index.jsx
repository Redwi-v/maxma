

import "./ClientCard.scss";

const ClientCard = (props) => {
	const { onClick } = props

	return (
		<div className={"clientCard"}>
			<div
				onClick={() => onClick()}
				className="clientCard__preview"
			>
				<img src="img/people/people1.jpg" alt="people" />
				<div className="clientCard__banner">
					+25% к выручке
				</div>
			</div>
			<div className="clientCard__info">
				<div className="clientCard__info_main">
					<h6 className="clientCard__info-title">Антон Писклов</h6>
					<p className="clientCard__info-extra">Коммерческий директор, Triangle Group</p>
				</div>
				<div className="clientCard__icon">
					<img src="img/icons/other/clientCardIcon1.png" alt="clientCard" />
				</div>
			</div>
		</div>
	);
};

export default ClientCard;
