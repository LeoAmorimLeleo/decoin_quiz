$(document).ready(function() {
	$("form-get-card").validate({
		rules:{
			input_nome_sobrenome: {
				required: true	
			},
			input_email: {
				required: true,
				email: true
			}
		},
		submitHandler: function(form){
			alert("enviado");
		}
	})
});