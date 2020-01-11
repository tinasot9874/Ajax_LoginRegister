$(document).ready(function () {
	var name = "";
	var email = "";
	var password = "";
	var confirm = "";
	var name_reg = /^[a-z ]+$/i;
	var email_reg = /^[a-z]+[0-9a-zA-Z_\.]*@[a-z_]+\.[a-z]+$/;
	// === NAME VALIDATION  === //
	$("#name").focusout(function () {
		var name_store = $.trim($("#name").val());
		if (name_store.length == ""){  // Check name blank
			$(".name-error").html("Name is required!");
			$("#name").addClass("border-red");
			$("#name").removeClass("border-green");
			name = "";

		}else if(name_reg.test(name_store)){ // Check name true
			$(".name-error").html("");
			$("#name").addClass("border-green");
			$("#name").removeClass("border-red");
			name = name_store;

		}else{	// Check name != name_reg format
			$(".name-error").html("Integer is not allowed!");
			$("#name").addClass("border-red");
			$("#name").removeClass("border-green");
			name = "";
		}
	})// === CLOSE NAME VALIDATION  === //
	// === EMAIL VALIDATION === //
	$("#email").focusout(function () {
		var email_store = $.trim($("#email").val());
		if (email_store.length == ""){  // Check email blank
			$(".email-error").html("Email is required!");
			$("#email").addClass("border-red");
			$("#email").removeClass("border-green");
			email = "";

		}else if(email_reg.test(email_store)){ // Check email true format
			$.ajax({
				type : 'POST',
				url  : 'ajax/signup.php',
				dataType : 'JSON',
				beforeSend : function(){
				$(".email-error").html('<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>');
				},
				data : {
					'check_email' : email_store
				},
				success : function(feedback){
					setTimeout(function () {
						if(feedback['error'] == 'email_success'){
							$(".email-error").html("<div class='text-success'><i class='fa fa-check-circle'> You can use this email!</div>");
							$("#email").removeClass("border-red");
							$("#email").addClass("border-green");
							email = email_store;
						}else if (feedback['error'] == 'email_fail'){
							$(".email-error").html("<div class='text-danger'><i class='fa fa-exclamation-circle'> Sorry, this email is already exits</div>");
							$("#email").addClass("border-red");
							$("#email").removeClass("border-green");
							email = "";
						}
					},1500);
				}
			});
		}else{	// Check name != name_reg format
			$(".email-error").html("Invalid Email Format!");
			$("#email").addClass("border-red");
			$("#email").removeClass("border-green");
			email = "";
		}
	})

})