import "./BlogCard.scss";
import Icon from "../../Icon";

const BlogCard = ({ size = "max" }) => {
	return (
		<div className={`blogCard blogCard--${size}`}>
			<div className="blogCard__banner" />
			<div className="blogCard__info">
				<h6 className="blogCard__info-title">Телеграм-бот, автоматические рассылки и бонусы.</h6>
				<div className="blogCard__info-extra">
					<p className="blogCard__info-extra-date">22 мая</p>

					{
						size === 'max' ? <Icon id={"telegram-in-square"} width={32} height={32} /> : <img src="/img/icons/other/vc_ru.png" alt="vs.ru" />
					}


				</div>
			</div>
		</div>
	);
};

export default BlogCard;
