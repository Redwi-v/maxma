import Button from "../UI/Button";
import ModuleItem from "./ModuleItem/ModuleItem";
import modulesData from "./constants/modulesData";


function PlatformSection(props) {
    return (
        <section className={"platform"}>
            <div className="container">
                <h2 className={"platform__title"}>Платформа</h2>
                <div className={"platform__items"}>


                    <div className={`platform__items-item platform__items-item--default platform__items-item--purple`}>
                        <div className="platform__items-item-left">
                            <div className="platform__image-wrapper">
                                <img
                                    width={80}
                                    height={80}
                                    src={"/img/icons/3D/heart.png"}
                                    alt={"3D-иконка раздела"}
                                />
                            </div>
                            <h3 className="platform__items-item-left-title">
                                Программа лояльности
                            </h3>
                            <ul className="platform__items-item-left-list">
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Скидки и бонусы для клиентов
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Внедрение стратегии crm-маркетинга
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Программа лояльности для розницы и интернет-магазинов
                                </li>
                            </ul>

                        </div>
                        <div className="platform__items-item-right">
                            <div className="platform__items-item-right-box">
                                <img style={
                                    {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }
                                } src={'/img/platform/item1.png'} alt='Включить бонусы' />
                            </div>
                        </div>
                        <Button
                            text={"Включить бонусы"}
                            onClick={() => { }}
                        />
                    </div>
                    <div className={`platform__items-item platform__items-item--default platform__items-item--beige`}>
                        <div className="platform__items-item-left">
                            <div className="platform__image-wrapper">
                                <img
                                    width={80}
                                    height={80}
                                    src={"/img/icons/3D/percent.png"}
                                    alt={"3D-иконка раздела"}
                                />
                            </div>
                            <h3 className="platform__items-item-left-title">
                                Акции
                            </h3>
                            <ul className="platform__items-item-left-list">
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Более 100+ механик: день рождения, акции 1+1 и другие


                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Быстрая настройка за 2 минуты
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Работа акций в рознице и интернет-магазине
                                </li>
                            </ul>

                        </div>
                        <div className="platform__items-item-right">
                            <div className="platform__items-item-right-box">
                                <img style={
                                    {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }
                                } src={'/img/platform/item2.png'} alt='Включить бонусы' />
                            </div>
                        </div>
                        <Button
                            text={"Настроить"}
                            onClick={() => { }}
                        />
                    </div>
                    <div className={`platform__items-item platform__items-item--default platform__items-item--blue`}>
                        <div className="platform__items-item-left">
                            <div className="platform__image-wrapper">
                                <img
                                    width={80}
                                    height={80}
                                    src={"/img/icons/3D/email.png"}
                                    alt={"3D-иконка раздела"}
                                />
                            </div>
                            <h3 className="platform__items-item-left-title">
                                Рассылки
                            </h3>
                            <ul className="platform__items-item-left-list">
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Автоматические рассылки по триггерам




                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Персонализация по каналам SMS, push, e-mail, Viber и Telegram
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Массовые платные и бесплатные рассылки.
                                </li>
                            </ul>

                        </div>
                        <div className="platform__items-item-right">
                            <div className="platform__items-item-right-box">
                                <img style={
                                    {
                                        position: 'absolute',
                                        top: 0,
                                        left: -20,
                                    }
                                } src='/img/platform/item3.png' alt='Включить бонусы' />
                            </div>
                        </div>
                        <Button
                            text={"Запустить"}
                            onClick={() => { }}
                        />
                    </div>
                    <div className={`platform__items-item platform__items-item--default platform__items-item--green`}>
                        <div className="platform__items-item-left">
                            <div className="platform__image-wrapper">
                                <img
                                    width={80}
                                    height={80}
                                    src={"/img/icons/3D/cards.png"}
                                    alt={"3D-иконка раздела"}
                                />
                            </div>
                            <h3 className="platform__items-item-left-title">
                                Виртуальные карты
                            </h3>
                            <ul className="platform__items-item-left-list">
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Электронные карты лояльности по ссылке или QR-коду
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Отображение статуса и баланса клиента
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Бесплатная отправка рассылки push
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Геопуши с отправкой рядом с торговой точкой
                                </li>
                            </ul>

                        </div>
                        <div className="platform__items-item-right">
                            <div className="platform__items-item-right-box">
                                <img style={
                                    {
                                        position: 'absolute',
                                        top: -34,
                                        left: 0,
                                    }
                                } src='/img/platform/item4.png' alt='Включить бонусы' />
                            </div>
                        </div>
                        <Button
                            text={"Создать карту"}
                            onClick={() => { }}
                        />
                    </div>
                    <div className={`platform__items-item platform__items-item--default platform__items-item--pink`}>
                        <div className="platform__items-item-left">
                            <div className="platform__image-wrapper">
                                <img
                                    width={80}
                                    height={80}
                                    src={"/img/icons/3D/statistic.png"}
                                    alt={"3D-иконка раздела"}
                                />
                            </div>
                            <h3 className="platform__items-item-left-title">
                                smartRFM и аналитика
                            </h3>
                            <ul className="platform__items-item-left-list">
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Более 25+ метрик: конверсия CR, LTV, ROI и другие
                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>
                                    Сегментация базы клиентов по smartRFM с рекомендациями

                                </li>
                                <li
                                    className={
                                        "platform__items-item-left-list-item"
                                    }>

                                    Автоматические отчеты
                                </li>

                            </ul>

                        </div>
                        <div className="platform__items-item-right">
                            <div className="platform__items-item-right-box">
                                <img style={
                                    {
                                        position: 'absolute',
                                        top: 20,
                                        left: 0,
                                    }
                                } src='/img/platform/item5.png' alt='smartRFM и аналитика' />
                            </div>
                        </div>
                        <Button
                            text={"Смотреть"}
                            onClick={() => { }}
                        />
                    </div>

                    <div className="platform__items-item platform__items-item--modules platform__items-item--mint">
                        <h3 className="platform__items-item-title platform__items-item-modules-title">
                            Другие модули
                        </h3>
                        <div className="platform__items-item-box">
                            <ul className="platform__modules-list">
                                {
                                    modulesData.map(moduleData => <li key={moduleData.title}><ModuleItem {...moduleData} /></li>)
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="platform__items-item  platform__items-item--gray platform__items-item_integration">
                        <h3 className="platform__items-item-title platform__integration_title">
                            Интеграции <br /> c вашей кассой или сайтом
                        </h3>
                        <div className="platform__items-item-box">
                            <ul className="platform__integration_list">
                                {[
                                    "1c",
                                    "bitrix",
                                    "my-storage",
                                    "evator",
                                    "smart-drugstore",
                                    "iiko",
                                    "atol",
                                    "r-keeper",
                                    "api",
                                    "modules",
                                ].map(icon => (
                                    <li className="platform__items-item-box-item" key={icon}>
                                        <img
                                            width={88}
                                            height={88}
                                            srcSet={`/img/icons/integrations/${icon}@2x.png 2x`}
                                            src={`/img/icons/integrations/${icon}.png`}
                                            alt={"3D-превью модуля"}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button text={"Смотреть все"} />
                    </div>



                </div>
            </div>
        </section>
    );
}

export default PlatformSection;