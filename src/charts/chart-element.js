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

                        this._modelObserver.observeProperty('height', this._refreshChart);
                        this._modelObserver.observeProperty('width', this._refreshChart);
                        this._modelObserver.observeProperty('options', this._refreshChart);
                        this._modelObserver.observeProperty('data', this._refreshChartData);

                        this._watchChartData();
                    }
                }, {
                    key: '_watchChartData',
                    value: function _watchChartData() {
                        if (this.data != null) {
                            this._modelObserver.observeCollection(this.data.datasets, this._refreshChart);
                            this._modelObserver.observeCollection(this.data.labels, this._refreshChart);
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = this.data.datasets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var ds = _step.value;

                                    this._modelObserver.observeCollection(ds.data, this._refreshChart);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator['return']) {
                                        _iterator['return']();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
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
                                    this._chart = new Chart(context)[this.type](this.data, this.options);
                                } catch (e) {
                                    this._logger.error(e);
                                }
                            }

                            this._canRedraw = false;
                            this._beginThrottling();
                        }
                    }
                }, {
                    key: '_refreshChart',
                    value: function _refreshChart() {
                        this._chart.destroy();

                        this.canvasElement.height = this.height;
                        this.canvasElement.width = this.width;

                        this._createChart();
                    }
                }, {
                    key: '_refreshChartData',
                    value: function _refreshChartData() {
                        this._chart.destroy();

                        this._modelObserver.disposeCollectionSubscriptions();
                        this._watchChartData();

                        this._refreshChart();
                    }
                }, {
                    key: '_hardRefresh',
                    value: function _hardRefresh() {
                        if (this._chart != null) {
                            this._chart.destroy();

                            this.canvasElement.height = this.height;
                            this.canvasElement.width = this.width;

                            this._createChart();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ2bS9jb21wb25lbnRzL2NoYXJ0cy9jaGFydHMvY2hhcnQtZWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7bUZBV2EsWUFBWTs7Ozs7Ozs7dUNBWGpCLE1BQU07eUNBQUUsUUFBUTs4Q0FBRSxhQUFhOzhDQUFFLGFBQWE7MkNBQUUsVUFBVTs7a0RBQzFELGFBQWE7OztBQVVSLHdCQUFZO0FBVVYseUJBVkYsWUFBWSxDQVVULGFBQWEsRUFBQzs7O3lCQVQxQixtQkFBbUIsR0FBRyxDQUNsQixNQUFNLEVBQ04sS0FBSyxFQUNMLE9BQU8sRUFDUCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFVBQVUsQ0FDYjs7QUFHRyx3QkFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDN0Qsd0JBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQyx3QkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdkIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLHdCQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztpQkFDOUI7OzZCQWhCUSxZQUFZOzsyQkFrQmpCLGNBQUMsY0FBYyxFQUFDO0FBQ2hCLDRCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xDLDRCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO0FBQ2pDLDRCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO0FBQy9CLDRCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs7QUFFN0MsNEJBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FB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USxDQUFDLFVBQVUsQ0FBQyxDQUNSLFlBQVksS0FBWixZQUFZO0FBQVosNEJBQVksR0FGeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUVMLFlBQVksS0FBWixZQUFZO0FBQVosNEJBQVksR0FIeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUdOLFlBQVksS0FBWixZQUFZO0FBQVosNEJBQVksR0FKeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUlKLFlBQVksS0FBWixZQUFZO0FBQVosNEJBQVksR0FMeEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUtQLFlBQVksS0FBWixZQUFZO0FBQVosNEJBQVksR0FOeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQU1KLFlBQVksS0FBWixZQUFZO0FBQVosNEJBQVksR0FQeEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQU9WLFlBQVksS0FBWixZQUFZO0FBQVosNEJBQVksR0FSeEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQVFULFlBQVksS0FBWixZQUFZO3VCQUFaLFlBQVkiLCJmaWxlIjoidnZtL2NvbXBvbmVudHMvY2hhcnRzL2NoYXJ0cy9jaGFydC1lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBCaW5kaW5nRW5naW5lLCBMb2dNYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7TW9kZWxPYnNlcnZlcn0gZnJvbSAnLi9oZWxwZXJzL21vZGVsLW9ic2VydmVyJztcclxuXHJcbkBpbmplY3QoQmluZGluZ0VuZ2luZSlcclxuQGN1c3RvbUVsZW1lbnQoJ2NoYXJ0JylcclxuQGJpbmRhYmxlKCdkYXRhJylcclxuQGJpbmRhYmxlKCdvcHRpb25zJylcclxuQGJpbmRhYmxlKCd0eXBlJylcclxuQGJpbmRhYmxlKCdoZWlnaHQnKVxyXG5AYmluZGFibGUoJ3dpZHRoJylcclxuQGJpbmRhYmxlKCd0aHJvdHRsZScpXHJcbmV4cG9ydCBjbGFzcyBDaGFydEVsZW1lbnQge1xyXG4gICAgc3VwcG9ydGVkQ2hhcnRUeXBlcyA9IFtcclxuICAgICAgICAnTGluZScsXHJcbiAgICAgICAgJ0JhcicsXHJcbiAgICAgICAgJ1JhZGFyJyxcclxuICAgICAgICAnUG9sYXJBcmVhJyxcclxuICAgICAgICAnUGllJyxcclxuICAgICAgICAnRG91Z2hudXQnXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJpbmRpbmdFbmdpbmUpe1xyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIgPSBuZXcgTW9kZWxPYnNlcnZlcih0aGlzLCBiaW5kaW5nRW5naW5lKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCdjaGFydGpzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FuUmVkcmF3ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRocm90dGxlID0gNTAwO1xyXG4gICAgICAgIHRoaXMuX2lzVGhyb3R0bGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBiaW5kKGJpbmRpbmdDb250ZXh0KXtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodCB8fCA0MDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMud2lkdGggfHwgNTAwO1xyXG4gICAgICAgIHRoaXMudGhyb3R0bGUgPSBNYXRoLm1pbih0aGlzLnRocm90dGxlLCAyNTApO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCl7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlQ2hhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlUHJvcGVydHkoJ2hlaWdodCcsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlUHJvcGVydHkoJ3dpZHRoJywgdGhpcy5fcmVmcmVzaENoYXJ0KTtcclxuICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVQcm9wZXJ0eSgnb3B0aW9ucycsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlUHJvcGVydHkoJ2RhdGEnLCB0aGlzLl9yZWZyZXNoQ2hhcnREYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl93YXRjaENoYXJ0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF93YXRjaENoYXJ0RGF0YSgpe1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIub2JzZXJ2ZUNvbGxlY3Rpb24odGhpcy5kYXRhLmRhdGFzZXRzLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVDb2xsZWN0aW9uKHRoaXMuZGF0YS5sYWJlbHMsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgZHMgb2YgdGhpcy5kYXRhLmRhdGFzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVDb2xsZWN0aW9uKGRzLmRhdGEsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNoYXJ0KCl7XHJcbiAgICAgICAgaWYodGhpcy5fY2FuUmVkcmF3ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2lzU3VwcG9ydGVkQ2hhcnRUeXBlKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFydCA9IG5ldyBDaGFydChjb250ZXh0KVt0aGlzLnR5cGVdKHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2FuUmVkcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2JlZ2luVGhyb3R0bGluZygpO1xyXG4gICAgICAgIH0gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBfcmVmcmVzaENoYXJ0KCl7XHJcbiAgICAgICAgdGhpcy5fY2hhcnQuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlQ2hhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVmcmVzaENoYXJ0RGF0YSgpe1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5kaXNwb3NlQ29sbGVjdGlvblN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLl93YXRjaENoYXJ0RGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZWZyZXNoQ2hhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFyZFJlZnJlc2goKXtcclxuICAgICAgICBpZih0aGlzLl9jaGFydCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUNoYXJ0KCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX2lzU3VwcG9ydGVkQ2hhcnRUeXBlKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdXBwb3J0ZWRDaGFydFR5cGVzLmluZGV4T2YodGhpcy50eXBlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCd1bnN1cHBvcnRlZCBjaGFydCB0eXBlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9iZWdpblRocm90dGxpbmcoKXtcclxuICAgICAgICBpZih0aGlzLl9pc1Rocm90dGxpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzVGhyb3R0bGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhblJlZHJhdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1Rocm90dGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLnRocm90dGxlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpe1xyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
