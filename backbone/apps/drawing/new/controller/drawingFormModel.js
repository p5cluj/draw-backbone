define(function(require){
	//manage dependecies using Commoon JS style for more clarity
	var drawingFormView = require('drawing/new/view/drawingFormView');
	var shapeFormModel = require('drawing/new/controller/shapeFormModel');
	var Shape = require('models/shape');
	var Drawing = require('models/drawing');
	var previewDialog = require('components/dialog/previewDialog');
	var appEvents = require('appEvents');
	var requestHandler = require('requestHandler');
	
	var drawingFormModel = Backbone.Model.extend({
		initialize: function(params){
			this.drawing = new Drawing();			
			this.view = new drawingFormView({el: params.el, model: this});	

			//mock some shapes
			this.drawing.add(new Shape({type: "circle", x1: 50, x2: "", y1: 50, y2: "", radius: 111, color: "#3ae43f"}));
			this.drawing.add(new Shape({type: "line", x1: 90, x2: 180, y1: 400, y2: 500, radius: "", color: "#f2245c"}));									
		},

		createshapeFormView: function(shape){
			if(this.shapeFormModel){
				this.shapeFormModel.destroy();
			}				
			this.shapeFormModel = new shapeFormModel({el:this.view.el, drawing: this.drawing, shape: shape});
		},

		previewDrawing: function(){
			this.previewDialog = new previewDialog({drawing: this.drawing, mode:'canvas'});
		},

		saveDrawing: function(formData){
			var dto = this.getDTO(formData);
			delete dto.objectSelector;
			dto['objects'] = this.drawing.toJSON();				
			console.log(dto);
			requestHandler.saveDrawing(dto);
		},

		destroyView: function(){
			console.log("model - destroyView");
			this.destroy();
			appEvents.trigger('reset');
		},

	    /**
		*  Format serialized form to compatible object
	    */
		getDTO: function(formObject){
			var dto = {};		
			for (var i = 0; i < formObject.length; i++) {
					var data = formObject[i];
					var name = formObject[i].name;
					var value = formObject[i].value;
					dto[name] = value;
			};
			return dto;
		}
	});
	return drawingFormModel;
});