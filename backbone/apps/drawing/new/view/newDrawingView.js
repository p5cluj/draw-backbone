define([], function(){
	var NewDrawingForm = Backbone.View.extend({		
		template: _.template($("script.new-form").html()),
		
		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.append(this.template);
		},

		events: {
			"change .objectSelector" : 'createNewShapeForm',
			"click .preview" : 'previewDrawing',
			"click .cancel" : 'destroyView',
			"click .save" : 'saveDrawing'
		},

		createNewShapeForm: function(e){			
			var shape = $("select.objectSelector").val();
			this.model.createNewShapeForm(shape);
		},

		previewDrawing: function(){
			this.model.previewDrawing();
		},

		destroyView: function(){
			this.remove();
			this.model.destroyView();
		}
	});
	return NewDrawingForm;
})