import { EventEmitter } from '../services/EventEmiter';
import { UniteTypes } from './types';
import { uuidv4 } from '../utils';

const UniteBase = class {
    xPosition = 0
    yPosition = 0
    actionsIntervals: NodeJS.Timeout[] = []
    id = uuidv4()
    el: HTMLElement
    eventEmitter: any
    isActive = true
    width = 0
    height = 0
    uniteType = UniteTypes.None
    health = 100

    constructor() {
      this.eventEmitter = new EventEmitter();
    }

    getShootPoint() {
      const leftCenter = this.xPosition + this.width / 2;

      return { x: leftCenter, y: this.yPosition };
    }

    kill() {
      this.el.remove();
      this.actionsIntervals.forEach(int => clearInterval(int));
      delete this.eventEmitter;
      delete this.el;
    }

    checkOutOfBoundsExceed(xPosition: number = this.xPosition, yPosition: number = this.yPosition) { //todo unify
      const isYPositionExceed = yPosition + this.height <= 0 || yPosition > window.innerHeight;
      const isXPositionExceed = xPosition + this.width >= window.innerWidth || xPosition <= 0;

      return isYPositionExceed || isXPositionExceed;
    }
};

export { UniteBase };
