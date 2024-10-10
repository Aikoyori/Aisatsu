/* JavaScript for the Example skin */
// button with id wm-menu-button will toggle class open in id wm-sidebar

window.Aisatsu = window.Aisatsu || {};

// use checkbox as menu toggle
cacophony = function() {
	$('#mw-menu-toggle').on('click', function(e) {
		e.preventDefault();
		$('#mw-sidebar').toggleClass('open');
		$('#mw-dimmer').toggleClass('open');
	});
	$('#mw-dimmer').on('click', function(e) {
		e.preventDefault();
		$('#mw-sidebar').toggleClass('open');
		$('#mw-dimmer').toggleClass('open');
	});
}
// reset menu on resize
$(window).resize(function() {
	$('#mw-sidebar').removeClass('open');
	$('#mw-dimmer').removeClass('open');
});

cacophony();
