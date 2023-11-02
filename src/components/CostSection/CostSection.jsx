import calculateCostRecovery from '../../utils/calculateCostRecovery';
import { getTrackBackground, Range } from 'react-range';
import clsx from 'clsx';
import EmailForm from '../EmailForm';
import { useState } from 'react';

function CostSection({ windowWidth, openNotification }) {
    const [activeTabInCost, setActiveTabInCost] = useState(0);
    const [valuesForSliders, setValuesForSliders] = useState([[1000], [1500], [3000]]);

    return (
        <section className="cost">
            <div className="container">
                <div className="cost__box">
                    <div className="cost__box-left">
                        <h3 className="cost__box-left-title">Окупаемость затрат</h3>
                        <nav className="cost__box-left-menu">
                            <div className="cost__box-left-menu--wrapper">
                                {['Одежда', 'Фарма', 'Косметика', 'Техника', 'Ресторан'].map((item, index) => (
                                    <div
                                        key={index}
                                        className={clsx('cost__box-left-menu-link', {
                                            'cost__box-left-menu-link--active': index === activeTabInCost,
                                        })}
                                        onClick={() => setActiveTabInCost(index)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </nav>
                        <div className="cost__box-left-interactive">
                            {valuesForSliders.map((_, index) => (
                                <div className={'cost__box-left-interactive-box'} key={index}>
                                    <div className={'cost__box-left-interactive-box-left'}>
                                        <p className={'cost__box-left-interactive-box-left-label'}>
                                            {['Средний чек', 'Выручка в месяц', 'Клиенты в базе'][index]}
                                        </p>
                                        <div className={'cost__box-left-interactive-box-left-range'}>
                                            <Range
                                                step={100}
                                                min={0}
                                                max={100000}
                                                values={valuesForSliders[index]}
                                                onChange={(values) => {
                                                    let oldValuesForSliders = [...valuesForSliders];
                                                    oldValuesForSliders[index] = values;
                                                    setValuesForSliders(oldValuesForSliders);
                                                }}
                                                renderTrack={({ props, children }) => (
                                                    <div
                                                        onMouseDown={props.onMouseDown}
                                                        onTouchStart={props.onTouchStart}
                                                        style={{
                                                            ...props.style,
                                                            height: '36px',
                                                            display: 'flex',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <div
                                                            ref={props.ref}
                                                            style={{
                                                                height: '3px',
                                                                width: '100%',
                                                                borderRadius: '16px',
                                                                background: getTrackBackground({
                                                                    values: valuesForSliders[index],
                                                                    colors: ['#312D48', '#BBDDF5'],
                                                                    min: 0,
                                                                    max: 100000,
                                                                }),
                                                                alignSelf: 'center',
                                                            }}
                                                        >
                                                            {children}
                                                        </div>
                                                    </div>
                                                )}
                                                renderThumb={({ props }) => (
                                                    <div
                                                        className={'range__thumb'}
                                                        {...props}
                                                        style={{
                                                            ...props.style,
                                                        }}
                                                    >
                                                        <div className={'range__thumb-circle'} />
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className={'cost__box-left-interactive-box-right'}>
                                        <input
                                            type={'number'}
                                            value={valuesForSliders[index]}
                                            onChange={(event) => {
                                                let arr = [...valuesForSliders];

                                                arr[index][0] =
                                                    Number(event.target.value) > 100000
                                                        ? 100000
                                                        : Number(event.target.value.replaceAll(/\s/g, ''));
                                                setValuesForSliders(arr);
                                            }}
                                        />
                                        {index !== 2 && '₽'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cost__box-right">
                        <img className="cost__box-right-circle" src="/img/decor/gradient-circle.png" />
                        <p className="cost__box-right-money">
                            +{' '}
                            {calculateCostRecovery(
                                activeTabInCost,
                                valuesForSliders[0][0],
                                valuesForSliders[1][0],
                                valuesForSliders[2][0]
                            ).toLocaleString('ru')}{' '}
                            ₽
                        </p>
                        <p className="cost__box-right-opinion">потенциальная доходность в месяц</p>
                    </div>

                    <EmailForm
                        formSendedCallBack={(email) => openNotification(`Полный расчет отправлен на почту ${email}`)}
                        windowWidth={windowWidth}
                        buttonText={'Получить отчет'}
                    />
                </div>
            </div>
        </section>
    );
}

export default CostSection;
