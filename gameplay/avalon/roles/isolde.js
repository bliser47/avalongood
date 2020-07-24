class Isolde {
    constructor(thisRoom) {
        this.thisRoom = thisRoom;

        this.role = 'Isolde';
        this.alliance = 'Resistance';

        this.description = 'Tristan and Isolde both see each other.';
        this.orderPriorityInOptions = 50;
    }

    see() {
        const roleTag = {};
        let markExists = false;
        for (let i = 0; i < this.thisRoom.playersInGame.length; i++) {
            if (this.thisRoom.playersInGame[i].role === 'Mark') {
                markExists = true;
                break;
            }
        }
        for (let i = 0; i < this.thisRoom.playersInGame.length; i++) {
            if (this.thisRoom.playersInGame[i].role === 'Tristan' || this.thisRoom.playersInGame[i].role === 'Mark') {
                roleTag[this.thisRoom.playersInGame[i].username] = {};
                roleTag[this.thisRoom.playersInGame[i].username].roleTag = markExists ? 'Lover?' : 'Tristan';
            }
        }

        return roleTag;
    }
}


module.exports = Isolde;
