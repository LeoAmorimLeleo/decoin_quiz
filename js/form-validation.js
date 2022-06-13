$(document).ready(function() {
	$("#form-get-card").validate({
		rules:{
			input_full_name: {
				required: true	
			},
			input_email: {
				required: true,
				email: true
			},
		},
		errorElement: 'span',
		messages: {
			input_full_name: "Coloque seu nome",
			input_email: "Coloque um email válido"
		},
		submitHandler: function(form){
			const data = {
				fullName: $("#input_full_name").val(),
				email: $("#input_email").val()
			}
			$.ajax({
           		dataType:'application/json',
	          	url:"contact_add.php",
	           	type:"POST",
	           	data:(data), 
	           	complete: function(data){
	           		alert("completo")
	           		console.log(data);
	           		redirect();
	           		//https://decoin.com.br/quiz-1?utm_source=facebook&utm_medium=lead&utm_campaign=CA01-DYNAMIC-05
	           	}
           });
		}
	})
});

