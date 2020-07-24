class Tristan {
    constructor(thisRoom) {
        this.thisRoom = thisRoom;

        this.role = 'Tristan';
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
            if (this.thisRoom.playersInGame[i].role === 'Isolde' || this.thisRoom.playersInGame[i].role === 'Mark') {
                roleTag[this.thisRoom.playersInGame[i].username] = {};
                roleTag[this.thisRoom.playersInGame[i].username].roleTag = markExists ? 'Lover?' : 'Isolde';
            }
        }

        return roleTag;
    }
}


module.exports = Tristan;
