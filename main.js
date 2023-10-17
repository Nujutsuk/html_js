function validarFormulario() {
    var campo_a = document.getElementById('campo-a').value;
    var campo_b = document.getElementById('campo-b').value;

    if (campo_b > campo_a) {
        alert('A validação foi um sucesso!');
        return true;
        limparCampos();
    }

    else if(campo_a == campo_b){
        alert('Os valores são igual, tente novamente!');
        return false;
        limparCampos();
    } 

    else {
        alert('Não foi possível realizar a validação, por favor revise seus dados!');
        return false;
        limparCampos();
    }

    function limparCampos(){
        let campos = document.querySelectorAll('input[type= "number"], input[type= "number"]');
        campos.forEach(function (campo){
        campo.value = " ";
        })
    }
}