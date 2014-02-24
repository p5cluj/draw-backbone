define([], function(){
	var RequestHandler = Backbone.Model.extend({
		saveDrawing: function(data){
			this.sendDataForm(data);
		},

		openDrawing: function(){

		},

	    /**
		*  Temporary form submit hack to send data and support file download
	    */
	    sendDataForm: function(data){
			//create temporary form to send data
			var form = $("<form></form>",{
				method:"POST",
				id:"tempForm",
				action:"draw/save.php",
				target : "_blank"
				//action:"javascript:;"
			});
			
			var hiddenInput = $("<input></input", {
				name : "objects",
				type : "hidden",
				value : jQuery.param(data),
			});

			$(form).append(hiddenInput);
			$("body").append(form);
			$(form).submit();
			$(form).remove();
	    }
	});
	return new RequestHandler;
});