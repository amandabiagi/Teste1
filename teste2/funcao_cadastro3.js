function funcao() {
     div2.innerHTML = ``;

    var inome = nome.value;
    var iemail = email.value;
    var irg = rg.value;
    var icpf = cpf.value;
    var inasc =  nascimento.value;
    var isenha = senha.value;
    var iconfirmar = confirmacao.value;

    if (inome == '' || 
        iemail == '' ||
        irg == '' ||
        icpf == '' ||
        inasc == '' ||
        isenha == '' ||
        iconfirmar == '' 
        ) {
            Swal.fire({
                type: 'error',
                title: 'Campos não preenchidos.',
                text: 'Por favor verifique se os campos foram preenchidos corretamente',
                // footer: '<a href>Why do I have this issue?</a>'
              })
        
        } else{

            if(
                senha.value != confirmacao.value &&
                senha.value != '' &&
                confirmacao.value != ''
                 ){
                    Swal.fire({
                        type: 'error',
                        title: 'Senhas não se correspondem.',
                        text: 'Por favor verifique se sua senha está digitada corretamente.',
                        // footer: '<a href>?</a>'
                      })
           senha.value = '';
           confirmacao.value ='' ;   
                }

            if(senha.value == confirmacao.value &&
                senha.value != '' &&
                confirmacao.value != '' &&
                senha.value.length < 6){

                    senha.value='';
                    confirmacao.value='';
                    Swal.fire({
                        type: 'error',
                        title: 'Senha está incorreta',
                        text: 'A senha precisa ter no mínimo 6 caracteres',
                        // footer: '<a href>Why do I have this issue?</a>'
                      }) 
                }

                if (email.value.indexOf('@') <= 0 ){
                    
                    Swal.fire({
                        type: 'error',
                        title: 'Email invalido',
                        text: 'Por favor verifique se seu email está escrito corretamente.',
                        // footer: '<a href>Why do I have this issue?</a>'
                      })
                     email.value ='';
                    }

                    if(senha.value !='' &&
                        confirmacao.value !='' &&
                        senha.value == confirmacao.value &&
                        senha.value.length > 5 &&
                        email.value.indexOf('@') >= 0 &&
                        nome.value != '' &&
                        rg.value!= '' &&
                        cpf.value != ''
                        ) {
                            Swal.fire(
                                'Obrigado por se cadastrar!',
                                ' Hogwards fica muito feliz com sua presença.',
                                'Cadastro realizado com sucesso'
                              )
                           
                            senha.value='';
                            confirmacao.value ='';
                            email.value='';
                            nome.value = '';
                            rg.value = '';
                            numero.value = '';
                            cpf.value='';
                            	
 
                           

                        }

                    }
                }
