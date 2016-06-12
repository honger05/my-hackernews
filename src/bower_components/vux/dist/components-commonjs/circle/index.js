module.exports = function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
}([ function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(4);
}, function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        props: {
            strokeWidth: {
                type: Number,
                "default": 1
            },
            strokeColor: {
                type: String,
                "default": "#3FC7FA"
            },
            trailWidth: {
                type: Number,
                "default": 1
            },
            trailColor: {
                type: String,
                "default": "#D9D9D9"
            },
            percent: {
                type: Number,
                "default": 0
            }
        },
        computed: {
            radius: function radius() {
                return 50 - this.strokeWidth / 2;
            },
            pathString: function pathString() {
                return "M 50,50 m 0,-" + this.radius + "\n      a " + this.radius + "," + this.radius + " 0 1 1 0," + 2 * this.radius + "\n      a " + this.radius + "," + this.radius + " 0 1 1 0,-" + 2 * this.radius;
            },
            len: function len() {
                return Math.PI * 2 * this.radius;
            },
            pathStyle: function pathStyle() {
                return {
                    "stroke-dasharray": this.len + "px " + this.len + "px",
                    "stroke-dashoffset": (100 - this.percent) / 100 * this.len + "px",
                    transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"
                };
            }
        }
    };
}, function(module, exports) {}, function(module, exports) {
    module.exports = '<div class=vux-circle> <svg viewBox="0 0 100 100"> <path :d=pathString :stroke=trailColor :stroke-width=trailWidth :fill-opacity=0 /> <path :d=pathString stroke-linecap=round :stroke=strokeColor :stroke-width=strokeWidth fill-opacity=0 :style=pathStyle /> </svg> <div class=vux-circle-content><slot></slot></div> </div>';
}, function(module, exports, __webpack_require__) {
    var __vue_script__, __vue_template__;
    __webpack_require__(2);
    __vue_script__ = __webpack_require__(1);
    __vue_template__ = __webpack_require__(3);
    module.exports = __vue_script__ || {};
    if (module.exports.__esModule) module.exports = module.exports.default;
    if (__vue_template__) {
        (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
    }
} ]);