const slider = document.getElementById('myRange');
const element = document.getElementsByClassName("slidecontainer");
const el_red = document.getElementById("red");
const el_green = document.getElementById("green");
slider.addEventListener('input', function () {
    const percentage = slider.value;
    // element.style.background = `linear-gradient(to right, black ${percentage}%, white ${percentage}%)`;

    // el_red.style.background = `linear-gradient(to right, red ${percentage}%, white ${percentage}%)`;
    // el_green.style.background = `linear-gradient(to left, green ${percentage}%, white ${percentage}%)`;
    
    el_red.style.marginLeft = 10 + percentage*3 + 'px';
    el_green.style.marginLeft = 310 - percentage*3 + 'px';

  document.body.style.background = `linear-gradient(to right, greenyellow ${percentage}%, white ${percentage}%)`;
    
});

