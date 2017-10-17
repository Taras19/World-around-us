
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
  var indexVisibleFoto = 0;
  var img = document.querySelector(".slayder img");
  
  var listSrcFoto =["img/foto1.jpg",
	"img/foto2.jpg",
	"img/foto3.jpg",
	"img/foto4.jpg",
	"img/foto5.jpg",
	"img/foto6.jpg",
	"img/foto7.jpg",
	"img/foto8.jpg",
	"img/foto9.jpg",
	"img/foto10.jpg"]
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