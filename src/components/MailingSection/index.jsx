import EmailForm from '../EmailForm';

function MailingSection({ windowWidth, openNotification }) {
    return (
        <section className="mailing">
            <div className="container">
                <img className="mailing__decor" src="/img/decor/plus-and-circle.png" alt="decor" />
                <h3 className="mailing__title">Подписаться на рассылку</h3>
                <p className="mailing__text">Получайте обновления платформы, журнал и события. Без спама</p>
                <div className="mailing__items">
                    <div className="mailing__items-enter">
                        <EmailForm
                            isOpen={true}
                            buttonText={'Подписаться'}
                            windowWidth={windowWidth}
                            customStyles={{
                                marginTop: 0,
                            }}
                            formSendedCallBack={() => {
                                openNotification('подписка оформлена');
                            }}
                        />
                    </div>
                    <div className="mailing__items-social">
                        <img width={32} height={32} src={'/img/icons/other/telegram.svg'} alt={'Телеграм канал'} />
                        <span className="mailing__items-social-text">Телеграм-канал</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MailingSection;
