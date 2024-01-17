import React, {useEffect, useRef} from "react";

const ColorPaletteButton = ({color, isSelected, onSelect}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isSelected) {
            ref.current.scrollIntoView();
        }
    }, [isSelected]);

    return (
        <button
            ref={ref}
            onClick={() => onSelect(color)}
            className={`color-palette-button ${isSelected ? "selected" : ""}`}
            style={{backgroundColor: `rgb(${color},${color} ,${color})`}}
        />
    );
};

export default ColorPaletteButton;
