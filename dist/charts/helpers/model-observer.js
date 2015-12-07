System.register([], function (_export2) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            System.register(['aurelia-framework'], function (_export) {
                'use strict';

                var transient, BindingEngine, LogManager, CONTEXT, ModelObserver;

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
                        transient = _aureliaFramework.transient;
                        BindingEngine = _aureliaFramework.BindingEngine;
                        LogManager = _aureliaFramework.LogManager;
                    }],
                    execute: function execute() {
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
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9oZWxwZXJzL21vZGVsLW9ic2VydmVyLmpzIiwiL3NvdXJjZS9jaGFydHMvaGVscGVycy92dm0vY29tcG9uZW50cy9jaGFydHMvY2hhcnRzL2hlbHBlcnMvbW9kZWwtb2JzZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0JBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFO0FBQ3RELDRCQUFZLENBQUM7O0FBRWIsb0JBQUksU0FBUyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVDRHRDLE9BQU8sRUFHQSxhQUFhLENBQUE7O0FEQXRCLG9CQUFJLFlBQVksR0FBRyxDQUFDLFlBQVk7QUFBRSw2QkFBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsZ0NBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQUFBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxBQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7eUJBQUU7cUJBQUUsQUFBQyxPQUFPLFVBQVUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBRSw0QkFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxBQUFDLElBQUksV0FBVyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFB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VSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQ0FDN0ksTUFBTTtBQUNILDRDQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO3FDQUM1RDtpQ0FDSjs2QkRvR1ksQ0FBQyxDQUFDLENBQUM7O0FBRUosZ0NBQUksY0FBYyxHQzdIckIsYUFBYSxDQUFBO0FBQWIseUNBQWEsR0FEekIsU0FBUyxFQUFFLENBQ0MsYUFBYSxDQUFBLElBQWIsYUFBYSxDQUFBO0FEK0hWLG1DQy9ISCxhQUFhLENBQUE7eUJEZ0liLENBQUEsRUFBRyxDQUFDOztBQUVMLCtCQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO3FCQUMzQztpQkFDSixDQUFDO2FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6ImNoYXJ0cy9oZWxwZXJzL21vZGVsLW9ic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiU3lzdGVtLnJlZ2lzdGVyKFsnYXVyZWxpYS1mcmFtZXdvcmsnXSwgZnVuY3Rpb24gKF9leHBvcnQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdHJhbnNpZW50LCBCaW5kaW5nRW5naW5lLCBMb2dNYW5hZ2VyLCBDT05URVhULCBNb2RlbE9ic2VydmVyO1xuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0dGVyczogW2Z1bmN0aW9uIChfYXVyZWxpYUZyYW1ld29yaykge1xuICAgICAgICAgICAgdHJhbnNpZW50ID0gX2F1cmVsaWFGcmFtZXdvcmsudHJhbnNpZW50O1xuICAgICAgICAgICAgQmluZGluZ0VuZ2luZSA9IF9hdXJlbGlhRnJhbWV3b3JrLkJpbmRpbmdFbmdpbmU7XG4gICAgICAgICAgICBMb2dNYW5hZ2VyID0gX2F1cmVsaWFGcmFtZXdvcmsuTG9nTWFuYWdlcjtcbiAgICAgICAgfV0sXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIENPTlRFWFQgPSBTeW1ib2woKTtcblxuICAgICAgICAgICAgTW9kZWxPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTW9kZWxPYnNlcnZlcihjb250ZXh0LCBiaW5kaW5nRW5naW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9Nb2RlbE9ic2VydmVyKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VDb2xsZWN0aW9uU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF90aGlzLl9jb2xsZWN0aW9uU3Vic2NyaXB0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yWydyZXR1cm4nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yWydyZXR1cm4nXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX3RoaXMuX3N1YnNjcmlwdGlvbnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbJ3JldHVybiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyWydyZXR1cm4nXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX3RoaXMuX2NvbGxlY3Rpb25TdWJzY3JpcHRpb25zW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzWydyZXR1cm4nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yM1sncmV0dXJuJ10oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nRW5naW5lID0gYmluZGluZ0VuZ2luZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tDT05URVhUXSA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoJ21vZGVsLW9ic2VydmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUNsYXNzKE1vZGVsT2JzZXJ2ZXIsIFt7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ29ic2VydmVQcm9wZXJ0eScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvYnNlcnZlUHJvcGVydHkocHJvcGVydHksIG9uQ2hhbmdlLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tDT05URVhUXSAhPSBudWxsIHx8IGNvbnRleHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaCh0aGlzLl9iaW5kaW5nRW5naW5lLnByb3BlcnR5T2JzZXJ2ZXIoY29udGV4dCB8fCB0aGlzW0NPTlRFWFRdLCBwcm9wZXJ0eSkuc3Vic2NyaWJlKG9uQ2hhbmdlLmJpbmQoY29udGV4dCB8fCB0aGlzW0NPTlRFWFRdKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ211c3Qgc2V0IGNvbnRleHQgb2YgbW9kZWwgb2JzZXJ2ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnb2JzZXJ2ZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb2JzZXJ2ZUNvbGxlY3Rpb24oY29sbGVjdGlvbiwgb25DaGFuZ2UsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW0NPTlRFWFRdICE9IG51bGwgfHwgY29udGV4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLl9iaW5kaW5nRW5naW5lLmNvbGxlY3Rpb25PYnNlcnZlcihjb2xsZWN0aW9uKS5zdWJzY3JpYmUob25DaGFuZ2UuYmluZChjb250ZXh0IHx8IHRoaXNbQ09OVEVYVF0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignbXVzdCBzZXQgY29udGV4dCBvZiBtb2RlbCBvYnNlcnZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9Nb2RlbE9ic2VydmVyID0gTW9kZWxPYnNlcnZlcjtcbiAgICAgICAgICAgICAgICBNb2RlbE9ic2VydmVyID0gdHJhbnNpZW50KCkoTW9kZWxPYnNlcnZlcikgfHwgTW9kZWxPYnNlcnZlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gTW9kZWxPYnNlcnZlcjtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIF9leHBvcnQoJ01vZGVsT2JzZXJ2ZXInLCBNb2RlbE9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgIH07XG59KTtcblxuIiwiaW1wb3J0IHt0cmFuc2llbnQsIEJpbmRpbmdFbmdpbmUsIExvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmNvbnN0IENPTlRFWFQgPSBTeW1ib2woKTtcclxuXHJcbkB0cmFuc2llbnQoKVxyXG5leHBvcnQgY2xhc3MgTW9kZWxPYnNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBiaW5kaW5nRW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5fYmluZGluZ0VuZ2luZSA9IGJpbmRpbmdFbmdpbmU7XHJcbiAgICAgICAgdGhpc1tDT05URVhUXSA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TdWJzY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoJ21vZGVsLW9ic2VydmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZVByb3BlcnR5KHByb3BlcnR5LCBvbkNoYW5nZSwgY29udGV4dCkge1xyXG4gICAgICAgIGlmKHRoaXNbQ09OVEVYVF0gIT0gbnVsbCB8fCBjb250ZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuX2JpbmRpbmdFbmdpbmUucHJvcGVydHlPYnNlcnZlcihjb250ZXh0IHx8IHRoaXNbQ09OVEVYVF0sIHByb3BlcnR5KS5zdWJzY3JpYmUob25DaGFuZ2UuYmluZChjb250ZXh0IHx8IHRoaXNbQ09OVEVYVF0pKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdtdXN0IHNldCBjb250ZXh0IG9mIG1vZGVsIG9ic2VydmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVDb2xsZWN0aW9uKGNvbGxlY3Rpb24sIG9uQ2hhbmdlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYodGhpc1tDT05URVhUXSAhPSBudWxsIHx8IGNvbnRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuX2JpbmRpbmdFbmdpbmUuY29sbGVjdGlvbk9ic2VydmVyKGNvbGxlY3Rpb24pLnN1YnNjcmliZShvbkNoYW5nZS5iaW5kKGNvbnRleHQgfHwgdGhpc1tDT05URVhUXSkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ211c3Qgc2V0IGNvbnRleHQgb2YgbW9kZWwgb2JzZXJ2ZXInKTtcclxuICAgICAgICB9ICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgZGlzcG9zZUNvbGxlY3Rpb25TdWJzY3JpcHRpb25zID0gKCkgPT4geyAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5fY29sbGVjdGlvblN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBzdWJzY3JpcHRpb24gb2YgdGhpcy5fY29sbGVjdGlvblN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
