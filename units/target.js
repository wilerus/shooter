import { UniteBase } from './UniteBase.js';
import { PROJECTILE_TYPES } from '../constants.js';

const Target = class extends UniteBase {
    moveSize = 5
    direction = 1
    xPosition = 0
    id = 'target'

    constructor(selector) {
        super();
        this.el = document.querySelector(selector);
        this.startMoving();
    }

    startMoving() {
        this.moveInterval = setInterval(() => {
            this.direction = parseInt(Math.random() * 10) % 2 === 0 ? this.direction * 1 : this.direction * -1;
            this.shoot(PROJECTILE_TYPES.ENEMY);
        }, 800);

        this.shootInterval = setInterval(() => {
            if (this.checkOutOfBoundsExceed(1)) {
                this.xPosition = this.xPosition + this.moveSize * this.direction;
                this.el.style.transform = `translate(${this.xPosition}px, 0)`;
            } else {
                this.direction *= -1;
            }
        }, 1);

        this.actionsIntervals.push(this.moveInterval, this.shootInterval);
    }

    checkOutOfBoundsExceed() {
        if (this.direction === 1) {
            return this.moveSize + this.el.getBoundingClientRect().width + this.xPosition < window.innerWidth;
        }
        return this.el.getBoundingClientRect().width + this.xPosition - this.moveSize > 0;
    }
}

export { Target };