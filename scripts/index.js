mobile = false;
if(screen.width <= 768) {
    mobile = true;
}    

var myWave = wavify( document.querySelector('#waveBottom'), {
    height: 100,
    bones: mobile ? 1 : 8,
    amplitude: mobile ? 20 : 50,
    color: '#007AFF',
    // speed: 0.2
})

var myWave = wavify( document.querySelector('#waveMiddle'), {
    height: 100,
    bones: mobile ? 2 : 8,
    amplitude:mobile ? 10 : 30,
    color: '#0063FF',
    // speed: 0.2
})

var myWave = wavify( document.querySelector('#waveTop'), {
    height: 100,
    bones: mobile ? 2 : 8,
    amplitude: mobile ? 20 : 60,
    color: '#0044FF',
    // speed: 0.2
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

  
// custom scroll bar