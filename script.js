$(function(){

	// page has loaded
	$.get('https://dog.ceo/api/breeds/list', function(response){
		// console.log(response.message);
		// $('select').append('<option></option>');
		$('select').append('<option>Select a dog</option>');
		response.message.forEach(function(currentBreed){
			$('select').append('<option val="'+ currentBreed +'">'+ currentBreed +'</option>');
		});
	});

	$('select').change(function(){
		var dogBreed = $(this).val();
		var url = "https://dog.ceo/api/breed/"+ dogBreed +"/images/random";
		if (dogBreed != "Select a dog") {
			$.get(url, function(response){
				$('body').append('<img src="'+ response.message +'" />');
			});
		}
		
	});

	$('button').click(function(){
		// notify the user that we're loading data

		$(this).text('generating doggo...');

		$.get('https://dog.ceo/api/breeds/image/random', function(response){
			// notify the user that we've now got the data
	
			$(this).text('generate doggo');
			$('body').append('<img src="'+ response.message +'" />');
		}.bind(this));


	});
});