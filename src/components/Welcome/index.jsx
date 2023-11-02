import NumberForm from '../NumberForm';

function WelcomeSection({ windowWidth, openNotification }) {
    return (
        <section className={'welcome'}>
            <div className={'welcome__hero'}>
                <h1 className={'welcome__hero-title'}>Платформа лояльности для ритейл-сетей</h1>

                <NumberForm
                    windowWidth={windowWidth}
                    buttonText={'Посмотреть демо'}
                    sendAction={() => {
                        openNotification('Заявка успешно отправлена. Ожидайте звонка менеджера');
                    }}
                    loadContent={(params) => {
                        if (params.status === 'codeErr') {
                            return <p className={'welcome__hero-form-notion err'}>Неверный код</p>;
                        }
                        if (params.status === 'numberErr') {
                            return <p className={'welcome__hero-form-notion err'}>Проверьте номер: в нем есть ошибки</p>;
                        }

                        return <p className={'welcome__hero-form-notion'}>Будет отправлен код по SMS</p>;
                    }}
                />
            </div>
            <div className={'welcome__banner'}>
                <img
                    width={879}
                    height={522}
                    className={'welcome__banner-img'}
                    src={'/img/banner@1x.png'}
                    srcSet={'/img/banner@2x.png 2x, /img/banner@3x.png 3x'}
                    alt={'Баннер'}
                />
            </div>
            <div className={'welcome__partners'}>
                <p className="welcome__partners-title">С нами уже 300+ ритейлеров</p>
                <div className="welcome__partners-items">
                    {[
                        'letique',
                        'novikov',
                        'lamoda',
                        'akhmadullina',
                        'xiaomi',
                        'loreal',
                        'suprotec',
                        'dobraya',
                        'superstep',
                        'happybaby',
                    ].map((partner) => (
                        <img
                            key={partner}
                            width={150}
                            height={60}
                            srcSet={'/img/logos/partners/' + partner + '@2x.png 2x'}
                            src={`/img/logos/partners/${partner}.png`}
                            alt="Логотип партнера"
                            className="welcome__partners-items-item"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;
