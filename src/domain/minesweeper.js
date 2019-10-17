import {field} from "./models/field.js";

export class Minesweeper {
    /**
     * @param {[]} array
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(rows, columns, bombs = null) {
        this.rows = rows;
        this.columns = columns;

        this.isGameOver = false;

        if (bombs == null)
            this.bombs = this._calculateDefaultBombs();
        else
            this.bombs = bombs;   


        this.array = [];
        for (let a = 0; a < rows; a++) {
            let row = [];
            for (let b = 0; b < columns; b++) {
                row.push(field.hidden);
            }
            this.array.push(row);
        }


        this.bombField = [];
        for (let a = 0; a < rows; a++) {
            let row = [];
            for (let b = 0; b < columns; b++) {
                row.push(false);
            }
            this.bombField.push(row);
        }
    }

    /**
     * TODO: IMPLEMENT THIS
     * Calculate how many bombs should be on the field and return it.
     * The calculation should Depend on the size of the field.
     * @private
     * @return {number} amount of bombs
     */ 
    _calculateDefaultBombs(defaultBombs) {
        defaultBombs = (row * column) / 10;
        return defaultBombs;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns the current state of the field.
     * Fields can be: hidden, visible, flagged or question marked.
     * @param {number} x
     * @param {number} y
     * @return {field}
     */
    getField(x, y) {
        
    return this.array[x][y];
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns how many bombs are around the field
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    getAmountOfSurroundingBombs(x, y) {
        return 0;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns true there is a bomb on the position
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isBombOnPosition(x, y) {
        for (let a = 0; a < rows; a++) {
            for (let b = 0; b < columns; b++) {
                
            }
        }
    }

    /**
     * TODO: IMPLEMENT THIS
     * Reveals the field and all empty connected fields around it.
     * Or stops the game if clicked on a position, where a bomb is located.
     * @param {number} x
     * @param {number} y
     */
    reveal(x, y) {
        if(this.array[y][x] == field.hidden)
            this.array[y][x] = field.visible;

        if (this.array[y][x] == field.flag)
            this.array[y][x] = field.flag;

        else if (this.array[y][x] == field.question_mark)
            this.array[y][x] = field.question_mark;

        if (this.bombField[y][x] == this.array[y][x])
            this.didLoose = true;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Toggles the field state, if it has not been revealed yet.
     * @param {number} x
     * @param {number} y
     */
    toggleFieldState(x, y) {
        if (this.array[y][x] == field.hidden)
            this.array[y][x] = field.flag;

        else if(this.array[y][x] == field.flag) 
            this.array[y][x] = field.question_mark;

        else if (this.array[y][x] == field.question_mark)
            this.array[y][x] = field.hidden;

        else
            this.array[y][x] = field.visible;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user already won
     * @returns {boolean}
     */
    didWin() {
        return false;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user clicked a bomb and therefore lost.
     * @returns {boolean}
     */
    didLoose(y, x) {
        
        document.write("you lost");
        return false;
        
    }

    /**
     * Returns the remaining amount bombs, user has to select
     * @return {number}
     */
    getRemainingBombCount(bombRemaining) {
        bombRemaining = 10;
        
        //if (this.array[y][x] = )
        
        return bombRemaining;
        
    }

    /**
    * Creates bombs
    */
    createBomb(bombRow, bombColumn) {
        for (let a = 0; a < 10; a++) {
            bombRow = Math.floor((Math.random() * 10));
            bombColumn = Math.floor((Math.random() * 10));
            bombFields[bombColumn][bombRow] = true;
        }

    }

}

/*class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
*/
