define([], function(){
	var previewDialog = Backbone.View.extend({
		defaults:{
			width: 500,
			height: 500
		},

		self:this,

		initialize: function(params){
			this.width = params.width?params.width:500;
			this.height = params.height?params.height:500;
			this.drawing = params.drawing;
			this.mode = params.mode;
			this.render();
		},

		render: function(){
			this.$el.html('<div id="preview-drawing"></div>');		
			this.createDialog();
			switch(this.mode){
				case 'svg':
					this.previewSVG();
				break;
				case 'canvas':
					this.previewCanvas();
				break;
				default:
				break
			}
		},

		createDialog: function(){
			var self = this;
			this.$el.dialog({
				modal: true,
				width: this.width,
				height: this.height,
				buttons: {
			        Close: function() {
			          $( this ).dialog( "close" );
			          this.remove();
			        }
		      	}
			});
		},

		
	    /**
		*  Draw user created objects on svg element
		*  @param svg - svg root element
	    */
		drawIntro: function(svg){
			var objects = self.drawing.toJSON();
			for (var i = 0; i < objects.length; i++) {
				var obj = objects[i];
				switch(obj.type){
					case "circle":
						svg.circle(obj.x1+100, obj.y1+100, obj.radius, {fill : obj.color});
					break;
					case "line":
						svg.line(obj.x1+100,obj.y1+100,obj.x2+100,obj.y2+100, {stroke : obj.color});
					break;
					default:
					break;
				}
			};
		},

		previewSVG: function(){
			var self = this;
			this.$el.svg({
				onLoad: self.drawIntro, 
				width: self.width, 
				height: self.height
			});
		},

		previewCanvas: function(){
			this.$el.append('<canvas id="drawingCanvas" width="'+this.width+'" height="'+this.height+'"></canvas>');
			var context = $('#drawingCanvas').get(0).getContext('2d');
			this.drawCanvas(context);
		},

		/**
		* Draw a circle to a specific canvas context
		*/
		drawCircle: function(object, ctx) {
		    ctx.beginPath();
		    ctx.arc(object.x1, object.y1, object.radius, 0, Math.PI * 2);
		    ctx.fillStyle = object.color;
		    ctx.fill();
		},
		
		/**
		* Draw a line to a specific canvas context
		*/
		drawLine: function(object, ctx) {
		    ctx.beginPath();
		    ctx.moveTo(object.x1, object.y1);
		    ctx.lineTo(object.x2, object.y2);
		    ctx.strokeStyle = object.color;
		    ctx.stroke();
		},

		/**
		*	Draws all objects on a canvas context
		*/
		drawCanvas: function(ctx) {
			var objects = this.drawing.toJSON();
			for (var i = 0; i < objects.length; i++) {
				var obj = objects[i];
				switch(obj.type){
					case "circle":
						this.drawCircle(obj, ctx);
					break;
					case "line":
						this.drawLine(obj, ctx);
					break;
					default:
					break;
				}
			};
		}
	});
	return previewDialog;
});