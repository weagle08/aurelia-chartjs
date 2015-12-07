import {transient, BindingEngine, LogManager} from 'aurelia-framework';

const CONTEXT = Symbol();

@transient()
export class ModelObserver {
    constructor(context, bindingEngine) {
        this._bindingEngine = bindingEngine;
        this[CONTEXT] = context;
        this._subscriptions = [];
        this._collectionSubscriptions = [];
        this._logger = LogManager.getLogger('model-observer');
    }

    observeProperty(property, onChange, context) {
        if(this[CONTEXT] != null || context != null) {
            this._subscriptions.push(this._bindingEngine.propertyObserver(context || this[CONTEXT], property).subscribe(onChange.bind(context || this[CONTEXT])));
        } else {
            this._logger.error('must set context of model observer');
        }
    }

    observeCollection(collection, onChange, context) {
        if(this[CONTEXT] != null || context != null) {
            this._collectionSubscriptions.push(this._bindingEngine.collectionObserver(collection).subscribe(onChange.bind(context || this[CONTEXT])));
        } else {
            this._logger.error('must set context of model observer');
        }     
    }    

    disposeCollectionSubscriptions = () => {        
        for(let subscription of this._collectionSubscriptions) {
                subscription.dispose();
        }
    }

    dispose = () => {
        for(let subscription of this._subscriptions) {
            subscription.dispose();
        }

        for(let subscription of this._collectionSubscriptions) {
                subscription.dispose();
        }
    }
}