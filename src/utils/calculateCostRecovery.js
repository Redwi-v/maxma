export default function calculateCostRecovery(
	tabIndex,
	checkAvgYear,
	earningMonth,
	baseSize,
) {
	const tab = ["Одежда", "Фарма", "Косметика", "Техника", "Ресторан"][
		tabIndex
	];

	const inputVars = {
		baseSize, // Размер базы
		checkCountMonth: 4800, // Кол-во чеков в месяц
		checkAvgYear, // Средний чек за год
		charge: 0.5, // Наценка
		earningMonth, // Выручка в месяц
	};

	const getCheckAvgBoostRate = () => {
		if (tab === "Одежда") {
			return 0.37;
		} else if (tab === "Техника" || tab === "Фарма") {
			return 0.5;
		} else if (tab === "Косметика" || tab === "Ресторан") {
			return 0.25;
		}
	};

	const getConversionMailingRate = () => {
        if (tab === "Одежда") {
			return 0.03;
		} else if (tab === "Техника" || tab === "Фарма") {
			return 0.05;
		} else if (tab === "Косметика" || tab === "Ресторан") {
			return 0.07;
		}
    };

	// Константы
	const constants = {
		checkAvgBoostRate: getCheckAvgBoostRate(), // Рост среднего чека
		conversionMailingRate: getConversionMailingRate(), // Конверсия рассылок
		checkWithCardRate: 0.65, // Доля чеков с картой
		conversionClubRate: 0.4, // Конверсия вступления в клуб
		mailingPerClientMonth: 0.5, // Рассылок на клиента в месяц
		lostRate: 0.8, // Доля оттока (не покупали > 6 мес.)
		conversionReactivationRate: 0.005, // Конверсия реактивации
	};

	inputVars.checkCountMonth = inputVars.earningMonth / inputVars.checkAvgYear;

	// Пересчитаем кол-во чеков в месяц
	inputVars.checkCountMonth = inputVars.earningMonth / inputVars.checkAvgYear;

	// Считаем переменные
	const vars = {};

	// Рост базы
	vars.baseBoost =
		(inputVars.checkCountMonth -
			inputVars.checkCountMonth * constants.checkWithCardRate) *
		constants.conversionClubRate;
	// База итого
	vars.baseTotal = inputVars.baseSize + vars.baseBoost;

	// Разница среднего чека (чек за год * рост чека)
	vars.checkAvgDelta = inputVars.checkAvgYear * constants.checkAvgBoostRate;
	// Средний чек с картой (чек за год + дельта)
	vars.checkWithCardAvg = inputVars.checkAvgYear + vars.checkAvgDelta;

	// Отток
	vars.lostCount =
		(inputVars.baseSize + inputVars.checkCountMonth) *
		constants.checkWithCardRate *
		constants.lostRate;
	// Вернувшихся
	vars.reactivationCount =
		vars.lostCount * constants.conversionReactivationRate;

	// Кол-во чеков с картой
	vars.checkWithCardCount =
		inputVars.checkCountMonth * constants.checkWithCardRate -
		vars.baseBoost -
		vars.reactivationCount;

	// Покупок с рассылок
	vars.purchasesFromMailingMonth =
		constants.conversionMailingRate *
		constants.mailingPerClientMonth *
		vars.baseTotal;

	// LTV
	vars.ltv = vars.reactivationCount * 2 * vars.checkWithCardAvg;

	// Считаем результат
	const result = {};

	result.checkAvgBoost = Math.round(
		vars.checkAvgDelta * vars.checkWithCardCount,
	); // Рост чека
	result.checkAvgBoostPercents = Math.round(
		(result.checkAvgBoost / inputVars.earningMonth) * 100,
	);
	result.mailingAndPromo = Math.round(
		vars.checkWithCardAvg * vars.purchasesFromMailingMonth,
	); // Рассылки и акции
	result.mailingAndPromoPercents = Math.round(
		(result.mailingAndPromo / inputVars.earningMonth) * 100,
	);
	result.reactivation = Math.round(vars.ltv); // Реактивация
	result.reactivationPercents = Math.round(
		(result.reactivation / inputVars.earningMonth) * 100,
	);
	result.total = Math.round(
		result.checkAvgBoost + result.mailingAndPromo + result.reactivation,
	); // Итого
	result.totalPercents = Math.round(
		(result.total / inputVars.earningMonth) * 100,
	);

	return result.total;
}
