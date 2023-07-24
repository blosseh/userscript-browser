// ==UserScript==
// @name         R/UK Placer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Loads the latest r/uk Place Script
// @author       @dougwithseismic
// @match        https://*.reddit.com/r/place/*
// @grant        GM_xmlhttpRequest
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to load the external script
    function loadExternalScript(url, callback) {
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            onload: function(response) {
                const script = document.createElement("script");
                script.textContent = response.responseText;
                (document.head || document.documentElement).appendChild(script);
                if(callback) callback();
            }
        });
    }

    // Load the external script
    loadExternalScript('https://github.com/blosseh/userscript-browser/raw/main/userscript.user.js?v=' + new Date())
})();