import React, {useState} from 'react'; 
import dataSlider from './DataSlider';
import "./Slider.css"; 

import BtnSlider from './BtnSlider';


export default function Slider(){

    //fonction useState renvoie un tableau avec 2 éléments (1: slide Anim / 2: setSlideAnim qui met à jour les propriétés de slideAnim  )
        const [slideAnim,setSlideAnim ] = useState({
            // useState (objet qui contient deux propriétés )
            index: 1, 
            inProgress: false 
        })

        // créations des fonctions appelées dans les propriétés des boutons (en bas)
        const nextSlide = () => {
            //console.log("NEXT");
            if(slideAnim.index !== dataSlider.length){// si (1 (voir index qui =1) est strictement différent de 5 (voir longueur tableau de dataslider))
                setSlideAnim({index: slideAnim.index +1, inProgress : true})// alors on augmente juste l'index 
            }
            // si j'arrive à la fin du tableau, alors, je remets l'index au début donc à 1 
            else if (slideAnim.index === dataSlider.length){
                setSlideAnim({index: 1, inProgress : true})
            }
        }  

        const prevSlide = () =>{
            //console.log("PREVIOUS");
            if(slideAnim.index !== 1){
                setSlideAnim({index: slideAnim.index -1, inProgress : true})
            }
        
            else if (slideAnim.index === 1){
                setSlideAnim({index: 5, inProgress : true})
            }
        }

        // Création de la fonction moveDot 
        const moveDot = index => {
            // l'index est reçu depuis le onclick 
            setSlideAnim({index: index, inProgress : true})
        }


        return (
            <div className="container-slider">
            {/* récupération des images contenues dans le fichier dataSlider */ }
                {/* expression JSX: */ }
                {/* utilisation de la méthode map () qui retourne un nouveau tableau */ }
                {/* obj => valeur courante */ }
            {dataSlider.map((obj,index )=>{
                {/* on retourne une fonction fléchée: */ }
                return(
                    <div
                    /* on envoie un id unique pour chaque image !!!!*/ 
                    key={obj.id}
                    /* On envoie qu'une seule image à chaque fois avec className */
                        /* 1) slideAnim.index vaut 1 (voire tableau au dessus) */
                        /* 2) Est ce que SlideAnim.index est égal à 1? (index(0) + 1) */
                            /* ==> SI TRUE : on envoie les classes slide ET active-anim (CSS)*/
                            /* ==> SI FALSE : on envoie les classes slide ET active-anim (CSS)*/
                    className={slideAnim.index === index +1? "slide active-anim " : "slide"}
                    > 
                        <img src={process.env.PUBLIC_URL +`/Imgs/img${index +1}.jpg`} alt=""/>
                    </div>
                ); 
            })}
            {/*On envoie des props dans nos boutons et on leur envoie des fonctions */}
            <BtnSlider moveSlide={nextSlide}  direction={"next"}/> 
            <BtnSlider moveSlide={prevSlide}  direction={"previous"}/> 

            {/*Création des petits points slide */}
            <div className="container-dots">
                {/*ClassName avec rendu conditionnel: 
                <div className={slideAnim.index === 1? "dot active" : "dot"}> </div>
                <div className={slideAnim.index === 2? "dot active" : "dot"}> </div>
                <div className={slideAnim.index === 3? "dot active" : "dot"}> </div>
                <div className={slideAnim.index === 4? "dot active" : "dot"}> </div>
                <div className={slideAnim.index === 5? "dot active" : "dot"}> </div>
                */}
                {Array.from({length :5}).map((item,index)=>{
                    return  <div 
                    className={slideAnim.index === index +1 ? "dot active" : "dot"}
                    // pour passer des arguments on doit utiliser une fonction anonyme 
                    onClick={()=> moveDot(index +1)}
                    >
                     </div>
                })}
            </div>

        </div>
    );
    }