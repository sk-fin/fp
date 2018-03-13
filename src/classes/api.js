
class API {

    constructor() {
        this.server = 'http://pf.auth0.us/';
        this.auth = 'c2l0ZTo0ekJuV0Z4cDJ0RHV3NER4UDRucFEwN3p1ODludXAyag==';
    }

    test() {
        return 1;
    }

    getFunds() {
        return this.callMethod('api/External/funds?limit=100');
    }

    getFundStructureTypes() {
        return this.callMethod('api/External/list/fundStructureTypes');
    }

    getFundTypes() {
        return this.callMethod('api/External/list/fundTypes');
    }

    getCompanyFunds(company) {
        return this.callMethod('api/External/funds?company=' + company);
    }

    getCompanies() {
        return this.callMethod('api/External/companies');
    }

    getCompany(id) {
        return this.callMethod('api/External/company/' + id);
    }

    getFund(id) {
        return this.callMethod('api/External/fund/' + id);
    }

    getFundNav(id) {
        return this.callMethod('api/External/fund/' + id + '/nav');
    }

    getFundIncome(id, period) {
        return this.callMethod('api/External/fund/' + id + '/income?period=' + period);
    }

    callMethod(url, data = {}) {
        let self = this;

        return new Promise((resolve, reject) => {
            fetch(self.server + url, {
                method: 'GET',
                headers : {
                    'Accept': 'application/json',
                    'Authorization' : 'Basic ' + self.auth,
                }
            }).then(
                response => response.json()
            ).then(data => {
                resolve(data);
            }).catch(_ => {
                reject();
            });
        });
    }

}

export default new API;