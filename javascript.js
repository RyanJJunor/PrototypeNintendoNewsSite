function changeStyle() {
    
    "use strict";

    if (document.getElementById('leftjc').getAttribute('src') === 'img/jcleft_better.png') {
        document.getElementById('leftjc').src = 'img/neonjcleft.png';
        document.getElementById('rightjc').src = 'img/neonjcright.png';
        document.cookie = "theme=neon; path=/";

    } else if (document.getElementById('leftjc').getAttribute('src') === 'img/neonjcleft.png') {
        document.getElementById('leftjc').src = 'img/jcleft_better.png';
        document.getElementById('rightjc').src = 'img/jcright_better.png';
       document.cookie = "theme=grey; path=/";
    
    }

}

function getStyle() {
    var x = document.cookie; 
    
    if (x === 'theme=grey') {
        document.getElementById('leftjc').src = 'img/jcleft_better.png';
        document.getElementById('rightjc').src = 'img/jcright_better.png';
    } else if (x === 'theme=neon') {
        document.getElementById('leftjc').src = 'img/neonjcleft.png';
        document.getElementById('rightjc').src = 'img/neonjcright.png';
    }
}


function footer() {
    
    document.write("<div id='footer'>This website was made by Ryan Junor 2018.</div>");
}

function menu() {
    
    document.write('<div id="menu_bar"><div id="drop_down"><img id="menu_img" src="img/menu.png" alt="menu_icon" width="50" height="50"><ul id="list"><li><a href = "index.html">News</a></li><li><a href = "Games.html">Games</a></li><li><a href = "OtherNews.html">Other News</a></li><li><a href = "Register.html">Register</a></li><li><a href = "LogIn.html">Log In</a></li><li><a onclick=changeStyle();>Style</a></li></ul></div></div>');
}
