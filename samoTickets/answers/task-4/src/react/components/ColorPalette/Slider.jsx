import React, {useCallback, useEffect, useState} from 'react';
import SliderItem from "./SliderItem.jsx";
import {getShiftLeft, getShiftRight} from "./utils.js";
import {COLORS, KEY_CODES, SLIDER_INIT_STATE} from "./constants.js";
import CustomColorInput from "./CustomColorInput.jsx";
import "./Slider.css";


const Slider = () => {
    const [selected, setSelected] = useState(SLIDER_INIT_STATE);

    const handleSelection = useCallback((val) => {
        setSelected(val);
    }, [setSelected]);

    const handleSliderKeyDown = useCallback((e) => {
        if (e.keyCode === KEY_CODES.ARROW_RIGHT) {
            e.preventDefault();
            // 39 right
            setSelected(getShiftRight);
        } else if (e.keyCode === KEY_CODES.ARROW_LEFT) {
            e.preventDefault();
            // 37 left
            setSelected(getShiftLeft);
        }
    }, [setSelected]);

    useEffect(() => {
        document.addEventListener("keydown", handleSliderKeyDown);
        return () => {
            document.removeEventListener("keydown", handleSliderKeyDown);
        };
    }, [handleSliderKeyDown]);

    return (
        <div className="container">
            <div className="slider-container">
                {COLORS.map(i => (
                    <SliderItem
                        key={i}
                        color={i}
                        isSelected={selected === i}
                        onSelect={handleSelection}
                    />
                ))}
            </div>
            <CustomColorInput
                value={selected}
                setValue={setSelected}
            />
        </div>
    );
};

export default Slider;
