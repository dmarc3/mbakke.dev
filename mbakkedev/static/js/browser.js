// Copied from https://unpkg.com/cursor-effects@1.0.6/dist/browser.js
// Beautified with https://beautifier.io/
var cursoreffects = function(t) {
    "use strict";
    return t.airplaneCursor = function(t) {
        let e, i, n = t && t.element,
            o = n || document.body,
            s = window.innerWidth,
            h = window.innerHeight,
            c = {
                x: s / 2,
                y: s / 2
            },
            l = new function(t, e, i, n) {
                this.position = {
                    x: t,
                    y: e
                }, this.width = i, this.lag = n, this.moveTowards = function(t, e, i) {
                    this.position.x += (t - this.position.x) / this.lag, this.position.y += (e - this.position.y) / this.lag, i.fillStyle = d, i.beginPath(), i.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI), i.fill(), i.closePath()
                }
            }(s / 2, h / 2, 10, 10),
            d = t?.color || "#323232a6";
        const a = window.matchMedia("(prefers-reduced-motion: reduce)");

        function r() {
            if (a.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", n ? (e.style.position = "absolute", o.appendChild(e), e.width = o.clientWidth, e.height = o.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = s, e.height = h), o.addEventListener("mousemove", u), window.addEventListener("resize", A), m()
        }

        function A(t) {
            s = window.innerWidth, h = window.innerHeight, n ? (e.width = o.clientWidth, e.height = o.clientHeight) : (e.width = s, e.height = h)
        }

        function u(t) {
            if (n) {
                const e = o.getBoundingClientRect();
                c.x = t.clientX - e.left, c.y = t.clientY - e.top
            } else c.x = t.clientX, c.y = t.clientY
        }

        function m() {
            i.clearRect(0, 0, s, h), l.moveTowards(c.x, c.y, i), requestAnimationFrame(m)
        }
        a.onchange = () => {
            a.matches ? this.destroy() : r()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(m), o.removeEventListener("mousemove", u), window.addEventListener("resize", A)
        }, r()
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t
}({});