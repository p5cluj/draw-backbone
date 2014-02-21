define([], function(){
	var newShapeForm = Backbone.View.extend({

		initialize: function(params){
			this.shape = params.shape;
			this.$el = $(params.el);
			this.render();
			this.model.on('destroy', this.destroy);
		},

		render: function(){
			this.loadTemplate();
			var self = this;
			$(".addObject").on('click', function(e){
				e.preventDefault();
				self.addObject();
			})
		},

		loadTemplate: function(){
			switch(this.shape){
				case "circle":
					this.template = _.template($("script.circle-form-template").html());
				break;
				case "line":
					this.template = _.template($("script.line-form-template").html());
				break;
				default:
				break;
			}
			this.$el.append(this.template);
		},

		addObject: function(){
			var dto = this.model.getShapeDTO(this.$el.find("#new-drawing-form").serializeArray());
			this.model.addObject(dto);
		},

		destroy: function(){
			$("#new-shape-form").remove();
			delete this;
		}
	});
	return newShapeForm;
})