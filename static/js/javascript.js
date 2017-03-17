$(document).ready(function() {

	var app = app || { };

	(function(){

		app.controller = {
			init: function(){
				app.checkWindow.resize();
				app.checkWindow.width();
				app.scroll.init();
				app.menu.init();

			}
		},

		app.vars = {

			menu:0

		},

		app.checkWindow = {
			resize: function(){
				window.onresize = function() {
    				if (window.innerWidth <= 800 && document.getElementById("mobileGallery") === null){
    					if (document.getElementById("desktopGallery") != null) {$("#desktopGallery").remove();}
    					$("section#Foto div.row").append("<iframe id='mobileGallery' src='http://lightwidget.com/widgets/6f64a869633c5377a89738d158da0704.html' scrolling='no' allowtransparency='true' class='lightwidget-widget' style='width: 100%; border: 0; overflow: hidden;'></iframe>")
    			
    				} else if (window.innerWidth > 800 && document.getElementById("desktopGallery") === null){
    					if (document.getElementById("mobileGallery") != null) {$("#mobileGallery").remove();}
    					$("section#Foto").append("<iframe id ='desktopGallery' src='http://lightwidget.com/widgets/b5edcd0f9f2e57beb7aaacb816f1a708.html' scrolling='no' allowtransparency='true' class='lightwidget-widget' style='width: 100%; border: 0; overflow: hidden;'></iframe>");
    				}
				}
			},

			width: function(){
				if (window.innerWidth <= 800) {
					$("section#Foto div.row").append("<iframe id='mobileGallery' src='http://lightwidget.com/widgets/6f64a869633c5377a89738d158da0704.html' scrolling='no' allowtransparency='true' class='lightwidget-widget' style='width: 100%; border: 0; overflow: hidden;'></iframe>")
				} else if (window.innerWidth > 800){
					$("section#Foto").append("<iframe id ='desktopGallery' src='http://lightwidget.com/widgets/b5edcd0f9f2e57beb7aaacb816f1a708.html' scrolling='no' allowtransparency='true' class='lightwidget-widget' style='width: 100%; border: 0; overflow: hidden;'></iframe>");
				}
			}
		},

		app.scroll = {
			init: function(){
				$('a').click(function(){
					if (window.innerWidth <= 800) {
						app.menu.closeMenu();
					};
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
					if (window.innerWidth <= 800) {
						if (app.vars.menu == 0){
							app.menu.openMenu();
						} else{
							app.menu.closeMenu();
						}
					}
				}
			)},

			openMenu: function(){
  				$( "nav" ).removeClass( "closed" ).addClass( "open" );
  				$("button.menuButton").html("Sluiten <img src='static/img/icons/Close.svg' id='X-Icon'>");
  				app.vars.menu = 1;
			},

			closeMenu: function(){
				$( "nav" ).removeClass( "open" ).addClass( "closed" );
				$("button.menuButton").html("<img src='static/img/icons/Menu.svg' id='hamburger'>Menu");
				app.vars.menu = 0;
			}
		}

		app.controller.init();

	}());
});
