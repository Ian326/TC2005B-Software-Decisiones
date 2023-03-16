const db = require('../util/dbase');

/*const texts = 
[
    {
        randText: "Este es el primer comentario"
    }
    
];
*/

module.exports = class text {
    constructor(injection) {
        this.randText = injection.randText || '';
    }

    save(){
        return db.execute(`
        INSERT INTO usercomments (textSent) 
        values (?)
    `, [this.randText]);
    }

    static fetchAll() {
        return db.execute(
            `SELECT userName, textSent 
            FROM usercomments
            `
        );
    }
}