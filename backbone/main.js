require.config({
	paths: {
		apps: '../backbone/apps',
		drawing: '../backbone/apps/drawing',
		models: '../backbone/entities',
		appEvents: '../backbone/messaging/events/appEvents',
		requestHandler: '../backbone/messaging/request/requestHandler',
		components: '../backbone/components'
	}
})
require(['apps/app'], function(AppView){
	new AppView();
})