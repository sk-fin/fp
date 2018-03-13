
class Calculate {

    constructor() {
        //this.server = 'http://pf.auth0.us/';
    }

    diffProcent(curent, prev) {
        return (((curent / prev) - 1) * 100).toFixed(2);
    }

    pifCount(allSumm, pifPrice) {
        return allSumm / pifPrice;
    }

    totalRev(allSumm, procent) {
        return (((allSumm / 100) * procent) + allSumm);
    }

    myRev(allSumm, procent) {
        return ((allSumm / 100) * procent);
    }

    /*
     rspStart - РСП на начало периода
     rspEnd - РСП текущее
     periodSet - период расчета в месяцах
     periodEx - период существования фонда
     */

    calculate(rspStart, rspEnd, periodSet, periodEx, type) {
        // Фактическая
        if (type == 1) {
            if (periodSet <= periodEx) {
                // Период расчета меньше периода существования
                return this.factPeriodIsLess(rspStart, rspEnd);
            } else {
                // Период расчета больше периода существования
                return this.factPeriodIsLonger(rspStart, rspEnd, periodSet, periodEx);
            }
        }
        // Годовая
        if (type == 2) {
            if (periodSet <= periodEx) {
                // Период расчета меньше периода существования
                return this.yearPeriodIsLess(rspStart, rspEnd, periodSet);
            } else {
                // Период расчета больше периода существования
                return this.yearPeriodIsLonger(rspStart, rspEnd, periodSet, periodEx);
            }
        }
    }

    factSelect(rspStart, rspEnd, periodSet, periodEx) {

    }

    // Фактическая, где период расчета меньше периода существования
    factPeriodIsLess(rspStart, rspEnd) {
        return ((rspEnd / rspStart) -1 ) * 100;
    }

    // Фактическая, где период расчета больше периода существования
    factPeriodIsLonger(rspStart, rspEnd, periodSet, periodEx) {
        return ((periodSet/periodEx)*(rspEnd/rspStart) -1) * 100;
    }

    // Годовая, где период расчета меньше периода существования
    yearPeriodIsLess(rspStart, rspEnd, periodSet) {
        return ((12 / periodSet) * ( rspEnd / rspStart ) - 1 ) * 100;
    }

    // Годовая, где период расчета больше периода существования
    yearPeriodIsLonger(rspStart, rspEnd, periodSet, periodEx) {
        return ((12 / periodSet) * (periodSet / periodEx) * ( rspEnd / rspStart) - 1 ) * 100;
    }


}

export default new Calculate;