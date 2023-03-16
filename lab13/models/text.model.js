const texts = 
[   /*
    {
        randText: "Este es el primer comentario"
    }
    */
];

module.exports = class text {
    constructor(injection) {
        this.randText = injection.randText || '';
    }

    save(){
        texts.push(this);
    }

    static fetchAll() {
        return texts;
    }
}