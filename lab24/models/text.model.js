const db = require('../util/dbase');

module.exports = class Text {
    constructor(injection) {
        this.randText = injection.randText || '';
        this.user = injection.user || ''
    }

    save(){
        return db.execute(`
        INSERT INTO usercomments (textSent, userName) 
        values (?, ?)
    `, [this.randText, this.user]);
    }

    static fetchAll() {
        return db.execute(
            `SELECT userName, textSent 
            FROM usercomments
            `
        );
    }

    static find(valorBusqueda) {
        return db.execute(`
            SELECT *
            FROM usercomments
            WHERE (userName LIKE ? OR textSent LIKE ?)
        `, [ '%' + valorBusqueda + '%', '%' + valorBusqueda + '%', ]
        );
    }
}