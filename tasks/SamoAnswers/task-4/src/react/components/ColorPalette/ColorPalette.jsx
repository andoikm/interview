import React, {useCallback, useEffect, useState} from "react";
import ColorPaletteButton from "./ColorPaletteButton.jsx";
import {getPrevious, getNext} from "./utils.js";
import {COLORS, KEY_CODES, INIT_STATE} from "./constants.js";
import ColorPaletteCustomInput from "./ColorPaletteCustomInput.jsx";

const ColorPalette = () => {
    const [selected, setSelected] = useState(INIT_STATE);

    const handleSelection = (val) => setSelected(val);

    const handleKeyDown = useCallback((e) => {
        if (e.keyCode === KEY_CODES.ARROW_RIGHT) {
            e.preventDefault();
            setSelected(getNext);
        } else if (e.keyCode === KEY_CODES.ARROW_LEFT) {
            e.preventDefault();
            setSelected(getPrevious);
        }
    }, [setSelected]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <div className="color-palette-container-fluid">
            <div className="color-palette-container">
                <div className="color-palette-wrapper">
                    {COLORS.map(i => (
                        <ColorPaletteButton
                            key={i}
                            color={i}
                            isSelected={selected === i}
                            onSelect={handleSelection}
                        />
                    ))}
                </div>
            </div>
            <ColorPaletteCustomInput
                value={selected}
                setValue={setSelected}
            />
        </div>
    );
};

export default ColorPalette;
