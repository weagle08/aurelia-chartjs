System.register(['./configuration', 'chart'], function (_export) {
    'use strict';

    var configuration, Chart;

    _export('configure', configure);

    function configure(aurelia, config) {
        aurelia.globalResources('./charts/chart-element');

        if (typeof config === 'function') {
            config(configuration);
        }

        if (Chart != null) {
            for (var p in configuration) {
                if (configuration.hasOwnProperty(p) && Chart.defaults.global.hasOwnProperty(p)) {
                    Chart.defaults.global[p] = configuration[p];
                }
            }
        }
    }

    return {
        setters: [function (_configuration) {
            configuration = _configuration['default'];
        }, function (_chart) {
            Chart = _chart['default'];
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ2bS9jb21wb25lbnRzL2NoYXJ0cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR08sYUFBUyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN2QyxlQUFPLENBQUMsZUFBZSxDQUNuQix3QkFBd0IsQ0FDM0IsQ0FBQzs7QUFFRixZQUFHLE9BQU8sTUFBTSxBQUFDLEtBQUssVUFBVSxFQUFFO0FBQzlCLGtCQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDeEI7O0FBRUQsWUFBRyxLQUFLLElBQUksSUFBSSxFQUFFO0FBRWQsaUJBQUksSUFBSSxDQUFDLElBQUksYUFBYSxFQUFDO0FBQ3ZCLG9CQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzNFLHlCQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0o7U0FDSjtLQUNKIiwiZmlsZSI6InZ2bS9jb21wb25lbnRzL2NoYXJ0cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEsIGNvbmZpZykge1xyXG4gICAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoXHJcbiAgICAgICAgJy4vY2hhcnRzL2NoYXJ0LWVsZW1lbnQnXHJcbiAgICApO1xyXG5cclxuICAgIGlmKHR5cGVvZihjb25maWcpID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29uZmlnKGNvbmZpZ3VyYXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgaWYoQ2hhcnQgIT0gbnVsbCkge1xyXG4gICAgICAgIC8vY29uZmlndXJlIENoYXJ0SlMgd2l0aCBkZWZhdWx0c1xyXG4gICAgICAgIGZvcih2YXIgcCBpbiBjb25maWd1cmF0aW9uKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY29uZmlndXJhdGlvbi5oYXNPd25Qcm9wZXJ0eShwKSAmJiBDaGFydC5kZWZhdWx0cy5nbG9iYWwuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIENoYXJ0LmRlZmF1bHRzLmdsb2JhbFtwXSA9IGNvbmZpZ3VyYXRpb25bcF07XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
