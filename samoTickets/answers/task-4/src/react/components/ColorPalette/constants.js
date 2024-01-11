export const SLIDER_INIT_STATE = 255;

export const COLOR_STEP = 5;

const generatedColors = [];
for (let i = SLIDER_INIT_STATE; i >= 0; i = i - COLOR_STEP) {
    generatedColors.push(i);
}

export const COLORS = generatedColors;

export const KEY_CODES = {
    ENTER: 13,
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37
};


