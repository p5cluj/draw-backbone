define(['drawing/drawing_app', 'appEvents'], function(DrawingApp, appEvents){
	var AppView = Backbone.View.extend({
		el: "#drawing-app",

		initialize: function(){				
			this.render();
			//initialize drawing module with same el
			this.drawingApp = new DrawingApp({el: this.$el});	
			
			var self = this;
			appEvents.on('reset', function(){
				self.addButtons();
			})
		},

		render: function(){			
			this.addButtons();			
		},

		addButtons: function(){
			this.$el.append('<button id="new-shape" title="Create new CSV" class="btn btn-primary">New</button>')
			this.$el.append('<button id="open-shape" title="Open existing CSV" class="btn btn-primary">Open</button>')
		},

		removeButtons: function(){
			this.$el.find("#new-shape").remove();
			this.$el.find("#open-shape").remove();
		},

		events: {
			"click #new-shape" : 'newShapeHandler',
			"click #open-shape" : 'openShapeHandler'
		},

		newShapeHandler: function(){
			this.removeButtons();
			this.drawingApp.createNewDrawing();
		},

		openShapeHandler: function(){
			this.removeButtons();
			this.drawingApp.openDrawing();
		}
	});
	return AppView;
});