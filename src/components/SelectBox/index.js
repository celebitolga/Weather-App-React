import { useRef, memo } from "react";

import { useTheme } from "../../context/ThemeContext";

import { uid } from '../../uid';

import ArrowDown from "../svg/ArrowDown";

import "./index.scss";

function SelectBox({ selected, setSelected, options, wFull, placeHolder }) {
  const { theme } = useTheme();

  let optionsElement = useRef();
  let selectBoxOverlay = useRef();
  let selectedButton = useRef();

  const handleSelectedBoxClick = () => {
    selectBoxOverlay.current.classList.toggle("-visible");
    optionsElement.current.classList.toggle("-active");
    selectedButton.current.classList.toggle("-active");
  };

  const handleOptionClick = (option) => {
    if (option.value !== "") {
      selectBoxOverlay.current.classList.toggle("-visible");
      optionsElement.current.classList.toggle("-active");
      selectedButton.current.classList.toggle("-active");
      setSelected(option);
    }
  };

  return (
    <>
      <div className={`select-box ${wFull ? "-w-full" : ""}`}>
        <button
          className={`select-box__selected -${theme}`}
          onClick={handleSelectedBoxClick}
          ref={selectedButton}
        >
          <div className="select-box__selected-label">
            {selected.label ? selected.label : placeHolder ? placeHolder : 'Please Select' }
          </div>
          <div className="select-box__selected-icon">
            <ArrowDown />
          </div>
        </button>
        <div className="select-box__options-holder" ref={optionsElement}>
          <ul className="select-box__options-items">
            {options.map((option) => (
              <li
                className={`select-box__options-option
                 ${option.label === selected.label ? "-selected" : ""}
                 ${option.value === "" ? "-empty" : ""}`}
                key={uid()}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="select-box__overlay"
        ref={selectBoxOverlay}
        onClick={handleSelectedBoxClick}
      ></div>
    </>
  );
}

export default memo(SelectBox);
