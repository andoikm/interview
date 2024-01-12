import {COLOR_STEP, INIT_STATE} from "./constants.js";

export const getNext = val => {
    const newVal = val - COLOR_STEP;
    return newVal < 0 ? 0 : newVal;
};

export const getPrevious = val => {
    const newVal = val + COLOR_STEP;
    return newVal > INIT_STATE ? INIT_STATE : newVal;
};

export const findClosest = val => {
    const prev = val - Math.floor(val % COLOR_STEP);
    const next = prev + COLOR_STEP;
    let newVal = val - prev > next - val
        ? next
        : prev;

    if (newVal > INIT_STATE) {
        newVal = INIT_STATE;
    }
    if (newVal < 0) {
        newVal = 0;
    }
    return newVal;
};