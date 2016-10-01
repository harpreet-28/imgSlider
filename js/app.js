var button = document['getElementById']('button');
var images = [];
images[0] = "./img/1.jpg";
images[1] = "./img/2.jpg";
images[2] = "./img/3.jpg";
images[3] = "./img/4.jpg";
images[4] = "./img/5.jpg";
images[5] = "./img/6.jpg";
images[6] = "./img/7.jpg";
var i = 0;

var startTime = setInterval(slide, 1000);

function slide() {
    document['getElementById']('image').src = images[i];
    i++;
    if (i == 7) {
        clearInterval(startTime);
    };
}
button['addEventListener']('click', startTime, false);
