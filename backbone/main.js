require.config({
	paths: {
		apps: '../backbone/apps',
		drawing: '../backbone/apps/drawing',
		models: '../backbone/entities',
		appEvents: '../backbone/apps/events/appEvents'
	}
})
require(['apps/app'], function(AppView){
	new AppView();
})