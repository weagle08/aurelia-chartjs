import {inject, bindable, customElement, BindingEngine, LogManager} from 'aurelia-framework';
import {ModelObserver} from './helpers/model-observer';

@inject(BindingEngine)
@customElement('chart')
@bindable('data')
@bindable('options')
@bindable('type')
@bindable('height')
@bindable('width')
@bindable('throttle')
export class ChartElement {
    supportedChartTypes = [
        'Line',
        'Bar',
        'Radar',
        'PolarArea',
        'Pie',
        'Doughnut'
    ];

    constructor(bindingEngine){
        this._modelObserver = new ModelObserver(this, bindingEngine);        
        this._logger = LogManager.getLogger('chartjs');
        this._canRedraw = true;
        this.throttle = 500;
        this._isThrottling = false;
    }
    
    bind(bindingContext){
        this.options = this.options || {};
        this.height = this.height || 400;
        this.width = this.width || 500;
        this.throttle = Math.min(this.throttle, 250);

        this.canvasElement.height = this.height;
        this.canvasElement.width = this.width;        
    }

    attached(){
        this._createChart();

        this._modelObserver.observeProperty('height', this._refreshChart);
        this._modelObserver.observeProperty('width', this._refreshChart);
        this._modelObserver.observeProperty('options', this._refreshChart);
        this._modelObserver.observeProperty('data', this._refreshChartData);
        
        this._watchChartData();
    }

    _watchChartData(){
        if(this.data != null) {
            this._modelObserver.observeCollection(this.data.datasets, this._refreshChart);
            this._modelObserver.observeCollection(this.data.labels, this._refreshChart);
            for(var ds of this.data.datasets) {
                this._modelObserver.observeCollection(ds.data, this._refreshChart);
            }
        }
    }

    _createChart(){
        if(this._canRedraw === true) {
            if(this._isSupportedChartType() === true) {
                try {                
                    var canvas = this.canvasElement;
                    var context = canvas.getContext('2d');
                    context.clearRect(0,0,canvas.width, canvas.height);
                    this._chart = new Chart(context)[this.type](this.data, this.options);
                } catch(e) {
                    this._logger.error(e);
                }
            }

            this._canRedraw = false;
            this._beginThrottling();
        }            
    }

    _refreshChart(){
        this._chart.destroy();

        this.canvasElement.height = this.height;
        this.canvasElement.width = this.width;

        this._createChart();
    }

    _refreshChartData(){
        this._chart.destroy();

        this._modelObserver.disposeCollectionSubscriptions();
        this._watchChartData();

        this._refreshChart();
    }

    _hardRefresh(){
        if(this._chart != null) {
            this._chart.destroy();

            this.canvasElement.height = this.height;
            this.canvasElement.width = this.width;

            this._createChart();
        }        
    }

    _isSupportedChartType(){
        if(this.supportedChartTypes.indexOf(this.type) === -1) {
            this._logger.error('unsupported chart type');
            return false;
        }

        return true;
    }

    _beginThrottling(){
        if(this._isThrottling === false) {
            this._isThrottling = true;
            setTimeout(function(){
                this._canRedraw = true;
                this._isThrottling = false;
            }.bind(this), this.throttle);
        }        
    }

    detached(){
        this._modelObserver.dispose();
    }
}