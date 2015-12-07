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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHTyxhQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3ZDLGVBQU8sQ0FBQyxlQUFlLENBQ25CLHdCQUF3QixDQUMzQixDQUFDOztBQUVGLFlBQUcsT0FBTyxNQUFNLEFBQUMsS0FBSyxVQUFVLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUN4Qjs7QUFFRCxZQUFHLEtBQUssSUFBSSxJQUFJLEVBQUU7QUFFZCxpQkFBSSxJQUFJLENBQUMsSUFBSSxhQUFhLEVBQUM7QUFDdkIsb0JBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDM0UseUJBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0M7YUFDSjtTQUNKO0tBQ0oiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhLCBjb25maWcpIHtcclxuICAgIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKFxyXG4gICAgICAgICcuL2NoYXJ0cy9jaGFydC1lbGVtZW50J1xyXG4gICAgKTtcclxuXHJcbiAgICBpZih0eXBlb2YoY29uZmlnKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGNvbmZpZyhjb25maWd1cmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKENoYXJ0ICE9IG51bGwpIHtcclxuICAgICAgICAvL2NvbmZpZ3VyZSBDaGFydEpTIHdpdGggZGVmYXVsdHNcclxuICAgICAgICBmb3IodmFyIHAgaW4gY29uZmlndXJhdGlvbil7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNvbmZpZ3VyYXRpb24uaGFzT3duUHJvcGVydHkocCkgJiYgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWxbcF0gPSBjb25maWd1cmF0aW9uW3BdO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
