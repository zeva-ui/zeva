if(document.body.classList.contains("body-light")){
    document.querySelector('body').style.setProperty('--bg-color', "#fff");
    document.querySelector('body').style.setProperty('--text-color', "#000");
}else if(document.body.classList.value.startsWith('body')){
    var background = document.body.classList.value.split(' ')[1].split('-');
    var text = document.body.classList.value.split(' ')[2].split('-');
    document.querySelector('body').style.setProperty('--bg-color', background[3]);
    document.querySelector('body').style.setProperty('--text-color', text[3]);
}