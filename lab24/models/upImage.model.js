const db = require('../util/dbase');


module.exports = class Image {
    constructor(object) {
        this.randImage = object.randImage || '';
        this.user = object.user || ''
    }

    save(){
        return db.execute(`
        INSERT INTO userimages (imageSent, userName) 
        values (?, ?)
    `, [this.randImage, this.user]);
    }

    static fetchAll() {
        return db.execute(
            `SELECT userName, imageSent 
            FROM userimages
            `
        );
    }
}