define(['drawing/new/view/NewDrawingForm','drawing/new/controller/newShapeController', 'models/shape', 'models/drawing', 'appEvents'], 
	function(NewDrawingForm, newShapeController, Shape, Drawing, appEvents){
		var newDrawingController = Backbone.Model.extend({
			initialize: function(params){
				this.view = new NewDrawingForm({el: params.el, model: this});				
				this.drawing = new Drawing();
			},

			createNewShapeForm: function(shape){
				if(this.newShapeController){
					this.newShapeController.destroy();
				}				
				this.newShapeController = new newShapeController({el:this.view.el, drawing: this.drawing, shape: shape});
			},

			previewDrawing: function(){
				console.log(this.drawing);
			},

			destroyView: function(){
				console.log("model - destroyView");
				this.destroy();
				appEvents.trigger('reset');
			}
		});
		return newDrawingController;
});