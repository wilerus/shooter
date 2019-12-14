import { Shooter } from './units/Shooter.js';
import { Target } from './units/Target.js';

window.facade = {};

const queryElements = () => {
    facade.shooter = new Shooter('.shooter');
    facade.target = new Target('.target');

    if (facade.shooter && facade.target) {
        console.log( '%c%s', 'color: green; font: 1.2rem/1 Tahoma;', 'elements ready' );
    }
}

const startTrackingMouse = () => {
    document.addEventListener('mousemove', event => {
        facade.shooter.move(event.clientX, event.clientY);
    });
    document.addEventListener('pointerdown', () => {
        facade.shooter.shoot();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    queryElements();
    startTrackingMouse();
});