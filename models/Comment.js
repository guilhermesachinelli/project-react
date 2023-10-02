export class Comment {
    constructor(content) {
        this.id = this.ramdonId();
        this.content = content;
    }
    ramdonId() {
        return Math.floor(Math.random() * 1000);
    }
}