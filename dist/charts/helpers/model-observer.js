System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var transient, BindingEngine, LogManager, CONTEXT, ModelObserver;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            transient = _aureliaFramework.transient;
            BindingEngine = _aureliaFramework.BindingEngine;
            LogManager = _aureliaFramework.LogManager;
        }],
        execute: function () {
            CONTEXT = Symbol();

            ModelObserver = (function () {
                function ModelObserver(context, bindingEngine) {
                    var _this = this;

                    _classCallCheck(this, _ModelObserver);

                    this.disposeCollectionSubscriptions = function () {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = _this._collectionSubscriptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var subscription = _step.value;

                                subscription.dispose();
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
                    };

                    this.dispose = function () {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = _this._subscriptions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var subscription = _step2.value;

                                subscription.dispose();
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                    _iterator2['return']();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = _this._collectionSubscriptions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var subscription = _step3.value;

                                subscription.dispose();
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                                    _iterator3['return']();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                    };

                    this._bindingEngine = bindingEngine;
                    this[CONTEXT] = context;
                    this._subscriptions = [];
                    this._collectionSubscriptions = [];
                    this._logger = LogManager.getLogger('model-observer');
                }

                _createClass(ModelObserver, [{
                    key: 'observeProperty',
                    value: function observeProperty(property, onChange, context) {
                        if (this[CONTEXT] != null || context != null) {
                            this._subscriptions.push(this._bindingEngine.propertyObserver(context || this[CONTEXT], property).subscribe(onChange.bind(context || this[CONTEXT])));
                        } else {
                            this._logger.error('must set context of model observer');
                        }
                    }
                }, {
                    key: 'observeCollection',
                    value: function observeCollection(collection, onChange, context) {
                        if (this[CONTEXT] != null || context != null) {
                            this._collectionSubscriptions.push(this._bindingEngine.collectionObserver(collection).subscribe(onChange.bind(context || this[CONTEXT])));
                        } else {
                            this._logger.error('must set context of model observer');
                        }
                    }
                }]);

                var _ModelObserver = ModelObserver;
                ModelObserver = transient()(ModelObserver) || ModelObserver;
                return ModelObserver;
            })();

            _export('ModelObserver', ModelObserver);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9oZWxwZXJzL21vZGVsLW9ic2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs4Q0FFTSxPQUFPLEVBR0EsYUFBYTs7Ozs7Ozs7MENBTGxCLFNBQVM7OENBQUUsYUFBYTsyQ0FBRSxVQUFVOzs7QUFFdEMsbUJBQU8sR0FBRyxNQUFNLEVBQUU7O0FBR1gseUJBQWE7QUFDWCx5QkFERixhQUFhLENBQ1YsT0FBTyxFQUFFLGFBQWEsRUFBRTs7Ozs7eUJBd0JwQyw4QkFBOEIsR0FBRyxZQUFNOzs7Ozs7QUFDbkMsaURBQXdCLE1BQUssd0JBQXdCLDhIQUFFO29DQUEvQyxZQUFZOztBQUNaLDRDQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQzlCOzs7Ozs7Ozs7Ozs7Ozs7cUJBQ0o7O3lCQUVELE9BQU8sR0FBRyxZQUFNOzs7Ozs7QUFDWixrREFBd0IsTUFBSyxjQUFjLG1JQUFFO29DQUFyQyxZQUFZOztBQUNoQiw0Q0FBWSxDQUFDLE9BQU8sRUFBRSxDQUFDOzZCQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsa0RBQXdCLE1BQUssd0JBQXdCLG1JQUFFO29DQUEvQyxZQUFZOztBQUNaLDRDQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQzlCOzs7Ozs7Ozs7Ozs7Ozs7cUJBQ0o7O0FBckNHLHdCQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztBQUNwQyx3QkFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUN4Qix3QkFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDekIsd0JBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFDbkMsd0JBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN6RDs7NkJBUFEsYUFBYTs7MkJBU1AseUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDekMsNEJBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO0FBQ3pDLGdDQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDekosTUFBTTtBQUNILGdDQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO3lCQUM1RDtxQkFDSjs7OzJCQUVnQiwyQkFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUM3Qyw0QkFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7QUFDekMsZ0NBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM3SSxNQUFNO0FBQ0gsZ0NBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7eUJBQzVEO3FCQUNKOzs7cUNBdkJRLGFBQWE7QUFBYiw2QkFBYSxHQUR6QixTQUFTLEVBQUUsQ0FDQyxhQUFhLEtBQWIsYUFBYTt1QkFBYixhQUFhIiwiZmlsZSI6ImNoYXJ0cy9oZWxwZXJzL21vZGVsLW9ic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0cmFuc2llbnQsIEJpbmRpbmdFbmdpbmUsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmNvbnN0IENPTlRFWFQgPSBTeW1ib2woKTtcclxuXHJcbkB0cmFuc2llbnQoKVxyXG5leHBvcnQgY2xhc3MgTW9kZWxPYnNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBiaW5kaW5nRW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5fYmluZGluZ0VuZ2luZSA9IGJpbmRpbmdFbmdpbmU7XHJcbiAgICAgICAgdGhpc1tDT05URVhUXSA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TdWJzY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoJ21vZGVsLW9ic2VydmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZVByb3BlcnR5KHByb3BlcnR5LCBvbkNoYW5nZSwgY29udGV4dCkge1xyXG4gICAgICAgIGlmKHRoaXNbQ09OVEVYVF0gIT0gbnVsbCB8fCBjb250ZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuX2JpbmRpbmdFbmdpbmUucHJvcGVydHlPYnNlcnZlcihjb250ZXh0IHx8IHRoaXNbQ09OVEVYVF0sIHByb3BlcnR5KS5zdWJzY3JpYmUob25DaGFuZ2UuYmluZChjb250ZXh0IHx8IHRoaXNbQ09OVEVYVF0pKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdtdXN0IHNldCBjb250ZXh0IG9mIG1vZGVsIG9ic2VydmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVDb2xsZWN0aW9uKGNvbGxlY3Rpb24sIG9uQ2hhbmdlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYodGhpc1tDT05URVhUXSAhPSBudWxsIHx8IGNvbnRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuX2JpbmRpbmdFbmdpbmUuY29sbGVjdGlvbk9ic2VydmVyKGNvbGxlY3Rpb24pLnN1YnNjcmliZShvbkNoYW5nZS5iaW5kKGNvbnRleHQgfHwgdGhpc1tDT05URVhUXSkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ211c3Qgc2V0IGNvbnRleHQgb2YgbW9kZWwgb2JzZXJ2ZXInKTtcclxuICAgICAgICB9ICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgZGlzcG9zZUNvbGxlY3Rpb25TdWJzY3JpcHRpb25zID0gKCkgPT4geyAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5fY29sbGVjdGlvblN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5fY29sbGVjdGlvblN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
