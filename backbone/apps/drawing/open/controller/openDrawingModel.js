define(['drawing/open/view/openDrawingView', 'appEvents'], 
	function(openDrawingView, appEvents){
		var openDrawingModel = Backbone.Model.extend({
			initialize: function(params){
				this.view = new openDrawingView({el: params.el, model: this})
			},
			openDrawing: function(){
				console.log("model - openDrawing");
			},

			destroyView: function(){
				console.log("model - destroyView");
				this.destroy();
				appEvents.trigger('reset');
			}
		});
		return openDrawingModel;
});