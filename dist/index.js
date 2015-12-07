System.register([], function (_export2) {
    'use strict';

    return {
        setters: [],
        execute: function () {
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
                    execute: function execute() {}
                };
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiL3NvdXJjZS92dm0vY29tcG9uZW50cy9jaGFydHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0JBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRTtBQUM3RCw0QkFBWSxDQUFDOztBQUViLG9CQUFJLGFBQWEsRUFBRSxLQUFLLENBQUM7O0FBRXpCLHVCQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDOztBQ0Y3Qix5QkFBUyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN2QywyQkFBTyxDQUFDLGVBQWUsQ0FDbkIsd0JBQXdCLENBQzNCLENBQUM7O0FBRUYsd0JBQUcsT0FBTyxNQUFNLEtBQU0sVUFBVSxFQUFFO0FBQzlCLDhCQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7cUJBQ3hCOztBQUVELHdCQUFHLEtBQUssSUFBSSxJQUFJLEVBQUU7QUFFZCw2QkFBSSxJQUFJLENBQUMsSUFBSSxhQUFhLEVBQUM7QUFDdkIsZ0NBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDM0UscUNBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDL0M7eUJBQ0o7cUJBQ0o7aUJBQ0o7O0FER0csdUJBQU87QUFDSCwyQkFBTyxFQUFFLENBQUMsVUFBVSxjQUFjLEVBQUU7QUFDaEMscUNBQWEsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzdDLEVBQUUsVUFBVSxNQUFNLEVBQUU7QUFDakIsNkJBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzdCLENBQUM7QUFDRiwyQkFBTyxFQUFFLG1CQUFZLEVBQUU7aUJBQzFCLENBQUM7YUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJTeXN0ZW0ucmVnaXN0ZXIoWycuL2NvbmZpZ3VyYXRpb24nLCAnY2hhcnQnXSwgZnVuY3Rpb24gKF9leHBvcnQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgY29uZmlndXJhdGlvbiwgQ2hhcnQ7XG5cbiAgICBfZXhwb3J0KCdjb25maWd1cmUnLCBjb25maWd1cmUpO1xuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEsIGNvbmZpZykge1xuICAgICAgICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jaGFydHMvY2hhcnQtZWxlbWVudCcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25maWcoY29uZmlndXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ2hhcnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uaGFzT3duUHJvcGVydHkocCkgJiYgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgICAgIENoYXJ0LmRlZmF1bHRzLmdsb2JhbFtwXSA9IGNvbmZpZ3VyYXRpb25bcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0dGVyczogW2Z1bmN0aW9uIChfY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbiA9IF9jb25maWd1cmF0aW9uWydkZWZhdWx0J107XG4gICAgICAgIH0sIGZ1bmN0aW9uIChfY2hhcnQpIHtcbiAgICAgICAgICAgIENoYXJ0ID0gX2NoYXJ0WydkZWZhdWx0J107XG4gICAgICAgIH1dLFxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbiAoKSB7fVxuICAgIH07XG59KTtcblxuIiwiaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSwgY29uZmlnKSB7XHJcbiAgICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcyhcclxuICAgICAgICAnLi9jaGFydHMvY2hhcnQtZWxlbWVudCdcclxuICAgICk7XHJcblxyXG4gICAgaWYodHlwZW9mKGNvbmZpZykgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBjb25maWcoY29uZmlndXJhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBpZihDaGFydCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy9jb25maWd1cmUgQ2hhcnRKUyB3aXRoIGRlZmF1bHRzXHJcbiAgICAgICAgZm9yKHZhciBwIGluIGNvbmZpZ3VyYXRpb24peyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihjb25maWd1cmF0aW9uLmhhc093blByb3BlcnR5KHApICYmIENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsW3BdID0gY29uZmlndXJhdGlvbltwXTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
