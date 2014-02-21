define(['drawing/new/view/newShapeView', 'models/shape', 'models/drawing', 'appEvents'], 
	function(newShapeView, Shape, Drawing, appEvents){
		var newShapeController = Backbone.Model.extend({
			initialize: function(params){
				this.view = new newShapeView({el: params.el, model: this, shape: params.shape});
				this.shape = params.shape;
				this.drawing = params.drawing;
			},

			addObject: function(dto){
				this.drawing.add(new Shape(dto));
			},

	    	/**
			*  Format serialized shape object to {type,x1,y1,x2,y2,radius,color}
		    */
			getShapeDTO: function(formObject){
				var dto = {};
				dto['type'] = this.shape;
				switch(this.shape){
					case "circle":
						dto['x1'] = parseInt(formObject[0].value);
						dto['y1'] = parseInt(formObject[1].value);
						dto['x2'] = '';
						dto['y2'] = '';
						dto['radius'] = parseInt(formObject[2].value);
						dto['color'] = formObject[3].value;
					break;
					case "line":
						dto['x1'] = parseInt(formObject[0].value);
						dto['y1'] = parseInt(formObject[1].value);
						dto['x2'] = parseInt(formObject[2].value);
						dto['y2'] = parseInt(formObject[3].value);
						dto['radius'] = '';
						dto['color'] = formObject[4].value;
					break;
				}
				return dto;
			}
		});
		return newShapeController;
});