import NumberForm from '../NumberForm';
import RadioButtonsForm from '../UI/RadioButtonsForm';

function PricesSection({ windowWidth, openNotification }) {
    return (
        <section id={'anchor-prices'} className="prices">
            <div className="container">
                <h2 className="prices__title">Цены</h2>
                <div className="prices__items">
                    {[
                        {
                            icon: 'e-mail',
                            price: '0',
                            opinion: 'E-mail и Push-рассылка',
                        },
                        {
                            icon: 'sms',
                            price: '2,9',
                            opinion: 'SMS-рассылка',
                        },
                        {
                            icon: 'abonent-pay',
                            price: '14 990',
                            opinion: 'Абонентская плата',
                        },
                    ].map(({ icon, price, opinion }) => (
                        <div className="prices__items-item" key={icon}>
                            <div className="prices__items-item-preview">
                                <img
                                    width={60}
                                    height={60}
                                    src={`/img/icons/price/${icon}.png`}
                                    srcSet={`/img/icons/price/${icon}@2x.png 2x`}
                                    alt={'Иконка e-mail и push-рассылки'}
                                />
                            </div>
                            <div className="prices__items-info">
                                <p className="prices__items-item-info-price">{price} ₽</p>
                                <p className="prices__items-item-info-opinion">{opinion}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'prices__form'}>
                    <NumberForm
                        windowWidth={windowWidth}
                        buttonText="Получить предложение"
                        style="black"
                        border={true}
                        sendAction={() => {
                            openNotification('Заявка успешно отправлена. Ожидайте звонка менеджера');
                        }}
                        loadContent={(params) => {
                            return (
                                <>
                                    <RadioButtonsForm radioList={['В WhatsApp', 'В Telegram']} />
                                    {params.status === 'codeErr' && (
                                        <p className={'welcome__hero-form-notion err'}>Неверный код</p>
                                    )}
                                    {params.status === 'numberErr' && (
                                        <p className={'welcome__hero-form-notion err'}>Проверьте номер: в нем есть ошибки</p>
                                    )}
                                </>
                            );
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default PricesSection;
