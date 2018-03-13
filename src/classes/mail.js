
class Mail {

    constructor() {
        //this.server = 'http://demo8613866.mockable.io/';
        this.server = 'http://demo8776889.mockable.io/';
    }

    sendMailConnect(data = {}) {
        return this.callMethod('connect', data);
    }

    callMethod(url, data = {}) {
        let self = this;
        return new Promise((resolve, reject) => {
            fetch(self.server + url, {
                method: 'GET',
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

export default new Mail;