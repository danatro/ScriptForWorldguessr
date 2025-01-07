// ==UserScript==
// @name         Change Background for WorldGuessr
// @version      1.0
// @description  Change the game background image on WorldGuessr
// @author       DanaBZH, Danatro
// @match        https://www.worldguessr.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Replace this URL with the link to your desired background image
    const newBackgroundUrl = "https://wallpaper.forfun.com/fetch/87/87c93aa33275b4c8c73637ad3fbee836.jpeg";


    function changeBackground() {

        const xpath = "/html/body/div/div[5]/img";
        const imgElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (imgElement) {

            imgElement.src = newBackgroundUrl;

            console.log("Background image changed to:", newBackgroundUrl);
        } else {
            console.warn("Could not find the background image element.");
        }
    }


    window.addEventListener('load', changeBackground);
})();
