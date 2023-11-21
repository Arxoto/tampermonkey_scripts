// ==UserScript==
// @name         YouTubeCn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ArxO_O
// @match        https://www.youtube.com/watch*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('load', () => {
        const video = document.querySelector('video');
        if (video === null) {
            return;
        }
        video.addEventListener('loadeddata', () => {
            // 打开字幕
            document.querySelector('.ytp-subtitles-button[aria-pressed="false"]')?.click();

            // 中文翻译
            const eles = document.getElementsByClassName('ytp-menuitem');

            /**
             * first element which innerText has {text}
             * @param {string} text 
             */
            const firstElem = text => {
                for (const elem of eles) {
                    if (elem.textContent.includes(text)) {
                        return elem;
                    }
                }
                return null;
            }

            const toCn = () => {
                const sub = firstElem("字幕");
                if (!sub) { return; }
                sub.click();

                const subc = firstElem("中文");
                if (subc) {
                    subc.click();
                    return;
                }

                const autoTrans = firstElem("自动翻译");
                if (!autoTrans) { return; }
                autoTrans.click();

                const autoTransC = firstElem("简体");
                if (!autoTransC) { return; }
                autoTransC.click();
            }

            setTimeout(() => {
                document.querySelector('.ytp-settings-button[aria-expanded="false"]')?.click();
            }, 100);
            setTimeout(() => {
                toCn();
            }, 500);
            setTimeout(() => {
                document.querySelector('.ytp-settings-button[aria-expanded="true"]')?.click();
            }, 1000);
        });
    });
})();