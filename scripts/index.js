mobile = false;
if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 768) {
    mobile = true;
}    
const swiper = new Swiper('.works-animate', {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
      },
    direction: 'horizontal',
    slidesPerView: mobile ? "auto" : "auto",
});


const swiper2 = new Swiper('.collabs-animate', {
    direction: 'horizontal',
    keyboard: {
        enabled: true,
    },
    autoplay: true,
    slidesPerView: "auto",
    spaceBetween: mobile? 0: 30,
});

var languageMeta = {
    english : {
        language: "English",
        aboutService: 'About & Services',
        text1: "Hola!, I'm Charlis Doley",
        text2: "Web Expert",
        h1: "Expert in Crafting <br> Effortless Website Experiences.",
        h2: "I specialize in creating digital products with appealing designs for websites and mobile apps, focusing on user interfaces and enhancing digital experiences through innovative technology. I work with businesses to boost their digital presence, engagement, and brand image, ensuring usability, accessibility, and engaging content for competitive market success.",
        text3: "Explore My <br>SkillSphere",
        text4: `I am a UI Developer based in Hyderabad, India, with a profound passion for UI effects, animations, and crafting intuitive, dynamic user experiences.
        <br><br>
        As a well-organized individual, I excel at solving problems, work efficiently independently, and possess a keen eye for detail. With over seven years of professional experience as a Front End Developer, I have successfully completed approximately 20+ projects.
        <br><br>
        My interests span the entire Frontend spectrum, and I am eager to collaborate on ambitious projects with positive-minded individuals.
        <br><br>`,
        text5: "Let’s Make It Happen!",
        worksTitle: "Explore My Creations" 
    },
    spanish : {
        language: "Español",
        aboutService: 'Acerca de y servicios',
        text1: "¡Hola!, soy charlis doley",
        text2: "Experto en Web Digital",
        h1: "Especialista en la creación <br> de experiencias de sitios <br> web sin esfuerzo.",
        h2: "Me especializo en la creación de productos digitales con diseños atractivos para sitios web y aplicaciones móviles, enfocándome en interfaces de usuario y mejorando las experiencias digitales a través de tecnología innovadora. Trabajo con empresas para impulsar su presencia digital, compromiso e imagen de marca, garantizando usabilidad, accesibilidad y contenido atractivo para el éxito en el mercado competitivo.",
        text3: "Echa un vistazo a mi <br>SkillSphere",
        text4: `Soy un desarrollador de UI con sede en Hyderabad, India, y tengo una profunda pasión por los efectos de UI, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas.
        <br> <br>
        Como persona bien organizada, me destaco en la resolución de problemas, trabajo eficientemente de forma independiente y tengo buen ojo para los detalles. Con más de siete años de experiencia profesional como desarrollador front-end, he completado con éxito aproximadamente más de 20 proyectos.
        <br> <br>
        Mis intereses abarcan todo el espectro Frontend y estoy ansioso por colaborar en proyectos ambiciosos con personas de mentalidad positiva.
        <br> <br>`,
        text5: "¡Hagámoslo realidad!",
        worksTitle: "Explora mis creaciones"
        
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
    'Adobe Illustrator', 'Animation', 'API', 'RPCs',
    'Authentication', 'Code review', 'CSS', 'Blockchain',
    'Figma', 'Git', 'HTML5', 'Uniswap', 'Solidity',
    'Javascript', '', 'Next JS', 'Ether JS', 'Code review',
    'Product strategy', 'React', 'SEO', 'Tailwind',
    'Web Sockets', 'Product Development', 'UX',
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
            targets: '.skills',
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
            // top: mobile ? [auto, auto] : [-200, ],
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
