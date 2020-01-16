$(document).ready(function () {
	var email_login = "";
	var password_login = "";
	var email_reg = /^[a-z]+[0-9a-zA-Z_\.]*@[a-z_]+\.[a-z]+$/;    // Format Email

	// EMAIL_LOGIN VALIDATION
	$("#email_login").focusout(function () {
		var email_store = $.trim($("#email_login").val());
		if (email_store.length == ""){
			$("#email_login").addClass("border-red");
			$("#email_login").removeClass("border-green");
			$(".login-email-error").html("Email is required!");
			email_login = "";
		}else if (email_reg.test(email_store)){
			$("#email_login").addClass("border-green");
			$("#email_login").removeClass("border-red");
			$(".login-email-error").html("");
			email_login = email_store;
		}else{
			$(".login-email-error").html("Invalid Email Format!");
			$("#email_login").addClass("border-red");
			$("#email_login").removeClass("border-green");
			email_login = "";
		}
	});
	//PASSWORD_LOGIN VALIDATION
	$("#password_login").focusout(function () {
		var password_store = $.trim($("#password_login").val());
		if (password_store.length == ""){
			$("#password_login").addClass("border-red");
			$("#password_login").removeClass("border-green");
			$(".login-password-error").html("Password is required!");
			password_login = "";
		}else{
			$("#password_login").addClass("border-green");
			$("#password_login").removeClass("border-red");
			$(".login-password-error").html("");
			password_login = password_store;
		}
	});

	// Button login_submit validation
	$("#login_submit").click(function () {
		if (email_login.length == "") {
			$("#email_login").addClass("border-red");
			$("#email_login").removeClass("border-green");
			$(".login-email-error").html("Email is required!");
			email_login = "";
		}
		else if (password_login.length == ""){
			$("#password_login").addClass("border-red");
			$("#password_login").removeClass("border-green");
			$(".login-password-error").html("Password is required!");
			password_login = "";
		}else{
			$.ajax({
				type: 'POST',
				url: 'ajax/login.php?login_form=true',
				data: $("#login-submit-form").serialize(),
				dataType: "JSON",
				beforeSend: function(){	// Make progress bar login
					$(".show-progress-login").addClass('progress');
				},
				success: function (feedback) {
					setTimeout(function () {
						if (feedback['error'] == "success"){
							location = feedback['msg'];
						}else if (feedback['error'] == "fail"){
							$(".login-password-error").html(feedback['msg']);
							$("#password_login").addClass("border-red");
							$("#password_login").removeClass("border-green");
							$(".show-progress-login").removeClass('progress');
						}else if (feedback['error'] == "no_email"){
							$(".login-email-error").html(feedback['msg']);
							$("#email_login").addClass("border-red");
							$("#email_login").removeClass("border-green");
							$(".show-progress-login").removeClass('progress');
						}
					},2000)
				}
			})
		}
	});
});