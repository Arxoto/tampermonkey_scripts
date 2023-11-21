// ==UserScript==
// @name         MyStyle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ArxO_O
// @match        https://*.zhihu.com/*
// @match        https://*.csdn.net/*
// @match        https://*.juejin.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    let url = window.location.href; // document.location.host;
    if (url.includes('zhihu.com')) {
        // 登录框
        GM_addStyle('html{overflow:visible !important}');
        GM_addStyle('.Modal-wrapper{display:none !important}');
        window.addEventListener('DOMContentLoaded', () => document.querySelector(".Modal-wrapper")?.remove());
    } else if (url.includes('csdn.net')) {
        // 登录框
        GM_addStyle('.passport-login-container {display:none !important}');
        GM_addStyle('.passport-login-tip-container {display:none !important}');
    } else if (url.includes('juejin.cn')) {
        // 登录框
        GM_addStyle('.bottom-login-guide {display:none !important}');
    }
})();