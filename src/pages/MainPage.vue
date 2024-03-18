<template>
    <div class="MainPageBody">
      <div class="logo" :style="{ 'background-image': 'url(' + require('@/assets/img/logo.svg') + ')' }"></div>
      <section class="layers">
        <div class="layers__container">
          <div class="layers__item layer-1" :style="{ 'background-image': 'url(' + require('@/assets/img/layer-1.jpg') + ')' }"></div>
          <!-- <div class="layers__item layer-2" :style="{ 'background-image': 'url(' + require('@/assets/img/layer-2.png') + ')' }"></div> -->
          <div class="layers__item layer-3">
            <div class="hero-content">
              <h1 class="hero-text">Движение<span style="margin-top: 5px;">Вперёд</span> </h1>
              <!-- <div class="hero-content__p">Аренда автомобилей</div> -->
              <button class="button-start" @click="handleButtonClick">Арендовать</button>
  
            </div>
          </div>
          <div class="layers__item layer-4">
          </div>
          <div class="layers__item layer-2" :style="{ 'background-image': 'url(' + require('@/assets/img/layer-2.png') + ')' }"></div>
          <!-- <div class="layers__item layer-rock" :style="{ 'background-image': 'url(' + require('@/assets/img/rock2.png') + ')', 'background-size': '50% no-repeat' }"></div> -->
  
          <div class="layers__item layer-5" :style="{ 'background-image': 'url(' + require('@/assets/img/layer-5.png') + ')' }"></div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import router from "@/router/router";
  
  export default {
    name: 'HelloWorld',
    mounted() {
        // this.animateLeaves();
        this.setupMouseMoveListener();
    },
    methods: {
        animateLeaves() {
      setTimeout(() => {
        document.querySelector('.layers__item.layer-5').classList.add('move-down-to-position');
        // document.querySelector('.hero-text').classList.add('move-x-to-position');
        // document.querySelector('.button-start').classList.add('move-x-to-position');
      }, 500);
    },
      handleButtonClick() {
        document.querySelector('.layers__item.layer-5').classList.remove('move-down-to-position');
        // document.querySelector('.hero-text').classList.remove('move-x-to-position');
        // document.querySelector('.button-start').classList.remove('move-x-to-position');
    // Добавляем класс анимации для логотипа и кнопки
    document.querySelector('.logo').classList.add('fade-out-logo');
    document.querySelector('.button-start').classList.add('move-left');
    // Добавляем класс анимации для текста "Движение Вперёд"
    document.querySelector('.hero-text').classList.add('move-right');
    document.querySelector('.layers__item.layer-5').classList.add('move-down');
    // Добавляем класс анимации для исчезновения заднего фона
    document.querySelector('.layers__item.layer-3').classList.add('fade-out');
    document.querySelector('.layers__item.layer-1').classList.add('fade-out');
    document.querySelector('.layers__item.layer-2').classList.add('fade-out');
    // document.querySelector('.layers__item.layer-5').classList.add('fade-out');
  
    // Ждем завершения анимации, затем перенаправляем пользователя на другую страницу
    setTimeout(() => {
      router.push('/about');
    }, 1500); // Настройте время анимации здесь (в миллисекундах)
  },
  
      setupMouseMoveListener() {
        document.addEventListener('mousemove', this.handleMouseMove);
      },
      handleMouseMove(e) {
        Object.assign(document.documentElement, {
          style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
          `
        });
      },
      randomNum(max, min) {
        return Math.floor(Math.random() * max) + min;
      },
    }
  }
  </script>
  
  <style>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  :root {
      --index: calc(1vw + 1vh);
      --transition: 1.5s cubic-bezier(.05, .5, 0, 1);
  }
  @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  .MainPageBody {
      background-color: white;
      color: #fff;
      font-family: Roboto;
  }
  .logo {
      --logo-size: calc(var(--index) * 10);
      width: var(--logo-size);
      height: var(--logo-size);
      background-repeat: no-repeat;
      position: absolute;
      left: calc(51% - calc(var(--logo-size) / 2));
      top: calc(var(--index) * 2.8);
      z-index: 1;
  }
  .layers {
      perspective: 1000px;
      overflow: hidden;
  }
  .layers__container {
      height: 100vh;
      min-height: 500px;
      transform-style: preserve-3d;
      transform: rotateX(var(--move-y)) rotateY(var(--move-x));
      will-change: transform;
      transition: transform var(--transition);
  }
  .layers__item {
      position: absolute;
      inset: -5vw;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .layer-1 {
      transform: translateZ(-55px) scale(1.26);
  }
  .layer-2 {
      transform: translateY(130px) scale(1.2);
       /* Уменьшите значение translateZ на 10px для смещения вниз */
  }
  
  .layer-3 {
      transform: translateZ(180px) scale(.8);
  }
  .layer-4 {
      transform: translateZ(190px) scale(.9);
  }
  .layer-5 {
      /* transform: translateY(-100%) translateZ(300px) scale(.9); */
      transform: translateZ(300px) scale(.9);
  }
  .layer-6 {
      transform: translateZ(380px);
  }
  .layer-rock {
    transform: translateX(-600px) translateY(90px) translateZ(280px);
    filter: blur(5px);
  }
  .hero-content {
      font-size: calc(var(--index) * 2.5);
      text-align: center;
      text-transform: uppercase;
      letter-spacing: calc(var(--index) * -.15);
      line-height: 1.35em;
      margin-top: calc(var(--index) * 5.5);
  }
  /* .hero-text {
        transition: opacity 1s ease-out;
        transform: translateX(-250%)
  }
  .button-start {
        transition: opacity 1s ease-out;
        transform: translateX(600%)
  } */
  .hero-content span {
      display: block;
  }
  .hero-content__p {
      text-transform: none;
      font-family: Roboto;
      letter-spacing: normal;
      font-size: calc(var(--index) *1);
      line-height: 3;
  }
  .button-start {
      font-family: Arial;
      font-weight: 600;
      text-transform: uppercase;
      font-size: calc(var(--index) * .71);
      letter-spacing: -.02vw;
      padding: calc(var(--index) * .7) calc(var(--index) * 1.25);
      background-color: white; /* Белый фон */
      color: black; /* Черный текст */
      border-radius: 10em;
      border: white 0px solid;
      outline: none;
      cursor: pointer;
      margin-top: calc(var(--index) * 2.5);
      transition: background-color 0.3s, color 0.3s; /* Плавное изменение цвета при наведении */
  }
  
  .button-start:hover {
      background-color: black;
      color: white;
  }
  
  .layer-4, .layer-5, .layer-6 {
      pointer-events: none;
  }
  /* .static-layer {
    transition: none;
    animation: none;
    transform: none !important;
  } */
  .move-right {
    transition: transform 1s ease-out;
    transform: translateX(100%);
  }
  .fade-out {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  .move-left {
    transition: transform 1s ease-out;
    transform: translateX(-300%);
  }
  .move-down {
    transition: transform 1s ease-out;
    transform: translateY(200%) translateZ(300px);
  }
  .move-down-to-position {
    transition: transform 1s ease-out;
    transform: translateY(0%) translateZ(300px);
  }
  .move-x-to-position {
    transition: transform 1s ease-out;
    transform: translateX(0%);
  }
  .fade-out-logo {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  </style>