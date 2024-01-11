import {COLOR_STEP, SLIDER_INIT_STATE} from "./constants.js";

export const getShiftRight = val => {
    const newVal = val - COLOR_STEP;
    return newVal < 0 ? 0 : newVal;
};

export const getShiftLeft = val => {
    const newVal = val + COLOR_STEP;
    return newVal > SLIDER_INIT_STATE ? SLIDER_INIT_STATE : newVal;
};

export const findClosest = val => {
    const left = val - Math.floor(val % COLOR_STEP);
    const right = left + COLOR_STEP;
    let newVal = val - left > right - val
        ? right
        : left;

    if (newVal > SLIDER_INIT_STATE) {
        newVal = SLIDER_INIT_STATE;
    }
    if (newVal < 0) {
        newVal = 0;
    }
    return newVal;
};