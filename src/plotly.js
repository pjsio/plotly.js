/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

/*
 * Pack internal modules unto an object.
 *
 * This object is require'ed in as 'Plotly' in numerous src and test files.
 * Require'ing 'Plotly' bypasses circular dependencies.
 *
 * Future development should move away from this pattern.
 *
 */

// promise polyfill
require('es6-promise').polyfill();

// lib functions
exports.Lib = require('./lib');
exports.util = require('./lib/svg_text_utils');
exports.Queue = require('./lib/queue');

// plot css
require('../build/plotcss');

// configuration
exports.MathJaxConfig = require('./fonts/mathjax_config');
exports.defaultConfig = require('./plot_api/plot_config');

// plots
var Plots = exports.Plots = require('./plots/plots');

var Cartesian = require('./plots/cartesian');
Plots.registerSubplot(Cartesian);

exports.Axes = require('./plots/cartesian/axes');
exports.Fx = require('./plots/cartesian/graph_interact');

var Geo = require('./plots/geo');
Plots.registerSubplot(Geo);

var Gl3d = require('./plots/gl3d');
Plots.registerSubplot(Gl3d);

var Gl2d = require('./plots/gl2d');
Plots.registerSubplot(Gl2d);

exports.micropolar = require('./plots/polar/micropolar');

// components
exports.Color = require('./components/color');
exports.Drawing = require('./components/drawing');
exports.Colorscale = require('./components/colorscale');
exports.Colorbar = require('./components/colorbar');
exports.ErrorBars = require('./components/errorbars');
exports.Annotations = require('./components/annotations');
exports.Shapes = require('./components/shapes');
exports.Titles = require('./components/titles');
exports.Legend = require('./components/legend');
exports.ModeBar = require('./components/modebar');

// traces
exports.Scatter = require('./traces/scatter');
exports.Bar = require('./traces/bar');
exports.Box = require('./traces/box');
exports.Heatmap = require('./traces/heatmap');
exports.Histogram = require('./traces/histogram');
exports.Histogram2d = require('./traces/histogram2d');
exports.Histogram2dContour = require('./traces/histogram2dcontour');
exports.Pie = require('./traces/pie');
exports.Contour = require('./traces/contour');
exports.Scatter3D = require('./traces/scatter3d');
exports.Surface = require('./traces/surface');
exports.Mesh3D = require('./traces/mesh3d');
exports.ScatterGeo = require('./traces/scattergeo');
exports.Choropleth = require('./traces/choropleth');
exports.ScatterGl = require('./traces/scattergl');

// plot api
require('./plot_api/plot_api');
exports.PlotSchema = require('./plot_api/plot_schema');

// imaging routines
exports.Snapshot = require('./snapshot');
