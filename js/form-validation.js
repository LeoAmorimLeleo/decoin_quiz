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
	          	url:"teste.php",
	           	type:"POST",
	           	data:(data),
	           	beforeSend: function(data){ 
	           		console.log(data);
	           	},
	           	success:function(data){
	           		console.log(data);
	               alert("Dados Enviados");
	           	}, 
	           	complete: function(data){
	           		console.log(data);
	           	}
           });
		}
	})
});