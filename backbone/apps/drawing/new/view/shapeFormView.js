define([], function(){
	var shapeFormView = Backbone.View.extend({

		initialize: function(params){
			this.shape = params.shape;
			this.$el = $(params.el);
			this.render();
			this.initializeEventListeners();
		},

		render: function(){
			this.loadTemplate();			
		},

		initializeEventListeners: function(){
			var self = this;
			$(".addObject").on('click', function(e){
				e.preventDefault();
				self.addObject();
			});
			this.model.on('destroy', this.destroy);
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
			this.model.addObject(this.$el.find("#new-shape-form").serializeArray());
		},

		destroy: function(){
			$("#new-shape-form").remove();
			delete this;
		}
	});
	return shapeFormView;
})