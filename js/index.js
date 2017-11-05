
document.addEventListener("DOMContentLoaded", function() {
  let menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click",function() {
    menu.classList.toggle("open");
    if(menu.classList.contains("open")){
      menuButton.classList.add("menu-button__open");
      menuButton.innerHTML = "&times;";
    }
    else{
      menuButton.classList.remove("menu-button__open");
      menuButton.innerHTML = "&equiv;";
    }
  });
  /* зміна положення меню та button.innerHTML при виборі пункту     меню */
  let menu = document.querySelector(".menu");
  menu.addEventListener("click",function(event){
    if(event.target.hasAttribute("href")){
      menuButton.classList.remove("menu-button__open");
      menuButton.innerHTML="&equiv;";
      menu.classList.remove("open");
    }
  });

  /* слайдер start*/

  /* індекс активного фото по замовчуванню*/
  let indexVisibleFoto = 0;
  let img = document.querySelector(".slayder img");
  img.addEventListener("animationend",function(){
	    img.classList.remove("fade");
  });
  
  let listSrcFoto =[
      "img/flowers.jpg",
      "img/butterflies.jpg",
      "img/field.jpg",
      "img/bird.jpg",
      "img/leaf.jpg",
      "img/mountains.jpg",
      "img/river.jpg",
      "img/green-meadow.jpg",
      "img/green-mountains.jpg",
      "img/single-tree.jpg"];
  let listAlt = [
      "Flowers background butterflies beautiful",
      "Butterflies background flowers beautiful",
      "Field with flowers","Bird on a Branch",
      "Leaf with drops of dew",
      "Green Mountain on a sunny day",
      "River in the forest",
      "Green meadow with a stream",
      "Green Mountain on a sunny day",
      "A single tree on a hill"];
  /*створення події для controlsRight*/
  let controlsRight = document.querySelector(".controls-right");
  controlsRight.addEventListener("click",function(){
      ++indexVisibleFoto;
      if(indexVisibleFoto < listSrcFoto.length){
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        img.classList.add("fade");
        controlsBottom.children[indexVisibleFoto - 1].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
      else{
        indexVisibleFoto = 0;
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        img.classList.add("fade");
        controlsBottom.children[listSrcFoto.length - 1].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
    });

    /*створення події для controlsLeft*/
    let controlsLeft = document.querySelector(".controls-left");
    controlsLeft.addEventListener("click",function(){
      --indexVisibleFoto;
      if(indexVisibleFoto >= 0){
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        img.classList.add("fade");
        controlsBottom.children[indexVisibleFoto + 1].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
      else{
        indexVisibleFoto = listSrcFoto.length - 1;
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        img.classList.add("fade");
        controlsBottom.children[0].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
    });
    /* створення події при завантаженні для ul>li слайдер*/
    let controlsBottom = document.querySelector(".controls-bottom");
    /*завантаження активного фото по замовчуванню*/
    img.src = listSrcFoto[indexVisibleFoto];
    img.alt = listAlt[indexVisibleFoto];
    /* створення елементу*/
    let elementLi = document.createElement("li");
    for (let i = 0; i < listSrcFoto.length; i++){
      controlsBottom.appendChild(elementLi.cloneNode(true));
      if(i === indexVisibleFoto){
        controlsBottom.children[i].classList.add("active");
      }
      /* присвоєння індексу*/
      controlsBottom.children[i].setAttribute("data-index",i);
      /* присвоєння події */
      controlsBottom.children[i].addEventListener("click",function(){
        controlsBottom.children[indexVisibleFoto].classList.remove("active");
        controlsBottom.children[this.getAttribute("data-index")].classList.add("active");
        indexVisibleFoto = this.getAttribute("data-index");
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        img.classList.add("fade");
      });
    }
	/* слайдер end */
});

