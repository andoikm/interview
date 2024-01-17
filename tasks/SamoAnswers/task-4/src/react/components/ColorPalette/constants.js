export const INIT_STATE = 255;

export const COLOR_STEP = 5;

export const COLORS = new Array(1 + INIT_STATE/COLOR_STEP)
    .fill(INIT_STATE)
    .map((item,  i) => INIT_STATE - COLOR_STEP*i);

export const KEY_CODES = {
    ENTER: 13,
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37
};


