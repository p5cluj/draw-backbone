define([], function(){
	var OpenDrawingView = Backbone.View.extend({		
		template: _.template($("script.open-form").html()),
		
		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.append(this.template);
		},

		events: {
			"click .cancel" : "destroyView",
			"click .open" : "openDrawing"
		},

		openDrawing : function(){
			this.model.openDrawing();
		},

		destroyView: function(){
			this.remove();
			this.model.destroyView();
		}
	});
	return OpenDrawingView;
})