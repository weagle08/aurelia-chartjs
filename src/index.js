import configuration from './configuration';
import Chart from 'chart';

export function configure(aurelia, config) {
    aurelia.globalResources(
        './charts/chart-element'
    );

    if(typeof(config) === 'function') {
        config(configuration)
    }

    if(Chart != null) {
        //configure ChartJS with defaults
        for(var p in configuration){            
            if(configuration.hasOwnProperty(p) && Chart.defaults.global.hasOwnProperty(p)) {
                Chart.defaults.global[p] = configuration[p];
            }            
        }
    }    
}