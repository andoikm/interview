import React, {useEffect, useState} from "react";
import {findClosest} from "./utils.js";
import {KEY_CODES} from "./constants.js";

const CustomColorInput = ({value:valueProps, setValue: setValueProps}) => {
    const [value, setValue] = useState(valueProps);

    const handleKeyDown = (e) => {
        if (e.keyCode === KEY_CODES.ENTER) {
            const newVal = findClosest(+e.currentTarget.value);
            setValueProps(newVal);
            setValue(newVal);
        }
    };

    useEffect(() => {
        setValue(valueProps);
    }, [valueProps]);


    return (
        <div className="custom-color-input-wrapper">
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default CustomColorInput;