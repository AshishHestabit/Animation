var flag = 1;
function hide(element) {
    // ele.classList.toggle("glyphicon glyphicon-remove");

    if (flag == 1) {
        console.log("hi ashish" + flag);
        var hide = document.getElementById("menu");
        hide.style.display = ' none';
        // element.style.transform = 'rotate(90deg)';

        element.classList.remove("glyphicon-remove");
        element.classList.add("glyphicon-menu-hamburger");

        flag = 0;
    }
    else {
        console.log("hi ashish" + flag);
        var hide = document.getElementById("menu");

        hide.style.transition = `display 10s ease-in .5s;`;
        hide.style.display = ' block';



        // hide.style.transitionProperty= 'margin';
        // hide.style.transitionDelay = '.50s';
        // hide.style.transitionDuration = '5s';
        hide.style.marginTop = '0%';
        // hide.style.marginBottom = '0%';
        // hide.style.height = '300px';
        element.classList.remove("glyphicon-menu-hamburger");
        element.classList.add("glyphicon-remove");
        flag = 1;
    }

}
