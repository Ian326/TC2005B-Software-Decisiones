const db = require('../util/dbase');
const bcrypt = require('bcryptjs');

module.exports = class User {
    constructor(nuevo_usuario) {
        this.username = nuevo_usuario.username;
        this.password = nuevo_usuario.password || '';
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado) => {
            return db.execute(`
                INSERT INTO users (userName, userPassword)
            values (?, ?)
            `, [this.username, password_cifrado]);
        })
        .catch((error) => {console.log(error)});
    }

    static fetchOne(username) {
        return db.execute(`
            SELECT * 
            FROM users
            WHERE userName = ?
        `, [username]);
    }

    static fetchPermissions(user_Name) {
        return db.execute(`
            SELECT uploadImages, uploadText, viewImages, viewText
            FROM userprivileges
            WHERE userprivileges.userName = ?
        `, [user_Name]);
    }
}