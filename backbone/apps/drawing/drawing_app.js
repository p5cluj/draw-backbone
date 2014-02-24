define(function(require){
	var drawing = require('models/drawing');
	var shape = require('models/shape');
	var drawingFormModel = require('drawing/new/controller/drawingFormModel');
	var openDrawingModel = require('drawing/open/controller/openDrawingModel');
	
	var DrawingApp = Backbone.View.extend({		

		initialize: function(){
			this.render();
		},

		render: function(){

		},

		createNewDrawing: function(){	
			this.$el.append('<div id="new-drawing">');
			this.drawingFormModel = new drawingFormModel({el: "#new-drawing"});
		},

		openDrawing: function(){
			this.$el.append('<div id="open-drawing">');
			this.openDrawingModel = new openDrawingModel({el: "#open-drawing"});
		},

		initializeEvents: function(){
			var self = this;
		}

	});
	return DrawingApp;
})