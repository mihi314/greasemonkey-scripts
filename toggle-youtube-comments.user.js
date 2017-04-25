// ==UserScript==
// @name          Toggle YouTube Comments
// @namespace     http://userscripts.org/users/brettof86
// @description   YouTube comments almost always useless.
// @version       0.3
// @include       http://*.youtube.com/*
// @include       https://*.youtube.com/*
// ==/UserScript==


function addToggle(element, buttonText) {
    if (!element)
        return;

    element.setAttribute('style', 'display:none;');
    var div = document.createElement('div');
    div.classList.add('show_hide_comments');
    var a = document.createElement('a');
    a.text = buttonText;
    a.href = '#';
    // youtube classes
    a.classList.add('yt-uix-button');
    a.classList.add('yt-uix-button-default');
    a.classList.add('yt-uix-button-size-default');
    a.onclick = function () {
        if (element.getAttribute('style')) {
            element.setAttribute('style', '');
        } else {
            element.setAttribute('style', 'display:none;');
        }
        return false;
    };
    div.appendChild(a);
    element.parentElement.insertBefore(div, element);
    // style the button
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.show_hide_comments { text-align: center; padding: 10px; border: 1px solid #E6E6E6; border-top: 0;}';
    document.body.appendChild(css);
}


var comments = document.getElementById('watch-discussion');
addToggle(comments, 'Toggle Comments');

var sidebar = document.getElementById('watch7-sidebar-contents');
addToggle(sidebar, 'Toggle Sidebar');
