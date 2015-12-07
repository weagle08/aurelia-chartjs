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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ2bS9jb21wb25lbnRzL2NoYXJ0cy9jaGFydHMvaGVscGVycy9tb2RlbC1vYnNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OENBRU0sT0FBTyxFQUdBLGFBQWE7Ozs7Ozs7OzBDQUxsQixTQUFTOzhDQUFFLGFBQWE7MkNBQUUsVUFBVTs7O0FBRXRDLG1CQUFPLEdBQUcsTUFBTSxFQUFFOztBQUdYLHlCQUFhO0FBQ1gseUJBREYsYUFBYSxDQUNWLE9BQU8sRUFBRSxhQUFhLEVBQUU7Ozs7O3lCQXdCcEMsOEJBQThCLEdBQUcsWUFBTTs7Ozs7O0FBQ25DLGlEQUF3QixNQUFLLHdCQUF3Qiw4SEFBRTtvQ0FBL0MsWUFBWTs7QUFDWiw0Q0FBWSxDQUFDLE9BQU8sRUFBRSxDQUFDOzZCQUM5Qjs7Ozs7Ozs7Ozs7Ozs7O3FCQUNKOzt5QkFFRCxPQUFPLEdBQUcsWUFBTTs7Ozs7O0FBQ1osa0RBQXdCLE1BQUssY0FBYyxtSUFBRTtvQ0FBckMsWUFBWTs7QUFDaEIsNENBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs2QkFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELGtEQUF3QixNQUFLLHdCQUF3QixtSUFBRTtvQ0FBL0MsWUFBWTs7QUFDWiw0Q0FBWSxDQUFDLE9BQU8sRUFBRSxDQUFDOzZCQUM5Qjs7Ozs7Ozs7Ozs7Ozs7O3FCQUNKOztBQXJDRyx3QkFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7QUFDcEMsd0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDeEIsd0JBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLHdCQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRSxDQUFDO0FBQ25DLHdCQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDekQ7OzZCQVBRLGFBQWE7OzJCQVNQLHlCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ3pDLDRCQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUN6QyxnQ0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3pKLE1BQU07QUFDSCxnQ0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzt5QkFDNUQ7cUJBQ0o7OzsyQkFFZ0IsMkJBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDN0MsNEJBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO0FBQ3pDLGdDQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDN0ksTUFBTTtBQUNILGdDQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO3lCQUM1RDtxQkFDSjs7O3FDQXZCUSxhQUFhO0FBQWIsNkJBQWEsR0FEekIsU0FBUyxFQUFFLENBQ0MsYUFBYSxLQUFiLGFBQWE7dUJBQWIsYUFBYSIsImZpbGUiOiJ2dm0vY29tcG9uZW50cy9jaGFydHMvY2hhcnRzL2hlbHBlcnMvbW9kZWwtb2JzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RyYW5zaWVudCwgQmluZGluZ0VuZ2luZSwgTG9nTWFuYWdlcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuY29uc3QgQ09OVEVYVCA9IFN5bWJvbCgpO1xyXG5cclxuQHRyYW5zaWVudCgpXHJcbmV4cG9ydCBjbGFzcyBNb2RlbE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGJpbmRpbmdFbmdpbmUpIHtcclxuICAgICAgICB0aGlzLl9iaW5kaW5nRW5naW5lID0gYmluZGluZ0VuZ2luZTtcclxuICAgICAgICB0aGlzW0NPTlRFWFRdID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvblN1YnNjcmlwdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBMb2dNYW5hZ2VyLmdldExvZ2dlcignbW9kZWwtb2JzZXJ2ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBvYnNlcnZlUHJvcGVydHkocHJvcGVydHksIG9uQ2hhbmdlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYodGhpc1tDT05URVhUXSAhPSBudWxsIHx8IGNvbnRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2godGhpcy5fYmluZGluZ0VuZ2luZS5wcm9wZXJ0eU9ic2VydmVyKGNvbnRleHQgfHwgdGhpc1tDT05URVhUXSwgcHJvcGVydHkpLnN1YnNjcmliZShvbkNoYW5nZS5iaW5kKGNvbnRleHQgfHwgdGhpc1tDT05URVhUXSkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ211c3Qgc2V0IGNvbnRleHQgb2YgbW9kZWwgb2JzZXJ2ZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZUNvbGxlY3Rpb24oY29sbGVjdGlvbiwgb25DaGFuZ2UsIGNvbnRleHQpIHtcclxuICAgICAgICBpZih0aGlzW0NPTlRFWFRdICE9IG51bGwgfHwgY29udGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TdWJzY3JpcHRpb25zLnB1c2godGhpcy5fYmluZGluZ0VuZ2luZS5jb2xsZWN0aW9uT2JzZXJ2ZXIoY29sbGVjdGlvbikuc3Vic2NyaWJlKG9uQ2hhbmdlLmJpbmQoY29udGV4dCB8fCB0aGlzW0NPTlRFWFRdKSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcignbXVzdCBzZXQgY29udGV4dCBvZiBtb2RlbCBvYnNlcnZlcicpO1xyXG4gICAgICAgIH0gICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiAgICBkaXNwb3NlQ29sbGVjdGlvblN1YnNjcmlwdGlvbnMgPSAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICBmb3IobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLl9jb2xsZWN0aW9uU3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSA9ICgpID0+IHtcclxuICAgICAgICBmb3IobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLl9jb2xsZWN0aW9uU3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
