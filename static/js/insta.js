var token = '4955327784.87b141b.b291bea9901d4c2593db7d319b0bb63d', // learn how to obtain it below
    userid = 4955327784, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 6; // how much photos do you want to get
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('ul#instagram').append('<li class="instagram-photo"><img src="'+data.data[x].images.standard_resolution.url+'"></li>');
			// data.data[x].images.low_resolution.url - URL of image, 306х306
			// data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL 
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});

