import "swiper/scss";
import { getTrackBackground, Range } from "react-range";
import { useEffect, useState } from "react";
import clsx from "clsx";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Icon from "../../components/Icon";

import calculateCostRecovery from "../../utils/calculateCostRecovery";

import "./Home.scss";
import PlatformSection from "../../components/PlatformSection";
import Clients from "../../components/Clients";
import RadioButtonsForm from "../../components/UI/RadioButtonsForm";
import Button from "../../components/UI/Button";
import Blog from "../../components/Blog";
import Notification from "../../components/Notification";
import NumberForm from "../../components/NumberForm";
import EmailForm from "../../components/EmailForm";
import Checkbox from "../../components/UI/Checkbox";

const Homepage = () => {
	const [activeTabInCost, setActiveTabInCost] = useState(0);
	const [valuesForSliders, setValuesForSliders] = useState([
		[1000],
		[1500],
		[3000],
	]);
	const [windowWidth, setWindowWidth] = useState(0);
	const [notificationText, setNotificationText] = useState('')
	const [notificationIsOpen, setNotificationOpen] = useState(false)


	const openNotification = (text, time = 5000) => {
		setNotificationText(text)
		setNotificationOpen(true)

		setTimeout(() => {
			setNotificationOpen(false)
		}, time)
	}



	useEffect(() => {
		setWindowWidth(window.innerWidth);

		// Логика искусственной задержки перед отображением страницы, чтобы шрифты уже встали на свои места
		document.getElementsByTagName("body")[0].style.overflowY = "hidden";
		document.getElementById("root").style.opacity = "0%";
		setTimeout(() => {
			document.getElementById("root").style.transition = "opacity 0.15s";
			document.getElementById("root").style.opacity = "100%";
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			document.getElementsByTagName("body")[0].style.overflowY = "auto";
			document.getElementsByTagName("body")[0].style.scrollBehavior =
				"smooth";
			document.getElementsByTagName("html")[0].style.scrollBehavior =
				"smooth";
		}, 1800);
	}, []);

	return (
		<>
			<Notification isOpen={notificationIsOpen} text={notificationText} />
			<Header />
			<section className={"welcome"}>
				<div className={"welcome__hero"}>
					<h1 className={"welcome__hero-title"}>
						Платформа лояльности для ритейл-сетей
					</h1>

					<NumberForm windowWidth={windowWidth} buttonText={'Посмотреть демо'}
						sendAction={() => { openNotification('Заявка успешно отправлена. Ожидайте звонка менеджера') }}
						loadContent={(params) => {
							if (params.status === 'codeErr') {
								return (
									<p className={"welcome__hero-form-notion err"}>
										Неверный код
									</p>
								)
							}
							if (params.status === 'numberErr') {
								return (
									<p className={"welcome__hero-form-notion err"}>
										Невалидный номер
									</p>
								)
							}

							return (
								<p className={"welcome__hero-form-notion"}>
									Будет отправлен код по SMS
								</p>
							)
						}
						} />
				</div>
				<div className={"welcome__banner"}>
					<img
						width={879}
						height={522}
						className={"welcome__banner-img"}
						src={"/img/banner@1x.png"}
						srcSet={"/img/banner@2x.png 2x, /img/banner@3x.png 3x"}
						alt={"Баннер"}
					/>
				</div>
				<div className={"welcome__partners"}>
					<p className="welcome__partners-title">
						С нами уже 300+ ритейлеров
					</p>
					<div className="welcome__partners-items">
						{[
							"letique",
							"novikov",
							"lamoda",
							"akhmadullina",
							"xiaomi",
							"loreal",
							"suprotec",
							"dobraya",
							"superstep",
							"happybaby",
						].map(partner => (
							<img
								width={150}
								height={60}
								srcSet={
									"/img/logos/partners/" +
									partner +
									"@2x.png 2x"
								}
								src={`/img/logos/partners/${partner}.png`}
								alt="Логотип партнера"
								className="welcome__partners-items-item"
							/>
						))}
					</div>
				</div>
			</section>
			<PlatformSection />
			<Clients />
			<section className="cost">
				<div className="container">
					<div className="cost__box">


						<div className="cost__box-left">
							<h3 className="cost__box-left-title">
								Окупаемость затрат
							</h3>
							<nav className="cost__box-left-menu">
								<div className="cost__box-left-menu--wrapper">
									{[
										"Одежда",
										"Фарма",
										"Косметика",
										"Техника",
										"Ресторан",
									].map((item, index) => (
										<div
											className={clsx(
												"cost__box-left-menu-link",
												{
													"cost__box-left-menu-link--active":
														index === activeTabInCost,
												},
											)}
											onClick={() =>
												setActiveTabInCost(index)
											}>
											{item}
										</div>
									))}
								</div>
							</nav>
							<div className="cost__box-left-interactive">
								{valuesForSliders.map((_, index) => (
									<div
										className={
											"cost__box-left-interactive-box"
										}>
										<div
											className={
												"cost__box-left-interactive-box-left"
											}>
											<p
												className={
													"cost__box-left-interactive-box-left-label"
												}>
												{
													[
														"Средний чек",
														"Выручка в месяц",
														"Клиенты в базе",
													][index]
												}
											</p>
											<div
												className={
													"cost__box-left-interactive-box-left-range"
												}>
												<Range
													step={100}
													min={0}
													max={100000}
													values={
														valuesForSliders[index]
													}
													onChange={values => {
														let oldValuesForSliders =
															[
																...valuesForSliders,
															];
														oldValuesForSliders[
															index
														] = values;
														setValuesForSliders(
															oldValuesForSliders,
														);
													}}
													renderTrack={({
														props,
														children,
													}) => (
														<div
															onMouseDown={
																props.onMouseDown
															}
															onTouchStart={
																props.onTouchStart
															}
															style={{
																...props.style,
																height: "36px",
																display: "flex",
																width: "100%",
															}}>
															<div
																ref={props.ref}
																style={{
																	height: "3px",
																	width: "100%",
																	borderRadius:
																		"16px",
																	background:
																		getTrackBackground(
																			{
																				values: valuesForSliders[
																					index
																				],
																				colors: [
																					"#312D48",
																					"#BBDDF5",
																				],
																				min: 0,
																				max: 100000,
																			},
																		),
																	alignSelf:
																		"center",
																}}>
																{children}
															</div>
														</div>
													)}
													renderThumb={({
														props,
													}) => (
														<div
															className={
																"range__thumb"
															}
															{...props}
															style={{
																...props.style,
															}}>
															<div
																className={
																	"range__thumb-circle"
																}
															/>
														</div>
													)}
												/>
											</div>
										</div>
										<div
											className={
												"cost__box-left-interactive-box-right"
											}>
											<input
												type={'number'}
												value={valuesForSliders[
													index
												]}
												onChange={event => {
													let arr = [
														...valuesForSliders,
													];

													arr[index][0] = Number(event.target.value) > 100000 ? 100000 : Number(
														event.target.value.replaceAll(
															/\s/g,
															"",
														),
													);
													setValuesForSliders(arr);
												}}
											/>
											{index !== 2 && "₽"}
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="cost__box-right">
							<img
								className="cost__box-right-circle"
								src="/img/decor/gradient-circle.png"
							/>
							<p className="cost__box-right-money">
								+ {calculateCostRecovery(activeTabInCost, valuesForSliders[0][0], valuesForSliders[1][0], valuesForSliders[2][0]).toLocaleString("ru")} ₽
							</p>
							<p className="cost__box-right-opinion">
								потенциальная доходность в месяц
							</p>
						</div>



						<EmailForm formSendedCallBack={(email) => openNotification(`Полный расчет отправлен на почту ${email}`)}
							windowWidth={windowWidth} buttonText={'Получить отчет'} />

					</div>

				</div>
			</section >
			<section id={"anchor-prices"} className="prices">
				<div className="container">
					<h2 className="prices__title">Цены</h2>
					<div className="prices__items">
						{[
							{
								icon: "e-mail",
								price: "0",
								opinion: "E-mail и Push-рассылка",
							},
							{
								icon: "sms",
								price: "2,9",
								opinion: "SMS-рассылка",
							},
							{
								icon: "abonent-pay",
								price: "14 990",
								opinion: "Абонентская плата",
							},
						].map(({ icon, price, opinion }) => (
							<div className="prices__items-item">
								<div className="prices__items-item-preview">
									<img
										width={60}
										height={60}
										src={`/img/icons/price/${icon}.png`}
										srcSet={`/img/icons/price/${icon}@2x.png 2x`}
										alt={"Иконка e-mail и push-рассылки"}
									/>
								</div>
								<div className="prices__items-info">
									<p className="prices__items-item-info-price">
										{price} ₽
									</p>
									<p className="prices__items-item-info-opinion">
										{opinion}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className={"prices__form"}>
						<div className={"prices__form-box"}>
							<NumberForm windowWidth={windowWidth} buttonText='Получить предложение' style='black' />
						</div>
						<RadioButtonsForm radioList={['В WhatsApp', 'В Telegram']} />
						<div className="prices__under-button">
							<Button text={'Получить предложение'} />
						</div>
					</div>
				</div>
			</section>
			<Blog />

			<section className="mailing">
				<div className="container">
					<img className="mailing__decor" src="/img/decor/plus-and-circle.png" />
					<h3 className="mailing__title">Подписаться на рассылку</h3>
					<p className="mailing__text">
						Получайте обновления платформы, журнал и события. Без
						спама
					</p>
					<div className="mailing__items">
						<div className="mailing__items-enter">
							<div className="mailing__items-enter-box">
								<input
									className="mailing__items-enter-box-input"
									type="text"
									placeholder={"Ваш e-mail"}
								/>
								{windowWidth > 440 && (
									<button className="mailing__items-enter-box-button">
										Подписаться
									</button>
								)}
							</div>
							{windowWidth <= 440 && (
								<button className="mailing__items-enter-box-button">
									Подписаться
								</button>
							)}
							<Checkbox text='Соглашаюсь на передачу данных' />
						</div>
						<div className="mailing__items-social">
							<img
								width={32}
								height={32}
								src={"/img/icons/other/telegram.svg"}
								alt={"Телеграм канал"}
							/>
							<span className="mailing__items-social-text">
								Телеграм-канал
							</span>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Homepage;
