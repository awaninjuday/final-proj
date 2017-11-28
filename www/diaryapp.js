try{
	
	document.addEventListener('keyup',function(){
		var input = document.getElementById('field_DATE').value;
		document.getElementById('input_DATE').innerHTML = input;
		
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_TITLE').value;
		document.getElementById('input_TITLE').innerHTML = input;
		});

		

		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_Feelings').value;
		document.getElementById('input_Feelings').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_your Contents').value;
		document.getElementById('input_tell about your day').innerHTML = input;
		});


		
	









		
	
}

catch(e){
	console.log(e);
}