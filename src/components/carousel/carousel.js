
export const Carousel = ['carousel']

  
// var c_carousel = c_carousel || {};

// c_carousel.main = {

//   carousel_inner: document.getElementsByClassName('c-carousel__inner'),
//   carousel_item: document.getElementsByClassName('c-carousel__item'),
//   carousel_item_width: 0,
//   carousel: [],
//   linkedButtons: [],
//   itemsInView: 0,
//   itemsMoved: 0,
//   autoPlayDelay: 2000,
//   autoPlayInterval: 2000,
//   mobileItemsInView: 1,
//   tabletItemsInView: 3,
//   computerItemsInView: 4,
//   windowWidth: window.innerWidth,
//   init: function () {
//     this.initCarousels();
//     this.initPills();
//     this.initAutoPlay();
//     this.initiateTouchEvents();
//     this.sizeCheck();

//     window.addEventListener('resize', function () {
//       var newWindowWidth = window.innerWidth;
//       if (newWindowWidth != c_carousel.main.windowWidth) {
//         c_carousel.main.sizeCheck();
//       }
//     });
//   },

//   initCarousels: function (i, itemsInView) {
//     this.carousel = [];

//     for (var i = 0; i < this.carousel_inner.length; i++) {

//       //force inline pixel
//       this.carousel_inner[i].style.left = "0px";

//       var innerItems = this.carousel_inner[i].getElementsByClassName('c-carousel__item'),
//         maxWidth = ((innerItems.length - c_carousel.main.itemsInView) * innerItems[0].clientWidth);


//       // Check for pills
//       // Get c-carousel instance
//       var getCarousel = this.carousel_inner[i].parentNode.parentNode.classList.contains("c-carousel"),
//         // set selection || false
//         carouselParent = getCarousel ? this.carousel_inner[i].parentNode.parentNode : false,
//         // check for pills container within instance
//         hasPills = carouselParent.querySelector(".c-carousel__pills");
//       // Check for autoplay data attribute
//       var isAutoPlay = carouselParent.hasAttribute("data-autoplay"),
//         autoPlayDelay,
//         autoPlayInterval,
//         autoPlay = [];

//       if (carouselParent.hasAttribute("data-autoplayDelay")) {
//         autoPlayDelay = carouselParent.dataset.autoplaydelay;
//       } else {
//         autoPlayDelay = this.autoPlayDelay;
//       }
//       if (carouselParent.hasAttribute("data-autoplayInterval")) {
//         autoPlayInterval = carouselParent.dataset.autoplayinterval;
//       } else {
//         autoPlayInterval = this.autoPlayInterval;
//       }
//       autoPlay.push(isAutoPlay, autoPlayDelay, autoPlayInterval);

//       // check for itemsInView
//       var hasItemsInView = carouselParent.hasAttribute("data-itemsInView"),
//         getItemsInView,
//         mobileItemsInView,
//         tabletItemsInView,
//         computerItemsInView,
//         itemsInView = [];

//       if (hasItemsInView) {
//         getItemsInView = carouselParent.dataset.itemsinview;
//         mobileItemsInView = parseInt(getItemsInView.charAt(0));
//         tabletItemsInView = parseInt(getItemsInView.charAt(1));
//         computerItemsInView = parseInt(getItemsInView.charAt(2));
//       } else {
//         mobileItemsInView = this.mobileItemsInView;
//         tabletItemsInView = this.tabletItemsInView;
//         computerItemsInView = this.computerItemsInView;
//       }
//       // hasItemsInView = boolean val | mobile | tablet | desktop | current value to re-assign
//       itemsInView.push(hasItemsInView, mobileItemsInView, tabletItemsInView, computerItemsInView, this.itemsInView);

//       //[carousel, length of items, itemsMoved, carousel_item_width, maxWidth, hasPills, autoPlay, itemsInView, linkedButtons]
//       this.carousel.push([this.carousel_inner[i], innerItems.length, 0, innerItems[0].clientWidth, maxWidth, hasPills, autoPlay, itemsInView, this.linkedButtons]);

//     }

//   },

//   resizeProcess: function (i, itemsInView) {
//     var itemsMoved = 0,
//       itemsInView = itemsInView; // get from param passed through
//     carouselItem = this.carousel_inner[i].getElementsByClassName('c-carousel__item'),
//       carouselItemWidth = carouselItem[0].clientWidth,
//       maxWidth = ((this.carousel[i][1] - itemsInView) * carouselItemWidth);

//     this.carousel[i][2] = itemsMoved;
//     this.carousel[i][3] = carouselItemWidth;
//     this.carousel[i][4] = maxWidth;
//     this.carousel[i][7][4] = itemsInView;
//   },

//   initAutoPlay: function () {
//     for (var i = 0; i < this.carousel_inner.length; i++) {
//       var currentCar = this.carousel[i];
//       // if isAutoPlay is true...
//       if (this.carousel[i][6][0] == true) {
//         var delay = parseInt(currentCar[6][1]),
//           interval = parseInt(currentCar[6][2]);
//         this.autoPlay([i, delay, interval]);
//       }
//     }
//   },

//   autoPlay: function (carousel) {
//     var carousel = carousel;
//     if (this.carousel[carousel[0]][6][0] == true) {
//       var _carousel = carousel;
//       var interval,
//         timeout;
//       function setTheInterval(_carousel) {
//         var __carousel = _carousel;
//         interval = setInterval(function () {
//           c_carousel.main.next(__carousel[0]);
//         }, _carousel[2]);

//         // send interval to autoPlay array
//         c_carousel.main.carousel[__carousel[0]][6].push(interval);
//         console.log(c_carousel.main.carousel[carousel[0]][6]);

//       }

//       setTimeout(function (_carousel) {
//         setTheInterval(carousel);
//       }, _carousel[1]);


//     } else {
//       var selection = c_carousel.main.carousel[carousel[0]];
//       console.log(interval);
//       interval = clearInterval(selection[6][3]);
//     }
//   },


//   killCarousel: function (i) {
//     var carousel = c_carousel.main.carousel[i];
//     carousel[6][0] = false;
//     this.autoPlay([i, carousel[6][1], carousel[6][2]]);
//   },

//   initPills: function () {

//     for (var i = 0; i < this.carousel_inner.length; i++) {
//       // if pills exist...
//       if (this.carousel[i][5] != null) {
//         // loop through length of items
//         for (var j = 0; j < this.carousel[i][1]; j++) {
//           // create pill div
//           var pill = document.createElement('div');
//           // set class
//           pill.setAttribute("class", "c-carousel__pill");
//           // get pills container - c-carousel__pillContainer
//           var selection = this.carousel[i][5].children[0];
//           // Append child to pills container
//           selection.appendChild(pill);
//         }
//         // Get first pill in each instance and add is-active class
//         var firstPill = this.carousel[i][5].querySelector('.c-carousel__pill');
//         firstPill.classList.add("is-active");
//       }
//     }
//     // Go through eacj carousel instance pills and attacj click event
//     this.pillsAttachClickEvent();
//   },

//   pillsAttachClickEvent: function () {
//     for (var i = 0; i < this.carousel_inner.length; i++) {
//       // if pills exist...
//       if (this.carousel[i][5] != null) {
//         var pill = this.carousel[i][5].querySelectorAll('.c-carousel__pill');
//         for (var j = 0; j < this.carousel[i][1]; j++) {
//           var pillI = pill[j];
//           this.pillsClickEvent(pillI, i, j, "click", pill);
//         }
//       }
//     }
//   },

//   pillsClickEvent: function (btnInstance, i, j, eventName, obj) {
//     // Event Name
//     var eventName = eventName.toString();
//     // posX is width of item
//     var posX = this.carousel[i][3],
//       // get reference to instance of carousel array
//       carouselI = this.carousel[i];
//     // Value used to define left px value for items. calculated by multiplying index (j)
//     posX = -(posX * j);
//     btnInstance.addEventListener(eventName, function (e) {
//       e.preventDefault();
//       console.log(posX);
//       c_carousel.main.killCarousel(i); // create a function that tests for auto play and apply if data-autoplay is true
//       // Set left px value of carousel inner
//       carouselI[0].style.left = posX + "px";

//       if (obj.hasOwnProperty('buttons') == false) {
//         console.log("no buttons key");
//         this.pillSetActive(e, carouselI);
//       } else {
//         var activeButtonIndex = Array.from(obj.buttons).indexOf(event.target);
//         carouselI[2] = activeButtonIndex;
//         console.log(obj);
//         this.pillSetActive(e, carouselI, carouselI[2], obj);
//         console.log("Has buttons");
//       }
//     }.bind(this));
//   },

//   pillSetActive: function (e, obj, index, linkedButtons) {
//     // get current is-active pill
//     var activeDot = obj[5].querySelector('.c-carousel__pill.is-active');
//     // get all the dots
//     var allDots = obj[5].querySelectorAll('.c-carousel__pill');
//     // Gets index value of clicked target from allDots collection
//     if (index !== undefined) {
//       console.log("index passed" + index);
//       var activeDotIndex = obj[2];
//       activeDotIndex = index;
//       obj[2] = activeDotIndex;
//       // Remove is-active class from current active pill
//       activeDot.classList.remove("is-active");
//       // add is-active class to dot with index value passed in
//       allDots[activeDotIndex].classList.add("is-active");
//     } else {
//       var activeDotIndex = Array.from(allDots).indexOf(event.target);
//       obj[2] = activeDotIndex;
//       console.log(obj[2]);
//       // Remove is-active class from current active pill
//       activeDot.classList.remove("is-active");
//       // add is-active class
//       // if the e.target comes from a click on a pill then add class to new active pill
//       if (Array.from(allDots).indexOf(event.target) !== -1) {
//         e.target.classList.add("is-active");
//       }
//     }
//     // Set active linked button
//     if (obj[8].length > 0) {
//       c_carousel_linkedButtons.main.setButtonActive(obj);
//     }
//   },

//   snapAttack: function (e, i, d) {
//     console.log(e);
//     if (d === "left" && e < c_carousel.main.carousel[i][4]) {
//       var c_buffer = (c_carousel.main.carousel[i][3] / 2);
//     } else if (d === "right" && e < 0) {
//       var c_buffer = -(c_carousel.main.carousel[i][3] / 2);
//     } else {
//       var c_buffer = 1;
//     }
//     console.log(c_buffer);
//     // work out closest slide and return pixel value for it
//     var closestSlide = Math.round((~e + c_buffer) / (c_carousel.main.carousel[i][3] + 0.0)) * c_carousel.main.carousel[i][3];
//     c_carousel.main.carousel[i][2] = (Math.floor(closestSlide / c_carousel.main.carousel[i][3]));
//     if (closestSlide > c_carousel.main.carousel[i][4]) {
//       closestSlide = c_carousel.main.carousel[i][4];
//     }
//     // if pills exist...
//     if (this.carousel[i][5] != null) {
//       this.pillSetActive(e, this.carousel[i], this.carousel[i][2]);
//     }
//     // killCarousel(i); // create a function that tests for auto play and apply if data-autoplay is true
//     return -(closestSlide) + "px";
//   },

//   sizeCheck: function () {
//     // function to handle resize calculations for mobile (1), tablet (3) and desktop (4)

//     for (var i = 0; i < c_carousel.main.carousel_inner.length; i++) {

//       var itemsInViewArr = c_carousel.main.carousel[i][7],
//         itemsInViewDataAttr = itemsInViewArr[0],
//         mobileItemsInView = itemsInViewArr[1],
//         tabletItemsInView = itemsInViewArr[2],
//         computerItemsInView = itemsInViewArr[3],
//         itemsInView = itemsInViewArr[4];

//       if (window.innerWidth < 768) {
//         if (itemsInViewDataAttr == true) {
//           itemsInView = mobileItemsInView;
//         } else {
//           itemsInView = this.mobileItemsInView;
//         }
//         c_carousel.main.resizeProcess(i, itemsInView);
//       }

//       if (window.innerWidth >= 768 && window.innerWidth < 992) {
//         if (itemsInViewDataAttr == true) {
//           itemsInView = tabletItemsInView;
//         } else {
//           itemsInView = this.tabletItemsInView;
//         }
//         c_carousel.main.resizeProcess(i, itemsInView);
//       }

//       if (window.innerWidth > 992) {
//         if (itemsInViewDataAttr == true) {
//           itemsInView = computerItemsInView;
//         } else {
//           itemsInView = this.computerItemsInView;
//         }
//         c_carousel.main.resizeProcess(i, itemsInView);
//       }

//     }

//     for (var i = 0; i < c_carousel.main.carousel_inner.length; i++) {
//       var leftInt = parseInt(c_carousel.main.carousel_inner[i].style.left, 10);
//       c_carousel.main.carousel[i][0].style.left = c_carousel.main.snapAttack(leftInt, i);
//     }

//     // c_carousel.main.initCarousels();

//     c_carousel.main.pillsAttachClickEvent();

//   },

//   next: function (n) {
//     var currentX = parseInt(this.carousel[n][0].style.left, 10);
//     if (currentX <= -(this.carousel[n][4])) {
//       // var newPosX = -(this.carousel[n][4]);
//       var newPosX = 0;
//       var currentX = 0;
//       this.carousel[n][2] = 0;
//       // if pills exist...
//       if (this.carousel[n][5] != null) {
//         this.pillSetActive(this, this.carousel[n], this.carousel[n][2]);
//       }
//     } else {
//       this.carousel[n][2]++;
//       // if pills exist
//       if (this.carousel[n][5] != null) {
//         this.pillSetActive(this, this.carousel[n], this.carousel[n][2]);
//       }
//       var newPosX = -(this.carousel[n][3] * this.carousel[n][2]);
//     }

//     this.carousel[n][0].style.left = newPosX + "px";
//   },

//   prev: function (n) {
//     var currentX = parseInt(this.carousel[n][0].style.left, 10);

//     if (currentX >= 0) {
//       var newPosX = 0;
//     } else {
//       var newPosX = currentX + this.carousel[n][3];
//       this.carousel[n][2]--;
//     }

//     this.carousel[n][0].style.left = newPosX + "px";

//   },

//   initiateTouchEvents: function () {
//     for (var i = 0; i < this.carousel_inner.length; i++) {

//       (function (index) {
//         c_carousel.main.carousel[i][0].addEventListener('touchstart', function () {
//           c_carousel.main.touchBegin(event, index);
//         }, false);

//         c_carousel.main.carousel[i][0].addEventListener('touchmove', function () {
//           c_carousel.main.touchMove(event, index);
//         }, false);

//         c_carousel.main.carousel[i][0].addEventListener('touchend', function () {
//           c_carousel.main.touchEnd(event, index);
//         }, false);
//       })(i);

//     }
//   },

//   touchBegin: function (e, i) {

//     this.startX = e.changedTouches[0].pageX;
//     console.log(this.startX);
//     this.currentX = parseInt(c_carousel.main.carousel[i][0].style.left, 10);
//     // this.maxWidth = c_carousel.main.carousel[i][4];

//     c_carousel.main.carousel[i][0].style.transition = "left 0s";
//     // this.updatePills(i);
//     // c_carousel.main.killCarousel(i);
//   },

//   touchMove: function (e, i) {
//     var touchObj = e.changedTouches[0],
//       distX = touchObj.pageX - this.startX,
//       cActive = false;

//     if (e.touches.length == 1) {
//       curX = e.touches[0].pageX;
//       curY = e.touches[0].pageY;
//       if (Math.abs((curX - this.startX)) > 20) {
//         e.preventDefault();
//         cActive = true;
//         if ((this.startX - 20) < curX) {
//           this.touchDir = "right";
//         } else if ((this.startX + 20) > curX) {
//           this.touchDir = "left";
//         } else {
//           this.touchDir = "";
//         }
//       }
//     }

//     if (cActive) {
//       if (this.currentX + distX >= 0) {
//         c_carousel.main.carousel[i][0].style.left = 0 + "px";
//       } else if (this.currentX + distX <= -(c_carousel.main.carousel[i][4])) {
//         c_carousel.main.carousel[i][0].style.left = -(c_carousel.main.carousel[i][4]) + "px";
//       } else {
//         c_carousel.main.carousel[i][0].style.left = this.currentX + distX + "px";
//       }
//     }

//   },

//   touchEnd: function (e, i) {

//     this.currentX = parseInt(c_carousel.main.carousel[i][0].style.left, 10);

//     c_carousel.main.carousel[i][0].style.left = c_carousel.main.snapAttack(this.currentX, i, this.touchDir);

//     c_carousel.main.carousel[i][0].style.transition = "left 1s";

//     c_carousel.main.killCarousel(i);

//   },

//   createLinkedBtns: function (i) {
//     var instance = Object.create(this);
//     instance.carouselId = i;
//     instance.selectorIndex = i.toString();
//     instance.id = "c-carousel-linkedButtons-";
//     instance.selector = instance.id.concat(instance.selectorIndex);
//     instance.el = document.getElementById(instance.selector);
//     instance.buttons = instance.el.querySelectorAll(".o-btn");
//     this.carousel[i][8] = instance.buttons;
//     return instance;
//   }


// };


// c_carousel.main.init();

  // var c_carousel_linkedButtons = c_carousel_linkedButtons || {};

  // c_carousel_linkedButtons.main = {

  //   clickEventButtons: function(linkedButtons) {
  //     var carouselIndex = linkedButtons.carouselId,
  //     buttonCollection = linkedButtons.buttons;
  //     // set initial button to active
  //     buttonCollection[0].classList.add("active");
  //     for(i=0; i < buttonCollection.length; i++) {
  //       c_carousel.main.pillsClickEvent(buttonCollection[i], carouselIndex, i, "mouseover", linkedButtons);
  //       buttonCollection[i].addEventListener("mouseover", function() {
  //          buttonCollection.forEach(function(btn) {
  //            btn.classList.remove("active");
  //          });
  //          this.classList.add("active");
  //       });
  //     }
  //   },

  //   setButtonActive: function(carouselIndex) {
  //     var linkedButtons = carouselIndex[8];
  //     var activeButton = linkedButtons[carouselIndex[2]],
  //         activeButtonClass = activeButton.classList;
  //     linkedButtons.forEach(function(btn) {
  //       btn.classList.remove("active");
  //     });
  //     activeButton.classList.add("active");
  //   } // pick up here - just finished this function

  // }


  // var testButton = c_carousel.main.createLinkedBtns(6);
  // c_carousel_linkedButtons.main.clickEventButtons(testButton);

