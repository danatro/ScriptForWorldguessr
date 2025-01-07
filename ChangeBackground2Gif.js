// ==UserScript==
// @name         Change Animated Background for WorldGuessr
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change the game background to an animated one on WorldGuessr
// @author       DanaBZH, Danatro
// @match        https://www.worldguessr.com/*
// ==/UserScript==

(function() {
    'use strict';

    // === Configuration ===
    // Replace this URL with the link to your desired animated background (GIF or video)
    const animatedBackgroundUrl = "https://github.com/danatro/ScriptForWorldguessr/blob/main/gifbackground.gif?raw=true";


    function changeBackgroundToAnimated() {

        const xpath = "/html/body/div/div[5]/img";
        const imgElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (imgElement) {

            imgElement.src = animatedBackgroundUrl;


            imgElement.style.objectFit = "cover";
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";

            console.log("Background changed to animated:", animatedBackgroundUrl);
        } else {
            console.warn("Could not find the background image element.");
        }
    }


    window.addEventListener('load', changeBackgroundToAnimated);
})();
