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
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'fast'
};
var tc = TagCloud('.sphereContent', sphereTexts, sphereOptions);