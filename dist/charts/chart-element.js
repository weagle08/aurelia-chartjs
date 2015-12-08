System.register(['aurelia-framework', './helpers/model-observer'], function (_export) {
    'use strict';

    var inject, bindable, customElement, BindingEngine, LogManager, ModelObserver, ChartElement;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            customElement = _aureliaFramework.customElement;
            BindingEngine = _aureliaFramework.BindingEngine;
            LogManager = _aureliaFramework.LogManager;
        }, function (_helpersModelObserver) {
            ModelObserver = _helpersModelObserver.ModelObserver;
        }],
        execute: function () {
            ChartElement = (function () {
                function ChartElement(bindingEngine) {
                    _classCallCheck(this, _ChartElement);

                    this.supportedChartTypes = ['Line', 'Bar', 'Radar', 'PolarArea', 'Pie', 'Doughnut'];

                    this._modelObserver = new ModelObserver(this, bindingEngine);
                    this._logger = LogManager.getLogger('chartjs');
                    this._canRedraw = true;
                    this.throttle = 500;
                    this._isThrottling = false;
                }

                _createClass(ChartElement, [{
                    key: 'bind',
                    value: function bind(bindingContext) {
                        this.options = this.options || {};
                        this.height = this.height || 400;
                        this.width = this.width || 500;
                        this.throttle = Math.min(this.throttle, 250);

                        this.canvasElement.height = this.height;
                        this.canvasElement.width = this.width;
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        this._createChart();
                    }
                }, {
                    key: '_createChart',
                    value: function _createChart() {
                        if (this._canRedraw === true) {
                            if (this._isSupportedChartType() === true) {
                                try {
                                    var canvas = this.canvasElement;
                                    var context = canvas.getContext('2d');
                                    context.clearRect(0, 0, canvas.width, canvas.height);
                                    this.chart = new Chart(context)[this.type](this.data, this.options);
                                } catch (e) {
                                    this._logger.error(e);
                                }
                            }

                            this._canRedraw = false;
                            this._beginThrottling();
                        }
                    }
                }, {
                    key: '_isSupportedChartType',
                    value: function _isSupportedChartType() {
                        if (this.supportedChartTypes.indexOf(this.type) === -1) {
                            this._logger.error('unsupported chart type');
                            return false;
                        }

                        return true;
                    }
                }, {
                    key: '_beginThrottling',
                    value: function _beginThrottling() {
                        if (this._isThrottling === false) {
                            this._isThrottling = true;
                            setTimeout((function () {
                                this._canRedraw = true;
                                this._isThrottling = false;
                            }).bind(this), this.throttle);
                        }
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        this._modelObserver.dispose();
                    }
                }]);

                var _ChartElement = ChartElement;
                ChartElement = bindable('throttle')(ChartElement) || ChartElement;
                ChartElement = bindable('width')(ChartElement) || ChartElement;
                ChartElement = bindable('height')(ChartElement) || ChartElement;
                ChartElement = bindable('type')(ChartElement) || ChartElement;
                ChartElement = bindable('options')(ChartElement) || ChartElement;
                ChartElement = bindable('data')(ChartElement) || ChartElement;
                ChartElement = customElement('chart')(ChartElement) || ChartElement;
                ChartElement = inject(BindingEngine)(ChartElement) || ChartElement;
                return ChartElement;
            })();

            _export('ChartElement', ChartElement);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9jaGFydC1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzttRkFXYSxZQUFZOzs7Ozs7Ozt1Q0FYakIsTUFBTTt5Q0FBRSxRQUFROzhDQUFFLGFBQWE7OENBQUUsYUFBYTsyQ0FBRSxVQUFVOztrREFDMUQsYUFBYTs7O0FBVVIsd0JBQVk7QUFVVix5QkFWRixZQUFZLENBVVQsYUFBYSxFQUFDOzs7eUJBVDFCLG1CQUFtQixHQUFHLENBQ2xCLE1BQU0sRUFDTixLQUFLLEVBQ0wsT0FBTyxFQUNQLFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxDQUNiOztBQUdHLHdCQUFJLENBQUMsY0FBYyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM3RCx3QkFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2Qix3QkFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsd0JBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUM5Qjs7NkJBaEJRLFlBQVk7OzJCQWtCakIsY0FBQyxjQUFjLEVBQUM7QUFDaEIsNEJBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsNEJBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7QUFDakMsNEJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7QUFDL0IsNEJBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztBQUU3Qyw0QkFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN4Qyw0QkFB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e2luamVjdCwgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIEJpbmRpbmdFbmdpbmUsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtNb2RlbE9ic2VydmVyfSBmcm9tICcuL2hlbHBlcnMvbW9kZWwtb2JzZXJ2ZXInO1xyXG5cclxuQGluamVjdChCaW5kaW5nRW5naW5lKVxyXG5AY3VzdG9tRWxlbWVudCgnY2hhcnQnKVxyXG5AYmluZGFibGUoJ2RhdGEnKVxyXG5AYmluZGFibGUoJ29wdGlvbnMnKVxyXG5AYmluZGFibGUoJ3R5cGUnKVxyXG5AYmluZGFibGUoJ2hlaWdodCcpXHJcbkBiaW5kYWJsZSgnd2lkdGgnKVxyXG5AYmluZGFibGUoJ3Rocm90dGxlJylcclxuZXhwb3J0IGNsYXNzIENoYXJ0RWxlbWVudCB7XHJcbiAgICBzdXBwb3J0ZWRDaGFydFR5cGVzID0gW1xyXG4gICAgICAgICdMaW5lJyxcclxuICAgICAgICAnQmFyJyxcclxuICAgICAgICAnUmFkYXInLFxyXG4gICAgICAgICdQb2xhckFyZWEnLFxyXG4gICAgICAgICdQaWUnLFxyXG4gICAgICAgICdEb3VnaG51dCdcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmluZGluZ0VuZ2luZSl7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlciA9IG5ldyBNb2RlbE9ic2VydmVyKHRoaXMsIGJpbmRpbmdFbmdpbmUpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoJ2NoYXJ0anMnKTtcclxuICAgICAgICB0aGlzLl9jYW5SZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGhyb3R0bGUgPSA1MDA7XHJcbiAgICAgICAgdGhpcy5faXNUaHJvdHRsaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJpbmQoYmluZGluZ0NvbnRleHQpe1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0IHx8IDQwMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy53aWR0aCB8fCA1MDA7XHJcbiAgICAgICAgdGhpcy50aHJvdHRsZSA9IE1hdGgubWluKHRoaXMudGhyb3R0bGUsIDI1MCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB0aGlzLndpZHRoOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICB0aGlzLl9jcmVhdGVDaGFydCgpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBfY3JlYXRlQ2hhcnQoKXtcclxuICAgICAgICBpZih0aGlzLl9jYW5SZWRyYXcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5faXNTdXBwb3J0ZWRDaGFydFR5cGUoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY29udGV4dClbdGhpcy50eXBlXSh0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NhblJlZHJhdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9iZWdpblRocm90dGxpbmcoKTtcclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIF9pc1N1cHBvcnRlZENoYXJ0VHlwZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3VwcG9ydGVkQ2hhcnRUeXBlcy5pbmRleE9mKHRoaXMudHlwZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcigndW5zdXBwb3J0ZWQgY2hhcnQgdHlwZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfYmVnaW5UaHJvdHRsaW5nKCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNUaHJvdHRsaW5nID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1Rocm90dGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5SZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNUaHJvdHRsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy50aHJvdHRsZSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKXtcclxuICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLmRpc3Bvc2UoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
