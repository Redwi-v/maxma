import "./Footer.scss";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import clsx from "clsx";
import React from "react";

const Footer = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	return (
		<footer className={"footer"}>
			<div className="footer__content">
				<div className="footer__content-top">
					<a className={"footer__content-top-logo"} href={"/"}>
						<img width={95} height={29} src={"/img/logos/logo-[94x28].svg"} alt={"Логотип MAXMA"} />
					</a>
					<>
							<div className={clsx("footer__content-top-contacts", {"display-none": windowWidth <= 700})}>
								<div className="footer__content-top-contact">
									<Icon id={"phone"} width={24} height={24}/>
									<p className="footer__content-top-contact-text">+7 (499) 938 49 80</p>
								</div>
								<div className="footer__content-top-contact">
									<img width={24} height={24} src={"/img/icons/24x24/email.svg"} alt={"Электронная почта"} />
									<p className="footer__content-top-contact-text">hello@maxma.com</p>
								</div>
							</div>
							<div className={clsx("footer__content-top-socials", {"display-none": windowWidth <= 700})}>
								<a href={"#"}>
									<Icon id={"vc-ru-in-circle"} width={32} height={32} className={"animation-scale-1-1"}/>
								</a>
								<a href={"#"}>
									<Icon id={"youtube"} width={32} height={32} className={"animation-scale-1-1"}/>
								</a>
								<a href={"#"}>
									<Icon id={"telegram-in-circle"} width={32} height={32} className={"animation-scale-1-1"}/>
								</a>
							</div>
						</>
						<ul className={clsx("footer__content-top-nav", {
							"display-none": windowWidth > 700
						})}>
							{
								['Продукт', 'Информация', 'Модули', 'Maxma'].map((item, index) => (
									<li className={"footer__content-top-nav-item"}>
										<span className={"footer__content-top-nav-item-text"}>{item}</span>
										<img width={8} height={6} src={"/img/icons/other/arrow-down.svg"} alt={"Открыть селект"} />
									</li>
								))
							}
						</ul>
				</div>
				<div className={"footer__content-line"} />
				<div className="footer__content-center">
					{
						[
							{
								title: "Продукт",
								links: ["Цены", "Запросить демо", "Войти в личный кабинет"],
							},
							{
								title: "Информация",
								links: [
									"Лояльность",
									"Рассылки",
									"Wallet",
									"Аналитики",
									"Акции",
									"Брошенные корзины",
									"Подарочные карты",
									"CDP",
									"Приведи друга",
									"Форма захвата",
									"Промокоды",
								],
							},
							{
								title: "Модули",
								links: ["API", "База знаний", "Блог", "Вакансии"],
							},
							{
								title: "Maxma",
								links: [
									"О компании",
									"Партнерская программа",
									"Клиенты",
									"Отзывы",
									"Пользовательское соглашение",
									"Политика антиспам",
									"Политика о персональных данных",
									"Контакты",
								],
							},
						].map(({ title, links }) => (
							<nav className={clsx("footer__content-center-menu", {
								"display-none": windowWidth <= 700
							})}>
								<p className={"footer__content-center-menu-title"}>{title}</p>
								<div className="footer__content-center-menu-links">
									{links.map(link => (
										<a className={"footer__content-center-menu-links-link"} href={"#"}>
											{link}
										</a>
									))}
								</div>
							</nav>
						))}

						<>
							<div className={clsx("footer__content-top-contact", {"display-none": windowWidth > 700})}>
								<Icon id={"phone"} width={24} height={24}/>
								<p className="footer__content-top-contact-text">+7 (499) 938 49 80</p>
							</div>
							<div className={clsx("footer__content-top-contact", {"display-none": windowWidth > 700})}>
								<img width={24} height={24} src={"/img/icons/24x24/email.svg"} alt={"Электронная почта"} />
								<p className="footer__content-top-contact-text">hello@maxma.com</p>
							</div>
							<div className={clsx("footer__content-top-socials", {"display-none": windowWidth > 700})}>
								<a href={"#"}>
									<Icon id={"vc-ru-in-circle"} width={32} height={32} className={"animation-scale-1-1"}/>
								</a>
								<a href={"#"}>
									<Icon id={"youtube"} width={32} height={32} className={"animation-scale-1-1"}/>
								</a>
								<a href={"#"}>
									<Icon id={"telegram-in-circle"} width={32} height={32} className={"animation-scale-1-1"}/>
								</a>
							</div>
						</>

				</div>
				<div className={"footer__content-line"} />
				<div className="footer__content-bottom">
					<p className="footer__content-bottom-text">
						© 2017-2023 MAXMA ООО "Доставка покупателей" ИНН: 5041206183 КПП: 504101001 ОГРН: 1175053011451
					</p>
					<p className="footer__content-bottom-text">Москва Малая Семёновская, 3А стр 1</p>
					<p className="footer__content-bottom-text">Амстердам Veeteeltstraat 58, 1097WZ</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
