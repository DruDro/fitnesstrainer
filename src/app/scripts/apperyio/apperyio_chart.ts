import { Chart } from 'chart.js';

export class ApperyioChart {
  constructor(aioChartElementId: string, aioChartElement: any, aioInitChartObject: aioInitChartObject) {
    this.init(aioChartElementId, aioChartElement, aioInitChartObject);
  }

  private aioChartObject: any;

  private initChart(element: HTMLCanvasElement, options: aioInitChartObject) {
    return new Chart( element, options );
  }

  private init(aioChartElementId: string, aioChartElement: any, aioInitChartObject: aioInitChartObject) {
    if(aioInitChartObject) {
      if(aioChartElement && aioInitChartObject) {
        this.aioChartObject = {
          chartElementId: aioChartElementId,
          originalChartData: aioInitChartObject,
          chartElement: aioChartElement,
          chartContex: aioChartElement.nativeElement.getContext('2d'),
          
          chart: this.initChart( aioChartElement.nativeElement, this.objectDeepCloning( aioInitChartObject ) )
        };
      }
    }
  }

  private changeChartDatasets(datasets, mappingData, id, parentType='line') {
    if(datasets && datasets.__aioChartChild) {

      let mappingLink = datasets.__aioChartChild.mappingLink,
        typeLink = id + '__type',
        dataLink = id + '__data',
        type = parentType;

      if(mappingLink[typeLink]) {
        type = datasets[mappingLink[typeLink]] = mappingData[typeLink];
      }

      if(mappingLink[dataLink]) {
        datasets[mappingLink[dataLink]] = mappingData[dataLink];
      }

      for(let key in mappingLink) {
        if(mappingLink.hasOwnProperty(key) && key.indexOf(type) != -1) {
          datasets[mappingLink[key]] = mappingData[key];
        }
      }
    }

    return datasets;
  }

  private objectDeepCloning(obj) {
    let type = Array.isArray(obj) ? 'array' : (
      typeof obj == 'object' ? 'object' : ''
    );

    switch (type) {
      case 'array': {
        let newArr = [];

        obj.forEach( item => {
          newArr.push( this.objectDeepCloning( item ) );
        });

        return newArr;
      }

      case 'object': {
        let newObject = {};

        for(let key in obj) {
          if(obj.hasOwnProperty(key)) {
            newObject[key] = this.objectDeepCloning( obj[key] );
          }
        }
        
        return newObject;
      }
    
      default:
        break;
    }
  
    return obj;
  }

  getElementId() {
    return this.aioChartObject ? this.aioChartObject.chartElementId : null;
  }

  getElement() {
    return this.aioChartObject ? this.aioChartObject.chartElement : null;
  }

  getChart() {
    return this.aioChartObject ? this.aioChartObject.chart : null;
  }

  chartMapping(mappingData) {
    if(mappingData && this.aioChartObject) {
      let originalChartData = this.aioChartObject.originalChartData,
        newChartData = this.objectDeepCloning(originalChartData),
        datasets = newChartData.data.datasets,
        chartId = this.aioChartObject.chartElementId,
        chartTypeLink = chartId + '__type',
        chartLabels = chartId + '__labels',
        chartType = newChartData['type'];

      //Destroy Chart object for correct works
      this.aioChartObject.chart.destroy();
      this.aioChartObject.chart = null;

      if(mappingData[chartTypeLink]) {
        chartType = newChartData['type'] = mappingData[chartTypeLink];
      }

      if(mappingData[chartLabels]) {
        newChartData['data']['labels'] = mappingData[chartLabels];
      }

      datasets.forEach( datasetsItem => {
        let id = datasetsItem.__aioChartChild ? datasetsItem.__aioChartChild.id : '';

        if(Array.isArray(mappingData[id])) {
          mappingData[id].forEach((item, index) => {
            if(index) {
              let newItemObject = this.objectDeepCloning(datasetsItem);
              datasets.push( this.changeChartDatasets(newItemObject, item, id, chartType) );
            }
            else {
              this.changeChartDatasets(datasetsItem, item, id, chartType);
            }
          });
        } else {
          this.changeChartDatasets(datasetsItem, mappingData, id, chartType);
        }
      });

      this.aioChartObject.chart = this.initChart(this.aioChartObject.chartElement.nativeElement, newChartData);
    }
  }
}

export interface aioInitChartObject {
      type?: string,
      data?: {
        labels: Array<string>,
        datasets: Array<chartDatasetsItem>
      },
      options?: Object
}

export interface chartDatasetsItem {
  __aioChartChild?:{
    id: string,
    mappingLink: Object
  },
  [propName: string]: any
}