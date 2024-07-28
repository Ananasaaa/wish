let a = prompt('Приветики! Напиши свой возраст)')
alert("Принимай поздравления!)");

document.addEventListener('DOMContentLoaded', () => {

    const images = [
        { },
        { src: 'photo/1.jpeg', text: 'Штош, еще один год позади. И хочется сказать тебе несколько слов...' },
        { src: 'photo/2.jpeg', text: 'С тобой всегда весело и быстро пролетает время, и для меня это время очень ценно' },
        { src: 'photo/3.jpeg', text: 'Ты всегда очень ответственно подходишь ко всем просьбам и любым задачам' },
        { src: 'photo/4.jpeg', text: 'А твое умение перевоплощаться...' },
        { src: 'photo/5.jpeg', text: 'Это особый дар... Но даже так ты прекрасна!' },
        { src: 'photo/6.jpeg', text: 'Поездки с тобой никогда не бывают скучными, а лицезреть твой сон это отдельное удовольствие' },
        { src: 'photo/7.jpeg', text: 'Ты выглядишь стильно при любых обстоятельствах, как истинная женщина!' },
        { src: 'photo/8.jpeg', text: 'И я верю, что ты добьешься больших успехов в своем нелегком деле' },
        { src: 'photo/9.jpeg', text: 'Погода всегда на нашей стороне,когда мы планируем встретиться' },
        { src: 'photo/11.jpeg', text: 'Ты заслуживаешь самых лучших цветов!' },
        { src: 'photo/12.jpeg', text: 'А как искусно ты поглощаешь напитки...' },
        { src: 'photo/13.jpeg', text: 'Ты всегда выглядишь ухоженно и от тебя благоговеет вкуснейшими ароматами' },
        { src: 'photo/14.jpeg', text: 'Мы через столькое прошли, мы столько пережили вместе, столько воспоминаний, и слез, и смеха, мы прожили часть жизни вместе. Ты стала очень значимым человеком, очень дорогим для меня. Может, это и звучит банально...но...' },
        { src: 'photo/15.jpeg', text: 'Я очень тебя люблю! И благодарю тебя за то, что ты появилась в моей жизни! Самая красивая и лучшая женщина на этой планете! Будь счастлива и любима, сияй и покоряй вершины, у тебя все получится! С днем рождения!!!' },
        
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById('image');
    const imageTextElement = document.getElementById('image-text');
    const changeImageButton = document.getElementById('change-image-button');

    changeImageButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex].src;
        imageTextElement.textContent = images[currentIndex].text;
    });
});