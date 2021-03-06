
! function() {
    "use strict";

    function t(t, e) {
        return e = {
            exports: {}
        }, t(e, e.exports, st), e.exports
    }

    function e(t) {
        var e = St.call(t, kt),
            n = t[kt];
        try {
            t[kt] = void 0;
            var r = !0
        } catch (t) {}
        var i = Pt.call(t);
        return r && (e ? t[kt] = n : delete t[kt]), i
    }

    function n(t) {
        return Mt.call(t)
    }

    function r(t) {
        return null == t ? void 0 === t ? Ct : Lt : Rt && Rt in Object(t) ? e(t) : n(t)
    }

    function i(t) {
        return null != t && "object" == typeof t
    }

    function o(t) {
        if (!i(t) || r(t) != Nt) return !1;
        var e = Dt(t);
        if (null === e) return !0;
        var n = Xt.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && $t.call(n) == Wt
    }

    function a(t, e, n) {
        function r() {
            p === d && (p = d.slice())
        }

        function i() {
            return l
        }

        function u(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return r(), p.push(t),
                function() {
                    if (e) {
                        e = !1, r();
                        var n = p.indexOf(t);
                        p.splice(n, 1)
                    }
                }
        }

        function c(t) {
            if (!o(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (h) throw new Error("Reducers may not dispatch actions.");
            try {
                h = !0, l = f(l, t)
            } finally {
                h = !1
            }
            for (var e = d = p, n = 0; n < e.length; n++) e[n]();
            return t
        }
        var s;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var f = t,
            l = e,
            d = [],
            p = d,
            h = !1;
        return c({
            type: Qt.INIT
        }), s = {
            dispatch: c,
            subscribe: u,
            getState: i,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                f = t, c({
                    type: Qt.INIT
                })
            }
        }, s[Ut] = function() {
            var t, e = u;
            return t = {
                subscribe: function(t) {
                    function n() {
                        t.next && t.next(i())
                    }
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            }, t[Ut] = function() {
                return this
            }, t
        }, s
    }

    function u(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function c(t) {
        Object.keys(t).forEach(function(e) {
            var n = t[e];
            if (void 0 === n(void 0, {
                    type: Qt.INIT
                })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
            if (void 0 === n(void 0, {
                    type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + Qt.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
        })
    }

    function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function f(t, e) {
        return 0 === e ? 0 : 1 === e ? 1 : s(e > 0 && t && ie[t] ? ie[t](e) : e)
    }

    function l() {
        return "i" + Du++
    }

    function d() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = Ba(e, function(t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}),
            o = r && r.mediaQueries,
            a = [];
        return o ? a = o.map(function(t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: n,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: a
            }
        }
    }

    function p(t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? Nu : i,
            a = e.getState,
            u = (0, e.subscribe)(function() {
                var t = n(a());
                null != t ? o(t, c) || r(c = t, e) : u()
            }),
            c = n(a());
        return u
    }

    function h(t) {
        var e = void 0 === t ? "undefined" : ft.typeof(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo
        } : {}
    }

    function v(t) {
        var e = t.config,
            n = t.event,
            r = t.elementApi;
        if (!r) throw new Error("IX2 missing elementApi");
        var i = r.getValidDocument,
            o = r.getQuerySelector,
            a = r.queryDocument,
            u = r.getChildElements,
            c = r.getSiblingElements,
            s = r.matchSelector,
            f = e.target;
        if (!f) return [];
        var l = h(f),
            d = l.id,
            p = l.selector;
        if (l.appliesTo === uu) {
            var v = i(d);
            return v ? [v] : []
        }
        var y = Dr(n, "action.config.affectedElements", {})[d || p] || {},
            g = void 0,
            m = void 0,
            b = void 0;
        return Boolean(y.id || y.selector) ? (g = y.limitAffectedElements, m = o(h(n.target)), b = o(y)) : m = b = o({
            id: d,
            selector: p
        }), null == m || null == b ? [] : "CHILDREN" === g ? a(m, b) : "IMMEDIATE_CHILDREN" === g ? u(a(m)).filter(s(b)) : "SIBLINGS" === g ? c(a(m)).filter(s(b)) : a(b)
    }

    function y(t) {
        var e = t.element,
            n = t.actionItem;
        if (!Tu) return {};
        switch (n.actionTypeId) {
            case Ka:
            case Za:
            case Ja:
            case tu:
            case eu:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function g(t) {
        var e = t.element,
            n = t.actionItem,
            r = t.computedStyle,
            i = void 0 === r ? {} : r,
            o = t.elementApi.getStyle,
            a = n.actionTypeId;
        switch (a) {
            case Ha:
            case qa:
            case Ua:
            case Qa:
                return _(o(e, Mu), a);
            case Ya:
                return {
                    value: Va(parseFloat(o(e, xu)), 1)
                };
            case Ka:
                return {
                    widthValue: Va(parseFloat(o(e, _u)), parseFloat(i.width)),
                    heightValue: Va(parseFloat(o(e, ju)), parseFloat(i.height))
                };
            case Za:
            case Ja:
            case tu:
                return O({
                    element: e,
                    actionTypeId: a,
                    computedStyle: i,
                    getStyle: o
                });
            case eu:
                return {
                    value: Va(o(e, Iu), i.display)
                };
            default:
                return
        }
    }

    function m(t) {
        switch (t.actionTypeId) {
            case Ha:
            case qa:
            case Ua:
            case Qa:
                var e = t.config;
                return {
                    xValue: e.xValue,
                    yValue: e.yValue,
                    zValue: e.zValue
                };
            case Ka:
                var n = t.config;
                return {
                    widthValue: n.widthValue,
                    heightValue: n.heightValue
                };
            case Za:
            case Ja:
            case tu:
                var r = t.config;
                return {
                    rValue: r.rValue,
                    gValue: r.gValue,
                    bValue: r.bValue,
                    aValue: r.aValue
                };
            default:
                return {
                    value: t.config.value
                }
        }
    }

    function b(t, e) {
        var n = t.isTransform,
            r = t.isStyle,
            i = t.isGeneral;
        return n ? j(t, e) : r ? A(t, e) : i ? T(t, e) : void 0
    }

    function w(t) {
        return t.map(function(t) {
            return t[0] + "(" + t[1] + ")"
        }).join(" ")
    }

    function x(t, e) {
        var n = t.exec(e);
        return n ? n[1] : ""
    }

    function _(t, e) {
        var n = zu[e];
        if (!t) return n;
        var r = function(t) {
            return {
                xValue: Va(parseFloat(t[0]), n.xValue),
                yValue: Va(parseFloat(t[1]), n.yValue),
                zValue: Va(parseFloat(t[2]), n.zValue)
            }
        };
        switch (e) {
            case Ha:
                return r([x($u, t), x(Xu, t), x(Wu, t)]);
            case qa:
                return r([x(Gu, t), x(Fu, t), x(Bu, t)]);
            case Ua:
                return r([x(Hu, t), x(qu, t), x(Uu, t)]);
            case Qa:
                var i = [x(Qu, t), x(Yu, t)];
                return {
                    xValue: Va(parseFloat(i[0]), n.xValue),
                    yValue: Va(parseFloat(i[1]), n.yValue)
                };
            default:
                return
        }
    }

    function j(t, e) {
        var n = t.element,
            r = t.current,
            i = t.actionItem,
            o = e.getStyle,
            a = e.setStyle,
            u = o(n, Mu),
            c = I(u, i, r);
        u !== c && (S(n, Mu, e), a(n, Mu, c))
    }

    function I(t, e, n) {
        var r = e.actionTypeId,
            i = e.config,
            o = i.xUnit,
            a = void 0 === o ? "" : o,
            u = i.yUnit,
            c = void 0 === u ? "" : u,
            s = i.zUnit,
            f = void 0 === s ? "" : s,
            l = n.xValue,
            d = n.yValue,
            p = n.zValue,
            h = t || Ku;
        switch (r) {
            case Ha:
                return void 0 !== l && (h = E(h, $u, fu, l + a)), void 0 !== d && (h = E(h, Xu, lu, d + c)), void 0 !== p && (h = E(h, Wu, du, p + f)), h;
            case qa:
                return void 0 !== l && (h = E(h, Gu, pu, l + a)), void 0 !== d && (h = E(h, Fu, hu, d + c)), void 0 !== p && (h = E(h, Bu, vu, p + f)), h;
            case Ua:
                return void 0 !== l && (h = E(h, Hu, yu, l + a)), void 0 !== d && (h = E(h, qu, gu, d + c)), void 0 !== p && (h = E(h, Uu, mu, p + f)), h;
            case Qa:
                return void 0 !== l && (h = E(h, Qu, bu, l + a)), void 0 !== d && (h = E(h, Yu, wu, d + c)), h;
            default:
                return h
        }
    }

    function E(t, e, n, r) {
        return t.replace(e, n + "(" + r + ")")
    }

    function O(t) {
        var e = t.element,
            n = t.actionTypeId,
            r = t.computedStyle,
            i = t.getStyle,
            o = Cu[n],
            a = i(e, o),
            u = Zu.test(a) ? a : r[o],
            c = x(Ju, u).split(Au);
        return {
            rValue: Va(parseInt(c[0], 10), 255),
            gValue: Va(parseInt(c[1], 10), 255),
            bValue: Va(parseInt(c[2], 10), 255),
            aValue: Va(parseFloat(c[3]), 1)
        }
    }

    function A(t, e) {
        var n = t.element,
            r = t.actionItem,
            i = t.current,
            o = t.styleProp,
            a = e.setStyle,
            u = r.actionTypeId;
        switch (u) {
            case Ka:
                var c = r.config,
                    s = c.widthUnit,
                    f = void 0 === s ? "" : s,
                    l = c.heightUnit,
                    d = void 0 === l ? "" : l,
                    p = i.widthValue,
                    h = i.heightValue;
                void 0 !== p && (S(n, _u, e), a(n, _u, p + f)), void 0 !== h && (S(n, ju, e), a(n, ju, h + d));
                break;
            case Za:
            case Ja:
            case tu:
                var v = Cu[u],
                    y = i.rValue,
                    g = i.gValue,
                    m = i.bValue,
                    b = i.aValue;
                S(n, v, e), a(n, v, b >= 1 ? "rgb(" + Math.round(y) + "," + Math.round(g) + "," + Math.round(m) + ")" : "rgba(" + Math.round(y) + "," + Math.round(g) + "," + Math.round(m) + "," + b + ")");
                break;
            default:
                var w = r.config.unit,
                    x = void 0 === w ? "" : w;
                S(n, o, e), a(n, o, i.value + x)
        }
    }

    function T(t, e) {
        var n = t.element,
            r = t.actionItem,
            i = e.setStyle;
        switch (r.actionTypeId) {
            case eu:
                var o = r.config.value;
                return void(o === Eu && Tu ? i(n, Iu, ku) : i(n, Iu, o))
        }
    }

    function S(t, e, n) {
        if (Tu) {
            var r = Ru[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, Ou);
                if (a) {
                    var u = a.split(Au).map(Lu); - 1 === u.indexOf(r) && o(t, Ou, u.concat(r).join(Au))
                } else o(t, Ou, r)
            }
        }
    }

    function P(t, e, n) {
        if (Tu) {
            var r = Ru[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, Ou);
                a && -1 !== a.indexOf(r) && o(t, Ou, a.split(Au).map(Lu).filter(function(t) {
                    return t !== r
                }).join(Au))
            }
        }
    }

    function k(t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function(t) {
            var e = o[t],
                r = e.action.config.actionListId,
                i = u[r];
            i && M({
                actionList: i,
                event: e,
                elementApi: n
            })
        }), Object.keys(u).forEach(function(t) {
            M({
                actionList: u[t],
                elementApi: n
            })
        })
    }

    function M(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function(t) {
            L({
                actionGroup: t,
                event: r,
                elementApi: i
            })
        }), a && a.forEach(function(t) {
            t.continuousActionGroups.forEach(function(t) {
                L({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            })
        })
    }

    function L(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e = t.actionTypeId,
                i = t.config,
                o = tc({
                    effect: R,
                    actionTypeId: e,
                    elementApi: r
                });
            v({
                config: i,
                event: n,
                elementApi: r
            }).forEach(o)
        })
    }

    function C(t, e) {
        var n = t.actionItem,
            r = t.element;
        if ((0, e.getStyle)(r, Ou)) {
            var i = n.actionTypeId;
            tc({
                effect: P,
                actionTypeId: i,
                elementApi: e
            })(r)
        }
    }

    function R(t, e, n) {
        var r = n.setStyle;
        P(t, e, n), r(t, e, "")
    }

    function D(t) {
        var e = 0,
            n = 0;
        return t.forEach(function(t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }

    function N(t) {
        var e = t.actionListId,
            n = t.actionItemId,
            r = t.rawData,
            i = r.actionLists[e],
            o = i.actionItemGroups,
            a = i.continuousParameterGroups,
            u = [],
            c = function(t) {
                return u.push(Jt(t, {
                    config: {
                        $merge: {
                            delay: 0,
                            duration: 0
                        }
                    }
                })), t.id === n
            };
        return o && o.some(function(t) {
            return t.actionItems.some(c)
        }), a && a.some(function(t) {
            return t.continuousActionGroups.some(function(t) {
                return t.actionItems.some(c)
            })
        }), Jt(r, {
            actionLists: {
                $set: ft.defineProperty({}, e, {
                    id: e,
                    actionItemGroups: [{
                        actionItems: u
                    }]
                })
            }
        })
    }

    function z(t, e) {
        var n = e.basedOn;
        return t === ou && (n === au || null == n) || t === iu && n === au
    }

    function V(t, e) {
        return t + ":" + e
    }

    function $(t, e) {
        return null == e || -1 !== t.indexOf(e)
    }

    function X(t, e) {
        B({
            store: e,
            rawData: t.rawData,
            allowEvents: !0
        }), document.dispatchEvent(new CustomEvent("IX2_PREVIEW_LOAD"))
    }

    function W(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.verbose,
            s = void 0 === c || c,
            f = t.rawData;
        if (r && i && f && u && (f = N({
                actionListId: r,
                actionItemId: i,
                rawData: f
            })), B({
                store: e,
                rawData: f,
                allowEvents: a
            }), r && n === ru) {
            nt({
                store: e,
                actionListId: r
            }), tt({
                store: e,
                actionListId: r,
                eventId: o
            });
            var l = rt({
                store: e,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: s
            });
            s && l && e.dispatch(lc({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }

    function G(t, e) {
        var n = t.actionListId;
        n ? nt({
            store: e,
            actionListId: n
        }) : et({
            store: e
        }), q(e)
    }

    function F(t, e) {
        q(e), k({
            store: e,
            elementApi: hc
        })
    }

    function B(t) {
        var e = t.store,
            n = t.rawData,
            r = t.allowEvents,
            i = e.getState().ixSession;
        n && e.dispatch(ec(n)), i.active || (r && K(e), e.dispatch(nc()), H(e))
    }

    function H(t) {
        ! function e(n) {
            var r = t.getState(),
                i = r.ixSession,
                o = r.ixParameters;
            i.active && (t.dispatch(ac(n, o)), requestAnimationFrame(e))
        }(window.performance.now())
    }

    function q(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(U), t.dispatch(rc()))
    }

    function U(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }

    function Q(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventConfig,
            i = t.actionListId,
            o = t.parameterGroup,
            a = t.smoothing,
            u = t.restingValue,
            c = e.getState().ixData.events[n],
            s = c.eventTypeId,
            f = {},
            l = {},
            d = [],
            p = o.continuousActionGroups,
            h = o.id;
        z(s, r) && (h = V(n, h)), p.forEach(function(t) {
            var e = t.keyframe;
            t.actionItems.forEach(function(t) {
                var n = t.actionTypeId,
                    r = t.config.target,
                    i = r + ":" + n;
                r && (l[i] = Y(l[i], e, t), f[i] || (f[i] = !0, v({
                    config: t.config,
                    event: c,
                    elementApi: hc
                }).forEach(function(t) {
                    d.push({
                        element: t,
                        key: i
                    })
                })))
            })
        }), d.forEach(function(t) {
            var r = t.element,
                o = t.key,
                c = l[o],
                s = Dr(c, "[0].actionItems[0]", {}),
                f = m(s);
            it({
                store: e,
                element: r,
                eventId: n,
                actionListId: i,
                actionItem: s,
                destination: f,
                continuous: !0,
                parameterId: h,
                actionGroups: c,
                smoothing: a,
                restingValue: u
            })
        })
    }

    function Y() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments[1],
            n = arguments[2],
            r = [].concat(ft.toConsumableArray(t)),
            i = void 0;
        return r.some(function(t, n) {
            return t.keyframe === e && (i = n, !0)
        }), null == i && (i = r.length, r.push({
            keyframe: e,
            actionItems: []
        })), r[i].actionItems.push(n), r
    }

    function K(t) {
        var e = t.getState().ixData.eventTypeMap;
        Na(e, function(e, n) {
            var r = ks[n];
            r ? J({
                logic: r,
                store: t,
                events: e
            }) : console.warn("IX2 event type not configured: " + n)
        }), t.getState().ixSession.eventListeners.length && Z(t)
    }

    function Z(t) {
        function e() {
            var e = t.getState(),
                n = e.ixSession,
                r = e.ixData,
                i = window.innerWidth;
            if (i !== n.viewportWidth) {
                var o = r.mediaQueries;
                t.dispatch(dc({
                    width: i,
                    mediaQueries: o
                }))
            }
        }
        Ms.forEach(function(n) {
            window.addEventListener(n, e), t.dispatch(ic(window, [n, e]))
        }), e()
    }

    function J(t) {
        var e = t.logic,
            n = t.store,
            r = t.events,
            i = e.types,
            o = e.handler,
            a = n.getState().ixData,
            u = a.actionLists,
            c = Ls(r, Cs);
        if (Ro(c)) {
            Na(c, function(t, e) {
                var i = r[e],
                    o = i.action,
                    a = i.id,
                    c = o.config.actionListId;
                o.actionTypeId === nu && (Array.isArray(i.config) ? i.config : [i.config]).forEach(function(t) {
                    var e = t.continuousParameterGroupId,
                        r = Dr(u, c + ".continuousParameterGroups", []),
                        i = jo(r, function(t) {
                            return t.id === e
                        }),
                        o = (t.smoothing || 0) / 100,
                        s = (t.restingState || 0) / 100;
                    i && Q({
                        store: n,
                        eventId: a,
                        eventConfig: t,
                        actionListId: c,
                        parameterGroup: i,
                        smoothing: o,
                        restingValue: s
                    })
                }), o.actionTypeId === ru && tt({
                    store: n,
                    actionListId: c,
                    eventId: a
                })
            });
            var s = function(t) {
                    var e = n.getState().ixSession;
                    Na(c, function(i, u) {
                        var c = i[0],
                            s = r[u],
                            f = e.eventState[u],
                            l = s.action,
                            d = s.mediaQueries;
                        if ($(void 0 === d ? a.mediaQueryKeys : d, e.mediaQueryKey)) {
                            var p = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    r = o({
                                        store: n,
                                        element: c,
                                        event: s,
                                        eventConfig: e,
                                        nativeEvent: t
                                    }, f);
                                r !== f && n.dispatch(oc(u, r))
                            };
                            l.actionTypeId === nu ? (Array.isArray(s.config) ? s.config : [s.config]).forEach(p) : p()
                        }
                    })
                },
                f = function(t) {
                    var e = t.target,
                        r = void 0 === e ? document : e;
                    t.types.split(" ").filter(Boolean).forEach(function(t) {
                        r.addEventListener(t, s), n.dispatch(ic(r, [t, s]))
                    })
                };
            Array.isArray(i) ? i.forEach(f) : "string" == typeof i && f(e)
        }
    }

    function tt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState().ixData,
            o = i.actionLists,
            a = i.events[r],
            u = o[n];
        u && u.useFirstGroupAsInitialState && Dr(u, "actionItemGroups[0].actionItems", []).forEach(function(t) {
            v({
                config: t.config,
                event: a,
                elementApi: hc
            }).forEach(function(i) {
                it({
                    destination: m(t),
                    origin: g({
                        element: i,
                        actionItem: t,
                        elementApi: hc
                    }),
                    immediate: !0,
                    store: e,
                    element: i,
                    eventId: r,
                    actionItem: t,
                    actionListId: n
                })
            })
        })
    }

    function et(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        Na(n, function(t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                ot(t, e), r && e.dispatch(lc({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function nt(t) {
        var e = t.store,
            n = t.eventId,
            r = t.actionListId,
            i = e.getState().ixInstances;
        Na(i, function(t) {
            t.actionListId === r && t.eventId === n && (ot(t, e), t.verbose && e.dispatch(lc({
                actionListId: r,
                isPlaying: !1
            })))
        })
    }

    function rt(t) {
        var e = t.store,
            n = t.eventId,
            r = t.actionListId,
            i = t.groupIndex,
            o = void 0 === i ? 0 : i,
            a = t.immediate,
            u = t.verbose,
            c = e.getState(),
            s = c.ixData,
            f = c.ixSession,
            l = s.events[n] || {},
            d = l.mediaQueries,
            p = void 0 === d ? s.mediaQueryKeys : d,
            h = Dr(s, "actionLists." + r, {}),
            b = h.actionItemGroups;
        o >= b.length && Dr(l, "config.loop") && (o = 0), 0 === o && h.useFirstGroupAsInitialState && o++;
        var w = Dr(b, [o, "actionItems"], []);
        if (!w.length) return !1;
        if (!$(p, f.mediaQueryKey)) return !1;
        var x = D(w),
            _ = !1;
        return w.forEach(function(t, i) {
            v({
                config: t.config,
                event: l,
                elementApi: hc
            }).forEach(function(c, s) {
                _ = !0;
                var f = x === i && 0 === s,
                    l = y({
                        element: c,
                        actionItem: t
                    }),
                    d = g({
                        element: c,
                        actionItem: t,
                        computedStyle: l,
                        elementApi: hc
                    }),
                    p = m(t);
                it({
                    store: e,
                    element: c,
                    actionItem: t,
                    eventId: n,
                    actionListId: r,
                    groupIndex: o,
                    isCarrier: f,
                    origin: d,
                    destination: p,
                    immediate: a,
                    verbose: u
                })
            })
        }), _
    }

    function it(t) {
        var e = t.store,
            n = ft.objectWithoutProperties(t, ["store"]),
            r = !n.continuous,
            i = n.immediate,
            o = l();
        e.dispatch(cc(ft.extends({
            instanceId: o
        }, n))), i ? at(e, o) : (p({
            store: e,
            select: function(t) {
                return t.ixInstances[o]
            },
            onChange: ut
        }), r && e.dispatch(sc(o)))
    }

    function ot(t, e) {
        C(t, hc), e.dispatch(fc(t.id))
    }

    function at(t, e) {
        t.dispatch(sc(e));
        var n = t.getState().ixParameters;
        t.dispatch(ac(Number.POSITIVE_INFINITY, n)), ut(t.getState().ixInstances[e], t)
    }

    function ut(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.current,
            a = t.groupIndex,
            u = t.eventId,
            c = t.actionListId,
            s = t.isGeneral,
            f = t.isCarrier,
            l = t.verbose;
        if ((r || n || i) && ((o || s && i) && b(t, hc), i)) {
            if (f) {
                var d = rt({
                    store: e,
                    eventId: u,
                    actionListId: c,
                    groupIndex: a + 1,
                    verbose: l
                });
                l && !d && e.dispatch(lc({
                    actionListId: c,
                    isPlaying: !1
                }))
            }
            ot(t, e)
        }
    }

    function ct() {
        q(Rs)
    }
    var st = "undefined" != typeof window ? window : "undefined" != typeof global ? global : this,
        ft = {};
    ft.typeof = "function" == typeof At && "symbol" == typeof At.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof At && t.constructor === At && t !== At.prototype ? "symbol" : typeof t
    }, ft.defineProperty = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }, ft.extends = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }, ft.objectWithoutProperties = function(t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }, ft.toConsumableArray = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }, window.tram = function(t) {
        function e(t, e) {
            return (new z.Bare).init(t, e)
        }

        function n(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function r(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function i(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function o() {}

        function a(t, e) {
            s("Type warning: Expected: [" + t + "] Got: [" + typeof e + "] " + e)
        }

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return Z.test(t) || !J.test(t) ? r = parseInt(t, 10) : J.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r === r ? r : n
        }

        function s(t) {
            H.debug && window && window.console.warn(t)
        }

        function f(t) {
            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                var i = t[e];
                i && r.push(i)
            }
            return r
        }
        var l = function(t, e, n) {
                function r(t) {
                    return "object" == typeof t
                }

                function i(t) {
                    return "function" == typeof t
                }

                function o() {}

                function a(u, c) {
                    function s() {
                        var t = new f;
                        return i(t.init) && t.init.apply(t, arguments), t
                    }

                    function f() {}
                    c === n && (c = u, u = Object), s.Bare = f;
                    var l, d = o[t] = u[t],
                        p = f[t] = s[t] = new o;
                    return p.constructor = s, s.mixin = function(e) {
                        return f[t] = s[t] = a(s, e)[t], s
                    }, s.open = function(t) {
                        if (l = {}, i(t) ? l = t.call(s, p, d, s, u) : r(t) && (l = t), r(l))
                            for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return i(p.init) || (p.init = u), s
                    }, s.open(c)
                }
                return a
            }("prototype", {}.hasOwnProperty),
            d = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function(t, e, n, r) {
                    return n * t / r + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
                    return n * (t /= r) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            p = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            h = document,
            v = window,
            y = "bkwld-tram",
            g = /[\-\.0-9]/g,
            m = /[A-Z]/,
            b = "number",
            w = /^(rgb|#)/,
            x = /(em|cm|mm|in|pt|pc|px)$/,
            _ = /(em|cm|mm|in|pt|pc|px|%)$/,
            j = /(deg|rad|turn)$/,
            I = "unitless",
            E = /(all|none) 0s ease 0s/,
            O = /^(width|height)$/,
            A = " ",
            T = h.createElement("a"),
            S = ["Webkit", "Moz", "O", "ms"],
            P = ["-webkit-", "-moz-", "-o-", "-ms-"],
            k = function(t) {
                if (t in T.style) return {
                    dom: t,
                    css: t
                };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < S.length; e++)
                    if ((n = S[e] + r) in T.style) return {
                        dom: n,
                        css: P[e] + t
                    }
            },
            M = e.support = {
                bind: Function.prototype.bind,
                transform: k("transform"),
                transition: k("transition"),
                backface: k("backface-visibility"),
                timing: k("transition-timing-function")
            };
        if (M.transition) {
            var L = M.timing.dom;
            if (T.style[L] = d["ease-in-back"][0], !T.style[L])
                for (var C in p) d[C][0] = p[C]
        }
        var R = e.frame = function() {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && M.bind ? t.bind(v) : function(t) {
                    v.setTimeout(t, 16)
                }
            }(),
            D = e.now = function() {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && M.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            N = l(function(e) {
                function r(t, e) {
                    var n = f(("" + t).split(A)),
                        r = n[0];
                    e = e || {};
                    var i = Y[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function i(t, e, n) {
                    if (t) {
                        var i = typeof t;
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == i && e) return this.timer = new F({
                            duration: t,
                            context: this,
                            complete: o
                        }), void(this.active = !0);
                        if ("string" == i && e) {
                            switch (t) {
                                case "hide":
                                    u.call(this);
                                    break;
                                case "stop":
                                    a.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    r.call(this, t, n && n[1])
                            }
                            return o.call(this)
                        }
                        if ("function" == i) return void t.call(this, this);
                        if ("object" == i) {
                            var s = 0;
                            p.call(this, t, function(t, e) {
                                t.span > s && (s = t.span), t.stop(), t.animate(e)
                            }, function(t) {
                                "wait" in t && (s = c(t.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new F({
                                duration: s,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = o));
                            var f = this,
                                h = !1,
                                v = {};
                            R(function() {
                                p.call(f, t, function(t) {
                                    t.active && (h = !0, v[t.name] = t.nextStyle)
                                }), h && f.$el.css(v)
                            })
                        }
                    }
                }

                function o() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        i.call(this, t.options, !0, t.args)
                    }
                }

                function a(t) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var e;
                    "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == typeof t && null != t ? t : this.props, p.call(this, e, h), d.call(this)
                }

                function u() {
                    a.call(this), this.el.style.display = "none"
                }

                function l() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    this.upstream && n.push(this.upstream);
                    for (t in this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[M.transition.dom] = n)
                }

                function p(t, e, i) {
                    var o, a, u, c, s = e !== h,
                        f = {};
                    for (o in t) u = t[o], o in K ? (f.transform || (f.transform = {}), f.transform[o] = u) : (m.test(o) && (o = n(o)), o in Y ? f[o] = u : (c || (c = {}), c[o] = u));
                    for (o in f) {
                        if (u = f[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = r.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    i && c && i.call(this, c)
                }

                function h(t) {
                    t.stop()
                }

                function v(t, e) {
                    t.set(e)
                }

                function g(t) {
                    this.$el.css(t)
                }

                function b(t, n) {
                    e[t] = function() {
                        return this.children ? w.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }

                function w(t, e) {
                    var n, r = this.children.length;
                    for (n = 0; r > n; n++) t.apply(this.children[n], e);
                    return this
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = U(this.el, "transition");
                        n && !E.test(n) && (this.upstream = n)
                    }
                    M.backface && H.hideBackface && q(this.el, M.backface.css, "hidden")
                }, b("add", r), b("start", i), b("wait", function(t) {
                    t = c(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new F({
                        duration: t,
                        context: this,
                        complete: o
                    }), this.active = !0)
                }), b("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = o)) : s("No active transition timer. Use start() or wait() before then().")
                }), b("next", o), b("stop", a), b("set", function(t) {
                    a.call(this, t), p.call(this, t, v, g)
                }), b("show", function(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), b("hide", u), b("redraw", l), b("destroy", function() {
                    a.call(this), t.removeData(this.el, y), this.$el = this.el = null
                })
            }),
            z = l(N, function(e) {
                function n(e, n) {
                    var r = t.data(e, y) || t.data(e, y, new N.Bare);
                    return r.el || r.init(e), n ? r.start(n) : r
                }
                e.init = function(e, r) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function(t, e) {
                        o.push(n(e, r))
                    }), this.children = o, this
                }
            }),
            V = l(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t, e, n) {
                    return void 0 !== e && (n = e), t in d ? t : n
                }

                function r(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? i(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var o = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                t.init = function(t, e, r, i) {
                    this.$el = t, this.el = t[0];
                    var a = e[0];
                    r[2] && (a = r[2]), Q[a] && (a = Q[a]), this.name = a, this.type = r[1], this.duration = c(e[1], this.duration, o.duration), this.ease = n(e[2], this.ease, o.ease), this.delay = c(e[3], this.delay, o.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = O.test(this.name), this.unit = i.unit || this.unit || H.defaultUnit, this.angle = i.angle || this.angle || H.defaultAngle, H.fallback || i.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + d[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
                }, t.set = function(t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function(t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new G({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function() {
                    return U(this.el, this.name)
                }, t.update = function(t) {
                    q(this.el, this.name, t)
                }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, q(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var n, i = "number" == typeof t,
                        o = "string" == typeof t;
                    switch (e) {
                        case b:
                            if (i) return t;
                            if (o && "" === t.replace(g, "")) return +t;
                            n = "number(unitless)";
                            break;
                        case w:
                            if (o) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t)
                            }
                            n = "hex or rgb string";
                            break;
                        case x:
                            if (i) return t + this.unit;
                            if (o && e.test(t)) return t;
                            n = "number(px) or string(unit)";
                            break;
                        case _:
                            if (i) return t + this.unit;
                            if (o && e.test(t)) return t;
                            n = "number(px) or string(unit or %)";
                            break;
                        case j:
                            if (i) return t + this.angle;
                            if (o && e.test(t)) return t;
                            n = "number(deg) or string(angle)";
                            break;
                        case I:
                            if (i) return t;
                            if (o && _.test(t)) return t;
                            n = "number(unitless) or string(unit or %)"
                    }
                    return a(n, t), t
                }, t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            $ = l(V, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), w))
                }
            }),
            X = l(V, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function() {
                    return this.$el[this.name]()
                }, t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            W = l(V, function(t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t) o = K[n], i = o[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
                }
                t.init = function() {
                    e.init.apply(this, arguments), this.current || (this.current = {}, K.perspective && H.perspective && (this.current.perspective = H.perspective, q(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function(t) {
                    n.call(this, t, function(t, e) {
                        this.current[t] = e
                    }), q(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function() {
                    q(this.el, this.name, this.style(this.current))
                }, t.style = function(t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function(t) {
                    var e, r = {};
                    return n.call(this, t, function(t, n, i) {
                        r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), r
                }
            }),
            G = l(function(e) {
                function n(t) {
                    1 === p.push(t) && R(a)
                }

                function a() {
                    var t, e, n, r = p.length;
                    if (r)
                        for (R(a), e = D(), t = r; t--;)(n = p[t]) && n.render(e)
                }

                function c(e) {
                    var n, r = t.inArray(e, p);
                    r >= 0 && (n = p.slice(r + 1), p.length = r, n.length && (p = p.concat(n)))
                }

                function s(t) {
                    return Math.round(t * h) / h
                }

                function f(t, e, n) {
                    return i(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                }
                var l = {
                    ease: d.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || l.ease;
                    d[e] && (e = d[e][1]), "function" != typeof e && (e = l.ease), this.ease = e, this.update = t.update || o, this.complete = t.complete || o, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        r = t.to;
                    void 0 === n && (n = l.from), void 0 === r && (r = l.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof r ? (this.begin = n, this.change = r - n) : this.format(r, n), this.value = this.begin + this.unit, this.start = D(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    this.active || (this.start || (this.start = D()), this.active = !0, n(this))
                }, e.stop = function() {
                    this.active && (this.active = !1, c(this))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? f(this.startRGB, this.endRGB, r) : s(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = r(e), this.endRGB = r(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(g, "");
                        n !== t.replace(g, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = o
                };
                var p = [],
                    h = 1e3
            }),
            F = l(G, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0, this.complete = t.complete || o, this.context = t.context, this.play()
                }, t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            B = l(G, function(t, e) {
                t.init = function(t) {
                    this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
                    var e, n;
                    for (e in t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new G({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function(t) {
                    var e, n, r = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !M.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!M.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
            return new G(t)
        }, e.delay = function(t, e, n) {
            return new F({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var q = t.style,
            U = t.css,
            Q = {
                transform: M.transform && M.transform.css
            },
            Y = {
                color: [$, w],
                background: [$, w, "background-color"],
                "outline-color": [$, w],
                "border-color": [$, w],
                "border-top-color": [$, w],
                "border-right-color": [$, w],
                "border-bottom-color": [$, w],
                "border-left-color": [$, w],
                "border-width": [V, x],
                "border-top-width": [V, x],
                "border-right-width": [V, x],
                "border-bottom-width": [V, x],
                "border-left-width": [V, x],
                "border-spacing": [V, x],
                "letter-spacing": [V, x],
                margin: [V, x],
                "margin-top": [V, x],
                "margin-right": [V, x],
                "margin-bottom": [V, x],
                "margin-left": [V, x],
                padding: [V, x],
                "padding-top": [V, x],
                "padding-right": [V, x],
                "padding-bottom": [V, x],
                "padding-left": [V, x],
                "outline-width": [V, x],
                opacity: [V, b],
                top: [V, _],
                right: [V, _],
                bottom: [V, _],
                left: [V, _],
                "font-size": [V, _],
                "text-indent": [V, _],
                "word-spacing": [V, _],
                width: [V, _],
                "min-width": [V, _],
                "max-width": [V, _],
                height: [V, _],
                "min-height": [V, _],
                "max-height": [V, _],
                "line-height": [V, I],
                "scroll-top": [X, b, "scrollTop"],
                "scroll-left": [X, b, "scrollLeft"]
            },
            K = {};
        M.transform && (Y.transform = [W], K = {
            x: [_, "translateX"],
            y: [_, "translateY"],
            rotate: [j],
            rotateX: [j],
            rotateY: [j],
            scale: [b],
            scaleX: [b],
            scaleY: [b],
            skew: [j],
            skewX: [j],
            skewY: [j]
        }), M.transform && M.backface && (K.z = [_, "translateZ"], K.rotateZ = [j], K.scaleZ = [b], K.perspective = [x]);
        var Z = /ms/,
            J = /s|\./;
        return t.tram = e
    }(window.jQuery);
    var lt, dt, pt, ht, vt, yt = {},
        gt = t(function(t) {
            var e = window.$,
                n = yt && e.tram;
            /*!
             * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
             * _.each
             * _.map
             * _.find
             * _.filter
             * _.any
             * _.contains
             * _.delay
             * _.defer
             * _.throttle (webflow)
             * _.debounce
             * _.keys
             * _.has
             * _.now
             *
             * http://underscorejs.org
             * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             * Underscore may be freely distributed under the MIT license.
             * @license MIT
             */
            t.exports = function() {
                var t = {};
                t.VERSION = "1.6.0-Webflow";
                var e = {},
                    r = Array.prototype,
                    i = Object.prototype,
                    o = Function.prototype,
                    a = (r.push, r.slice),
                    u = (r.concat, i.toString, i.hasOwnProperty),
                    c = r.forEach,
                    s = r.map,
                    f = (r.reduce, r.reduceRight, r.filter),
                    l = (r.every, r.some),
                    d = r.indexOf,
                    p = (r.lastIndexOf, Array.isArray, Object.keys),
                    h = (o.bind, t.each = t.forEach = function(n, r, i) {
                        if (null == n) return n;
                        if (c && n.forEach === c) n.forEach(r, i);
                        else if (n.length === +n.length) {
                            for (var o = 0, a = n.length; o < a; o++)
                                if (r.call(i, n[o], o, n) === e) return
                        } else
                            for (var u = t.keys(n), o = 0, a = u.length; o < a; o++)
                                if (r.call(i, n[u[o]], u[o], n) === e) return;
                        return n
                    });
                t.map = t.collect = function(t, e, n) {
                    var r = [];
                    return null == t ? r : s && t.map === s ? t.map(e, n) : (h(t, function(t, i, o) {
                        r.push(e.call(n, t, i, o))
                    }), r)
                }, t.find = t.detect = function(t, e, n) {
                    var r;
                    return v(t, function(t, i, o) {
                        if (e.call(n, t, i, o)) return r = t, !0
                    }), r
                }, t.filter = t.select = function(t, e, n) {
                    var r = [];
                    return null == t ? r : f && t.filter === f ? t.filter(e, n) : (h(t, function(t, i, o) {
                        e.call(n, t, i, o) && r.push(t)
                    }), r)
                };
                var v = t.some = t.any = function(n, r, i) {
                    r || (r = t.identity);
                    var o = !1;
                    return null == n ? o : l && n.some === l ? n.some(r, i) : (h(n, function(t, n, a) {
                        if (o || (o = r.call(i, t, n, a))) return e
                    }), !!o)
                };
                t.contains = t.include = function(t, e) {
                    return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : v(t, function(t) {
                        return t === e
                    }))
                }, t.delay = function(t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function() {
                        return t.apply(null, n)
                    }, e)
                }, t.defer = function(e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
                }, t.throttle = function(t) {
                    var e, r, i;
                    return function() {
                        e || (e = !0, r = arguments, i = this, n.frame(function() {
                            e = !1, t.apply(i, r)
                        }))
                    }
                }, t.debounce = function(e, n, r) {
                    var i, o, a, u, c, s = function() {
                        var f = t.now() - u;
                        f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
                    };
                    return function() {
                        a = this, o = arguments, u = t.now();
                        var f = r && !i;
                        return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
                    }
                }, t.defaults = function(e) {
                    if (!t.isObject(e)) return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o])
                    }
                    return e
                }, t.keys = function(e) {
                    if (!t.isObject(e)) return [];
                    if (p) return p(e);
                    var n = [];
                    for (var r in e) t.has(e, r) && n.push(r);
                    return n
                }, t.has = function(t, e) {
                    return u.call(t, e)
                }, t.isObject = function(t) {
                    return t === Object(t)
                }, t.now = Date.now || function() {
                    return (new Date).getTime()
                }, t.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var y = /(.)^/,
                    g = {
                        "'": "'",
                        "\\": "\\",
                        "\r": "r",
                        "\n": "n",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    m = /\\|'|\r|\n|\u2028|\u2029/g,
                    b = function(t) {
                        return "\\" + g[t]
                    };
                return t.template = function(e, n, r) {
                    !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
                    var i = RegExp([(n.escape || y).source, (n.interpolate || y).source, (n.evaluate || y).source].join("|") + "|$", "g"),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, function(t, n, r, i, u) {
                        return a += e.slice(o, u).replace(m, b), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
                    }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                    try {
                        var u = new Function(n.variable || "obj", "_", a)
                    } catch (t) {
                        throw t.source = a, t
                    }
                    var c = function(e) {
                            return u.call(this, e, t)
                        },
                        s = n.variable || "obj";
                    return c.source = "function(" + s + "){\n" + a + "}", c
                }, t
            }()
        }),
        mt = gt && "object" == typeof gt && "default" in gt ? gt.default : gt,
        bt = t(function(t) {
            function e(t) {
                s.env() && (y(t.design) && h.on("__wf_design", t.design), y(t.preview) && h.on("__wf_preview", t.preview)), y(t.destroy) && h.on("__wf_destroy", t.destroy), t.ready && y(t.ready) && n(t)
            }

            function n(t) {
                b ? t.ready() : g.contains(l, t.ready) || l.push(t.ready)
            }

            function r(t) {
                y(t.design) && h.off("__wf_design", t.design), y(t.preview) && h.off("__wf_preview", t.preview), y(t.destroy) && h.off("__wf_destroy", t.destroy), t.ready && y(t.ready) && i(t)
            }

            function i(t) {
                l = g.filter(l, function(e) {
                    return e !== t.ready
                })
            }

            function o(t, e) {
                var n = [],
                    r = {};
                return r.up = g.throttle(function(t) {
                    g.each(n, function(e) {
                        e(t)
                    })
                }), t && e && t.on(e, r.up), r.on = function(t) {
                    "function" == typeof t && (g.contains(n, t) || n.push(t))
                }, r.off = function(t) {
                    n = arguments.length ? g.filter(n, function(e) {
                        return e !== t
                    }) : []
                }, r
            }

            function a(t) {
                y(t) && t()
            }

            function u() {
                w = !1, g.each(f, e)
            }

            function c() {
                T && (T.reject(), h.off("load", T.resolve)), T = new p.Deferred, h.on("load", T.resolve)
            }
            var s = {},
                f = {},
                l = [],
                d = window.Webflow || [],
                p = window.jQuery,
                h = p(window),
                v = p(document),
                y = p.isFunction,
                g = s._ = mt,
                m = yt && p.tram,
                b = !1,
                w = !1;
            m.config.hideBackface = !1, m.config.keepInherited = !0, s.define = function(t, n, i) {
                f[t] && r(f[t]);
                var o = f[t] = n(p, g, i) || {};
                return e(o), o
            }, s.require = function(t) {
                return f[t]
            }, s.push = function(t) {
                b ? y(t) && t() : d.push(t)
            }, s.env = function(t) {
                var e = window.__wf_design,
                    n = void 0 !== e;
                return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
            };
            var x = navigator.userAgent.toLowerCase(),
                _ = navigator.appVersion.toLowerCase(),
                j = s.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                I = s.env.chrome = /chrome/.test(x) && /Google/.test(navigator.vendor) && parseInt(_.match(/chrome\/(\d+)\./)[1], 10),
                E = s.env.ios = /(ipod|iphone|ipad)/.test(x);
            s.env.safari = /safari/.test(x) && !I && !E;
            var O;
            j && v.on("touchstart mousedown", function(t) {
                O = t.target
            }), s.validClick = j ? function(t) {
                return t === O || p.contains(t, O)
            } : function() {
                return !0
            };
            var A = "resize.webflow orientationchange.webflow load.webflow";
            s.resize = o(h, A), s.scroll = o(h, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), s.redraw = o(), s.location = function(t) {
                window.location = t
            }, s.env() && (s.location = function() {}), s.ready = function() {
                b = !0, w ? u() : g.each(l, a), g.each(d, a), s.resize.up()
            };
            var T;
            s.load = function(t) {
                T.then(t)
            }, s.destroy = function(t) {
                t = t || {}, w = !0, h.triggerHandler("__wf_destroy"), null != t.domready && (b = t.domready), g.each(f, r), s.resize.off(), s.scroll.off(), s.redraw.off(), l = [], d = [], "pending" === T.state() && c()
            }, p(s.ready), c(), t.exports = window.Webflow = s
        }),
        wt = bt && "object" == typeof bt && "default" in bt ? bt.default : bt,
        xt = (t(function(t) {
            var e = wt;
            e.define("brand", t.exports = function(t) {
                function n() {
                    var e = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                        n = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({
                            marginRight: "8px",
                            width: "16px"
                        }),
                        r = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg");
                    return e.append(n, r), e[0]
                }

                function r() {
                    var t = u.children(c),
                        n = t.length && t.get(0) === i,
                        r = e.env("editor");
                    n ? r && t.remove() : (t.length && t.remove(), r || u.append(i))
                }
                var i, o = {},
                    a = t("html"),
                    u = t("body"),
                    c = ".w-webflow-badge",
                    s = window.location,
                    f = /PhantomJS/i.test(navigator.userAgent);
                return o.ready = function() {
                    var t = a.attr("data-wf-status"),
                        e = a.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(e) && s.hostname !== e && (t = !0), t && !f && (i = i || n(), r(), setTimeout(r, 500))
                }, o
            })
        }), t(function(t) {
            var e = window.jQuery,
                n = {},
                r = [],
                i = {
                    reset: function(t, e) {
                        e.__wf_intro = null
                    },
                    intro: function(t, r) {
                        r.__wf_intro || (r.__wf_intro = !0, e(r).triggerHandler(n.types.INTRO))
                    },
                    outro: function(t, r) {
                        r.__wf_intro && (r.__wf_intro = null, e(r).triggerHandler(n.types.OUTRO))
                    }
                };
            n.triggers = {}, n.types = {
                INTRO: "w-ix-intro.w-ix",
                OUTRO: "w-ix-outro.w-ix"
            }, n.init = function() {
                for (var t = r.length, o = 0; o < t; o++) {
                    var a = r[o];
                    a[0](0, a[1])
                }
                r = [], e.extend(n.triggers, i)
            }, n.async = function() {
                for (var t in i) {
                    var e = i[t];
                    i.hasOwnProperty(t) && (n.triggers[t] = function(t, n) {
                        r.push([e, n])
                    })
                }
            }, n.async(), t.exports = n
        })),
        _t = xt && "object" == typeof xt && "default" in xt ? xt.default : xt,
        jt = t(function(t) {
            function e(t, e) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
            }
            var n = _t,
                r = window.jQuery,
                i = {},
                o = {
                    reset: function(t, e) {
                        n.triggers.reset(t, e)
                    },
                    intro: function(t, r) {
                        n.triggers.intro(t, r), e(r, "COMPONENT_ACTIVE")
                    },
                    outro: function(t, r) {
                        n.triggers.outro(t, r), e(r, "COMPONENT_INACTIVE")
                    }
                };
            i.triggers = {}, i.types = {
                INTRO: "w-ix-intro.w-ix",
                OUTRO: "w-ix-outro.w-ix"
            }, r.extend(i.triggers, o), t.exports = i
        }),
        It = jt && "object" == typeof jt && "default" in jt ? jt.default : jt,
        Et = (t(function(t) {
            var e = wt,
                n = It;
            e.define("dropdown", t.exports = function(t, r) {
                function i() {
                    b = _ && e.env("design"), (m = x.find(I)).each(o)
                }

                function o(e, n) {
                    var r = t(n),
                        i = t.data(n, I);
                    i || (i = t.data(n, I, {
                        open: !1,
                        el: r,
                        config: {}
                    })), i.list = r.children(".w-dropdown-list"), i.toggle = r.children(".w-dropdown-toggle"), i.links = i.list.children(".w-dropdown-link"), i.outside = p(i), i.complete = h(i), i.leave = y(i), i.moveOutside = g(i), r.off(I), i.toggle.off(I), a(i), i.nav && i.nav.off(I), i.nav = r.closest(".w-nav"), i.nav.on(O, u(i)), b ? r.on("setting" + I, u(i)) : (i.toggle.on("tap" + I, c(i)), i.config.hover && i.toggle.on("mouseenter" + I, v(i)), r.on(O, u(i)), _ && (i.hovering = !1, f(i)))
                }

                function a(t) {
                    var e = Number(t.el.css("z-index"));
                    t.manageZ = e === T || e === T + 1, t.config = {
                        hover: Boolean(t.el.attr("data-hover")) && !j,
                        delay: Number(t.el.attr("data-delay")) || 0
                    }
                }

                function u(t) {
                    return function(e, n) {
                        return n = n || {}, "w-close" === e.type ? f(t) : "setting" === e.type ? (a(t), !0 === n.open && s(t, !0), void(!1 === n.open && f(t, !0))) : void 0
                    }
                }

                function c(t) {
                    return r.debounce(function() {
                        t.open ? f(t) : s(t)
                    })
                }

                function s(t) {
                    if (!t.open) {
                        d(t), t.open = !0, t.list.addClass(E), t.toggle.addClass(E), A.intro(0, t.el[0]), e.redraw.up(), t.manageZ && t.el.css("z-index", T + 1);
                        var n = e.env("editor");
                        b || x.on("mouseup" + I, t.outside), t.hovering && !n && t.el.on("mouseleave" + I, t.leave), t.hovering && n && x.on("mousemove" + I, t.moveOutside), window.clearTimeout(t.delayId)
                    }
                }

                function f(t, e) {
                    if (t.open && (!t.config.hover || !t.hovering)) {
                        t.open = !1;
                        var n = t.config;
                        if (A.outro(0, t.el[0]), x.off("mouseup" + I, t.outside), t.el.off("mouseleave" + I, t.leave), x.off("mousemove" + I, t.moveOutside), window.clearTimeout(t.delayId), !n.delay || e) return t.complete();
                        t.delayId = window.setTimeout(t.complete, n.delay)
                    }
                }

                function l() {
                    x.find(I).each(function(e, n) {
                        t(n).triggerHandler(O)
                    })
                }

                function d(e) {
                    var n = e.el[0];
                    m.each(function(e, r) {
                        var i = t(r);
                        i.is(n) || i.has(n).length || i.triggerHandler(O)
                    })
                }

                function p(n) {
                    return n.outside && x.off("mouseup" + I, n.outside), r.debounce(function(r) {
                        if (n.open) {
                            var i = t(r.target);
                            if (!i.closest(".w-dropdown-toggle").length) {
                                var o = -1 === t.inArray(n.el[0], i.parents(I)),
                                    a = e.env("editor");
                                if (o) {
                                    if (a) {
                                        var u = 1 === i.parents().length && 1 === i.parents("svg").length,
                                            c = i.parents(".w-editor-bem-EditorHoverControls").length;
                                        if (u || c) return
                                    }
                                    f(n)
                                }
                            }
                        }
                    })
                }

                function h(t) {
                    return function() {
                        t.list.removeClass(E), t.toggle.removeClass(E), t.manageZ && t.el.css("z-index", "")
                    }
                }

                function v(t) {
                    return function() {
                        t.hovering = !0, s(t)
                    }
                }

                function y(t) {
                    return function() {
                        t.hovering = !1, f(t)
                    }
                }

                function g(e) {
                    return r.debounce(function(n) {
                        if (e.open) {
                            var r = t(n.target);
                            if (-1 === t.inArray(e.el[0], r.parents(I))) {
                                var i = r.parents(".w-editor-bem-EditorHoverControls").length,
                                    o = r.parents(".w-editor-bem-RTToolbar").length,
                                    a = t(".w-editor-bem-EditorOverlay"),
                                    u = a.find(".w-editor-edit-outline").length || a.find(".w-editor-bem-RTToolbar").length;
                                if (i || o || u) return;
                                e.hovering = !1, f(e)
                            }
                        }
                    })
                }
                var m, b, w = {},
                    x = t(document),
                    _ = e.env(),
                    j = e.env.touch,
                    I = ".w-dropdown",
                    E = "w--open",
                    O = "w-close" + I,
                    A = n.triggers,
                    T = 900,
                    S = !1;
                return w.ready = i, w.design = function() {
                    S && l(), S = !1, i()
                }, w.preview = function() {
                    S = !0, i()
                }, w
            })
        }), t(function(t) {
            var e = wt,
                n = _t;
            e.define("ix", t.exports = function(t, r) {
                function i(t) {
                    t && (A = {}, r.each(t, function(t) {
                        A[t.slug] = t.value
                    }), o())
                }

                function o() {
                    a(), n.init(), e.redraw.up()
                }

                function a() {
                    var n = t("[data-ix]");
                    n.length && (n.each(s), n.each(u), T.length && (e.scroll.on(f), setTimeout(f, 1)), S.length && e.load(l), P.length && setTimeout(d, k))
                }

                function u(i, o) {
                    var a = t(o),
                        u = a.attr("data-ix"),
                        s = A[u];
                    if (s) {
                        var f = s.triggers;
                        f && (m.style(a, s.style), r.each(f, function(t) {
                            function r() {
                                p(t, a, {
                                    group: "A"
                                })
                            }

                            function i() {
                                p(t, a, {
                                    group: "B"
                                })
                            }
                            var o = {},
                                u = t.type,
                                s = t.stepsB && t.stepsB.length;
                            if ("load" !== u) {
                                if ("click" === u) return a.on("click" + w, function(n) {
                                    e.validClick(n.currentTarget) && ("#" === a.attr("href") && n.preventDefault(), p(t, a, {
                                        group: o.clicked ? "B" : "A"
                                    }), s && (o.clicked = !o.clicked))
                                }), void(O = O.add(a));
                                if ("hover" === u) return a.on("mouseenter" + w, r), a.on("mouseleave" + w, i), void(O = O.add(a));
                                if ("scroll" !== u) {
                                    var f = M[u];
                                    if (f) {
                                        var l = a.closest(f);
                                        return l.on(n.types.INTRO, r).on(n.types.OUTRO, i), void(O = O.add(l))
                                    }
                                } else T.push({
                                    el: a,
                                    trigger: t,
                                    state: {
                                        active: !1
                                    },
                                    offsetTop: c(t.offsetTop),
                                    offsetBot: c(t.offsetBot)
                                })
                            } else t.preload && !j ? S.push(r) : P.push(r)
                        }))
                    }
                }

                function c(t) {
                    if (!t) return 0;
                    t = String(t);
                    var e = parseInt(t, 10);
                    return e !== e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
                }

                function s(e, n) {
                    t(n).off(w)
                }

                function f() {
                    for (var t = b.scrollTop(), e = b.height(), n = T.length, r = 0; r < n; r++) {
                        var i = T[r],
                            o = i.el,
                            a = i.trigger,
                            u = a.stepsB && a.stepsB.length,
                            c = i.state,
                            s = o.offset().top,
                            f = o.outerHeight(),
                            l = i.offsetTop,
                            d = i.offsetBot;
                        l < 1 && l > 0 && (l *= e), d < 1 && d > 0 && (d *= e);
                        var h = s + f - l >= t && s + d <= t + e;
                        h !== c.active && ((!1 !== h || u) && (c.active = h, p(a, o, {
                            group: h ? "A" : "B"
                        })))
                    }
                }

                function l() {
                    for (var t = S.length, e = 0; e < t; e++) S[e]()
                }

                function d() {
                    for (var t = P.length, e = 0; e < t; e++) P[e]()
                }

                function p(e, n, r, i) {
                    function o() {
                        if (s) return p(e, n, r, !0);
                        "auto" === v.width && d.set({
                            width: "auto"
                        }), "auto" === v.height && d.set({
                            height: "auto"
                        }), a && a()
                    }
                    var a = (r = r || {}).done,
                        u = e.preserve3d;
                    if (!y || r.force) {
                        var c = r.group || "A",
                            s = e["loop" + c],
                            f = e["steps" + c];
                        if (f && f.length) {
                            if (f.length < 2 && (s = !1), !i) {
                                var l = e.selector;
                                l && (n = e.descend ? n.find(l) : e.siblings ? n.siblings(l) : t(l), j && n.attr("data-ix-affect", 1)), I && n.addClass("w-ix-emptyfix"), u && n.css("transform-style", "preserve-3d")
                            }
                            for (var d = x(n), v = {
                                    omit3d: !u
                                }, g = 0; g < f.length; g++) h(d, f[g], v);
                            v.start ? d.then(o) : o()
                        }
                    }
                }

                function h(t, n, r) {
                    var i = "add",
                        o = "start";
                    r.start && (i = o = "then");
                    var a = n.transition;
                    if (a) {
                        a = a.split(",");
                        for (var u = 0; u < a.length; u++) {
                            var c = a[u];
                            t[i](c)
                        }
                    }
                    var s = v(n, r) || {};
                    if (null != s.width && (r.width = s.width), null != s.height && (r.height = s.height), null == a) {
                        r.start ? t.then(function() {
                            var n = this.queue;
                            this.set(s), s.display && (t.redraw(), e.redraw.up()), this.queue = n, this.next()
                        }) : (t.set(s), s.display && (t.redraw(), e.redraw.up()));
                        var f = s.wait;
                        null != f && (t.wait(f), r.start = !0)
                    } else {
                        if (s.display) {
                            var l = s.display;
                            delete s.display, r.start ? t.then(function() {
                                var t = this.queue;
                                this.set({
                                    display: l
                                }).redraw(), e.redraw.up(), this.queue = t, this.next()
                            }) : (t.set({
                                display: l
                            }).redraw(), e.redraw.up())
                        }
                        t[o](s), r.start = !0
                    }
                }

                function v(t, e) {
                    var n = e && e.omit3d,
                        r = {},
                        i = !1;
                    for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (r[o] = t[o], i = !0);
                    return i ? r : null
                }
                var y, g, m = {},
                    b = t(window),
                    w = ".w-ix",
                    x = t.tram,
                    _ = e.env,
                    j = _(),
                    I = _.chrome && _.chrome < 35,
                    E = "none 0s ease 0s",
                    O = t(),
                    A = {},
                    T = [],
                    S = [],
                    P = [],
                    k = 1,
                    M = {
                        tabs: ".w-tab-link, .w-tab-pane",
                        dropdown: ".w-dropdown",
                        slider: ".w-slide",
                        navbar: ".w-nav"
                    };
                return m.init = function(t) {
                    setTimeout(function() {
                        i(t)
                    }, 1)
                }, m.preview = function() {
                    y = !1, k = 100, setTimeout(function() {
                        i(window.__wf_ix)
                    }, 1)
                }, m.design = function() {
                    y = !0, m.destroy()
                }, m.destroy = function() {
                    g = !0, O.each(s), e.scroll.off(f), n.async(), T = [], S = [], P = []
                }, m.ready = function() {
                    if (j) return _("design") ? m.design() : m.preview();
                    A && g && (g = !1, o())
                }, m.run = p, m.style = j ? function(e, n) {
                    var r = x(e);
                    if (!t.isEmptyObject(n)) {
                        e.css("transition", "");
                        var i = e.css("transition");
                        i === E && (i = r.upstream = null), r.upstream = E, r.set(v(n)), r.upstream = i
                    }
                } : function(t, e) {
                    x(t).set(v(e))
                }, m
            })
        }), "object" == typeof global && global && global.Object === Object && global),
        Ot = "object" == typeof self && self && self.Object === Object && self,
        At = (Et || Ot || Function("return this")()).Symbol,
        Tt = Object.prototype,
        St = Tt.hasOwnProperty,
        Pt = Tt.toString,
        kt = At ? At.toStringTag : void 0,
        Mt = Object.prototype.toString,
        Lt = "[object Null]",
        Ct = "[object Undefined]",
        Rt = At ? At.toStringTag : void 0,
        Dt = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }(Object.getPrototypeOf, Object),
        Nt = "[object Object]",
        zt = Function.prototype,
        Vt = Object.prototype,
        $t = zt.toString,
        Xt = Vt.hasOwnProperty,
        Wt = $t.call(Object),
        Gt = t(function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e, n = t.Symbol;
                return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
            }
        }),
        Ft = Gt && "object" == typeof Gt && "default" in Gt ? Gt.default : Gt,
        Bt = t(function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(Ft);
            r = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : void 0 !== t ? t : Function("return this")();
            var o = (0, i.default)(r);
            e.default = o
        }),
        Ht = Bt && "object" == typeof Bt && "default" in Bt ? Bt.default : Bt,
        qt = t(function(t) {
            t.exports = Ht
        }),
        Ut = qt && "object" == typeof qt && "default" in qt ? qt.default : qt,
        Qt = {
            INIT: "@@redux/INIT"
        },
        Yt = t(function(t) {
            t.exports = function(t, e, n, r, i, o, a, u) {
                if (!t) {
                    var c;
                    if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = [n, r, i, o, a, u],
                            f = 0;
                        (c = new Error(e.replace(/%s/g, function() {
                            return s[f++]
                        }))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1, c
                }
            }
        }),
        Kt = Yt && "object" == typeof Yt && "default" in Yt ? Yt.default : Yt,
        Zt = t(function(t) {
            function e(t) {
                return t instanceof Array ? t.slice() : t && "object" == typeof t ? d(new t.constructor, t) : t
            }

            function n() {
                function t(r, i) {
                    Array.isArray(r) && Array.isArray(i) || s(!Array.isArray(i), "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."), s("object" == typeof i && null !== i, "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.", Object.keys(n).join(", "));
                    var o = r;
                    p(i);
                    return p(i).forEach(function(a) {
                        if (f.call(n, a)) o = n[a](i[a], o, i, r);
                        else {
                            var u = t(r[a], i[a]);
                            u !== o[a] && (o === r && (o = e(r)), o[a] = u)
                        }
                    }), o
                }
                var n = d({}, h);
                return t.extend = function(t, e) {
                    n[t] = e
                }, t
            }

            function r(t, e, n) {
                s(Array.isArray(t), "update(): expected target of %s to be an array; got %s.", n, t);
                var r = e[n];
                s(Array.isArray(r), "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", n, r)
            }

            function i(t, e) {
                s(Array.isArray(t), "Expected $splice target to be an array; got %s", t), o(e.$splice)
            }

            function o(t) {
                s(Array.isArray(t), "update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", t)
            }

            function a(t) {
                s("function" == typeof t, "update(): expected spec of $apply to be a function; got %s.", t)
            }

            function u(t) {
                s(1 === Object.keys(t).length, "Cannot have more than one key in an object with $set")
            }

            function c(t, e) {
                s(e && "object" == typeof e, "update(): $merge expects a spec of type 'object'; got %s", e), s(t && "object" == typeof t, "update(): $merge expects a target of type 'object'; got %s", t)
            }
            var s = Kt,
                f = Object.prototype.hasOwnProperty,
                l = Array.prototype.splice,
                d = Object.assign || function(t, e) {
                    return p(e).forEach(function(n) {
                        f.call(e, n) && (t[n] = e[n])
                    }), t
                },
                p = "function" == typeof Object.getOwnPropertySymbols ? function(t) {
                    return Object.keys(t).concat(Object.getOwnPropertySymbols(t))
                } : function(t) {
                    return Object.keys(t)
                },
                h = {
                    $push: function(t, e, n) {
                        return r(e, n, "$push"), e.concat(t)
                    },
                    $unshift: function(t, e, n) {
                        return r(e, n, "$unshift"), t.concat(e)
                    },
                    $splice: function(t, n, r, a) {
                        var u = n === a ? e(a) : n;
                        return i(u, r), t.forEach(function(t) {
                            o(t), l.apply(u, t)
                        }), u
                    },
                    $set: function(t, e, n) {
                        return u(n), t
                    },
                    $unset: function(t, n, r, i) {
                        s(Array.isArray(t), "update(): expected spec of $unset to be an array; got %s. Did you forget to wrap the key(s) in an array?", t);
                        var o = n;
                        return t.forEach(function(t) {
                            Object.hasOwnProperty.call(o, t) && (n === i && (n = e(i)), delete n[t])
                        }), n
                    },
                    $merge: function(t, n, r, i) {
                        return c(n = n, t), p(t).forEach(function(r) {
                            t[r] !== n[r] && (n === i && (n = e(i)), n[r] = t[r])
                        }), n
                    },
                    $apply: function(t, e) {
                        return a(t), t(e)
                    }
                };
            t.exports = n(), t.exports.newContext = n
        }),
        Jt = Zt && "object" == typeof Zt && "default" in Zt ? Zt.default : Zt,
        te = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        ee = Object.create(null, (lt = {}, ft.defineProperty(lt, "IX2_PREVIEW_REQUESTED", {
            value: "preview"
        }), ft.defineProperty(lt, "IX2_PLAYBACK_REQUESTED", {
            value: "playback"
        }), ft.defineProperty(lt, "IX2_STOP_REQUESTED", {
            value: "stop"
        }), ft.defineProperty(lt, "IX2_CLEAR_REQUESTED", {
            value: "clear"
        }), lt)),
        ne = {
            active: !1,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null
        },
        re = 1.70158,
        ie = Object.freeze({
            inQuad: function(t) {
                return Math.pow(t, 2)
            },
            outQuad: function(t) {
                return -(Math.pow(t - 1, 2) - 1)
            },
            inOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
            },
            inCubic: function(t) {
                return Math.pow(t, 3)
            },
            outCubic: function(t) {
                return Math.pow(t - 1, 3) + 1
            },
            inOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
            },
            inQuart: function(t) {
                return Math.pow(t, 4)
            },
            outQuart: function(t) {
                return -(Math.pow(t - 1, 4) - 1)
            },
            inOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
            },
            inQuint: function(t) {
                return Math.pow(t, 5)
            },
            outQuint: function(t) {
                return Math.pow(t - 1, 5) + 1
            },
            inOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
            },
            inSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            outSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            inOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            inExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            outExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            inOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            inCirc: function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            },
            outCirc: function(t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2))
            },
            inOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            outBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            inBack: function(t) {
                var e = re;
                return t * t * ((e + 1) * t - e)
            },
            outBack: function(t) {
                var e = re;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            inOutBack: function(t) {
                var e = re;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            inElastic: function(t) {
                var e = re,
                    n = 0,
                    r = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            outElastic: function(t) {
                var e = re,
                    n = 0,
                    r = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            inOutElastic: function(t) {
                var e = re,
                    n = 0,
                    r = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            swingFromTo: function(t) {
                var e = re;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            swingFrom: function(t) {
                var e = re;
                return t * t * ((e + 1) * t - e)
            },
            swingTo: function(t) {
                var e = re;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            bounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            bouncePast: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }
        }),
        oe = function(t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                o = t.destinationKeys,
                a = t.smoothing,
                u = t.restingValue,
                c = e.payload.parameters,
                l = Math.max(1 - a, .01),
                d = c[r];
            null == d && (l = 1, d = u);
            for (var p = s(n + s((Math.max(d, 0) || 0) - n) * l), h = 100 * p, v = void 0, y = void 0, g = void 0, m = void 0, b = 0, w = i.length; b < w; b++) {
                var x = i[b],
                    _ = x.keyframe,
                    j = x.actionItems;
                if (h >= _) {
                    v = j[0];
                    var I = i[b + 1],
                        E = I && h !== _;
                    y = E ? I.actionItems[0] : null, E && (g = _ / 100, m = (I.keyframe - _) / 100)
                }
            }
            var O = {};
            if (v && !y)
                for (var A = 0, T = o.length; A < T; A++) {
                    var S = o[A];
                    O[S] = v.config[S]
                } else if (v && y)
                    for (var P = (p - g) / m, k = f(v.config.easing, P), M = 0, L = o.length; M < L; M++) {
                        var C = o[M],
                            R = v.config[C],
                            D = (y.config[C] - R) * k + R;
                        O[C] = D
                    }
            return Jt(t, {
                position: {
                    $set: p
                },
                current: {
                    $set: O
                }
            })
        },
        ae = function(t, e) {
            var n = t,
                r = n.active,
                i = n.origin,
                o = n.start,
                a = n.immediate,
                u = n.isGeneral,
                c = n.verbose,
                l = n.actionItem,
                d = n.destination,
                p = n.destinationKeys,
                h = l.config.easing,
                v = l.config,
                y = v.duration,
                g = v.delay;
            u ? y = 0 : a && (y = g = 0);
            var m = e.payload.now;
            if (r && i) {
                var b = m - (o + g);
                if (c) {
                    var w = m - o,
                        x = y + g,
                        _ = s(Math.min(Math.max(0, w / x), 1));
                    t = Jt(t, {
                        verboseTimeElapsed: {
                            $set: x * _
                        }
                    })
                }
                if (b < 0) return t;
                var j = s(Math.min(Math.max(0, b / y), 1)),
                    I = f(h, j),
                    E = {},
                    O = p.length ? p.reduce(function(t, e) {
                        var n = d[e],
                            r = parseFloat(i[e]) || 0,
                            o = (parseFloat(n) - r) * I + r;
                        return t[e] = o, t
                    }, {}) : null;
                return E.current = {
                    $set: O
                }, E.position = {
                    $set: j
                }, 1 === j && (E.active = {
                    $set: !1
                }, E.complete = {
                    $set: !0
                }), Jt(t, E)
            }
            return t
        },
        ue = function(t) {
            for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                "function" == typeof t[i] && (n[i] = t[i])
            }
            var o, a = Object.keys(n);
            try {
                c(n)
            } catch (t) {
                o = t
            }
            return function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    e = arguments[1];
                if (o) throw o;
                for (var r = !1, i = {}, c = 0; c < a.length; c++) {
                    var s = a[c],
                        f = n[s],
                        l = t[s],
                        d = f(l, e);
                    if (void 0 === d) {
                        var p = u(s, e);
                        throw new Error(p)
                    }
                    i[s] = d, r = r || d !== l
                }
                return r ? i : t
            }
        }({
            ixData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                    e = arguments[1];
                switch (e.type) {
                    case "IX2_RAW_DATA_IMPORTED":
                        return e.payload.ixData || Object.freeze({});
                    default:
                        return t
                }
            },
            ixRequest: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
                    e = arguments[1];
                return e.type in ee ? Jt(t, ft.defineProperty({}, ee[e.type], {
                    $set: ft.extends({}, e.payload)
                })) : t
            },
            ixSession: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
                    e = arguments[1];
                switch (e.type) {
                    case "IX2_SESSION_STARTED":
                        return Jt(t, {
                            active: {
                                $set: !0
                            }
                        });
                    case "IX2_SESSION_STOPPED":
                        return ne;
                    case "IX2_EVENT_LISTENER_ADDED":
                        return Jt(t, {
                            eventListeners: {
                                $push: [e.payload]
                            }
                        });
                    case "IX2_EVENT_STATE_CHANGED":
                        return Jt(t, {
                            eventState: ft.defineProperty({}, e.payload.stateKey, {
                                $set: e.payload.newState
                            })
                        });
                    case "IX2_ACTION_LIST_PLAYBACK_CHANGED":
                        var n = e.payload,
                            r = n.actionListId,
                            i = n.isPlaying;
                        return Jt(t, {
                            playbackState: ft.defineProperty({}, r, {
                                $set: i
                            })
                        });
                    case "IX2_VIEWPORT_WIDTH_CHANGED":
                        for (var o = e.payload, a = o.width, u = o.mediaQueries, c = u.length, s = null, f = 0; f < c; f++) {
                            var l = u[f],
                                d = l.key,
                                p = l.min,
                                h = l.max;
                            if (a >= p && a <= h) {
                                s = d;
                                break
                            }
                        }
                        return Jt(t, {
                            viewportWidth: {
                                $set: a
                            },
                            mediaQueryKey: {
                                $set: s
                            }
                        });
                    default:
                        return t
                }
            },
            ixInstances: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                    e = arguments[1];
                switch (e.type) {
                    case "IX2_RAW_DATA_IMPORTED":
                        return e.payload.ixInstances || Object.freeze({});
                    case "IX2_SESSION_STOPPED":
                        return Object.freeze({});
                    case "IX2_INSTANCE_ADDED":
                        var n = e.payload,
                            r = n.instanceId,
                            i = n.actionItem,
                            o = n.element,
                            a = n.eventId,
                            u = n.actionListId,
                            c = n.groupIndex,
                            s = n.isCarrier,
                            f = n.origin,
                            l = n.destination,
                            d = n.immediate,
                            p = n.verbose,
                            h = n.continuous,
                            v = n.parameterId,
                            y = n.actionGroups,
                            g = n.smoothing,
                            m = n.restingValue,
                            b = i.actionTypeId,
                            w = void 0,
                            x = w = /^TRANSFORM_/.test(b),
                            _ = !w && (w = /^STYLE_/.test(b)),
                            j = !w && (w = /^GENERAL_/.test(b)),
                            I = _ && b.replace("STYLE_", "").toLowerCase(),
                            E = Object.keys(l).filter(function(t) {
                                return null != l[t]
                            });
                        return Jt(t, ft.defineProperty({}, r, {
                            $set: {
                                id: r,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: f,
                                destination: l,
                                destinationKeys: E,
                                immediate: d,
                                verbose: p,
                                current: null,
                                actionItem: i,
                                element: o,
                                eventId: a,
                                actionListId: u,
                                groupIndex: c,
                                isTransform: x,
                                isStyle: _,
                                isGeneral: j,
                                isCarrier: s,
                                styleProp: I,
                                continuous: h,
                                parameterId: v,
                                actionGroups: y,
                                smoothing: g,
                                restingValue: m
                            }
                        }));
                    case "IX2_INSTANCE_STARTED":
                        var O = e.payload.instanceId;
                        return Jt(t, ft.defineProperty({}, O, {
                            $merge: {
                                active: !0,
                                complete: !1,
                                start: window.performance.now()
                            }
                        }));
                    case "IX2_INSTANCE_REMOVED":
                        var A = e.payload.instanceId;
                        return Jt(t, {
                            $unset: [A]
                        });
                    case "IX2_ANIMATION_FRAME_CHANGED":
                        for (var T = t, S = Object.keys(t), P = S.length, k = 0; k < P; k++) {
                            var M = S[k],
                                L = t[M],
                                C = L.continuous ? oe : ae;
                            T = Jt(T, ft.defineProperty({}, M, {
                                $set: C(L, e)
                            }))
                        }
                        return T;
                    default:
                        return t
                }
            },
            ixParameters: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1];
                switch (e.type) {
                    case "IX2_RAW_DATA_IMPORTED":
                        return e.payload.ixParameters || {};
                    case "IX2_SESSION_STOPPED":
                        return {};
                    case "IX2_PARAMETER_CHANGED":
                        var n = e.payload,
                            r = n.key,
                            i = n.value;
                        return t[r] = i, t;
                    default:
                        return t
                }
            }
        }),
        ce = t(function(t) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        }),
        se = ce && "object" == typeof ce && "default" in ce ? ce.default : ce,
        fe = t(function(t) {
            var e = Object.prototype.toString;
            t.exports = function(t) {
                return e.call(t)
            }
        }),
        le = fe && "object" == typeof fe && "default" in fe ? fe.default : fe,
        de = t(function(t, e, n) {
            var r = "object" == typeof n && n && n.Object === Object && n;
            t.exports = r
        }),
        pe = de && "object" == typeof de && "default" in de ? de.default : de,
        he = t(function(t) {
            var e = pe,
                n = "object" == typeof self && self && self.Object === Object && self,
                r = e || n || Function("return this")();
            t.exports = r
        }),
        ve = he && "object" == typeof he && "default" in he ? he.default : he,
        ye = t(function(t) {
            var e = ve.Symbol;
            t.exports = e
        }),
        ge = ye && "object" == typeof ye && "default" in ye ? ye.default : ye,
        me = t(function(t) {
            var e = ge,
                n = Object.prototype,
                r = n.hasOwnProperty,
                i = n.toString,
                o = e ? e.toStringTag : void 0;
            t.exports = function(t) {
                var e = r.call(t, o),
                    n = t[o];
                try {
                    t[o] = void 0;
                    var a = !0
                } catch (t) {}
                var u = i.call(t);
                return a && (e ? t[o] = n : delete t[o]), u
            }
        }),
        be = me && "object" == typeof me && "default" in me ? me.default : me,
        we = t(function(t) {
            var e = ge,
                n = be,
                r = le,
                i = "[object Null]",
                o = "[object Undefined]",
                a = e ? e.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? o : i : (t = Object(t), a && a in t ? n(t) : r(t))
            }
        }),
        xe = we && "object" == typeof we && "default" in we ? we.default : we,
        _e = t(function(t) {
            var e = xe,
                n = se,
                r = "[object Symbol]";
            t.exports = function(t) {
                return "symbol" == typeof t || n(t) && e(t) == r
            }
        }),
        je = _e && "object" == typeof _e && "default" in _e ? _e.default : _e,
        Ie = t(function(t) {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        }),
        Ee = Ie && "object" == typeof Ie && "default" in Ie ? Ie.default : Ie,
        Oe = t(function(t) {
            var e = Ee,
                n = je,
                r = NaN,
                i = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                c = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (n(t)) return r;
                if (e(t)) {
                    var s = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = e(s) ? s + "" : s
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(i, "");
                var f = a.test(t);
                return f || u.test(t) ? c(t.slice(2), f ? 2 : 8) : o.test(t) ? r : +t
            }
        }),
        Ae = Oe && "object" == typeof Oe && "default" in Oe ? Oe.default : Oe,
        Te = t(function(t) {
            var e = Ae,
                n = 1 / 0,
                r = 1.7976931348623157e308;
            t.exports = function(t) {
                return t ? (t = e(t)) === n || t === -n ? (t < 0 ? -1 : 1) * r : t === t ? t : 0 : 0 === t ? t : 0
            }
        }),
        Se = Te && "object" == typeof Te && "default" in Te ? Te.default : Te,
        Pe = t(function(t) {
            var e = Se;
            t.exports = function(t) {
                var n = e(t),
                    r = n % 1;
                return n === n ? r ? n - r : n : 0
            }
        }),
        ke = Pe && "object" == typeof Pe && "default" in Pe ? Pe.default : Pe,
        Me = t(function(t) {
            var e = je,
                n = 1 / 0;
            t.exports = function(t) {
                if ("string" == typeof t || e(t)) return t;
                var r = t + "";
                return "0" == r && 1 / t == -n ? "-0" : r
            }
        }),
        Le = Me && "object" == typeof Me && "default" in Me ? Me.default : Me,
        Ce = t(function(t) {
            var e = Array.isArray;
            t.exports = e
        }),
        Re = Ce && "object" == typeof Ce && "default" in Ce ? Ce.default : Ce,
        De = t(function(t) {
            var e = Re,
                n = je,
                r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                i = /^\w*$/;
            t.exports = function(t, o) {
                if (e(t)) return !1;
                var a = typeof t;
                return !("number" != a && "symbol" != a && "boolean" != a && null != t && !n(t)) || i.test(t) || !r.test(t) || null != o && t in Object(o)
            }
        }),
        Ne = De && "object" == typeof De && "default" in De ? De.default : De,
        ze = t(function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
                return i
            }
        }),
        Ve = ze && "object" == typeof ze && "default" in ze ? ze.default : ze,
        $e = t(function(t) {
            function e(t) {
                if ("string" == typeof t) return t;
                if (i(t)) return r(t, e) + "";
                if (o(t)) return c ? c.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -a ? "-0" : n
            }
            var n = ge,
                r = Ve,
                i = Re,
                o = je,
                a = 1 / 0,
                u = n ? n.prototype : void 0,
                c = u ? u.toString : void 0;
            t.exports = e
        }),
        Xe = $e && "object" == typeof $e && "default" in $e ? $e.default : $e,
        We = t(function(t) {
            var e = Xe;
            t.exports = function(t) {
                return null == t ? "" : e(t)
            }
        }),
        Ge = We && "object" == typeof We && "default" in We ? We.default : We,
        Fe = t(function(t) {
            t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }
        }),
        Be = Fe && "object" == typeof Fe && "default" in Fe ? Fe.default : Fe,
        He = t(function(t) {
            var e = Be;
            t.exports = function(t, n) {
                var r = t.__data__;
                return e(n) ? r["string" == typeof n ? "string" : "hash"] : r.map
            }
        }),
        qe = He && "object" == typeof He && "default" in He ? He.default : He,
        Ue = t(function(t) {
            var e = qe;
            t.exports = function(t, n) {
                var r = e(this, t),
                    i = r.size;
                return r.set(t, n), this.size += r.size == i ? 0 : 1, this
            }
        }),
        Qe = Ue && "object" == typeof Ue && "default" in Ue ? Ue.default : Ue,
        Ye = t(function(t) {
            var e = qe;
            t.exports = function(t) {
                return e(this, t).has(t)
            }
        }),
        Ke = Ye && "object" == typeof Ye && "default" in Ye ? Ye.default : Ye,
        Ze = t(function(t) {
            var e = qe;
            t.exports = function(t) {
                return e(this, t).get(t)
            }
        }),
        Je = Ze && "object" == typeof Ze && "default" in Ze ? Ze.default : Ze,
        tn = t(function(t) {
            var e = qe;
            t.exports = function(t) {
                var n = e(this, t).delete(t);
                return this.size -= n ? 1 : 0, n
            }
        }),
        en = tn && "object" == typeof tn && "default" in tn ? tn.default : tn,
        nn = t(function(t) {
            t.exports = function(t, e) {
                return null == t ? void 0 : t[e]
            }
        }),
        rn = nn && "object" == typeof nn && "default" in nn ? nn.default : nn,
        on = t(function(t) {
            var e = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return e.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        }),
        an = on && "object" == typeof on && "default" in on ? on.default : on,
        un = t(function(t) {
            var e = ve["__core-js_shared__"];
            t.exports = e
        }),
        cn = un && "object" == typeof un && "default" in un ? un.default : un,
        sn = t(function(t) {
            var e = cn,
                n = function() {
                    var t = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
                    return t ? "Symbol(src)_1." + t : ""
                }();
            t.exports = function(t) {
                return !!n && n in t
            }
        }),
        fn = sn && "object" == typeof sn && "default" in sn ? sn.default : sn,
        ln = t(function(t) {
            var e = xe,
                n = Ee,
                r = "[object AsyncFunction]",
                i = "[object Function]",
                o = "[object GeneratorFunction]",
                a = "[object Proxy]";
            t.exports = function(t) {
                if (!n(t)) return !1;
                var u = e(t);
                return u == i || u == o || u == r || u == a
            }
        }),
        dn = ln && "object" == typeof ln && "default" in ln ? ln.default : ln,
        pn = t(function(t) {
            var e = dn,
                n = fn,
                r = Ee,
                i = an,
                o = /[\\^$.*+?()[\]{}|]/g,
                a = /^\[object .+?Constructor\]$/,
                u = Function.prototype,
                c = Object.prototype,
                s = u.toString,
                f = c.hasOwnProperty,
                l = RegExp("^" + s.call(f).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!r(t) || n(t)) && (e(t) ? l : a).test(i(t))
            }
        }),
        hn = pn && "object" == typeof pn && "default" in pn ? pn.default : pn,
        vn = t(function(t) {
            var e = hn,
                n = rn;
            t.exports = function(t, r) {
                var i = n(t, r);
                return e(i) ? i : void 0
            }
        }),
        yn = vn && "object" == typeof vn && "default" in vn ? vn.default : vn,
        gn = t(function(t) {
            var e = yn(ve, "Map");
            t.exports = e
        }),
        mn = gn && "object" == typeof gn && "default" in gn ? gn.default : gn,
        bn = t(function(t) {
            t.exports = function(t, e) {
                return t === e || t !== t && e !== e
            }
        }),
        wn = bn && "object" == typeof bn && "default" in bn ? bn.default : bn,
        xn = t(function(t) {
            var e = wn;
            t.exports = function(t, n) {
                for (var r = t.length; r--;)
                    if (e(t[r][0], n)) return r;
                return -1
            }
        }),
        _n = xn && "object" == typeof xn && "default" in xn ? xn.default : xn,
        jn = t(function(t) {
            var e = _n;
            t.exports = function(t, n) {
                var r = this.__data__,
                    i = e(r, t);
                return i < 0 ? (++this.size, r.push([t, n])) : r[i][1] = n, this
            }
        }),
        In = jn && "object" == typeof jn && "default" in jn ? jn.default : jn,
        En = t(function(t) {
            var e = _n;
            t.exports = function(t) {
                return e(this.__data__, t) > -1
            }
        }),
        On = En && "object" == typeof En && "default" in En ? En.default : En,
        An = t(function(t) {
            var e = _n;
            t.exports = function(t) {
                var n = this.__data__,
                    r = e(n, t);
                return r < 0 ? void 0 : n[r][1]
            }
        }),
        Tn = An && "object" == typeof An && "default" in An ? An.default : An,
        Sn = t(function(t) {
            var e = _n,
                n = Array.prototype.splice;
            t.exports = function(t) {
                var r = this.__data__,
                    i = e(r, t);
                return !(i < 0 || (i == r.length - 1 ? r.pop() : n.call(r, i, 1), --this.size, 0))
            }
        }),
        Pn = Sn && "object" == typeof Sn && "default" in Sn ? Sn.default : Sn,
        kn = t(function(t) {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        }),
        Mn = kn && "object" == typeof kn && "default" in kn ? kn.default : kn,
        Ln = t(function(t) {
            function e(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            var n = Mn,
                r = Pn,
                i = Tn,
                o = On,
                a = In;
            e.prototype.clear = n, e.prototype.delete = r, e.prototype.get = i, e.prototype.has = o, e.prototype.set = a, t.exports = e
        }),
        Cn = Ln && "object" == typeof Ln && "default" in Ln ? Ln.default : Ln,
        Rn = t(function(t) {
            var e = yn(Object, "create");
            t.exports = e
        }),
        Dn = Rn && "object" == typeof Rn && "default" in Rn ? Rn.default : Rn,
        Nn = t(function(t) {
            var e = Dn,
                n = "__lodash_hash_undefined__";
            t.exports = function(t, r) {
                var i = this.__data__;
                return this.size += this.has(t) ? 0 : 1, i[t] = e && void 0 === r ? n : r, this
            }
        }),
        zn = Nn && "object" == typeof Nn && "default" in Nn ? Nn.default : Nn,
        Vn = t(function(t) {
            var e = Dn,
                n = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = this.__data__;
                return e ? void 0 !== r[t] : n.call(r, t)
            }
        }),
        $n = Vn && "object" == typeof Vn && "default" in Vn ? Vn.default : Vn,
        Xn = t(function(t) {
            var e = Dn,
                n = "__lodash_hash_undefined__",
                r = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var i = this.__data__;
                if (e) {
                    var o = i[t];
                    return o === n ? void 0 : o
                }
                return r.call(i, t) ? i[t] : void 0
            }
        }),
        Wn = Xn && "object" == typeof Xn && "default" in Xn ? Xn.default : Xn,
        Gn = t(function(t) {
            t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }
        }),
        Fn = Gn && "object" == typeof Gn && "default" in Gn ? Gn.default : Gn,
        Bn = t(function(t) {
            var e = Dn;
            t.exports = function() {
                this.__data__ = e ? e(null) : {}, this.size = 0
            }
        }),
        Hn = Bn && "object" == typeof Bn && "default" in Bn ? Bn.default : Bn,
        qn = t(function(t) {
            function e(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            var n = Hn,
                r = Fn,
                i = Wn,
                o = $n,
                a = zn;
            e.prototype.clear = n, e.prototype.delete = r, e.prototype.get = i, e.prototype.has = o, e.prototype.set = a, t.exports = e
        }),
        Un = qn && "object" == typeof qn && "default" in qn ? qn.default : qn,
        Qn = t(function(t) {
            var e = Un,
                n = Cn,
                r = mn;
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new e,
                    map: new(r || n),
                    string: new e
                }
            }
        }),
        Yn = Qn && "object" == typeof Qn && "default" in Qn ? Qn.default : Qn,
        Kn = t(function(t) {
            function e(t) {
                var e = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n;) {
                    var r = t[e];
                    this.set(r[0], r[1])
                }
            }
            var n = Yn,
                r = en,
                i = Je,
                o = Ke,
                a = Qe;
            e.prototype.clear = n, e.prototype.delete = r, e.prototype.get = i, e.prototype.has = o, e.prototype.set = a, t.exports = e
        }),
        Zn = Kn && "object" == typeof Kn && "default" in Kn ? Kn.default : Kn,
        Jn = t(function(t) {
            function e(t, i) {
                if ("function" != typeof t || null != i && "function" != typeof i) throw new TypeError(r);
                var o = function() {
                    var e = arguments,
                        n = i ? i.apply(this, e) : e[0],
                        r = o.cache;
                    if (r.has(n)) return r.get(n);
                    var a = t.apply(this, e);
                    return o.cache = r.set(n, a) || r, a
                };
                return o.cache = new(e.Cache || n), o
            }
            var n = Zn,
                r = "Expected a function";
            e.Cache = n, t.exports = e
        }),
        tr = Jn && "object" == typeof Jn && "default" in Jn ? Jn.default : Jn,
        er = t(function(t) {
            var e = tr,
                n = 500;
            t.exports = function(t) {
                var r = e(t, function(t) {
                        return i.size === n && i.clear(), t
                    }),
                    i = r.cache;
                return r
            }
        }),
        nr = er && "object" == typeof er && "default" in er ? er.default : er,
        rr = t(function(t) {
            var e = /^\./,
                n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                r = /\\(\\)?/g,
                i = nr(function(t) {
                    var i = [];
                    return e.test(t) && i.push(""), t.replace(n, function(t, e, n, o) {
                        i.push(n ? o.replace(r, "$1") : e || t)
                    }), i
                });
            t.exports = i
        }),
        ir = rr && "object" == typeof rr && "default" in rr ? rr.default : rr,
        or = t(function(t) {
            var e = Re,
                n = Ne,
                r = ir,
                i = Ge;
            t.exports = function(t, o) {
                return e(t) ? t : n(t, o) ? [t] : r(i(t))
            }
        }),
        ar = or && "object" == typeof or && "default" in or ? or.default : or,
        ur = t(function(t) {
            var e = ar,
                n = Le;
            t.exports = function(t, r) {
                for (var i = 0, o = (r = e(r, t)).length; null != t && i < o;) t = t[n(r[i++])];
                return i && i == o ? t : void 0
            }
        }),
        cr = ur && "object" == typeof ur && "default" in ur ? ur.default : ur,
        sr = t(function(t) {
            var e = cr;
            t.exports = function(t) {
                return function(n) {
                    return e(n, t)
                }
            }
        }),
        fr = sr && "object" == typeof sr && "default" in sr ? sr.default : sr,
        lr = t(function(t) {
            t.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }
        }),
        dr = lr && "object" == typeof lr && "default" in lr ? lr.default : lr,
        pr = t(function(t) {
            var e = dr,
                n = fr,
                r = Ne,
                i = Le;
            t.exports = function(t) {
                return r(t) ? e(i(t)) : n(t)
            }
        }),
        hr = pr && "object" == typeof pr && "default" in pr ? pr.default : pr,
        vr = t(function(t) {
            t.exports = function(t) {
                return t
            }
        }),
        yr = vr && "object" == typeof vr && "default" in vr ? vr.default : vr,
        gr = t(function(t) {
            t.exports = function(t, e) {
                return function(n) {
                    return null != n && n[t] === e && (void 0 !== e || t in Object(n))
                }
            }
        }),
        mr = gr && "object" == typeof gr && "default" in gr ? gr.default : gr,
        br = t(function(t) {
            var e = Ee;
            t.exports = function(t) {
                return t === t && !e(t)
            }
        }),
        wr = br && "object" == typeof br && "default" in br ? br.default : br,
        xr = t(function(t) {
            var e = 9007199254740991;
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= e
            }
        }),
        _r = xr && "object" == typeof xr && "default" in xr ? xr.default : xr,
        jr = t(function(t) {
            var e = 9007199254740991,
                n = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, r) {
                return !!(r = null == r ? e : r) && ("number" == typeof t || n.test(t)) && t > -1 && t % 1 == 0 && t < r
            }
        }),
        Ir = jr && "object" == typeof jr && "default" in jr ? jr.default : jr,
        Er = t(function(t) {
            var e = xe,
                n = se,
                r = "[object Arguments]";
            t.exports = function(t) {
                return n(t) && e(t) == r
            }
        }),
        Or = Er && "object" == typeof Er && "default" in Er ? Er.default : Er,
        Ar = t(function(t) {
            var e = Or,
                n = se,
                r = Object.prototype,
                i = r.hasOwnProperty,
                o = r.propertyIsEnumerable,
                a = e(function() {
                    return arguments
                }()) ? e : function(t) {
                    return n(t) && i.call(t, "callee") && !o.call(t, "callee")
                };
            t.exports = a
        }),
        Tr = Ar && "object" == typeof Ar && "default" in Ar ? Ar.default : Ar,
        Sr = t(function(t) {
            var e = ar,
                n = Tr,
                r = Re,
                i = Ir,
                o = _r,
                a = Le;
            t.exports = function(t, u, c) {
                for (var s = -1, f = (u = e(u, t)).length, l = !1; ++s < f;) {
                    var d = a(u[s]);
                    if (!(l = null != t && c(t, d))) break;
                    t = t[d]
                }
                return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && o(f) && i(d, f) && (r(t) || n(t))
            }
        }),
        Pr = Sr && "object" == typeof Sr && "default" in Sr ? Sr.default : Sr,
        kr = t(function(t) {
            t.exports = function(t, e) {
                return null != t && e in Object(t)
            }
        }),
        Mr = kr && "object" == typeof kr && "default" in kr ? kr.default : kr,
        Lr = t(function(t) {
            var e = Mr,
                n = Pr;
            t.exports = function(t, r) {
                return null != t && n(t, r, e)
            }
        }),
        Cr = Lr && "object" == typeof Lr && "default" in Lr ? Lr.default : Lr,
        Rr = t(function(t) {
            var e = cr;
            t.exports = function(t, n, r) {
                var i = null == t ? void 0 : e(t, n);
                return void 0 === i ? r : i
            }
        }),
        Dr = Rr && "object" == typeof Rr && "default" in Rr ? Rr.default : Rr,
        Nr = t(function(t, e) {
            var n = pe,
                r = "object" == typeof e && e && !e.nodeType && e,
                i = r && "object" == typeof t && t && !t.nodeType && t,
                o = i && i.exports === r && n.process,
                a = function() {
                    try {
                        return o && o.binding && o.binding("util")
                    } catch (t) {}
                }();
            t.exports = a
        }),
        zr = Nr && "object" == typeof Nr && "default" in Nr ? Nr.default : Nr,
        Vr = t(function(t) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        }),
        $r = Vr && "object" == typeof Vr && "default" in Vr ? Vr.default : Vr,
        Xr = t(function(t) {
            var e = xe,
                n = _r,
                r = se,
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, t.exports = function(t) {
                return r(t) && n(t.length) && !!i[e(t)]
            }
        }),
        Wr = Xr && "object" == typeof Xr && "default" in Xr ? Xr.default : Xr,
        Gr = t(function(t) {
            var e = Wr,
                n = $r,
                r = zr,
                i = r && r.isTypedArray,
                o = i ? n(i) : e;
            t.exports = o
        }),
        Fr = Gr && "object" == typeof Gr && "default" in Gr ? Gr.default : Gr,
        Br = t(function(t) {
            t.exports = function() {
                return !1
            }
        }),
        Hr = Br && "object" == typeof Br && "default" in Br ? Br.default : Br,
        qr = t(function(t, e) {
            var n = ve,
                r = Hr,
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i ? n.Buffer : void 0,
                u = (a ? a.isBuffer : void 0) || r;
            t.exports = u
        }),
        Ur = qr && "object" == typeof qr && "default" in qr ? qr.default : qr,
        Qr = t(function(t) {
            var e = yn(ve, "WeakMap");
            t.exports = e
        }),
        Yr = Qr && "object" == typeof Qr && "default" in Qr ? Qr.default : Qr,
        Kr = t(function(t) {
            var e = yn(ve, "Set");
            t.exports = e
        }),
        Zr = Kr && "object" == typeof Kr && "default" in Kr ? Kr.default : Kr,
        Jr = t(function(t) {
            var e = yn(ve, "Promise");
            t.exports = e
        }),
        ti = Jr && "object" == typeof Jr && "default" in Jr ? Jr.default : Jr,
        ei = t(function(t) {
            var e = yn(ve, "DataView");
            t.exports = e
        }),
        ni = ei && "object" == typeof ei && "default" in ei ? ei.default : ei,
        ri = t(function(t) {
            var e = ni,
                n = mn,
                r = ti,
                i = Zr,
                o = Yr,
                a = xe,
                u = an,
                c = u(e),
                s = u(n),
                f = u(r),
                l = u(i),
                d = u(o),
                p = a;
            (e && "[object DataView]" != p(new e(new ArrayBuffer(1))) || n && "[object Map]" != p(new n) || r && "[object Promise]" != p(r.resolve()) || i && "[object Set]" != p(new i) || o && "[object WeakMap]" != p(new o)) && (p = function(t) {
                var e = a(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? u(n) : "";
                if (r) switch (r) {
                    case c:
                        return "[object DataView]";
                    case s:
                        return "[object Map]";
                    case f:
                        return "[object Promise]";
                    case l:
                        return "[object Set]";
                    case d:
                        return "[object WeakMap]"
                }
                return e
            }), t.exports = p
        }),
        ii = ri && "object" == typeof ri && "default" in ri ? ri.default : ri,
        oi = t(function(t) {
            var e = dn,
                n = _r;
            t.exports = function(t) {
                return null != t && n(t.length) && !e(t)
            }
        }),
        ai = oi && "object" == typeof oi && "default" in oi ? oi.default : oi,
        ui = t(function(t) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        }),
        ci = ui && "object" == typeof ui && "default" in ui ? ui.default : ui,
        si = t(function(t) {
            var e = ci(Object.keys, Object);
            t.exports = e
        }),
        fi = si && "object" == typeof si && "default" in si ? si.default : si,
        li = t(function(t) {
            var e = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || e)
            }
        }),
        di = li && "object" == typeof li && "default" in li ? li.default : li,
        pi = t(function(t) {
            var e = di,
                n = fi,
                r = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!e(t)) return n(t);
                var i = [];
                for (var o in Object(t)) r.call(t, o) && "constructor" != o && i.push(o);
                return i
            }
        }),
        hi = pi && "object" == typeof pi && "default" in pi ? pi.default : pi,
        vi = t(function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        }),
        yi = vi && "object" == typeof vi && "default" in vi ? vi.default : vi,
        gi = t(function(t) {
            var e = yi,
                n = Tr,
                r = Re,
                i = Ur,
                o = Ir,
                a = Fr,
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t, c) {
                var s = r(t),
                    f = !s && n(t),
                    l = !s && !f && i(t),
                    d = !s && !f && !l && a(t),
                    p = s || f || l || d,
                    h = p ? e(t.length, String) : [],
                    v = h.length;
                for (var y in t) !c && !u.call(t, y) || p && ("length" == y || l && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || o(y, v)) || h.push(y);
                return h
            }
        }),
        mi = gi && "object" == typeof gi && "default" in gi ? gi.default : gi,
        bi = t(function(t) {
            var e = mi,
                n = hi,
                r = ai;
            t.exports = function(t) {
                return r(t) ? e(t) : n(t)
            }
        }),
        wi = bi && "object" == typeof bi && "default" in bi ? bi.default : bi,
        xi = t(function(t) {
            var e = wi,
                n = 1,
                r = Object.prototype.hasOwnProperty;
            t.exports = function(t, i, o, a, u, c) {
                var s = o & n,
                    f = e(t),
                    l = f.length;
                if (l != e(i).length && !s) return !1;
                for (var d = l; d--;) {
                    var p = f[d];
                    if (!(s ? p in i : r.call(i, p))) return !1
                }
                var h = c.get(t);
                if (h && c.get(i)) return h == i;
                var v = !0;
                c.set(t, i), c.set(i, t);
                for (var y = s; ++d < l;) {
                    var g = t[p = f[d]],
                        m = i[p];
                    if (a) var b = s ? a(m, g, p, i, t, c) : a(g, m, p, t, i, c);
                    if (!(void 0 === b ? g === m || u(g, m, o, a, c) : b)) {
                        v = !1;
                        break
                    }
                    y || (y = "constructor" == p)
                }
                if (v && !y) {
                    var w = t.constructor,
                        x = i.constructor;
                    w != x && "constructor" in t && "constructor" in i && !("function" == typeof w && w instanceof w && "function" == typeof x && x instanceof x) && (v = !1)
                }
                return c.delete(t), c.delete(i), v
            }
        }),
        _i = xi && "object" == typeof xi && "default" in xi ? xi.default : xi,
        ji = t(function(t) {
            t.exports = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t) {
                    n[++e] = t
                }), n
            }
        }),
        Ii = ji && "object" == typeof ji && "default" in ji ? ji.default : ji,
        Ei = t(function(t) {
            t.exports = function(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t, r) {
                    n[++e] = [r, t]
                }), n
            }
        }),
        Oi = Ei && "object" == typeof Ei && "default" in Ei ? Ei.default : Ei,
        Ai = t(function(t) {
            t.exports = function(t, e) {
                return t.has(e)
            }
        }),
        Ti = Ai && "object" == typeof Ai && "default" in Ai ? Ai.default : Ai,
        Si = t(function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (e(t[n], n, t)) return !0;
                return !1
            }
        }),
        Pi = Si && "object" == typeof Si && "default" in Si ? Si.default : Si,
        ki = t(function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        }),
        Mi = ki && "object" == typeof ki && "default" in ki ? ki.default : ki,
        Li = t(function(t) {
            var e = "__lodash_hash_undefined__";
            t.exports = function(t) {
                return this.__data__.set(t, e), this
            }
        }),
        Ci = Li && "object" == typeof Li && "default" in Li ? Li.default : Li,
        Ri = t(function(t) {
            function e(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new n; ++e < r;) this.add(t[e])
            }
            var n = Zn,
                r = Ci,
                i = Mi;
            e.prototype.add = e.prototype.push = r, e.prototype.has = i, t.exports = e
        }),
        Di = Ri && "object" == typeof Ri && "default" in Ri ? Ri.default : Ri,
        Ni = t(function(t) {
            var e = Di,
                n = Pi,
                r = Ti,
                i = 1,
                o = 2;
            t.exports = function(t, a, u, c, s, f) {
                var l = u & i,
                    d = t.length,
                    p = a.length;
                if (d != p && !(l && p > d)) return !1;
                var h = f.get(t);
                if (h && f.get(a)) return h == a;
                var v = -1,
                    y = !0,
                    g = u & o ? new e : void 0;
                for (f.set(t, a), f.set(a, t); ++v < d;) {
                    var m = t[v],
                        b = a[v];
                    if (c) var w = l ? c(b, m, v, a, t, f) : c(m, b, v, t, a, f);
                    if (void 0 !== w) {
                        if (w) continue;
                        y = !1;
                        break
                    }
                    if (g) {
                        if (!n(a, function(t, e) {
                                if (!r(g, e) && (m === t || s(m, t, u, c, f))) return g.push(e)
                            })) {
                            y = !1;
                            break
                        }
                    } else if (m !== b && !s(m, b, u, c, f)) {
                        y = !1;
                        break
                    }
                }
                return f.delete(t), f.delete(a), y
            }
        }),
        zi = Ni && "object" == typeof Ni && "default" in Ni ? Ni.default : Ni,
        Vi = t(function(t) {
            var e = ve.Uint8Array;
            t.exports = e
        }),
        $i = Vi && "object" == typeof Vi && "default" in Vi ? Vi.default : Vi,
        Xi = t(function(t) {
            var e = ge,
                n = $i,
                r = wn,
                i = zi,
                o = Oi,
                a = Ii,
                u = 1,
                c = 2,
                s = "[object Boolean]",
                f = "[object Date]",
                l = "[object Error]",
                d = "[object Map]",
                p = "[object Number]",
                h = "[object RegExp]",
                v = "[object Set]",
                y = "[object String]",
                g = "[object Symbol]",
                m = "[object ArrayBuffer]",
                b = "[object DataView]",
                w = e ? e.prototype : void 0,
                x = w ? w.valueOf : void 0;
            t.exports = function(t, e, w, _, j, I, E) {
                switch (w) {
                    case b:
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case m:
                        return !(t.byteLength != e.byteLength || !I(new n(t), new n(e)));
                    case s:
                    case f:
                    case p:
                        return r(+t, +e);
                    case l:
                        return t.name == e.name && t.message == e.message;
                    case h:
                    case y:
                        return t == e + "";
                    case d:
                        var O = o;
                    case v:
                        var A = _ & u;
                        if (O || (O = a), t.size != e.size && !A) return !1;
                        var T = E.get(t);
                        if (T) return T == e;
                        _ |= c, E.set(t, e);
                        var S = i(O(t), O(e), _, j, I, E);
                        return E.delete(t), S;
                    case g:
                        if (x) return x.call(t) == x.call(e)
                }
                return !1
            }
        }),
        Wi = Xi && "object" == typeof Xi && "default" in Xi ? Xi.default : Xi,
        Gi = t(function(t) {
            var e = Cn,
                n = mn,
                r = Zn,
                i = 200;
            t.exports = function(t, o) {
                var a = this.__data__;
                if (a instanceof e) {
                    var u = a.__data__;
                    if (!n || u.length < i - 1) return u.push([t, o]), this.size = ++a.size, this;
                    a = this.__data__ = new r(u)
                }
                return a.set(t, o), this.size = a.size, this
            }
        }),
        Fi = Gi && "object" == typeof Gi && "default" in Gi ? Gi.default : Gi,
        Bi = t(function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        }),
        Hi = Bi && "object" == typeof Bi && "default" in Bi ? Bi.default : Bi,
        qi = t(function(t) {
            t.exports = function(t) {
                return this.__data__.get(t)
            }
        }),
        Ui = qi && "object" == typeof qi && "default" in qi ? qi.default : qi,
        Qi = t(function(t) {
            t.exports = function(t) {
                var e = this.__data__,
                    n = e.delete(t);
                return this.size = e.size, n
            }
        }),
        Yi = Qi && "object" == typeof Qi && "default" in Qi ? Qi.default : Qi,
        Ki = t(function(t) {
            var e = Cn;
            t.exports = function() {
                this.__data__ = new e, this.size = 0
            }
        }),
        Zi = Ki && "object" == typeof Ki && "default" in Ki ? Ki.default : Ki,
        Ji = t(function(t) {
            function e(t) {
                var e = this.__data__ = new n(t);
                this.size = e.size
            }
            var n = Cn,
                r = Zi,
                i = Yi,
                o = Ui,
                a = Hi,
                u = Fi;
            e.prototype.clear = r, e.prototype.delete = i, e.prototype.get = o, e.prototype.has = a, e.prototype.set = u, t.exports = e
        }),
        to = Ji && "object" == typeof Ji && "default" in Ji ? Ji.default : Ji,
        eo = t(function(t) {
            var e = to,
                n = zi,
                r = Wi,
                i = _i,
                o = ii,
                a = Re,
                u = Ur,
                c = Fr,
                s = 1,
                f = "[object Arguments]",
                l = "[object Array]",
                d = "[object Object]",
                p = Object.prototype.hasOwnProperty;
            t.exports = function(t, h, v, y, g, m) {
                var b = a(t),
                    w = a(h),
                    x = l,
                    _ = l;
                b || (x = (x = o(t)) == f ? d : x), w || (_ = (_ = o(h)) == f ? d : _);
                var j = x == d,
                    I = _ == d,
                    E = x == _;
                if (E && u(t)) {
                    if (!u(h)) return !1;
                    b = !0, j = !1
                }
                if (E && !j) return m || (m = new e), b || c(t) ? n(t, h, v, y, g, m) : r(t, h, x, v, y, g, m);
                if (!(v & s)) {
                    var O = j && p.call(t, "__wrapped__"),
                        A = I && p.call(h, "__wrapped__");
                    if (O || A) {
                        var T = O ? t.value() : t,
                            S = A ? h.value() : h;
                        return m || (m = new e), g(T, S, v, y, m)
                    }
                }
                return !!E && (m || (m = new e), i(t, h, v, y, g, m))
            }
        }),
        no = eo && "object" == typeof eo && "default" in eo ? eo.default : eo,
        ro = t(function(t) {
            function e(t, o, a, u, c) {
                return t === o || (null == t || null == o || !r(t) && !i(o) ? t !== t && o !== o : n(t, o, a, u, e, c))
            }
            var n = no,
                r = Ee,
                i = se;
            t.exports = e
        }),
        io = ro && "object" == typeof ro && "default" in ro ? ro.default : ro,
        oo = t(function(t) {
            var e = io,
                n = Dr,
                r = Cr,
                i = Ne,
                o = wr,
                a = mr,
                u = Le,
                c = 1,
                s = 2;
            t.exports = function(t, f) {
                return i(t) && o(f) ? a(u(t), f) : function(i) {
                    var o = n(i, t);
                    return void 0 === o && o === f ? r(i, t) : e(f, o, c | s)
                }
            }
        }),
        ao = oo && "object" == typeof oo && "default" in oo ? oo.default : oo,
        uo = t(function(t) {
            var e = wr,
                n = wi;
            t.exports = function(t) {
                for (var r = n(t), i = r.length; i--;) {
                    var o = r[i],
                        a = t[o];
                    r[i] = [o, a, e(a)]
                }
                return r
            }
        }),
        co = uo && "object" == typeof uo && "default" in uo ? uo.default : uo,
        so = t(function(t) {
            var e = to,
                n = io,
                r = 1,
                i = 2;
            t.exports = function(t, o, a, u) {
                var c = a.length,
                    s = c,
                    f = !u;
                if (null == t) return !s;
                for (t = Object(t); c--;) {
                    var l = a[c];
                    if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
                }
                for (; ++c < s;) {
                    var d = (l = a[c])[0],
                        p = t[d],
                        h = l[1];
                    if (f && l[2]) {
                        if (void 0 === p && !(d in t)) return !1
                    } else {
                        var v = new e;
                        if (u) var y = u(p, h, d, t, o, v);
                        if (!(void 0 === y ? n(h, p, r | i, u, v) : y)) return !1
                    }
                }
                return !0
            }
        }),
        fo = so && "object" == typeof so && "default" in so ? so.default : so,
        lo = t(function(t) {
            var e = fo,
                n = co,
                r = mr;
            t.exports = function(t) {
                var i = n(t);
                return 1 == i.length && i[0][2] ? r(i[0][0], i[0][1]) : function(n) {
                    return n === t || e(n, t, i)
                }
            }
        }),
        po = lo && "object" == typeof lo && "default" in lo ? lo.default : lo,
        ho = t(function(t) {
            var e = po,
                n = ao,
                r = yr,
                i = Re,
                o = hr;
            t.exports = function(t) {
                return "function" == typeof t ? t : null == t ? r : "object" == typeof t ? i(t) ? n(t[0], t[1]) : e(t) : o(t)
            }
        }),
        vo = ho && "object" == typeof ho && "default" in ho ? ho.default : ho,
        yo = t(function(t) {
            t.exports = function(t, e, n, r) {
                for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                    if (e(t[o], o, t)) return o;
                return -1
            }
        }),
        go = yo && "object" == typeof yo && "default" in yo ? yo.default : yo,
        mo = t(function(t) {
            var e = go,
                n = vo,
                r = ke,
                i = Math.max;
            t.exports = function(t, o, a) {
                var u = null == t ? 0 : t.length;
                if (!u) return -1;
                var c = null == a ? 0 : r(a);
                return c < 0 && (c = i(u + c, 0)), e(t, n(o, 3), c)
            }
        }),
        bo = mo && "object" == typeof mo && "default" in mo ? mo.default : mo,
        wo = t(function(t) {
            var e = vo,
                n = ai,
                r = wi;
            t.exports = function(t) {
                return function(i, o, a) {
                    var u = Object(i);
                    if (!n(i)) {
                        var c = e(o, 3);
                        i = r(i), o = function(t) {
                            return c(u[t], t, u)
                        }
                    }
                    var s = t(i, o, a);
                    return s > -1 ? u[c ? i[s] : s] : void 0
                }
            }
        }),
        xo = wo && "object" == typeof wo && "default" in wo ? wo.default : wo,
        _o = t(function(t) {
            var e = xo(bo);
            t.exports = e
        }),
        jo = _o && "object" == typeof _o && "default" in _o ? _o.default : _o,
        Io = t(function(t) {
            var e = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                n = "\\ud83c[\\udffb-\\udfff]",
                r = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                i = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                o = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                a = "[\\ufe0e\\ufe0f]?" + o + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", r, i].join("|") + ")[\\ufe0e\\ufe0f]?" + o + ")*"),
                u = "(?:" + ["[^\\ud800-\\udfff]" + e + "?", e, r, i, "[\\ud800-\\udfff]"].join("|") + ")",
                c = RegExp(n + "(?=" + n + ")|" + u + a, "g");
            t.exports = function(t) {
                for (var e = c.lastIndex = 0; c.test(t);) ++e;
                return e
            }
        }),
        Eo = Io && "object" == typeof Io && "default" in Io ? Io.default : Io,
        Oo = t(function(t) {
            var e = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            t.exports = function(t) {
                return e.test(t)
            }
        }),
        Ao = Oo && "object" == typeof Oo && "default" in Oo ? Oo.default : Oo,
        To = t(function(t) {
            var e = dr("length");
            t.exports = e
        }),
        So = To && "object" == typeof To && "default" in To ? To.default : To,
        Po = t(function(t) {
            var e = So,
                n = Ao,
                r = Eo;
            t.exports = function(t) {
                return n(t) ? r(t) : e(t)
            }
        }),
        ko = Po && "object" == typeof Po && "default" in Po ? Po.default : Po,
        Mo = t(function(t) {
            var e = xe,
                n = Re,
                r = se,
                i = "[object String]";
            t.exports = function(t) {
                return "string" == typeof t || !n(t) && r(t) && e(t) == i
            }
        }),
        Lo = Mo && "object" == typeof Mo && "default" in Mo ? Mo.default : Mo,
        Co = t(function(t) {
            var e = hi,
                n = ii,
                r = ai,
                i = Lo,
                o = ko,
                a = "[object Map]",
                u = "[object Set]";
            t.exports = function(t) {
                if (null == t) return 0;
                if (r(t)) return i(t) ? o(t) : t.length;
                var c = n(t);
                return c == a || c == u ? t.size : e(t).length
            }
        }),
        Ro = Co && "object" == typeof Co && "default" in Co ? Co.default : Co,
        Do = t(function(t) {
            t.exports = function(t) {
                var e = [];
                if (null != t)
                    for (var n in Object(t)) e.push(n);
                return e
            }
        }),
        No = Do && "object" == typeof Do && "default" in Do ? Do.default : Do,
        zo = t(function(t) {
            var e = Ee,
                n = di,
                r = No,
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!e(t)) return r(t);
                var o = n(t),
                    a = [];
                for (var u in t)("constructor" != u || !o && i.call(t, u)) && a.push(u);
                return a
            }
        }),
        Vo = zo && "object" == typeof zo && "default" in zo ? zo.default : zo,
        $o = t(function(t) {
            var e = mi,
                n = Vo,
                r = ai;
            t.exports = function(t) {
                return r(t) ? e(t, !0) : n(t)
            }
        }),
        Xo = $o && "object" == typeof $o && "default" in $o ? $o.default : $o,
        Wo = t(function(t) {
            t.exports = function() {
                return []
            }
        }),
        Go = Wo && "object" == typeof Wo && "default" in Wo ? Wo.default : Wo,
        Fo = t(function(t) {
            var e = ci,
                n = Go,
                r = Object.getOwnPropertySymbols,
                i = r ? e(r, Object) : n;
            t.exports = i
        }),
        Bo = Fo && "object" == typeof Fo && "default" in Fo ? Fo.default : Fo,
        Ho = t(function(t) {
            var e = ci(Object.getPrototypeOf, Object);
            t.exports = e
        }),
        qo = Ho && "object" == typeof Ho && "default" in Ho ? Ho.default : Ho,
        Uo = t(function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                return t
            }
        }),
        Qo = Uo && "object" == typeof Uo && "default" in Uo ? Uo.default : Uo,
        Yo = t(function(t) {
            var e = Qo,
                n = qo,
                r = Bo,
                i = Go,
                o = Object.getOwnPropertySymbols ? function(t) {
                    for (var i = []; t;) e(i, r(t)), t = n(t);
                    return i
                } : i;
            t.exports = o
        }),
        Ko = Yo && "object" == typeof Yo && "default" in Yo ? Yo.default : Yo,
        Zo = t(function(t) {
            var e = Qo,
                n = Re;
            t.exports = function(t, r, i) {
                var o = r(t);
                return n(t) ? o : e(o, i(t))
            }
        }),
        Jo = Zo && "object" == typeof Zo && "default" in Zo ? Zo.default : Zo,
        ta = t(function(t) {
            var e = Jo,
                n = Ko,
                r = Xo;
            t.exports = function(t) {
                return e(t, r, n)
            }
        }),
        ea = ta && "object" == typeof ta && "default" in ta ? ta.default : ta,
        na = t(function(t) {
            var e = yn,
                n = function() {
                    try {
                        var t = e(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (t) {}
                }();
            t.exports = n
        }),
        ra = na && "object" == typeof na && "default" in na ? na.default : na,
        ia = t(function(t) {
            var e = ra;
            t.exports = function(t, n, r) {
                "__proto__" == n && e ? e(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : t[n] = r
            }
        }),
        oa = ia && "object" == typeof ia && "default" in ia ? ia.default : ia,
        aa = t(function(t) {
            var e = oa,
                n = wn,
                r = Object.prototype.hasOwnProperty;
            t.exports = function(t, i, o) {
                var a = t[i];
                r.call(t, i) && n(a, o) && (void 0 !== o || i in t) || e(t, i, o)
            }
        }),
        ua = aa && "object" == typeof aa && "default" in aa ? aa.default : aa,
        ca = t(function(t) {
            var e = ua,
                n = ar,
                r = Ir,
                i = Ee,
                o = Le;
            t.exports = function(t, a, u, c) {
                if (!i(t)) return t;
                for (var s = -1, f = (a = n(a, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
                    var p = o(a[s]),
                        h = u;
                    if (s != l) {
                        var v = d[p];
                        void 0 === (h = c ? c(v, p, d) : void 0) && (h = i(v) ? v : r(a[s + 1]) ? [] : {})
                    }
                    e(d, p, h), d = d[p]
                }
                return t
            }
        }),
        sa = ca && "object" == typeof ca && "default" in ca ? ca.default : ca,
        fa = t(function(t) {
            var e = cr,
                n = sa,
                r = ar;
            t.exports = function(t, i, o) {
                for (var a = -1, u = i.length, c = {}; ++a < u;) {
                    var s = i[a],
                        f = e(t, s);
                    o(f, s) && n(c, r(s, t), f)
                }
                return c
            }
        }),
        la = fa && "object" == typeof fa && "default" in fa ? fa.default : fa,
        da = t(function(t) {
            var e = Ve,
                n = vo,
                r = la,
                i = ea;
            t.exports = function(t, o) {
                if (null == t) return {};
                var a = e(i(t), function(t) {
                    return [t]
                });
                return o = n(o), r(t, a, function(t, e) {
                    return o(t, e[0])
                })
            }
        }),
        pa = da && "object" == typeof da && "default" in da ? da.default : da,
        ha = t(function(t) {
            var e = "Expected a function";
            t.exports = function(t) {
                if ("function" != typeof t) throw new TypeError(e);
                return function() {
                    var e = arguments;
                    switch (e.length) {
                        case 0:
                            return !t.call(this);
                        case 1:
                            return !t.call(this, e[0]);
                        case 2:
                            return !t.call(this, e[0], e[1]);
                        case 3:
                            return !t.call(this, e[0], e[1], e[2])
                    }
                    return !t.apply(this, e)
                }
            }
        }),
        va = ha && "object" == typeof ha && "default" in ha ? ha.default : ha,
        ya = t(function(t) {
            var e = vo,
                n = va,
                r = pa;
            t.exports = function(t, i) {
                return r(t, n(e(i)))
            }
        }),
        ga = ya && "object" == typeof ya && "default" in ya ? ya.default : ya,
        ma = t(function(t) {
            var e = hi,
                n = ii,
                r = Tr,
                i = Re,
                o = ai,
                a = Ur,
                u = di,
                c = Fr,
                s = "[object Map]",
                f = "[object Set]",
                l = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (null == t) return !0;
                if (o(t) && (i(t) || "string" == typeof t || "function" == typeof t.splice || a(t) || c(t) || r(t))) return !t.length;
                var d = n(t);
                if (d == s || d == f) return !t.size;
                if (u(t)) return !e(t).length;
                for (var p in t)
                    if (l.call(t, p)) return !1;
                return !0
            }
        }),
        ba = ma && "object" == typeof ma && "default" in ma ? ma.default : ma,
        wa = t(function(t) {
            t.exports = function(t) {
                return function(e, n, r) {
                    for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                        var c = a[t ? u : ++i];
                        if (!1 === n(o[c], c, o)) break
                    }
                    return e
                }
            }
        }),
        xa = wa && "object" == typeof wa && "default" in wa ? wa.default : wa,
        _a = t(function(t) {
            var e = xa();
            t.exports = e
        }),
        ja = _a && "object" == typeof _a && "default" in _a ? _a.default : _a,
        Ia = t(function(t) {
            var e = ja,
                n = wi;
            t.exports = function(t, r) {
                return t && e(t, r, n)
            }
        }),
        Ea = Ia && "object" == typeof Ia && "default" in Ia ? Ia.default : Ia,
        Oa = t(function(t) {
            var e = oa,
                n = Ea,
                r = vo;
            t.exports = function(t, i) {
                var o = {};
                return i = r(i, 3), n(t, function(t, n, r) {
                    e(o, n, i(t, n, r))
                }), o
            }
        }),
        Aa = Oa && "object" == typeof Oa && "default" in Oa ? Oa.default : Oa,
        Ta = t(function(t) {
            var e = yr;
            t.exports = function(t) {
                return "function" == typeof t ? t : e
            }
        }),
        Sa = Ta && "object" == typeof Ta && "default" in Ta ? Ta.default : Ta,
        Pa = t(function(t) {
            var e = ai;
            t.exports = function(t, n) {
                return function(r, i) {
                    if (null == r) return r;
                    if (!e(r)) return t(r, i);
                    for (var o = r.length, a = n ? o : -1, u = Object(r);
                        (n ? a-- : ++a < o) && !1 !== i(u[a], a, u););
                    return r
                }
            }
        }),
        ka = Pa && "object" == typeof Pa && "default" in Pa ? Pa.default : Pa,
        Ma = t(function(t) {
            var e = ka(Ea);
            t.exports = e
        }),
        La = Ma && "object" == typeof Ma && "default" in Ma ? Ma.default : Ma,
        Ca = t(function(t) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
                return t
            }
        }),
        Ra = Ca && "object" == typeof Ca && "default" in Ca ? Ca.default : Ca,
        Da = t(function(t) {
            var e = Ra,
                n = La,
                r = Sa,
                i = Re;
            t.exports = function(t, o) {
                return (i(t) ? e : n)(t, r(o))
            }
        }),
        Na = Da && "object" == typeof Da && "default" in Da ? Da.default : Da,
        za = t(function(t) {
            t.exports = function(t, e) {
                return null == t || t !== t ? e : t
            }
        }),
        Va = za && "object" == typeof za && "default" in za ? za.default : za,
        $a = t(function(t) {
            t.exports = function(t, e, n, r, i) {
                return i(t, function(t, i, o) {
                    n = r ? (r = !1, t) : e(n, t, i, o)
                }), n
            }
        }),
        Xa = $a && "object" == typeof $a && "default" in $a ? $a.default : $a,
        Wa = t(function(t) {
            t.exports = function(t, e, n, r) {
                var i = -1,
                    o = null == t ? 0 : t.length;
                for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                return n
            }
        }),
        Ga = Wa && "object" == typeof Wa && "default" in Wa ? Wa.default : Wa,
        Fa = t(function(t) {
            var e = Ga,
                n = La,
                r = vo,
                i = Xa,
                o = Re;
            t.exports = function(t, a, u) {
                var c = o(t) ? e : i,
                    s = arguments.length < 3;
                return c(t, r(a, 4), u, s, n)
            }
        }),
        Ba = Fa && "object" == typeof Fa && "default" in Fa ? Fa.default : Fa,
        Ha = "TRANSFORM_MOVE",
        qa = "TRANSFORM_SCALE",
        Ua = "TRANSFORM_ROTATE",
        Qa = "TRANSFORM_SKEW",
        Ya = "STYLE_OPACITY",
        Ka = "STYLE_SIZE",
        Za = "STYLE_BACKGROUND_COLOR",
        Ja = "STYLE_BORDER",
        tu = "STYLE_TEXT_COLOR",
        eu = "GENERAL_DISPLAY",
        nu = "GENERAL_CONTINUOUS_ACTION",
        ru = "GENERAL_START_ACTION",
        iu = "MOUSE_MOVE",
        ou = "SCROLLING_IN_VIEW",
        au = "ELEMENT",
        uu = "PAGE",
        cu = "|",
        su = "data-wf-page",
        fu = "translateX",
        lu = "translateY",
        du = "translateZ",
        pu = "scaleX",
        hu = "scaleY",
        vu = "scaleZ",
        yu = "rotateX",
        gu = "rotateY",
        mu = "rotateZ",
        bu = "skewX",
        wu = "skewY",
        xu = "opacity",
        _u = "width",
        ju = "height",
        Iu = "display",
        Eu = "flex",
        Ou = "willChange",
        Au = ",",
        Tu = "undefined" != typeof window,
        Su = function(t, e) {
            return Tu ? t() : e
        },
        Pu = Su(function() {
            return jo(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
                return t in Element.prototype
            })
        }),
        ku = Su(function() {
            var t = document.createElement("i"),
                e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (t.style.display = i, t.style.display === i) return i
                }
                return ""
            } catch (t) {
                return ""
            }
        }, "flex"),
        Mu = Su(function() {
            var t = document.createElement("i");
            if (null == t.style.transform)
                for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                    var i = e[r] + "Transform";
                    if (void 0 !== t.style[i]) return i
                }
            return "transform"
        }, "transform"),
        Lu = function(t) {
            return t.trim()
        },
        Cu = Object.freeze((dt = {}, ft.defineProperty(dt, Za, "backgroundColor"), ft.defineProperty(dt, Ja, "borderColor"), ft.defineProperty(dt, tu, "color"), dt)),
        Ru = Object.freeze((pt = {}, ft.defineProperty(pt, Mu, "transform"), ft.defineProperty(pt, "backgroundColor", "background"), ft.defineProperty(pt, xu, xu), ft.defineProperty(pt, _u, _u), ft.defineProperty(pt, ju, ju), pt)),
        Du = 1,
        Nu = function(t, e) {
            return t === e
        },
        zu = (ht = {}, ft.defineProperty(ht, Ha, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), ft.defineProperty(ht, qa, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), ft.defineProperty(ht, Ua, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), ft.defineProperty(ht, Qa, Object.freeze({
            xValue: 0,
            yValue: 0
        })), ht),
        Vu = "\\(([^)]+)\\)",
        $u = RegExp("" + fu + Vu),
        Xu = RegExp("" + lu + Vu),
        Wu = RegExp("" + du + Vu),
        Gu = RegExp("" + pu + Vu),
        Fu = RegExp("" + hu + Vu),
        Bu = RegExp("" + vu + Vu),
        Hu = RegExp("" + yu + Vu),
        qu = RegExp("" + gu + Vu),
        Uu = RegExp("" + mu + Vu),
        Qu = RegExp("" + bu + Vu),
        Yu = RegExp("" + wu + Vu),
        Ku = Object.keys(zu).map(function(t) {
            var e = zu[t],
                n = e.xValue,
                r = e.yValue,
                i = e.zValue;
            switch (t) {
                case Ha:
                    return w([
                        [fu, n],
                        [lu, r],
                        [du, i]
                    ]);
                case qa:
                    return w([
                        [pu, n],
                        [hu, r],
                        [vu, i]
                    ]);
                case Ua:
                    return w([
                        [yu, n],
                        [gu, r],
                        [mu, i]
                    ]);
                case Qa:
                    return w([
                        [bu, n],
                        [wu, r]
                    ]);
                default:
                    return ""
            }
        }).join(" "),
        Zu = /^rgb/,
        Ju = RegExp("rgba?\\(([^)]+)\\)"),
        tc = function(t) {
            var e = t.effect,
                n = t.actionTypeId,
                r = t.elementApi;
            return function(t) {
                switch (n) {
                    case Ha:
                    case qa:
                    case Ua:
                    case Qa:
                        e(t, Mu, r);
                        break;
                    case Ya:
                        e(t, xu, r);
                        break;
                    case Ka:
                        e(t, _u, r), e(t, ju, r);
                        break;
                    case Za:
                    case Ja:
                    case tu:
                        e(t, Cu[n], r);
                        break;
                    case eu:
                        e(t, Iu, r)
                }
            }
        },
        ec = function(t) {
            return {
                type: "IX2_RAW_DATA_IMPORTED",
                payload: ft.extends({}, d(t))
            }
        },
        nc = function() {
            return {
                type: "IX2_SESSION_STARTED",
                payload: {}
            }
        },
        rc = function() {
            return {
                type: "IX2_SESSION_STOPPED",
                payload: {}
            }
        },
        ic = function(t, e) {
            return {
                type: "IX2_EVENT_LISTENER_ADDED",
                payload: {
                    target: t,
                    listenerParams: e
                }
            }
        },
        oc = function(t, e) {
            return {
                type: "IX2_EVENT_STATE_CHANGED",
                payload: {
                    stateKey: t,
                    newState: e
                }
            }
        },
        ac = function(t, e) {
            return {
                type: "IX2_ANIMATION_FRAME_CHANGED",
                payload: {
                    now: t,
                    parameters: e
                }
            }
        },
        uc = function(t, e) {
            return {
                type: "IX2_PARAMETER_CHANGED",
                payload: {
                    key: t,
                    value: e
                }
            }
        },
        cc = function(t) {
            return {
                type: "IX2_INSTANCE_ADDED",
                payload: ft.extends({}, t)
            }
        },
        sc = function(t) {
            return {
                type: "IX2_INSTANCE_STARTED",
                payload: {
                    instanceId: t
                }
            }
        },
        fc = function(t) {
            return {
                type: "IX2_INSTANCE_REMOVED",
                payload: {
                    instanceId: t
                }
            }
        },
        lc = function(t) {
            return {
                type: "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                payload: {
                    actionListId: t.actionListId,
                    isPlaying: t.isPlaying
                }
            }
        },
        dc = function(t) {
            return {
                type: "IX2_VIEWPORT_WIDTH_CHANGED",
                payload: {
                    width: t.width,
                    mediaQueries: t.mediaQueries
                }
            }
        },
        pc = Object.freeze({
            rawDataImported: ec,
            sessionStarted: nc,
            sessionStopped: rc,
            previewRequested: function(t) {
                return {
                    type: "IX2_PREVIEW_REQUESTED",
                    payload: {
                        rawData: t.rawData
                    }
                }
            },
            playbackRequested: function(t) {
                var e = t.actionTypeId;
                return {
                    type: "IX2_PLAYBACK_REQUESTED",
                    payload: {
                        actionTypeId: void 0 === e ? ru : e,
                        actionListId: t.actionListId,
                        actionItemId: t.actionItemId,
                        eventId: t.eventId,
                        allowEvents: t.allowEvents,
                        immediate: t.immediate,
                        verbose: t.verbose,
                        rawData: t.rawData
                    }
                }
            },
            stopRequested: function(t) {
                return {
                    type: "IX2_STOP_REQUESTED",
                    payload: {
                        actionListId: t
                    }
                }
            },
            clearRequested: function() {
                return {
                    type: "IX2_CLEAR_REQUESTED",
                    payload: {}
                }
            },
            eventListenerAdded: ic,
            eventStateChanged: oc,
            animationFrameChanged: ac,
            parameterChanged: uc,
            instanceAdded: cc,
            instanceStarted: sc,
            instanceRemoved: fc,
            actionListPlaybackChanged: lc,
            viewportWidthChanged: dc
        }),
        hc = Object.freeze({
            setStyle: function(t, e, n) {
                t.style[e] = n
            },
            getStyle: function(t, e) {
                return t.style[e]
            },
            matchSelector: function(t) {
                return function(e) {
                    return e[Pu](t)
                }
            },
            getQuerySelector: function(t) {
                var e = t.id,
                    n = t.selector;
                if (e) {
                    var r = e;
                    if (-1 !== e.indexOf(cu)) {
                        var i = e.split(cu),
                            o = i[0];
                        if (r = i[1], o !== document.documentElement.getAttribute(su)) return null
                    }
                    return '[data-w-id="' + r + '"]'
                }
                return n
            },
            getValidDocument: function(t) {
                return null == t || t === document.documentElement.getAttribute(su) ? document : null
            },
            queryDocument: function(t, e) {
                return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
            },
            getChildElements: function() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
                    var i = t[n].children,
                        o = i.length;
                    if (o)
                        for (var a = 0; a < o; a++) e.push(i[a])
                }
                return e
            },
            getSiblingElements: function() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
                    }
                }
                return e
            }
        }),
        vc = t(function(t) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        }),
        yc = vc && "object" == typeof vc && "default" in vc ? vc.default : vc,
        gc = t(function(t) {
            t.exports = function() {}
        }),
        mc = gc && "object" == typeof gc && "default" in gc ? gc.default : gc,
        bc = t(function(t) {
            var e = Ee,
                n = Object.create,
                r = function() {
                    function t() {}
                    return function(r) {
                        if (!e(r)) return {};
                        if (n) return n(r);
                        t.prototype = r;
                        var i = new t;
                        return t.prototype = void 0, i
                    }
                }();
            t.exports = r
        }),
        wc = bc && "object" == typeof bc && "default" in bc ? bc.default : bc,
        xc = t(function(t) {
            function e(t, e) {
                this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
            }
            var n = wc,
                r = mc;
            (e.prototype = n(r.prototype)).constructor = e, t.exports = e
        }),
        _c = xc && "object" == typeof xc && "default" in xc ? xc.default : xc,
        jc = t(function(t) {
            function e(t) {
                this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = i, this.__views__ = []
            }
            var n = wc,
                r = mc,
                i = 4294967295;
            (e.prototype = n(r.prototype)).constructor = e, t.exports = e
        }),
        Ic = jc && "object" == typeof jc && "default" in jc ? jc.default : jc,
        Ec = t(function(t) {
            var e = Ic,
                n = _c,
                r = yc;
            t.exports = function(t) {
                if (t instanceof e) return t.clone();
                var i = new n(t.__wrapped__, t.__chain__);
                return i.__actions__ = r(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i
            }
        }),
        Oc = Ec && "object" == typeof Ec && "default" in Ec ? Ec.default : Ec,
        Ac = t(function(t) {
            function e(t) {
                if (a(t) && !o(t) && !(t instanceof n)) {
                    if (t instanceof r) return t;
                    if (c.call(t, "__wrapped__")) return u(t)
                }
                return new r(t)
            }
            var n = Ic,
                r = _c,
                i = mc,
                o = Re,
                a = se,
                u = Oc,
                c = Object.prototype.hasOwnProperty;
            (e.prototype = i.prototype).constructor = e, t.exports = e
        }),
        Tc = Ac && "object" == typeof Ac && "default" in Ac ? Ac.default : Ac,
        Sc = t(function(t) {
            var e = {};
            t.exports = e
        }),
        Pc = Sc && "object" == typeof Sc && "default" in Sc ? Sc.default : Sc,
        kc = t(function(t) {
            var e = Pc,
                n = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                for (var r = t.name + "", i = e[r], o = n.call(e, r) ? i.length : 0; o--;) {
                    var a = i[o],
                        u = a.func;
                    if (null == u || u == t) return a.name
                }
                return r
            }
        }),
        Mc = kc && "object" == typeof kc && "default" in kc ? kc.default : kc,
        Lc = t(function(t) {
            t.exports = function() {}
        }),
        Cc = Lc && "object" == typeof Lc && "default" in Lc ? Lc.default : Lc,
        Rc = t(function(t) {
            var e = Yr,
                n = e && new e;
            t.exports = n
        }),
        Dc = Rc && "object" == typeof Rc && "default" in Rc ? Rc.default : Rc,
        Nc = t(function(t) {
            var e = Dc,
                n = Cc,
                r = e ? function(t) {
                    return e.get(t)
                } : n;
            t.exports = r
        }),
        zc = Nc && "object" == typeof Nc && "default" in Nc ? Nc.default : Nc,
        Vc = t(function(t) {
            var e = Ic,
                n = zc,
                r = Mc,
                i = Tc;
            t.exports = function(t) {
                var o = r(t),
                    a = i[o];
                if ("function" != typeof a || !(o in e.prototype)) return !1;
                if (t === a) return !0;
                var u = n(a);
                return !!u && t === u[0]
            }
        }),
        $c = Vc && "object" == typeof Vc && "default" in Vc ? Vc.default : Vc,
        Xc = t(function(t) {
            var e = 800,
                n = 16,
                r = Date.now;
            t.exports = function(t) {
                var i = 0,
                    o = 0;
                return function() {
                    var a = r(),
                        u = n - (a - o);
                    if (o = a, u > 0) {
                        if (++i >= e) return arguments[0]
                    } else i = 0;
                    return t.apply(void 0, arguments)
                }
            }
        }),
        Wc = Xc && "object" == typeof Xc && "default" in Xc ? Xc.default : Xc,
        Gc = t(function(t) {
            t.exports = function(t) {
                return function() {
                    return t
                }
            }
        }),
        Fc = Gc && "object" == typeof Gc && "default" in Gc ? Gc.default : Gc,
        Bc = t(function(t) {
            var e = Fc,
                n = ra,
                r = yr,
                i = n ? function(t, r) {
                    return n(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: e(r),
                        writable: !0
                    })
                } : r;
            t.exports = i
        }),
        Hc = Bc && "object" == typeof Bc && "default" in Bc ? Bc.default : Bc,
        qc = t(function(t) {
            var e = Wc(Hc);
            t.exports = e
        }),
        Uc = qc && "object" == typeof qc && "default" in qc ? qc.default : qc,
        Qc = t(function(t) {
            t.exports = function(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }
        }),
        Yc = Qc && "object" == typeof Qc && "default" in Qc ? Qc.default : Qc,
        Kc = t(function(t) {
            var e = Yc,
                n = Math.max;
            t.exports = function(t, r, i) {
                return r = n(void 0 === r ? t.length - 1 : r, 0),
                    function() {
                        for (var o = arguments, a = -1, u = n(o.length - r, 0), c = Array(u); ++a < u;) c[a] = o[r + a];
                        a = -1;
                        for (var s = Array(r + 1); ++a < r;) s[a] = o[a];
                        return s[r] = i(c), e(t, this, s)
                    }
            }
        }),
        Zc = Kc && "object" == typeof Kc && "default" in Kc ? Kc.default : Kc,
        Jc = t(function(t) {
            var e = ge,
                n = Tr,
                r = Re,
                i = e ? e.isConcatSpreadable : void 0;
            t.exports = function(t) {
                return r(t) || n(t) || !!(i && t && t[i])
            }
        }),
        ts = Jc && "object" == typeof Jc && "default" in Jc ? Jc.default : Jc,
        es = t(function(t) {
            function e(t, i, o, a, u) {
                var c = -1,
                    s = t.length;
                for (o || (o = r), u || (u = []); ++c < s;) {
                    var f = t[c];
                    i > 0 && o(f) ? i > 1 ? e(f, i - 1, o, a, u) : n(u, f) : a || (u[u.length] = f)
                }
                return u
            }
            var n = Qo,
                r = ts;
            t.exports = e
        }),
        ns = es && "object" == typeof es && "default" in es ? es.default : es,
        rs = t(function(t) {
            var e = ns;
            t.exports = function(t) {
                return (null == t ? 0 : t.length) ? e(t, 1) : []
            }
        }),
        is = rs && "object" == typeof rs && "default" in rs ? rs.default : rs,
        os = t(function(t) {
            var e = is,
                n = Zc,
                r = Uc;
            t.exports = function(t) {
                return r(n(t, void 0, e), t + "")
            }
        }),
        as = os && "object" == typeof os && "default" in os ? os.default : os,
        us = t(function(t) {
            var e = _c,
                n = as,
                r = zc,
                i = Mc,
                o = Re,
                a = $c,
                u = 200,
                c = "Expected a function",
                s = 8,
                f = 32,
                l = 128,
                d = 256;
            t.exports = function(t) {
                return n(function(n) {
                    var p = n.length,
                        h = p,
                        v = e.prototype.thru;
                    for (t && n.reverse(); h--;) {
                        var y = n[h];
                        if ("function" != typeof y) throw new TypeError(c);
                        if (v && !g && "wrapper" == i(y)) var g = new e([], !0)
                    }
                    for (h = g ? h : p; ++h < p;) {
                        y = n[h];
                        var m = i(y),
                            b = "wrapper" == m ? r(y) : void 0;
                        g = b && a(b[0]) && b[1] == (l | s | f | d) && !b[4].length && 1 == b[9] ? g[i(b[0])].apply(g, b[3]) : 1 == y.length && a(y) ? g[m]() : g.thru(y)
                    }
                    return function() {
                        var t = arguments,
                            e = t[0];
                        if (g && 1 == t.length && o(e) && e.length >= u) return g.plant(e).value();
                        for (var r = 0, i = p ? n[r].apply(this, t) : e; ++r < p;) i = n[r].call(this, i);
                        return i
                    }
                })
            }
        }),
        cs = us && "object" == typeof us && "default" in us ? us.default : us,
        ss = t(function(t) {
            var e = cs();
            t.exports = e
        }),
        fs = ss && "object" == typeof ss && "default" in ss ? ss.default : ss,
        ls = function(t) {
            return function(e) {
                return !("object" !== (void 0 === e ? "undefined" : ft.typeof(e)) || !t(e)) || e
            }
        },
        ds = ls(function(t) {
            return t.element === t.nativeEvent.target
        }),
        ps = fs([ds, ls(function(t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        })]),
        hs = function(t, e) {
            var n = t.store,
                r = t.event,
                i = r.action,
                o = r.id,
                a = i.config,
                u = a.actionListId,
                c = a.autoStopEventId;
            if (c) {
                var s = n.getState().ixData.events;
                nt({
                    store: n,
                    eventId: c,
                    actionListId: Dr(s[c], "action.config.actionListId")
                })
            }
            return nt({
                store: n,
                eventId: o,
                actionListId: u
            }), rt({
                store: n,
                eventId: o,
                actionListId: u
            }), e
        },
        vs = function(t, e) {
            return function(n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        },
        ys = {
            handler: vs(ps, hs)
        },
        gs = ft.extends({}, ys, {
            types: ["COMPONENT_ACTIVE", "COMPONENT_INACTIVE"].join(" ")
        }),
        ms = [{
            target: window,
            types: "resize orientationchange"
        }, {
            target: document,
            types: "scroll readystatechange IX2_PREVIEW_LOAD"
        }],
        bs = {
            types: [{
                target: document,
                types: "scroll"
            }]
        },
        ws = function() {
            var t = void 0 !== window.pageXOffset,
                e = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
            return function() {
                return {
                    scrollLeft: t ? window.pageXOffset : e.scrollLeft,
                    scrollTop: t ? window.pageYOffset : e.scrollTop,
                    scrollWidth: e.scrollWidth,
                    scrollHeight: e.scrollHeight,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight
                }
            }
        }(),
        xs = function(t, e) {
            return !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top)
        },
        _s = function(t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        js = function(t) {
            var e = t.element,
                n = ws(),
                r = n.clientWidth,
                i = n.clientHeight;
            return xs(e.getBoundingClientRect(), {
                left: 0,
                top: 0,
                right: r,
                bottom: i
            })
        },
        Is = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = -1 !== ["COMPONENT_ACTIVE", "COMPONENT_INACTIVE"].indexOf(e.nativeEvent.type) ? "COMPONENT_ACTIVE" === e.nativeEvent.type : n.isActive,
                    i = ft.extends({}, n, {
                        isActive: r
                    });
                return i.isActive !== n.isActive ? t(e, i) || i : i
            }
        },
        Es = function(t) {
            return function(e, n) {
                var r = {
                    elementHovered: _s(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) ? t(e, r) || r : r
            }
        },
        Os = function(t) {
            return function(e, n) {
                var r = ws().scrollTop,
                    i = {
                        scrollTop: r,
                        scrollingDown: n ? r > n.scrollTop : void 0
                    };
                return n && i.scrollingDown !== n.scrollingDown ? t(e, i) || i : i
            }
        },
        As = function(t, e) {
            return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
        },
        Ts = ft.extends({}, gs, {
            handler: vs(ps, Is(function(t, e) {
                return e.isActive ? ys.handler(t, e) : e
            }))
        }),
        Ss = ft.extends({}, gs, {
            handler: vs(ps, Is(function(t, e) {
                return e.isActive ? e : ys.handler(t, e)
            }))
        }),
        Ps = ft.extends({}, bs, {
            handler: function(t) {
                return function(e, n) {
                    var r = ft.extends({}, n, {
                        elementVisible: js(e)
                    });
                    return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) ? t(e, r) || r : r
                }
            }(function(t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : "SCROLL_INTO_VIEW" === r.eventTypeId === n ? (hs(t), ft.extends({}, e, {
                    triggered: !0
                })) : e
            })
        }),
        ks = (vt = {}, ft.defineProperty(vt, "SLIDER_ACTIVE", Ts), ft.defineProperty(vt, "SLIDER_INACTIVE", Ss), ft.defineProperty(vt, "DROPDOWN_OPEN", Ts), ft.defineProperty(vt, "DROPDOWN_CLOSE", Ss), ft.defineProperty(vt, "NAVBAR_OPEN", Ts), ft.defineProperty(vt, "NAVBAR_CLOSE", Ss), ft.defineProperty(vt, "TAB_ACTIVE", Ts), ft.defineProperty(vt, "TAB_INACTIVE", Ss), ft.defineProperty(vt, "MOUSE_CLICK", ft.extends({}, ys, {
            types: "click"
        })), ft.defineProperty(vt, "MOUSE_SECOND_CLICK", ft.extends({
            types: "click"
        }, ys, {
            handler: vs(ps, function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 1
                    },
                    n = e.clickCount,
                    r = ft.objectWithoutProperties(e, ["clickCount"]);
                return n % 2 == 0 && (n = 0, r = hs(t, r)), ft.extends({
                    clickCount: n + 1
                }, r)
            })
        })), ft.defineProperty(vt, "MOUSE_DOWN", ft.extends({}, ys, {
            types: "mousedown"
        })), ft.defineProperty(vt, "MOUSE_UP", ft.extends({}, ys, {
            types: "mouseup"
        })), ft.defineProperty(vt, "MOUSE_OVER", {
            types: "mouseover mouseout",
            handler: vs(ps, Es(function(t, e) {
                e.elementHovered && hs(t)
            }))
        }), ft.defineProperty(vt, "MOUSE_OUT", {
            types: "mouseover mouseout",
            handler: vs(ps, Es(function(t, e) {
                e.elementHovered || hs(t)
            }))
        }), ft.defineProperty(vt, iu, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.event,
                    o = t.nativeEvent,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    f = r.reverse,
                    l = r.restingState,
                    d = void 0 === l ? 0 : l,
                    p = o.clientX,
                    h = void 0 === p ? a.clientX : p,
                    v = o.clientY,
                    y = void 0 === v ? a.clientY : v,
                    g = o.pageX,
                    m = void 0 === g ? a.pageX : g,
                    b = o.pageY,
                    w = void 0 === b ? a.pageY : b,
                    x = "X_AXIS" === c,
                    _ = "mouseout" === o.type,
                    j = d / 100,
                    I = s;
                switch (u) {
                    case "VIEWPORT":
                        if (_) break;
                        var E = ws(),
                            O = E.scrollLeft,
                            A = E.scrollTop;
                        j = x ? Math.min(O + h, window.innerWidth) / window.innerWidth : Math.min(A + y, window.innerHeight) / window.innerHeight;
                        break;
                    case uu:
                        if (_) break;
                        var T = ws(),
                            S = T.scrollLeft,
                            P = T.scrollTop,
                            k = T.scrollWidth,
                            M = T.scrollHeight;
                        j = x ? Math.min(S + m, k) / k : Math.min(P + w, M) / M;
                        break;
                    case au:
                    default:
                        I = V(i.id, s);
                        var L = 0 === o.type.indexOf("mouse");
                        if (L && !0 !== ps({
                                element: n,
                                nativeEvent: o
                            })) break;
                        var C = n.getBoundingClientRect(),
                            R = C.left,
                            D = C.top,
                            N = C.width,
                            z = C.height;
                        if (!L && !As({
                                left: h,
                                top: y
                            }, C)) break;
                        j = x ? (h - R) / N : (y - D) / z
                }
                return j = f ? 1 - j : j, e.dispatch(uc(I, j)), {
                    clientX: h,
                    clientY: y,
                    pageX: m,
                    pageY: w
                }
            }
        }), ft.defineProperty(vt, "PAGE_SCROLL", {
            types: ms,
            handler: function(t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ws(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch(uc(r, a))
            }
        }), ft.defineProperty(vt, ou, {
            types: ms,
            handler: function(t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.event,
                    o = ws(),
                    a = o.scrollLeft,
                    u = o.scrollTop,
                    c = o.scrollWidth,
                    s = o.scrollHeight,
                    f = o.clientWidth,
                    l = o.clientHeight,
                    d = c - f,
                    p = s - l,
                    h = r.basedOn,
                    v = r.selectedAxis,
                    y = r.continuousParameterGroupId,
                    g = r.startsEntering,
                    m = r.startsExiting,
                    b = r.addEndOffset,
                    w = r.addStartOffset,
                    x = r.addOffsetValue,
                    _ = void 0 === x ? 0 : x,
                    j = r.endOffsetValue,
                    I = void 0 === j ? 0 : j,
                    E = "X_AXIS" === v;
                if ("VIEWPORT" === h) {
                    var O = E ? a / d : u / p;
                    n.dispatch(uc(y, O))
                } else {
                    var A = V(i.id, y),
                        T = e.getBoundingClientRect(),
                        S = (w ? _ : 0) / 100,
                        P = (b ? I : 0) / 100;
                    S = g ? S : 1 - S, P = m ? P : 1 - P;
                    var k = T.top + Math.min(T.height * S, l),
                        M = T.top + T.height * P - k,
                        L = Math.min(l + M, p),
                        C = Math.min(Math.max(0, l - k), L) / L;
                    n.dispatch(uc(A, C))
                }
            }
        }), ft.defineProperty(vt, "SCROLL_INTO_VIEW", Ps), ft.defineProperty(vt, "SCROLL_OUT_OF_VIEW", Ps), ft.defineProperty(vt, "PAGE_SCROLL_DOWN", ft.extends({}, bs, {
            handler: Os(function(t, e) {
                e.scrollingDown && hs(t)
            })
        })), ft.defineProperty(vt, "PAGE_SCROLL_UP", ft.extends({}, bs, {
            handler: Os(function(t, e) {
                e.scrollingDown || hs(t)
            })
        })), ft.defineProperty(vt, "PAGE_FINISH", {
            types: "readystatechange IX2_PREVIEW_LOAD",
            handler: vs(ds, function(t) {
                return function(e, n) {
                    var r = {
                        finished: "complete" === document.readyState
                    };
                    return !r.finished || n && n.finshed || t(e), r
                }
            }(hs))
        }), ft.defineProperty(vt, "PAGE_START", {
            types: "readystatechange IX2_PREVIEW_LOAD",
            handler: vs(ds, function(t) {
                return function(e, n) {
                    var r = {
                        started: !0
                    };
                    return n || t(e), r
                }
            }(hs))
        }), vt),
        Ms = ["resize", "orientationchange"],
        Ls = function(t, e) {
            return ga(Aa(t, e), ba)
        },
        Cs = function(t) {
            return v({
                config: {
                    target: t.target
                },
                elementApi: hc
            })
        },
        Rs = a(ue);
    wt.env() && function(t) {
        p({
            store: t,
            select: function(t) {
                return t.ixRequest.preview
            },
            onChange: X
        }), p({
            store: t,
            select: function(t) {
                return t.ixRequest.playback
            },
            onChange: W
        }), p({
            store: t,
            select: function(t) {
                return t.ixRequest.stop
            },
            onChange: G
        }), p({
            store: t,
            select: function(t) {
                return t.ixRequest.clear
            },
            onChange: F
        })
    }(Rs);
    var Ds = {
        init: function(t) {
            ct(), B({
                store: Rs,
                rawData: t,
                allowEvents: !0
            })
        },
        destroy: ct,
        store: Rs,
        actions: pc
    };
    t(function(t) {
        var e = Ds;
        wt.define("ix2", t.exports = function() {
            return e
        })
    }), t(function(t) {
        var e = wt;
        e.define("links", t.exports = function(t, n) {
            function r(e) {
                var n = a && e.getAttribute("href-disabled") || e.getAttribute("href");
                if (p.href = n, !(n.indexOf(":") >= 0)) {
                    var r = t(e);
                    if (0 === n.indexOf("#") && v.test(n)) {
                        var i = t(n);
                        i.length && u.push({
                            link: r,
                            sec: i,
                            active: !1
                        })
                    } else if ("#" !== n) {
                        var s = p.href === d.href || n === c || y.test(n) && g.test(c);
                        o(r, h, s)
                    }
                }
            }

            function i() {
                var t = f.scrollTop(),
                    e = f.height();
                n.each(u, function(n) {
                    var r = n.link,
                        i = n.sec,
                        a = i.offset().top,
                        u = i.outerHeight(),
                        c = .5 * e,
                        s = i.is(":visible") && a + u - c >= t && a + c <= t + e;
                    n.active !== s && (n.active = s, o(r, h, s))
                })
            }

            function o(t, e, n) {
                var r = t.hasClass(e);
                n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
            }
            var a, u, c, s = {},
                f = t(window),
                l = e.env(),
                d = window.location,
                p = document.createElement("a"),
                h = "w--current",
                v = /^#[\w:.-]+$/,
                y = /index\.(html|php)$/,
                g = /\/$/;
            return s.ready = s.design = s.preview = function() {
                a = l && e.env("design"), c = e.env("slug") || d.pathname || "", e.scroll.off(i), u = [];
                for (var t = document.links, n = 0; n < t.length; ++n) r(t[n]);
                u.length && (e.scroll.on(i), i())
            }, s
        })
    }), t(function(t) {
        var e = wt;
        e.define("maps", t.exports = function(t, n) {
            function r() {
                function e() {
                    window._wf_maps_loaded = function() {}, p = window.google, f.each(a), i(), o()
                }(f = d.find(h)).length && (null === p ? (t.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded&key=" + v), window._wf_maps_loaded = e) : e())
            }

            function i() {
                e.resize.off(u), e.redraw.off(u)
            }

            function o() {
                e.resize.on(u), e.redraw.on(u)
            }

            function a(e, n) {
                s(n, t(n).data())
            }

            function u() {
                f.each(c)
            }

            function c(t, e) {
                var n = s(e);
                p.maps.event.trigger(n.map, "resize"), n.setMapPosition()
            }

            function s(n, r) {
                var i = t.data(n, y);
                if (i) return i;
                var o = t(n);
                i = t.data(n, y, {
                    latLng: "51.511214,-0.119824",
                    tooltip: "",
                    style: "roadmap",
                    zoom: 12,
                    marker: new p.maps.Marker({
                        draggable: !1
                    }),
                    infowindow: new p.maps.InfoWindow({
                        disableAutoPan: !0
                    })
                });
                var a = r.widgetLatlng || i.latLng;
                i.latLng = a;
                var u = a.split(","),
                    c = new p.maps.LatLng(u[0], u[1]);
                i.latLngObj = c;
                var s = !(e.env.touch && r.disableTouch);
                i.map = new p.maps.Map(n, {
                    center: i.latLngObj,
                    zoom: i.zoom,
                    maxZoom: 18,
                    mapTypeControl: !1,
                    panControl: !1,
                    streetViewControl: !1,
                    scrollwheel: !r.disableScroll,
                    draggable: s,
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: p.maps.ZoomControlStyle.SMALL
                    },
                    mapTypeId: i.style
                }), i.marker.setMap(i.map), i.setMapPosition = function() {
                    i.map.setCenter(i.latLngObj);
                    var t = 0,
                        e = 0,
                        n = o.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
                    t -= parseInt(n.paddingLeft, 10), t += parseInt(n.paddingRight, 10), e -= parseInt(n.paddingTop, 10), e += parseInt(n.paddingBottom, 10), (t || e) && i.map.panBy(t, e), o.css("position", "")
                }, p.maps.event.addListener(i.map, "tilesloaded", function() {
                    p.maps.event.clearListeners(i.map, "tilesloaded"), i.setMapPosition()
                }), i.setMapPosition(), i.marker.setPosition(i.latLngObj), i.infowindow.setPosition(i.latLngObj);
                var f = r.widgetTooltip;
                f && (i.tooltip = f, i.infowindow.setContent(f), i.infowindowOpen || (i.infowindow.open(i.map, i.marker), i.infowindowOpen = !0));
                var l = r.widgetStyle;
                l && i.map.setMapTypeId(l);
                var d = r.widgetZoom;
                return null != d && (i.zoom = d, i.map.setZoom(Number(d))), p.maps.event.addListener(i.marker, "click", function() {
                    window.open("https://maps.google.com/?z=" + i.zoom + "&daddr=" + i.latLng)
                }), i
            }
            var f, l = {},
                d = t(document),
                p = null,
                h = ".w-widget-map",
                v = "AIzaSyCUQwYgWU4FRxYUmboBOZwaWM1tCqI3ER8";
            l.ready = function() {
                e.env() || r()
            }, l.destroy = i;
            var y = "w-widget-map";
            return l
        })
    }), t(function(t) {
        var e = wt,
            n = It;
        e.define("navbar", t.exports = function(t, r) {
            function i() {
                e.resize.off(a)
            }

            function o() {
                e.resize.on(a)
            }

            function a() {
                j.each(g)
            }

            function u(e, n) {
                var r = t(n),
                    i = t.data(n, k);
                i || (i = t.data(n, k, {
                    open: !1,
                    el: r,
                    config: {}
                })), i.menu = r.find(".w-nav-menu"), i.links = i.menu.find(".w-nav-link"), i.dropdowns = i.menu.find(".w-dropdown"), i.button = r.find(".w-nav-button"), i.container = r.find(".w-container"), i.outside = y(i), i.el.off(k), i.button.off(k), i.menu.off(k), l(i), I ? (s(i), i.el.on("setting" + k, d(i))) : (f(i), i.button.on("tap" + k, h(i)), i.menu.on("click" + k, "a", v(i))), g(e, n)
            }

            function c(e, n) {
                var r = t.data(n, k);
                r && (s(r), t.removeData(n, k))
            }

            function s(t) {
                t.overlay && (x(t, !0), t.overlay.remove(), t.overlay = null)
            }

            function f(e) {
                e.overlay || (e.overlay = t(P).appendTo(e.el), e.parent = e.menu.parent(), x(e, !0))
            }

            function l(t) {
                var e = {},
                    n = t.config || {},
                    i = e.animation = t.el.attr("data-animation") || "default";
                e.animOver = /^over/.test(i), e.animDirect = /left$/.test(i) ? -1 : 1, n.animation !== i && t.open && r.defer(p, t), e.easing = t.el.attr("data-easing") || "ease", e.easing2 = t.el.attr("data-easing2") || "ease";
                var o = t.el.attr("data-duration");
                e.duration = null != o ? Number(o) : 400, e.docHeight = t.el.attr("data-doc-height"), t.config = e
            }

            function d(t) {
                return function(e, n) {
                    n = n || {};
                    var i = A.width();
                    l(t), !0 === n.open && b(t, !0), !1 === n.open && x(t, !0), t.open && r.defer(function() {
                        i !== A.width() && p(t)
                    })
                }
            }

            function p(t) {
                t.open && (x(t, !0), b(t, !0))
            }

            function h(t) {
                return r.debounce(function() {
                    t.open ? x(t) : b(t)
                })
            }

            function v(n) {
                return function(r) {
                    var i = t(this).attr("href");
                    e.validClick(r.currentTarget) ? i && 0 === i.indexOf("#") && n.open && x(n) : r.preventDefault()
                }
            }

            function y(e) {
                return e.outside && T.off("tap" + k, e.outside), r.debounce(function(n) {
                    if (e.open) {
                        var r = t(n.target).closest(".w-nav-menu");
                        e.menu.is(r) || x(e)
                    }
                })
            }

            function g(e, n) {
                var r = t.data(n, k),
                    i = r.collapsed = "none" !== r.button.css("display");
                if (!r.open || i || I || x(r, !0), r.container.length) {
                    var o = m(r);
                    r.links.each(o), r.dropdowns.each(o)
                }
                r.open && w(r)
            }

            function m(e) {
                var n = e.container.css(N);
                return "none" === n && (n = ""),
                    function(e, r) {
                        (r = t(r)).css(N, ""), "none" === r.css(N) && r.css(N, n)
                    }
            }

            function b(t, n) {
                if (!t.open) {
                    t.open = !0, t.menu.addClass(L), t.links.addClass(C), t.button.addClass(M);
                    var r = t.config;
                    "none" !== r.animation && O.support.transform || (n = !0);
                    var i = w(t),
                        o = t.menu.outerHeight(!0),
                        a = t.menu.outerWidth(!0),
                        u = t.el.height(),
                        c = t.el[0];
                    if (g(0, c), R.intro(0, c), e.redraw.up(), I || T.on("tap" + k, t.outside), !n) {
                        var s = "transform " + r.duration + "ms " + r.easing;
                        if (t.overlay && (D = t.menu.prev(), t.overlay.show().append(t.menu)), r.animOver) return O(t.menu).add(s).set({
                            x: r.animDirect * a,
                            height: i
                        }).start({
                            x: 0
                        }), void(t.overlay && t.overlay.width(a));
                        var f = u + o;
                        O(t.menu).add(s).set({
                            y: -f
                        }).start({
                            y: 0
                        })
                    }
                }
            }

            function w(t) {
                var e = t.config,
                    n = e.docHeight ? T.height() : _.height();
                return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.height()), t.overlay && t.overlay.height(n), n
            }

            function x(t, e) {
                function n() {
                    t.menu.height(""), O(t.menu).set({
                        x: 0,
                        y: 0
                    }), t.menu.removeClass(L), t.links.removeClass(C), t.overlay && t.overlay.children().length && (D.length ? t.menu.insertAfter(D) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
                }
                if (t.open) {
                    t.open = !1, t.button.removeClass(M);
                    var r = t.config;
                    if (("none" === r.animation || !O.support.transform || r.duration <= 0) && (e = !0), R.outro(0, t.el[0]), T.off("tap" + k, t.outside), e) return O(t.menu).stop(), void n();
                    var i = "transform " + r.duration + "ms " + r.easing2,
                        o = t.menu.outerHeight(!0),
                        a = t.menu.outerWidth(!0),
                        u = t.el.height();
                    if (r.animOver) O(t.menu).add(i).start({
                        x: a * r.animDirect
                    }).then(n);
                    else {
                        var c = u + o;
                        O(t.menu).add(i).start({
                            y: -c
                        }).then(n)
                    }
                }
            }
            var _, j, I, E = {},
                O = t.tram,
                A = t(window),
                T = t(document),
                S = e.env(),
                P = '<div class="w-nav-overlay" data-wf-ignore />',
                k = ".w-nav",
                M = "w--open",
                L = "w--nav-menu-open",
                C = "w--nav-link-open",
                R = n.triggers,
                D = t();
            E.ready = E.design = E.preview = function() {
                I = S && e.env("design"), _ = t(document.body), (j = T.find(k)).length && (j.each(u), i(), o())
            }, E.destroy = function() {
                D = t(), i(), j && j.length && j.each(c)
            };
            var N = "max-width";
            return E
        })
    }), t(function(t) {
        var e = wt;
        e.define("scroll", t.exports = function(t) {
            function n(n, i) {
                if (f.test(n)) {
                    var o = t("#" + n);
                    if (o.length) {
                        i && (i.preventDefault(), i.stopPropagation()), c.hash === n || !s || !s.pushState || e.env.chrome && "file:" === c.protocol || (s.state && s.state.hash) !== n && s.pushState({
                            hash: n
                        }, "", "#" + n);
                        var a = e.env("editor") ? ".w-editor-body" : "body",
                            l = t("header, " + a + " > .header, " + a + " > .w-nav:not([data-no-scroll])"),
                            d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                        u.setTimeout(function() {
                            r(o, d)
                        }, i ? 0 : 300)
                    }
                }
            }

            function r(e, n) {
                var r = t(u).scrollTop(),
                    o = e.offset().top - n;
                if ("mid" === e.data("scroll")) {
                    var a = t(u).height() - n,
                        c = e.outerHeight();
                    c < a && (o -= Math.round((a - c) / 2))
                }
                var s = 1;
                t("body").add(e).each(function() {
                    var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                    !isNaN(e) && (0 === e || e > 0) && (s = e)
                }), Date.now || (Date.now = function() {
                    return (new Date).getTime()
                });
                var f = Date.now(),
                    l = u.requestAnimationFrame || u.mozRequestAnimationFrame || u.webkitRequestAnimationFrame || function(t) {
                        u.setTimeout(t, 15)
                    },
                    d = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * s,
                    p = function() {
                        var t = Date.now() - f;
                        u.scroll(0, i(r, o, t, d)), t <= d && l(p)
                    };
                p()
            }

            function i(t, e, n, r) {
                return n > r ? e : t + (e - t) * o(n / r)
            }

            function o(t) {
                return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            }
            var a = t(document),
                u = window,
                c = u.location,
                s = function() {
                    try {
                        return Boolean(u.frameElement)
                    } catch (t) {
                        return !0
                    }
                }() ? null : u.history,
                f = /^[a-zA-Z0-9][\w:.-]*$/;
            return {
                ready: function() {
                    c.hash && n(c.hash.substring(1));
                    var r = c.href.split("#")[0];
                    a.on("click", "a", function(i) {
                        if (!(e.env("design") || window.$.mobile && t(i.currentTarget).hasClass("ui-link")))
                            if ("#" !== this.getAttribute("href")) {
                                var o = this.href.split("#"),
                                    a = o[0] === r ? o[1] : null;
                                a && n(a, i)
                            } else i.preventDefault()
                    })
                }
            }
        })
    }), t(function(t) {
        var e = wt,
            n = It;
        e.define("slider", t.exports = function(t, r) {
            function i() {
                (j = S.find(k)).length && (j.filter(":visible").each(c), O = null, E || (o(), a()))
            }

            function o() {
                e.resize.off(u), e.redraw.off(A.redraw)
            }

            function a() {
                e.resize.on(u), e.redraw.on(A.redraw)
            }

            function u() {
                j.filter(":visible").each(m)
            }

            function c(e, n) {
                var r = t(n),
                    i = t.data(n, k);
                if (i || (i = t.data(n, k, {
                        index: 0,
                        depth: 1,
                        el: r,
                        config: {}
                    })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(L.reset), O && (i.maskWidth = 0), !T.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(E = !0);
                i.el.off(k), i.left.off(k), i.right.off(k), i.nav.off(k), s(i), I ? (i.el.on("setting" + k, y(i)), v(i), i.hasTimer = !1) : (i.el.on("swipe" + k, y(i)), i.left.on("tap" + k, l(i)), i.right.on("tap" + k, d(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, h(i))), i.nav.on("tap" + k, "> div", y(i)), P || i.mask.contents().filter(function() {
                    return 3 === this.nodeType
                }).remove(), m(e, n)
            }

            function s(t) {
                var e = {};
                e.crossOver = 0, e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
                var n = t.el.attr("data-duration");
                if (e.duration = null != n ? parseInt(n, 10) : 500, f(t.el.attr("data-infinite")) && (e.infinite = !0), f(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), f(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), f(t.el.attr("data-autoplay"))) {
                    e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                    var r = "mousedown" + k + " touchstart" + k;
                    I || t.el.off(r).one(r, function() {
                        v(t)
                    })
                }
                var i = t.right.width();
                e.edge = i ? i + 40 : 100, t.config = e
            }

            function f(t) {
                return "1" === t || "true" === t
            }

            function l(t) {
                return function() {
                    g(t, {
                        index: t.index - 1,
                        vector: -1
                    })
                }
            }

            function d(t) {
                return function() {
                    g(t, {
                        index: t.index + 1,
                        vector: 1
                    })
                }
            }

            function p(e, n) {
                var o = null;
                n === e.slides.length && (i(), b(e)), r.each(e.anchors, function(e, r) {
                    t(e.els).each(function(e, i) {
                        t(i).index() === n && (o = r)
                    })
                }), null != o && g(e, {
                    index: o,
                    immediate: !0
                })
            }

            function h(t) {
                v(t);
                var e = t.config,
                    n = e.timerMax;
                n && t.timerCount++ > n || (t.timerId = window.setTimeout(function() {
                    null == t.timerId || I || (d(t)(), h(t))
                }, e.delay))
            }

            function v(t) {
                window.clearTimeout(t.timerId), t.timerId = null
            }

            function y(n) {
                return function(r, i) {
                    i = i || {};
                    var o = n.config;
                    if (I && "setting" === r.type) {
                        if ("prev" === i.select) return l(n)();
                        if ("next" === i.select) return d(n)();
                        if (s(n), b(n), null == i.select) return;
                        p(n, i.select)
                    } else if ("swipe" !== r.type) n.nav.has(r.target).length && g(n, {
                        index: t(r.target).index()
                    });
                    else {
                        if (o.disableSwipe) return;
                        if (e.env("editor")) return;
                        if ("left" === i.direction) return d(n)();
                        if ("right" === i.direction) return l(n)()
                    }
                }
            }

            function g(e, n) {
                function r() {
                    d = t(o[e.index].els), h = e.slides.not(d), "slide" !== v && (l.visibility = "hidden"), T(h).set(l)
                }
                n = n || {};
                var i = e.config,
                    o = e.anchors;
                e.previous = e.index;
                var a = n.index,
                    u = {};
                a < 0 ? (a = o.length - 1, i.infinite && (u.x = -e.endX, u.from = 0, u.to = o[0].width)) : a >= o.length && (a = 0, i.infinite && (u.x = o[o.length - 1].width, u.from = -o[o.length - 1].x, u.to = u.from - u.x)), e.index = a;
                var c = e.nav.children().eq(e.index).addClass("w-active");
                e.nav.children().not(c).removeClass("w-active"), i.hideArrows && (e.index === o.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
                var s = e.offsetX || 0,
                    f = e.offsetX = -o[e.index].x,
                    l = {
                        x: f,
                        opacity: 1,
                        visibility: ""
                    },
                    d = t(o[e.index].els),
                    p = t(o[e.previous] && o[e.previous].els),
                    h = e.slides.not(d),
                    v = i.animation,
                    y = i.easing,
                    g = Math.round(i.duration),
                    m = n.vector || (e.index > e.previous ? 1 : -1),
                    b = "opacity " + g + "ms " + y,
                    w = "transform " + g + "ms " + y;
                if (I || (d.each(L.intro), h.each(L.outro)), n.immediate && !O) return T(d).set(l), void r();
                if (e.index !== e.previous) {
                    if ("cross" === v) {
                        var x = Math.round(g - g * i.crossOver),
                            _ = Math.round(g - x);
                        return b = "opacity " + x + "ms " + y, T(p).set({
                            visibility: ""
                        }).add(b).start({
                            opacity: 0
                        }), void T(d).set({
                            visibility: "",
                            x: f,
                            opacity: 0,
                            zIndex: e.depth++
                        }).add(b).wait(_).then({
                            opacity: 1
                        }).then(r)
                    }
                    return "fade" === v ? (T(p).set({
                        visibility: ""
                    }).stop(), void T(d).set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(b).start({
                        opacity: 1
                    }).then(r)) : "over" === v ? (l = {
                        x: e.endX
                    }, T(p).set({
                        visibility: ""
                    }).stop(), void T(d).set({
                        visibility: "",
                        zIndex: e.depth++,
                        x: f + o[e.index].width * m
                    }).add(w).start({
                        x: f
                    }).then(r)) : void(i.infinite && u.x ? (T(e.slides.not(p)).set({
                        visibility: "",
                        x: u.x
                    }).add(w).start({
                        x: f
                    }), T(p).set({
                        visibility: "",
                        x: u.from
                    }).add(w).start({
                        x: u.to
                    }), e.shifted = p) : (i.infinite && e.shifted && (T(e.shifted).set({
                        visibility: "",
                        x: s
                    }), e.shifted = null), T(e.slides).set({
                        visibility: ""
                    }).add(w).start({
                        x: f
                    })))
                }
            }

            function m(e, n) {
                var r = t.data(n, k);
                if (r) return x(r) ? b(r) : void(I && _(r) && b(r))
            }

            function b(e) {
                var n = 1,
                    r = 0,
                    i = 0,
                    o = 0,
                    a = e.maskWidth,
                    u = a - e.config.edge;
                u < 0 && (u = 0), e.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], e.slides.each(function(c, s) {
                    i - r > u && (n++, r += a, e.anchors[n - 1] = {
                        els: [],
                        x: i,
                        width: 0
                    }), o = t(s).outerWidth(!0), i += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(s)
                }), e.endX = i, I && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, w(e));
                var c = e.index;
                c >= n && (c = n - 1), g(e, {
                    immediate: !0,
                    index: c
                })
            }

            function w(e) {
                var n, r = [],
                    i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0; o < e.pages; o++) n = t(M), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
                    "margin-left": i,
                    "margin-right": i
                }), r.push(n);
                e.nav.empty().append(r)
            }

            function x(t) {
                var e = t.mask.width();
                return t.maskWidth !== e && (t.maskWidth = e, !0)
            }

            function _(e) {
                var n = 0;
                return e.slides.each(function(e, r) {
                    n += t(r).outerWidth(!0)
                }), e.slidesWidth !== n && (e.slidesWidth = n, !0)
            }
            var j, I, E, O, A = {},
                T = t.tram,
                S = t(document),
                P = e.env(),
                k = ".w-slider",
                M = '<div class="w-slider-dot" data-wf-ignore />',
                L = n.triggers;
            return A.ready = function() {
                I = e.env("design"), i()
            }, A.design = function() {
                I = !0, i()
            }, A.preview = function() {
                I = !1, i()
            }, A.redraw = function() {
                O = !0, i()
            }, A.destroy = o, A
        })
    }), t(function(t) {
        wt.define("touch", t.exports = function(t) {
            function e(t) {
                function e(t) {
                    var e = t.touches;
                    e && e.length > 1 || (f = !0, l = !1, e ? (d = !0, u = e[0].clientX, c = e[0].clientY) : (u = t.clientX, c = t.clientY), s = u)
                }

                function r(t) {
                    if (f) {
                        if (d && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
                        var e = t.touches,
                            r = e ? e[0].clientX : t.clientX,
                            i = e ? e[0].clientY : t.clientY,
                            h = r - s;
                        s = r, Math.abs(h) > p && o && "" === String(o()) && (n("swipe", t, {
                            direction: h > 0 ? "right" : "left"
                        }), a()), (Math.abs(r - u) > 10 || Math.abs(i - c) > 10) && (l = !0)
                    }
                }

                function i(t) {
                    if (f) {
                        if (f = !1, d && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(d = !1);
                        l || n("tap", t)
                    }
                }

                function a() {
                    f = !1
                }
                var u, c, s, f = !1,
                    l = !1,
                    d = !1,
                    p = Math.min(Math.round(.04 * window.innerWidth), 40);
                t.addEventListener("touchstart", e, !1), t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", i, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("mousedown", e, !1), t.addEventListener("mousemove", r, !1), t.addEventListener("mouseup", i, !1), t.addEventListener("mouseout", a, !1), this.destroy = function() {
                    t.removeEventListener("touchstart", e, !1), t.removeEventListener("touchmove", r, !1), t.removeEventListener("touchend", i, !1), t.removeEventListener("touchcancel", a, !1), t.removeEventListener("mousedown", e, !1), t.removeEventListener("mousemove", r, !1), t.removeEventListener("mouseup", i, !1), t.removeEventListener("mouseout", a, !1), t = null
                }
            }

            function n(e, n, r) {
                var i = t.Event(e, {
                    originalEvent: n
                });
                t(n.target).trigger(i, r)
            }
            var r = {},
                i = !document.addEventListener,
                o = window.getSelection;
            return i && (t.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }), r.init = function(n) {
                return i ? null : (n = "string" == typeof n ? t(n).get(0) : n) ? new e(n) : null
            }, r.instance = r.init(document), r
        })
    })
}();
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
        "slug": "back1",
        "name": "back1",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".back-left",
                "preserve3d": true,
                "stepsA": [{
                    "wait": "800ms"
                }, {
                    "transition": "transform 800ms ease 0",
                    "x": "-50%",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "transition": "transform 800ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "scroll",
                "selector": ".div-left",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "-50%",
                    "z": "0px"
                }],
                "stepsB": [{
                    "wait": "500ms"
                }, {
                    "transition": "transform 1600ms ease 0",
                    "x": "200%",
                    "y": "-50%",
                    "z": "0px"
                }]
            }]
        }
    },
    {
        "slug": "back2",
        "name": "back2",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".background2",
                "offsetTop": "0%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }, {
                "type": "scroll",
                "selector": ".div-lineraster",
                "offsetTop": "0%",
                "offsetBot": "0%",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "fade-in",
        "name": "fade in",
        "value": {
            "style": {
                "opacity": 0,
                "x": "0px",
                "y": "60px",
                "z": "0px"
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "10%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 800ms ease 0, transform 1000ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "fade-in-3",
        "name": "fade in 3",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "10%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 2000ms ease 0, transform 1000ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 1000ms ease 0, opacity 2000ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "fade-in-2",
        "name": "fade in 2",
        "value": {
            "style": {
                "opacity": 0,
                "x": "0px",
                "y": "120px",
                "z": "0px"
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "10%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 800ms ease 0, transform 1000ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }, {
                "type": "hover",
                "stepsA": [{
                    "transition": "transform 200 ease 0",
                    "scaleX": 1.04,
                    "scaleY": 1.04,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "transition": "transform 200 ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }]
            }]
        }
    },
    {
        "slug": "fade-in-4",
        "name": "fade in 4",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "stepsA": [{
                    "transition": "transform 200 ease 0",
                    "scaleX": 1.04,
                    "scaleY": 1.04,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "transition": "transform 200 ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }]
            }]
        }
    },
    {
        "slug": "typescroll",
        "name": "typescroll",
        "value": {
            "style": {
                "x": "-100%",
                "y": "0px",
                "z": "0px"
            },
            "triggers": []
        }
    },
    {
        "slug": "back3",
        "name": "back3",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".background3",
                "offsetBot": "20%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }, {
                "type": "scroll",
                "selector": ".div-section2",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "blendin",
        "name": "blendin",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "load",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 800ms ease 0"
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "back4",
        "name": "back4",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".background4",
                "offsetBot": "20%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }, {
                "type": "scroll",
                "selector": ".div-u",
                "offsetBot": "50%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 1000ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 1000ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "icon-blendin",
        "name": "icon blendin",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "stepsA": [{
                    "wait": "300ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "icon-blendin-2",
        "name": "icon blendin 2",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "stepsA": [{
                    "wait": "500ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "icon-blendin-3",
        "name": "icon blendin 3",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "stepsA": [{
                    "wait": "700ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "icon-blendin-4",
        "name": "icon blendin 4",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "stepsA": [{
                    "wait": "900ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "back5",
        "name": "back5",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".div-backgroundimage",
                "offsetBot": "20%",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0, transform 1000ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0, transform 1000ms ease 0",
                    "scaleX": 1.07,
                    "scaleY": 1.07,
                    "scaleZ": 1
                }]
            }, {
                "type": "scroll",
                "selector": ".back-overlay",
                "offsetTop": "0%",
                "offsetBot": "80%",
                "stepsA": [{
                    "opacity": 0.8700000000000001,
                    "transition": "opacity 800ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 800ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "footer",
        "name": "footer",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "stepsA": [{
                    "wait": "500ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 800ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 800ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "arrow-down",
        "name": "arrow down",
        "value": {
            "style": {},
            "triggers": [{
                "type": "load",
                "loopA": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }, {
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "blend-scrolldown",
        "name": "blend scrolldown",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".div-scrolldown",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "line-setion",
        "name": "line setion",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".line-section",
                "offsetBot": "40%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 600ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 600ms ease 0"
                }]
            }]
        }
    },
    {
        "slug": "phone-move",
        "name": "phone move",
        "value": {
            "style": {
                "x": "0px",
                "y": "100%",
                "z": "0px"
            },
            "triggers": [{
                "type": "scroll",
                "stepsA": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "100%",
                    "z": "0px"
                }]
            }]
        }
    },
    {
        "slug": "3d-rotate",
        "name": "3d rotate",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "offsetBot": "30%",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "52px",
                    "z": "0px",
                    "rotateX": "47deg",
                    "rotateY": "0deg",
                    "rotateZ": "0deg"
                }],
                "stepsB": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "0deg"
                }]
            }, {
                "type": "scroll",
                "selector": ".layer2",
                "offsetBot": "30%",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "100px"
                }],
                "stepsB": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "scroll",
                "selector": ".layer3",
                "offsetBot": "30%",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "200px"
                }],
                "stepsB": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "scroll",
                "selector": ".layer4",
                "offsetBot": "30%",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "300px"
                }],
                "stepsB": [{
                    "transition": "transform 1600ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    },
    {
        "slug": "imagezoom",
        "name": "imagezoom",
        "value": {
            "style": {
                "scaleX": 1.07,
                "scaleY": 1.07,
                "scaleZ": 1
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "25%",
                "stepsA": [{
                    "transition": "transform 2000ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "transition": "transform 2000ms ease 0",
                    "scaleX": 1.07,
                    "scaleY": 1.07,
                    "scaleZ": 1
                }]
            }]
        }
    },
    {
        "slug": "covers",
        "name": "covers",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "10%",
                "preserve3d": true,
                "stepsA": [{
                    "wait": "800ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 2000ms ease 0, opacity 2000ms ease 0",
                    "rotateX": "47deg",
                    "rotateY": "0deg",
                    "rotateZ": "33deg"
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "covers-init",
        "name": "covers init",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": []
        }
    },
    {
        "slug": "hide-color-bar",
        "name": "hide color bar",
        "value": {
            "style": {
                "x": "-101%",
                "y": "0px",
                "z": "0px"
            },
            "triggers": []
        }
    },
    {
        "slug": "hl-reveal",
        "name": "hl reveal",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "selector": ".color-bar",
                "descend": true,
                "offsetBot": "20%",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "150ms"
                }, {
                    "transition": "transform 200 ease 0",
                    "x": "101%",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }, {
                "type": "scroll",
                "selector": ".hl-ani",
                "descend": true,
                "offsetBot": "20%",
                "stepsA": [{
                    "wait": "200ms"
                }, {
                    "opacity": 1
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "hide-hl",
        "name": "hide hl",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": []
        }
    },
    {
        "slug": "scale-in",
        "name": "scale in",
        "value": {
            "style": {
                "scaleX": 0.8400000000000001,
                "scaleY": 0.8400000000000001,
                "scaleZ": 1
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "20%",
                "stepsA": [{
                    "transition": "transform 1600ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "scale-in-2",
        "name": "scale in 2",
        "value": {
            "style": {
                "opacity": 0,
                "scaleX": 0.9400000000000001,
                "scaleY": 0.9400000000000001,
                "scaleZ": 1
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "30%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 500ms ease 0, transform 500ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "backimage-zoom",
        "name": "backimage zoom",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".blog-backimage",
                "descend": true,
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 500ms ease 0",
                    "scaleX": 1.07,
                    "scaleY": 1.07,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "transition": "transform 500ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }]
            }]
        }
    },
    {
        "slug": "dropdown",
        "name": "dropdown",
        "value": {
            "style": {},
            "triggers": [{
                "type": "dropdown",
                "selector": ".dropdown-list",
                "siblings": true,
                "stepsA": [{
                    "display": "block",
                    "height": "0px"
                }, {
                    "height": "0px",
                    "transition": "height 300ms ease 0"
                }, {
                    "height": "auto",
                    "transition": "height 300ms ease 0"
                }],
                "stepsB": [{
                    "height": "0px",
                    "transition": "height 200 ease 0"
                }, {
                    "display": "none"
                }]
            }]
        }
    },
    {
        "slug": "award-blendin",
        "name": "award blendin",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "25%",
                "stepsA": [{
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": []
            }, {
                "type": "hover",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    },
    {
        "slug": "award-blendin-2",
        "name": "award blendin 2",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "25%",
                "stepsA": [{
                    "wait": "300ms"
                }, {
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": []
            }, {
                "type": "hover",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    },
    {
        "slug": "award-blendin-3",
        "name": "award blendin 3",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "25%",
                "stepsA": [{
                    "wait": "600ms"
                }, {
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": []
            }, {
                "type": "hover",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    },
    {
        "slug": "award-blendin-4",
        "name": "award blendin 4",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetBot": "25%",
                "stepsA": [{
                    "wait": "900ms"
                }, {
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": []
            }, {
                "type": "hover",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 0.6000000000000001,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc8b|1bf358a5-1921-ed6f-f894-f44d7ebbff7b"
            },
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1508917524264
        },
        "e-2": {
            "id": "e-2",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d"
            },
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508924965534
        },
        "e-3": {
            "id": "e-3",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc8b|5637c59f-31c2-cb1a-97ad-82ea6e61d16c": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d": {
                            "id": "59f0873d0aad1d000108cc8b|c347b819-1c5f-36ab-3751-b53949a180c2"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc8b|c347b819-1c5f-36ab-3751-b53949a180c2"
            },
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508929228751
        },
        "e-4": {
            "id": "e-4",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc8b|5637c59f-31c2-cb1a-97ad-82ea6e61d16c": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d": {
                            "id": "59f0873d0aad1d000108cc8b|9f046a3d-4e5b-d9c6-aef4-6493c0cc6202"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc8b|9f046a3d-4e5b-d9c6-aef4-6493c0cc6202"
            },
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508929590316
        },
        "e-5": {
            "id": "e-5",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc8b|5637c59f-31c2-cb1a-97ad-82ea6e61d16c": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d": {
                            "id": "59f0873d0aad1d000108cc8b|cffc51d5-c4bf-4882-098e-cd41837de038"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc8b|cffc51d5-c4bf-4882-098e-cd41837de038"
            },
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-3-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508929648233
        },
        "e-6": {
            "id": "e-6",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931049224
        },
        "e-7": {
            "id": "e-7",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|89adc3d5-2558-6694-89f8-59ffea61f330"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|89adc3d5-2558-6694-89f8-59ffea61f330"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931402919
        },
        "e-8": {
            "id": "e-8",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|7748b99f-b3ac-f1d9-b7ec-08173f632c5e"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|7748b99f-b3ac-f1d9-b7ec-08173f632c5e"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931495829
        },
        "e-9": {
            "id": "e-9",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|25aa9a7d-6db5-13b9-349e-4638c704ee6a"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|25aa9a7d-6db5-13b9-349e-4638c704ee6a"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931521445
        },
        "e-10": {
            "id": "e-10",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|fd694c6a-dd0b-7131-c39d-8237dffadf47"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|fd694c6a-dd0b-7131-c39d-8237dffadf47"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931546442
        },
        "e-11": {
            "id": "e-11",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|3419a645-a7cc-859d-5e36-958d650cf2ba"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|3419a645-a7cc-859d-5e36-958d650cf2ba"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931566580
        },
        "e-12": {
            "id": "e-12",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|e4971f27-a183-9c45-8639-412907ca5b6d"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|e4971f27-a183-9c45-8639-412907ca5b6d"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931587706
        },
        "e-13": {
            "id": "e-13",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|be2872c2-54b0-7d38-a04d-952d776242a0"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|be2872c2-54b0-7d38-a04d-952d776242a0"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931608678
        },
        "e-14": {
            "id": "e-14",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {
                        "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259": {
                            "selector": ".spot",
                            "selectorGuids": ["33f46c82-d1ce-7557-f624-e0f71139b313"],
                            "limitAffectedElements": "CHILDREN"
                        },
                        "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3": {
                            "id": "59f0873d0aad1d000108cc9c|2a32d042-3cd5-c01f-625f-d4649f35f27c"
                        }
                    },
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc9c|2a32d042-3cd5-c01f-625f-d4649f35f27c"
            },
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-4-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 85,
                "restingState": 50
            }],
            "createdOn": 1508931628231
        },
        "e-15": {
            "id": "e-15",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "id": "59f0873d0aad1d000108cc8b|7a69fb25-c0ee-07bc-dfa4-74da1fca17b7"
            },
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1508935600218
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "New Timed Animation",
            "actionItemGroups": [],
            "createdOn": 1508850633968,
            "useFirstGroupAsInitialState": false
        },
        "a-2": {
            "id": "a-2",
            "title": "hero animation",
            "continuousParameterGroups": [{
                "id": "a-2-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|7b54b6ec-57f4-6f64-107d-061796020f31",
                            "xValue": -50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-2-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|ad55d376-6735-40cb-269b-1a30b7d61fbe",
                            "xValue": 0,
                            "yValue": -50,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 26,
                    "actionItems": [{
                        "id": "a-2-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|7b54b6ec-57f4-6f64-107d-061796020f31",
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 27,
                    "actionItems": [{
                        "id": "a-2-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|ad55d376-6735-40cb-269b-1a30b7d61fbe",
                            "xValue": 0,
                            "yValue": -50,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 51,
                    "actionItems": [{
                        "id": "a-2-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|ad55d376-6735-40cb-269b-1a30b7d61fbe",
                            "xValue": 195,
                            "yValue": -50,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1508917129191
        },
        "a-3": {
            "id": "a-3",
            "title": "3d hover",
            "continuousParameterGroups": [{
                "id": "a-3-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d",
                            "yValue": -5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-3-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|5637c59f-31c2-cb1a-97ad-82ea6e61d16c",
                            "xValue": 97,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-3-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d",
                            "yValue": 5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-3-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|5637c59f-31c2-cb1a-97ad-82ea6e61d16c",
                            "xValue": -63,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-3-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-3-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d",
                            "xValue": 5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-3-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|5637c59f-31c2-cb1a-97ad-82ea6e61d16c",
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-3-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|2259bb9f-aae2-f8f3-a32d-0d9324595d0d",
                            "xValue": -5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-3-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|5637c59f-31c2-cb1a-97ad-82ea6e61d16c",
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1508924974722
        },
        "a-4": {
            "id": "a-4",
            "title": "3d hover projekte",
            "continuousParameterGroups": [{
                "id": "a-4-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-4-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3",
                            "yValue": -5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-4-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259",
                            "xValue": 50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-4-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3",
                            "yValue": 5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-4-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259",
                            "xValue": -50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-4-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-4-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3",
                            "xValue": 5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-4-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259",
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-4-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|685640c4-55f6-5a7e-ac0a-13a4a737e4e3",
                            "xValue": -5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }, {
                        "id": "a-4-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc9c|c1087729-0dfd-0cf5-f45c-fbeb82822259",
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1508931100336
        },
        "a-5": {
            "id": "a-5",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|ce5765ce-0967-db2f-871d-6112fa8c6da8",
                            "xValue": -2000,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": "59f0873d0aad1d000108cc8b|ce5765ce-0967-db2f-871d-6112fa8c6da8",
                            "xValue": -135,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1508935605512
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});