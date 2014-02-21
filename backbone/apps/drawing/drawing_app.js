define(['models/drawing','models/shape', 'drawing/new/controller/newDrawingController', 'drawing/open/controller/openDrawingController'], 
	function(drawing, shape, newDrawingController, openDrawingController){
	var DrawingApp = Backbone.View.extend({		

		initialize: function(){
			this.render();
		},

		render: function(){

		},

		createNewDrawing: function(){	
			this.$el.append('<div id="new-drawing">');
			this.newDrawingController = new newDrawingController({el: "#new-drawing"});
		},

		openDrawing: function(){
			this.$el.append('<div id="open-drawing">');
			this.openDrawingController = new openDrawingController({el: "#open-drawing"});
		},

		initializeEvents: function(){
			var self = this;
		}

	});
	return DrawingApp;
})