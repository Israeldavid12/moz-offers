(function(t, n, s) {
    try {
        n._plt = n._plt || (s && s.timeOrigin ? s.timeOrigin + s.now() : Date.now() - 60);
        var o, i, a, c, l, d, r = t.head || t.getElementsByTagName("head")[0];
        if (!r)
            return;
        !0 && (c = "https://cdn.converteai.net/c0d89eb4-af87-4f75-ba74-aae866df9d51/6a4b865617012f5f0bee29e7/main.m3u8",
        t.querySelector('link[rel="preload"][href="' + c + '"]') || (o = t.createElement("link"),
        o.rel = "preload",
        o.href = c,
        o.setAttribute("as", "fetch"),
        o.setAttribute("crossorigin", "anonymous"),
        r.appendChild(o)));
        for (l = ["https://cdn.converteai.net", "https://images.converteai.net", "https://license.vturb.com"],
        i = 0; i < l.length; i++) {
            if (d = l[i],
            t.querySelector('link[rel="dns-prefetch"][href="' + d + '"]'))
                continue;
            a = t.createElement("link"),
            a.rel = "dns-prefetch",
            a.href = d,
            r.appendChild(a)
        }
    } catch (e) {
        n.console && n.console.error && n.console.error("vturb resource preloads injection failed", e)
    }
}
)(document, window, performance),
function() {
    var t = document.getElementById("vid-6a4b877012467ad3e499c7a4")
      , e = {
        elementId: "vid-6a4b877012467ad3e499c7a4",
        preloads: {},
        config: {
            id: "6a4b877012467ad3e499c7a4",
            step: 5,
            config: {
                callActions: {
                    active: !0,
                    version: 3,
                    items: [{
                        active: !0,
                        as_html: !1,
                        name: null,
                        content: "QUERO CURAR MINHA DISFUNCAO",
                        id: "6a4b8d48fbd7d45f814d5de0_d9658fff",
                        persist_on_video_end: !0,
                        show_to_returning_viewer: !1,
                        range: {
                            start: 480,
                            finish: null
                        },
                        type: "outside_video",
                        delay: !1,
                        delay_options: {
                            query: "",
                            query_type: "class"
                        },
                        image_as_button: !1,
                        image_url: "",
                        image_styles: {
                            height: 100,
                            width: 100,
                            opacity: 100
                        },
                        rich_element: null,
                        typography: {
                            family: "Inter",
                            letter_spacing: 1,
                            line_height: 150,
                            size: 18,
                            weight: 400,
                            embedLink: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
                        },
                        styles: {
                            background_color: "#0d9c1e",
                            background_hover_color: "#07a22f",
                            text_color: "#FFFFFF",
                            text_hover_color: "#FFFFFF",
                            border_radius: 12,
                            shadow_enabled: !1,
                            shadow: {
                                blur: 8,
                                color: "#1e8fffbf",
                                horizontal: 0,
                                vertical: 4,
                                spread: 1
                            },
                            padding: {
                                binding: !1,
                                values: [12, 24, 12, 24]
                            }
                        },
                        animation: null,
                        html: null,
                        url: "https://transformacheckout.vercel.app/?id=220&price=247&name=Sal%20nigeriano",
                        open_in_new_tab: !0,
                        scroll_enabled: !1,
                        scroll_type: "auto",
                        scroll_offset: 0
                    }]
                },
                cdn: "cdn.converteai.net",
                conversion: [],
                embedVersion: "1783337984-dynamodb",
                fakeBar: {
                    active: !0,
                    alpha: 2,
                    height: 10,
                    color: "#5AA738"
                },
                headlines: {
                    active: !1,
                    items: []
                },
                id: "6a4b877012467ad3e499c7a4",
                immersiveMode: {
                    active: !1,
                    disableScrolling: !1,
                    desktop: !1,
                    expandOnPlay: !1,
                    minimizeOnPause: !1,
                    mobile: !1
                },
                language: null,
                minihooks: {
                    active: !1,
                    items: []
                },
                name: "Sal_Nigeriano.mp4",
                oid: "c0d89eb4-af87-4f75-ba74-aae866df9d51",
                pitchTime: 480,
                pixels: {
                    active: !1,
                    items: []
                },
                playback: {
                    active: !1,
                    actionAfterFinish: null,
                    disablePause: !1,
                    scrollToActionIn: null,
                    smartPause: !1
                },
                playerInit: {
                    aspectRatio: 100,
                    thumbnailKey: "c0d89eb4-af87-4f75-ba74-aae866df9d51/players/6a4b877012467ad3e499c7a4/thumbnail.jpg",
                    verticalVideo: !1,
                    customId: null
                },
                playerVersion: "v4",
                preload: "image",
                resume: {
                    active: !0,
                    model: "default",
                    backgroundColor: "#5AA738",
                    disablePause: !1,
                    foregroundColor: "#FFFFFF",
                    play: "Continuar assistindo?",
                    replay: "Assistir do início?",
                    title: "Você já começou a assistir esse vídeo"
                },
                secure: !1,
                smartAutoPlay: {
                    active: !0,
                    items: [{
                        id: "smart_autoplay_6a4b877012467ad3e499c7a4_1_7f7cfccd",
                        autoUnmute: !0,
                        name: "Smart Autoplay",
                        number: 1,
                        version: "2",
                        startAt: null,
                        endAt: null,
                        elements: [{
                            height: 180,
                            id: "6a4b87e47a77be1931de3a76",
                            opacity: 1,
                            order: 1,
                            rotation: 0,
                            type: "box",
                            width: 324,
                            x: 198,
                            y: 270,
                            transformOrigin: null,
                            properties: {
                                border: {
                                    color: "#FFFFFF",
                                    size: 1.5,
                                    type: "solid"
                                },
                                color: "rgba(204, 18, 18, 0.79)",
                                radius: 6
                            }
                        }, {
                            height: 30,
                            id: "6a4b87e47a77be1931de3a77",
                            opacity: 1,
                            order: 2,
                            rotation: 0,
                            type: "text",
                            width: 324,
                            x: 198,
                            y: 286,
                            transformOrigin: null,
                            properties: {
                                align: "center",
                                color: "#FFFFFF",
                                size: 20,
                                value: "Seu vídeo já começou",
                                weight: "700"
                            }
                        }, {
                            height: 30,
                            id: "6a4b87e47a77be1931de3a78",
                            opacity: 1,
                            order: 3,
                            rotation: 0,
                            type: "text",
                            width: 324,
                            x: 198,
                            y: 404,
                            transformOrigin: null,
                            properties: {
                                align: "center",
                                color: "#FFFFFF",
                                size: 20,
                                value: "Clique para ouvir",
                                weight: "700"
                            }
                        }, {
                            height: 72,
                            id: "6a4b87e47a77be1931de3a79",
                            opacity: 1,
                            order: 4,
                            rotation: 0,
                            type: "image",
                            width: 102,
                            x: 309,
                            y: 324,
                            transformOrigin: null,
                            properties: {
                                alt: "Seu vídeo já começou",
                                src: "data:image/svg+xml;base64,CiAgICA8c3ZnIHZlcnNpb249IjEuMSIgZmlsbD0iI0ZGRkZGRiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ2Ljc1cHgiIGhlaWdodD0iMzIuNTYzcHgiIHZpZXdCb3g9IjcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIKICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgID4KICAgICAgPHN0eWxlPgogICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAgIDMzJSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgfQoKICAgICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfQogICAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICB9CgogICAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18yIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC4zczsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18zIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuNnM7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyAhaW1wb3J0YW50OwogICAgICAgIH0KCiAgICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICcjRkZGRkZGJzsKICAgICAgICB9CiAgICAgIDwvc3R5bGU+CgogICAgICA8ZyBjbGFzcz0iYWRqdXN0YWJsZSBmZyBhbmltYXRpb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNTMuMjQ5LDM5LjYxNmMtMC4xODYsMC0wLjM3MS0wLjA1MS0wLjUzNy0wLjE1N2wtNDMuNS0yNy43NWMtMC40NjYtMC4yOTctMC42MDMtMC45MTYtMC4zMDYtMS4zODFjMC4yOTgtMC40NjYsMC45MTctMC42MDEsMS4zODEtMC4zMDZsNDMuNSwyNy43NWMwLjQ2NywwLjI5NywwLjYwNCwwLjkxNiwwLjMwNywxLjM4MUM1My45MDEsMzkuNDUzLDUzLjU3OSwzOS42MTYsNTMuMjQ5LDM5LjYxNnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18zIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Ni45MjYsMzYuOTU2Yy0wLjYxMiwwLjg2My0xLjI4NiwxLjY5NS0yLjA1OSwyLjQ2OWMtMC4zOTIsMC4zOTEtMC4zOTIsMS4wMjMsMCwxLjQxNGMwLjE5NCwwLjE5NSwwLjQ1LDAuMjkzLDAuNzA3LDAuMjkzYzAuMjU2LDAsMC41MTItMC4wOTgsMC43MDYtMC4yOTNjMC44NzgtMC44NzgsMS42NDItMS44MjQsMi4zMzMtMi44MDdMNDYuOTI2LDM2Ljk1NnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMiBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDIuNTQzLDI5LjQxNWwxLjc3NywxLjEzNWMxLjU0NS01LjMxNSwwLjIyOS0xMS4yOTMtMy45NTMtMTUuNDc2Yy0wLjM5Mi0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwYy0wLjM5MiwwLjM5MS0wLjM5MiwxLjAyMywwLDEuNDE0QzQyLjQ1NCwxOS45ODcsNDMuNjM5LDI0LjkyNSw0Mi41NDMsMjkuNDE1eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS43NzEsMjUuMDk0bDIuMDAzLDEuMjc3YzAuMDEyLTAuMjAzLDAuMDI5LTAuNDA0LDAuMDI5LTAuNjA5YzAtMy4wNzktMS4yLTUuOTc0LTMuMzgxLTguMTUzYy0wLjM5MS0wLjM5MS0xLjAyMi0wLjM5MS0xLjQxNCwwYy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzM0LjY1MiwyMC42NjYsMzUuNjEzLDIyLjgwMiwzNS43NzEsMjUuMDk0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS4wODQsMjkuNDAxYy0wLjQ3NCwxLjE0NS0xLjE3MiwyLjE5Ny0yLjA3NiwzLjFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNjMC4yNTcsMCwwLjUxMy0wLjA5OCwwLjcwNy0wLjI5M2MxLjAwOC0xLjAwNiwxLjc5NS0yLjE3LDIuMzYxLTMuNDNMMzUuMDg0LDI5LjQwMXoiPjwvcGF0aD4KICAgICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTIwLjkyMSwyMC4zNjZoLTYuNDIzYy0wLjU1MywwLTEsMC41MDgtMSwxLjEzNXY4LjIyOWMwLDAuNjI3LDAuNDQ3LDEuMTM1LDEsMS4xMzVoNy4zNzVsNi4yNSw1Ljg3NVYyNC45NkwyMC45MjEsMjAuMzY2eiI+PC9wYXRoPgogICAgICA8L2c+CiAgICA8L3N2Zz4KICA="
                            }
                        }]
                    }]
                },
                style: {
                    background: "#C53C80",
                    bigPlay: !1,
                    borderRadius: 0,
                    captions: !1,
                    foreground: "#FFFFFF",
                    forward: !1,
                    fullscreen: !1,
                    linearGradient: {
                        active: !1,
                        angle: 90,
                        primaryColor: "#ffffff",
                        primaryStop: 0,
                        secondaryColor: "#5c68a2",
                        secondaryStop: 100
                    },
                    progressBar: !1,
                    rewind: !1,
                    smallPlay: !0,
                    speed: !1,
                    videoTime: !1,
                    volume: !1
                },
                subtitles: {
                    active: !1
                },
                thumbsniper: {
                    active: !1,
                    items: []
                },
                turbo: {
                    active: !1
                },
                video: {
                    cover: "https://images.converteai.net/c0d89eb4-af87-4f75-ba74-aae866df9d51/players/6a4b877012467ad3e499c7a4/cover.jpg",
                    startQuality: "auto",
                    id: "6a4b865617012f5f0bee29e7",
                    aspectRatio: 1,
                    height: 720,
                    poster: "https://cdn.converteai.net/c0d89eb4-af87-4f75-ba74-aae866df9d51/6a4b865617012f5f0bee29e7/poster.jpg",
                    width: 720,
                    drm: !1
                }
            }
        }
    };
    e.preloads.image = function(n) {
        t.innerHTML = `<div class="thumbnail" style="position: relative; width: 100%; padding: ${n.playerInit.aspectRatio || 56.25}% 0 0; z-index: 0;">` + `<img class="thumbnail-image" ` + `src="https://images.converteai.net/${n.playerInit.thumbnailKey}" ` + `style=" position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;  " />` + `</div>`
    }
    ,
    e.preload = function(t) {
        if (typeof e.preloads[t.preload] == "function")
            return e.preloads[t.preload](t);
        if (typeof e.preloads.netflix == "function")
            return e.preloads.netflix(t);
        e.preloads.image(t)
    }
    ,
    e.loadSmartPlayer = function(t) {
        if (t === "ignore")
            return;
        var n, s, o, i, a, r = t;
        try {
            s = new URLSearchParams(window.location.search),
            o = s.get("playerVersion"),
            o && (r = o)
        } catch (e) {
            console.error("Error getting version from search params", e)
        }
        if (document.getElementById("vturb-smartplayer-js"))
            return;
        n = document.createElement("script"),
        i = "https://scripts.converteai.net/lib/js/smartplayer-wcc/" + r;
        try {
            a = s.get("playerHost"),
            a && (i = decodeURIComponent(a))
        } catch (e) {
            console.error("error getting playerHost from search params", e)
        }
        n.src = i + "/smartplayer.js",
        n.id = "vturb-smartplayer-js",
        n.fetchPriority = "high",
        document.head.appendChild(n)
    }
    ,
    e.setupPlayerElement = function(n) {
        if (t.id = "vid-" + n.id,
        !t) {
            t = document.createElement("vturb-smartplayer"),
            t.id = "vid-" + n.id;
            var s = document.currentScript;
            s.parentNode.tagName.toLowerCase() === "head" ? document.body.insertBefore(t, document.body.firstChild) : s.parentNode.insertBefore(t, s)
        }
        t.setAttribute("original-id", t.id),
        n.playerInit.verticalVideo ? t.style.maxWidth = window.innerWidth <= 450 ? "100%" : "400px" : t.style.maxWidth = null,
        t.style.display = "block",
        t.style.margin = "0 auto",
        t.style.width = "100%",
        t.start = function(n) {
            t.setup ? t.setup(n) : this._setup = n
        }
    }
    ,
    e.checkItem = function(e) {
        return e.config && e.config.id && e.config.video
    }
    ,
    e.anyConfig = function(t) {
        if (e.checkItem(t))
            return t.config;
        if (t.children)
            for (var s, n = 0; n < t.children.length; n++)
                if (s = e.anyConfig(t.children[n]),
                s)
                    return s;
        return null
    }
    ,
    e.validAnyConfig = e.anyConfig(e.config),
    e.disableNext = !1,
    e.next = function(t) {
        if (e.disableNext)
            return;
        if (t.fn && e[t.fn] && t.children)
            e[t.fn](t.id, t.children, e.next);
        else if (e.checkItem(t))
            e.mount(t.config);
        else
            throw e.mount(e.validAnyConfig),
            new Error("No valid config found using next function");
        return t
    }
    ,
    e.run = function() {
        if (!e.validAnyConfig)
            throw new Error("No valid config found using anyConfig function");
        try {
            e.next(e.config)
        } catch (t) {
            console.error(t),
            e.mount(e.validAnyConfig)
        }
        setTimeout(function() {
            e.mounted || e.mount(e.validAnyConfig)
        }, 3e3)
    }
    ,
    e.mount = function(n) {
        if (e.mounted) {
            console.warn("Player already mounted");
            return
        }
        e.mounted = !0,
        e.disableNext = !0,
        e.preload(n),
        e.setupPlayerElement(n),
        e.loadSmartPlayer(n.playerVersion || "v4"),
        t.start(n)
    }
    ,
    e.run()
}()
