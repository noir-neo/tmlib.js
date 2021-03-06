/*
 * canvaselement.js
 */

tm.display = tm.display || {};


(function() {

    /**
     * @class tm.display.CanvasElement
     * キャンバスエレメント
     * @extends tm.app.Object2D
     */
    tm.display.CanvasElement = tm.createClass({
        superClass: tm.app.Object2D,

        /** 更新フラグ */
        isUpdate: true,
        /** 表示フラグ */
        visible: true,
        /** fillStyle */
        fillStyle: "white",
        /** strokeStyle */
        strokeStyle: "white",
        /** アルファ */
        alpha: 1.0,
        /** ブレンドモード */
        blendMode: "source-over",
        /** シャドウカラー */
        shadowColor: "black",
        /** @TODO ? */
        shadowOffsetX: 0,
        /** @TODO ? */
        shadowOffsetY: 0,
        /** @TODO ? */
        shadowBlur: 0,

        /**
         * @constructor
         */
        init: function() {
            this.superInit();
        },

        /**
         * @TODO ?
         */
        setAlpha: function(alpha) {
            this.alpha = alpha;
            return this;
        },

        /**
         * @TODO ?
         */
        setShadowColor: function(color) {
            this.shadowColor = color;
            return this;
        },
        
        /**
         * @TODO ?
         */
        setShadowBlur: function(blur) {
            this.shadowBlur = blur;
            return this;
        },
        
        /**
         * @TODO ?
         */
        setShadowOffset: function(x, y) {
            this.shadowOffsetX = x;
            this.shadowOffsetY = y;
            return this;
        },

        /**
         * @TODO ?
         */
        drawBoundingCircle: function(canvas) {
            canvas.save();
            canvas.lineWidth = 2;
            canvas.strokeCircle(0, 0, this.radius);
            canvas.restore();
        },

        /**
         * @TODO ?
         */
        drawBoundingRect: function(canvas) {
            canvas.save();
            canvas.lineWidth = 2;
            canvas.strokeRect(-this.width*this.originX, -this.height*this.originY, this.width, this.height);
            canvas.restore();
        },

        /**
         * @TODO ?
         */
        drawFillRect: function(ctx) {
            ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
            return this;
        },
        /**
         * @TODO ?
         */
        drawStrokeRect: function(ctx) {
            ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);
            return this;
        },

        /**
         * @TODO ?
         */
        drawFillArc: function(ctx) {
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI*2, false);
            ctx.fill();
            ctx.closePath();
            return this;
        },
        /**
         * @TODO ?
         */
        drawStrokeArc: function(ctx) {
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI*2, false);
            ctx.stroke();
            ctx.closePath();
            return this;
        },

        /**
         * @TODO ?
         */
        show: function() {
            this.visible = true;
            return this;
        },

        /**
         * @TODO ?
         */
        hide: function() {
            this.visible = false;
            return this;
        },

        /**
         * @TODO ?
         */
        setFillStyle: function(style) {
            this.fillStyle = style;
            return this;
        },

        /**
         * @TODO ?
         */
        setStrokeStyle: function(style) {
            this.strokeStyle = style;
            return this;
        },

        /**
         * @TODO ?
         */
        setBlendMode: function(blendMode) {
            this.blendMode = blendMode;
            return this;
        },

        /**
         * @TODO ?
         */
        load: function(data) {
            var self = this;

            data.layers.forEach(function(layer) {
                if (layer.type != "objectgroup") return ;

                var group = tm.display.CanvasElement().addChildTo(self);
                group.width = layer.width;
                group.height = layer.height;

                layer.objects.forEach(function(obj) {
                    var _class = tm.using(obj.type);
                    if (Object.keys(_class).length === 0) {
                        _class=tm.display[obj.type];
                    }
                    var initParam = null;
                    if (obj.properties.init) {
                        initParam = JSON.parse(obj.properties.init);
                    }
                    var element = _class.apply(null, initParam).addChildTo(group);
                    var props   = obj.properties;
                    for (var key in props) {
                        if (key == "init") continue ;
                        var value = props[key];
                        element[key] = value;
                    }

                    element.x = obj.x;
                    element.y = obj.y;
                    element.width = obj.width;
                    element.height = obj.height;
                });

                self[layer.name] = group;
            });
        },

        /**
         * @TODO ?
         */
        fromJSON: function(data) {
            for (var key in data) {
                var value = data[key];
                if (key == "children") {
                    for (var i=0,len=value.length; i<len; ++i) {
                        var data = value[i];
                        var init = data["init"] || [];
                        var _class = tm.using(data.type);
                        if (Object.keys(_class).length === 0) {
                            _class = tm.display[data.type];
                        }
                        var elm = _class.apply(null, init).addChildTo(this);
                        elm.fromJSON(data);
                        this[data.name] = elm;
                    }
                }
                else {
                    this[key] = value;
                }
            }

            return this;
        },

        /**
         * @TODO ?
         */
        toJSON: function() {
            // TODO:
        },

        /**
         * @TODO ?
         * @private
         */
        _calcAlpha: function() {
            if (!this.parent) {
                this._worldAlpha = this.alpha;
                return ;
            }
            else {
                // alpha
                this._worldAlpha = this.parent._worldAlpha * this.alpha;
            }
        },

        /**
         * @TODO ?
         * @private
         */
        _dirtyCalc: function() {
            this._calcAlpha();
            this._calcWorldMatrix();
        },
    });


})();

