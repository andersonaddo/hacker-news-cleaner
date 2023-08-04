// ==UserScript==
// @name         Automatic Libreddit Quota Redirector
// @namespace    happyviking
// @version      1.8.0
// @grant        none
// @run-at       document-end
// @license      MIT
// @description  Automatically redirects to another Libreddit instance if the one you're directed to has reached its rate limit/quota.
// @icon         https://gitlab.com/uploads/-/system/project/avatar/32545239/libreddit.png
// @author       HappyViking

// <<INSTANCES START HERE>>
// @match https://l.opnxng.com/*
// @match https://libreddit.bus-hit.me/*
// @match https://libreddit.cachyos.org/*
// @match https://libreddit.dcs0.hu/*
// @match https://libreddit.domain.glass/*
// @match https://libreddit.freedit.eu/*
// @match https://libreddit.hu/*
// @match https://libreddit.kavin.rocks/*
// @match https://libreddit.kutay.dev/*
// @match https://libreddit.kylrth.com/*
// @match https://libreddit.lunar.icu/*
// @match https://libreddit.mha.fi/*
// @match https://libreddit.northboot.xyz/*
// @match https://libreddit.oxymagnesium.com/*
// @match https://libreddit.privacy.com.de/*
// @match https://libreddit.privacydev.net/*
// @match https://libreddit.pussthecat.org/*
// @match https://libreddit.strongthany.cc/*
// @match https://libreddit.tiekoetter.com/*
// @match https://libreddit.tux.pizza/*
// @match https://lr.4201337.xyz/*
// @match https://lr.aeong.one/*
// @match https://lr.artemislena.eu/*
// @match https://lr.riverside.rocks/*
// @match https://lr.slipfox.xyz/*
// @match https://lr.vern.cc/*
// @match https://r.darklab.sh/*
// @match https://rd.funami.tech/*
// @match https://reddit.baby/*
// @match https://reddit.dr460nf1r3.org/*
// @match https://reddit.leptons.xyz/*
// @match https://reddit.rtrace.io/*
// @match https://reddit.simo.sh/*
// @match https://reddit.smnz.de/*
// @match https://reddit.utsav2.dev/*
// @match https://safereddit.com/*
// @match https://snoo.habedieeh.re/*
// <<INSTANCES END HERE>>

// ==/UserScript==

function main() {
    const errorMessage = document.getElementById("error")
    if (!errorMessage) return;
    if(!errorMessage.querySelector("h1")?.innerHTML.includes("Too Many Requests")) return;
    const addedMessage = document.createElement("p")
    addedMessage.textContent = "Redirecting you to new instance..."
    errorMessage.appendChild(addedMessage)
    location.replace('https://farside.link/libreddit/' + window.location.pathname);
}

main()
