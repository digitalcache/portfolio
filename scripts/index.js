mobile = false;
if(screen.width <= 768) {
    mobile = true;
}    
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    direction: 'horizontal',
    keyboard: {
        enabled: true,
    },
    slidesPerView: mobile ? "auto" : 5,
    spaceBetween: mobile? 0: 30,
    grid: {
        rows: mobile ? 0 : 2,
    },
});
var languageMeta = {
    english : {
        language: "English",
        aboutService: 'About & Services',
        text1: "I'm Charlis Doley",
        text2: "Available for freelance work",
        h1: "I’m a Freelance <br> Web Guru  <br> turning your website  <br> smooth like water",
        h2: "I help companies to develop digital products and turn ideas into a functional and <br> delightful experience. I’m focusing on working on interface and digital experience <br> on website and apps.",
        text3: "Check out my <br>SkillSphere",
        text4: `I'm a UI Developer located in Hyderabad, India. I have a serious passion for
        UI effects, animations and creating intuitive, dynamic user experience.
        <br><br>
        Well-organized person, problem solver, independent employee with high 
        attention to detail. I have been working for more than 3 years professionally 
        as a Software Developer and have completed around 15 projects.
        <br><br>
        Interested in the entire frontend spectrum and working on ambitious
        projects with positive people.
        <br><br>`,
        text5: "Let’s Keep It Crispy.",
        worksTitle: "Check out my Works" 
    },
    spanish : {
        language: "Español",
        aboutService: 'Acerca de y servicios',
        text1: "Soy Charlis Doley",
        text2: "Disponible para trabajo autónomo",
        h1: "Soy un gurú web independiente que hace que su sitio web sea fluido como el agua",
        h2: "Ayudo a las empresas a desarrollar productos digitales y convertir ideas en una experiencia funcional y agradable. Me estoy enfocando en trabajar en la interfaz y la experiencia digital en sitios web y aplicaciones.",
        text3: "Echa un vistazo a mi <br>SkillSphere",
        text4: `Soy un desarrollador de UI ubicado en Hyderabad, India. Tengo una seria pasión por
        Efectos de interfaz de usuario, animaciones y creación de una experiencia de usuario dinámica e intuitiva.
        <br> <br>
        Persona bien organizada, solucionadora de problemas, empleado independiente con alto
        atención a los detalles. Trabajo profesionalmente desde hace más de 3 años
        como desarrollador de software y he completado alrededor de 15 proyectos.
        <br> <br>
        Interesado en todo el espectro de frontend y trabajando en ambiciosos
        proyectos con personas positivas.
        <br> <br>`,
        text5: "Mantengámoslo crujiente.",
        worksTitle: "Mira mis trabajos"
        
    }
};

var myWave = wavify( document.querySelector('#waveBottom'), {
    height: 100,
    bones: mobile ? 1 : 8,
    amplitude: mobile ? 20 : 50,
    color: '#007AFF'
})

var myWave = wavify( document.querySelector('#waveMiddle'), {
    height: 100,
    bones: mobile ? 2 : 8,
    amplitude:mobile ? 10 : 30,
    color: '#0063FF'
})

var myWave = wavify( document.querySelector('#waveTop'), {
    height: 100,
    bones: mobile ? 2 : 8,
    amplitude: mobile ? 20 : 60,
    color: '#0044FF'
})


function copyEmail() {
    var copyText = document.getElementById("emailToCopy");
    copyText.select();
    document.execCommand("copy");
    if(mobile) {
        window.open('mailto:charles.doley1@gmail.com');
    }
}
var sphereTexts = [
    'Animation', 'Interaction', 'JavaScript',
    'CSS3', 'HTML5', 'React',
    'Redux', 'Figma', 'Photoshop',
    'Material UI', 'Illustrator', 'NodeJs', 'Next JS', 'AnimeJs', 'GSAP', 'API'
];
sphereOptions = {
    radius: mobile ? 100 : 200,
};
var tc = TagCloud('.sphereContent', sphereTexts, sphereOptions);



document.addEventListener('DOMContentLoaded', () => {  
    document.getElementById('about_service').innerText = languageMeta.english.aboutService;
    document.getElementById('language').innerText = languageMeta.english.language;
    document.getElementById('text1').innerText = languageMeta.english.text1;
    document.getElementById('text2').innerText = languageMeta.english.text2;
    document.getElementById('h1').innerHTML = languageMeta.english.h1;
    document.getElementById('h2').innerHTML = languageMeta.english.h2;
    document.getElementById('text3').innerHTML = languageMeta.english.text3;
    document.getElementById('text4').innerHTML = languageMeta.english.text4;
    document.getElementById('text5').innerHTML = languageMeta.english.text5;
    document.getElementById('worksTitle').innerHTML = languageMeta.english.worksTitle;
    
    async function firstSetOfAnimation() { 
        const wavesContainerAnimation = anime({
            targets: '.wavesContainer',
            easing: 'easeOutExpo',
            duration: 2000,
            delay: 500,
            opacity: [0,1]
        }).finished;
      
        const navAnimation = anime({
          targets: 'nav',
          translateY: [-400,0],
          easing: 'easeOutExpo',
          duration: 1500,
          delay: 1000,
          opacity: [0,1]
        }).finished;
        
        const nameIntroAnimation = anime({
            targets: '.name-intro',
            easing: 'easeOutExpo',
            translateX: mobile ? 0 : [-400,0],
            duration: 1500,
            delay: 2000,
            opacity: [0,1]
        }).finished;
      
        const h1Animation = anime({
            targets: 'h1',
            easing: 'easeOutExpo',
            translateX: mobile ? 0 : [-400,0],
            duration: 1500,
            delay: 3000,
            opacity: [0,1]
        }).finished;
    
        const sphereScreenContainerAnimation = anime({
            targets: '.sphereScreenContainer',
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 3500,
            opacity: [0,1]
        }).finished;
       
        const introDescriptionAnimation = anime({
            targets: '.introDescription',
            easing: 'easeOutExpo',
            translateX: mobile ? 0 : [-400,0],
            duration: 1500,
            delay: 3500,
            opacity: [0,1]
        }).finished;
    
        const surfAnimation = anime({
            targets: '.surf',
            easing: 'easeOutExpo',
            translateX: [400,0],
            duration: 1500,
            delay: 4000,
            opacity: [0,1]
        }).finished;
    
        const emailAnimation = anime({
            targets: '.email',
            easing: 'easeOutExpo',
            bottom: mobile ? null : [200, -60],
            duration: 1000,
            delay: 5000,
            opacity: [0,1]
        }).finished;
     
      
        await Promise.all([
            wavesContainerAnimation,
            navAnimation,
            nameIntroAnimation,
            h1Animation,
            sphereScreenContainerAnimation, 
            introDescriptionAnimation, 
            surfAnimation, 
            emailAnimation]);
      }
      
      firstSetOfAnimation().then(() => {
        anime({
            targets: '.surf',
            easing: 'easeInOutCubic',
            translateX: mobile? [-100, 0, 100] :[0, 100],
            loop: true,
            direction: 'alternate',
            duration: mobile ? 5000 : 3000,
        });
        anime({
            targets: '.surfVector',
            easing: 'easeInQuad',
            translateY: [0,2],
            rotateZ: [0,3],
            loop: true,
            direction: 'alternate',
            duration: 200,
        });
       
    });
});

  
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('lang-select');
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.getElementById('about_service').innerText = languageMeta.spanish.aboutService;
        document.getElementById('language').innerText = languageMeta.spanish.language;
        document.getElementById('text1').innerText = languageMeta.spanish.text1;
        document.getElementById('text2').innerText = languageMeta.spanish.text2;
        document.getElementById('h1').innerHTML = languageMeta.spanish.h1;
        document.getElementById('h2').innerHTML = languageMeta.spanish.h2;
        document.getElementById('text3').innerHTML = languageMeta.spanish.text3;
        document.getElementById('text4').innerHTML = languageMeta.spanish.text4;
        document.getElementById('text5').innerHTML = languageMeta.spanish.text5;
        document.getElementById('worksTitle').innerHTML = languageMeta.spanish.worksTitle;
      } else {
        document.getElementById('about_service').innerText = languageMeta.english.aboutService;
        document.getElementById('language').innerText = languageMeta.english.language;
        document.getElementById('text1').innerText = languageMeta.english.text1;
        document.getElementById('text2').innerText = languageMeta.english.text2;
        document.getElementById('h1').innerHTML = languageMeta.english.h1;
        document.getElementById('h2').innerHTML = languageMeta.english.h2;
        document.getElementById('text3').innerHTML = languageMeta.english.text3;
        document.getElementById('text4').innerHTML = languageMeta.english.text4;
        document.getElementById('text5').innerHTML = languageMeta.english.text5;
        document.getElementById('worksTitle').innerHTML = languageMeta.english.worksTitle;
      }
    });
});