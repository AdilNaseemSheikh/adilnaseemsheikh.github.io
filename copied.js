(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 11659, e => {
  "use strict";
  var t = e.i(43476)
    , r = e.i(71645);
  e.s(["default", 0, function() {
      let e = (0,
      r.useRef)(null)
        , a = (0,
      r.useRef)({
          x: 0,
          y: 0
      })
        , i = (0,
      r.useRef)({
          x: 0,
          y: 0
      })
        , n = (0,
      r.useRef)(null);
      return (0,
      r.useEffect)( () => {
          let t = e.current;
          if (!t)
              return;
          let r = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            , s = window.matchMedia("(pointer: coarse)").matches;
          if (r || s)
              return;
          let l = () => {
              i.current.x += (a.current.x - i.current.x) * .06,
              i.current.y += (a.current.y - i.current.y) * .06,
              t.style.setProperty("--bg-parallax-x", `${i.current.x.toFixed(2)}px`),
              t.style.setProperty("--bg-parallax-y", `${i.current.y.toFixed(2)}px`),
              n.current = requestAnimationFrame(l)
          }
            , o = e => {
              let t = (e.clientX / window.innerWidth - .5) * 2
                , r = (e.clientY / window.innerHeight - .5) * 2;
              a.current.x = 18 * t,
              a.current.y = 12 * r
          }
          ;
          return n.current = requestAnimationFrame(l),
          window.addEventListener("pointermove", o, {
              passive: !0
          }),
          () => {
              window.removeEventListener("pointermove", o),
              null !== n.current && cancelAnimationFrame(n.current)
          }
      }
      , []),
      (0,
      t.jsxs)("div", {
          ref: e,
          className: "ambient-bg",
          "aria-hidden": "true",
          children: [(0,
          t.jsx)("div", {
              className: "ambient-bg__base"
          }), (0,
          t.jsx)("div", {
              className: "ambient-bg__grid"
          }), (0,
          t.jsx)("div", {
              className: "ambient-bg__dots"
          }), (0,
          t.jsx)("div", {
              className: "ambient-bg__mesh"
          }), (0,
          t.jsx)("div", {
              className: "ambient-bg__orb ambient-bg__orb--a"
          }), (0,
          t.jsx)("div", {
              className: "ambient-bg__orb ambient-bg__orb--b"
          }), (0,
          t.jsx)("div", {
              className: "ambient-bg__orb ambient-bg__orb--c"
          }), (0,
          t.jsxs)("div", {
              className: "ambient-bg__shapes",
              children: [(0,
              t.jsx)("span", {
                  className: "ambient-bg__ring ambient-bg__ring--1"
              }), (0,
              t.jsx)("span", {
                  className: "ambient-bg__ring ambient-bg__ring--2"
              }), (0,
              t.jsx)("span", {
                  className: "ambient-bg__blob ambient-bg__blob--1"
              }), (0,
              t.jsx)("span", {
                  className: "ambient-bg__blob ambient-bg__blob--2"
              })]
          }), (0,
          t.jsxs)("div", {
              className: "ambient-bg__glyphs",
              children: [(0,
              t.jsx)("span", {
                  className: "ambient-bg__glyph ambient-bg__glyph--1",
                  children: "{}"
              }), (0,
              t.jsx)("span", {
                  className: "ambient-bg__glyph ambient-bg__glyph--2",
                  children: "</>"
              }), (0,
              t.jsx)("span", {
                  className: "ambient-bg__glyph ambient-bg__glyph--3",
                  children: ";"
              }), (0,
              t.jsx)("span", {
                  className: "ambient-bg__glyph ambient-bg__glyph--4",
                  children: "()"
              }), (0,
              t.jsx)("span", {
                  className: "ambient-bg__glyph ambient-bg__glyph--5",
                  children: "[]"
              })]
          }), (0,
          t.jsx)("div", {
              className: "ambient-bg__vignette"
          })]
      })
  }
  ])
}
, 63971, e => {
  "use strict";
  var t = e.i(43476)
    , r = e.i(71645);
  function a({variant: e}) {
      return (0,
      t.jsxs)("div", {
          "aria-hidden": "true",
          className: `section-atmosphere section-atmosphere--${e}`,
          children: [(0,
          t.jsx)("div", {
              className: "section-atmosphere__glow"
          }), (0,
          t.jsx)("div", {
              className: "section-atmosphere__pattern"
          }), "hero" === e || "skills" === e || "projects" === e ? (0,
          t.jsx)("div", {
              className: "section-atmosphere__scan"
          }) : null]
      })
  }
  let i = "asiyanoreen666@gmail.com"
    , n = {
      name: "",
      email: "",
      message: ""
  };
  e.s(["default", 0, function() {
      let e = (0,
      r.useId)()
        , s = `${e}-name`
        , l = `${e}-email`
        , o = `${e}-message`
        , c = `${e}-status`
        , [d,u] = (0,
      r.useState)(n)
        , [m,p] = (0,
      r.useState)({})
        , [h,f] = (0,
      r.useState)(null);
      function x(e, t) {
          u(r => ({
              ...r,
              [e]: t
          })),
          p(t => {
              if (!t[e])
                  return t;
              let r = {
                  ...t
              };
              return delete r[e],
              r
          }
          ),
          f(null)
      }
      let g = "mt-2 w-full rounded-[var(--radius-md)] border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-[border-color,background-color] duration-[var(--duration-base)] ease-[var(--ease-out)] placeholder:text-muted-foreground hover:border-[color-mix(in_srgb,var(--border)_55%,var(--accent))] focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none";
      return (0,
      t.jsxs)("section", {
          id: "contact",
          "aria-labelledby": "contact-heading",
          className: "section-site relative overflow-hidden scroll-mt-[var(--header-height)]",
          children: [(0,
          t.jsx)(a, {
              variant: "contact"
          }), (0,
          t.jsxs)("div", {
              className: "container-site relative z-[1] grid items-start gap-10 lg:grid-cols-2 lg:gap-16",
              children: [(0,
              t.jsxs)("div", {
                  className: "max-w-xl",
                  children: [(0,
                  t.jsx)("p", {
                      className: "mb-3 font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase",
                      children: "Contact"
                  }), (0,
                  t.jsx)("h2", {
                      id: "contact-heading",
                      className: "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
                      children: "Let's Build Something Together"
                  }), (0,
                  t.jsx)("p", {
                      className: "mt-4 text-base leading-relaxed text-muted",
                      children: "I'm open to discussing mobile app development opportunities, freelance projects, and interesting product ideas."
                  }), (0,
                  t.jsxs)("ul", {
                      className: "mt-8 space-y-4",
                      children: [(0,
                      t.jsxs)("li", {
                          children: [(0,
                          t.jsx)("p", {
                              className: "font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase",
                              children: "Email"
                          }), (0,
                          t.jsx)("a", {
                              href: `mailto:${i}`,
                              className: "mt-1 inline-block text-base text-foreground transition-colors duration-[var(--duration-base)] hover:text-accent motion-reduce:transition-none",
                              children: i
                          })]
                      }), (0,
                      t.jsxs)("li", {
                          children: [(0,
                          t.jsx)("p", {
                              className: "font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase",
                              children: "LinkedIn"
                          }), (0,
                          t.jsxs)("a", {
                              href: "https://www.linkedin.com/in/asiya-noreen-815b292a7/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "mt-1 inline-block text-base text-foreground transition-colors duration-[var(--duration-base)] hover:text-accent motion-reduce:transition-none",
                              children: ["linkedin.com/in/asiya-noreen", (0,
                              t.jsx)("span", {
                                  className: "sr-only",
                                  children: " (opens in a new tab)"
                              })]
                          })]
                      })]
                  })]
              }), (0,
              t.jsxs)("div", {
                  className: "card-surface p-5 sm:p-7",
                  children: [(0,
                  t.jsx)("h3", {
                      className: "text-lg font-semibold tracking-tight text-foreground",
                      children: "Send a message"
                  }), (0,
                  t.jsx)("p", {
                      className: "mt-2 text-sm leading-relaxed text-muted",
                      children: "Fill out the form below. Backend email delivery is not set up yet, so use the email link if you need a direct reply right away."
                  }), (0,
                  t.jsxs)("form", {
                      className: "mt-6 space-y-5",
                      onSubmit: function(e) {
                          let t;
                          e.preventDefault();
                          let r = (t = {},
                          d.name.trim() || (t.name = "Please enter your name."),
                          d.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()) || (t.email = "Please enter a valid email address.") : t.email = "Please enter your email.",
                          d.message.trim() || (t.message = "Please enter a message."),
                          t);
                          (p(r),
                          Object.keys(r).length > 0) ? f(null) : f("Thanks for your message. Form delivery is not connected yet — please email me directly at asiyanoreen666@gmail.com for now.")
                      },
                      noValidate: !0,
                      "aria-describedby": h ? c : void 0,
                      children: [(0,
                      t.jsxs)("div", {
                          children: [(0,
                          t.jsx)("label", {
                              htmlFor: s,
                              className: "block text-sm font-medium text-foreground",
                              children: "Name"
                          }), (0,
                          t.jsx)("input", {
                              id: s,
                              name: "name",
                              type: "text",
                              autoComplete: "name",
                              required: !0,
                              value: d.name,
                              onChange: e => x("name", e.target.value),
                              "aria-invalid": !!m.name,
                              "aria-describedby": m.name ? `${s}-error` : void 0,
                              className: g,
                              placeholder: "Your name"
                          }), m.name ? (0,
                          t.jsx)("p", {
                              id: `${s}-error`,
                              role: "alert",
                              className: "mt-1.5 text-sm text-accent",
                              children: m.name
                          }) : null]
                      }), (0,
                      t.jsxs)("div", {
                          children: [(0,
                          t.jsx)("label", {
                              htmlFor: l,
                              className: "block text-sm font-medium text-foreground",
                              children: "Email"
                          }), (0,
                          t.jsx)("input", {
                              id: l,
                              name: "email",
                              type: "email",
                              autoComplete: "email",
                              required: !0,
                              value: d.email,
                              onChange: e => x("email", e.target.value),
                              "aria-invalid": !!m.email,
                              "aria-describedby": m.email ? `${l}-error` : void 0,
                              className: g,
                              placeholder: "you@example.com"
                          }), m.email ? (0,
                          t.jsx)("p", {
                              id: `${l}-error`,
                              role: "alert",
                              className: "mt-1.5 text-sm text-accent",
                              children: m.email
                          }) : null]
                      }), (0,
                      t.jsxs)("div", {
                          children: [(0,
                          t.jsx)("label", {
                              htmlFor: o,
                              className: "block text-sm font-medium text-foreground",
                              children: "Message"
                          }), (0,
                          t.jsx)("textarea", {
                              id: o,
                              name: "message",
                              rows: 5,
                              required: !0,
                              value: d.message,
                              onChange: e => x("message", e.target.value),
                              "aria-invalid": !!m.message,
                              "aria-describedby": m.message ? `${o}-error` : void 0,
                              className: `${g} min-h-[8.5rem] resize-y`,
                              placeholder: "Tell me a bit about your project or opportunity"
                          }), m.message ? (0,
                          t.jsx)("p", {
                              id: `${o}-error`,
                              role: "alert",
                              className: "mt-1.5 text-sm text-accent",
                              children: m.message
                          }) : null]
                      }), (0,
                      t.jsx)("button", {
                          type: "submit",
                          className: "btn-primary w-full sm:w-auto",
                          children: "Submit"
                      }), h ? (0,
                      t.jsx)("p", {
                          id: c,
                          role: "status",
                          "aria-live": "polite",
                          className: "rounded-[var(--radius-md)] border border-border bg-background px-3.5 py-3 text-sm leading-relaxed text-muted",
                          children: h
                      }) : null]
                  })]
              })]
          })]
      })
  }
  ], 63971)
}
, 98879, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "default", {
      enumerable: !0,
      get: function() {
          return l
      }
  });
  let a = e.r(71645)
    , i = "u" < typeof window
    , n = i ? () => {}
  : a.useLayoutEffect
    , s = i ? () => {}
  : a.useEffect;
  function l(e) {
      let {headManager: t, reduceComponentsToState: r} = e;
      function l() {
          if (t && t.mountedInstances) {
              let e = a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
              t.updateHead(r(e))
          }
      }
      return i && (t?.mountedInstances?.add(e.children),
      l()),
      n( () => (t?.mountedInstances?.add(e.children),
      () => {
          t?.mountedInstances?.delete(e.children)
      }
      )),
      n( () => (t && (t._pendingUpdate = l),
      () => {
          t && (t._pendingUpdate = l)
      }
      )),
      s( () => (t && t._pendingUpdate && (t._pendingUpdate(),
      t._pendingUpdate = null),
      () => {
          t && t._pendingUpdate && (t._pendingUpdate(),
          t._pendingUpdate = null)
      }
      )),
      null
  }
}
, 25633, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  });
  var a = {
      default: function() {
          return f
      },
      defaultHead: function() {
          return u
      }
  };
  for (var i in a)
      Object.defineProperty(r, i, {
          enumerable: !0,
          get: a[i]
      });
  let n = e.r(55682)
    , s = e.r(90809)
    , l = e.r(43476)
    , o = s._(e.r(71645))
    , c = n._(e.r(98879))
    , d = e.r(42732);
  function u() {
      return [(0,
      l.jsx)("meta", {
          charSet: "utf-8"
      }, "charset"), (0,
      l.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
      }, "viewport")]
  }
  function m(e, t) {
      return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
  }
  e.r(33525);
  let p = ["name", "httpEquiv", "charSet", "itemProp"];
  function h(e) {
      let t, r, a, i;
      return e.reduce(m, []).reverse().concat(u().reverse()).filter((t = new Set,
      r = new Set,
      a = new Set,
      i = {},
      e => {
          let n = !0
            , s = !1;
          if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              s = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? n = !1 : t.add(r)
          }
          switch (e.type) {
          case "title":
          case "base":
              r.has(e.type) ? n = !1 : r.add(e.type);
              break;
          case "meta":
              for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                      if ("charSet" === r)
                          a.has(r) ? n = !1 : a.add(r);
                      else {
                          let t = e.props[r]
                            , a = i[r] || new Set;
                          ("name" !== r || !s) && a.has(t) ? n = !1 : (a.add(t),
                          i[r] = a)
                      }
              }
          }
          return n
      }
      )).reverse().map( (e, t) => {
          let r = e.key || t;
          return o.default.cloneElement(e, {
              key: r
          })
      }
      )
  }
  let f = function({children: e}) {
      let t = (0,
      o.useContext)(d.HeadManagerContext);
      return (0,
      l.jsx)(c.default, {
          reduceComponentsToState: h,
          headManager: t,
          children: e
      })
  };
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
      value: !0
  }),
  Object.assign(r.default, r),
  t.exports = r.default)
}
, 88143, (e, t, r) => {
  "use strict";
  function a({widthInt: e, heightInt: t, blurWidth: r, blurHeight: i, blurDataURL: n, objectFit: s}) {
      let l = r ? 40 * r : e
        , o = i ? 40 * i : t
        , c = l && o ? `viewBox='0 0 ${l} ${o}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
  }
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "getImageBlurSvg", {
      enumerable: !0,
      get: function() {
          return a
      }
  })
}
, 87690, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  });
  var a = {
      VALID_LOADERS: function() {
          return n
      },
      imageConfigDefault: function() {
          return s
      }
  };
  for (var i in a)
      Object.defineProperty(r, i, {
          enumerable: !0,
          get: a[i]
      });
  let n = ["default", "imgix", "cloudinary", "akamai", "custom"]
    , s = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: !1,
      minimumCacheTTL: 14400,
      formats: ["image/webp"],
      maximumDiskCacheSize: void 0,
      maximumRedirects: 3,
      maximumResponseBody: 5e7,
      dangerouslyAllowLocalIP: !1,
      dangerouslyAllowSVG: !1,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: [75],
      unoptimized: !1,
      customCacheHandler: !1
  }
}
, 8927, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "getImgProps", {
      enumerable: !0,
      get: function() {
          return c
      }
  }),
  e.r(33525);
  let a = e.r(43369)
    , i = e.r(88143)
    , n = e.r(87690)
    , s = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function l(e) {
      return void 0 !== e.default
  }
  function o(e) {
      return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
  }
  function c({src: e, sizes: t, unoptimized: r=!1, priority: d=!1, preload: u=!1, loading: m, className: p, quality: h, width: f, height: x, fill: g=!1, style: b, overrideSrc: y, onLoad: v, onLoadingComplete: j, placeholder: _="empty", blurDataURL: w, fetchPriority: N, decoding: k="async", layout: M, objectFit: S, objectPosition: C, lazyBoundary: P, lazyRoot: E, ...$}, R) {
      var O;
      let z, I, L, {imgConf: A, showAltText: F, blurComplete: D, defaultLoader: X} = R, T = A || n.imageConfigDefault;
      if ("allSizes"in T)
          z = T;
      else {
          let e = [...T.deviceSizes, ...T.imageSizes].sort( (e, t) => e - t)
            , t = T.deviceSizes.sort( (e, t) => e - t)
            , r = T.qualities?.sort( (e, t) => e - t);
          z = {
              ...T,
              allSizes: e,
              deviceSizes: t,
              qualities: r
          }
      }
      if (void 0 === X)
          throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
              value: "E163",
              enumerable: !1,
              configurable: !0
          });
      let Y = $.loader || X;
      delete $.loader,
      delete $.srcSet;
      let q = "__next_img_default"in Y;
      if (q) {
          if ("custom" === z.loader)
              throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                  value: "E252",
                  enumerable: !1,
                  configurable: !0
              })
      } else {
          let e = Y;
          Y = t => {
              let {config: r, ...a} = t;
              return e(a)
          }
      }
      if (M) {
          "fill" === M && (g = !0);
          let e = {
              intrinsic: {
                  maxWidth: "100%",
                  height: "auto"
              },
              responsive: {
                  width: "100%",
                  height: "auto"
              }
          }[M];
          e && (b = {
              ...b,
              ...e
          });
          let r = {
              responsive: "100vw",
              fill: "100vw"
          }[M];
          r && !t && (t = r)
      }
      let H = ""
        , B = o(f)
        , U = o(x);
      if ((O = e) && "object" == typeof O && (l(O) || void 0 !== O.src)) {
          let t = l(e) ? e.default : e;
          if (!t.src)
              throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                  value: "E460",
                  enumerable: !1,
                  configurable: !0
              });
          if (!t.height || !t.width)
              throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                  value: "E48",
                  enumerable: !1,
                  configurable: !0
              });
          if (I = t.blurWidth,
          L = t.blurHeight,
          w = w || t.blurDataURL,
          H = t.src,
          !g)
              if (B || U) {
                  if (B && !U) {
                      let e = B / t.width;
                      U = Math.round(t.height * e)
                  } else if (!B && U) {
                      let e = U / t.height;
                      B = Math.round(t.width * e)
                  }
              } else
                  B = t.width,
                  U = t.height
      }
      let V = !d && !u && ("lazy" === m || void 0 === m);
      (!(e = "string" == typeof e ? e : H) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
      V = !1),
      z.unoptimized && (r = !0),
      q && !z.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
      let W = o(h)
        , G = Object.assign(g ? {
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit: S,
          objectPosition: C
      } : {}, F ? {} : {
          color: "transparent"
      }, b)
        , Z = D || "empty" === _ ? null : "blur" === _ ? `url("data:image/svg+xml;charset=utf-8,${(0,
      i.getImageBlurSvg)({
          widthInt: B,
          heightInt: U,
          blurWidth: I,
          blurHeight: L,
          blurDataURL: w || "",
          objectFit: G.objectFit
      })}")` : `url("${_}")`
        , J = s.includes(G.objectFit) ? "fill" === G.objectFit ? "100% 100%" : "cover" : G.objectFit
        , K = Z ? {
          backgroundSize: J,
          backgroundPosition: G.objectPosition || "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundImage: Z
      } : {}
        , Q = function({config: e, src: t, unoptimized: r, width: i, quality: n, sizes: s, loader: l}) {
          if (r) {
              if (t.startsWith("/") && !t.startsWith("//")) {
                  let e = (0,
                  a.getDeploymentId)();
                  if (e) {
                      let r = t.indexOf("?");
                      if (-1 !== r) {
                          let a = new URLSearchParams(t.slice(r + 1));
                          a.get("dpl") || (a.append("dpl", e),
                          t = t.slice(0, r) + "?" + a.toString())
                      } else
                          t += `?dpl=${e}`
                  }
              }
              return {
                  src: t,
                  srcSet: void 0,
                  sizes: void 0
              }
          }
          let {widths: o, kind: c} = function({deviceSizes: e, allSizes: t}, r, a) {
              if (a) {
                  let r = /(^|\s)(1?\d?\d)vw/g
                    , i = [];
                  for (let e; e = r.exec(a); )
                      i.push(parseInt(e[2]));
                  if (i.length) {
                      let r = .01 * Math.min(...i);
                      return {
                          widths: t.filter(t => t >= e[0] * r),
                          kind: "w"
                      }
                  }
                  return {
                      widths: t,
                      kind: "w"
                  }
              }
              return "number" != typeof r ? {
                  widths: e,
                  kind: "w"
              } : {
                  widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                  kind: "x"
              }
          }(e, i, s)
            , d = o.length - 1;
          return {
              sizes: s || "w" !== c ? s : "100vw",
              srcSet: o.map( (r, a) => `${l({
                  config: e,
                  src: t,
                  quality: n,
                  width: r
              })} ${"w" === c ? r : a + 1}${c}`).join(", "),
              src: l({
                  config: e,
                  src: t,
                  quality: n,
                  width: o[d]
              })
          }
      }({
          config: z,
          src: e,
          unoptimized: r,
          width: B,
          quality: W,
          sizes: t,
          loader: Y
      })
        , ee = V ? "lazy" : m;
      return {
          props: {
              ...$,
              loading: ee,
              fetchPriority: N,
              width: B,
              height: U,
              decoding: k,
              className: p,
              style: {
                  ...G,
                  ...K
              },
              sizes: Q.sizes,
              srcSet: Q.srcSet,
              src: y || Q.src
          },
          meta: {
              unoptimized: r,
              preload: u || d,
              placeholder: _,
              fill: g
          }
      }
  }
}
, 18556, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
          return n
      }
  });
  let a = e.r(55682)._(e.r(71645))
    , i = e.r(87690)
    , n = a.default.createContext(i.imageConfigDefault)
}
, 65856, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "RouterContext", {
      enumerable: !0,
      get: function() {
          return a
      }
  });
  let a = e.r(55682)._(e.r(71645)).default.createContext(null)
}
, 70965, (e, t, r) => {
  "use strict";
  function a(e, t) {
      let r = e || 75;
      return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
  }
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "findClosestQuality", {
      enumerable: !0,
      get: function() {
          return a
      }
  })
}
, 1948, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "default", {
      enumerable: !0,
      get: function() {
          return s
      }
  });
  let a = e.r(70965)
    , i = e.r(43369);
  function n({config: e, src: t, width: r, quality: s}) {
      let l = (0,
      i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
          let e = t.indexOf("?");
          if (-1 !== e) {
              let r = new URLSearchParams(t.slice(e + 1))
                , a = r.get("dpl");
              if (a) {
                  l = a,
                  r.delete("dpl");
                  let i = r.toString();
                  t = t.slice(0, e) + (i ? "?" + i : "")
              }
          }
      }
      if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
          throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
              value: "E871",
              enumerable: !1,
              configurable: !0
          });
      let o = (0,
      a.findClosestQuality)(s, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`
  }
  n.__next_img_default = !0;
  let s = n
}
, 18581, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "useMergedRef", {
      enumerable: !0,
      get: function() {
          return i
      }
  });
  let a = e.r(71645);
  function i(e, t) {
      let r = (0,
      a.useRef)(null)
        , i = (0,
      a.useRef)(null);
      return (0,
      a.useCallback)(a => {
          if (null === a) {
              let e = r.current;
              e && (r.current = null,
              e());
              let t = i.current;
              t && (i.current = null,
              t())
          } else
              e && (r.current = n(e, a)),
              t && (i.current = n(t, a))
      }
      , [e, t])
  }
  function n(e, t) {
      if ("function" != typeof e)
          return e.current = t,
          () => {
              e.current = null
          }
          ;
      {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null)
      }
  }
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
      value: !0
  }),
  Object.assign(r.default, r),
  t.exports = r.default)
}
, 5500, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  }),
  Object.defineProperty(r, "Image", {
      enumerable: !0,
      get: function() {
          return v
      }
  });
  let a = e.r(55682)
    , i = e.r(90809)
    , n = e.r(43476)
    , s = i._(e.r(71645))
    , l = a._(e.r(74080))
    , o = a._(e.r(25633))
    , c = e.r(8927)
    , d = e.r(87690)
    , u = e.r(18556);
  e.r(33525);
  let m = e.r(65856)
    , p = a._(e.r(1948))
    , h = e.r(18581)
    , f = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      qualities: [75],
      path: "/_next/image",
      loader: "default",
      dangerouslyAllowSVG: !1,
      unoptimized: !1
  };
  function x(e, t, r, a, i, n, s) {
      let l = e?.src;
      e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
      ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
      ).then( () => {
          if (e.parentElement && e.isConnected) {
              if ("empty" !== t && i(!0),
              r?.current) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                      writable: !1,
                      value: e
                  });
                  let a = !1
                    , i = !1;
                  r.current({
                      ...t,
                      nativeEvent: t,
                      currentTarget: e,
                      target: e,
                      isDefaultPrevented: () => a,
                      isPropagationStopped: () => i,
                      persist: () => {}
                      ,
                      preventDefault: () => {
                          a = !0,
                          t.preventDefault()
                      }
                      ,
                      stopPropagation: () => {
                          i = !0,
                          t.stopPropagation()
                      }
                  })
              }
              a?.current && a.current(e)
          }
      }
      ))
  }
  function g(e) {
      return s.use ? {
          fetchPriority: e
      } : {
          fetchpriority: e
      }
  }
  "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  let b = (0,
  s.forwardRef)( ({src: e, srcSet: t, sizes: r, height: a, width: i, decoding: l, className: o, style: c, fetchPriority: d, placeholder: u, loading: m, unoptimized: p, fill: f, onLoadRef: b, onLoadingCompleteRef: y, setBlurComplete: v, setShowAltText: j, sizesInput: _, onLoad: w, onError: N, ...k}, M) => {
      let S = (0,
      s.useCallback)(e => {
          e && (N && (e.src = e.src),
          e.complete && x(e, u, b, y, v, p, _))
      }
      , [e, u, b, y, v, N, p, _])
        , C = (0,
      h.useMergedRef)(M, S);
      return (0,
      n.jsx)("img", {
          ...k,
          ...g(d),
          loading: m,
          width: i,
          height: a,
          decoding: l,
          "data-nimg": f ? "fill" : "1",
          className: o,
          style: c,
          sizes: r,
          srcSet: t,
          src: e,
          ref: C,
          onLoad: e => {
              x(e.currentTarget, u, b, y, v, p, _)
          }
          ,
          onError: e => {
              j(!0),
              "empty" !== u && v(!0),
              N && N(e)
          }
      })
  }
  );
  function y({isAppRouter: e, imgAttributes: t}) {
      let r = {
          as: "image",
          imageSrcSet: t.srcSet,
          imageSizes: t.sizes,
          crossOrigin: t.crossOrigin,
          referrerPolicy: t.referrerPolicy,
          ...g(t.fetchPriority)
      };
      return e && l.default.preload ? (l.default.preload(t.src, r),
      null) : (0,
      n.jsx)(o.default, {
          children: (0,
          n.jsx)("link", {
              rel: "preload",
              href: t.srcSet ? void 0 : t.src,
              ...r
          }, "__nimg-" + t.src + t.srcSet + t.sizes)
      })
  }
  let v = (0,
  s.forwardRef)( (e, t) => {
      let r = (0,
      s.useContext)(m.RouterContext)
        , a = (0,
      s.useContext)(u.ImageConfigContext)
        , i = (0,
      s.useMemo)( () => {
          let e = f || a || d.imageConfigDefault
            , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
            , r = e.deviceSizes.sort( (e, t) => e - t)
            , i = e.qualities?.sort( (e, t) => e - t);
          return {
              ...e,
              allSizes: t,
              deviceSizes: r,
              qualities: i,
              localPatterns: "u" < typeof window ? a?.localPatterns : e.localPatterns
          }
      }
      , [a])
        , {onLoad: l, onLoadingComplete: o} = e
        , h = (0,
      s.useRef)(l);
      (0,
      s.useEffect)( () => {
          h.current = l
      }
      , [l]);
      let x = (0,
      s.useRef)(o);
      (0,
      s.useEffect)( () => {
          x.current = o
      }
      , [o]);
      let[g,v] = (0,
      s.useState)(!1)
        , [j,_] = (0,
      s.useState)(!1)
        , {props: w, meta: N} = (0,
      c.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: i,
          blurComplete: g,
          showAltText: j
      });
      return (0,
      n.jsxs)(n.Fragment, {
          children: [(0,
          n.jsx)(b, {
              ...w,
              unoptimized: N.unoptimized,
              placeholder: N.placeholder,
              fill: N.fill,
              onLoadRef: h,
              onLoadingCompleteRef: x,
              setBlurComplete: v,
              setShowAltText: _,
              sizesInput: e.sizes,
              ref: t
          }), N.preload ? (0,
          n.jsx)(y, {
              isAppRouter: !r,
              imgAttributes: w
          }) : null]
      })
  }
  );
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
      value: !0
  }),
  Object.assign(r.default, r),
  t.exports = r.default)
}
, 62319, e => {
  "use strict";
  var t = e.i(43476)
    , r = e.i(71645);
  let a = [{
      label: "Home",
      href: "#home"
  }, {
      label: "About",
      href: "#about"
  }, {
      label: "Skills",
      href: "#skills"
  }, {
      label: "Projects",
      href: "#projects"
  }, {
      label: "Experience",
      href: "#experience"
  }, {
      label: "Education",
      href: "#education"
  }, {
      label: "Contact",
      href: "#contact"
  }]
    , i = "/resume/Asiya-Noreen-Resume.pdf";
  e.s(["default", 0, function() {
      let[e,n] = (0,
      r.useState)(!1)
        , s = (0,
      r.useId)();
      (0,
      r.useEffect)( () => {
          if (!e)
              return;
          let t = e => {
              "Escape" === e.key && n(!1)
          }
          ;
          return document.addEventListener("keydown", t),
          () => document.removeEventListener("keydown", t)
      }
      , [e]),
      (0,
      r.useEffect)( () => (document.body.style.overflow = e ? "hidden" : "",
      () => {
          document.body.style.overflow = ""
      }
      ), [e]);
      let l = () => n(!1);
      return (0,
      t.jsxs)("header", {
          className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md",
          children: [(0,
          t.jsxs)("div", {
              className: "container-site flex h-[var(--header-height)] items-center justify-between gap-4",
              children: [(0,
              t.jsx)("a", {
                  href: "#home",
                  className: "shrink-0 text-[0.9375rem] font-semibold tracking-tight text-foreground transition-colors duration-[var(--duration-base)] hover:text-accent",
                  onClick: l,
                  children: "Asiya Noreen"
              }), (0,
              t.jsx)("nav", {
                  className: "hidden items-center gap-1 lg:flex",
                  "aria-label": "Primary",
                  children: a.map(e => (0,
                  t.jsx)("a", {
                      href: e.href,
                      className: "rounded-[var(--radius-md)] px-3 py-2 text-sm text-muted transition-colors duration-[var(--duration-base)] hover:text-foreground",
                      children: e.label
                  }, e.href))
              }), (0,
              t.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [(0,
                  t.jsx)("a", {
                      href: i,
                      download: !0,
                      className: "btn-primary hidden !px-3.5 !py-2 text-sm sm:inline-flex",
                      children: "Download Resume"
                  }), (0,
                  t.jsx)("button", {
                      type: "button",
                      className: "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border text-foreground transition-colors duration-[var(--duration-base)] hover:border-accent/40 hover:bg-accent-muted lg:hidden",
                      "aria-label": e ? "Close menu" : "Open menu",
                      "aria-expanded": e,
                      "aria-controls": s,
                      onClick: () => n(e => !e),
                      children: (0,
                      t.jsxs)("span", {
                          className: "relative block h-3.5 w-[1.125rem]",
                          "aria-hidden": "true",
                          children: [(0,
                          t.jsx)("span", {
                              className: `absolute left-0 top-0 block h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] ${e ? "translate-y-[6px] rotate-45" : ""}`
                          }), (0,
                          t.jsx)("span", {
                              className: `absolute left-0 top-[6px] block h-0.5 w-full rounded-full bg-current transition-opacity duration-[var(--duration-base)] ease-[var(--ease-out)] ${e ? "opacity-0" : "opacity-100"}`
                          }), (0,
                          t.jsx)("span", {
                              className: `absolute left-0 top-[12px] block h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] ${e ? "-translate-y-[6px] -rotate-45" : ""}`
                          })]
                      })
                  })]
              })]
          }), (0,
          t.jsx)("div", {
              id: s,
              className: `bg-background transition-[max-height,opacity] duration-[var(--duration-slow)] ease-[var(--ease-out)] lg:hidden ${e ? "max-h-96 border-b border-border opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0"}`,
              inert: !e || void 0,
              "aria-hidden": !e,
              children: (0,
              t.jsxs)("nav", {
                  className: "container-site flex flex-col gap-1 py-4",
                  "aria-label": "Mobile",
                  children: [a.map(e => (0,
                  t.jsx)("a", {
                      href: e.href,
                      className: "rounded-[var(--radius-md)] px-3 py-2.5 text-sm text-muted transition-colors duration-[var(--duration-base)] hover:bg-surface hover:text-foreground",
                      onClick: l,
                      children: e.label
                  }, e.href)), (0,
                  t.jsx)("a", {
                      href: i,
                      download: !0,
                      className: "btn-primary mt-2 w-full sm:hidden",
                      onClick: l,
                      children: "Download Resume"
                  })]
              })
          })]
      })
  }
  ])
}
, 94909, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
      value: !0
  });
  var a = {
      default: function() {
          return d
      },
      getImageProps: function() {
          return c
      }
  };
  for (var i in a)
      Object.defineProperty(r, i, {
          enumerable: !0,
          get: a[i]
      });
  let n = e.r(55682)
    , s = e.r(8927)
    , l = e.r(5500)
    , o = n._(e.r(1948));
  function c(e) {
      let {props: t} = (0,
      s.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [32, 48, 64, 96, 128, 256, 384],
              qualities: [75],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1
          }
      });
      for (let[e,r] of Object.entries(t))
          void 0 === r && delete t[e];
      return {
          props: t
      }
  }
  let d = l.Image
}
, 57688, (e, t, r) => {
  t.exports = e.r(94909)
}
, 25344, e => {
  "use strict";
  var t = e.i(43476)
    , r = e.i(57688);
  e.s(["default", 0, function({src: e, alt: a, priority: i=!1, className: n="", floatDelay: s="0s"}) {
      return (0,
      t.jsxs)("div", {
          className: `phone-mockup ${n}`.trim(),
          style: {
              "--phone-float-delay": s
          },
          children: [(0,
          t.jsx)("div", {
              className: "phone-mockup__glass",
              "aria-hidden": "true"
          }), (0,
          t.jsxs)("div", {
              className: "phone-mockup__bezel",
              children: [(0,
              t.jsx)("div", {
                  className: "phone-mockup__notch",
                  "aria-hidden": "true"
              }), (0,
              t.jsx)("div", {
                  className: "phone-mockup__screen",
                  children: (0,
                  t.jsx)(r.default, {
                      src: e,
                      alt: a,
                      fill: !0,
                      sizes: "(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 220px",
                      className: "object-contain object-center",
                      loading: i ? void 0 : "lazy",
                      priority: i
                  })
              }), (0,
              t.jsx)("div", {
                  className: "phone-mockup__home",
                  "aria-hidden": "true"
              })]
          })]
      })
  }
  ])
}
, 90192, e => {
  "use strict";
  var t = e.i(43476)
    , r = e.i(71645)
    , a = e.i(25344);
  e.s(["default", 0, function({screenshots: e, title: i}) {
      var n, s;
      let l = (0,
      r.useId)()
        , o = (0,
      r.useRef)(null)
        , [c,d] = (0,
      r.useState)(0)
        , [u,m] = (0,
      r.useState)(!1)
        , [p,h] = (0,
      r.useState)("next")
        , f = (0,
      r.useRef)(!1);
      (0,
      r.useEffect)( () => {
          f.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          let e = o.current;
          if (!e)
              return;
          let t = new IntersectionObserver( ([e]) => {
              e?.isIntersecting && (m(!0),
              t.disconnect())
          }
          ,{
              threshold: .25
          });
          return t.observe(e),
          () => t.disconnect()
      }
      , []);
      let x = (0,
      r.useCallback)( (t, r) => {
          var a;
          h(r),
          d((t % (a = e.length) + a) % a)
      }
      , [e.length])
        , g = (0,
      r.useCallback)( () => {
          x(c - 1, "prev")
      }
      , [c, x])
        , b = (0,
      r.useCallback)( () => {
          x(c + 1, "next")
      }
      , [c, x]);
      if ((0,
      r.useEffect)( () => {
          if (!u || f.current || e.length < 2)
              return;
          let t = window.setInterval( () => {
              h("next"),
              d(t => {
                  var r;
                  return ((t + 1) % (r = e.length) + r) % r
              }
              )
          }
          , 4200);
          return () => window.clearInterval(t)
      }
      , [u, e.length]),
      0 === e.length)
          return null;
      let y = ((c - 1) % (n = e.length) + n) % n
        , v = ((c + 1) % (s = e.length) + s) % s
        , j = 1 === e.length ? [{
          shot: e[0],
          slot: "center",
          index: 0
      }] : 2 === e.length ? [{
          shot: e[c],
          slot: "center",
          index: c
      }, {
          shot: e[v],
          slot: "right",
          index: v
      }] : [{
          shot: e[y],
          slot: "left",
          index: y
      }, {
          shot: e[c],
          slot: "center",
          index: c
      }, {
          shot: e[v],
          slot: "right",
          index: v
      }];
      return (0,
      t.jsxs)("div", {
          ref: o,
          className: `app-showcase${u ? " app-showcase--visible" : ""}`,
          "aria-labelledby": l,
          children: [(0,
          t.jsxs)("p", {
              id: l,
              className: "sr-only",
              children: [i, " application screenshots"]
          }), (0,
          t.jsx)("div", {
              className: `app-showcase__stage app-showcase__stage--${p}`,
              "aria-live": "polite",
              children: j.map( ({shot: e, slot: r, index: i}) => (0,
              t.jsx)("button", {
                  type: "button",
                  className: `app-showcase__phone app-showcase__phone--${r}`,
                  onClick: () => {
                      "left" === r && g(),
                      "right" === r && b()
                  }
                  ,
                  "aria-label": "center" === r ? e.alt : `Show ${e.alt}`,
                  tabIndex: "center" === r ? -1 : 0,
                  children: (0,
                  t.jsx)(a.default, {
                      src: e.src,
                      alt: e.alt,
                      priority: "center" === r && i === c,
                      floatDelay: "left" === r ? "0s" : "center" === r ? "-1.2s" : "-2.4s",
                      className: "center" === r ? "phone-mockup--active" : "phone-mockup--side"
                  })
              }, `${e.src}-${r}`))
          }), e.length > 1 ? (0,
          t.jsxs)("div", {
              className: "app-showcase__controls",
              children: [(0,
              t.jsx)("button", {
                  type: "button",
                  className: "app-showcase__nav",
                  onClick: g,
                  "aria-label": "Previous screenshot",
                  children: (0,
                  t.jsx)("span", {
                      "aria-hidden": "true",
                      children: "‹"
                  })
              }), (0,
              t.jsx)("div", {
                  className: "app-showcase__dots",
                  role: "tablist",
                  "aria-label": "Screenshots",
                  children: e.map( (e, r) => (0,
                  t.jsx)("button", {
                      type: "button",
                      role: "tab",
                      "aria-selected": r === c,
                      "aria-label": `Screenshot ${r + 1}: ${e.alt}`,
                      className: `app-showcase__dot${r === c ? " app-showcase__dot--active" : ""}`,
                      onClick: () => x(r, r > c ? "next" : "prev")
                  }, e.src))
              }), (0,
              t.jsx)("button", {
                  type: "button",
                  className: "app-showcase__nav",
                  onClick: b,
                  "aria-label": "Next screenshot",
                  children: (0,
                  t.jsx)("span", {
                      "aria-hidden": "true",
                      children: "›"
                  })
              })]
          }) : null]
      })
  }
  ])
}
, 10714, e => {
  "use strict";
  var t = e.i(43476)
    , r = e.i(71645)
    , a = e.i(25344);
  e.s(["default", 0, function({src: e, alt: i}) {
      let n = (0,
      r.useRef)(null)
        , [s,l] = (0,
      r.useState)(!1);
      return (0,
      r.useEffect)( () => {
          let e = n.current;
          if (!e)
              return;
          let t = new IntersectionObserver( ([e]) => {
              e?.isIntersecting && (l(!0),
              t.disconnect())
          }
          ,{
              threshold: .2
          });
          return t.observe(e),
          () => t.disconnect()
      }
      , []),
      (0,
      t.jsx)("div", {
          ref: n,
          className: `project-single-phone${s ? " project-single-phone--visible" : ""}`,
          children: (0,
          t.jsx)(a.default, {
              src: e,
              alt: i,
              className: "phone-mockup--active project-single-phone__device"
          })
      })
  }
  ])
}
, 94901, e => {
  "use strict";
  var t = e.i(43476)
    , r = e.i(71645);
  function a(e) {
      return {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": !0,
          ...e
      }
  }
  let i = [{
      id: "javascript",
      label: "JavaScript",
      x: 7,
      y: 14,
      size: 44,
      opacity: .22,
      depth: 2,
      duration: 17,
      delay: 0,
      driftX: 14,
      driftY: -18,
      rotate: !0,
      glow: !0,
      particles: !0,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2.5"
              }), (0,
              t.jsx)("path", {
                  d: "M10 8v7.2a1.8 1.8 0 0 1-3.2 1.1"
              }), (0,
              t.jsx)("path", {
                  d: "M14 12.5c.4-.7 1.1-1.1 2-1.1 1.2 0 2 .6 2 1.7 0 2.2-4 1.8-4 4.1 0 .7.6 1.3 1.6 1.3 1 0 1.7-.5 2.1-1.2"
              })]
          })
      }
  }, {
      id: "typescript",
      label: "TypeScript",
      x: 88,
      y: 16,
      size: 42,
      opacity: .2,
      depth: 2,
      duration: 19,
      delay: -3,
      driftX: -12,
      driftY: 16,
      rotate: !1,
      glow: !0,
      particles: !1,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2.5"
              }), (0,
              t.jsx)("path", {
                  d: "M7.5 10.5h9M12 10.5V18"
              }), (0,
              t.jsx)("path", {
                  d: "M15.2 14.2c.35-.45.95-.7 1.55-.7.95 0 1.55.5 1.55 1.25 0 1.7-3.1 1.35-3.1 3.15 0 .55.45 1 1.25 1 .8 0 1.35-.4 1.65-.95"
              })]
          })
      }
  }, {
      id: "react",
      label: "React",
      x: 14,
      y: 42,
      size: 52,
      opacity: .24,
      depth: 2,
      duration: 22,
      delay: -5,
      driftX: 18,
      driftY: -12,
      rotate: !0,
      glow: !0,
      particles: !0,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("circle", {
                  cx: "12",
                  cy: "12",
                  r: "2.1",
                  fill: "currentColor",
                  stroke: "none"
              }), (0,
              t.jsx)("ellipse", {
                  cx: "12",
                  cy: "12",
                  rx: "10",
                  ry: "3.8"
              }), (0,
              t.jsx)("ellipse", {
                  cx: "12",
                  cy: "12",
                  rx: "10",
                  ry: "3.8",
                  transform: "rotate(60 12 12)"
              }), (0,
              t.jsx)("ellipse", {
                  cx: "12",
                  cy: "12",
                  rx: "10",
                  ry: "3.8",
                  transform: "rotate(120 12 12)"
              })]
          })
      }
  }, {
      id: "react-native",
      label: "React Native",
      x: 82,
      y: 44,
      size: 48,
      opacity: .22,
      depth: 2,
      duration: 20,
      delay: -2,
      driftX: -16,
      driftY: 14,
      rotate: !0,
      glow: !0,
      particles: !0,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("rect", {
                  x: "8",
                  y: "2.5",
                  width: "8",
                  height: "19",
                  rx: "2"
              }), (0,
              t.jsx)("circle", {
                  cx: "12",
                  cy: "12",
                  r: "1.4",
                  fill: "currentColor",
                  stroke: "none"
              }), (0,
              t.jsx)("ellipse", {
                  cx: "12",
                  cy: "12",
                  rx: "5.5",
                  ry: "2.2"
              }), (0,
              t.jsx)("ellipse", {
                  cx: "12",
                  cy: "12",
                  rx: "5.5",
                  ry: "2.2",
                  transform: "rotate(60 12 12)"
              }), (0,
              t.jsx)("ellipse", {
                  cx: "12",
                  cy: "12",
                  rx: "5.5",
                  ry: "2.2",
                  transform: "rotate(120 12 12)"
              }), (0,
              t.jsx)("path", {
                  d: "M10.5 4.5h3M10.5 19.5h3"
              })]
          })
      }
  }, {
      id: "nodejs",
      label: "Node.js",
      x: 6,
      y: 72,
      size: 40,
      opacity: .18,
      depth: 1,
      duration: 24,
      delay: -7,
      driftX: 10,
      driftY: -14,
      rotate: !1,
      glow: !1,
      particles: !1,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M12 2.8 19.5 7v10L12 21.2 4.5 17V7L12 2.8Z"
              }), (0,
              t.jsx)("path", {
                  d: "M12 7.2v9.6M8.8 9.2 12 11l3.2-1.8"
              })]
          })
      }
  }, {
      id: "expo",
      label: "Expo",
      x: 74,
      y: 12,
      size: 36,
      opacity: .16,
      depth: 1,
      duration: 18,
      delay: -4,
      driftX: 12,
      driftY: 10,
      rotate: !0,
      glow: !1,
      particles: !1,
      mobile: !1,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M4.5 8.5 12 4l7.5 4.5v7L12 20l-7.5-4.5v-7Z"
              }), (0,
              t.jsx)("path", {
                  d: "M12 4v16M4.5 8.5 12 13l7.5-4.5"
              })]
          })
      }
  }, {
      id: "firebase",
      label: "Firebase",
      x: 92,
      y: 68,
      size: 40,
      opacity: .2,
      depth: 1,
      duration: 21,
      delay: -6,
      driftX: -14,
      driftY: -10,
      rotate: !1,
      glow: !0,
      particles: !0,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "m5.5 16.5 3.2-10.2a.7.7 0 0 1 1.3-.05L12 12l2.2-3.4a.7.7 0 0 1 1.25.2L18.5 16.5"
              }), (0,
              t.jsx)("path", {
                  d: "M5.5 16.5 12 20.2l6.5-3.7"
              }), (0,
              t.jsx)("path", {
                  d: "m8.7 6.3 2.1 6.2"
              })]
          })
      }
  }, {
      id: "git",
      label: "Git",
      x: 22,
      y: 86,
      size: 34,
      opacity: .15,
      depth: 0,
      duration: 26,
      delay: -8,
      driftX: 8,
      driftY: -12,
      rotate: !0,
      glow: !1,
      particles: !1,
      mobile: !1,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("circle", {
                  cx: "7",
                  cy: "7",
                  r: "2.2"
              }), (0,
              t.jsx)("circle", {
                  cx: "17",
                  cy: "7",
                  r: "2.2"
              }), (0,
              t.jsx)("circle", {
                  cx: "12",
                  cy: "17",
                  r: "2.2"
              }), (0,
              t.jsx)("path", {
                  d: "M7 9.2v3.3c0 1.2.8 2.2 2 2.5L12 15.8M17 9.2v2.8c0 1.5-1.2 2.8-2.8 2.8H12"
              })]
          })
      }
  }, {
      id: "github",
      label: "GitHub",
      x: 48,
      y: 8,
      size: 38,
      opacity: .17,
      depth: 1,
      duration: 23,
      delay: -1,
      driftX: -10,
      driftY: 14,
      rotate: !1,
      glow: !0,
      particles: !1,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M9.5 18.8c-3 .7-3-1.5-4.2-1.8"
              }), (0,
              t.jsx)("path", {
                  d: "M15 21v-2.4a3.2 3.2 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.6a4 4 0 0 0-1.1-2.8 3.8 3.8 0 0 0-.1-2.8s-.9-.3-2.9 1.1a9.7 9.7 0 0 0-5.2 0C8 3.6 7.1 3.9 7.1 3.9a3.8 3.8 0 0 0-.1 2.8 4 4 0 0 0-1.1 2.8c0 5.1 3.1 6.3 6.1 6.6a3.2 3.2 0 0 0-.9 2.5V21"
              })]
          })
      }
  }, {
      id: "android",
      label: "Android",
      x: 10,
      y: 58,
      size: 36,
      opacity: .16,
      depth: 1,
      duration: 25,
      delay: -9,
      driftX: 12,
      driftY: 8,
      rotate: !1,
      glow: !1,
      particles: !1,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M7 10.5v6.2a1.3 1.3 0 0 0 1.3 1.3h.7V20a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h.7a1.3 1.3 0 0 0 1.3-1.3v-6.2H7Z"
              }), (0,
              t.jsx)("path", {
                  d: "M8.2 8.2a4.8 4.8 0 0 1 7.6 0"
              }), (0,
              t.jsx)("path", {
                  d: "m7.2 5.5 1.6 2.2M16.8 5.5 15.2 7.7"
              }), (0,
              t.jsx)("circle", {
                  cx: "9.6",
                  cy: "9.4",
                  r: "0.7",
                  fill: "currentColor",
                  stroke: "none"
              }), (0,
              t.jsx)("circle", {
                  cx: "14.4",
                  cy: "9.4",
                  r: "0.7",
                  fill: "currentColor",
                  stroke: "none"
              }), (0,
              t.jsx)("path", {
                  d: "M5.5 11.5v4M18.5 11.5v4"
              })]
          })
      }
  }, {
      id: "ios",
      label: "iOS",
      x: 90,
      y: 34,
      size: 34,
      opacity: .15,
      depth: 0,
      duration: 27,
      delay: -3.5,
      driftX: -8,
      driftY: 12,
      rotate: !0,
      glow: !1,
      particles: !1,
      mobile: !1,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M16.8 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.9-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.2c.7-1 1.2-2 1.4-2.4-.1 0-2.5-1-2.7-3.6Z"
              }), (0,
              t.jsx)("path", {
                  d: "M14.6 5.2c.6-.8 1.1-1.9.9-3-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.6-1.3Z"
              })]
          })
      }
  }, {
      id: "vscode",
      label: "VS Code",
      x: 28,
      y: 28,
      size: 32,
      opacity: .14,
      depth: 0,
      duration: 28,
      delay: -11,
      driftX: 10,
      driftY: -8,
      rotate: !1,
      glow: !1,
      particles: !1,
      mobile: !1,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "m4.5 8.5 5 3.2-5 3.8V8.5Z"
              }), (0,
              t.jsx)("path", {
                  d: "m9.5 11.7 9.2-6.4a1.2 1.2 0 0 1 1.8.9v11.6a1.2 1.2 0 0 1-1.8.9l-9.2-6.4"
              }), (0,
              t.jsx)("path", {
                  d: "m9.5 11.7 4.8 3.3"
              })]
          })
      }
  }, {
      id: "npm",
      label: "npm",
      x: 62,
      y: 78,
      size: 34,
      opacity: .15,
      depth: 0,
      duration: 19,
      delay: -5.5,
      driftX: -12,
      driftY: -10,
      rotate: !1,
      glow: !1,
      particles: !1,
      mobile: !1,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("rect", {
                  x: "3.5",
                  y: "5.5",
                  width: "17",
                  height: "13",
                  rx: "1.5"
              }), (0,
              t.jsx)("path", {
                  d: "M8 10v5.5h2.2V12H12v3.5h2.2V10H8Z"
              })]
          })
      }
  }, {
      id: "html",
      label: "HTML",
      x: 36,
      y: 62,
      size: 30,
      opacity: .12,
      depth: 0,
      duration: 30,
      delay: -12,
      driftX: 6,
      driftY: 10,
      rotate: !0,
      glow: !1,
      particles: !1,
      mobile: !1,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M5 4h14l-1.2 14.2L12 20.5l-5.8-2.3L5 4Z"
              }), (0,
              t.jsx)("path", {
                  d: "M8.5 8.5h7l-.3 3.2H9.8l.2 2.1h4.6l-.4 3.3L12 18l-2.4-.8"
              })]
          })
      }
  }, {
      id: "css",
      label: "CSS",
      x: 68,
      y: 56,
      size: 30,
      opacity: .12,
      depth: 0,
      duration: 29,
      delay: -10,
      driftX: -8,
      driftY: 12,
      rotate: !1,
      glow: !1,
      particles: !1,
      mobile: !1,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M5 4h14l-1.2 14.2L12 20.5l-5.8-2.3L5 4Z"
              }), (0,
              t.jsx)("path", {
                  d: "M8.8 8.5h6.5l-.2 2.4H10l.15 1.7h4.7l-.55 4.4L12 18.2l-2.3-.75-.15-1.55"
              })]
          })
      }
  }, {
      id: "rest-api",
      label: "REST API",
      x: 54,
      y: 90,
      size: 36,
      opacity: .16,
      depth: 1,
      duration: 22,
      delay: -7.5,
      driftX: 14,
      driftY: -8,
      rotate: !1,
      glow: !0,
      particles: !1,
      mobile: !0,
      icon: function(e) {
          return (0,
          t.jsxs)("svg", {
              ...a(e),
              children: [(0,
              t.jsx)("path", {
                  d: "M7 8.5h4.5a2.5 2.5 0 0 1 0 5H9v2"
              }), (0,
              t.jsx)("path", {
                  d: "M14.5 8.5H17a2.2 2.2 0 0 1 0 4.4h-2.5V15.5"
              }), (0,
              t.jsx)("circle", {
                  cx: "5.5",
                  cy: "12",
                  r: "1.6"
              }), (0,
              t.jsx)("circle", {
                  cx: "18.5",
                  cy: "12",
                  r: "1.6"
              }), (0,
              t.jsx)("path", {
                  d: "M7.1 12h1.4M15.5 12h1.4"
              })]
          })
      }
  }]
    , n = [{
      from: "react",
      to: "react-native"
  }, {
      from: "javascript",
      to: "react"
  }, {
      from: "typescript",
      to: "react-native"
  }, {
      from: "react-native",
      to: "firebase"
  }, {
      from: "github",
      to: "typescript"
  }, {
      from: "android",
      to: "react-native"
  }, {
      from: "nodejs",
      to: "rest-api"
  }]
    , s = [.18, .38, .65];
  e.s(["default", 0, function() {
      let e = (0,
      r.useRef)(null)
        , a = (0,
      r.useRef)(new Map)
        , l = (0,
      r.useRef)({
          x: 0,
          y: 0
      })
        , o = (0,
      r.useRef)({
          x: 0,
          y: 0
      })
        , c = (0,
      r.useRef)({
          x: -9999,
          y: -9999
      })
        , d = (0,
      r.useRef)(null)
        , [u,m] = (0,
      r.useState)(!1)
        , [p,h] = (0,
      r.useState)(!1);
      (0,
      r.useEffect)( () => {
          let e = window.matchMedia("(max-width: 767px)")
            , t = window.matchMedia("(pointer: coarse)")
            , r = window.matchMedia("(prefers-reduced-motion: reduce)")
            , a = () => {
              m(e.matches || t.matches),
              h(r.matches)
          }
          ;
          return a(),
          e.addEventListener("change", a),
          t.addEventListener("change", a),
          r.addEventListener("change", a),
          () => {
              e.removeEventListener("change", a),
              t.removeEventListener("change", a),
              r.removeEventListener("change", a)
          }
      }
      , []);
      let f = (0,
      r.useMemo)( () => u ? i.filter(e => e.mobile) : i, [u])
        , x = (0,
      r.useMemo)( () => new Map(f.map(e => [e.id, e])), [f])
        , g = (0,
      r.useMemo)( () => n.filter(e => x.has(e.from) && x.has(e.to)), [x])
        , b = (0,
      r.useCallback)( (e, t) => {
          t ? a.current.set(e, t) : a.current.delete(e)
      }
      , []);
      return (0,
      r.useEffect)( () => {
          let t = e.current;
          if (!t || p || u) {
              t?.style.setProperty("--tech-parallax-x", "0px"),
              t?.style.setProperty("--tech-parallax-y", "0px");
              return
          }
          let r = () => {
              o.current.x += (l.current.x - o.current.x) * .07,
              o.current.y += (l.current.y - o.current.y) * .07,
              t.style.setProperty("--tech-parallax-x", `${o.current.x.toFixed(2)}px`),
              t.style.setProperty("--tech-parallax-y", `${o.current.y.toFixed(2)}px`);
              let e = c.current.x
                , i = c.current.y;
              a.current.forEach(t => {
                  let r = t.getBoundingClientRect()
                    , a = Math.hypot(e - (r.left + r.width / 2), i - (r.top + r.height / 2));
                  t.style.setProperty("--tech-proximity", (a < 120 ? 1 - a / 120 : 0).toFixed(3))
              }
              ),
              d.current = requestAnimationFrame(r)
          }
            , i = e => {
              c.current.x = e.clientX,
              c.current.y = e.clientY;
              let t = (e.clientX / window.innerWidth - .5) * 2
                , r = (e.clientY / window.innerHeight - .5) * 2;
              l.current.x = 22 * t,
              l.current.y = 14 * r
          }
          ;
          return d.current = requestAnimationFrame(r),
          window.addEventListener("pointermove", i, {
              passive: !0
          }),
          () => {
              window.removeEventListener("pointermove", i),
              null !== d.current && cancelAnimationFrame(d.current)
          }
      }
      , [u, p]),
      (0,
      t.jsxs)("div", {
          ref: e,
          className: `tech-bg${p ? " tech-bg--static" : ""}`,
          "aria-hidden": "true",
          children: [(0,
          t.jsx)("svg", {
              className: "tech-bg__links",
              width: "100%",
              height: "100%",
              children: g.map(e => {
                  let r = x.get(e.from)
                    , a = x.get(e.to);
                  return r && a ? (0,
                  t.jsx)("line", {
                      className: "tech-bg__link",
                      x1: `${r.x}%`,
                      y1: `${r.y}%`,
                      x2: `${a.x}%`,
                      y2: `${a.y}%`
                  }, `${e.from}-${e.to}`) : null
              }
              )
          }), f.map(e => {
              let r = e.icon
                , a = s[e.depth];
              return (0,
              t.jsx)("div", {
                  ref: t => b(e.id, t),
                  className: ["tech-bg__item", `tech-bg__item--depth-${e.depth}`, e.glow ? "tech-bg__item--glow" : "", e.rotate ? "tech-bg__item--spin" : "", e.particles ? "tech-bg__item--particles" : ""].filter(Boolean).join(" "),
                  style: {
                      left: `${e.x}%`,
                      top: `${e.y}%`,
                      width: e.size,
                      height: e.size,
                      "--tech-item-opacity": String(e.opacity),
                      "--tech-duration": `${e.duration}s`,
                      "--tech-delay": `${e.delay}s`,
                      "--tech-drift-x": `${e.driftX}px`,
                      "--tech-drift-y": `${e.driftY}px`,
                      "--tech-depth-parallax": String(a)
                  },
                  children: (0,
                  t.jsxs)("div", {
                      className: "tech-bg__float",
                      children: [(0,
                      t.jsx)("div", {
                          className: "tech-bg__icon",
                          children: (0,
                          t.jsx)(r, {})
                      }), e.particles ? (0,
                      t.jsxs)("span", {
                          className: "tech-bg__particles",
                          children: [(0,
                          t.jsx)("i", {}), (0,
                          t.jsx)("i", {}), (0,
                          t.jsx)("i", {})]
                      }) : null]
                  })
              }, e.id)
          }
          )]
      })
  }
  ])
}
]);
