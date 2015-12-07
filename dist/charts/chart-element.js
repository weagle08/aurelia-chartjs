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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9jaGFydC1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzttRkFXYSxZQUFZOzs7Ozs7Ozt1Q0FYakIsTUFBTTt5Q0FBRSxRQUFROzhDQUFFLGFBQWE7OENBQUUsYUFBYTsyQ0FBRSxVQUFVOztrREFDMUQsYUFBYTs7O0FBVVIsd0JBQVk7QUFVVix5QkFWRixZQUFZLENBVVQsYUFBYSxFQUFDOzs7eUJBVDFCLG1CQUFtQixHQUFHLENBQ2xCLE1BQU0sRUFDTixLQUFLLEVBQ0wsT0FBTyxFQUNQLFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxDQUNiOztBQUdHLHdCQUFJLENBQUMsY0FBYyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM3RCx3QkFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2Qix3QkFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsd0JBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUM5Qjs7NkJBaEJRLFlBQVk7OzJCQWtCakIsY0FBQyxjQUFjLEVBQUM7QUFDaEIsNEJBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsNEJBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7QUFDakMsNEJBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7QUFDL0IsNEJBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztBQUU3Qyw0QkFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN4Qyw0QkFB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WUFBWSxLQUFaLFlBQVk7QUFBWiw0QkFBWSxHQUZ4QixRQUFRLENBQUMsT0FBTyxDQUFDLENBRUwsWUFBWSxLQUFaLFlBQVk7QUFBWiw0QkFBWSxHQUh4QixRQUFRLENBQUMsUUFBUSxDQUFDLENBR04sWUFBWSxLQUFaLFlBQVk7QUFBWiw0QkFBWSxHQUp4QixRQUFRLENBQUMsTUFBTSxDQUFDLENBSUosWUFBWSxLQUFaLFlBQVk7QUFBWiw0QkFBWSxHQUx4QixRQUFRLENBQUMsU0FBUyxDQUFDLENBS1AsWUFBWSxLQUFaLFlBQVk7QUFBWiw0QkFBWSxHQU54QixRQUFRLENBQUMsTUFBTSxDQUFDLENBTUosWUFBWSxLQUFaLFlBQVk7QUFBWiw0QkFBWSxHQVB4QixhQUFhLENBQUMsT0FBTyxDQUFDLENBT1YsWUFBWSxLQUFaLFlBQVk7QUFBWiw0QkFBWSxHQVJ4QixNQUFNLENBQUMsYUFBYSxDQUFDLENBUVQsWUFBWSxLQUFaLFlBQVk7dUJBQVosWUFBWSIsImZpbGUiOiJjaGFydHMvY2hhcnQtZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgQmluZGluZ0VuZ2luZSwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge01vZGVsT2JzZXJ2ZXJ9IGZyb20gJy4vaGVscGVycy9tb2RlbC1vYnNlcnZlcic7XHJcblxyXG5AaW5qZWN0KEJpbmRpbmdFbmdpbmUpXHJcbkBjdXN0b21FbGVtZW50KCdjaGFydCcpXHJcbkBiaW5kYWJsZSgnZGF0YScpXHJcbkBiaW5kYWJsZSgnb3B0aW9ucycpXHJcbkBiaW5kYWJsZSgndHlwZScpXHJcbkBiaW5kYWJsZSgnaGVpZ2h0JylcclxuQGJpbmRhYmxlKCd3aWR0aCcpXHJcbkBiaW5kYWJsZSgndGhyb3R0bGUnKVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRFbGVtZW50IHtcclxuICAgIHN1cHBvcnRlZENoYXJ0VHlwZXMgPSBbXHJcbiAgICAgICAgJ0xpbmUnLFxyXG4gICAgICAgICdCYXInLFxyXG4gICAgICAgICdSYWRhcicsXHJcbiAgICAgICAgJ1BvbGFyQXJlYScsXHJcbiAgICAgICAgJ1BpZScsXHJcbiAgICAgICAgJ0RvdWdobnV0J1xyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihiaW5kaW5nRW5naW5lKXtcclxuICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyID0gbmV3IE1vZGVsT2JzZXJ2ZXIodGhpcywgYmluZGluZ0VuZ2luZSk7ICAgICAgICBcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBMb2dNYW5hZ2VyLmdldExvZ2dlcignY2hhcnRqcycpO1xyXG4gICAgICAgIHRoaXMuX2NhblJlZHJhdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aHJvdHRsZSA9IDUwMDtcclxuICAgICAgICB0aGlzLl9pc1Rocm90dGxpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYmluZChiaW5kaW5nQ29udGV4dCl7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgfHwgNDAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLndpZHRoIHx8IDUwMDtcclxuICAgICAgICB0aGlzLnRocm90dGxlID0gTWF0aC5taW4odGhpcy50aHJvdHRsZSwgMjUwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IHRoaXMud2lkdGg7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpe1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUNoYXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIub2JzZXJ2ZVByb3BlcnR5KCdoZWlnaHQnLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIub2JzZXJ2ZVByb3BlcnR5KCd3aWR0aCcsIHRoaXMuX3JlZnJlc2hDaGFydCk7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlUHJvcGVydHkoJ29wdGlvbnMnLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIub2JzZXJ2ZVByb3BlcnR5KCdkYXRhJywgdGhpcy5fcmVmcmVzaENoYXJ0RGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fd2F0Y2hDaGFydERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBfd2F0Y2hDaGFydERhdGEoKXtcclxuICAgICAgICBpZih0aGlzLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLm9ic2VydmVDb2xsZWN0aW9uKHRoaXMuZGF0YS5kYXRhc2V0cywgdGhpcy5fcmVmcmVzaENoYXJ0KTtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlQ29sbGVjdGlvbih0aGlzLmRhdGEubGFiZWxzLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGRzIG9mIHRoaXMuZGF0YS5kYXRhc2V0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kZWxPYnNlcnZlci5vYnNlcnZlQ29sbGVjdGlvbihkcy5kYXRhLCB0aGlzLl9yZWZyZXNoQ2hhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVDaGFydCgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2NhblJlZHJhdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLl9pc1N1cHBvcnRlZENoYXJ0VHlwZSgpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXNFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhcnQgPSBuZXcgQ2hhcnQoY29udGV4dClbdGhpcy50eXBlXSh0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NhblJlZHJhdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9iZWdpblRocm90dGxpbmcoKTtcclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX3JlZnJlc2hDaGFydCgpe1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IHRoaXMud2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUNoYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlZnJlc2hDaGFydERhdGEoKXtcclxuICAgICAgICB0aGlzLl9jaGFydC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21vZGVsT2JzZXJ2ZXIuZGlzcG9zZUNvbGxlY3Rpb25TdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2hDaGFydERhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVmcmVzaENoYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhcmRSZWZyZXNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5fY2hhcnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFydC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IHRoaXMud2lkdGg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVDaGFydCgpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIF9pc1N1cHBvcnRlZENoYXJ0VHlwZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3VwcG9ydGVkQ2hhcnRUeXBlcy5pbmRleE9mKHRoaXMudHlwZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcigndW5zdXBwb3J0ZWQgY2hhcnQgdHlwZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfYmVnaW5UaHJvdHRsaW5nKCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNUaHJvdHRsaW5nID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1Rocm90dGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5SZWRyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNUaHJvdHRsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy50aHJvdHRsZSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKXtcclxuICAgICAgICB0aGlzLl9tb2RlbE9ic2VydmVyLmRpc3Bvc2UoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
