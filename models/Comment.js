class Comment {
    constructor(text) {
        this.id = this.ramdonId();
        this.text = text;
    }
    ramdonId() {
        return Math.floor(Math.random() * 10000);
    }
}
export default Comment;