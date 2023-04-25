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
}