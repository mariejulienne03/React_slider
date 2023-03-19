import React from "react"; 
import leftArrow from "./icones/left-arrow.svg"; 
import rightArrow from "./icones/right-arrow.svg"; 
import "./Slider.css";

                                    // destructuring de props: (utilisé dans le button)
export default function BtnSlider({direction, moveSlide}){
    // props => permet de récupérer les nouvelles données envoyées au Btn dans le fichier "Slider" (function BtnSlider(props))
   // console.log(props); 
    return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction ==="next" ? rightArrow : leftArrow} alt="icone flèche" />
        </button>
    ); 
}