$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password1'){
		$(this).html('Скрыть пароль');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).html('Показать пароль');
		$('#password-input').attr('type', 'password1');
	}
	return false;
}); 