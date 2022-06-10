$(document).ready(function() {
	$("#form-get-card").validate({
		rules:{
			input_full_name: {
				required: true	
			},
			input_email: {
				required: true,
				email: true
			}
		},
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
	           	}
           });
		}
	})
});