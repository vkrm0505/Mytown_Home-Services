function getLocation() {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(getLocationfromLatlng, showError) : swal("Geolocation is not supported by this browser", "error");
}
function getLocationfromLatlng(a) {
    $("input[name=geo_lat]").val(a.coords.latitude), $("input[name=geo_lng]").val(a.coords.longitude);
    var b = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + a.coords.latitude + "," + a.coords.longitude + "&sensor=true";
    $.get(b, function (a) {
        $("input[name='location']").val(a.results[0].formatted_address), $(".search-location").addClass("hidden"), $(".search-location-mobile").addClass("hidden");
    });
}
function showError(a) {
    switch (a.code) {
        case a.PERMISSION_DENIED:
            swal("Error", "Please enable location option in browser settings", "error");
            break;
        case a.POSITION_UNAVAILABLE:
            swal("Error", "Location information is unavailable", "error");
            break;
        case a.TIMEOUT:
            swal("Error", "The request to fetch location timed out", "error");
            break;
        case a.UNKNOWN_ERROR:
            swal("Error", "An unknown error occurred", "error");
    }
    $(".search-location-mobile").html('<i class="fa fa-location-arrow"></i>'), $("input[name='location']").val("");
}
function checkServiceInCache(a) {
    var b;
    b = "desktop" == a ? $.trim($("#service_check").val()).toLowerCase() : $.trim($("#service_check_mobile").val()).toLowerCase();
    var c = [];
    for (var d in cache) c.push(cache[d]);
    var e = [].concat.apply([], c),
        f = $.map(e, function (a, b) {
            return $.trim(a).toLowerCase();
        });
    return -1 !== f.indexOf(b);
}
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1) || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
})(jQuery),
    +(function (a) {
        "use strict";
        function b() {
            var a = document.createElement("bootstrap"),
                b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
            return !1;
        }
        (a.fn.emulateTransitionEnd = function (b) {
            var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function () {
                c = !0;
            });
            var e = function () {
                c || a(d).trigger(a.support.transition.end);
            };
            return setTimeout(e, b), this;
        }),
            a(function () {
                (a.support.transition = b()),
                    a.support.transition &&
                        (a.event.special.bsTransitionEnd = {
                            bindType: a.support.transition.end,
                            delegateType: a.support.transition.end,
                            handle: function (b) {
                                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
                            },
                        });
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data("bs.alert");
                e || c.data("bs.alert", (e = new d(this))), "string" == typeof b && e[b].call(c);
            });
        }
        var c = '[data-dismiss="alert"]',
            d = function (b) {
                a(b).on("click", c, this.close);
            };
        (d.VERSION = "3.3.6"),
            (d.TRANSITION_DURATION = 150),
            (d.prototype.close = function (b) {
                function c() {
                    g.detach().trigger("closed.bs.alert").remove();
                }
                var e = a(this),
                    f = e.attr("data-target");
                f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
                var g = a(f);
                b && b.preventDefault(),
                    g.length || (g = e.closest(".alert")),
                    g.trigger((b = a.Event("close.bs.alert"))),
                    b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
            });
        var e = a.fn.alert;
        (a.fn.alert = b),
            (a.fn.alert.Constructor = d),
            (a.fn.alert.noConflict = function () {
                return (a.fn.alert = e), this;
            }),
            a(document).on("click.bs.alert.data-api", c, d.prototype.close);
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.button"),
                    f = "object" == typeof b && b;
                e || d.data("bs.button", (e = new c(this, f))), "toggle" == b ? e.toggle() : b && e.setState(b);
            });
        }
        var c = function (b, d) {
            (this.$element = a(b)), (this.options = a.extend({}, c.DEFAULTS, d)), (this.isLoading = !1);
        };
        (c.VERSION = "3.3.6"),
            (c.DEFAULTS = { loadingText: "loading..." }),
            (c.prototype.setState = function (b) {
                var c = "disabled",
                    d = this.$element,
                    e = d.is("input") ? "val" : "html",
                    f = d.data();
                (b += "Text"),
                    null == f.resetText && d.data("resetText", d[e]()),
                    setTimeout(
                        a.proxy(function () {
                            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? ((this.isLoading = !0), d.addClass(c).attr(c, c)) : this.isLoading && ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
                        }, this),
                        0
                    );
            }),
            (c.prototype.toggle = function () {
                var a = !0,
                    b = this.$element.closest('[data-toggle="buttons"]');
                if (b.length) {
                    var c = this.$element.find("input");
                    "radio" == c.prop("type")
                        ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active"))
                        : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")),
                        c.prop("checked", this.$element.hasClass("active")),
                        a && c.trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
            });
        var d = a.fn.button;
        (a.fn.button = b),
            (a.fn.button.Constructor = c),
            (a.fn.button.noConflict = function () {
                return (a.fn.button = d), this;
            }),
            a(document)
                .on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
                    var d = a(c.target);
                    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
                    a(b.target)
                        .closest(".btn")
                        .toggleClass("focus", /^focus(in)?$/.test(b.type));
                });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", (e = new c(this, f))), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
            });
        }
        var c = function (b, c) {
            (this.$element = a(b)),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = c),
                (this.paused = null),
                (this.sliding = null),
                (this.interval = null),
                (this.$active = null),
                (this.$items = null),
                this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 600),
            (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
            (c.prototype.keydown = function (a) {
                if (!/input|textarea/i.test(a.target.tagName)) {
                    switch (a.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    a.preventDefault();
                }
            }),
            (c.prototype.cycle = function (b) {
                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
            }),
            (c.prototype.getItemIndex = function (a) {
                return (this.$items = a.parent().children(".item")), this.$items.index(a || this.$active);
            }),
            (c.prototype.getItemForDirection = function (a, b) {
                var c = this.getItemIndex(b),
                    d = ("prev" == a && 0 === c) || ("next" == a && c == this.$items.length - 1);
                if (d && !this.options.wrap) return b;
                var e = "prev" == a ? -1 : 1,
                    f = (c + e) % this.$items.length;
                return this.$items.eq(f);
            }),
            (c.prototype.to = function (a) {
                var b = this,
                    c = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                return a > this.$items.length - 1 || 0 > a
                    ? void 0
                    : this.sliding
                    ? this.$element.one("slid.bs.carousel", function () {
                          b.to(a);
                      })
                    : c == a
                    ? this.pause().cycle()
                    : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
            }),
            (c.prototype.pause = function (b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (c.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next");
            }),
            (c.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev");
            }),
            (c.prototype.slide = function (b, d) {
                var e = this.$element.find(".item.active"),
                    f = d || this.getItemForDirection(b, e),
                    g = this.interval,
                    h = "next" == b ? "left" : "right",
                    i = this;
                if (f.hasClass("active")) return (this.sliding = !1);
                var j = f[0],
                    k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
                if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
                    if (((this.sliding = !0), g && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                        l && l.addClass("active");
                    }
                    var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });
                    return (
                        a.support.transition && this.$element.hasClass("slide")
                            ? (f.addClass(b),
                              f[0].offsetWidth,
                              e.addClass(h),
                              f.addClass(h),
                              e
                                  .one("bsTransitionEnd", function () {
                                      f.removeClass([b, h].join(" ")).addClass("active"),
                                          e.removeClass(["active", h].join(" ")),
                                          (i.sliding = !1),
                                          setTimeout(function () {
                                              i.$element.trigger(m);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(c.TRANSITION_DURATION))
                            : (e.removeClass("active"), f.addClass("active"), (this.sliding = !1), this.$element.trigger(m)),
                        g && this.cycle(),
                        this
                    );
                }
            });
        var d = a.fn.carousel;
        (a.fn.carousel = b),
            (a.fn.carousel.Constructor = c),
            (a.fn.carousel.noConflict = function () {
                return (a.fn.carousel = d), this;
            });
        var e = function (c) {
            var d,
                e = a(this),
                f = a(e.attr("data-target") || ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()),
                    h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
            a(window).on("load", function () {
                a('[data-ride="carousel"]').each(function () {
                    var c = a(this);
                    b.call(c, c.data());
                });
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            var c,
                d = b.attr("data-target") || ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
            return a(d);
        }
        function c(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data("bs.collapse"),
                    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", (e = new d(this, f))), "string" == typeof b && e[b]();
            });
        }
        var d = function (b, c) {
            (this.$element = a(b)),
                (this.options = a.extend({}, d.DEFAULTS, c)),
                (this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]')),
                (this.transitioning = null),
                this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        (d.VERSION = "3.3.6"),
            (d.TRANSITION_DURATION = 350),
            (d.DEFAULTS = { toggle: !0 }),
            (d.prototype.dimension = function () {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height";
            }),
            (d.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var b,
                        e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(e && e.length && ((b = e.data("bs.collapse")), b && b.transitioning))) {
                        var f = a.Event("show.bs.collapse");
                        if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
                            e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                            var g = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                            var h = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[g](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                            };
                            if (!a.support.transition) return h.call(this);
                            var i = a.camelCase(["scroll", g].join("-"));
                            this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                        }
                    }
                }
            }),
            (d.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var b = a.Event("hide.bs.collapse");
                    if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
                        var c = this.dimension();
                        this.$element[c](this.$element[c]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var e = function () {
                            (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
                    }
                }
            }),
            (d.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (d.prototype.getParent = function () {
                return a(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        a.proxy(function (c, d) {
                            var e = a(d);
                            this.addAriaAndCollapsedClass(b(e), e);
                        }, this)
                    )
                    .end();
            }),
            (d.prototype.addAriaAndCollapsedClass = function (a, b) {
                var c = a.hasClass("in");
                a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
            });
        var e = a.fn.collapse;
        (a.fn.collapse = c),
            (a.fn.collapse.Constructor = d),
            (a.fn.collapse.noConflict = function () {
                return (a.fn.collapse = e), this;
            }),
            a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
                var e = a(this);
                e.attr("data-target") || d.preventDefault();
                var f = b(e),
                    g = f.data("bs.collapse"),
                    h = g ? "toggle" : e.data();
                c.call(f, h);
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            var c = b.attr("data-target");
            c || ((c = b.attr("href")), (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
            var d = c && a(c);
            return d && d.length ? d : b.parent();
        }
        function c(c) {
            (c && 3 === c.which) ||
                (a(e).remove(),
                a(f).each(function () {
                    var d = a(this),
                        e = b(d),
                        f = { relatedTarget: this };
                    e.hasClass("open") &&
                        ((c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target)) ||
                            (e.trigger((c = a.Event("hide.bs.dropdown", f))), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
                }));
        }
        function d(b) {
            return this.each(function () {
                var c = a(this),
                    d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", (d = new g(this))), "string" == typeof b && d[b].call(c);
            });
        }
        var e = ".dropdown-backdrop",
            f = '[data-toggle="dropdown"]',
            g = function (b) {
                a(b).on("click.bs.dropdown", this.toggle);
            };
        (g.VERSION = "3.3.6"),
            (g.prototype.toggle = function (d) {
                var e = a(this);
                if (!e.is(".disabled, :disabled")) {
                    var f = b(e),
                        g = f.hasClass("open");
                    if ((c(), !g)) {
                        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                        var h = { relatedTarget: this };
                        if ((f.trigger((d = a.Event("show.bs.dropdown", h))), d.isDefaultPrevented())) return;
                        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
                    }
                    return !1;
                }
            }),
            (g.prototype.keydown = function (c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                    var d = a(this);
                    if ((c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled"))) {
                        var e = b(d),
                            g = e.hasClass("open");
                        if ((!g && 27 != c.which) || (g && 27 == c.which)) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                        var h = " li:not(.disabled):visible a",
                            i = e.find(".dropdown-menu" + h);
                        if (i.length) {
                            var j = i.index(c.target);
                            38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                        }
                    }
                }
            });
        var h = a.fn.dropdown;
        (a.fn.dropdown = d),
            (a.fn.dropdown.Constructor = g),
            (a.fn.dropdown.noConflict = function () {
                return (a.fn.dropdown = h), this;
            }),
            a(document)
                .on("click.bs.dropdown.data-api", c)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
                    a.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b, d) {
            return this.each(function () {
                var e = a(this),
                    f = e.data("bs.modal"),
                    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", (f = new c(this, g))), "string" == typeof b ? f[b](d) : g.show && f.show(d);
            });
        }
        var c = function (b, c) {
            (this.options = c),
                (this.$body = a(document.body)),
                (this.$element = a(b)),
                (this.$dialog = this.$element.find(".modal-dialog")),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        a.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 300),
            (c.BACKDROP_TRANSITION_DURATION = 150),
            (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (c.prototype.toggle = function (a) {
                return this.isShown ? this.hide() : this.show(a);
            }),
            (c.prototype.show = function (b) {
                var d = this,
                    e = a.Event("show.bs.modal", { relatedTarget: b });
                this.$element.trigger(e),
                    this.isShown ||
                        e.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
                        this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                            });
                        }),
                        this.backdrop(function () {
                            var e = a.support.transition && d.$element.hasClass("fade");
                            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                            var f = a.Event("shown.bs.modal", { relatedTarget: b });
                            e
                                ? d.$dialog
                                      .one("bsTransitionEnd", function () {
                                          d.$element.trigger("focus").trigger(f);
                                      })
                                      .emulateTransitionEnd(c.TRANSITION_DURATION)
                                : d.$element.trigger("focus").trigger(f);
                        }));
            }),
            (c.prototype.hide = function (b) {
                b && b.preventDefault(),
                    (b = a.Event("hide.bs.modal")),
                    this.$element.trigger(b),
                    this.isShown &&
                        !b.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        a(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                        this.$dialog.off("mousedown.dismiss.bs.modal"),
                        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
            }),
            (c.prototype.enforceFocus = function () {
                a(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        a.proxy(function (a) {
                            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (c.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keydown.dismiss.bs.modal",
                          a.proxy(function (a) {
                              27 == a.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }),
            (c.prototype.resize = function () {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
            }),
            (c.prototype.hideModal = function () {
                var a = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
                    });
            }),
            (c.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (c.prototype.backdrop = function (b) {
                var d = this,
                    e = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var f = a.support.transition && e;
                    if (
                        ((this.$backdrop = a(document.createElement("div"))
                            .addClass("modal-backdrop " + e)
                            .appendTo(this.$body)),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            a.proxy(function (a) {
                                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                            }, this)
                        ),
                        f && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !b)
                    )
                        return;
                    f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var g = function () {
                        d.removeBackdrop(), b && b();
                    };
                    a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
                } else b && b();
            }),
            (c.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (c.prototype.adjustDialog = function () {
                var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
            }),
            (c.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (c.prototype.checkScrollbar = function () {
                var a = window.innerWidth;
                if (!a) {
                    var b = document.documentElement.getBoundingClientRect();
                    a = b.right - Math.abs(b.left);
                }
                (this.bodyIsOverflowing = document.body.clientWidth < a), (this.scrollbarWidth = this.measureScrollbar());
            }),
            (c.prototype.setScrollbar = function () {
                var a = parseInt(this.$body.css("padding-right") || 0, 10);
                (this.originalBodyPad = document.body.style.paddingRight || ""), this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
            }),
            (c.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }),
            (c.prototype.measureScrollbar = function () {
                var a = document.createElement("div");
                (a.className = "modal-scrollbar-measure"), this.$body.append(a);
                var b = a.offsetWidth - a.clientWidth;
                return this.$body[0].removeChild(a), b;
            });
        var d = a.fn.modal;
        (a.fn.modal = b),
            (a.fn.modal.Constructor = c),
            (a.fn.modal.noConflict = function () {
                return (a.fn.modal = d), this;
            }),
            a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
                var d = a(this),
                    e = d.attr("href"),
                    f = a(d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))),
                    g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
                d.is("a") && c.preventDefault(),
                    f.one("show.bs.modal", function (a) {
                        a.isDefaultPrevented() ||
                            f.one("hidden.bs.modal", function () {
                                d.is(":visible") && d.trigger("focus");
                            });
                    }),
                    b.call(f, g, this);
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof b && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", (e = new c(this, f))), "string" == typeof b && e[b]());
            });
        }
        var c = function (a, b) {
            (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init("tooltip", a, b);
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 150),
            (c.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
            }),
            (c.prototype.init = function (b, c, d) {
                if (
                    ((this.enabled = !0),
                    (this.type = b),
                    (this.$element = a(c)),
                    (this.options = this.getOptions(d)),
                    (this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport)),
                    (this.inState = { click: !1, hover: !1, focus: !1 }),
                    this.$element[0] instanceof document.constructor && !this.options.selector)
                )
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
                    var g = e[f];
                    if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                    else if ("manual" != g) {
                        var h = "hover" == g ? "mouseenter" : "focusin",
                            i = "hover" == g ? "mouseleave" : "focusout";
                        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = a.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }),
            (c.prototype.getOptions = function (b) {
                return (b = a.extend({}, this.getDefaults(), this.$element.data(), b)), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
            }),
            (c.prototype.getDelegateOptions = function () {
                var b = {},
                    c = this.getDefaults();
                return (
                    this._options &&
                        a.each(this._options, function (a, d) {
                            c[a] != d && (b[a] = d);
                        }),
                    b
                );
            }),
            (c.prototype.enter = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return (
                    c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c)),
                    b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
                    c.tip().hasClass("in") || "in" == c.hoverState
                        ? void (c.hoverState = "in")
                        : (clearTimeout(c.timeout),
                          (c.hoverState = "in"),
                          c.options.delay && c.options.delay.show
                              ? void (c.timeout = setTimeout(function () {
                                    "in" == c.hoverState && c.show();
                                }, c.options.delay.show))
                              : c.show())
                );
            }),
            (c.prototype.isInStateTrue = function () {
                for (var a in this.inState) if (this.inState[a]) return !0;
                return !1;
            }),
            (c.prototype.leave = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return (
                    c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c)),
                    b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
                    c.isInStateTrue()
                        ? void 0
                        : (clearTimeout(c.timeout),
                          (c.hoverState = "out"),
                          c.options.delay && c.options.delay.hide
                              ? void (c.timeout = setTimeout(function () {
                                    "out" == c.hoverState && c.hide();
                                }, c.options.delay.hide))
                              : c.hide())
                );
            }),
            (c.prototype.show = function () {
                var b = a.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(b);
                    var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (b.isDefaultPrevented() || !d) return;
                    var e = this,
                        f = this.tip(),
                        g = this.getUID(this.type);
                    this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                    var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                        i = /\s?auto?\s?/i,
                        j = i.test(h);
                    j && (h = h.replace(i, "") || "top"),
                        f
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(h)
                            .data("bs." + this.type, this),
                        this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var k = this.getPosition(),
                        l = f[0].offsetWidth,
                        m = f[0].offsetHeight;
                    if (j) {
                        var n = h,
                            o = this.getPosition(this.$viewport);
                        (h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h),
                            f.removeClass(n).addClass(h);
                    }
                    var p = this.getCalculatedOffset(h, k, l, m);
                    this.applyPlacement(p, h);
                    var q = function () {
                        var a = e.hoverState;
                        e.$element.trigger("shown.bs." + e.type), (e.hoverState = null), "out" == a && e.leave(e);
                    };
                    a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
                }
            }),
            (c.prototype.applyPlacement = function (b, c) {
                var d = this.tip(),
                    e = d[0].offsetWidth,
                    f = d[0].offsetHeight,
                    g = parseInt(d.css("margin-top"), 10),
                    h = parseInt(d.css("margin-left"), 10);
                isNaN(g) && (g = 0),
                    isNaN(h) && (h = 0),
                    (b.top += g),
                    (b.left += h),
                    a.offset.setOffset(
                        d[0],
                        a.extend(
                            {
                                using: function (a) {
                                    d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                                },
                            },
                            b
                        ),
                        0
                    ),
                    d.addClass("in");
                var i = d[0].offsetWidth,
                    j = d[0].offsetHeight;
                "top" == c && j != f && (b.top = b.top + f - j);
                var k = this.getViewportAdjustedDelta(c, b, i, j);
                k.left ? (b.left += k.left) : (b.top += k.top);
                var l = /top|bottom/.test(c),
                    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                    n = l ? "offsetWidth" : "offsetHeight";
                d.offset(b), this.replaceArrow(m, d[0][n], l);
            }),
            (c.prototype.replaceArrow = function (a, b, c) {
                this.arrow()
                    .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
                    .css(c ? "top" : "left", "");
            }),
            (c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
            }),
            (c.prototype.hide = function (b) {
                function d() {
                    "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
                }
                var e = this,
                    f = a(this.$tip),
                    g = a.Event("hide.bs." + this.type);
                return (
                    this.$element.trigger(g),
                    g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), (this.hoverState = null), this)
                );
            }),
            (c.prototype.fixTitle = function () {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
            }),
            (c.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (c.prototype.getPosition = function (b) {
                b = b || this.$element;
                var c = b[0],
                    d = "BODY" == c.tagName,
                    e = c.getBoundingClientRect();
                null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));
                var f = d ? { top: 0, left: 0 } : b.offset(),
                    g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
                    h = d ? { width: a(window).width(), height: a(window).height() } : null;
                return a.extend({}, e, g, h, f);
            }),
            (c.prototype.getCalculatedOffset = function (a, b, c, d) {
                return "bottom" == a
                    ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
                    : "top" == a
                    ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
                    : "left" == a
                    ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
                    : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
            }),
            (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                var e = { top: 0, left: 0 };
                if (!this.$viewport) return e;
                var f = (this.options.viewport && this.options.viewport.padding) || 0,
                    g = this.getPosition(this.$viewport);
                if (/right|left/.test(a)) {
                    var h = b.top - f - g.scroll,
                        i = b.top + f - g.scroll + d;
                    h < g.top ? (e.top = g.top - h) : i > g.top + g.height && (e.top = g.top + g.height - i);
                } else {
                    var j = b.left - f,
                        k = b.left + f + c;
                    j < g.left ? (e.left = g.left - j) : k > g.right && (e.left = g.left + g.width - k);
                }
                return e;
            }),
            (c.prototype.getTitle = function () {
                var a,
                    b = this.$element,
                    c = this.options;
                return (a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
            }),
            (c.prototype.getUID = function (a) {
                do a += ~~(1e6 * Math.random());
                while (document.getElementById(a));
                return a;
            }),
            (c.prototype.tip = function () {
                if (!this.$tip && ((this.$tip = a(this.options.template)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip;
            }),
            (c.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (c.prototype.enable = function () {
                this.enabled = !0;
            }),
            (c.prototype.disable = function () {
                this.enabled = !1;
            }),
            (c.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (c.prototype.toggle = function (b) {
                var c = this;
                b && ((c = a(b.currentTarget).data("bs." + this.type)), c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c))),
                    b ? ((c.inState.click = !c.inState.click), c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
            }),
            (c.prototype.destroy = function () {
                var a = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), (a.$tip = null), (a.$arrow = null), (a.$viewport = null);
                    });
            });
        var d = a.fn.tooltip;
        (a.fn.tooltip = b),
            (a.fn.tooltip.Constructor = c),
            (a.fn.tooltip.noConflict = function () {
                return (a.fn.tooltip = d), this;
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof b && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", (e = new c(this, f))), "string" == typeof b && e[b]());
            });
        }
        var c = function (a, b) {
            this.init("popover", a, b);
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (c.VERSION = "3.3.6"),
            (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
            (c.prototype.constructor = c),
            (c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }),
            (c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b),
                    a.find(".popover-content").children().detach().end()[this.options.html ? ("string" == typeof c ? "html" : "append") : "text"](c),
                    a.removeClass("fade top bottom left right in"),
                    a.find(".popover-title").html() || a.find(".popover-title").hide();
            }),
            (c.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (c.prototype.getContent = function () {
                var a = this.$element,
                    b = this.options;
                return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
            }),
            (c.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            });
        var d = a.fn.popover;
        (a.fn.popover = b),
            (a.fn.popover.Constructor = c),
            (a.fn.popover.noConflict = function () {
                return (a.fn.popover = d), this;
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(c, d) {
            (this.$body = a(document.body)),
                (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
                (this.options = a.extend({}, b.DEFAULTS, d)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
                this.refresh(),
                this.process();
        }
        function c(c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", (e = new b(this, f))), "string" == typeof c && e[c]();
            });
        }
        (b.VERSION = "3.3.6"),
            (b.DEFAULTS = { offset: 10 }),
            (b.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (b.prototype.refresh = function () {
                var b = this,
                    c = "offset",
                    d = 0;
                (this.offsets = []),
                    (this.targets = []),
                    (this.scrollHeight = this.getScrollHeight()),
                    a.isWindow(this.$scrollElement[0]) || ((c = "position"), (d = this.$scrollElement.scrollTop())),
                    this.$body
                        .find(this.selector)
                        .map(function () {
                            var b = a(this),
                                e = b.data("target") || b.attr("href"),
                                f = /^#./.test(e) && a(e);
                            return (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) || null;
                        })
                        .sort(function (a, b) {
                            return a[0] - b[0];
                        })
                        .each(function () {
                            b.offsets.push(this[0]), b.targets.push(this[1]);
                        });
            }),
            (b.prototype.process = function () {
                var a,
                    b = this.$scrollElement.scrollTop() + this.options.offset,
                    c = this.getScrollHeight(),
                    d = this.options.offset + c - this.$scrollElement.height(),
                    e = this.offsets,
                    f = this.targets,
                    g = this.activeTarget;
                if ((this.scrollHeight != c && this.refresh(), b >= d)) return g != (a = f[f.length - 1]) && this.activate(a);
                if (g && b < e[0]) return (this.activeTarget = null), this.clear();
                for (a = e.length; a--; ) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
            }),
            (b.prototype.activate = function (b) {
                (this.activeTarget = b), this.clear();
                var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                    d = a(c).parents("li").addClass("active");
                d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
            }),
            (b.prototype.clear = function () {
                a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            });
        var d = a.fn.scrollspy;
        (a.fn.scrollspy = c),
            (a.fn.scrollspy.Constructor = b),
            (a.fn.scrollspy.noConflict = function () {
                return (a.fn.scrollspy = d), this;
            }),
            a(window).on("load.bs.scrollspy.data-api", function () {
                a('[data-spy="scroll"]').each(function () {
                    var b = a(this);
                    c.call(b, b.data());
                });
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tab");
                e || d.data("bs.tab", (e = new c(this))), "string" == typeof b && e[b]();
            });
        }
        var c = function (b) {
            this.element = a(b);
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 150),
            (c.prototype.show = function () {
                var b = this.element,
                    c = b.closest("ul:not(.dropdown-menu)"),
                    d = b.data("target");
                if ((d || ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))), !b.parent("li").hasClass("active"))) {
                    var e = c.find(".active:last a"),
                        f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                        g = a.Event("show.bs.tab", { relatedTarget: e[0] });
                    if ((e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented())) {
                        var h = a(d);
                        this.activate(b.closest("li"), c),
                            this.activate(h, h.parent(), function () {
                                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                            });
                    }
                }
            }),
            (c.prototype.activate = function (b, d, e) {
                function f() {
                    g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
                        b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        e && e();
                }
                var g = d.find("> .active"),
                    h = e && a.support.transition && ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
                g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
            });
        var d = a.fn.tab;
        (a.fn.tab = b),
            (a.fn.tab.Constructor = c),
            (a.fn.tab.noConflict = function () {
                return (a.fn.tab = d), this;
            });
        var e = function (c) {
            c.preventDefault(), b.call(a(this), "show");
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof b && b;
                e || d.data("bs.affix", (e = new c(this, f))), "string" == typeof b && e[b]();
            });
        }
        var c = function (b, d) {
            (this.options = a.extend({}, c.DEFAULTS, d)),
                (this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = a(b)),
                (this.affixed = null),
                (this.unpin = null),
                (this.pinnedOffset = null),
                this.checkPosition();
        };
        (c.VERSION = "3.3.6"),
            (c.RESET = "affix affix-top affix-bottom"),
            (c.DEFAULTS = { offset: 0, target: window }),
            (c.prototype.getState = function (a, b, c, d) {
                var e = this.$target.scrollTop(),
                    f = this.$element.offset(),
                    g = this.$target.height();
                if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
                if ("bottom" == this.affixed) return null != c ? (e + this.unpin <= f.top ? !1 : "bottom") : a - d >= e + g ? !1 : "bottom";
                var h = null == this.affixed,
                    i = h ? e : f.top,
                    j = h ? g : b;
                return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
            }),
            (c.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(c.RESET).addClass("affix");
                var a = this.$target.scrollTop(),
                    b = this.$element.offset();
                return (this.pinnedOffset = b.top - a);
            }),
            (c.prototype.checkPositionWithEventLoop = function () {
                setTimeout(a.proxy(this.checkPosition, this), 1);
            }),
            (c.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var b = this.$element.height(),
                        d = this.options.offset,
                        e = d.top,
                        f = d.bottom,
                        g = Math.max(a(document).height(), a(document.body).height());
                    "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                    var h = this.getState(g, b, e, f);
                    if (this.affixed != h) {
                        null != this.unpin && this.$element.css("top", "");
                        var i = "affix" + (h ? "-" + h : ""),
                            j = a.Event(i + ".bs.affix");
                        if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
                        (this.affixed = h),
                            (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
                            this.$element
                                .removeClass(c.RESET)
                                .addClass(i)
                                .trigger(i.replace("affix", "affixed") + ".bs.affix");
                    }
                    "bottom" == h && this.$element.offset({ top: g - b - f });
                }
            });
        var d = a.fn.affix;
        (a.fn.affix = b),
            (a.fn.affix.Constructor = c),
            (a.fn.affix.noConflict = function () {
                return (a.fn.affix = d), this;
            }),
            a(window).on("load", function () {
                a('[data-spy="affix"]').each(function () {
                    var c = a(this),
                        d = c.data();
                    (d.offset = d.offset || {}), null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
                });
            });
    })(jQuery),
    (function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
    })(function (a) {
        function b(b, d) {
            var e,
                f,
                g,
                h = b.nodeName.toLowerCase();
            return "area" === h
                ? ((e = b.parentNode), (f = e.name), b.href && f && "map" === e.nodeName.toLowerCase() ? ((g = a("img[usemap='#" + f + "']")[0]), !!g && c(g)) : !1)
                : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b);
        }
        function c(b) {
            return (
                a.expr.filters.visible(b) &&
                !a(b)
                    .parents()
                    .addBack()
                    .filter(function () {
                        return "hidden" === a.css(this, "visibility");
                    }).length
            );
        }
        (a.ui = a.ui || {}),
            a.extend(a.ui, {
                version: "1.11.4",
                keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 },
            }),
            a.fn.extend({
                scrollParent: function (b) {
                    var c = this.css("position"),
                        d = "absolute" === c,
                        e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                        f = this.parents()
                            .filter(function () {
                                var b = a(this);
                                return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"));
                            })
                            .eq(0);
                    return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document);
                },
                uniqueId: (function () {
                    var a = 0;
                    return function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++a);
                        });
                    };
                })(),
                removeUniqueId: function () {
                    return this.each(function () {
                        /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
                    });
                },
            }),
            a.extend(a.expr[":"], {
                data: a.expr.createPseudo
                    ? a.expr.createPseudo(function (b) {
                          return function (c) {
                              return !!a.data(c, b);
                          };
                      })
                    : function (b, c, d) {
                          return !!a.data(b, d[3]);
                      },
                focusable: function (c) {
                    return b(c, !isNaN(a.attr(c, "tabindex")));
                },
                tabbable: function (c) {
                    var d = a.attr(c, "tabindex"),
                        e = isNaN(d);
                    return (e || d >= 0) && b(c, !e);
                },
            }),
            a("<a>").outerWidth(1).jquery ||
                a.each(["Width", "Height"], function (b, c) {
                    function d(b, c, d, f) {
                        return (
                            a.each(e, function () {
                                (c -= parseFloat(a.css(b, "padding" + this)) || 0), d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
                            }),
                            c
                        );
                    }
                    var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                        f = c.toLowerCase(),
                        g = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight };
                    (a.fn["inner" + c] = function (b) {
                        return void 0 === b
                            ? g["inner" + c].call(this)
                            : this.each(function () {
                                  a(this).css(f, d(this, b) + "px");
                              });
                    }),
                        (a.fn["outer" + c] = function (b, e) {
                            return "number" != typeof b
                                ? g["outer" + c].call(this, b)
                                : this.each(function () {
                                      a(this).css(f, d(this, b, !0, e) + "px");
                                  });
                        });
                }),
            a.fn.addBack ||
                (a.fn.addBack = function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
                }),
            a("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
                (a.fn.removeData = (function (b) {
                    return function (c) {
                        return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
                    };
                })(a.fn.removeData)),
            (a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
            a.fn.extend({
                focus: (function (b) {
                    return function (c, d) {
                        return "number" == typeof c
                            ? this.each(function () {
                                  var b = this;
                                  setTimeout(function () {
                                      a(b).focus(), d && d.call(b);
                                  }, c);
                              })
                            : b.apply(this, arguments);
                    };
                })(a.fn.focus),
                disableSelection: (function () {
                    var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.bind(a + ".ui-disableSelection", function (a) {
                            a.preventDefault();
                        });
                    };
                })(),
                enableSelection: function () {
                    return this.unbind(".ui-disableSelection");
                },
                zIndex: function (b) {
                    if (void 0 !== b) return this.css("zIndex", b);
                    if (this.length)
                        for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
                            if (((c = e.css("position")), ("absolute" === c || "relative" === c || "fixed" === c) && ((d = parseInt(e.css("zIndex"), 10)), !isNaN(d) && 0 !== d))) return d;
                            e = e.parent();
                        }
                    return 0;
                },
            }),
            (a.ui.plugin = {
                add: function (b, c, d) {
                    var e,
                        f = a.ui[b].prototype;
                    for (e in d) (f.plugins[e] = f.plugins[e] || []), f.plugins[e].push([c, d[e]]);
                },
                call: function (a, b, c, d) {
                    var e,
                        f = a.plugins[b];
                    if (f && (d || (a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))) for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c);
                },
            });
        var d = 0,
            e = Array.prototype.slice;
        (a.cleanData = (function (b) {
            return function (c) {
                var d, e, f;
                for (f = 0; null != (e = c[f]); f++)
                    try {
                        (d = a._data(e, "events")), d && d.remove && a(e).triggerHandler("remove");
                    } catch (g) {}
                b(c);
            };
        })(a.cleanData)),
            (a.widget = function (b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i = {},
                    j = b.split(".")[0];
                return (
                    (b = b.split(".")[1]),
                    (e = j + "-" + b),
                    d || ((d = c), (c = a.Widget)),
                    (a.expr[":"][e.toLowerCase()] = function (b) {
                        return !!a.data(b, e);
                    }),
                    (a[j] = a[j] || {}),
                    (f = a[j][b]),
                    (g = a[j][b] = function (a, b) {
                        return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b);
                    }),
                    a.extend(g, f, { version: d.version, _proto: a.extend({}, d), _childConstructors: [] }),
                    (h = new c()),
                    (h.options = a.widget.extend({}, h.options)),
                    a.each(d, function (b, d) {
                        return a.isFunction(d)
                            ? void (i[b] = (function () {
                                  var a = function () {
                                          return c.prototype[b].apply(this, arguments);
                                      },
                                      e = function (a) {
                                          return c.prototype[b].apply(this, a);
                                      };
                                  return function () {
                                      var b,
                                          c = this._super,
                                          f = this._superApply;
                                      return (this._super = a), (this._superApply = e), (b = d.apply(this, arguments)), (this._super = c), (this._superApply = f), b;
                                  };
                              })())
                            : void (i[b] = d);
                    }),
                    (g.prototype = a.widget.extend(h, { widgetEventPrefix: f ? h.widgetEventPrefix || b : b }, i, { constructor: g, namespace: j, widgetName: b, widgetFullName: e })),
                    f
                        ? (a.each(f._childConstructors, function (b, c) {
                              var d = c.prototype;
                              a.widget(d.namespace + "." + d.widgetName, g, c._proto);
                          }),
                          delete f._childConstructors)
                        : c._childConstructors.push(g),
                    a.widget.bridge(b, g),
                    g
                );
            }),
            (a.widget.extend = function (b) {
                for (var c, d, f = e.call(arguments, 1), g = 0, h = f.length; h > g; g++)
                    for (c in f[g]) (d = f[g][c]), f[g].hasOwnProperty(c) && void 0 !== d && (a.isPlainObject(d) ? (b[c] = a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d)) : (b[c] = d));
                return b;
            }),
            (a.widget.bridge = function (b, c) {
                var d = c.prototype.widgetFullName || b;
                a.fn[b] = function (f) {
                    var g = "string" == typeof f,
                        h = e.call(arguments, 1),
                        i = this;
                    return (
                        g
                            ? this.each(function () {
                                  var c,
                                      e = a.data(this, d);
                                  return "instance" === f
                                      ? ((i = e), !1)
                                      : e
                                      ? a.isFunction(e[f]) && "_" !== f.charAt(0)
                                          ? ((c = e[f].apply(e, h)), c !== e && void 0 !== c ? ((i = c && c.jquery ? i.pushStack(c.get()) : c), !1) : void 0)
                                          : a.error("no such method '" + f + "' for " + b + " widget instance")
                                      : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'");
                              })
                            : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))),
                              this.each(function () {
                                  var b = a.data(this, d);
                                  b ? (b.option(f || {}), b._init && b._init()) : a.data(this, d, new c(f, this));
                              })),
                        i
                    );
                };
            }),
            (a.Widget = function () {}),
            (a.Widget._childConstructors = []),
            (a.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: { disabled: !1, create: null },
                _createWidget: function (b, c) {
                    (c = a(c || this.defaultElement || this)[0]),
                        (this.element = a(c)),
                        (this.uuid = d++),
                        (this.eventNamespace = "." + this.widgetName + this.uuid),
                        (this.bindings = a()),
                        (this.hoverable = a()),
                        (this.focusable = a()),
                        c !== this &&
                            (a.data(c, this.widgetFullName, this),
                            this._on(!0, this.element, {
                                remove: function (a) {
                                    a.target === c && this.destroy();
                                },
                            }),
                            (this.document = a(c.style ? c.ownerDocument : c.document || c)),
                            (this.window = a(this.document[0].defaultView || this.document[0].parentWindow))),
                        (this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b)),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init();
                },
                _getCreateOptions: a.noop,
                _getCreateEventData: a.noop,
                _create: a.noop,
                _init: a.noop,
                destroy: function () {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),
                        this.widget()
                            .unbind(this.eventNamespace)
                            .removeAttr("aria-disabled")
                            .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus");
                },
                _destroy: a.noop,
                widget: function () {
                    return this.element;
                },
                option: function (b, c) {
                    var d,
                        e,
                        f,
                        g = b;
                    if (0 === arguments.length) return a.widget.extend({}, this.options);
                    if ("string" == typeof b)
                        if (((g = {}), (d = b.split(".")), (b = d.shift()), d.length)) {
                            for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) (e[d[f]] = e[d[f]] || {}), (e = e[d[f]]);
                            if (((b = d.pop()), 1 === arguments.length)) return void 0 === e[b] ? null : e[b];
                            e[b] = c;
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                            g[b] = c;
                        }
                    return this._setOptions(g), this;
                },
                _setOptions: function (a) {
                    var b;
                    for (b in a) this._setOption(b, a[b]);
                    return this;
                },
                _setOption: function (a, b) {
                    return (
                        (this.options[a] = b), "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                    );
                },
                enable: function () {
                    return this._setOptions({ disabled: !1 });
                },
                disable: function () {
                    return this._setOptions({ disabled: !0 });
                },
                _on: function (b, c, d) {
                    var e,
                        f = this;
                    "boolean" != typeof b && ((d = c), (c = b), (b = !1)),
                        d ? ((c = e = a(c)), (this.bindings = this.bindings.add(c))) : ((d = c), (c = this.element), (e = this.widget())),
                        a.each(d, function (d, g) {
                            function h() {
                                return b || (f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0;
                            }
                            "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                            var i = d.match(/^([\w:-]*)\s*(.*)$/),
                                j = i[1] + f.eventNamespace,
                                k = i[2];
                            k ? e.delegate(k, j, h) : c.bind(j, h);
                        });
                },
                _off: function (b, c) {
                    (c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                        b.unbind(c).undelegate(c),
                        (this.bindings = a(this.bindings.not(b).get())),
                        (this.focusable = a(this.focusable.not(b).get())),
                        (this.hoverable = a(this.hoverable.not(b).get()));
                },
                _delay: function (a, b) {
                    function c() {
                        return ("string" == typeof a ? d[a] : a).apply(d, arguments);
                    }
                    var d = this;
                    return setTimeout(c, b || 0);
                },
                _hoverable: function (b) {
                    (this.hoverable = this.hoverable.add(b)),
                        this._on(b, {
                            mouseenter: function (b) {
                                a(b.currentTarget).addClass("ui-state-hover");
                            },
                            mouseleave: function (b) {
                                a(b.currentTarget).removeClass("ui-state-hover");
                            },
                        });
                },
                _focusable: function (b) {
                    (this.focusable = this.focusable.add(b)),
                        this._on(b, {
                            focusin: function (b) {
                                a(b.currentTarget).addClass("ui-state-focus");
                            },
                            focusout: function (b) {
                                a(b.currentTarget).removeClass("ui-state-focus");
                            },
                        });
                },
                _trigger: function (b, c, d) {
                    var e,
                        f,
                        g = this.options[b];
                    if (((d = d || {}), (c = a.Event(c)), (c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase()), (c.target = this.element[0]), (f = c.originalEvent))) for (e in f) e in c || (c[e] = f[e]);
                    return this.element.trigger(c, d), !((a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1) || c.isDefaultPrevented());
                },
            }),
            a.each({ show: "fadeIn", hide: "fadeOut" }, function (b, c) {
                a.Widget.prototype["_" + b] = function (d, e, f) {
                    "string" == typeof e && (e = { effect: e });
                    var g,
                        h = e ? (e === !0 || "number" == typeof e ? c : e.effect || c) : b;
                    (e = e || {}),
                        "number" == typeof e && (e = { duration: e }),
                        (g = !a.isEmptyObject(e)),
                        (e.complete = f),
                        e.delay && d.delay(e.delay),
                        g && a.effects && a.effects.effect[h]
                            ? d[b](e)
                            : h !== b && d[h]
                            ? d[h](e.duration, e.easing, f)
                            : d.queue(function (c) {
                                  a(this)[b](), f && f.call(d[0]), c();
                              });
                };
            });
        var f = (a.widget, !1);
        a(document).mouseup(function () {
            f = !1;
        });
        a.widget("ui.mouse", {
            version: "1.11.4",
            options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
            _mouseInit: function () {
                var b = this;
                this.element
                    .bind("mousedown." + this.widgetName, function (a) {
                        return b._mouseDown(a);
                    })
                    .bind("click." + this.widgetName, function (c) {
                        return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0;
                    }),
                    (this.started = !1);
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            },
            _mouseDown: function (b) {
                if (!f) {
                    (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b);
                    var c = this,
                        d = 1 === b.which,
                        e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                    return d && !e && this._mouseCapture(b)
                        ? ((this.mouseDelayMet = !this.options.delay),
                          this.mouseDelayMet ||
                              (this._mouseDelayTimer = setTimeout(function () {
                                  c.mouseDelayMet = !0;
                              }, this.options.delay)),
                          this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = this._mouseStart(b) !== !1), !this._mouseStarted)
                              ? (b.preventDefault(), !0)
                              : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"),
                                (this._mouseMoveDelegate = function (a) {
                                    return c._mouseMove(a);
                                }),
                                (this._mouseUpDelegate = function (a) {
                                    return c._mouseUp(a);
                                }),
                                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                                b.preventDefault(),
                                (f = !0),
                                !0))
                        : !0;
                }
            },
            _mouseMove: function (b) {
                if (this._mouseMoved) {
                    if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
                    if (!b.which) return this._mouseUp(b);
                }
                return (
                    (b.which || b.button) && (this._mouseMoved = !0),
                    this._mouseStarted
                        ? (this._mouseDrag(b), b.preventDefault())
                        : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
                );
            },
            _mouseUp: function (b) {
                return (
                    this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && ((this._mouseStarted = !1), b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)),
                    (f = !1),
                    !1
                );
            },
            _mouseDistanceMet: function (a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet;
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0;
            },
        });
        !(function () {
            function b(a, b, c) {
                return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)];
            }
            function c(b, c) {
                return parseInt(a.css(b, c), 10) || 0;
            }
            function d(b) {
                var c = b[0];
                return 9 === c.nodeType
                    ? { width: b.width(), height: b.height(), offset: { top: 0, left: 0 } }
                    : a.isWindow(c)
                    ? { width: b.width(), height: b.height(), offset: { top: b.scrollTop(), left: b.scrollLeft() } }
                    : c.preventDefault
                    ? { width: 0, height: 0, offset: { top: c.pageY, left: c.pageX } }
                    : { width: b.outerWidth(), height: b.outerHeight(), offset: b.offset() };
            }
            a.ui = a.ui || {};
            var e,
                f,
                g = Math.max,
                h = Math.abs,
                i = Math.round,
                j = /left|center|right/,
                k = /top|center|bottom/,
                l = /[\+\-]\d+(\.[\d]+)?%?/,
                m = /^\w+/,
                n = /%$/,
                o = a.fn.position;
            (a.position = {
                scrollbarWidth: function () {
                    if (void 0 !== e) return e;
                    var b,
                        c,
                        d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        f = d.children()[0];
                    return a("body").append(d), (b = f.offsetWidth), d.css("overflow", "scroll"), (c = f.offsetWidth), b === c && (c = d[0].clientWidth), d.remove(), (e = b - c);
                },
                getScrollInfo: function (b) {
                    var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                        d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                        e = "scroll" === c || ("auto" === c && b.width < b.element[0].scrollWidth),
                        f = "scroll" === d || ("auto" === d && b.height < b.element[0].scrollHeight);
                    return { width: f ? a.position.scrollbarWidth() : 0, height: e ? a.position.scrollbarWidth() : 0 };
                },
                getWithinInfo: function (b) {
                    var c = a(b || window),
                        d = a.isWindow(c[0]),
                        e = !!c[0] && 9 === c[0].nodeType;
                    return {
                        element: c,
                        isWindow: d,
                        isDocument: e,
                        offset: c.offset() || { left: 0, top: 0 },
                        scrollLeft: c.scrollLeft(),
                        scrollTop: c.scrollTop(),
                        width: d || e ? c.width() : c.outerWidth(),
                        height: d || e ? c.height() : c.outerHeight(),
                    };
                },
            }),
                (a.fn.position = function (e) {
                    if (!e || !e.of) return o.apply(this, arguments);
                    e = a.extend({}, e);
                    var n,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u = a(e.of),
                        v = a.position.getWithinInfo(e.within),
                        w = a.position.getScrollInfo(v),
                        x = (e.collision || "flip").split(" "),
                        y = {};
                    return (
                        (t = d(u)),
                        u[0].preventDefault && (e.at = "left top"),
                        (p = t.width),
                        (q = t.height),
                        (r = t.offset),
                        (s = a.extend({}, r)),
                        a.each(["my", "at"], function () {
                            var a,
                                b,
                                c = (e[this] || "").split(" ");
                            1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]),
                                (c[0] = j.test(c[0]) ? c[0] : "center"),
                                (c[1] = k.test(c[1]) ? c[1] : "center"),
                                (a = l.exec(c[0])),
                                (b = l.exec(c[1])),
                                (y[this] = [a ? a[0] : 0, b ? b[0] : 0]),
                                (e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]);
                        }),
                        1 === x.length && (x[1] = x[0]),
                        "right" === e.at[0] ? (s.left += p) : "center" === e.at[0] && (s.left += p / 2),
                        "bottom" === e.at[1] ? (s.top += q) : "center" === e.at[1] && (s.top += q / 2),
                        (n = b(y.at, p, q)),
                        (s.left += n[0]),
                        (s.top += n[1]),
                        this.each(function () {
                            var d,
                                j,
                                k = a(this),
                                l = k.outerWidth(),
                                m = k.outerHeight(),
                                o = c(this, "marginLeft"),
                                t = c(this, "marginTop"),
                                z = l + o + c(this, "marginRight") + w.width,
                                A = m + t + c(this, "marginBottom") + w.height,
                                B = a.extend({}, s),
                                C = b(y.my, k.outerWidth(), k.outerHeight());
                            "right" === e.my[0] ? (B.left -= l) : "center" === e.my[0] && (B.left -= l / 2),
                                "bottom" === e.my[1] ? (B.top -= m) : "center" === e.my[1] && (B.top -= m / 2),
                                (B.left += C[0]),
                                (B.top += C[1]),
                                f || ((B.left = i(B.left)), (B.top = i(B.top))),
                                (d = { marginLeft: o, marginTop: t }),
                                a.each(["left", "top"], function (b, c) {
                                    a.ui.position[x[b]] &&
                                        a.ui.position[x[b]][c](B, {
                                            targetWidth: p,
                                            targetHeight: q,
                                            elemWidth: l,
                                            elemHeight: m,
                                            collisionPosition: d,
                                            collisionWidth: z,
                                            collisionHeight: A,
                                            offset: [n[0] + C[0], n[1] + C[1]],
                                            my: e.my,
                                            at: e.at,
                                            within: v,
                                            elem: k,
                                        });
                                }),
                                e.using &&
                                    (j = function (a) {
                                        var b = r.left - B.left,
                                            c = b + p - l,
                                            d = r.top - B.top,
                                            f = d + q - m,
                                            i = {
                                                target: { element: u, left: r.left, top: r.top, width: p, height: q },
                                                element: { element: k, left: B.left, top: B.top, width: l, height: m },
                                                horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                                                vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle",
                                            };
                                        l > p && h(b + c) < p && (i.horizontal = "center"),
                                            m > q && h(d + f) < q && (i.vertical = "middle"),
                                            g(h(b), h(c)) > g(h(d), h(f)) ? (i.important = "horizontal") : (i.important = "vertical"),
                                            e.using.call(this, a, i);
                                    }),
                                k.offset(a.extend(B, { using: j }));
                        })
                    );
                }),
                (a.ui.position = {
                    fit: {
                        left: function (a, b) {
                            var c,
                                d = b.within,
                                e = d.isWindow ? d.scrollLeft : d.offset.left,
                                f = d.width,
                                h = a.left - b.collisionPosition.marginLeft,
                                i = e - h,
                                j = h + b.collisionWidth - f - e;
                            b.collisionWidth > f
                                ? i > 0 && 0 >= j
                                    ? ((c = a.left + i + b.collisionWidth - f - e), (a.left += i - c))
                                    : j > 0 && 0 >= i
                                    ? (a.left = e)
                                    : i > j
                                    ? (a.left = e + f - b.collisionWidth)
                                    : (a.left = e)
                                : i > 0
                                ? (a.left += i)
                                : j > 0
                                ? (a.left -= j)
                                : (a.left = g(a.left - h, a.left));
                        },
                        top: function (a, b) {
                            var c,
                                d = b.within,
                                e = d.isWindow ? d.scrollTop : d.offset.top,
                                f = b.within.height,
                                h = a.top - b.collisionPosition.marginTop,
                                i = e - h,
                                j = h + b.collisionHeight - f - e;
                            b.collisionHeight > f
                                ? i > 0 && 0 >= j
                                    ? ((c = a.top + i + b.collisionHeight - f - e), (a.top += i - c))
                                    : j > 0 && 0 >= i
                                    ? (a.top = e)
                                    : i > j
                                    ? (a.top = e + f - b.collisionHeight)
                                    : (a.top = e)
                                : i > 0
                                ? (a.top += i)
                                : j > 0
                                ? (a.top -= j)
                                : (a.top = g(a.top - h, a.top));
                        },
                    },
                    flip: {
                        left: function (a, b) {
                            var c,
                                d,
                                e = b.within,
                                f = e.offset.left + e.scrollLeft,
                                g = e.width,
                                i = e.isWindow ? e.scrollLeft : e.offset.left,
                                j = a.left - b.collisionPosition.marginLeft,
                                k = j - i,
                                l = j + b.collisionWidth - g - i,
                                m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                                n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                                o = -2 * b.offset[0];
                            0 > k
                                ? ((c = a.left + m + n + o + b.collisionWidth - g - f), (0 > c || c < h(k)) && (a.left += m + n + o))
                                : l > 0 && ((d = a.left - b.collisionPosition.marginLeft + m + n + o - i), (d > 0 || h(d) < l) && (a.left += m + n + o));
                        },
                        top: function (a, b) {
                            var c,
                                d,
                                e = b.within,
                                f = e.offset.top + e.scrollTop,
                                g = e.height,
                                i = e.isWindow ? e.scrollTop : e.offset.top,
                                j = a.top - b.collisionPosition.marginTop,
                                k = j - i,
                                l = j + b.collisionHeight - g - i,
                                m = "top" === b.my[1],
                                n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                                o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                                p = -2 * b.offset[1];
                            0 > k
                                ? ((d = a.top + n + o + p + b.collisionHeight - g - f), (0 > d || d < h(k)) && (a.top += n + o + p))
                                : l > 0 && ((c = a.top - b.collisionPosition.marginTop + n + o + p - i), (c > 0 || h(c) < l) && (a.top += n + o + p));
                        },
                    },
                    flipfit: {
                        left: function () {
                            a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments);
                        },
                        top: function () {
                            a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments);
                        },
                    },
                }),
                (function () {
                    var b,
                        c,
                        d,
                        e,
                        g,
                        h = document.getElementsByTagName("body")[0],
                        i = document.createElement("div");
                    (b = document.createElement(h ? "div" : "body")),
                        (d = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }),
                        h && a.extend(d, { position: "absolute", left: "-1000px", top: "-1000px" });
                    for (g in d) b.style[g] = d[g];
                    b.appendChild(i),
                        (c = h || document.documentElement),
                        c.insertBefore(b, c.firstChild),
                        (i.style.cssText = "position: absolute; left: 10.7432222px;"),
                        (e = a(i).offset().left),
                        (f = e > 10 && 11 > e),
                        (b.innerHTML = ""),
                        c.removeChild(b);
                })();
        })();
        a.ui.position,
            a.widget("ui.menu", {
                version: "1.11.4",
                defaultElement: "<ul>",
                delay: 300,
                options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
                _create: function () {
                    (this.activeMenu = this.element),
                        (this.mouseHandled = !1),
                        this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }),
                        this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
                        this._on({
                            "mousedown .ui-menu-item": function (a) {
                                a.preventDefault();
                            },
                            "click .ui-menu-item": function (b) {
                                var c = a(b.target);
                                !this.mouseHandled &&
                                    c.not(".ui-state-disabled").length &&
                                    (this.select(b),
                                    b.isPropagationStopped() || (this.mouseHandled = !0),
                                    c.has(".ui-menu").length
                                        ? this.expand(b)
                                        : !this.element.is(":focus") &&
                                          a(this.document[0].activeElement).closest(".ui-menu").length &&
                                          (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                            },
                            "mouseenter .ui-menu-item": function (b) {
                                if (!this.previousFilter) {
                                    var c = a(b.currentTarget);
                                    c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c);
                                }
                            },
                            mouseleave: "collapseAll",
                            "mouseleave .ui-menu": "collapseAll",
                            focus: function (a, b) {
                                var c = this.active || this.element.find(this.options.items).eq(0);
                                b || this.focus(a, c);
                            },
                            blur: function (b) {
                                this._delay(function () {
                                    a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b);
                                });
                            },
                            keydown: "_keydown",
                        }),
                        this.refresh(),
                        this._on(this.document, {
                            click: function (a) {
                                this._closeOnDocumentClick(a) && this.collapseAll(a), (this.mouseHandled = !1);
                            },
                        });
                },
                _destroy: function () {
                    this.element
                        .removeAttr("aria-activedescendant")
                        .find(".ui-menu")
                        .addBack()
                        .removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front")
                        .removeAttr("role")
                        .removeAttr("tabIndex")
                        .removeAttr("aria-labelledby")
                        .removeAttr("aria-expanded")
                        .removeAttr("aria-hidden")
                        .removeAttr("aria-disabled")
                        .removeUniqueId()
                        .show(),
                        this.element
                            .find(".ui-menu-item")
                            .removeClass("ui-menu-item")
                            .removeAttr("role")
                            .removeAttr("aria-disabled")
                            .removeUniqueId()
                            .removeClass("ui-state-hover")
                            .removeAttr("tabIndex")
                            .removeAttr("role")
                            .removeAttr("aria-haspopup")
                            .children()
                            .each(function () {
                                var b = a(this);
                                b.data("ui-menu-submenu-carat") && b.remove();
                            }),
                        this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
                },
                _keydown: function (b) {
                    var c,
                        d,
                        e,
                        f,
                        g = !0;
                    switch (b.keyCode) {
                        case a.ui.keyCode.PAGE_UP:
                            this.previousPage(b);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            this.nextPage(b);
                            break;
                        case a.ui.keyCode.HOME:
                            this._move("first", "first", b);
                            break;
                        case a.ui.keyCode.END:
                            this._move("last", "last", b);
                            break;
                        case a.ui.keyCode.UP:
                            this.previous(b);
                            break;
                        case a.ui.keyCode.DOWN:
                            this.next(b);
                            break;
                        case a.ui.keyCode.LEFT:
                            this.collapse(b);
                            break;
                        case a.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                            break;
                        case a.ui.keyCode.ENTER:
                        case a.ui.keyCode.SPACE:
                            this._activate(b);
                            break;
                        case a.ui.keyCode.ESCAPE:
                            this.collapse(b);
                            break;
                        default:
                            (g = !1),
                                (d = this.previousFilter || ""),
                                (e = String.fromCharCode(b.keyCode)),
                                (f = !1),
                                clearTimeout(this.filterTimer),
                                e === d ? (f = !0) : (e = d + e),
                                (c = this._filterMenuItems(e)),
                                (c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c),
                                c.length || ((e = String.fromCharCode(b.keyCode)), (c = this._filterMenuItems(e))),
                                c.length
                                    ? (this.focus(b, c),
                                      (this.previousFilter = e),
                                      (this.filterTimer = this._delay(function () {
                                          delete this.previousFilter;
                                      }, 1e3)))
                                    : delete this.previousFilter;
                    }
                    g && b.preventDefault();
                },
                _activate: function (a) {
                    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a));
                },
                refresh: function () {
                    var b,
                        c,
                        d = this,
                        e = this.options.icons.submenu,
                        f = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length),
                        f
                            .filter(":not(.ui-menu)")
                            .addClass("ui-menu ui-widget ui-widget-content ui-front")
                            .hide()
                            .attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" })
                            .each(function () {
                                var b = a(this),
                                    c = b.parent(),
                                    d = a("<span>")
                                        .addClass("ui-menu-icon ui-icon " + e)
                                        .data("ui-menu-submenu-carat", !0);
                                c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"));
                            }),
                        (b = f.add(this.element)),
                        (c = b.find(this.options.items)),
                        c.not(".ui-menu-item").each(function () {
                            var b = a(this);
                            d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider");
                        }),
                        c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }),
                        c.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                        this.active && !a.contains(this.element[0], this.active[0]) && this.blur();
                },
                _itemRole: function () {
                    return { menu: "menuitem", listbox: "option" }[this.options.role];
                },
                _setOption: function (a, b) {
                    "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu),
                        "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b),
                        this._super(a, b);
                },
                focus: function (a, b) {
                    var c, d;
                    this.blur(a, a && "focus" === a.type),
                        this._scrollIntoView(b),
                        (this.active = b.first()),
                        (d = this.active.addClass("ui-state-focus").removeClass("ui-state-active")),
                        this.options.role && this.element.attr("aria-activedescendant", d.attr("id")),
                        this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),
                        a && "keydown" === a.type
                            ? this._close()
                            : (this.timer = this._delay(function () {
                                  this._close();
                              }, this.delay)),
                        (c = b.children(".ui-menu")),
                        c.length && a && /^mouse/.test(a.type) && this._startOpening(c),
                        (this.activeMenu = b.parent()),
                        this._trigger("focus", a, { item: b });
                },
                _scrollIntoView: function (b) {
                    var c, d, e, f, g, h;
                    this._hasScroll() &&
                        ((c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0),
                        (d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0),
                        (e = b.offset().top - this.activeMenu.offset().top - c - d),
                        (f = this.activeMenu.scrollTop()),
                        (g = this.activeMenu.height()),
                        (h = b.outerHeight()),
                        0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h));
                },
                blur: function (a, b) {
                    b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), (this.active = null), this._trigger("blur", a, { item: this.active }));
                },
                _startOpening: function (a) {
                    clearTimeout(this.timer),
                        "true" === a.attr("aria-hidden") &&
                            (this.timer = this._delay(function () {
                                this._close(), this._open(a);
                            }, this.delay));
                },
                _open: function (b) {
                    var c = a.extend({ of: this.active }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c);
                },
                collapseAll: function (b, c) {
                    clearTimeout(this.timer),
                        (this.timer = this._delay(function () {
                            var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                            d.length || (d = this.element), this._close(d), this.blur(b), (this.activeMenu = d);
                        }, this.delay));
                },
                _close: function (a) {
                    a || (a = this.active ? this.active.parent() : this.element),
                        a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
                },
                _closeOnDocumentClick: function (b) {
                    return !a(b.target).closest(".ui-menu").length;
                },
                _isDivider: function (a) {
                    return !/[^\-\u2014\u2013\s]/.test(a.text());
                },
                collapse: function (a) {
                    var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    b && b.length && (this._close(), this.focus(a, b));
                },
                expand: function (a) {
                    var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    b &&
                        b.length &&
                        (this._open(b.parent()),
                        this._delay(function () {
                            this.focus(a, b);
                        }));
                },
                next: function (a) {
                    this._move("next", "first", a);
                },
                previous: function (a) {
                    this._move("prev", "last", a);
                },
                isFirstItem: function () {
                    return this.active && !this.active.prevAll(".ui-menu-item").length;
                },
                isLastItem: function () {
                    return this.active && !this.active.nextAll(".ui-menu-item").length;
                },
                _move: function (a, b, c) {
                    var d;
                    this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)),
                        (d && d.length && this.active) || (d = this.activeMenu.find(this.options.items)[b]()),
                        this.focus(c, d);
                },
                nextPage: function (b) {
                    var c, d, e;
                    return this.active
                        ? void (
                              this.isLastItem() ||
                              (this._hasScroll()
                                  ? ((d = this.active.offset().top),
                                    (e = this.element.height()),
                                    this.active.nextAll(".ui-menu-item").each(function () {
                                        return (c = a(this)), c.offset().top - d - e < 0;
                                    }),
                                    this.focus(b, c))
                                  : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
                          )
                        : void this.next(b);
                },
                previousPage: function (b) {
                    var c, d, e;
                    return this.active
                        ? void (
                              this.isFirstItem() ||
                              (this._hasScroll()
                                  ? ((d = this.active.offset().top),
                                    (e = this.element.height()),
                                    this.active.prevAll(".ui-menu-item").each(function () {
                                        return (c = a(this)), c.offset().top - d + e > 0;
                                    }),
                                    this.focus(b, c))
                                  : this.focus(b, this.activeMenu.find(this.options.items).first()))
                          )
                        : void this.next(b);
                },
                _hasScroll: function () {
                    return this.element.outerHeight() < this.element.prop("scrollHeight");
                },
                select: function (b) {
                    this.active = this.active || a(b.target).closest(".ui-menu-item");
                    var c = { item: this.active };
                    this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c);
                },
                _filterMenuItems: function (b) {
                    var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        d = new RegExp("^" + c, "i");
                    return this.activeMenu
                        .find(this.options.items)
                        .filter(".ui-menu-item")
                        .filter(function () {
                            return d.test(a.trim(a(this).text()));
                        });
                },
            });
        a.widget("ui.autocomplete", {
            version: "1.11.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: { my: "left top", at: "left bottom", collision: "none" },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null,
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var b,
                    c,
                    d,
                    e = this.element[0].nodeName.toLowerCase(),
                    f = "textarea" === e,
                    g = "input" === e;
                (this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable")),
                    (this.valueMethod = this.element[f || g ? "val" : "text"]),
                    (this.isNewMenu = !0),
                    this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
                    this._on(this.element, {
                        keydown: function (e) {
                            if (this.element.prop("readOnly")) return (b = !0), (d = !0), void (c = !0);
                            (b = !1), (d = !1), (c = !1);
                            var f = a.ui.keyCode;
                            switch (e.keyCode) {
                                case f.PAGE_UP:
                                    (b = !0), this._move("previousPage", e);
                                    break;
                                case f.PAGE_DOWN:
                                    (b = !0), this._move("nextPage", e);
                                    break;
                                case f.UP:
                                    (b = !0), this._keyEvent("previous", e);
                                    break;
                                case f.DOWN:
                                    (b = !0), this._keyEvent("next", e);
                                    break;
                                case f.ENTER:
                                    this.menu.active && ((b = !0), e.preventDefault(), this.menu.select(e));
                                    break;
                                case f.TAB:
                                    this.menu.active && this.menu.select(e);
                                    break;
                                case f.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                    break;
                                default:
                                    (c = !0), this._searchTimeout(e);
                            }
                        },
                        keypress: function (d) {
                            if (b) return (b = !1), void ((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                            if (!c) {
                                var e = a.ui.keyCode;
                                switch (d.keyCode) {
                                    case e.PAGE_UP:
                                        this._move("previousPage", d);
                                        break;
                                    case e.PAGE_DOWN:
                                        this._move("nextPage", d);
                                        break;
                                    case e.UP:
                                        this._keyEvent("previous", d);
                                        break;
                                    case e.DOWN:
                                        this._keyEvent("next", d);
                                }
                            }
                        },
                        input: function (a) {
                            return d ? ((d = !1), void a.preventDefault()) : void this._searchTimeout(a);
                        },
                        focus: function () {
                            (this.selectedItem = null), (this.previous = this._value());
                        },
                        blur: function (a) {
                            return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a));
                        },
                    }),
                    this._initSource(),
                    (this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance")),
                    this._on(this.menu.element, {
                        mousedown: function (b) {
                            b.preventDefault(),
                                (this.cancelBlur = !0),
                                this._delay(function () {
                                    delete this.cancelBlur;
                                });
                            var c = this.menu.element[0];
                            a(b.target).closest(".ui-menu-item").length ||
                                this._delay(function () {
                                    var b = this;
                                    this.document.one("mousedown", function (d) {
                                        d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close();
                                    });
                                });
                        },
                        menufocus: function (b, c) {
                            var d, e;
                            return this.isNewMenu && ((this.isNewMenu = !1), b.originalEvent && /^mouse/.test(b.originalEvent.type))
                                ? (this.menu.blur(),
                                  void this.document.one("mousemove", function () {
                                      a(b.target).trigger(b.originalEvent);
                                  }))
                                : ((e = c.item.data("ui-autocomplete-item")),
                                  !1 !== this._trigger("focus", b, { item: e }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value),
                                  (d = c.item.attr("aria-label") || e.value),
                                  void (d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))));
                        },
                        menuselect: function (a, b) {
                            var c = b.item.data("ui-autocomplete-item"),
                                d = this.previous;
                            this.element[0] !== this.document[0].activeElement &&
                                (this.element.focus(),
                                (this.previous = d),
                                this._delay(function () {
                                    (this.previous = d), (this.selectedItem = c);
                                })),
                                !1 !== this._trigger("select", a, { item: c }) && this._value(c.value),
                                (this.term = this._value()),
                                this.close(a),
                                (this.selectedItem = c);
                        },
                    }),
                    (this.liveRegion = a("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)),
                    this._on(this.window, {
                        beforeunload: function () {
                            this.element.removeAttr("autocomplete");
                        },
                    });
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
            },
            _setOption: function (a, b) {
                this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort();
            },
            _appendTo: function () {
                var b = this.options.appendTo;
                return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), (b && b[0]) || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b;
            },
            _initSource: function () {
                var b,
                    c,
                    d = this;
                a.isArray(this.options.source)
                    ? ((b = this.options.source),
                      (this.source = function (c, d) {
                          d(a.ui.autocomplete.filter(b, c.term));
                      }))
                    : "string" == typeof this.options.source
                    ? ((c = this.options.source),
                      (this.source = function (b, e) {
                          d.xhr && d.xhr.abort(),
                              (d.xhr = a.ajax({
                                  url: c,
                                  data: b,
                                  dataType: "json",
                                  success: function (a) {
                                      e(a);
                                  },
                                  error: function () {
                                      e([]);
                                  },
                              }));
                      }))
                    : (this.source = this.options.source);
            },
            _searchTimeout: function (a) {
                clearTimeout(this.searching),
                    (this.searching = this._delay(function () {
                        var b = this.term === this._value(),
                            c = this.menu.element.is(":visible"),
                            d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                        (!b || (b && !c && !d)) && ((this.selectedItem = null), this.search(null, a));
                    }, this.options.delay));
            },
            search: function (a, b) {
                return (a = null != a ? a : this._value()), (this.term = this._value()), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0;
            },
            _search: function (a) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), (this.cancelSearch = !1), this.source({ term: a }, this._response());
            },
            _response: function () {
                var b = ++this.requestIndex;
                return a.proxy(function (a) {
                    b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
                }, this);
            },
            __response: function (a) {
                a && (a = this._normalize(a)), this._trigger("response", null, { content: a }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close();
            },
            close: function (a) {
                (this.cancelSearch = !0), this._close(a);
            },
            _close: function (a) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), (this.isNewMenu = !0), this._trigger("close", a));
            },
            _change: function (a) {
                this.previous !== this._value() && this._trigger("change", a, { item: this.selectedItem });
            },
            _normalize: function (b) {
                return b.length && b[0].label && b[0].value
                    ? b
                    : a.map(b, function (b) {
                          return "string" == typeof b ? { label: b, value: b } : a.extend({}, b, { label: b.label || b.value, value: b.value || b.label });
                      });
            },
            _suggest: function (b) {
                var c = this.menu.element.empty();
                this._renderMenu(c, b), (this.isNewMenu = !0), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next();
            },
            _resizeMenu: function () {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
            },
            _renderMenu: function (b, c) {
                var d = this;
                a.each(c, function (a, c) {
                    d._renderItemData(b, c);
                });
            },
            _renderItemData: function (a, b) {
                return this._renderItem(a, b).data("ui-autocomplete-item", b);
            },
            _renderItem: function (b, c) {
                return a("<li>").text(c.label).appendTo(b);
            },
            _move: function (a, b) {
                return this.menu.element.is(":visible")
                    ? (this.menu.isFirstItem() && /^previous/.test(a)) || (this.menu.isLastItem() && /^next/.test(a))
                        ? (this.isMultiLine || this._value(this.term), void this.menu.blur())
                        : void this.menu[a](b)
                    : void this.search(null, b);
            },
            widget: function () {
                return this.menu.element;
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments);
            },
            _keyEvent: function (a, b) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault());
            },
        }),
            a.extend(a.ui.autocomplete, {
                escapeRegex: function (a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                },
                filter: function (b, c) {
                    var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                    return a.grep(b, function (a) {
                        return d.test(a.label || a.value || a);
                    });
                },
            }),
            a.widget("ui.autocomplete", a.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function (a) {
                            return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                        },
                    },
                },
                __response: function (b) {
                    var c;
                    this._superApply(arguments),
                        this.options.disabled ||
                            this.cancelSearch ||
                            ((c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults), this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion));
                },
            });
        a.ui.autocomplete;
    }),
    (function (a) {
        var b = !0;
        (a.flexslider = function (c, d) {
            var e = a(c);
            e.vars = a.extend({}, a.flexslider.defaults, d);
            var f,
                g = e.vars.namespace,
                h = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                i = ("ontouchstart" in window || h || (window.DocumentTouch && document instanceof DocumentTouch)) && e.vars.touch,
                j = "click touchend MSPointerUp keyup",
                k = "",
                l = "vertical" === e.vars.direction,
                m = e.vars.reverse,
                n = e.vars.itemWidth > 0,
                o = "fade" === e.vars.animation,
                p = "" !== e.vars.asNavFor,
                q = {};
            a.data(c, "flexslider", e),
                (q = {
                    init: function () {
                        (e.animating = !1),
                            (e.currentSlide = parseInt(e.vars.startAt ? e.vars.startAt : 0, 10)),
                            isNaN(e.currentSlide) && (e.currentSlide = 0),
                            (e.animatingTo = e.currentSlide),
                            (e.atEnd = 0 === e.currentSlide || e.currentSlide === e.last),
                            (e.containerSelector = e.vars.selector.substr(0, e.vars.selector.search(" "))),
                            (e.slides = a(e.vars.selector, e)),
                            (e.container = a(e.containerSelector, e)),
                            (e.count = e.slides.length),
                            (e.syncExists = a(e.vars.sync).length > 0),
                            "slide" === e.vars.animation && (e.vars.animation = "swing"),
                            (e.prop = l ? "top" : "marginLeft"),
                            (e.args = {}),
                            (e.manualPause = !1),
                            (e.stopped = !1),
                            (e.started = !1),
                            (e.startTimeout = null),
                            (e.transitions =
                                !e.vars.video &&
                                !o &&
                                e.vars.useCSS &&
                                (function () {
                                    var a = document.createElement("div"),
                                        b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                    for (var c in b) if (void 0 !== a.style[b[c]]) return (e.pfx = b[c].replace("Perspective", "").toLowerCase()), (e.prop = "-" + e.pfx + "-transform"), !0;
                                    return !1;
                                })()),
                            (e.ensureAnimationEnd = ""),
                            "" !== e.vars.controlsContainer && (e.controlsContainer = a(e.vars.controlsContainer).length > 0 && a(e.vars.controlsContainer)),
                            "" !== e.vars.manualControls && (e.manualControls = a(e.vars.manualControls).length > 0 && a(e.vars.manualControls)),
                            "" !== e.vars.customDirectionNav && (e.customDirectionNav = 2 === a(e.vars.customDirectionNav).length && a(e.vars.customDirectionNav)),
                            e.vars.randomize &&
                                (e.slides.sort(function () {
                                    return Math.round(Math.random()) - 0.5;
                                }),
                                e.container.empty().append(e.slides)),
                            e.doMath(),
                            e.setup("init"),
                            e.vars.controlNav && q.controlNav.setup(),
                            e.vars.directionNav && q.directionNav.setup(),
                            e.vars.keyboard &&
                                (1 === a(e.containerSelector).length || e.vars.multipleKeyboard) &&
                                a(document).bind("keyup", function (a) {
                                    var b = a.keyCode;
                                    if (!e.animating && (39 === b || 37 === b)) {
                                        var c = 39 === b ? e.getTarget("next") : 37 === b ? e.getTarget("prev") : !1;
                                        e.flexAnimate(c, e.vars.pauseOnAction);
                                    }
                                }),
                            e.vars.mousewheel &&
                                e.bind("mousewheel", function (a, b, c, d) {
                                    a.preventDefault();
                                    var f = 0 > b ? e.getTarget("next") : e.getTarget("prev");
                                    e.flexAnimate(f, e.vars.pauseOnAction);
                                }),
                            e.vars.pausePlay && q.pausePlay.setup(),
                            e.vars.slideshow && e.vars.pauseInvisible && q.pauseInvisible.init(),
                            e.vars.slideshow &&
                                (e.vars.pauseOnHover &&
                                    e.hover(
                                        function () {
                                            e.manualPlay || e.manualPause || e.pause();
                                        },
                                        function () {
                                            e.manualPause || e.manualPlay || e.stopped || e.play();
                                        }
                                    ),
                                (e.vars.pauseInvisible && q.pauseInvisible.isHidden()) || (e.vars.initDelay > 0 ? (e.startTimeout = setTimeout(e.play, e.vars.initDelay)) : e.play())),
                            p && q.asNav.setup(),
                            i && e.vars.touch && q.touch(),
                            (!o || (o && e.vars.smoothHeight)) && a(window).bind("resize orientationchange focus", q.resize),
                            e.find("img").attr("draggable", "false"),
                            setTimeout(function () {
                                e.vars.start(e);
                            }, 200);
                    },
                    asNav: {
                        setup: function () {
                            (e.asNav = !0),
                                (e.animatingTo = Math.floor(e.currentSlide / e.move)),
                                (e.currentItem = e.currentSlide),
                                e.slides
                                    .removeClass(g + "active-slide")
                                    .eq(e.currentItem)
                                    .addClass(g + "active-slide"),
                                h
                                    ? ((c._slider = e),
                                      e.slides.each(function () {
                                          var b = this;
                                          (b._gesture = new MSGesture()),
                                              (b._gesture.target = b),
                                              b.addEventListener(
                                                  "MSPointerDown",
                                                  function (a) {
                                                      a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId);
                                                  },
                                                  !1
                                              ),
                                              b.addEventListener("MSGestureTap", function (b) {
                                                  b.preventDefault();
                                                  var c = a(this),
                                                      d = c.index();
                                                  a(e.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || ((e.direction = e.currentItem < d ? "next" : "prev"), e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0));
                                              });
                                      }))
                                    : e.slides.on(j, function (b) {
                                          b.preventDefault();
                                          var c = a(this),
                                              d = c.index(),
                                              f = c.offset().left - a(e).scrollLeft();
                                          0 >= f && c.hasClass(g + "active-slide")
                                              ? e.flexAnimate(e.getTarget("prev"), !0)
                                              : a(e.vars.asNavFor).data("flexslider").animating || c.hasClass(g + "active-slide") || ((e.direction = e.currentItem < d ? "next" : "prev"), e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0));
                                      });
                        },
                    },
                    controlNav: {
                        setup: function () {
                            e.manualControls ? q.controlNav.setupManual() : q.controlNav.setupPaging();
                        },
                        setupPaging: function () {
                            var b,
                                c,
                                d = "thumbnails" === e.vars.controlNav ? "control-thumbs" : "control-paging",
                                f = 1;
                            if (((e.controlNavScaffold = a('<ol class="' + g + "control-nav " + g + d + '"></ol>')), e.pagingCount > 1))
                                for (var h = 0; h < e.pagingCount; h++) {
                                    if (
                                        ((c = e.slides.eq(h)),
                                        void 0 === c.attr("data-thumb-alt") && c.attr("data-thumb-alt", ""),
                                        (altText = "" !== c.attr("data-thumb-alt") ? (altText = ' alt="' + c.attr("data-thumb-alt") + '"') : ""),
                                        (b = "thumbnails" === e.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + f + "</a>"),
                                        "thumbnails" === e.vars.controlNav && !0 === e.vars.thumbCaptions)
                                    ) {
                                        var i = c.attr("data-thumbcaption");
                                        "" !== i && void 0 !== i && (b += '<span class="' + g + 'caption">' + i + "</span>");
                                    }
                                    e.controlNavScaffold.append("<li>" + b + "</li>"), f++;
                                }
                            e.controlsContainer ? a(e.controlsContainer).append(e.controlNavScaffold) : e.append(e.controlNavScaffold),
                                q.controlNav.set(),
                                q.controlNav.active(),
                                e.controlNavScaffold.delegate("a, img", j, function (b) {
                                    if ((b.preventDefault(), "" === k || k === b.type)) {
                                        var c = a(this),
                                            d = e.controlNav.index(c);
                                        c.hasClass(g + "active") || ((e.direction = d > e.currentSlide ? "next" : "prev"), e.flexAnimate(d, e.vars.pauseOnAction));
                                    }
                                    "" === k && (k = b.type), q.setToClearWatchedEvent();
                                });
                        },
                        setupManual: function () {
                            (e.controlNav = e.manualControls),
                                q.controlNav.active(),
                                e.controlNav.bind(j, function (b) {
                                    if ((b.preventDefault(), "" === k || k === b.type)) {
                                        var c = a(this),
                                            d = e.controlNav.index(c);
                                        c.hasClass(g + "active") || (d > e.currentSlide ? (e.direction = "next") : (e.direction = "prev"), e.flexAnimate(d, e.vars.pauseOnAction));
                                    }
                                    "" === k && (k = b.type), q.setToClearWatchedEvent();
                                });
                        },
                        set: function () {
                            var b = "thumbnails" === e.vars.controlNav ? "img" : "a";
                            e.controlNav = a("." + g + "control-nav li " + b, e.controlsContainer ? e.controlsContainer : e);
                        },
                        active: function () {
                            e.controlNav
                                .removeClass(g + "active")
                                .eq(e.animatingTo)
                                .addClass(g + "active");
                        },
                        update: function (b, c) {
                            e.pagingCount > 1 && "add" === b
                                ? e.controlNavScaffold.append(a('<li><a href="#">' + e.count + "</a></li>"))
                                : 1 === e.pagingCount
                                ? e.controlNavScaffold.find("li").remove()
                                : e.controlNav.eq(c).closest("li").remove(),
                                q.controlNav.set(),
                                e.pagingCount > 1 && e.pagingCount !== e.controlNav.length ? e.update(c, b) : q.controlNav.active();
                        },
                    },
                    directionNav: {
                        setup: function () {
                            var b = a(
                                '<ul class="' +
                                    g +
                                    'direction-nav"><li class="' +
                                    g +
                                    'nav-prev"><a class="' +
                                    g +
                                    'prev" href="#">' +
                                    e.vars.prevText +
                                    '</a></li><li class="' +
                                    g +
                                    'nav-next"><a class="' +
                                    g +
                                    'next" href="#">' +
                                    e.vars.nextText +
                                    "</a></li></ul>"
                            );
                            e.customDirectionNav
                                ? (e.directionNav = e.customDirectionNav)
                                : e.controlsContainer
                                ? (a(e.controlsContainer).append(b), (e.directionNav = a("." + g + "direction-nav li a", e.controlsContainer)))
                                : (e.append(b), (e.directionNav = a("." + g + "direction-nav li a", e))),
                                q.directionNav.update(),
                                e.directionNav.bind(j, function (b) {
                                    b.preventDefault();
                                    var c;
                                    ("" === k || k === b.type) && ((c = a(this).hasClass(g + "next") ? e.getTarget("next") : e.getTarget("prev")), e.flexAnimate(c, e.vars.pauseOnAction)),
                                        "" === k && (k = b.type),
                                        q.setToClearWatchedEvent();
                                });
                        },
                        update: function () {
                            var a = g + "disabled";
                            1 === e.pagingCount
                                ? e.directionNav.addClass(a).attr("tabindex", "-1")
                                : e.vars.animationLoop
                                ? e.directionNav.removeClass(a).removeAttr("tabindex")
                                : 0 === e.animatingTo
                                ? e.directionNav
                                      .removeClass(a)
                                      .filter("." + g + "prev")
                                      .addClass(a)
                                      .attr("tabindex", "-1")
                                : e.animatingTo === e.last
                                ? e.directionNav
                                      .removeClass(a)
                                      .filter("." + g + "next")
                                      .addClass(a)
                                      .attr("tabindex", "-1")
                                : e.directionNav.removeClass(a).removeAttr("tabindex");
                        },
                    },
                    pausePlay: {
                        setup: function () {
                            var b = a('<div class="' + g + 'pauseplay"><a href="#"></a></div>');
                            e.controlsContainer ? (e.controlsContainer.append(b), (e.pausePlay = a("." + g + "pauseplay a", e.controlsContainer))) : (e.append(b), (e.pausePlay = a("." + g + "pauseplay a", e))),
                                q.pausePlay.update(e.vars.slideshow ? g + "pause" : g + "play"),
                                e.pausePlay.bind(j, function (b) {
                                    b.preventDefault(),
                                        ("" === k || k === b.type) && (a(this).hasClass(g + "pause") ? ((e.manualPause = !0), (e.manualPlay = !1), e.pause()) : ((e.manualPause = !1), (e.manualPlay = !0), e.play())),
                                        "" === k && (k = b.type),
                                        q.setToClearWatchedEvent();
                                });
                        },
                        update: function (a) {
                            "play" === a
                                ? e.pausePlay
                                      .removeClass(g + "pause")
                                      .addClass(g + "play")
                                      .html(e.vars.playText)
                                : e.pausePlay
                                      .removeClass(g + "play")
                                      .addClass(g + "pause")
                                      .html(e.vars.pauseText);
                        },
                    },
                    touch: function () {
                        function a(a) {
                            a.stopPropagation(),
                                e.animating
                                    ? a.preventDefault()
                                    : (e.pause(),
                                      c._gesture.addPointer(a.pointerId),
                                      (w = 0),
                                      (j = l ? e.h : e.w),
                                      (p = Number(new Date())),
                                      (i =
                                          n && m && e.animatingTo === e.last
                                              ? 0
                                              : n && m
                                              ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo
                                              : n && e.currentSlide === e.last
                                              ? e.limit
                                              : n
                                              ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide
                                              : m
                                              ? (e.last - e.currentSlide + e.cloneOffset) * j
                                              : (e.currentSlide + e.cloneOffset) * j));
                        }
                        function b(a) {
                            a.stopPropagation();
                            var b = a.target._slider;
                            if (b) {
                                var d = -a.translationX,
                                    e = -a.translationY;
                                return (
                                    (w += l ? e : d),
                                    (k = w),
                                    (t = l ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e)),
                                    a.detail === a.MSGESTURE_FLAG_INERTIA
                                        ? void setImmediate(function () {
                                              c._gesture.stop();
                                          })
                                        : void (
                                              (!t || Number(new Date()) - p > 500) &&
                                              (a.preventDefault(),
                                              !o && b.transitions && (b.vars.animationLoop || (k = w / ((0 === b.currentSlide && 0 > w) || (b.currentSlide === b.last && w > 0) ? Math.abs(w) / j + 2 : 1)), b.setProps(i + k, "setTouch")))
                                          )
                                );
                            }
                        }
                        function d(a) {
                            a.stopPropagation();
                            var b = a.target._slider;
                            if (b) {
                                if (b.animatingTo === b.currentSlide && !t && null !== k) {
                                    var c = m ? -k : k,
                                        d = c > 0 ? b.getTarget("next") : b.getTarget("prev");
                                    b.canAdvance(d) && ((Number(new Date()) - p < 550 && Math.abs(c) > 50) || Math.abs(c) > j / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : o || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0);
                                }
                                (f = null), (g = null), (k = null), (i = null), (w = 0);
                            }
                        }
                        var f,
                            g,
                            i,
                            j,
                            k,
                            p,
                            q,
                            r,
                            s,
                            t = !1,
                            u = 0,
                            v = 0,
                            w = 0;
                        h
                            ? ((c.style.msTouchAction = "none"),
                              (c._gesture = new MSGesture()),
                              (c._gesture.target = c),
                              c.addEventListener("MSPointerDown", a, !1),
                              (c._slider = e),
                              c.addEventListener("MSGestureChange", b, !1),
                              c.addEventListener("MSGestureEnd", d, !1))
                            : ((q = function (a) {
                                  e.animating
                                      ? a.preventDefault()
                                      : (window.navigator.msPointerEnabled || 1 === a.touches.length) &&
                                        (e.pause(),
                                        (j = l ? e.h : e.w),
                                        (p = Number(new Date())),
                                        (u = a.touches[0].pageX),
                                        (v = a.touches[0].pageY),
                                        (i =
                                            n && m && e.animatingTo === e.last
                                                ? 0
                                                : n && m
                                                ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo
                                                : n && e.currentSlide === e.last
                                                ? e.limit
                                                : n
                                                ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide
                                                : m
                                                ? (e.last - e.currentSlide + e.cloneOffset) * j
                                                : (e.currentSlide + e.cloneOffset) * j),
                                        (f = l ? v : u),
                                        (g = l ? u : v),
                                        c.addEventListener("touchmove", r, !1),
                                        c.addEventListener("touchend", s, !1));
                              }),
                              (r = function (a) {
                                  (u = a.touches[0].pageX), (v = a.touches[0].pageY), (k = l ? f - v : f - u), (t = l ? Math.abs(k) < Math.abs(u - g) : Math.abs(k) < Math.abs(v - g));
                                  var b = 500;
                                  (!t || Number(new Date()) - p > b) &&
                                      (a.preventDefault(),
                                      !o && e.transitions && (e.vars.animationLoop || (k /= (0 === e.currentSlide && 0 > k) || (e.currentSlide === e.last && k > 0) ? Math.abs(k) / j + 2 : 1), e.setProps(i + k, "setTouch")));
                              }),
                              (s = function (a) {
                                  if ((c.removeEventListener("touchmove", r, !1), e.animatingTo === e.currentSlide && !t && null !== k)) {
                                      var b = m ? -k : k,
                                          d = b > 0 ? e.getTarget("next") : e.getTarget("prev");
                                      e.canAdvance(d) && ((Number(new Date()) - p < 550 && Math.abs(b) > 50) || Math.abs(b) > j / 2) ? e.flexAnimate(d, e.vars.pauseOnAction) : o || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0);
                                  }
                                  c.removeEventListener("touchend", s, !1), (f = null), (g = null), (k = null), (i = null);
                              }),
                              c.addEventListener("touchstart", q, !1));
                    },
                    resize: function () {
                        !e.animating &&
                            e.is(":visible") &&
                            (n || e.doMath(),
                            o
                                ? q.smoothHeight()
                                : n
                                ? (e.slides.width(e.computedW), e.update(e.pagingCount), e.setProps())
                                : l
                                ? (e.viewport.height(e.h), e.setProps(e.h, "setTotal"))
                                : (e.vars.smoothHeight && q.smoothHeight(), e.newSlides.width(e.computedW), e.setProps(e.computedW, "setTotal")));
                    },
                    smoothHeight: function (a) {
                        if (!l || o) {
                            var b = o ? e : e.viewport;
                            a ? b.animate({ height: e.slides.eq(e.animatingTo).height() }, a) : b.height(e.slides.eq(e.animatingTo).height());
                        }
                    },
                    sync: function (b) {
                        var c = a(e.vars.sync).data("flexslider"),
                            d = e.animatingTo;
                        switch (b) {
                            case "animate":
                                c.flexAnimate(d, e.vars.pauseOnAction, !1, !0);
                                break;
                            case "play":
                                c.playing || c.asNav || c.play();
                                break;
                            case "pause":
                                c.pause();
                        }
                    },
                    uniqueID: function (b) {
                        return (
                            b
                                .filter("[id]")
                                .add(b.find("[id]"))
                                .each(function () {
                                    var b = a(this);
                                    b.attr("id", b.attr("id") + "_clone");
                                }),
                            b
                        );
                    },
                    pauseInvisible: {
                        visProp: null,
                        init: function () {
                            var a = q.pauseInvisible.getHiddenProp();
                            if (a) {
                                var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
                                document.addEventListener(b, function () {
                                    q.pauseInvisible.isHidden() ? (e.startTimeout ? clearTimeout(e.startTimeout) : e.pause()) : e.started ? e.play() : e.vars.initDelay > 0 ? setTimeout(e.play, e.vars.initDelay) : e.play();
                                });
                            }
                        },
                        isHidden: function () {
                            var a = q.pauseInvisible.getHiddenProp();
                            return a ? document[a] : !1;
                        },
                        getHiddenProp: function () {
                            var a = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var b = 0; b < a.length; b++) if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                            return null;
                        },
                    },
                    setToClearWatchedEvent: function () {
                        clearTimeout(f),
                            (f = setTimeout(function () {
                                k = "";
                            }, 3e3));
                    },
                }),
                (e.flexAnimate = function (b, c, d, f, h) {
                    if (
                        (e.vars.animationLoop || b === e.currentSlide || (e.direction = b > e.currentSlide ? "next" : "prev"),
                        p && 1 === e.pagingCount && (e.direction = e.currentItem < b ? "next" : "prev"),
                        !e.animating && (e.canAdvance(b, h) || d) && e.is(":visible"))
                    ) {
                        if (p && f) {
                            var j = a(e.vars.asNavFor).data("flexslider");
                            if (
                                ((e.atEnd = 0 === b || b === e.count - 1),
                                j.flexAnimate(b, !0, !1, !0, h),
                                (e.direction = e.currentItem < b ? "next" : "prev"),
                                (j.direction = e.direction),
                                Math.ceil((b + 1) / e.visible) - 1 === e.currentSlide || 0 === b)
                            )
                                return (
                                    (e.currentItem = b),
                                    e.slides
                                        .removeClass(g + "active-slide")
                                        .eq(b)
                                        .addClass(g + "active-slide"),
                                    !1
                                );
                            (e.currentItem = b),
                                e.slides
                                    .removeClass(g + "active-slide")
                                    .eq(b)
                                    .addClass(g + "active-slide"),
                                (b = Math.floor(b / e.visible));
                        }
                        if (
                            ((e.animating = !0),
                            (e.animatingTo = b),
                            c && e.pause(),
                            e.vars.before(e),
                            e.syncExists && !h && q.sync("animate"),
                            e.vars.controlNav && q.controlNav.active(),
                            n ||
                                e.slides
                                    .removeClass(g + "active-slide")
                                    .eq(b)
                                    .addClass(g + "active-slide"),
                            (e.atEnd = 0 === b || b === e.last),
                            e.vars.directionNav && q.directionNav.update(),
                            b === e.last && (e.vars.end(e), e.vars.animationLoop || e.pause()),
                            o)
                        )
                            i
                                ? (e.slides.eq(e.currentSlide).css({ opacity: 0, zIndex: 1 }), e.slides.eq(b).css({ opacity: 1, zIndex: 2 }), e.wrapup(t))
                                : (e.slides.eq(e.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, e.vars.animationSpeed, e.vars.easing),
                                  e.slides.eq(b).css({ zIndex: 2 }).animate({ opacity: 1 }, e.vars.animationSpeed, e.vars.easing, e.wrapup));
                        else {
                            var k,
                                r,
                                s,
                                t = l ? e.slides.filter(":first").height() : e.computedW;
                            n
                                ? ((k = e.vars.itemMargin), (s = (e.itemW + k) * e.move * e.animatingTo), (r = s > e.limit && 1 !== e.visible ? e.limit : s))
                                : (r =
                                      0 === e.currentSlide && b === e.count - 1 && e.vars.animationLoop && "next" !== e.direction
                                          ? m
                                              ? (e.count + e.cloneOffset) * t
                                              : 0
                                          : e.currentSlide === e.last && 0 === b && e.vars.animationLoop && "prev" !== e.direction
                                          ? m
                                              ? 0
                                              : (e.count + 1) * t
                                          : m
                                          ? (e.count - 1 - b + e.cloneOffset) * t
                                          : (b + e.cloneOffset) * t),
                                e.setProps(r, "", e.vars.animationSpeed),
                                e.transitions
                                    ? ((e.vars.animationLoop && e.atEnd) || ((e.animating = !1), (e.currentSlide = e.animatingTo)),
                                      e.container.unbind("webkitTransitionEnd transitionend"),
                                      e.container.bind("webkitTransitionEnd transitionend", function () {
                                          clearTimeout(e.ensureAnimationEnd), e.wrapup(t);
                                      }),
                                      clearTimeout(e.ensureAnimationEnd),
                                      (e.ensureAnimationEnd = setTimeout(function () {
                                          e.wrapup(t);
                                      }, e.vars.animationSpeed + 100)))
                                    : e.container.animate(e.args, e.vars.animationSpeed, e.vars.easing, function () {
                                          e.wrapup(t);
                                      });
                        }
                        e.vars.smoothHeight && q.smoothHeight(e.vars.animationSpeed);
                    }
                }),
                (e.wrapup = function (a) {
                    o || n || (0 === e.currentSlide && e.animatingTo === e.last && e.vars.animationLoop ? e.setProps(a, "jumpEnd") : e.currentSlide === e.last && 0 === e.animatingTo && e.vars.animationLoop && e.setProps(a, "jumpStart")),
                        (e.animating = !1),
                        (e.currentSlide = e.animatingTo),
                        e.vars.after(e);
                }),
                (e.animateSlides = function () {
                    !e.animating && b && e.flexAnimate(e.getTarget("next"));
                }),
                (e.pause = function () {
                    clearInterval(e.animatedSlides), (e.animatedSlides = null), (e.playing = !1), e.vars.pausePlay && q.pausePlay.update("play"), e.syncExists && q.sync("pause");
                }),
                (e.play = function () {
                    e.playing && clearInterval(e.animatedSlides),
                        (e.animatedSlides = e.animatedSlides || setInterval(e.animateSlides, e.vars.slideshowSpeed)),
                        (e.started = e.playing = !0),
                        e.vars.pausePlay && q.pausePlay.update("pause"),
                        e.syncExists && q.sync("play");
                }),
                (e.stop = function () {
                    e.pause(), (e.stopped = !0);
                }),
                (e.canAdvance = function (a, b) {
                    var c = p ? e.pagingCount - 1 : e.last;
                    return b
                        ? !0
                        : p && e.currentItem === e.count - 1 && 0 === a && "prev" === e.direction
                        ? !0
                        : p && 0 === e.currentItem && a === e.pagingCount - 1 && "next" !== e.direction
                        ? !1
                        : a !== e.currentSlide || p
                        ? e.vars.animationLoop
                            ? !0
                            : e.atEnd && 0 === e.currentSlide && a === c && "next" !== e.direction
                            ? !1
                            : e.atEnd && e.currentSlide === c && 0 === a && "next" === e.direction
                            ? !1
                            : !0
                        : !1;
                }),
                (e.getTarget = function (a) {
                    return (e.direction = a), "next" === a ? (e.currentSlide === e.last ? 0 : e.currentSlide + 1) : 0 === e.currentSlide ? e.last : e.currentSlide - 1;
                }),
                (e.setProps = function (a, b, c) {
                    var d = (function () {
                        var c = a ? a : (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo,
                            d = (function () {
                                if (n) return "setTouch" === b ? a : m && e.animatingTo === e.last ? 0 : m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : e.animatingTo === e.last ? e.limit : c;
                                switch (b) {
                                    case "setTotal":
                                        return m ? (e.count - 1 - e.currentSlide + e.cloneOffset) * a : (e.currentSlide + e.cloneOffset) * a;
                                    case "setTouch":
                                        return m ? a : a;
                                    case "jumpEnd":
                                        return m ? a : e.count * a;
                                    case "jumpStart":
                                        return m ? e.count * a : a;
                                    default:
                                        return a;
                                }
                            })();
                        return -1 * d + "px";
                    })();
                    e.transitions &&
                        ((d = l ? "translate3d(0," + d + ",0)" : "translate3d(" + d + ",0,0)"), (c = void 0 !== c ? c / 1e3 + "s" : "0s"), e.container.css("-" + e.pfx + "-transition-duration", c), e.container.css("transition-duration", c)),
                        (e.args[e.prop] = d),
                        (e.transitions || void 0 === c) && e.container.css(e.args),
                        e.container.css("transform", d);
                }),
                (e.setup = function (b) {
                    if (o)
                        e.slides.css({ width: "100%", float: "left", marginRight: "-100%", position: "relative" }),
                            "init" === b &&
                                (i
                                    ? e.slides
                                          .css({ opacity: 0, display: "block", webkitTransition: "opacity " + e.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 })
                                          .eq(e.currentSlide)
                                          .css({ opacity: 1, zIndex: 2 })
                                    : 0 == e.vars.fadeFirstSlide
                                    ? e.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(e.currentSlide).css({ zIndex: 2 }).css({ opacity: 1 })
                                    : e.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(e.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, e.vars.animationSpeed, e.vars.easing)),
                            e.vars.smoothHeight && q.smoothHeight();
                    else {
                        var c, d;
                        "init" === b &&
                            ((e.viewport = a('<div class="' + g + 'viewport"></div>')
                                .css({ overflow: "hidden", position: "relative" })
                                .appendTo(e)
                                .append(e.container)),
                            (e.cloneCount = 0),
                            (e.cloneOffset = 0),
                            m && ((d = a.makeArray(e.slides).reverse()), (e.slides = a(d)), e.container.empty().append(e.slides))),
                            e.vars.animationLoop &&
                                !n &&
                                ((e.cloneCount = 2),
                                (e.cloneOffset = 1),
                                "init" !== b && e.container.find(".clone").remove(),
                                e.container.append(q.uniqueID(e.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(q.uniqueID(e.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                            (e.newSlides = a(e.vars.selector, e)),
                            (c = m ? e.count - 1 - e.currentSlide + e.cloneOffset : e.currentSlide + e.cloneOffset),
                            l && !n
                                ? (e.container
                                      .height(200 * (e.count + e.cloneCount) + "%")
                                      .css("position", "absolute")
                                      .width("100%"),
                                  setTimeout(
                                      function () {
                                          e.newSlides.css({ display: "block" }), e.doMath(), e.viewport.height(e.h), e.setProps(c * e.h, "init");
                                      },
                                      "init" === b ? 100 : 0
                                  ))
                                : (e.container.width(200 * (e.count + e.cloneCount) + "%"),
                                  e.setProps(c * e.computedW, "init"),
                                  setTimeout(
                                      function () {
                                          e.doMath(), e.newSlides.css({ width: e.computedW, marginRight: e.computedM, float: "left", display: "block" }), e.vars.smoothHeight && q.smoothHeight();
                                      },
                                      "init" === b ? 100 : 0
                                  ));
                    }
                    n ||
                        e.slides
                            .removeClass(g + "active-slide")
                            .eq(e.currentSlide)
                            .addClass(g + "active-slide"),
                        e.vars.init(e);
                }),
                (e.doMath = function () {
                    var a = e.slides.first(),
                        b = e.vars.itemMargin,
                        c = e.vars.minItems,
                        d = e.vars.maxItems;
                    (e.w = void 0 === e.viewport ? e.width() : e.viewport.width()),
                        (e.h = a.height()),
                        (e.boxPadding = a.outerWidth() - a.width()),
                        n
                            ? ((e.itemT = e.vars.itemWidth + b),
                              (e.itemM = b),
                              (e.minW = c ? c * e.itemT : e.w),
                              (e.maxW = d ? d * e.itemT - b : e.w),
                              (e.itemW = e.minW > e.w ? (e.w - b * (c - 1)) / c : e.maxW < e.w ? (e.w - b * (d - 1)) / d : e.vars.itemWidth > e.w ? e.w : e.vars.itemWidth),
                              (e.visible = Math.floor(e.w / e.itemW)),
                              (e.move = e.vars.move > 0 && e.vars.move < e.visible ? e.vars.move : e.visible),
                              (e.pagingCount = Math.ceil((e.count - e.visible) / e.move + 1)),
                              (e.last = e.pagingCount - 1),
                              (e.limit = 1 === e.pagingCount ? 0 : e.vars.itemWidth > e.w ? e.itemW * (e.count - 1) + b * (e.count - 1) : (e.itemW + b) * e.count - e.w - b))
                            : ((e.itemW = e.w), (e.itemM = b), (e.pagingCount = e.count), (e.last = e.count - 1)),
                        (e.computedW = e.itemW - e.boxPadding),
                        (e.computedM = e.itemM);
                }),
                (e.update = function (a, b) {
                    e.doMath(),
                        n || (a < e.currentSlide ? (e.currentSlide += 1) : a <= e.currentSlide && 0 !== a && (e.currentSlide -= 1), (e.animatingTo = e.currentSlide)),
                        e.vars.controlNav &&
                            !e.manualControls &&
                            (("add" === b && !n) || e.pagingCount > e.controlNav.length
                                ? q.controlNav.update("add")
                                : (("remove" === b && !n) || e.pagingCount < e.controlNav.length) && (n && e.currentSlide > e.last && ((e.currentSlide -= 1), (e.animatingTo -= 1)), q.controlNav.update("remove", e.last))),
                        e.vars.directionNav && q.directionNav.update();
                }),
                (e.addSlide = function (b, c) {
                    var d = a(b);
                    (e.count += 1),
                        (e.last = e.count - 1),
                        l && m ? (void 0 !== c ? e.slides.eq(e.count - c).after(d) : e.container.prepend(d)) : void 0 !== c ? e.slides.eq(c).before(d) : e.container.append(d),
                        e.update(c, "add"),
                        (e.slides = a(e.vars.selector + ":not(.clone)", e)),
                        e.setup(),
                        e.vars.added(e);
                }),
                (e.removeSlide = function (b) {
                    var c = isNaN(b) ? e.slides.index(a(b)) : b;
                    (e.count -= 1),
                        (e.last = e.count - 1),
                        isNaN(b) ? a(b, e.slides).remove() : l && m ? e.slides.eq(e.last).remove() : e.slides.eq(b).remove(),
                        e.doMath(),
                        e.update(c, "remove"),
                        (e.slides = a(e.vars.selector + ":not(.clone)", e)),
                        e.setup(),
                        e.vars.removed(e);
                }),
                q.init();
        }),
            a(window)
                .blur(function (a) {
                    b = !1;
                })
                .focus(function (a) {
                    b = !0;
                }),
            (a.flexslider.defaults = {
                namespace: "flex-",
                selector: ".slides > li",
                animation: "slide",
                direction: "horizontal",
                reverse: !1,
                animationLoop: !1,
                smoothHeight: !1,
                startAt: 0,
                slideshow: !0,
                slideshowSpeed: 8e3,
                animationSpeed: 600,
                initDelay: 0,
                randomize: !1,
                fadeFirstSlide: !0,
                thumbCaptions: !1,
                pauseOnAction: !0,
                pauseOnHover: !1,
                pauseInvisible: !0,
                useCSS: !0,
                touch: !0,
                video: !1,
                controlNav: !0,
                directionNav: !0,
                prevText: "Previous",
                nextText: "Next",
                keyboard: !0,
                multipleKeyboard: !1,
                mousewheel: !1,
                pausePlay: !1,
                pauseText: "Pause",
                playText: "Play",
                controlsContainer: "",
                manualControls: "",
                customDirectionNav: "",
                sync: "",
                asNavFor: "",
                itemWidth: 0,
                itemMargin: 0,
                minItems: 1,
                maxItems: 0,
                move: 0,
                allowOneSlide: !0,
                start: function () {},
                before: function () {},
                after: function () {},
                end: function () {},
                added: function () {},
                removed: function () {},
                init: function () {},
            }),
            (a.fn.flexslider = function (b) {
                if ((void 0 === b && (b = {}), "object" == typeof b))
                    return this.each(function () {
                        var c = a(this),
                            d = b.selector ? b.selector : ".slides > li",
                            e = c.find(d);
                        (1 === e.length && b.allowOneSlide === !0) || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b);
                    });
                var c = a(this).data("flexslider");
                switch (b) {
                    case "play":
                        c.play();
                        break;
                    case "pause":
                        c.pause();
                        break;
                    case "stop":
                        c.stop();
                        break;
                    case "next":
                        c.flexAnimate(c.getTarget("next"), !0);
                        break;
                    case "prev":
                    case "previous":
                        c.flexAnimate(c.getTarget("prev"), !0);
                        break;
                    default:
                        "number" == typeof b && c.flexAnimate(b, !0);
                }
            });
    })(jQuery),
    !(function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? (module.exports = a) : a(jQuery);
    })(function (a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (
                ((b = a.event.fix(g)),
                (b.type = "mousewheel"),
                "detail" in g && (m = -1 * g.detail),
                "wheelDelta" in g && (m = g.wheelDelta),
                "wheelDeltaY" in g && (m = g.wheelDeltaY),
                "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
                "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
                (j = 0 === m ? l : m),
                "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
                "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
                0 !== m || 0 !== l)
            ) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    (j *= q), (m *= q), (l *= q);
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    (j *= r), (m *= r), (l *= r);
                }
                if (
                    ((n = Math.max(Math.abs(m), Math.abs(l))),
                    (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
                    d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
                    (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
                    (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
                    (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
                    k.settings.normalizeOffset && this.getBoundingClientRect)
                ) {
                    var s = this.getBoundingClientRect();
                    (o = b.clientX - s.left), (p = b.clientY - s.top);
                }
                return (
                    (b.deltaX = l),
                    (b.deltaY = m),
                    (b.deltaFactor = f),
                    (b.offsetX = o),
                    (b.offsetY = p),
                    (b.deltaMode = 0),
                    h.unshift(b, j, l, m),
                    e && clearTimeout(e),
                    (e = setTimeout(c, 200)),
                    (a.event.dispatch || a.event.handle).apply(this, h)
                );
            }
        }
        function c() {
            f = null;
        }
        function d(a, b) {
            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
        }
        var e,
            f,
            g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks) for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = (a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
                if (this.addEventListener) for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
            },
            teardown: function () {
                if (this.removeEventListener) for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function (b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
            },
            getPageHeight: function (b) {
                return a(b).height();
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        a.fn.extend({
            mousewheel: function (a) {
                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
            },
            unmousewheel: function (a) {
                return this.unbind("mousewheel", a);
            },
        });
    }),
    !(function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? (module.exports = a) : a(jQuery);
    })(function (a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (
                ((b = a.event.fix(g)),
                (b.type = "mousewheel"),
                "detail" in g && (m = -1 * g.detail),
                "wheelDelta" in g && (m = g.wheelDelta),
                "wheelDeltaY" in g && (m = g.wheelDeltaY),
                "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
                "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
                (j = 0 === m ? l : m),
                "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
                "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
                0 !== m || 0 !== l)
            ) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    (j *= q), (m *= q), (l *= q);
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    (j *= r), (m *= r), (l *= r);
                }
                if (
                    ((n = Math.max(Math.abs(m), Math.abs(l))),
                    (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
                    d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
                    (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
                    (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
                    (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
                    k.settings.normalizeOffset && this.getBoundingClientRect)
                ) {
                    var s = this.getBoundingClientRect();
                    (o = b.clientX - s.left), (p = b.clientY - s.top);
                }
                return (
                    (b.deltaX = l),
                    (b.deltaY = m),
                    (b.deltaFactor = f),
                    (b.offsetX = o),
                    (b.offsetY = p),
                    (b.deltaMode = 0),
                    h.unshift(b, j, l, m),
                    e && clearTimeout(e),
                    (e = setTimeout(c, 200)),
                    (a.event.dispatch || a.event.handle).apply(this, h)
                );
            }
        }
        function c() {
            f = null;
        }
        function d(a, b) {
            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
        }
        var e,
            f,
            g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks) for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = (a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
                if (this.addEventListener) for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
            },
            teardown: function () {
                if (this.removeEventListener) for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function (b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
            },
            getPageHeight: function (b) {
                return a(b).height();
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        a.fn.extend({
            mousewheel: function (a) {
                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
            },
            unmousewheel: function (a) {
                return this.unbind("mousewheel", a);
            },
        });
    }),
    !(function (a) {
        "undefined" != typeof module && module.exports ? (module.exports = a) : a(jQuery, window, document);
    })(function (a) {
        !(function (b) {
            var c = "function" == typeof define && define.amd,
                d = "undefined" != typeof module && module.exports,
                e = "https:" == document.location.protocol ? "https:" : "http:",
                f = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
            c || (d ? require("jquery-mousewheel")(a) : a.event.special.mousewheel || a("head").append(decodeURI("%3Cscript src=" + e + "//" + f + "%3E%3C/script%3E"))), b();
        })(function () {
            var b,
                c = "mCustomScrollbar",
                d = "mCS",
                e = ".mCustomScrollbar",
                f = {
                    setTop: 0,
                    setLeft: 0,
                    axis: "y",
                    scrollbarPosition: "inside",
                    scrollInertia: 950,
                    autoDraggerLength: !0,
                    alwaysShowScrollbar: 0,
                    snapOffset: 0,
                    mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] },
                    scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
                    keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" },
                    contentTouchScroll: 25,
                    documentTouchScroll: !0,
                    advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 },
                    theme: "light",
                    callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 },
                },
                g = 0,
                h = {},
                i = window.attachEvent && !window.addEventListener ? 1 : 0,
                j = !1,
                k = [
                    "mCSB_dragger_onDrag",
                    "mCSB_scrollTools_onDrag",
                    "mCS_img_loaded",
                    "mCS_disabled",
                    "mCS_destroyed",
                    "mCS_no_scrollbar",
                    "mCS-autoHide",
                    "mCS-dir-rtl",
                    "mCS_no_scrollbar_y",
                    "mCS_no_scrollbar_x",
                    "mCS_y_hidden",
                    "mCS_x_hidden",
                    "mCSB_draggerContainer",
                    "mCSB_buttonUp",
                    "mCSB_buttonDown",
                    "mCSB_buttonLeft",
                    "mCSB_buttonRight",
                ],
                l = {
                    init: function (b) {
                        var b = a.extend(!0, {}, f, b),
                            c = m.call(this);
                        if (b.live) {
                            var i = b.liveSelector || this.selector || e,
                                j = a(i);
                            if ("off" === b.live) return void o(i);
                            h[i] = setTimeout(function () {
                                j.mCustomScrollbar(b), "once" === b.live && j.length && o(i);
                            }, 500);
                        } else o(i);
                        return (
                            (b.setWidth = b.set_width ? b.set_width : b.setWidth),
                            (b.setHeight = b.set_height ? b.set_height : b.setHeight),
                            (b.axis = b.horizontalScroll ? "x" : p(b.axis)),
                            (b.scrollInertia = b.scrollInertia > 0 && b.scrollInertia < 17 ? 17 : b.scrollInertia),
                            "object" != typeof b.mouseWheel && 1 == b.mouseWheel && (b.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }),
                            (b.mouseWheel.scrollAmount = b.mouseWheelPixels ? b.mouseWheelPixels : b.mouseWheel.scrollAmount),
                            (b.mouseWheel.normalizeDelta = b.advanced.normalizeMouseWheelDelta ? b.advanced.normalizeMouseWheelDelta : b.mouseWheel.normalizeDelta),
                            (b.scrollButtons.scrollType = q(b.scrollButtons.scrollType)),
                            n(b),
                            a(c).each(function () {
                                var c = a(this);
                                if (!c.data(d)) {
                                    c.data(d, {
                                        idx: ++g,
                                        opt: b,
                                        scrollRatio: { y: null, x: null },
                                        overflowed: null,
                                        contentReset: { y: null, x: null },
                                        bindEvents: !1,
                                        tweenRunning: !1,
                                        sequential: {},
                                        langDir: c.css("direction"),
                                        cbOffsets: null,
                                        trigger: null,
                                        poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } },
                                    });
                                    var e = c.data(d),
                                        f = e.opt,
                                        h = c.data("mcs-axis"),
                                        i = c.data("mcs-scrollbar-position"),
                                        j = c.data("mcs-theme");
                                    h && (f.axis = h),
                                        i && (f.scrollbarPosition = i),
                                        j && ((f.theme = j), n(f)),
                                        r.call(this),
                                        e && f.callbacks.onCreate && "function" == typeof f.callbacks.onCreate && f.callbacks.onCreate.call(this),
                                        a("#mCSB_" + e.idx + "_container img:not(." + k[2] + ")").addClass(k[2]),
                                        l.update.call(null, c);
                                }
                            })
                        );
                    },
                    update: function (b, c) {
                        var e = b || m.call(this);
                        return a(e).each(function () {
                            var b = a(this);
                            if (b.data(d)) {
                                var e = b.data(d),
                                    f = e.opt,
                                    g = a("#mCSB_" + e.idx + "_container"),
                                    h = a("#mCSB_" + e.idx),
                                    i = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")];
                                if (!g.length) return;
                                e.tweenRunning && U(b),
                                    c && e && f.callbacks.onBeforeUpdate && "function" == typeof f.callbacks.onBeforeUpdate && f.callbacks.onBeforeUpdate.call(this),
                                    b.hasClass(k[3]) && b.removeClass(k[3]),
                                    b.hasClass(k[4]) && b.removeClass(k[4]),
                                    h.css("max-height", "none"),
                                    h.height() !== b.height() && h.css("max-height", b.height()),
                                    t.call(this),
                                    "y" === f.axis || f.advanced.autoExpandHorizontalScroll || g.css("width", s(g)),
                                    (e.overflowed = y.call(this)),
                                    C.call(this),
                                    f.autoDraggerLength && v.call(this),
                                    w.call(this),
                                    A.call(this);
                                var j = [Math.abs(g[0].offsetTop), Math.abs(g[0].offsetLeft)];
                                "x" !== f.axis &&
                                    (e.overflowed[0]
                                        ? i[0].height() > i[0].parent().height()
                                            ? z.call(this)
                                            : (V(b, j[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), (e.contentReset.y = null))
                                        : (z.call(this), "y" === f.axis ? B.call(this) : "yx" === f.axis && e.overflowed[1] && V(b, j[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))),
                                    "y" !== f.axis &&
                                        (e.overflowed[1]
                                            ? i[1].width() > i[1].parent().width()
                                                ? z.call(this)
                                                : (V(b, j[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), (e.contentReset.x = null))
                                            : (z.call(this), "x" === f.axis ? B.call(this) : "yx" === f.axis && e.overflowed[0] && V(b, j[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))),
                                    c &&
                                        e &&
                                        (2 === c && f.callbacks.onImageLoad && "function" == typeof f.callbacks.onImageLoad
                                            ? f.callbacks.onImageLoad.call(this)
                                            : 3 === c && f.callbacks.onSelectorChange && "function" == typeof f.callbacks.onSelectorChange
                                            ? f.callbacks.onSelectorChange.call(this)
                                            : f.callbacks.onUpdate && "function" == typeof f.callbacks.onUpdate && f.callbacks.onUpdate.call(this)),
                                    S.call(this);
                            }
                        });
                    },
                    scrollTo: function (b, c) {
                        if ("undefined" != typeof b && null != b) {
                            var e = m.call(this);
                            return a(e).each(function () {
                                var e = a(this);
                                if (e.data(d)) {
                                    var f = e.data(d),
                                        g = f.opt,
                                        h = { trigger: "external", scrollInertia: g.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                                        i = a.extend(!0, {}, h, c),
                                        j = Q.call(this, b),
                                        k = i.scrollInertia > 0 && i.scrollInertia < 17 ? 17 : i.scrollInertia;
                                    (j[0] = R.call(this, j[0], "y")),
                                        (j[1] = R.call(this, j[1], "x")),
                                        i.moveDragger && ((j[0] *= f.scrollRatio.y), (j[1] *= f.scrollRatio.x)),
                                        (i.dur = ca() ? 0 : k),
                                        setTimeout(function () {
                                            null !== j[0] && "undefined" != typeof j[0] && "x" !== g.axis && f.overflowed[0] && ((i.dir = "y"), (i.overwrite = "all"), V(e, j[0].toString(), i)),
                                                null !== j[1] && "undefined" != typeof j[1] && "y" !== g.axis && f.overflowed[1] && ((i.dir = "x"), (i.overwrite = "none"), V(e, j[1].toString(), i));
                                        }, i.timeout);
                                }
                            });
                        }
                    },
                    stop: function () {
                        var b = m.call(this);
                        return a(b).each(function () {
                            var b = a(this);
                            b.data(d) && U(b);
                        });
                    },
                    disable: function (b) {
                        var c = m.call(this);
                        return a(c).each(function () {
                            var c = a(this);
                            c.data(d) && (c.data(d), S.call(this, "remove"), B.call(this), b && z.call(this), C.call(this, !0), c.addClass(k[3]));
                        });
                    },
                    destroy: function () {
                        var b = m.call(this);
                        return a(b).each(function () {
                            var e = a(this);
                            if (e.data(d)) {
                                var f = e.data(d),
                                    g = f.opt,
                                    h = a("#mCSB_" + f.idx),
                                    i = a("#mCSB_" + f.idx + "_container"),
                                    j = a(".mCSB_" + f.idx + "_scrollbar");
                                g.live && o(g.liveSelector || a(b).selector),
                                    S.call(this, "remove"),
                                    B.call(this),
                                    z.call(this),
                                    e.removeData(d),
                                    Z(this, "mcs"),
                                    j.remove(),
                                    i.find("img." + k[2]).removeClass(k[2]),
                                    h.replaceWith(i.contents()),
                                    e.removeClass(c + " _" + d + "_" + f.idx + " " + k[6] + " " + k[7] + " " + k[5] + " " + k[3]).addClass(k[4]);
                            }
                        });
                    },
                },
                m = function () {
                    return "object" != typeof a(this) || a(this).length < 1 ? e : this;
                },
                n = function (b) {
                    var c = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        d = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        e = ["minimal", "minimal-dark"],
                        f = ["minimal", "minimal-dark"],
                        g = ["minimal", "minimal-dark"];
                    (b.autoDraggerLength = a.inArray(b.theme, c) > -1 ? !1 : b.autoDraggerLength),
                        (b.autoExpandScrollbar = a.inArray(b.theme, d) > -1 ? !1 : b.autoExpandScrollbar),
                        (b.scrollButtons.enable = a.inArray(b.theme, e) > -1 ? !1 : b.scrollButtons.enable),
                        (b.autoHideScrollbar = a.inArray(b.theme, f) > -1 ? !0 : b.autoHideScrollbar),
                        (b.scrollbarPosition = a.inArray(b.theme, g) > -1 ? "outside" : b.scrollbarPosition);
                },
                o = function (a) {
                    h[a] && (clearTimeout(h[a]), Z(h, a));
                },
                p = function (a) {
                    return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y";
                },
                q = function (a) {
                    return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless";
                },
                r = function () {
                    var b = a(this),
                        e = b.data(d),
                        f = e.opt,
                        g = f.autoExpandScrollbar ? " " + k[1] + "_expand" : "",
                        h = [
                            "<div id='mCSB_" +
                                e.idx +
                                "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                                e.idx +
                                "_scrollbar mCS-" +
                                f.theme +
                                " mCSB_scrollTools_vertical" +
                                g +
                                "'><div class='" +
                                k[12] +
                                "'><div id='mCSB_" +
                                e.idx +
                                "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                            "<div id='mCSB_" +
                                e.idx +
                                "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                                e.idx +
                                "_scrollbar mCS-" +
                                f.theme +
                                " mCSB_scrollTools_horizontal" +
                                g +
                                "'><div class='" +
                                k[12] +
                                "'><div id='mCSB_" +
                                e.idx +
                                "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                        ],
                        i = "yx" === f.axis ? "mCSB_vertical_horizontal" : "x" === f.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        j = "yx" === f.axis ? h[0] + h[1] : "x" === f.axis ? h[1] : h[0],
                        l = "yx" === f.axis ? "<div id='mCSB_" + e.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        m = f.autoHideScrollbar ? " " + k[6] : "",
                        n = "x" !== f.axis && "rtl" === e.langDir ? " " + k[7] : "";
                    f.setWidth && b.css("width", f.setWidth),
                        f.setHeight && b.css("height", f.setHeight),
                        (f.setLeft = "y" !== f.axis && "rtl" === e.langDir ? "989999px" : f.setLeft),
                        b
                            .addClass(c + " _" + d + "_" + e.idx + m + n)
                            .wrapInner(
                                "<div id='mCSB_" +
                                    e.idx +
                                    "' class='mCustomScrollBox mCS-" +
                                    f.theme +
                                    " " +
                                    i +
                                    "'><div id='mCSB_" +
                                    e.idx +
                                    "_container' class='mCSB_container' style='position:relative; top:" +
                                    f.setTop +
                                    "; left:" +
                                    f.setLeft +
                                    ";' dir=" +
                                    e.langDir +
                                    " /></div>"
                            );
                    var o = a("#mCSB_" + e.idx),
                        p = a("#mCSB_" + e.idx + "_container");
                    "y" === f.axis || f.advanced.autoExpandHorizontalScroll || p.css("width", s(p)),
                        "outside" === f.scrollbarPosition
                            ? ("static" === b.css("position") && b.css("position", "relative"), b.css("overflow", "visible"), o.addClass("mCSB_outside").after(j))
                            : (o.addClass("mCSB_inside").append(j), p.wrap(l)),
                        u.call(this);
                    var q = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")];
                    q[0].css("min-height", q[0].height()), q[1].css("min-width", q[1].width());
                },
                s = function (b) {
                    var c = [
                            b[0].scrollWidth,
                            Math.max.apply(
                                Math,
                                b
                                    .children()
                                    .map(function () {
                                        return a(this).outerWidth(!0);
                                    })
                                    .get()
                            ),
                        ],
                        d = b.parent().width();
                    return c[0] > d ? c[0] : c[1] > d ? c[1] : "100%";
                },
                t = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = a("#mCSB_" + c.idx + "_container");
                    if (e.advanced.autoExpandHorizontalScroll && "y" !== e.axis) {
                        f.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });
                        var g = Math.ceil(f[0].scrollWidth);
                        3 === e.advanced.autoExpandHorizontalScroll || (2 !== e.advanced.autoExpandHorizontalScroll && g > f.parent().width())
                            ? f.css({ width: g, "min-width": "100%", "overflow-x": "inherit" })
                            : f
                                  .css({ "overflow-x": "inherit", position: "absolute" })
                                  .wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
                                  .css({ width: Math.ceil(f[0].getBoundingClientRect().right + 0.4) - Math.floor(f[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" })
                                  .unwrap();
                    }
                },
                u = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = a(".mCSB_" + c.idx + "_scrollbar:first"),
                        g = aa(e.scrollButtons.tabindex) ? "tabindex='" + e.scrollButtons.tabindex + "'" : "",
                        h = [
                            "<a href='#' class='" + k[13] + "' oncontextmenu='return false;' " + g + " />",
                            "<a href='#' class='" + k[14] + "' oncontextmenu='return false;' " + g + " />",
                            "<a href='#' class='" + k[15] + "' oncontextmenu='return false;' " + g + " />",
                            "<a href='#' class='" + k[16] + "' oncontextmenu='return false;' " + g + " />",
                        ],
                        i = ["x" === e.axis ? h[2] : h[0], "x" === e.axis ? h[3] : h[1], h[2], h[3]];
                    e.scrollButtons.enable && f.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3]);
                },
                v = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = a("#mCSB_" + c.idx),
                        f = a("#mCSB_" + c.idx + "_container"),
                        g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
                        h = [e.height() / f.outerHeight(!1), e.width() / f.outerWidth(!1)],
                        j = [parseInt(g[0].css("min-height")), Math.round(h[0] * g[0].parent().height()), parseInt(g[1].css("min-width")), Math.round(h[1] * g[1].parent().width())],
                        k = i && j[1] < j[0] ? j[0] : j[1],
                        l = i && j[3] < j[2] ? j[2] : j[3];
                    g[0]
                        .css({ height: k, "max-height": g[0].parent().height() - 10 })
                        .find(".mCSB_dragger_bar")
                        .css({ "line-height": j[0] + "px" }),
                        g[1].css({ width: l, "max-width": g[1].parent().width() - 10 });
                },
                w = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = a("#mCSB_" + c.idx),
                        f = a("#mCSB_" + c.idx + "_container"),
                        g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
                        h = [f.outerHeight(!1) - e.height(), f.outerWidth(!1) - e.width()],
                        i = [h[0] / (g[0].parent().height() - g[0].height()), h[1] / (g[1].parent().width() - g[1].width())];
                    c.scrollRatio = { y: i[0], x: i[1] };
                },
                x = function (a, b, c) {
                    var d = c ? k[0] + "_expanded" : "",
                        e = a.closest(".mCSB_scrollTools");
                    "active" === b
                        ? (a.toggleClass(k[0] + " " + d), e.toggleClass(k[1]), (a[0]._draggable = a[0]._draggable ? 0 : 1))
                        : a[0]._draggable || ("hide" === b ? (a.removeClass(k[0]), e.removeClass(k[1])) : (a.addClass(k[0]), e.addClass(k[1])));
                },
                y = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = a("#mCSB_" + c.idx),
                        f = a("#mCSB_" + c.idx + "_container"),
                        g = null == c.overflowed ? f.height() : f.outerHeight(!1),
                        h = null == c.overflowed ? f.width() : f.outerWidth(!1),
                        i = f[0].scrollHeight,
                        j = f[0].scrollWidth;
                    return i > g && (g = i), j > h && (h = j), [g > e.height(), h > e.width()];
                },
                z = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = a("#mCSB_" + c.idx),
                        g = a("#mCSB_" + c.idx + "_container"),
                        h = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                    if ((U(b), (("x" !== e.axis && !c.overflowed[0]) || ("y" === e.axis && c.overflowed[0])) && (h[0].add(g).css("top", 0), V(b, "_resetY")), ("y" !== e.axis && !c.overflowed[1]) || ("x" === e.axis && c.overflowed[1]))) {
                        var i = (dx = 0);
                        "rtl" === c.langDir && ((i = f.width() - g.outerWidth(!1)), (dx = Math.abs(i / c.scrollRatio.x))), g.css("left", i), h[1].css("left", dx), V(b, "_resetX");
                    }
                },
                A = function () {
                    function b() {
                        g = setTimeout(function () {
                            a.event.special.mousewheel ? (clearTimeout(g), H.call(c[0])) : b();
                        }, 100);
                    }
                    var c = a(this),
                        e = c.data(d),
                        f = e.opt;
                    if (!e.bindEvents) {
                        if ((E.call(this), f.contentTouchScroll && F.call(this), G.call(this), f.mouseWheel.enable)) {
                            var g;
                            b();
                        }
                        K.call(this), M.call(this), f.advanced.autoScrollOnFocus && L.call(this), f.scrollButtons.enable && N.call(this), f.keyboard.enable && O.call(this), (e.bindEvents = !0);
                    }
                },
                B = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = d + "_" + c.idx,
                        g = ".mCSB_" + c.idx + "_scrollbar",
                        h = a("#mCSB_" + c.idx + ",#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper," + g + " ." + k[12] + ",#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal," + g + ">a"),
                        i = a("#mCSB_" + c.idx + "_container");
                    e.advanced.releaseDraggableSelectors && h.add(a(e.advanced.releaseDraggableSelectors)),
                        e.advanced.extraDraggableSelectors && h.add(a(e.advanced.extraDraggableSelectors)),
                        c.bindEvents &&
                            (a(document)
                                .add(a(!I() || top.document))
                                .unbind("." + f),
                            h.each(function () {
                                a(this).unbind("." + f);
                            }),
                            clearTimeout(b[0]._focusTimeout),
                            Z(b[0], "_focusTimeout"),
                            clearTimeout(c.sequential.step),
                            Z(c.sequential, "step"),
                            clearTimeout(i[0].onCompleteTimeout),
                            Z(i[0], "onCompleteTimeout"),
                            (c.bindEvents = !1));
                },
                C = function (b) {
                    var c = a(this),
                        e = c.data(d),
                        f = e.opt,
                        g = a("#mCSB_" + e.idx + "_container_wrapper"),
                        h = g.length ? g : a("#mCSB_" + e.idx + "_container"),
                        i = [a("#mCSB_" + e.idx + "_scrollbar_vertical"), a("#mCSB_" + e.idx + "_scrollbar_horizontal")],
                        j = [i[0].find(".mCSB_dragger"), i[1].find(".mCSB_dragger")];
                    "x" !== f.axis &&
                        (e.overflowed[0] && !b
                            ? (i[0].add(j[0]).add(i[0].children("a")).css("display", "block"), h.removeClass(k[8] + " " + k[10]))
                            : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[0].css("display", "none"), h.removeClass(k[10])) : (i[0].css("display", "none"), h.addClass(k[10])), h.addClass(k[8]))),
                        "y" !== f.axis &&
                            (e.overflowed[1] && !b
                                ? (i[1].add(j[1]).add(i[1].children("a")).css("display", "block"), h.removeClass(k[9] + " " + k[11]))
                                : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[1].css("display", "none"), h.removeClass(k[11])) : (i[1].css("display", "none"), h.addClass(k[11])), h.addClass(k[9]))),
                        e.overflowed[0] || e.overflowed[1] ? c.removeClass(k[5]) : c.addClass(k[5]);
                },
                D = function (b) {
                    var c = b.type,
                        d = b.target.ownerDocument !== document ? [a(frameElement).offset().top, a(frameElement).offset().left] : null,
                        e = I() && b.target.ownerDocument !== top.document ? [a(b.view.frameElement).offset().top, a(b.view.frameElement).offset().left] : [0, 0];
                    switch (c) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return d ? [b.originalEvent.pageY - d[0] + e[0], b.originalEvent.pageX - d[1] + e[1], !1] : [b.originalEvent.pageY, b.originalEvent.pageX, !1];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var f = b.originalEvent.touches[0] || b.originalEvent.changedTouches[0],
                                g = b.originalEvent.touches.length || b.originalEvent.changedTouches.length;
                            return b.target.ownerDocument !== document ? [f.screenY, f.screenX, g > 1] : [f.pageY, f.pageX, g > 1];
                        default:
                            return d ? [b.pageY - d[0] + e[0], b.pageX - d[1] + e[1], !1] : [b.pageY, b.pageX, !1];
                    }
                },
                E = function () {
                    function b(a) {
                        var b = o.find("iframe");
                        if (b.length) {
                            var c = a ? "auto" : "none";
                            b.css("pointer-events", c);
                        }
                    }
                    function c(a, b, c, d) {
                        if (((o[0].idleTimer = l.scrollInertia < 233 ? 250 : 0), e.attr("id") === n[1]))
                            var f = "x",
                                g = (e[0].offsetLeft - b + d) * k.scrollRatio.x;
                        else
                            var f = "y",
                                g = (e[0].offsetTop - a + c) * k.scrollRatio.y;
                        V(h, g.toString(), { dir: f, drag: !0 });
                    }
                    var e,
                        f,
                        g,
                        h = a(this),
                        k = h.data(d),
                        l = k.opt,
                        m = d + "_" + k.idx,
                        n = ["mCSB_" + k.idx + "_dragger_vertical", "mCSB_" + k.idx + "_dragger_horizontal"],
                        o = a("#mCSB_" + k.idx + "_container"),
                        p = a("#" + n[0] + ",#" + n[1]),
                        q = l.advanced.releaseDraggableSelectors ? p.add(a(l.advanced.releaseDraggableSelectors)) : p,
                        r = l.advanced.extraDraggableSelectors ? a(!I() || top.document).add(a(l.advanced.extraDraggableSelectors)) : a(!I() || top.document);
                    p
                        .bind("mousedown." + m + " touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function (c) {
                            if ((c.stopImmediatePropagation(), c.preventDefault(), $(c))) {
                                (j = !0),
                                    i &&
                                        (document.onselectstart = function () {
                                            return !1;
                                        }),
                                    b(!1),
                                    U(h),
                                    (e = a(this));
                                var d = e.offset(),
                                    k = D(c)[0] - d.top,
                                    m = D(c)[1] - d.left,
                                    n = e.height() + d.top,
                                    o = e.width() + d.left;
                                n > k && k > 0 && o > m && m > 0 && ((f = k), (g = m)), x(e, "active", l.autoExpandScrollbar);
                            }
                        })
                        .bind("touchmove." + m, function (a) {
                            a.stopImmediatePropagation(), a.preventDefault();
                            var b = e.offset(),
                                d = D(a)[0] - b.top,
                                h = D(a)[1] - b.left;
                            c(f, g, d, h);
                        }),
                        a(document)
                            .add(r)
                            .bind("mousemove." + m + " pointermove." + m + " MSPointerMove." + m, function (a) {
                                if (e) {
                                    var b = e.offset(),
                                        d = D(a)[0] - b.top,
                                        h = D(a)[1] - b.left;
                                    if (f === d && g === h) return;
                                    c(f, g, d, h);
                                }
                            })
                            .add(q)
                            .bind("mouseup." + m + " touchend." + m + " pointerup." + m + " MSPointerUp." + m, function (a) {
                                e && (x(e, "active", l.autoExpandScrollbar), (e = null)), (j = !1), i && (document.onselectstart = null), b(!0);
                            });
                },
                F = function () {
                    function c(a) {
                        if (!_(a) || j || D(a)[2]) return void (b = 0);
                        (b = 1), (w = 0), (x = 0), (k = 1), y.removeClass("mCS_touch_action");
                        var c = E.offset();
                        (l = D(a)[0] - c.top), (m = D(a)[1] - c.left), (L = [D(a)[0], D(a)[1]]);
                    }
                    function e(a) {
                        if (_(a) && !j && !D(a)[2] && (A.documentTouchScroll || a.preventDefault(), a.stopImmediatePropagation(), (!x || w) && k)) {
                            q = X();
                            var b = C.offset(),
                                c = D(a)[0] - b.top,
                                d = D(a)[1] - b.left,
                                e = "mcsLinearOut";
                            if ((G.push(c), H.push(d), (L[2] = Math.abs(D(a)[0] - L[0])), (L[3] = Math.abs(D(a)[1] - L[1])), z.overflowed[0]))
                                var f = F[0].parent().height() - F[0].height(),
                                    g = l - c > 0 && c - l > -(f * z.scrollRatio.y) && (2 * L[3] < L[2] || "yx" === A.axis);
                            if (z.overflowed[1])
                                var h = F[1].parent().width() - F[1].width(),
                                    n = m - d > 0 && d - m > -(h * z.scrollRatio.x) && (2 * L[2] < L[3] || "yx" === A.axis);
                            g || n ? (O || a.preventDefault(), (w = 1)) : ((x = 1), y.addClass("mCS_touch_action")),
                                O && a.preventDefault(),
                                (u = "yx" === A.axis ? [l - c, m - d] : "x" === A.axis ? [null, m - d] : [l - c, null]),
                                (E[0].idleTimer = 250),
                                z.overflowed[0] && i(u[0], J, e, "y", "all", !0),
                                z.overflowed[1] && i(u[1], J, e, "x", K, !0);
                        }
                    }
                    function f(a) {
                        if (!_(a) || j || D(a)[2]) return void (b = 0);
                        (b = 1), a.stopImmediatePropagation(), U(y), (p = X());
                        var c = C.offset();
                        (n = D(a)[0] - c.top), (o = D(a)[1] - c.left), (G = []), (H = []);
                    }
                    function g(a) {
                        if (_(a) && !j && !D(a)[2]) {
                            (k = 0), a.stopImmediatePropagation(), (w = 0), (x = 0), (r = X());
                            var b = C.offset(),
                                c = D(a)[0] - b.top,
                                d = D(a)[1] - b.left;
                            if (!(r - q > 30)) {
                                t = 1e3 / (r - p);
                                var e = "mcsEaseOut",
                                    f = 2.5 > t,
                                    g = f ? [G[G.length - 2], H[H.length - 2]] : [0, 0];
                                s = f ? [c - g[0], d - g[1]] : [c - n, d - o];
                                var l = [Math.abs(s[0]), Math.abs(s[1])];
                                t = f ? [Math.abs(s[0] / 4), Math.abs(s[1] / 4)] : [t, t];
                                var m = [Math.abs(E[0].offsetTop) - s[0] * h(l[0] / t[0], t[0]), Math.abs(E[0].offsetLeft) - s[1] * h(l[1] / t[1], t[1])];
                                (u = "yx" === A.axis ? [m[0], m[1]] : "x" === A.axis ? [null, m[1]] : [m[0], null]), (v = [4 * l[0] + A.scrollInertia, 4 * l[1] + A.scrollInertia]);
                                var y = parseInt(A.contentTouchScroll) || 0;
                                (u[0] = l[0] > y ? u[0] : 0), (u[1] = l[1] > y ? u[1] : 0), z.overflowed[0] && i(u[0], v[0], e, "y", K, !1), z.overflowed[1] && i(u[1], v[1], e, "x", K, !1);
                            }
                        }
                    }
                    function h(a, b) {
                        var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
                        return a > 90 ? (b > 4 ? c[0] : c[3]) : a > 60 ? (b > 3 ? c[3] : c[2]) : a > 30 ? (b > 8 ? c[1] : b > 6 ? c[0] : b > 4 ? b : c[2]) : b > 8 ? b : c[3];
                    }
                    function i(a, b, c, d, e, f) {
                        a && V(y, a.toString(), { dur: b, scrollEasing: c, dir: d, overwrite: e, drag: f });
                    }
                    var k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u,
                        v,
                        w,
                        x,
                        y = a(this),
                        z = y.data(d),
                        A = z.opt,
                        B = d + "_" + z.idx,
                        C = a("#mCSB_" + z.idx),
                        E = a("#mCSB_" + z.idx + "_container"),
                        F = [a("#mCSB_" + z.idx + "_dragger_vertical"), a("#mCSB_" + z.idx + "_dragger_horizontal")],
                        G = [],
                        H = [],
                        J = 0,
                        K = "yx" === A.axis ? "none" : "all",
                        L = [],
                        M = E.find("iframe"),
                        N = ["touchstart." + B + " pointerdown." + B + " MSPointerDown." + B, "touchmove." + B + " pointermove." + B + " MSPointerMove." + B, "touchend." + B + " pointerup." + B + " MSPointerUp." + B],
                        O = void 0 !== document.body.style.touchAction;
                    E.bind(N[0], function (a) {
                        c(a);
                    }).bind(N[1], function (a) {
                        e(a);
                    }),
                        C.bind(N[0], function (a) {
                            f(a);
                        }).bind(N[2], function (a) {
                            g(a);
                        }),
                        M.length &&
                            M.each(function () {
                                a(this).load(function () {
                                    I(this) &&
                                        a(this.contentDocument || this.contentWindow.document)
                                            .bind(N[0], function (a) {
                                                c(a), f(a);
                                            })
                                            .bind(N[1], function (a) {
                                                e(a);
                                            })
                                            .bind(N[2], function (a) {
                                                g(a);
                                            });
                                });
                            });
                },
                G = function () {
                    function c() {
                        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
                    }
                    function e(a, b, c) {
                        (k.type = c && f ? "stepped" : "stepless"), (k.scrollAmount = 10), P(g, a, b, "mcsLinearOut", c ? 60 : null);
                    }
                    var f,
                        g = a(this),
                        h = g.data(d),
                        i = h.opt,
                        k = h.sequential,
                        l = d + "_" + h.idx,
                        m = a("#mCSB_" + h.idx + "_container"),
                        n = m.parent();
                    m.bind("mousedown." + l, function (a) {
                        b || f || ((f = 1), (j = !0));
                    })
                        .add(document)
                        .bind("mousemove." + l, function (a) {
                            if (!b && f && c()) {
                                var d = m.offset(),
                                    g = D(a)[0] - d.top + m[0].offsetTop,
                                    j = D(a)[1] - d.left + m[0].offsetLeft;
                                g > 0 && g < n.height() && j > 0 && j < n.width()
                                    ? k.step && e("off", null, "stepped")
                                    : ("x" !== i.axis && h.overflowed[0] && (0 > g ? e("on", 38) : g > n.height() && e("on", 40)), "y" !== i.axis && h.overflowed[1] && (0 > j ? e("on", 37) : j > n.width() && e("on", 39)));
                            }
                        })
                        .bind("mouseup." + l + " dragend." + l, function (a) {
                            b || (f && ((f = 0), e("off", null)), (j = !1));
                        });
                },
                H = function () {
                    function b(b, d) {
                        if ((U(c), !J(c, b.target))) {
                            var g = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : i && b.deltaFactor < 100 ? 100 : b.deltaFactor || 100,
                                k = f.scrollInertia;
                            if ("x" === f.axis || "x" === f.mouseWheel.axis)
                                var l = "x",
                                    m = [Math.round(g * e.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)],
                                    n = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= h.width() ? 0.9 * h.width() : m[0],
                                    o = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetLeft),
                                    p = j[1][0].offsetLeft,
                                    q = j[1].parent().width() - j[1].width(),
                                    r = b.deltaX || b.deltaY || d;
                            else
                                var l = "y",
                                    m = [Math.round(g * e.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)],
                                    n = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= h.height() ? 0.9 * h.height() : m[0],
                                    o = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetTop),
                                    p = j[0][0].offsetTop,
                                    q = j[0].parent().height() - j[0].height(),
                                    r = b.deltaY || d;
                            ("y" === l && !e.overflowed[0]) ||
                                ("x" === l && !e.overflowed[1]) ||
                                ((f.mouseWheel.invert || b.webkitDirectionInvertedFromDevice) && (r = -r),
                                f.mouseWheel.normalizeDelta && (r = 0 > r ? -1 : 1),
                                ((r > 0 && 0 !== p) || (0 > r && p !== q) || f.mouseWheel.preventDefault) && (b.stopImmediatePropagation(), b.preventDefault()),
                                b.deltaFactor < 2 && !f.mouseWheel.normalizeDelta && ((n = b.deltaFactor), (k = 17)),
                                V(c, (o - r * n).toString(), { dir: l, dur: k }));
                        }
                    }
                    if (a(this).data(d)) {
                        var c = a(this),
                            e = c.data(d),
                            f = e.opt,
                            g = d + "_" + e.idx,
                            h = a("#mCSB_" + e.idx),
                            j = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")],
                            k = a("#mCSB_" + e.idx + "_container").find("iframe");
                        k.length &&
                            k.each(function () {
                                a(this).load(function () {
                                    I(this) &&
                                        a(this.contentDocument || this.contentWindow.document).bind("mousewheel." + g, function (a, c) {
                                            b(a, c);
                                        });
                                });
                            }),
                            h.bind("mousewheel." + g, function (a, c) {
                                b(a, c);
                            });
                    }
                },
                I = function (a) {
                    var b = null;
                    if (a) {
                        try {
                            var c = a.contentDocument || a.contentWindow.document;
                            b = c.body.innerHTML;
                        } catch (d) {}
                        return null !== b;
                    }
                    try {
                        var c = top.document;
                        b = c.body.innerHTML;
                    } catch (d) {}
                    return null !== b;
                },
                J = function (b, c) {
                    var e = c.nodeName.toLowerCase(),
                        f = b.data(d).opt.mouseWheel.disableOver,
                        g = ["select", "textarea"];
                    return a.inArray(e, f) > -1 && !(a.inArray(e, g) > -1 && !a(c).is(":focus"));
                },
                K = function () {
                    var b,
                        c = a(this),
                        e = c.data(d),
                        f = d + "_" + e.idx,
                        g = a("#mCSB_" + e.idx + "_container"),
                        h = g.parent(),
                        i = a(".mCSB_" + e.idx + "_scrollbar ." + k[12]);
                    i.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function (c) {
                        (j = !0), a(c.target).hasClass("mCSB_dragger") || (b = 1);
                    })
                        .bind("touchend." + f + " pointerup." + f + " MSPointerUp." + f, function (a) {
                            j = !1;
                        })
                        .bind("click." + f, function (d) {
                            if (b && ((b = 0), a(d.target).hasClass(k[12]) || a(d.target).hasClass("mCSB_draggerRail"))) {
                                U(c);
                                var f = a(this),
                                    i = f.find(".mCSB_dragger");
                                if (f.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                    if (!e.overflowed[1]) return;
                                    var j = "x",
                                        l = d.pageX > i.offset().left ? -1 : 1,
                                        m = Math.abs(g[0].offsetLeft) - 0.9 * l * h.width();
                                } else {
                                    if (!e.overflowed[0]) return;
                                    var j = "y",
                                        l = d.pageY > i.offset().top ? -1 : 1,
                                        m = Math.abs(g[0].offsetTop) - 0.9 * l * h.height();
                                }
                                V(c, m.toString(), { dir: j, scrollEasing: "mcsEaseInOut" });
                            }
                        });
                },
                L = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = d + "_" + c.idx,
                        g = a("#mCSB_" + c.idx + "_container"),
                        h = g.parent();
                    g.bind("focusin." + f, function (c) {
                        var d = a(document.activeElement),
                            f = g.find(".mCustomScrollBox").length,
                            i = 0;
                        d.is(e.advanced.autoScrollOnFocus) &&
                            (U(b),
                            clearTimeout(b[0]._focusTimeout),
                            (b[0]._focusTimer = f ? (i + 17) * f : 0),
                            (b[0]._focusTimeout = setTimeout(function () {
                                var a = [ba(d)[0], ba(d)[1]],
                                    c = [g[0].offsetTop, g[0].offsetLeft],
                                    f = [c[0] + a[0] >= 0 && c[0] + a[0] < h.height() - d.outerHeight(!1), c[1] + a[1] >= 0 && c[0] + a[1] < h.width() - d.outerWidth(!1)],
                                    j = "yx" !== e.axis || f[0] || f[1] ? "all" : "none";
                                "x" === e.axis || f[0] || V(b, a[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: j, dur: i }),
                                    "y" === e.axis || f[1] || V(b, a[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: j, dur: i });
                            }, b[0]._focusTimer)));
                    });
                },
                M = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = d + "_" + c.idx,
                        f = a("#mCSB_" + c.idx + "_container").parent();
                    f.bind("scroll." + e, function (b) {
                        (0 !== f.scrollTop() || 0 !== f.scrollLeft()) && a(".mCSB_" + c.idx + "_scrollbar").css("visibility", "hidden");
                    });
                },
                N = function () {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = c.sequential,
                        g = d + "_" + c.idx,
                        h = ".mCSB_" + c.idx + "_scrollbar",
                        i = a(h + ">a");
                    i.bind(
                        "mousedown." +
                            g +
                            " touchstart." +
                            g +
                            " pointerdown." +
                            g +
                            " MSPointerDown." +
                            g +
                            " mouseup." +
                            g +
                            " touchend." +
                            g +
                            " pointerup." +
                            g +
                            " MSPointerUp." +
                            g +
                            " mouseout." +
                            g +
                            " pointerout." +
                            g +
                            " MSPointerOut." +
                            g +
                            " click." +
                            g,
                        function (d) {
                            function g(a, c) {
                                (f.scrollAmount = e.scrollButtons.scrollAmount), P(b, a, c);
                            }
                            if ((d.preventDefault(), $(d))) {
                                var h = a(this).attr("class");
                                switch (((f.type = e.scrollButtons.scrollType), d.type)) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === f.type) return;
                                        (j = !0), (c.tweenRunning = !1), g("on", h);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === f.type) return;
                                        (j = !1), f.dir && g("off", h);
                                        break;
                                    case "click":
                                        if ("stepped" !== f.type || c.tweenRunning) return;
                                        g("on", h);
                                }
                            }
                        }
                    );
                },
                O = function () {
                    function b(b) {
                        function d(a, b) {
                            (g.type = f.keyboard.scrollType), (g.scrollAmount = f.keyboard.scrollAmount), ("stepped" === g.type && e.tweenRunning) || P(c, a, b);
                        }
                        switch (b.type) {
                            case "blur":
                                e.tweenRunning && g.dir && d("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var h = b.keyCode ? b.keyCode : b.which,
                                    i = "on";
                                if (("x" !== f.axis && (38 === h || 40 === h)) || ("y" !== f.axis && (37 === h || 39 === h))) {
                                    if (((38 === h || 40 === h) && !e.overflowed[0]) || ((37 === h || 39 === h) && !e.overflowed[1])) return;
                                    "keyup" === b.type && (i = "off"), a(document.activeElement).is(l) || (b.preventDefault(), b.stopImmediatePropagation(), d(i, h));
                                } else if (33 === h || 34 === h) {
                                    if (((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), b.stopImmediatePropagation()), "keyup" === b.type)) {
                                        U(c);
                                        var m = 34 === h ? -1 : 1;
                                        if ("x" === f.axis || ("yx" === f.axis && e.overflowed[1] && !e.overflowed[0]))
                                            var n = "x",
                                                o = Math.abs(j[0].offsetLeft) - 0.9 * m * k.width();
                                        else
                                            var n = "y",
                                                o = Math.abs(j[0].offsetTop) - 0.9 * m * k.height();
                                        V(c, o.toString(), { dir: n, scrollEasing: "mcsEaseInOut" });
                                    }
                                } else if ((35 === h || 36 === h) && !a(document.activeElement).is(l) && ((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), b.stopImmediatePropagation()), "keyup" === b.type)) {
                                    if ("x" === f.axis || ("yx" === f.axis && e.overflowed[1] && !e.overflowed[0]))
                                        var n = "x",
                                            o = 35 === h ? Math.abs(k.width() - j.outerWidth(!1)) : 0;
                                    else
                                        var n = "y",
                                            o = 35 === h ? Math.abs(k.height() - j.outerHeight(!1)) : 0;
                                    V(c, o.toString(), { dir: n, scrollEasing: "mcsEaseInOut" });
                                }
                        }
                    }
                    var c = a(this),
                        e = c.data(d),
                        f = e.opt,
                        g = e.sequential,
                        h = d + "_" + e.idx,
                        i = a("#mCSB_" + e.idx),
                        j = a("#mCSB_" + e.idx + "_container"),
                        k = j.parent(),
                        l = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                        m = j.find("iframe"),
                        n = ["blur." + h + " keydown." + h + " keyup." + h];
                    m.length &&
                        m.each(function () {
                            a(this).load(function () {
                                I(this) &&
                                    a(this.contentDocument || this.contentWindow.document).bind(n[0], function (a) {
                                        b(a);
                                    });
                            });
                        }),
                        i.attr("tabindex", "0").bind(n[0], function (a) {
                            b(a);
                        });
                },
                P = function (b, c, e, f, g) {
                    function h(a) {
                        l.snapAmount && (m.scrollAmount = l.snapAmount instanceof Array ? ("x" === m.dir[0] ? l.snapAmount[1] : l.snapAmount[0]) : l.snapAmount);
                        var c = "stepped" !== m.type,
                            d = g ? g : a ? (c ? p / 1.5 : q) : 1e3 / 60,
                            e = a ? (c ? 7.5 : 40) : 2.5,
                            i = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)],
                            k = [j.scrollRatio.y > 10 ? 10 : j.scrollRatio.y, j.scrollRatio.x > 10 ? 10 : j.scrollRatio.x],
                            o = "x" === m.dir[0] ? i[1] + m.dir[1] * k[1] * e : i[0] + m.dir[1] * k[0] * e,
                            r = "x" === m.dir[0] ? i[1] + m.dir[1] * parseInt(m.scrollAmount) : i[0] + m.dir[1] * parseInt(m.scrollAmount),
                            s = "auto" !== m.scrollAmount ? r : o,
                            t = f ? f : a ? (c ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear",
                            u = a ? !0 : !1;
                        return (
                            a && 17 > d && (s = "x" === m.dir[0] ? i[1] : i[0]),
                            V(b, s.toString(), { dir: m.dir[0], scrollEasing: t, dur: d, onComplete: u }),
                            a
                                ? void (m.dir = !1)
                                : (clearTimeout(m.step),
                                  void (m.step = setTimeout(function () {
                                      h();
                                  }, d)))
                        );
                    }
                    function i() {
                        clearTimeout(m.step), Z(m, "step"), U(b);
                    }
                    var j = b.data(d),
                        l = j.opt,
                        m = j.sequential,
                        n = a("#mCSB_" + j.idx + "_container"),
                        o = "stepped" === m.type ? !0 : !1,
                        p = l.scrollInertia < 26 ? 26 : l.scrollInertia,
                        q = l.scrollInertia < 1 ? 17 : l.scrollInertia;
                    switch (c) {
                        case "on":
                            if (((m.dir = [e === k[16] || e === k[15] || 39 === e || 37 === e ? "x" : "y", e === k[13] || e === k[15] || 38 === e || 37 === e ? -1 : 1]), U(b), aa(e) && "stepped" === m.type)) return;
                            h(o);
                            break;
                        case "off":
                            i(), (o || (j.tweenRunning && m.dir)) && h(!0);
                    }
                },
                Q = function (b) {
                    var c = a(this).data(d).opt,
                        e = [];
                    return (
                        "function" == typeof b && (b = b()),
                        b instanceof Array ? (e = b.length > 1 ? [b[0], b[1]] : "x" === c.axis ? [null, b[0]] : [b[0], null]) : ((e[0] = b.y ? b.y : b.x || "x" === c.axis ? null : b), (e[1] = b.x ? b.x : b.y || "y" === c.axis ? null : b)),
                        "function" == typeof e[0] && (e[0] = e[0]()),
                        "function" == typeof e[1] && (e[1] = e[1]()),
                        e
                    );
                },
                R = function (b, c) {
                    if (null != b && "undefined" != typeof b) {
                        var e = a(this),
                            f = e.data(d),
                            g = f.opt,
                            h = a("#mCSB_" + f.idx + "_container"),
                            i = h.parent(),
                            j = typeof b;
                        c || (c = "x" === g.axis ? "x" : "y");
                        var k = "x" === c ? h.outerWidth(!1) : h.outerHeight(!1),
                            m = "x" === c ? h[0].offsetLeft : h[0].offsetTop,
                            n = "x" === c ? "left" : "top";
                        switch (j) {
                            case "function":
                                return b();
                            case "object":
                                var o = b.jquery ? b : a(b);
                                if (!o.length) return;
                                return "x" === c ? ba(o)[1] : ba(o)[0];
                            case "string":
                            case "number":
                                if (aa(b)) return Math.abs(b);
                                if (-1 !== b.indexOf("%")) return Math.abs((k * parseInt(b)) / 100);
                                if (-1 !== b.indexOf("-=")) return Math.abs(m - parseInt(b.split("-=")[1]));
                                if (-1 !== b.indexOf("+=")) {
                                    var p = m + parseInt(b.split("+=")[1]);
                                    return p >= 0 ? 0 : Math.abs(p);
                                }
                                if (-1 !== b.indexOf("px") && aa(b.split("px")[0])) return Math.abs(b.split("px")[0]);
                                if ("top" === b || "left" === b) return 0;
                                if ("bottom" === b) return Math.abs(i.height() - h.outerHeight(!1));
                                if ("right" === b) return Math.abs(i.width() - h.outerWidth(!1));
                                if ("first" === b || "last" === b) {
                                    var o = h.find(":" + b);
                                    return "x" === c ? ba(o)[1] : ba(o)[0];
                                }
                                return a(b).length ? ("x" === c ? ba(a(b))[1] : ba(a(b))[0]) : (h.css(n, b), void l.update.call(null, e[0]));
                        }
                    }
                },
                S = function (b) {
                    function c() {
                        return (
                            clearTimeout(m[0].autoUpdate),
                            0 === h.parents("html").length
                                ? void (h = null)
                                : void (m[0].autoUpdate = setTimeout(function () {
                                      return j.advanced.updateOnSelectorChange && ((i.poll.change.n = f()), i.poll.change.n !== i.poll.change.o)
                                          ? ((i.poll.change.o = i.poll.change.n), void g(3))
                                          : j.advanced.updateOnContentResize && ((i.poll.size.n = h[0].scrollHeight + h[0].scrollWidth + m[0].offsetHeight + h[0].offsetHeight + h[0].offsetWidth), i.poll.size.n !== i.poll.size.o)
                                          ? ((i.poll.size.o = i.poll.size.n), void g(1))
                                          : !j.advanced.updateOnImageLoad || ("auto" === j.advanced.updateOnImageLoad && "y" === j.axis) || ((i.poll.img.n = m.find("img").length), i.poll.img.n === i.poll.img.o)
                                          ? void ((j.advanced.updateOnSelectorChange || j.advanced.updateOnContentResize || j.advanced.updateOnImageLoad) && c())
                                          : ((i.poll.img.o = i.poll.img.n),
                                            void m.find("img").each(function () {
                                                e(this);
                                            }));
                                  }, j.advanced.autoUpdateTimeout))
                        );
                    }
                    function e(b) {
                        function c(a, b) {
                            return function () {
                                return b.apply(a, arguments);
                            };
                        }
                        function d() {
                            (this.onload = null), a(b).addClass(k[2]), g(2);
                        }
                        if (a(b).hasClass(k[2])) return void g();
                        var e = new Image();
                        (e.onload = c(e, d)), (e.src = b.src);
                    }
                    function f() {
                        j.advanced.updateOnSelectorChange === !0 && (j.advanced.updateOnSelectorChange = "*");
                        var a = 0,
                            b = m.find(j.advanced.updateOnSelectorChange);
                        return (
                            j.advanced.updateOnSelectorChange &&
                                b.length > 0 &&
                                b.each(function () {
                                    a += this.offsetHeight + this.offsetWidth;
                                }),
                            a
                        );
                    }
                    function g(a) {
                        clearTimeout(m[0].autoUpdate), l.update.call(null, h[0], a);
                    }
                    var h = a(this),
                        i = h.data(d),
                        j = i.opt,
                        m = a("#mCSB_" + i.idx + "_container");
                    return b ? (clearTimeout(m[0].autoUpdate), void Z(m[0], "autoUpdate")) : void c();
                },
                T = function (a, b, c) {
                    return Math.round(a / b) * b - c;
                },
                U = function (b) {
                    var c = b.data(d),
                        e = a("#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper,#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal");
                    e.each(function () {
                        Y.call(this);
                    });
                },
                V = function (b, c, e) {
                    function f(a) {
                        return i && j.callbacks[a] && "function" == typeof j.callbacks[a];
                    }
                    function g() {
                        return [j.callbacks.alwaysTriggerOffsets || u >= v[0] + y, j.callbacks.alwaysTriggerOffsets || -z >= u];
                    }
                    function h() {
                        var a = [n[0].offsetTop, n[0].offsetLeft],
                            c = [s[0].offsetTop, s[0].offsetLeft],
                            d = [n.outerHeight(!1), n.outerWidth(!1)],
                            f = [m.height(), m.width()];
                        b[0].mcs = {
                            content: n,
                            top: a[0],
                            left: a[1],
                            draggerTop: c[0],
                            draggerLeft: c[1],
                            topPct: Math.round((100 * Math.abs(a[0])) / (Math.abs(d[0]) - f[0])),
                            leftPct: Math.round((100 * Math.abs(a[1])) / (Math.abs(d[1]) - f[1])),
                            direction: e.dir,
                        };
                    }
                    var i = b.data(d),
                        j = i.opt,
                        k = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: j.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                        e = a.extend(k, e),
                        l = [e.dur, e.drag ? 0 : e.dur],
                        m = a("#mCSB_" + i.idx),
                        n = a("#mCSB_" + i.idx + "_container"),
                        o = n.parent(),
                        p = j.callbacks.onTotalScrollOffset ? Q.call(b, j.callbacks.onTotalScrollOffset) : [0, 0],
                        q = j.callbacks.onTotalScrollBackOffset ? Q.call(b, j.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (
                        ((i.trigger = e.trigger),
                        (0 !== o.scrollTop() || 0 !== o.scrollLeft()) && (a(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), o.scrollTop(0).scrollLeft(0)),
                        "_resetY" !== c || i.contentReset.y || (f("onOverflowYNone") && j.callbacks.onOverflowYNone.call(b[0]), (i.contentReset.y = 1)),
                        "_resetX" !== c || i.contentReset.x || (f("onOverflowXNone") && j.callbacks.onOverflowXNone.call(b[0]), (i.contentReset.x = 1)),
                        "_resetY" !== c && "_resetX" !== c)
                    ) {
                        if (
                            ((!i.contentReset.y && b[0].mcs) || !i.overflowed[0] || (f("onOverflowY") && j.callbacks.onOverflowY.call(b[0]), (i.contentReset.x = null)),
                            (!i.contentReset.x && b[0].mcs) || !i.overflowed[1] || (f("onOverflowX") && j.callbacks.onOverflowX.call(b[0]), (i.contentReset.x = null)),
                            j.snapAmount)
                        ) {
                            var r = j.snapAmount instanceof Array ? ("x" === e.dir ? j.snapAmount[1] : j.snapAmount[0]) : j.snapAmount;
                            c = T(c, r, j.snapOffset);
                        }
                        switch (e.dir) {
                            case "x":
                                var s = a("#mCSB_" + i.idx + "_dragger_horizontal"),
                                    t = "left",
                                    u = n[0].offsetLeft,
                                    v = [m.width() - n.outerWidth(!1), s.parent().width() - s.width()],
                                    w = [c, 0 === c ? 0 : c / i.scrollRatio.x],
                                    y = p[1],
                                    z = q[1],
                                    A = y > 0 ? y / i.scrollRatio.x : 0,
                                    B = z > 0 ? z / i.scrollRatio.x : 0;
                                break;
                            case "y":
                                var s = a("#mCSB_" + i.idx + "_dragger_vertical"),
                                    t = "top",
                                    u = n[0].offsetTop,
                                    v = [m.height() - n.outerHeight(!1), s.parent().height() - s.height()],
                                    w = [c, 0 === c ? 0 : c / i.scrollRatio.y],
                                    y = p[0],
                                    z = q[0],
                                    A = y > 0 ? y / i.scrollRatio.y : 0,
                                    B = z > 0 ? z / i.scrollRatio.y : 0;
                        }
                        w[1] < 0 || (0 === w[0] && 0 === w[1]) ? (w = [0, 0]) : w[1] >= v[1] ? (w = [v[0], v[1]]) : (w[0] = -w[0]),
                            b[0].mcs || (h(), f("onInit") && j.callbacks.onInit.call(b[0])),
                            clearTimeout(n[0].onCompleteTimeout),
                            W(s[0], t, Math.round(w[1]), l[1], e.scrollEasing),
                            (i.tweenRunning || !((0 === u && w[0] >= 0) || (u === v[0] && w[0] <= v[0]))) &&
                                W(n[0], t, Math.round(w[0]), l[0], e.scrollEasing, e.overwrite, {
                                    onStart: function () {
                                        e.callbacks && e.onStart && !i.tweenRunning && (f("onScrollStart") && (h(), j.callbacks.onScrollStart.call(b[0])), (i.tweenRunning = !0), x(s), (i.cbOffsets = g()));
                                    },
                                    onUpdate: function () {
                                        e.callbacks && e.onUpdate && f("whileScrolling") && (h(), j.callbacks.whileScrolling.call(b[0]));
                                    },
                                    onComplete: function () {
                                        if (e.callbacks && e.onComplete) {
                                            "yx" === j.axis && clearTimeout(n[0].onCompleteTimeout);
                                            var a = n[0].idleTimer || 0;
                                            n[0].onCompleteTimeout = setTimeout(function () {
                                                f("onScroll") && (h(), j.callbacks.onScroll.call(b[0])),
                                                    f("onTotalScroll") && w[1] >= v[1] - A && i.cbOffsets[0] && (h(), j.callbacks.onTotalScroll.call(b[0])),
                                                    f("onTotalScrollBack") && w[1] <= B && i.cbOffsets[1] && (h(), j.callbacks.onTotalScrollBack.call(b[0])),
                                                    (i.tweenRunning = !1),
                                                    (n[0].idleTimer = 0),
                                                    x(s, "hide");
                                            }, a);
                                        }
                                    },
                                });
                    }
                },
                W = function (a, b, c, d, e, f, g) {
                    function h() {
                        v.stop || (s || o.call(), (s = X() - r), i(), s >= v.time && ((v.time = s > v.time ? s + m - (s - v.time) : s + m - 1), v.time < s + 1 && (v.time = s + 1)), v.time < d ? (v.id = n(h)) : q.call());
                    }
                    function i() {
                        d > 0 ? ((v.currVal = l(v.time, t, w, d, e)), (u[b] = Math.round(v.currVal) + "px")) : (u[b] = c + "px"), p.call();
                    }
                    function j() {
                        (m = 1e3 / 60),
                            (v.time = s + m),
                            (n = window.requestAnimationFrame
                                ? window.requestAnimationFrame
                                : function (a) {
                                      return i(), setTimeout(a, 0.01);
                                  }),
                            (v.id = n(h));
                    }
                    function k() {
                        null != v.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(v.id) : clearTimeout(v.id), (v.id = null));
                    }
                    function l(a, b, c, d, e) {
                        switch (e) {
                            case "linear":
                            case "mcsLinear":
                                return (c * a) / d + b;
                            case "mcsLinearOut":
                                return (a /= d), a--, c * Math.sqrt(1 - a * a) + b;
                            case "easeInOutSmooth":
                                return (a /= d / 2), 1 > a ? (c / 2) * a * a + b : (a--, (-c / 2) * (a * (a - 2) - 1) + b);
                            case "easeInOutStrong":
                                return (a /= d / 2), 1 > a ? (c / 2) * Math.pow(2, 10 * (a - 1)) + b : (a--, (c / 2) * (-Math.pow(2, -10 * a) + 2) + b);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return (a /= d / 2), 1 > a ? (c / 2) * a * a * a + b : ((a -= 2), (c / 2) * (a * a * a + 2) + b);
                            case "easeOutSmooth":
                                return (a /= d), a--, -c * (a * a * a * a - 1) + b;
                            case "easeOutStrong":
                                return c * (-Math.pow(2, (-10 * a) / d) + 1) + b;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var f = (a /= d) * a,
                                    g = f * a;
                                return b + c * (0.499999999999997 * g * f + -2.5 * f * f + 5.5 * g + -6.5 * f + 4 * a);
                        }
                    }
                    a._mTween || (a._mTween = { top: {}, left: {} });
                    var m,
                        n,
                        g = g || {},
                        o = g.onStart || function () {},
                        p = g.onUpdate || function () {},
                        q = g.onComplete || function () {},
                        r = X(),
                        s = 0,
                        t = a.offsetTop,
                        u = a.style,
                        v = a._mTween[b];
                    "left" === b && (t = a.offsetLeft);
                    var w = c - t;
                    (v.stop = 0), "none" !== f && k(), j();
                },
                X = function () {
                    return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
                },
                Y = function () {
                    var a = this;
                    a._mTween || (a._mTween = { top: {}, left: {} });
                    for (var b = ["top", "left"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        a._mTween[d].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(a._mTween[d].id) : clearTimeout(a._mTween[d].id), (a._mTween[d].id = null), (a._mTween[d].stop = 1));
                    }
                },
                Z = function (a, b) {
                    try {
                        delete a[b];
                    } catch (c) {
                        a[b] = null;
                    }
                },
                $ = function (a) {
                    return !(a.which && 1 !== a.which);
                },
                _ = function (a) {
                    var b = a.originalEvent.pointerType;
                    return !(b && "touch" !== b && 2 !== b);
                },
                aa = function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a);
                },
                ba = function (a) {
                    var b = a.parents(".mCSB_container");
                    return [a.offset().top - b.offset().top, a.offset().left - b.offset().left];
                },
                ca = function () {
                    function a() {
                        var a = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var b = 0; b < a.length; b++) if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                        return null;
                    }
                    var b = a();
                    return b ? document[b] : !1;
                };
            (a.fn[c] = function (b) {
                return l[b] ? l[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : l.init.apply(this, arguments);
            }),
                (a[c] = function (b) {
                    return l[b] ? l[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : l.init.apply(this, arguments);
                }),
                (a[c].defaults = f),
                (window[c] = !0),
                a(window).load(function () {
                    a(e)[c](),
                        a.extend(a.expr[":"], {
                            mcsInView:
                                a.expr[":"].mcsInView ||
                                function (b) {
                                    var c,
                                        d,
                                        e = a(b),
                                        f = e.parents(".mCSB_container");
                                    return f.length
                                        ? ((c = f.parent()),
                                          (d = [f[0].offsetTop, f[0].offsetLeft]),
                                          d[0] + ba(e)[0] >= 0 && d[0] + ba(e)[0] < c.height() - e.outerHeight(!1) && d[1] + ba(e)[1] >= 0 && d[1] + ba(e)[1] < c.width() - e.outerWidth(!1))
                                        : void 0;
                                },
                            mcsOverflow:
                                a.expr[":"].mcsOverflow ||
                                function (b) {
                                    var c = a(b).data(d);
                                    return c ? c.overflowed[0] || c.overflowed[1] : void 0;
                                },
                        });
                });
        });
    }),
    !(function (a, b, c) {
        "use strict";
        !(function d(a, b, c) {
            function e(g, h) {
                if (!b[g]) {
                    if (!a[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw ((j.code = "MODULE_NOT_FOUND"), j);
                    }
                    var k = (b[g] = { exports: {} });
                    a[g][0].call(
                        k.exports,
                        function (b) {
                            var c = a[g][1][b];
                            return e(c ? c : b);
                        },
                        k,
                        k.exports,
                        d,
                        a,
                        b,
                        c
                    );
                }
                return b[g].exports;
            }
            for (var f = "function" == typeof require && require, g = 0; g < c.length; g++) e(c[g]);
            return e;
        })(
            {
                1: [
                    function (d, e, f) {
                        var g = function (a) {
                            return a && a.__esModule ? a : { default: a };
                        };
                        Object.defineProperty(f, "__esModule", { value: !0 });
                        var h,
                            i,
                            j,
                            k,
                            l = d("./modules/handle-dom"),
                            m = d("./modules/utils"),
                            n = d("./modules/handle-swal-dom"),
                            o = d("./modules/handle-click"),
                            p = d("./modules/handle-key"),
                            q = g(p),
                            r = d("./modules/default-params"),
                            s = g(r),
                            t = d("./modules/set-params"),
                            u = g(t);
                        (f["default"] = j = k = function () {
                            function d(a) {
                                var b = e;
                                return b[a] === c ? s["default"][a] : b[a];
                            }
                            var e = arguments[0];
                            if ((l.addClass(b.body, "stop-scrolling"), n.resetInput(), e === c)) return m.logStr("SweetAlert expects at least 1 attribute!"), !1;
                            var f = m.extend({}, s["default"]);
                            switch (typeof e) {
                                case "string":
                                    (f.title = e), (f.text = arguments[1] || ""), (f.type = arguments[2] || "");
                                    break;
                                case "object":
                                    if (e.title === c) return m.logStr('Missing "title" argument!'), !1;
                                    f.title = e.title;
                                    for (var g in s["default"]) f[g] = d(g);
                                    (f.confirmButtonText = f.showCancelButton ? "Confirm" : s["default"].confirmButtonText), (f.confirmButtonText = d("confirmButtonText")), (f.doneFunction = arguments[1] || null);
                                    break;
                                default:
                                    return m.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof e), !1;
                            }
                            u["default"](f), n.fixVerticalPosition(), n.openModal(arguments[1]);
                            for (
                                var j = n.getModal(),
                                    p = j.querySelectorAll("button"),
                                    r = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"],
                                    t = function (a) {
                                        return o.handleButton(a, f, j);
                                    },
                                    v = 0;
                                v < p.length;
                                v++
                            )
                                for (var w = 0; w < r.length; w++) {
                                    var x = r[w];
                                    p[v][x] = t;
                                }
                            (n.getOverlay().onclick = t), (h = a.onkeydown);
                            var y = function (a) {
                                return q["default"](a, f, j);
                            };
                            (a.onkeydown = y),
                                (a.onfocus = function () {
                                    setTimeout(function () {
                                        i !== c && (i.focus(), (i = c));
                                    }, 0);
                                }),
                                k.enableButtons();
                        }),
                            (j.setDefaults = k.setDefaults = function (a) {
                                if (!a) throw new Error("userParams is required");
                                if ("object" != typeof a) throw new Error("userParams has to be a object");
                                m.extend(s["default"], a);
                            }),
                            (j.close = k.close = function () {
                                var d = n.getModal();
                                l.fadeOut(n.getOverlay(), 5), l.fadeOut(d, 5), l.removeClass(d, "showSweetAlert"), l.addClass(d, "hideSweetAlert"), l.removeClass(d, "visible");
                                var e = d.querySelector(".sa-icon.sa-success");
                                l.removeClass(e, "animate"), l.removeClass(e.querySelector(".sa-tip"), "animateSuccessTip"), l.removeClass(e.querySelector(".sa-long"), "animateSuccessLong");
                                var f = d.querySelector(".sa-icon.sa-error");
                                l.removeClass(f, "animateErrorIcon"), l.removeClass(f.querySelector(".sa-x-mark"), "animateXMark");
                                var g = d.querySelector(".sa-icon.sa-warning");
                                return (
                                    l.removeClass(g, "pulseWarning"),
                                    l.removeClass(g.querySelector(".sa-body"), "pulseWarningIns"),
                                    l.removeClass(g.querySelector(".sa-dot"), "pulseWarningIns"),
                                    setTimeout(function () {
                                        var a = d.getAttribute("data-custom-class");
                                        l.removeClass(d, a);
                                    }, 300),
                                    l.removeClass(b.body, "stop-scrolling"),
                                    (a.onkeydown = h),
                                    a.previousActiveElement && a.previousActiveElement.focus(),
                                    (i = c),
                                    clearTimeout(d.timeout),
                                    !0
                                );
                            }),
                            (j.showInputError = k.showInputError = function (a) {
                                var b = n.getModal(),
                                    c = b.querySelector(".sa-input-error");
                                l.addClass(c, "show");
                                var d = b.querySelector(".sa-error-container");
                                l.addClass(d, "show"),
                                    (d.querySelector("p").innerHTML = a),
                                    setTimeout(function () {
                                        j.enableButtons();
                                    }, 1),
                                    b.querySelector("input").focus();
                            }),
                            (j.resetInputError = k.resetInputError = function (a) {
                                if (a && 13 === a.keyCode) return !1;
                                var b = n.getModal(),
                                    c = b.querySelector(".sa-input-error");
                                l.removeClass(c, "show");
                                var d = b.querySelector(".sa-error-container");
                                l.removeClass(d, "show");
                            }),
                            (j.disableButtons = k.disableButtons = function () {
                                var a = n.getModal(),
                                    b = a.querySelector("button.confirm"),
                                    c = a.querySelector("button.cancel");
                                (b.disabled = !0), (c.disabled = !0);
                            }),
                            (j.enableButtons = k.enableButtons = function () {
                                var a = n.getModal(),
                                    b = a.querySelector("button.confirm"),
                                    c = a.querySelector("button.cancel");
                                (b.disabled = !1), (c.disabled = !1);
                            }),
                            "undefined" != typeof a ? (a.sweetAlert = a.swal = j) : m.logStr("SweetAlert is a frontend module!"),
                            (e.exports = f["default"]);
                    },
                    { "./modules/default-params": 2, "./modules/handle-click": 3, "./modules/handle-dom": 4, "./modules/handle-key": 5, "./modules/handle-swal-dom": 6, "./modules/set-params": 8, "./modules/utils": 9 },
                ],
                2: [
                    function (a, b, c) {
                        Object.defineProperty(c, "__esModule", { value: !0 });
                        var d = {
                            title: "",
                            text: "",
                            type: null,
                            allowOutsideClick: !1,
                            showConfirmButton: !0,
                            showCancelButton: !1,
                            closeOnConfirm: !0,
                            closeOnCancel: !0,
                            confirmButtonText: "OK",
                            confirmButtonColor: "#8CD4F5",
                            cancelButtonText: "Cancel",
                            imageUrl: null,
                            imageSize: null,
                            timer: null,
                            customClass: "",
                            html: !1,
                            animation: !0,
                            allowEscapeKey: !0,
                            inputType: "text",
                            inputPlaceholder: "",
                            inputValue: "",
                            showLoaderOnConfirm: !1,
                        };
                        (c["default"] = d), (b.exports = c["default"]);
                    },
                    {},
                ],
                3: [
                    function (b, c, d) {
                        Object.defineProperty(d, "__esModule", { value: !0 });
                        var e = b("./utils"),
                            f = (b("./handle-swal-dom"), b("./handle-dom")),
                            g = function (b, c, d) {
                                function g(a) {
                                    o && c.confirmButtonColor && (n.style.backgroundColor = a);
                                }
                                var j,
                                    k,
                                    l,
                                    m = b || a.event,
                                    n = m.target || m.srcElement,
                                    o = -1 !== n.className.indexOf("confirm"),
                                    p = -1 !== n.className.indexOf("sweet-overlay"),
                                    q = f.hasClass(d, "visible"),
                                    r = c.doneFunction && "true" === d.getAttribute("data-has-done-function");
                                switch ((o && c.confirmButtonColor && ((j = c.confirmButtonColor), (k = e.colorLuminance(j, -0.04)), (l = e.colorLuminance(j, -0.14))), m.type)) {
                                    case "mouseover":
                                        g(k);
                                        break;
                                    case "mouseout":
                                        g(j);
                                        break;
                                    case "mousedown":
                                        g(l);
                                        break;
                                    case "mouseup":
                                        g(k);
                                        break;
                                    case "focus":
                                        var s = d.querySelector("button.confirm"),
                                            t = d.querySelector("button.cancel");
                                        o ? (t.style.boxShadow = "none") : (s.style.boxShadow = "none");
                                        break;
                                    case "click":
                                        var u = d === n,
                                            v = f.isDescendant(d, n);
                                        if (!u && !v && q && !c.allowOutsideClick) break;
                                        o && r && q ? h(d, c) : (r && q) || p ? i(d, c) : f.isDescendant(d, n) && "BUTTON" === n.tagName && sweetAlert.close();
                                }
                            },
                            h = function (a, b) {
                                var c = !0;
                                f.hasClass(a, "show-input") && ((c = a.querySelector("input").value), c || (c = "")), b.doneFunction(c), b.closeOnConfirm && sweetAlert.close(), b.showLoaderOnConfirm && sweetAlert.disableButtons();
                            },
                            i = function (a, b) {
                                var c = String(b.doneFunction).replace(/\s/g, ""),
                                    d = "function(" === c.substring(0, 9) && ")" !== c.substring(9, 10);
                                d && b.doneFunction(!1), b.closeOnCancel && sweetAlert.close();
                            };
                        (d["default"] = { handleButton: g, handleConfirm: h, handleCancel: i }), (c.exports = d["default"]);
                    },
                    { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 },
                ],
                4: [
                    function (c, d, e) {
                        Object.defineProperty(e, "__esModule", { value: !0 });
                        var f = function (a, b) {
                                return new RegExp(" " + b + " ").test(" " + a.className + " ");
                            },
                            g = function (a, b) {
                                f(a, b) || (a.className += " " + b);
                            },
                            h = function (a, b) {
                                var c = " " + a.className.replace(/[\t\r\n]/g, " ") + " ";
                                if (f(a, b)) {
                                    for (; c.indexOf(" " + b + " ") >= 0; ) c = c.replace(" " + b + " ", " ");
                                    a.className = c.replace(/^\s+|\s+$/g, "");
                                }
                            },
                            i = function (a) {
                                var c = b.createElement("div");
                                return c.appendChild(b.createTextNode(a)), c.innerHTML;
                            },
                            j = function (a) {
                                (a.style.opacity = ""), (a.style.display = "block");
                            },
                            k = function (a) {
                                if (a && !a.length) return j(a);
                                for (var b = 0; b < a.length; ++b) j(a[b]);
                            },
                            l = function (a) {
                                (a.style.opacity = ""), (a.style.display = "none");
                            },
                            m = function (a) {
                                if (a && !a.length) return l(a);
                                for (var b = 0; b < a.length; ++b) l(a[b]);
                            },
                            n = function (a, b) {
                                for (var c = b.parentNode; null !== c; ) {
                                    if (c === a) return !0;
                                    c = c.parentNode;
                                }
                                return !1;
                            },
                            o = function (a) {
                                (a.style.left = "-9999px"), (a.style.display = "block");
                                var b,
                                    c = a.clientHeight;
                                return (
                                    (b = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(a).getPropertyValue("padding-top"), 10) : parseInt(a.currentStyle.padding)),
                                    (a.style.left = ""),
                                    (a.style.display = "none"),
                                    "-" + parseInt((c + b) / 2) + "px"
                                );
                            },
                            p = function (a, b) {
                                if (+a.style.opacity < 1) {
                                    (b = b || 16), (a.style.opacity = 0), (a.style.display = "block");
                                    var c = +new Date(),
                                        d = (function (a) {
                                            function b() {
                                                return a.apply(this, arguments);
                                            }
                                            return (
                                                (b.toString = function () {
                                                    return a.toString();
                                                }),
                                                b
                                            );
                                        })(function () {
                                            (a.style.opacity = +a.style.opacity + (new Date() - c) / 100), (c = +new Date()), +a.style.opacity < 1 && setTimeout(d, b);
                                        });
                                    d();
                                }
                                a.style.display = "block";
                            },
                            q = function (a, b) {
                                (b = b || 16), (a.style.opacity = 1);
                                var c = +new Date(),
                                    d = (function (a) {
                                        function b() {
                                            return a.apply(this, arguments);
                                        }
                                        return (
                                            (b.toString = function () {
                                                return a.toString();
                                            }),
                                            b
                                        );
                                    })(function () {
                                        (a.style.opacity = +a.style.opacity - (new Date() - c) / 100), (c = +new Date()), +a.style.opacity > 0 ? setTimeout(d, b) : (a.style.display = "none");
                                    });
                                d();
                            },
                            r = function (c) {
                                if ("function" == typeof MouseEvent) {
                                    var d = new MouseEvent("click", { view: a, bubbles: !1, cancelable: !0 });
                                    c.dispatchEvent(d);
                                } else if (b.createEvent) {
                                    var e = b.createEvent("MouseEvents");
                                    e.initEvent("click", !1, !1), c.dispatchEvent(e);
                                } else b.createEventObject ? c.fireEvent("onclick") : "function" == typeof c.onclick && c.onclick();
                            },
                            s = function (b) {
                                "function" == typeof b.stopPropagation ? (b.stopPropagation(), b.preventDefault()) : a.event && a.event.hasOwnProperty("cancelBubble") && (a.event.cancelBubble = !0);
                            };
                        (e.hasClass = f),
                            (e.addClass = g),
                            (e.removeClass = h),
                            (e.escapeHtml = i),
                            (e._show = j),
                            (e.show = k),
                            (e._hide = l),
                            (e.hide = m),
                            (e.isDescendant = n),
                            (e.getTopMargin = o),
                            (e.fadeIn = p),
                            (e.fadeOut = q),
                            (e.fireClick = r),
                            (e.stopEventPropagation = s);
                    },
                    {},
                ],
                5: [
                    function (b, d, e) {
                        Object.defineProperty(e, "__esModule", { value: !0 });
                        var f = b("./handle-dom"),
                            g = b("./handle-swal-dom"),
                            h = function (b, d, e) {
                                var h = b || a.event,
                                    i = h.keyCode || h.which,
                                    j = e.querySelector("button.confirm"),
                                    k = e.querySelector("button.cancel"),
                                    l = e.querySelectorAll("button[tabindex]");
                                if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                                    for (var m = h.target || h.srcElement, n = -1, o = 0; o < l.length; o++)
                                        if (m === l[o]) {
                                            n = o;
                                            break;
                                        }
                                    9 === i
                                        ? ((m = -1 === n ? j : n === l.length - 1 ? l[0] : l[n + 1]), f.stopEventPropagation(h), m.focus(), d.confirmButtonColor && g.setFocusStyle(m, d.confirmButtonColor))
                                        : 13 === i
                                        ? ("INPUT" === m.tagName && ((m = j), j.focus()), (m = -1 === n ? j : c))
                                        : 27 === i && d.allowEscapeKey === !0
                                        ? ((m = k), f.fireClick(m, h))
                                        : (m = c);
                                }
                            };
                        (e["default"] = h), (d.exports = e["default"]);
                    },
                    { "./handle-dom": 4, "./handle-swal-dom": 6 },
                ],
                6: [
                    function (c, d, e) {
                        var f = function (a) {
                            return a && a.__esModule ? a : { default: a };
                        };
                        Object.defineProperty(e, "__esModule", { value: !0 });
                        var g = c("./utils"),
                            h = c("./handle-dom"),
                            i = c("./default-params"),
                            j = f(i),
                            k = c("./injected-html"),
                            l = f(k),
                            m = ".sweet-alert",
                            n = ".sweet-overlay",
                            o = function () {
                                var a = b.createElement("div");
                                for (a.innerHTML = l["default"]; a.firstChild; ) b.body.appendChild(a.firstChild);
                            },
                            p = (function (a) {
                                function b() {
                                    return a.apply(this, arguments);
                                }
                                return (
                                    (b.toString = function () {
                                        return a.toString();
                                    }),
                                    b
                                );
                            })(function () {
                                var a = b.querySelector(m);
                                return a || (o(), (a = p())), a;
                            }),
                            q = function () {
                                var a = p();
                                return a ? a.querySelector("input") : void 0;
                            },
                            r = function () {
                                return b.querySelector(n);
                            },
                            s = function (a, b) {
                                var c = g.hexToRgb(b);
                                a.style.boxShadow = "0 0 2px rgba(" + c + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
                            },
                            t = function (c) {
                                var d = p();
                                h.fadeIn(r(), 10), h.show(d), h.addClass(d, "showSweetAlert"), h.removeClass(d, "hideSweetAlert"), (a.previousActiveElement = b.activeElement);
                                var e = d.querySelector("button.confirm");
                                e.focus(),
                                    setTimeout(function () {
                                        h.addClass(d, "visible");
                                    }, 500);
                                var f = d.getAttribute("data-timer");
                                if ("null" !== f && "" !== f) {
                                    var g = c;
                                    d.timeout = setTimeout(function () {
                                        var a = (g || null) && "true" === d.getAttribute("data-has-done-function");
                                        a ? g(null) : sweetAlert.close();
                                    }, f);
                                }
                            },
                            u = function () {
                                var a = p(),
                                    b = q();
                                h.removeClass(a, "show-input"), (b.value = j["default"].inputValue), b.setAttribute("type", j["default"].inputType), b.setAttribute("placeholder", j["default"].inputPlaceholder), v();
                            },
                            v = function (a) {
                                if (a && 13 === a.keyCode) return !1;
                                var b = p(),
                                    c = b.querySelector(".sa-input-error");
                                h.removeClass(c, "show");
                                var d = b.querySelector(".sa-error-container");
                                h.removeClass(d, "show");
                            },
                            w = function () {
                                var a = p();
                                a.style.marginTop = h.getTopMargin(p());
                            };
                        (e.sweetAlertInitialize = o), (e.getModal = p), (e.getOverlay = r), (e.getInput = q), (e.setFocusStyle = s), (e.openModal = t), (e.resetInput = u), (e.resetInputError = v), (e.fixVerticalPosition = w);
                    },
                    { "./default-params": 2, "./handle-dom": 4, "./injected-html": 7, "./utils": 9 },
                ],
                7: [
                    function (a, b, c) {
                        Object.defineProperty(c, "__esModule", { value: !0 });
                        var d =
                            '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
                        (c["default"] = d), (b.exports = c["default"]);
                    },
                    {},
                ],
                8: [
                    function (a, b, d) {
                        Object.defineProperty(d, "__esModule", { value: !0 });
                        var e = a("./utils"),
                            f = a("./handle-swal-dom"),
                            g = a("./handle-dom"),
                            h = ["error", "warning", "info", "success", "input", "prompt"],
                            i = function (a) {
                                var b = f.getModal(),
                                    d = b.querySelector("h2"),
                                    i = b.querySelector("p"),
                                    j = b.querySelector("button.cancel"),
                                    k = b.querySelector("button.confirm");
                                if (
                                    ((d.innerHTML = a.html ? a.title : g.escapeHtml(a.title).split("\n").join("<br>")),
                                    (i.innerHTML = a.html
                                        ? a.text
                                        : g
                                              .escapeHtml(a.text || "")
                                              .split("\n")
                                              .join("<br>")),
                                    a.text && g.show(i),
                                    a.customClass)
                                )
                                    g.addClass(b, a.customClass), b.setAttribute("data-custom-class", a.customClass);
                                else {
                                    var l = b.getAttribute("data-custom-class");
                                    g.removeClass(b, l), b.setAttribute("data-custom-class", "");
                                }
                                if ((g.hide(b.querySelectorAll(".sa-icon")), a.type && !e.isIE8())) {
                                    var m = (function () {
                                        for (var d = !1, e = 0; e < h.length; e++)
                                            if (a.type === h[e]) {
                                                d = !0;
                                                break;
                                            }
                                        if (!d) return logStr("Unknown alert type: " + a.type), { v: !1 };
                                        var i = ["success", "error", "warning", "info"],
                                            j = c;
                                        -1 !== i.indexOf(a.type) && ((j = b.querySelector(".sa-icon.sa-" + a.type)), g.show(j));
                                        var k = f.getInput();
                                        switch (a.type) {
                                            case "success":
                                                g.addClass(j, "animate"), g.addClass(j.querySelector(".sa-tip"), "animateSuccessTip"), g.addClass(j.querySelector(".sa-long"), "animateSuccessLong");
                                                break;
                                            case "error":
                                                g.addClass(j, "animateErrorIcon"), g.addClass(j.querySelector(".sa-x-mark"), "animateXMark");
                                                break;
                                            case "warning":
                                                g.addClass(j, "pulseWarning"), g.addClass(j.querySelector(".sa-body"), "pulseWarningIns"), g.addClass(j.querySelector(".sa-dot"), "pulseWarningIns");
                                                break;
                                            case "input":
                                            case "prompt":
                                                k.setAttribute("type", a.inputType),
                                                    (k.value = a.inputValue),
                                                    k.setAttribute("placeholder", a.inputPlaceholder),
                                                    g.addClass(b, "show-input"),
                                                    setTimeout(function () {
                                                        k.focus(), k.addEventListener("keyup", swal.resetInputError);
                                                    }, 400);
                                        }
                                    })();
                                    if ("object" == typeof m) return m.v;
                                }
                                if (a.imageUrl) {
                                    var n = b.querySelector(".sa-icon.sa-custom");
                                    (n.style.backgroundImage = "url(" + a.imageUrl + ")"), g.show(n);
                                    var o = 80,
                                        p = 80;
                                    if (a.imageSize) {
                                        var q = a.imageSize.toString().split("x"),
                                            r = q[0],
                                            s = q[1];
                                        r && s ? ((o = r), (p = s)) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + a.imageSize);
                                    }
                                    n.setAttribute("style", n.getAttribute("style") + "width:" + o + "px; height:" + p + "px");
                                }
                                b.setAttribute("data-has-cancel-button", a.showCancelButton),
                                    a.showCancelButton ? (j.style.display = "inline-block") : g.hide(j),
                                    b.setAttribute("data-has-confirm-button", a.showConfirmButton),
                                    a.showConfirmButton ? (k.style.display = "inline-block") : g.hide(k),
                                    a.cancelButtonText && (j.innerHTML = g.escapeHtml(a.cancelButtonText)),
                                    a.confirmButtonText && (k.innerHTML = g.escapeHtml(a.confirmButtonText)),
                                    a.confirmButtonColor &&
                                        ((k.style.backgroundColor = a.confirmButtonColor),
                                        (k.style.borderLeftColor = a.confirmLoadingButtonColor),
                                        (k.style.borderRightColor = a.confirmLoadingButtonColor),
                                        f.setFocusStyle(k, a.confirmButtonColor)),
                                    b.setAttribute("data-allow-outside-click", a.allowOutsideClick);
                                var t = a.doneFunction ? !0 : !1;
                                b.setAttribute("data-has-done-function", t),
                                    a.animation ? ("string" == typeof a.animation ? b.setAttribute("data-animation", a.animation) : b.setAttribute("data-animation", "pop")) : b.setAttribute("data-animation", "none"),
                                    b.setAttribute("data-timer", a.timer);
                            };
                        (d["default"] = i), (b.exports = d["default"]);
                    },
                    { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 },
                ],
                9: [
                    function (b, c, d) {
                        Object.defineProperty(d, "__esModule", { value: !0 });
                        var e = function (a, b) {
                                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                                return a;
                            },
                            f = function (a) {
                                var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                                return b ? parseInt(b[1], 16) + ", " + parseInt(b[2], 16) + ", " + parseInt(b[3], 16) : null;
                            },
                            g = function () {
                                return a.attachEvent && !a.addEventListener;
                            },
                            h = function (b) {
                                a.console && a.console.log("SweetAlert: " + b);
                            },
                            i = function (a, b) {
                                (a = String(a).replace(/[^0-9a-f]/gi, "")), a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), (b = b || 0);
                                var c,
                                    d,
                                    e = "#";
                                for (d = 0; 3 > d; d++) (c = parseInt(a.substr(2 * d, 2), 16)), (c = Math.round(Math.min(Math.max(0, c + c * b), 255)).toString(16)), (e += ("00" + c).substr(c.length));
                                return e;
                            };
                        (d.extend = e), (d.hexToRgb = f), (d.isIE8 = g), (d.logStr = h), (d.colorLuminance = i);
                    },
                    {},
                ],
            },
            {},
            [1]
        ),
            "function" == typeof define && define.amd
                ? define(function () {
                      return sweetAlert;
                  })
                : "undefined" != typeof module && module.exports && (module.exports = sweetAlert);
    })(window, document),
    (function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? (module.exports = a(require("jquery"))) : a(jQuery);
    })(function (a) {
        var b = Array.prototype.slice,
            c = Array.prototype.splice,
            d = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: !1, getWidthFrom: "", widthFromWrapper: !0, responsiveWidth: !1, zIndex: "auto" },
            e = a(window),
            f = a(document),
            g = [],
            h = e.height(),
            i = function () {
                for (var b = e.scrollTop(), c = f.height(), d = c - h, i = b > d ? d - b : 0, j = 0, k = g.length; k > j; j++) {
                    var l = g[j],
                        m = l.stickyWrapper.offset().top,
                        n = m - l.topSpacing - i;
                    if ((l.stickyWrapper.css("height", l.stickyElement.outerHeight()), n >= b))
                        null !== l.currentTop &&
                            (l.stickyElement.css({ width: "", position: "", top: "", "z-index": "" }), l.stickyElement.parent().removeClass(l.className), l.stickyElement.trigger("sticky-end", [l]), (l.currentTop = null));
                    else {
                        var o = c - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - b - i;
                        if ((0 > o ? (o += l.topSpacing) : (o = l.topSpacing), l.currentTop !== o)) {
                            var p;
                            l.getWidthFrom ? (p = a(l.getWidthFrom).width() || null) : l.widthFromWrapper && (p = l.stickyWrapper.width()),
                                null == p && (p = l.stickyElement.width()),
                                l.stickyElement.css("width", p).css("position", "fixed").css("top", o).css("z-index", l.zIndex),
                                l.stickyElement.parent().addClass(l.className),
                                null === l.currentTop ? l.stickyElement.trigger("sticky-start", [l]) : l.stickyElement.trigger("sticky-update", [l]),
                                (l.currentTop === l.topSpacing && l.currentTop > o) || (null === l.currentTop && o < l.topSpacing)
                                    ? l.stickyElement.trigger("sticky-bottom-reached", [l])
                                    : null !== l.currentTop && o === l.topSpacing && l.currentTop < o && l.stickyElement.trigger("sticky-bottom-unreached", [l]),
                                (l.currentTop = o);
                        }
                        var q = l.stickyWrapper.parent(),
                            r = l.stickyElement.offset().top + l.stickyElement.outerHeight() >= q.offset().top + q.outerHeight() && l.stickyElement.offset().top <= l.topSpacing;
                        r ? l.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : l.stickyElement.css("position", "fixed").css("top", o).css("bottom", "").css("z-index", l.zIndex);
                    }
                }
            },
            j = function () {
                h = e.height();
                for (var b = 0, c = g.length; c > b; b++) {
                    var d = g[b],
                        f = null;
                    d.getWidthFrom ? d.responsiveWidth && (f = a(d.getWidthFrom).width()) : d.widthFromWrapper && (f = d.stickyWrapper.width()), null != f && d.stickyElement.css("width", f);
                }
            },
            k = {
                init: function (b) {
                    var c = a.extend({}, d, b);
                    return this.each(function () {
                        var b = a(this),
                            e = b.attr("id"),
                            f = e ? e + "-" + d.wrapperClassName : d.wrapperClassName,
                            h = a("<div></div>").attr("id", f).addClass(c.wrapperClassName);
                        b.wrapAll(h);
                        var i = b.parent();
                        c.center && i.css({ width: b.outerWidth(), marginLeft: "auto", marginRight: "auto" }),
                            "right" === b.css("float") && b.css({ float: "none" }).parent().css({ float: "right" }),
                            (c.stickyElement = b),
                            (c.stickyWrapper = i),
                            (c.currentTop = null),
                            g.push(c),
                            k.setWrapperHeight(this),
                            k.setupChangeListeners(this);
                    });
                },
                setWrapperHeight: function (b) {
                    var c = a(b),
                        d = c.parent();
                    d && d.css("height", c.outerHeight());
                },
                setupChangeListeners: function (a) {
                    if (window.MutationObserver) {
                        var b = new window.MutationObserver(function (b) {
                            (b[0].addedNodes.length || b[0].removedNodes.length) && k.setWrapperHeight(a);
                        });
                        b.observe(a, { subtree: !0, childList: !0 });
                    } else
                        a.addEventListener(
                            "DOMNodeInserted",
                            function () {
                                k.setWrapperHeight(a);
                            },
                            !1
                        ),
                            a.addEventListener(
                                "DOMNodeRemoved",
                                function () {
                                    k.setWrapperHeight(a);
                                },
                                !1
                            );
                },
                update: i,
                unstick: function (b) {
                    return this.each(function () {
                        for (var b = this, d = a(b), e = -1, f = g.length; f-- > 0; ) g[f].stickyElement.get(0) === b && (c.call(g, f, 1), (e = f));
                        -1 !== e && (d.unwrap(), d.css({ width: "", position: "", top: "", float: "", "z-index": "" }));
                    });
                },
            };
        window.addEventListener ? (window.addEventListener("scroll", i, !1), window.addEventListener("resize", j, !1)) : window.attachEvent && (window.attachEvent("onscroll", i), window.attachEvent("onresize", j)),
            (a.fn.sticky = function (c) {
                return k[c] ? k[c].apply(this, b.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sticky") : k.init.apply(this, arguments);
            }),
            (a.fn.unstick = function (c) {
                return k[c] ? k[c].apply(this, b.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sticky") : k.unstick.apply(this, arguments);
            }),
            a(function () {
                setTimeout(i, 0);
            });
    }),
    $(function () {
        var a = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
            b = navigator.userAgent.toLowerCase().indexOf("android") > -1;
        a && b && $("html").addClass("FirefoxAndroid");
    }),
    (function (a) {
        a(window).load(function () {
            a(".flexslider").flexslider({
                animation: "slide",
                controlsContainer: a(".custom-controls-container"),
                customDirectionNav: a(".custom-navigation a"),
                init: function (b) {
                    a("img.lazyImage")
                        .slice(0, 3)
                        .each(function () {
                            var b = a(this).attr("data-src");
                            a(this).attr("src", b).removeAttr("data-src").removeClass("lazyImage");
                        });
                },
                before: function (b) {
                    a("img.lazyImage")
                        .slice(0, 12)
                        .each(function () {
                            var b = a(this).attr("data-src");
                            a(this).attr("src", b).removeAttr("data-src").removeClass("lazyImage");
                        });
                },
            }),
                (a.mCustomScrollbar.defaults.scrollButtons.enable = !0),
                (a.mCustomScrollbar.defaults.axis = "yx"),
                a(".list-cont").mCustomScrollbar({ theme: "dark-thick" }),
                a(".all-themes-switch a").click(function (b) {
                    b.preventDefault();
                    var c = a(this),
                        d = c.attr("rel"),
                        e = a(".content");
                    switch (d) {
                        case "toggle-content":
                            e.toggleClass("expanded-content");
                    }
                });
        });
    })(jQuery),
    $(document).on("click", ".btn-select", function (a) {
        a.preventDefault();
        var b = $(this).find("ul");
        if ($(this).hasClass("active")) {
            if (b.find("li").is(a.target)) {
                var c = $(a.target);
                c.addClass("selected").siblings().removeClass("selected");
                var d = c.html();
                $(this).find(".btn-select-input").val(d), $(this).find(".btn-select-value").html(d);
            }
            b.hide(), $(this).removeClass("active");
        } else
            $(".btn-select")
                .not(this)
                .each(function () {
                    $(this).removeClass("active").find("ul").hide();
                }),
                b.slideDown(300),
                $(this).addClass("active");
    }),
    $(document).on("click", function (a) {
        var b = $(a.target).closest(".btn-select");
        b.length || $(".btn-select").removeClass("active").find("ul").hide();
    }),
    $(".search-location-mobile").on("click", function (a) {
        var b = $(this);
        b.html('<i class="fa fa-spinner fa-spin"></i>'), getLocation();
    }),
    $(".search-location").on("click", function (a) {
        $(this);
        $("input[name='location']").val("Fetching location ..."), getLocation();
    });
var chrome = !1;
$(document).ready(function () {
    /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) && ((chrome = !0), $(".search-location").addClass("hidden"), $(".search-location-mobile").addClass("hidden")),
        "" != $("#location").val() ? $(".search-location").addClass("hidden") : chrome ? "" : $(".search-location").removeClass("hidden"),
        $("button:submit").click(function (a) {
            if ($(this).closest("form")[0].checkValidity()) {
                a.preventDefault(), $("button:submit").attr("disabled", !0), $(this).closest("form").submit();
                $(this);
            }
        }),
        $(".search-location").tooltip({ selector: "", placement: "bottom", container: "body" }),
        $("#location").focus(function (a) {
            $(".search-location").addClass("hidden");
        }),
        $("#location").blur(function (a) {
            "" != $.trim($(this).val()) || chrome || $(".search-location").removeClass("hidden");
        });
    var a = $(document).width();
    480 >= a && $(".mobile-form").sticky({ topSpacing: 0, zIndex: 9999999 });
    var b = 0,
        c = 30;
    $(window).on("scroll", function () {
        var a = Math.abs($(window).scrollTop() - b);
        a > c && ($(".services").autocomplete("close"), (b = $(window).scrollTop()));
    });
    var d = $(window).height();
    700 > d && $(".flexslider .slides img").css({ "max-height": d - 110 + "px" });
    var e = $(".flexslider .slides img").height();
    $(window).scroll(function () {
        $(this).scrollTop() > e - 70 ? $("#main-searchWraper").addClass("fixed-form") : $("#main-searchWraper").removeClass("fixed-form");
    }),
        $(".expose").click(function (a) {
            $(this).css("z-index", "99999"), $(".page-overlay").fadeIn(300);
        }),
        $(".page-overlay").click(function (a) {
            $(".page-overlay").fadeOut(300, function () {
                $(".expose").css("z-index", "9999999");
            });
        }),
        $(".sp-mobile").on("click", function (a) {
            var b = $(document).width();
            b > 480
                ? ($("#searchFrom").popover({ title: "Message", content: "Please complete this form to get contact details of suggested service providers.", placement: "bottom" }), $("#searchFrom").popover("show"))
                : ($(".mobile-form").popover({ title: "Message", content: "Please complete this form to get contact details of suggested service providers.", placement: "bottom" }), $(".mobile-form").popover("show"));
        }),
        $(".service-list-click").on("click", "li", function (a) {
            a.preventDefault();
            var b = $(this).find("h5").attr("class"),
                c = "isLeaf" === $(this).attr("class") ? !0 : !1;
            $("#services li>a").each(function () {
                $(this).removeClass("active");
            }),
                $(this).find("a").addClass("active"),
                c && localStorage.setItem("services", b);
            var d = $(document).width();
            d > 480
                ? ($("#service_check").css({ "background-color": "#ffff99" }),
                  setTimeout(function () {
                      $("#service_check").css({ "background-color": "#fff" });
                  }, 3500),
                  c ? ($(".services").val(b), "" == $("#location").val() ? $("#location").focus() : $("#mob").focus()) : $("#service_check").autocomplete("search", b).focus().val(b))
                : ($("#mobile-search-form").hasClass("hidden") && ($("#location-mobile-form").addClass("hidden"), $("#otp-form").addClass("hidden"), $("#mobile-search-form").toggleClass("hidden")),
                  $("#service_check_mobile").css({ "background-color": "#ffff99" }),
                  setTimeout(function () {
                      $("#service_check_mobile").css({ "background-color": "#fff" });
                  }, 6500),
                  $(".services").autocomplete("close"),
                  $(".expose").trigger("click"),
                  c ? $(".services").val(b) : $("#service_check_mobile").autocomplete("search", b).val(b));
        }),
        $(".btn-select").each(function (a) {
            var b = $(this).find("ul li.selected").html();
            void 0 != b && ($(this).find(".btn-select-input").val(b), $(this).find(".btn-select-value").html(b));
        }),
        $("#myFeedBack .item").first().addClass("active"),
        $(".nav-tabs a").click(function () {
            $(this).tab("show");
        }),
        $("#stars-existing").on("starrr:change", function (a, b) {
            $("#count-existing").html(b);
        }),
        $("#btnHowItWorks").on("mouseenter mouseleave click", function () {
            var a = document.getElementById("appearOnClick");
            "block" === a.style.display ? ($("#btnHowItWorks").text("+  How it works"), (a.style.display = "none")) : ((a.style.display = "block"), $("#btnHowItWorks").text("x  How it works"));
        });
    var f = { bounds: new google.maps.Circle({ center: new google.maps.LatLng(17.424676, 78.403688), radius: 500 }).getBounds(), componentRestrictions: { country: "in" } },
        g = document.getElementById("location"),
        h = new google.maps.places.Autocomplete(g, f),
        i = document.getElementById("location1"),
        j = new google.maps.places.Autocomplete(i, f);
    j.addListener("place_changed", function () {
        "" != $("#service_check_mobile").val() ? $("#mob1").focus() : $("#service_check_mobile").focus();
        var a = j.getPlace();
        $('input[name="geo_lat"]').val(a.geometry.location.lat()), $('input[name="geo_lng"]').val(a.geometry.location.lng());
    }),
        h.addListener("place_changed", function () {
            "" != $("#service_check").val() ? $("#mob").focus() : $("#service_check").focus();
            var a = h.getPlace();
            $('input[name="geo_lat"]').val(a.geometry.location.lat()), $('input[name="geo_lng"]').val(a.geometry.location.lng());
        });
    var k;
    $(".dropdown").on("mouseover click", function () {
        $(".dropdown-content").css({ display: "block" }), void 0 != k && clearInterval(k);
    }),
        $(".dropdown").mouseout(function () {
            $(".dropdown-content").css({ display: "block" }),
                (k = setTimeout(function () {
                    $(".dropdown-content").css({ display: "none" });
                }, 1e3));
        });
});
var __slice = [].slice;
!(function (a, b) {
    var c;
    return (
        (c = (function () {
            function b(b, c) {
                var d,
                    e,
                    f,
                    g = this;
                (this.options = a.extend({}, this.defaults, c)), (this.$el = b), (f = this.defaults);
                for (d in f) (e = f[d]), null != this.$el.data(d) && (this.options[d] = this.$el.data(d));
                this.createStars(),
                    this.syncRating(),
                    this.$el.on("mouseover.starrr", "span", function (a) {
                        return g.syncRating(g.$el.find("span").index(a.currentTarget) + 1);
                    }),
                    this.$el.on("mouseout.starrr", function () {
                        return g.syncRating();
                    }),
                    this.$el.on("click.starrr", "span", function (a) {
                        return g.setRating(g.$el.find("span").index(a.currentTarget) + 1);
                    }),
                    this.$el.on("starrr:change", this.options.change);
            }
            return (
                (b.prototype.defaults = { rating: void 0, numStars: 5, change: function (a, b) {} }),
                (b.prototype.createStars = function () {
                    var a, b, c;
                    for (c = [], a = 1, b = this.options.numStars; b >= 1 ? b >= a : a >= b; b >= 1 ? a++ : a--) c.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
                    return c;
                }),
                (b.prototype.setRating = function (a) {
                    return this.options.rating === a && (a = void 0), (this.options.rating = a), this.syncRating(), this.$el.trigger("starrr:change", a);
                }),
                (b.prototype.syncRating = function (a) {
                    var b, c, d, e;
                    if ((a || (a = this.options.rating), a)) for (b = c = 0, e = a - 1; e >= 0 ? e >= c : c >= e; b = e >= 0 ? ++c : --c) this.$el.find("span").eq(b).removeClass("glyphicon-star-empty").addClass("glyphicon-star");
                    if (a && 5 > a) for (b = d = a; 4 >= a ? 4 >= d : d >= 4; b = 4 >= a ? ++d : --d) this.$el.find("span").eq(b).removeClass("glyphicon-star").addClass("glyphicon-star-empty");
                    return a ? void 0 : this.$el.find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
                }),
                b
            );
        })()),
        a.fn.extend({
            starrr: function () {
                var b, d;
                return (
                    (d = arguments[0]),
                    (b = 2 <= arguments.length ? __slice.call(arguments, 1) : []),
                    this.each(function () {
                        var e;
                        return (e = a(this).data("star-rating")), e || a(this).data("star-rating", (e = new c(a(this), d))), "string" == typeof d ? e[d].apply(e, b) : void 0;
                    })
                );
            },
        })
    );
})(window.jQuery, window),
    $(function () {
        return $(".starrr").starrr();
    });
var baseURL = "http://crm.ramukaka.com/";
$(function () {
    function a(a) {
        return a.split(/,\s*/);
    }
    function b(b) {
        return a(b).pop();
    }
    var c = {};
    $("#addservices")
        .bind("keydown", function (a) {
            a.keyCode === $.ui.keyCode.TAB && $(this).autocomplete("instance").menu.active && a.preventDefault();
        })
        .autocomplete({
            source: function (a, d) {
                var e = b(a.term);
                if (e in c) return void d(c[e]);
                var f = baseURL + "api/servicesList";
                $.getJSON(f, { term: b(a.term) }, function (a, b, f) {
                    (c[e] = a), d(a);
                });
            },
            search: function () {
                var a = b(this.value);
                return a.length < 2 ? !1 : void 0;
            },
            focus: function () {
                return !1;
            },
            select: function (b, c) {
                var d = a(this.value);
                return d.pop(), d.push(c.item.value), d.push(""), (this.value = d.join(", ")), !1;
            },
        });
});
var cache = {};
$(function () {
    $(".services").autocomplete({
        minLength: 2,
        source: function (a, b) {
            var c = a.term;
            if (c in cache) return void b(cache[c]);
            var d = baseURL + "api/servicesList";
            $.getJSON(d, a, function (a, d, e) {
                (cache[c] = a), b(a);
            });
        },
        select: function (a, b) {
            $("#mob").focus(), $("#mob1").focus();
        },
    });
}),
    $("#sendLoginOTP").on("click", function (a) {
        if ("" != $("#mobile").val() && 10 == $("#mobile").val().length && $.isNumeric($("#mobile").val())) {
            $("#sendLoginOTP").html("<i class='fa fa-spinner fa-pulse'></i> Validating Mobile No");
            var b = CI_ROOT + "home/generateLoginOTP";
            $.ajax({
                url: b,
                data: { mobile: $("#mobile").val(), type: $("#type").val() },
                type: "POST",
                success: function (a, b) {
                    "success" == b
                        ? "success" == a.status
                            ? ($("#sendLoginOTP").toggleClass("hidden"), $("#otp").toggleClass("hidden"), "SP" == $("#type").val() ? $(".tc_box").removeClass("hidden") : $(".tc_box").addClass("hidden"))
                            : "fail" == a.status && swal("Sorry !", a.msg, "error")
                        : swal("Oops!", "Error while generating OTP", "error"),
                        $("#sendLoginOTP").html("<i class='fa fa-key'></i> Send OTP");
                },
            });
        } else swal("Oops!", "Please enter 10 digit mobile number", "error");
    }),
    $("#location,#location1,#location2,.services").focus(function () {
        $(this).val("");
    }),
    $("#desktop_form").on("click", function () {
        var a = $.trim($("#location").val()),
            b = $.trim($("#service_check").val()),
            c = $.trim($("#mob").val());
        if ("" == b || (!checkServiceInCache("desktop") && localStorage.getItem("services") !== $("#service_check").val())) swal("Oops!", "Please select a service from auto-complete box only.", "error");
        else if (validateMobile(c))
            if ("" != a && a.toLowerCase().indexOf("india") > -1) {
                $("#searchFrom").toggleClass("hidden"), $("#otp_form").toggleClass("hidden"), $("#cust_otp").focus();
                var d = CI_ROOT + "services/generateUserOTP";
                $.ajax({
                    url: d,
                    data: { mobile: c, service: b, location: a },
                    type: "POST",
                    success: function (a, b) {
                        "success" == b
                            ? a.otp_limit_reached && swal("Maximum OTP Limit Reached!", "Please call our customer care 040-40405050 to raise a request for any service.", "warning")
                            : swal("Oops!", "Error while generating OTP", "error");
                    },
                });
            } else swal("Oops!", "Please select area from auto-complete box only.", "error");
        else swal("Oops!", "Please enter 10 digit valid mobile number.", "error");
    }),
    $("#mobile_form").on("click", function () {
        var a = $.trim($("#location1").val()),
            b = $.trim($("#service_check_mobile").val()),
            c = $.trim($("#mob1").val());
        if (validateMobile(c))
            if ("" != a && a.toLowerCase().indexOf("india") > -1) {
                $("#location-mobile-form").toggleClass("hidden"), $("#otp-form").toggleClass("hidden"), $("#cust_otp1").focus();
                var d = CI_ROOT + "services/generateUserOTP";
                $.ajax({
                    url: d,
                    data: { mobile: c, service: b, location: a },
                    type: "POST",
                    success: function (a, b) {
                        "success" == b
                            ? a.otp_limit_reached && swal("Maximum OTP Limit Reached!", "Please call our customer care 040-40405050 to raise a request for any service.", "warning")
                            : swal("Oops!", "Error while generating OTP", "error");
                    },
                });
            } else swal("Oops!", "Please select area from auto-complete box only.", "error");
        else swal("Oops!", "Please enter 10 digit valid mobile number.", "error");
    }),
    $("#goBack").on("click", function () {
        $("#searchFrom").toggleClass("hidden"), $("#otp_form").toggleClass("hidden");
    });
