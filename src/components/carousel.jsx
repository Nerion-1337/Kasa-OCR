import React, { useState, useRef, useEffect, useCallback } from "react";
import { banner } from "./housing.jsx";
import arc from "../media/arc.svg";

export const Carousel = ({ user }) => {

  const totalImages = user[0].pictures.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  // isSliding permet de retourner si une action est faite sur le carousel pour stoper le défilement automatique
  const [isSliding, setIsSliding] = useState(false);
  const carouselRef = useRef(null);

  const scrollToIndex = useCallback(
    (index) => {
      if (carouselRef.current) {
        //carouselRef.current.scrollWidth récupère la longueur total du carousel
        const itemWidth = carouselRef.current.scrollWidth / totalImages;
        const currentPosition = index * itemWidth;
        carouselRef.current.scrollTo({
          left: currentPosition,
          behavior: "smooth",
        });
        setCurrentIndex(index);
        setIsSliding(false);
      }
    },
    [carouselRef, totalImages]
  );

  const handleLeftClick = () => {
    const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    let intervalId;
    if (!isSliding) {
      intervalId = setInterval(() => {
        const newIndex =
          currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
        scrollToIndex(newIndex);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isSliding, currentIndex, totalImages, scrollToIndex]);

  useEffect(() => {
    const handleResize = () => {
      scrollToIndex(currentIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsSliding(true);

    // startX permet de stocker la position de départ horizontal du click
    const startX = event.pageX || event.touches[0].pageX;

    //scroLeft stock la position actuelle du carousel
    let scrollLeft = carouselRef.current.scrollLeft;
    let currentX;

    //fonction qui met à jour la position de fin du click
    const handleMouseMove = (event) => {
      event.preventDefault();
      const x = event.pageX || event.touches[0].pageX;

      //calcule la distance parcourur par la sourie entre début/fin click
      const walk = (x - startX) * 1;

      //permet le défilement du carousel
      carouselRef.current.scrollLeft = scrollLeft - walk;
      currentX = x;
    };

    //s'execute lorsque le click n'est plus actif
    const handleMouseUp = () => {
      const itemWidth = carouselRef.current.scrollWidth / totalImages;

      //calcule de l'index image la plus proche en divisant la position actuelle de défilement (scrollLeft) par la largeur de chaque item, puis en arrondissant le résultat à l'entier le plus proche
      const newIndex =
        Math.round(carouselRef.current.scrollLeft / itemWidth) || currentIndex;
      //const newPosition = newIndex * itemWidth;

         //si glissement vers la gauche + pas dernière image transition
      if (currentX < startX && newIndex !== totalImages - 1) {
        scrollToIndex(newIndex + 1);
        //si glissement vers la gauche + dernière image transition vers 1er
      } else if (currentX < startX && newIndex === totalImages - 1) {
        scrollToIndex(0);
        //si glissement vers la droite + pas première image transition
      } else if (currentX > startX && newIndex !== 0) {
        scrollToIndex(newIndex - 1);
        //si glissement vers la droite + première image transition vers last
      } else if (currentX > startX && newIndex === 0) {
        scrollToIndex(totalImages - 1);
        //si mouvement sourie insuffisant 
      } else {
        carouselRef.current.scrollTo({
          //left: newPosition,
          behavior: "smooth",
        });
      }
      //remet à zero l'écouteur d'évènement
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const slideShow = currentIndex !== undefined && `${currentIndex + 1}`;

  if (totalImages > 1) {
    return (
      <section className="bannerHousing">
        <button className="btn btn_Left" onClick={handleLeftClick}>
          <img src={arc} alt="un icon en forme de pointe de flèche" />
        </button>

        <div
          className="allBanner"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {user.map((data) =>
            data.pictures.map((datas, index) => banner(datas, index))
          )}
        </div>

        <div className="slideShow">
          {slideShow}/{totalImages}
        </div>

        <button className="btn btn_Right" onClick={handleRightClick}>
          <img src={arc} alt="un icon en forme de pointe de flèche" />
        </button>
      </section>
    );
  } else {
    return (
      <section className="bannerHousing">
        <div className="allBanner">
          {user.map((data) =>
            data.pictures.map((datas, index) => banner(datas, index))
          )}
        </div>
      </section>
    );
  }
};
