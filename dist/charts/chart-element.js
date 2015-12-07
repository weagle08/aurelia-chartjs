System.register([], function (_export2) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            System.register(['aurelia-framework', './helpers/model-observer'], function (_export) {
                'use strict';

                var inject, bindable, customElement, BindingEngine, LogManager, ModelObserver, ChartElement;

                var _createClass = (function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                })();

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function');
                    }
                }

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
                    execute: function execute() {
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
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9jaGFydC1lbGVtZW50LmpzIiwiL3NvdXJjZS9jaGFydHMvdnZtL2NvbXBvbmVudHMvY2hhcnRzL2NoYXJ0cy9jaGFydC1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtCQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRTtBQUNsRiw0QkFBWSxDQUFDOztBQUViLG9CQUFJLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQ1FwRSxZQUFZLENBQUE7O0FETnJCLG9CQUFJLFlBQVksR0FBRyxDQUFDLFlBQVk7QUFBRSw2QkFBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsZ0NBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQUFBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxBQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7eUJBQUU7cUJBQUUsQUFBQyxPQUFPLFVBQVUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBRSw0QkFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxBQUFDLElBQUksV0FBVyxFQUFFLGdCQUFnQixDQUFDLFdB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LENBSUosWUFBWSxDQUFBLElBQVosWUFBWSxDQUFBO0FBQVosd0NBQVksR0FMeEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUtQLFlBQVksQ0FBQSxJQUFaLFlBQVksQ0FBQTtBQUFaLHdDQUFZLEdBTnhCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FNSixZQUFZLENBQUEsSUFBWixZQUFZLENBQUE7QUFBWix3Q0FBWSxHQVB4QixhQUFhLENBQUMsT0FBTyxDQUFDLENBT1YsWUFBWSxDQUFBLElBQVosWUFBWSxDQUFBO0FBQVosd0NBQVksR0FSeEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQVFULFlBQVksQ0FBQSxJQUFaLFlBQVksQ0FBQTtBRHFLVCxtQ0NyS0gsWUFBWSxDQUFBO3lCRHNLWixDQUFBLEVBQUcsQ0FBQzs7QUFFTCwrQkFBTyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztxQkFDekM7aUJBQ0osQ0FBQzthQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJjaGFydHMvY2hhcnQtZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5yZWdpc3RlcihbJ2F1cmVsaWEtZnJhbWV3b3JrJywgJy4vaGVscGVycy9tb2RlbC1vYnNlcnZlciddLCBmdW5jdGlvbiAoX2V4cG9ydCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBpbmplY3QsIGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBCaW5kaW5nRW5naW5lLCBMb2dNYW5hZ2VyLCBNb2RlbE9ic2VydmVyLCBDaGFydEVsZW1lbnQ7XG5cbiAgICB2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG4gICAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXR0ZXJzOiBbZnVuY3Rpb24gKF9hdXJlbGlhRnJhbWV3b3JrKSB7XG4gICAgICAgICAgICBpbmplY3QgPSBfYXVyZWxpYUZyYW1ld29yay5pbmplY3Q7XG4gICAgICAgICAgICBiaW5kYWJsZSA9IF9hdXJlbGlhRnJhbWV3b3JrLmJpbmRhYmxlO1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudCA9IF9hdXJlbGlhRnJhbWV3b3JrLmN1c3RvbUVsZW1lbnQ7XG4gICAgICAgICAgICBCaW5kaW5nRW5naW5lID0gX2F1cmVsaWFGcmFtZXdvcmsuQmluZGluZ0VuZ2luZTtcbiAgICAgICAgICAgIExvZ01hbmFnZXIgPSBfYXVyZWxpYUZyYW1ld29yay5Mb2dNYW5hZ2VyO1xuICAgICAgICB9LCBmdW5jdGlvbiAoX2hlbHBlcnNNb2RlbE9ic2VydmVyKSB7XG4gICAgICAgICAgICBNb2RlbE9ic2VydmVyID0gX2hlbHBlcnNNb2RlbE9ic2VydmVyLk1vZGVsT2JzZXJ2ZXI7XG4gICAgICAgIH1dLFxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBDaGFydEVsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIENoYXJ0RWxlbWVudChiaW5kaW5nRW5naW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfQ2hhcnRFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cHBvcnRlZENoYXJ0VHlwZXMgPSBbJ0xpbmUnLCAnQmFyJywgJ1JhZGFyJywgJ1BvbGFyQXJlYScsICdQaWUnLCAnRG91Z2hudXQnXTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyID0gbmV3IE1vZGVsT2JzZXJ2ZXIodGhpcywgYmluZGluZ0VuZ2luZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCdjaGFydGpzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhblJlZHJhdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3R0bGUgPSA1MDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzVGhyb3R0bGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jcmVhdGVDbGFzcyhDaGFydEVsZW1lbnQsIFt7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2JpbmQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZChiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodCB8fCA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy53aWR0aCB8fCA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm90dGxlID0gTWF0aC5taW4odGhpcy50aHJvdHRsZSwgMjUwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXR0YWNoZWQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVDaGFydCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVQcm9wZXJ0eSgnaGVpZ2h0JywgdGhpcy5fcmVmcmVzaENoYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIub2JzZXJ2ZVByb3BlcnR5KCd3aWR0aCcsIHRoaXMuX3JlZnJlc2hDaGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVQcm9wZXJ0eSgnb3B0aW9ucycsIHRoaXMuX3JlZnJlc2hDaGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVQcm9wZXJ0eSgnZGF0YScsIHRoaXMuX3JlZnJlc2hDaGFydERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl93YXRjaENoYXJ0RGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdfd2F0Y2hDaGFydERhdGEnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoQ2hhcnREYXRhKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlQ29sbGVjdGlvbih0aGlzLmRhdGEuZGF0YXNldHMsIHRoaXMuX3JlZnJlc2hDaGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlQ29sbGVjdGlvbih0aGlzLmRhdGEubGFiZWxzLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmRhdGEuZGF0YXNldHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHMgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlQ29sbGVjdGlvbihkcy5kYXRhLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbJ3JldHVybiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yWydyZXR1cm4nXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ19jcmVhdGVDaGFydCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlQ2hhcnQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FuUmVkcmF3ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzU3VwcG9ydGVkQ2hhcnRUeXBlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhc0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYXJ0ID0gbmV3IENoYXJ0KGNvbnRleHQpW3RoaXMudHlwZV0odGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5SZWRyYXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iZWdpblRocm90dGxpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnX3JlZnJlc2hDaGFydCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVmcmVzaENoYXJ0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhcnQuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVDaGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdfcmVmcmVzaENoYXJ0RGF0YScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVmcmVzaENoYXJ0RGF0YSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5kaXNwb3NlQ29sbGVjdGlvblN1YnNjcmlwdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhdGNoQ2hhcnREYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hDaGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdfaGFyZFJlZnJlc2gnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhcmRSZWZyZXNoKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoYXJ0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFydC5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUNoYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ19pc1N1cHBvcnRlZENoYXJ0VHlwZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNTdXBwb3J0ZWRDaGFydFR5cGUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0ZWRDaGFydFR5cGVzLmluZGV4T2YodGhpcy50eXBlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ3Vuc3VwcG9ydGVkIGNoYXJ0IHR5cGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdfYmVnaW5UaHJvdHRsaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9iZWdpblRocm90dGxpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNUaHJvdHRsaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzVGhyb3R0bGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5SZWRyYXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1Rocm90dGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpLCB0aGlzLnRocm90dGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZGV0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoZWQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgICAgIHZhciBfQ2hhcnRFbGVtZW50ID0gQ2hhcnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIENoYXJ0RWxlbWVudCA9IGJpbmRhYmxlKCd0aHJvdHRsZScpKENoYXJ0RWxlbWVudCkgfHwgQ2hhcnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIENoYXJ0RWxlbWVudCA9IGJpbmRhYmxlKCd3aWR0aCcpKENoYXJ0RWxlbWVudCkgfHwgQ2hhcnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIENoYXJ0RWxlbWVudCA9IGJpbmRhYmxlKCdoZWlnaHQnKShDaGFydEVsZW1lbnQpIHx8IENoYXJ0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBDaGFydEVsZW1lbnQgPSBiaW5kYWJsZSgndHlwZScpKENoYXJ0RWxlbWVudCkgfHwgQ2hhcnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIENoYXJ0RWxlbWVudCA9IGJpbmRhYmxlKCdvcHRpb25zJykoQ2hhcnRFbGVtZW50KSB8fCBDaGFydEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgQ2hhcnRFbGVtZW50ID0gYmluZGFibGUoJ2RhdGEnKShDaGFydEVsZW1lbnQpIHx8IENoYXJ0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBDaGFydEVsZW1lbnQgPSBjdXN0b21FbGVtZW50KCdjaGFydCcpKENoYXJ0RWxlbWVudCkgfHwgQ2hhcnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIENoYXJ0RWxlbWVudCA9IGluamVjdChCaW5kaW5nRW5naW5lKShDaGFydEVsZW1lbnQpIHx8IENoYXJ0RWxlbWVudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2hhcnRFbGVtZW50O1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgX2V4cG9ydCgnQ2hhcnRFbGVtZW50JywgQ2hhcnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59KTtcblxuIiwiaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBCaW5kaW5nRW5naW5lLCBMb2dNYW5hZ2VyfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7TW9kZWxPYnNlcnZlcn0gZnJvbSAnLi9oZWxwZXJzL21vZGVsLW9ic2VydmVyJztcclxuXHJcbkBpbmplY3QoQmluZGluZ0VuZ2luZSlcclxuQGN1c3RvbUVsZW1lbnQoJ2NoYXJ0JylcclxuQGJpbmRhYmxlKCdkYXRhJylcclxuQGJpbmRhYmxlKCdvcHRpb25zJylcclxuQGJpbmRhYmxlKCd0eXBlJylcclxuQGJpbmRhYmxlKCdoZWlnaHQnKVxyXG5AYmluZGFibGUoJ3dpZHRoJylcclxuQGJpbmRhYmxlKCd0aHJvdHRsZScpXHJcbmV4cG9ydCBjbGFzcyBDaGFydEVsZW1lbnQge1xyXG4gICAgc3VwcG9ydGVkQ2hhcnRUeXBlcyA9IFtcclxuICAgICAgICAnTGluZScsXHJcbiAgICAgICAgJ0JhcicsXHJcbiAgICAgICAgJ1JhZGFyJyxcclxuICAgICAgICAnUG9sYXJBcmVhJyxcclxuICAgICAgICAnUGllJyxcclxuICAgICAgICAnRG91Z2hudXQnXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJpbmRpbmdFbmdpbmUpe1xyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIgPSBuZXcgTW9kZWxPYnNlcnZlcih0aGlzLCBiaW5kaW5nRW5naW5lKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IExvZ01hbmFnZXIuZ2V0TG9nZ2VyKCdjaGFydGpzJyk7XHJcbiAgICAgICAgdGhpcy5fY2FuUmVkcmF3ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRocm90dGxlID0gNTAwO1xyXG4gICAgICAgIHRoaXMuX2lzVGhyb3R0bGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBiaW5kKGJpbmRpbmdDb250ZXh0KXtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodCB8fCA0MDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMud2lkdGggfHwgNTAwO1xyXG4gICAgICAgIHRoaXMudGhyb3R0bGUgPSBNYXRoLm1pbih0aGlzLnRocm90dGxlLCAyNTApO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCl7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlQ2hhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlUHJvcGVydHkoJ2hlaWdodCcsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlUHJvcGVydHkoJ3dpZHRoJywgdGhpcy5fcmVmcmVzaENoYXJ0KTtcclxuICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVQcm9wZXJ0eSgnb3B0aW9ucycsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlUHJvcGVydHkoJ2RhdGEnLCB0aGlzLl9yZWZyZXNoQ2hhcnREYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl93YXRjaENoYXJ0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF93YXRjaENoYXJ0RGF0YSgpe1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIub2JzZXJ2ZUNvbGxlY3Rpb24odGhpcy5kYXRhLmRhdGFzZXRzLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVDb2xsZWN0aW9uKHRoaXMuZGF0YS5sYWJlbHMsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgZHMgb2YgdGhpcy5kYXRhLmRhdGFzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVDb2xsZWN0aW9uKGRzLmRhdGEsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNoYXJ0KCl7XHJcbiAgICAgICAgaWYodGhpcy5fY2FuUmVkcmF3ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2lzU3VwcG9ydGVkQ2hhcnRUeXBlKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFydCA9IG5ldyBDaGFydChjb250ZXh0KVt0aGlzLnR5cGVdKHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2FuUmVkcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2JlZ2luVGhyb3R0bGluZygpO1xyXG4gICAgICAgIH0gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBfcmVmcmVzaENoYXJ0KCl7XHJcbiAgICAgICAgdGhpcy5fY2hhcnQuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlQ2hhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVmcmVzaENoYXJ0RGF0YSgpe1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5kaXNwb3NlQ29sbGVjdGlvblN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLl93YXRjaENoYXJ0RGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZWZyZXNoQ2hhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFyZFJlZnJlc2goKXtcclxuICAgICAgICBpZih0aGlzLl9jaGFydCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gdGhpcy53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUNoYXJ0KCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX2lzU3VwcG9ydGVkQ2hhcnRUeXBlKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdXBwb3J0ZWRDaGFydFR5cGVzLmluZGV4T2YodGhpcy50eXBlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCd1bnN1cHBvcnRlZCBjaGFydCB0eXBlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9iZWdpblRocm90dGxpbmcoKXtcclxuICAgICAgICBpZih0aGlzLl9pc1Rocm90dGxpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzVGhyb3R0bGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhblJlZHJhdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1Rocm90dGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLnRocm90dGxlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpe1xyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
