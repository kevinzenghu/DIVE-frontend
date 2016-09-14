export const MAX_ELEMENTS = {
  preview: {
    all: 2000,
    scatter: 500,
    treemap: 200
  },
  full: {
    all: 3000,
    scatter: 1000,
    treemap: 400
  }
}

// Properties shared by both full and minimal options
var baseOptions = {
  backgroundColor: 'transparent',
  fontName: 'Roboto, Helvetica, Arial, sans-serif',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
}

export var fullOptions = {
  ...baseOptions,
  headerColor: 'white',
  headerHeight: 0,
  fontColor: "#333",
  textStyle: {
    color: "#333"
  },
  chartArea: {
    top: '5%',
    height: '78%',
    left: '15%',
    width: '80%'
  },
  legend: {
    textStyle: {
      color: "#333"
    }
  },
  hAxis: {
      titleTextStyle: {
      color: "#333",
      italic: false,
      bold: true
    },
    textStyle: {
      color: "#777",
      italic: false
    }
  },
  vAxis: {
    titleTextStyle: {
      color: "#333",
      italic: false,
      bold: true
    },
    textStyle: {
      color: "#777",
      italic: false
    }
  },
  vAxes: [
    {
      textStyle: {
        color: "#777",
        italic: false
      }
    },
    {
      textStyle: {
        color: "#777",
        italic: false
      }
    }
  ]
};

export var minimalOptions = {
  ...baseOptions,
  axisTitlesPosition: 'none',
  chartArea: {
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  enableInteractivity: false,
  fontSize: 0,
  hAxis: {
    baselineColor: 'transparent',
    textPosition: 'none',
    gridlines: {
      count: 0,
      color: 'transparent'
    },
  },
  height: 140,
  highlightOnMouseOver: false,
  hintOpacity: 0,
  legend: {
    position: 'none'
  },
  pointSize: 2,
  showTooltips: false,
  textStyle: {
    color: 'transparent',
    fontSize: 0
  },
  tooltip: {
    trigger: 'none'
  },
  vAxis: {
    baselineColor: 'transparent',
    textPosition: 'none',
    gridlines: {
      count: 0,
      color: 'transparent'
    }
  },
  vAxes: [
    {
      baselineColor: 'transparent',
      textPosition: 'none',
      gridlines: {
        count: 0
      }
    },
    {
      baselineColor: 'transparent',
      textPosition: 'none',
      gridlines: {
        count: 0
      }
    }
  ]
};
//
// export var minimalBoxplotOptions = {
//   ...options,
//   lineWidth: 0,
//   hAxis: {
//     gridlines: {color: '#fff'}
//   },
//   intervals: {
//     barWidth: 1,
//     boxWidth: 1,
//     lineWidth: 2,
//     style: 'boxes'
//   },
//   interval: {
//     'top': {
//       style: 'bars',
//       fillOpacity: 1,
//       color: '#777'
//     },
//     'bottom': {
//       style: 'bars',
//       fillOpacity: 1,
//       color: '#777'
//     },
//     'mean': {
//       style: 'points',
//     },
//     'minimum': {
//       style: 'points',
//     },
//     'maximum': {
//       style: 'points',
//     }
//   }
// }
