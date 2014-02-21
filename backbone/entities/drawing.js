define(['models/shape'], function(shape){
	var Drawing = Backbone.Collection.extend({
		model: shape,
		title: "Default Title",
		width: 500,
		height: 500,
		initialize: function(){
			console.log("loaded new drawing");
		}
	});
	return Drawing;
})