$(document).ready(function() {

	var app = app || { };

	(function(){

		app.controller = {
			init: function(){
				app.scroll.init();
				app.menu.init();

			}
		},

		app.vars = {

			menu:0

		},

		app.scroll = {
			init: function(){
				$('a').click(function(){
					app.menu.closeMenu();
    				$('html, body').animate({
        			scrollTop: $( $(this).attr('href') ).offset().top
    			}, 700);
    			return false;
				});
			}
		},

		app.menu = {

			init: function(){
				this.checkMenu();
			},

			checkMenu: function(){
				$("button.menuButton").click(function() {
					if (app.vars.menu == 0){
							app.menu.openMenu();
					} else{
							app.menu.closeMenu();
					}
				}
			)},

			openMenu: function(){
  				$( "nav" ).removeClass( "closed" ).addClass( "open" );
  				$("button.menuButton").addClass( "no-border" );
  				$("button.menuButton").html("Sluiten <img src='static/img/icons/Close.svg' id='X-Icon'>");
  				app.vars.menu = 1;
			},

			closeMenu: function(){
				$( "nav" ).removeClass( "open" ).addClass( "closed" );
				$( "button.menuButton").removeClass( "no-border" );
				$("button.menuButton").html("<img src='static/img/icons/Menu.svg' id='hamburger'>Menu");
				app.vars.menu = 0;
			}
		}

		app.controller.init();

	}());
});
