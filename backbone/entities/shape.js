define([], function(){
	var Shape = Backbone.Model.extend({
		x1:0,
		y1:0,
		x2:0,
		y2:0,
		radius:0,
		color:"#000000",
		initialize: function(){
			console.log("loaded new shape");
		}
	});
	return Shape;
});