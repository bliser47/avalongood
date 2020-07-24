
class Mark {
    constructor(thisRoom) {
        this.thisRoom = thisRoom;

        this.role = 'Mark';
        this.alliance = 'Spy';

        this.description = 'A Spy member who confuses Tristan and Isolde.';
    }

    // Spy sees all spies except oberon
    see() {
        if (this.thisRoom.gameStarted === true) {
            const obj = {};
            const array = [];

            for (let i = 0; i < this.thisRoom.playersInGame.length; i++) {
                if (this.thisRoom.playersInGame[i].alliance === 'Spy') {
                    if (this.thisRoom.playersInGame[i].role === 'Oberon' || this.thisRoom.playersInGame[i].role === 'Puck') {
                        // don't add oberon
                    } else {
                        // show bad lancelot
                        if ( this.thisRoom.playersInGame[i].role === 'Bad Lancelot' ) {
                            obj[this.thisRoom.playersInGame[i].username] = {};
                            obj[this.thisRoom.playersInGame[i].username].roleTag = 'Bad Lancelot';
                        }
                        // add the spy
                        array.push(this.thisRoom.playersInGame[i].username);
                    }
                }
            }

            obj.spies = array;
            return obj;
        }
    }

    checkSpecialMove() {

    }
}


module.exports = Mark;
