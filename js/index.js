
document.addEventListener("DOMContentLoaded", function(){
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click",function(){
    menu.classList.toggle("open");
    if(menu.classList.contains("open")){
      menuButton.style.left = menu.offsetWidth+10+"px";
      menuButton.innerHTML = '&times;';
    }
    else{
      menuButton.style.left = 20+"px";
      menuButton.innerHTML = '&equiv;';
    }
  });
  /* зміна положення меню та button.innerHTML при виборі пункту     меню */
  var menu = document.querySelector(".menu");
  menu.addEventListener("click",function(event){
    if(event.target.hasAttribute("href")){
      menuButton.style.left=20+"px";
      menuButton.innerHTML='&equiv;';
      menu.classList.remove("open");
    }
  });

  /* слайдер start*/

  /* індекс активного фото по замовчуванню*/
  var indexVisibleFoto = 2;
  var img = document.querySelector(".slayder img");
  var listSrcFoto =         ["https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
                   "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?h=350&auto=compress&cs=tinysrgb",
                   "https://images.pexels.com/photos/93052/pexels-photo-93052.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/83427/pexels-photo-83427.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/295168/pexels-photo-295168.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/141978/pexels-photo-141978.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/69457/aso-komezuka-sea-of-clouds-cloud-69457.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/158033/landscape-tree-nature-log-158033.jpeg?h=350&auto=compress&cs=tinysrgb"];
  var listAlt = ["Foto 1","Foto 2","Foto 3","Foto 4","Foto 5","Foto 6","Foto 7","Foto 8","Foto 9","Foto 10"];
  /*створення події для controlsRight*/
  var controlsRight = document.querySelector(".controls-right");
  controlsRight.addEventListener("click",function(){
    indexVisibleFoto = ++indexVisibleFoto;
      if(indexVisibleFoto < listSrcFoto.length){
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        controlsBottom.children[indexVisibleFoto -   1].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
      else{
        indexVisibleFoto = 0;
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        controlsBottom.children[listSrcFoto.length - 1].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
    });

    /*створення події для controlsLeft*/
    var controlsLeft = document.querySelector(".controls-left");
    controlsLeft.addEventListener("click",function(){
      indexVisibleFoto=--indexVisibleFoto;
      if(indexVisibleFoto >= 0){
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        controlsBottom.children[indexVisibleFoto + 1].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
      else{
        indexVisibleFoto = listSrcFoto.length - 1;
        img.src = listSrcFoto[indexVisibleFoto];
        img.alt = listAlt[indexVisibleFoto];
        controlsBottom.children[0].classList.remove("active");
        controlsBottom.children[indexVisibleFoto].classList.add("active");
      }
    });
    /* створення події при завантаженні для ul>li слайдер*/
    var controlsBottom = document.querySelector(".controls-bottom");
    /*завантаження активного фото по замовчуванню*/
    img.src = listSrcFoto[indexVisibleFoto];
    img.alt = listAlt[indexVisibleFoto];
    /* створення елементу*/
    var elementLi = document.createElement("li");
    for(var i = 0; i < listSrcFoto.length; i++){
      controlsBottom.appendChild(elementLi.cloneNode(true));
      if(i == indexVisibleFoto){
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
      });
    }
});

/* слайдер end */