function validarFormulario() {
    const campo_a = parseInt(document.getElementById('campo-a').value);
    const campo_b = parseInt(document.getElementById('campo-b').value);
    
    if (campo_a >= campo_b) {
        alert('Não foi possível realizar a validação, por favor revise seus dados!');
        return false;       
    }

    else {
        alert('A validação foi um sucesso!');
        return true;
        limparCampos();
    }

    function limparCampos(){
        let campos = document.querySelectorAll('input[type= "number"], input[type= "number"]');
        campos.forEach(function (campo){
        campo.value = " ";
        })
    }
}
