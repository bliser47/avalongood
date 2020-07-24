
class Puck {
    constructor(thisRoom) {
        this.thisRoom = thisRoom;

        this.role = 'Puck';
        this.alliance = 'Chaotic';

        this.description = 'A chaotic member of Avalon who only wins if the 5th mission succeeds. Nobody knows him';
    }

    see() {
        return undefined;
    }

    checkSpecialMove() {

    }
}


module.exports = Puck;
