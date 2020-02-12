import {
    Injectable
} from '@angular/core';

import {
    ApperyioDataHelperService
} from './apperyio_data_helper';

@Injectable()
export class ApperyioMappingHelperService {

    constructor(private $aio_dataHelper: ApperyioDataHelperService) { }

    /**
     * element - ViewChild element
     * elementType - componentBeanName ("ion4button", "ion4input", "ion4card"...)
     * propertyName - property name ("value", "text", "label")
     **/
    getComponentPropValue(element, elementType: string, propertyName: string) {
        function getInnerText(element) {
            var el = element.el || element.nativeElement;
            if (el) {
                return Array.prototype.reduce.call(el.childNodes, (a, b) => {
                    return a + (b.nodeType === b.TEXT_NODE ? b.textContent.trim() : '');
                }, '');
            }
            return '';
        }
        let propValue = "";
        switch (elementType) {
            case "ionic4button":
                switch (propertyName) {
                    case "text":
                        propValue = element.el.textContent.trim();
                        break;
                    case "icon.name":
                        propValue = element && element.name ? element.name : "";
                        break;
                }
                break;
            case "ionic4carditem":
                propValue = getInnerText(element);
                break;
            case "ionic4carditemtitle":
                propValue = element ? element.el.textContent.trim() : "";
                break;
            case "ionic4googlemap":
                propValue = element[propertyName.split('.')[1]].toString();
                break;
            case "ionic4googlemapmarker":
                propValue = element.nativeElement.getAttribute('ng-reflect-' + propertyName.split('.')[1]);
                break;
            case "ionic4html":
                propValue = element.nativeElement.innerHTML;
                break;
            case "ionic4icon":
                switch (propertyName) {
                    case "customIcon":
                        propValue = element.src ? element.src : "";
                        break;
                    case "style":
                        propValue = element.name ? element.name : "";
                        break;
                }
                break;
            case "ionic4image":
                switch (propertyName) {
                    case "altText":
                        propValue = element.alt ? element.alt : "";
                        break;
                    case "imageSrc":
                        propValue = element.src ? element.src : "";
                        break;
                }
                break;
            case "ionic4input":
                switch (propertyName) {
                    case "value":
                        propValue = element.value;
                        break;
                }
                break;
            case "ionic4itemlabel":
                propValue = element ? element.el.textContent.trim() : "";
                break;
            case "ionic4select":
                switch (propertyName) {
                    case "ion4Label.text":
                        propValue = element ? element.el.textContent.trim() : "";
                        break;
                }
                break;
            case "ionic4selectoption":
                switch (propertyName) {
                    case "selected":
                        propValue = element.selected;
                        break;
                    case "text":
                        propValue = element.el.textContent.trim();
                        break;
                    case "value":
                        propValue = element.value;
                        break;
                }
                break;
            case "ionic4spinner":
                propValue = element.name ? element.name : "";
                break;
            case "ionic4text":
                switch (propertyName) {
                    case "wrapper":
                        propValue = element.el.tagName;
                        break;
                    case "text":
                        propValue = getInnerText(element);
                        break;
                }
                break;
            case "ionic4search":
                propValue = element[propertyName];
                break;
            case "ionic4radiobutton":
                switch (propertyName) {
                    case "value":
                        propValue = element.value;
                        break;
                    case "checked":
                        propValue = element.checked;
                        break;
                }
                break;
            case "ionic4toolbartitle":
                propValue = element ? element.el.textContent.trim() : "";
                break;
            case "ionic4card":
            case "ionic4googlemapwindow":
            case "ionic4grid":
            case "ionic4gridcell":
            case "ionic4gridrow":
            case "indexscreen":
            case "ionic4menu":
            case "ionic4menucontent":
            case "ionic4menufooter":
            case "ionic4menuheader":
            case "ionic4splitpane":
            case "ionic4list":
            case "ionic4listitem":
            case "listitemoption":
            case "listitemoptions":
            case "ionic4content":
            case "ionic4footer":
            case "ionic4header":
            case "ionic4tabbar":
            case "ionic4tabbutton":
            case "ionic4tabs":
            case "screen":
            case "ionic4selectitem":
            case "ionic4toolbar":
            case "ionic4toolbarbuttons":
                break;
        }
        return propValue;
    }

    getDataTableMapping(data, property: string, defaultValue) {
        const nestedObject = property.indexOf('.') != -1 ? property.split('.') : '',
            dataItem = nestedObject ? data[nestedObject[0]][nestedObject[1]] : data[property];
    
        if(data.isRowsMapping) {
            return dataItem;
        }

        if(defaultValue) {
            return defaultValue;
        }
            
        return dataItem;
    }

    getMapping(_mappingData, _currentItem, property, defaultValue, isVariable?, isSelected?) {
        const mappingData = _currentItem || _mappingData || {};

        if(property in mappingData) {
          return mappingData[property];
        }

        if((defaultValue != "" && defaultValue != undefined && defaultValue != null) || isVariable) {
            if(typeof defaultValue == 'string') {
                return defaultValue.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
            }
            
            return defaultValue;
        }

        if(isSelected) {
          return false;
        }

        return '';
    }

    private _getSubdata(data, path) {
        if (data && path && path.length) {
            try {
                let res = data;
                for (var i = 0; i < path.length; i++) {
                    if (res) {
                        res = res[path[i]];
                    } else {
                        return undefined;
                    }
                }
                return res;
            } catch (e) {
                return undefined;
            }
        }
        return data;
    }

    getSubdata(data, path, defaultValue?) {
        return this._getSubdata(data, path) || defaultValue;
    }

    async getStorageValue(varName, path) {
        var data = await this.$aio_dataHelper.getStorage(varName);
        return this._getSubdata(data, path);
    }

    async getServiceDataValue(varName, path) {
        var data = await this.$aio_dataHelper.getVariable(varName);
        return this._getSubdata(data, path);
    }

    private _updateData(data, path, value) {
        if (path && path.length) {
            if (!data || typeof data !== "object") {
                data = {};
            }
            if (path.length == 1) {
                data[path[0]] = value;
            } else {
                let res = data;
                for (var i = 0; i < path.length - 1; i++) {
                    if (!res[path[i]] || typeof res[path[i]] !== "object") {
                        res[path[i]] = {};
                    }
                    res = res[path[i]];
                }
                res[path[path.length - 1]] = value;
            }
        } else {
            data = value;
        }
        return data;
    }

    updateData(data, path, value) {
        return this._updateData(data, path, value);
    }
    
    async setStorageValue(varName, path, value) {
        var data = await this.$aio_dataHelper.getStorage(varName);
        await this.$aio_dataHelper.setStorage(varName, this._updateData(data, path, value));
    }
    
    async setServiceDataValue(varName, path, value) {
        var data = this.$aio_dataHelper.getVariable(varName);
        this.$aio_dataHelper.setVariable(varName, this._updateData(data, path, value));
    }
};