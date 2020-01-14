$(document).ready(function () {
	var name = "";
	var email = "";
	var password = "";
	var cfm_password = "";
	var name_reg = /^[a-z ]+$/i;
	var email_reg = /^[a-z]+[0-9a-zA-Z_\.]*@[a-z_]+\.[a-z]+$/;    // Format Email
	var password_reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/; // (?=.[0-9]) :Check at least one number, (?=.[a-z]) : Check atleast one lowerkey,.
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

	// VALIDATION PASSWORD
	$("#password").focusout(function () {
		var password_store = $.trim($("#password").val());
		if (password_store.length == ""){		// Check password blank
			$(".password-error").html("Password is required! ");
			$("#password").addClass("border-red");
			$("#password").removeClass("border-green");
			password = "";
		}else if(password_reg.test(password_store)){
			$(".password-error").html("");
			$("#password").addClass("border-green");
			$("#password").removeClass("border-red");
			password = password_store;
		}else{
			$(".password-error").html("6 characters of longer. Combine upper and lowercase letter and numbers and no blank!");
			$("#password").addClass("border-red");
			$("#password").removeClass("border-green");
			password = "";
		}
	})
	// VALIDATION CFM_PASSWORDD
	$("#cfm_password").focusout(function () {
		var cfm_password_store = $.trim($("#cfm_password").val());
		if (cfm_password_store.length ==""){
			$(".cfm_password-error").html("Confirm password is required!");
			$("#cfm_password").addClass("border-red");
			$("#cfm_password").removeClass("border-green");
			cfm_password = "";
		}else if (cfm_password_store !=password){
			$(".cfm_password-error").html("Password is not match!");
			$("#cfm_password").addClass("border-red");
			$("#cfm_password").removeClass("border-green");
			cfm_password = "";
		}else{
			$(".cfm_password-error").html("");
			$("#cfm_password").addClass("border-green");
			$("#cfm_password").removeClass("border-red");
			cfm_password = cfm_password_store;
		}
	})
	$("#submit").click(function () {
		if (name.length =="" ){
			$(".name-error").html("Name is required!");
			$("#name").addClass("border-red");
			$("#name").removeClass("border-green");
			name = "";
		}
		else if ( email.length == ""){
			$(".email-error").html("Email is required!");
			$("#email").addClass("border-red");
			$("#email").removeClass("border-green");
			email = "";
		}
		else if ( password.length == ""){
			$(".password-error").html("Password is required! ");
			$("#password").addClass("border-red");
			$("#password").removeClass("border-green");
			password = "";
		}
		else if ( cfm_password.length == ""){
			$(".cfm_password-error").html("Confirm password is required!");
			$("#cfm_password").addClass("border-red");
			$("#cfm_password").removeClass("border-green");
			cfm_password = "";
		}
	})
})