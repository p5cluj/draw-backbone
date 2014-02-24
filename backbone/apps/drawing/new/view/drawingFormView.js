define([], function(){
	var drawingFormView = Backbone.View.extend({				
		
		initialize: function(){
			this.render();
			this.initializeEventListeners();
		},

		render: function(){
			var defaultFields = {
				title: this.model.drawing.title,
				width: this.model.drawing.width,
				height: this.model.drawing.height
			}
			var template = _.template($("script.new-form").html(), defaultFields);
			this.$el.append(template);
		},

		events: {
			"change .objectSelector" : 'createshapeFormView',
			"click .preview" : 'previewDrawing',
			"click .cancel" : 'destroyView',
			"click .save" : 'saveDrawing'
		},

		initializeEventListeners: function(){
			var self = this;
			//dinamically add shapes in select list
			this.model.drawing.on('add', function(shape){
				self.$el.find("select.objects").append('<option value="'+shape.get('type')+'">'+shape.get('type')+'</option>');
			});
		},

		saveDrawing: function(event){
			var form = this.$el.find("#new-drawing-form")[0];
			if(form.checkValidity()){//use HTML5 validation
				event.preventDefault();
				var formData = $(form).serializeArray();
				this.model.saveDrawing(formData);
			}				
		},

		createshapeFormView: function(e){			
			var shape = $("select.objectSelector").val();
			this.model.createshapeFormView(shape);
		},

		previewDrawing: function(){
			this.model.previewDrawing();
		},

		destroyView: function(){
			this.remove();
			this.model.destroyView();
		}
	});
	return drawingFormView;
})