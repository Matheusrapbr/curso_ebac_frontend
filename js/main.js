$(document).ready(function(){
    $('#telefone').mask('(00) 0 0000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')


    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required:true
            },
            endereço: {
                required:true
            },
            cep: {
                required:true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu E-mail',
            telefone: 'Por favor, insira o seu Telefone',
            cpf: 'Por favor, insira o seu CPF',
            endereço: 'Por favor, insira o seu Endereço',
            cep: 'Por favor, insira o seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos)
            alert(`Existem ${camposIncorretos} campos "INCORRETOS" ou "NÃO PREENCHIDOS"`)
        }
    })
})
