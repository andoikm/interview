import React, {useEffect, useRef, memo} from 'react';
import './SliderItem.css';

const SliderItem = ({color, isSelected, onSelect}) => {
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
            className={`slider-item ${isSelected ? "selected" : ""}`}
            style={{backgroundColor: `rgb(${color},${color} ,${color})`}}
        />
    );
};

export default memo(SliderItem);
