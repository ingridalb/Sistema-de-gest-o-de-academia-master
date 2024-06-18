// scripts.js

$(document).ready(function() {
    // Função para listar alunos ao clicar no link "Listar Alunos"
    $('#list-alunos').click(function(e) {
        e.preventDefault();
        $('.content div').hide(); // Esconde todos os conteúdos
        $('#alunos-list').show(); // Mostra a lista de alunos

        // Requisição GET para sua API
        $.ajax({
            url: 'http://localhost:8000/alunos/', // URL da sua API
            method: 'GET',
            success: function(data) {
                // Limpa o conteúdo anterior
                $('#alunos-list').html('');

                // Itera sobre os alunos recebidos da API e os exibe
                data.forEach(function(aluno) {
                    $('#alunos-list').append('<p>' + aluno.nome + '</p>');
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    });

    // Função para mostrar formulário de adição de aluno ao clicar em "Adicionar Aluno"
    $('#add-aluno').click(function(e) {
        e.preventDefault();
        $('.content div').hide(); // Esconde todos os conteúdos
        $('#add-aluno-form').show(); // Mostra o formulário de adição de aluno
    });

    // Exemplo de envio de POST para adicionar um aluno
    $('#add-aluno-form').submit(function(e) {
        e.preventDefault();
        var formData = {
            nome: $('#nome').val(),
            email: $('#email').val(),
            // Adicione mais campos conforme necessário
        };

        $.ajax({
            url: 'http://localhost:8000/alunos/', // URL da sua API para adicionar aluno
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                console.log(response);
                alert('Aluno adicionado com sucesso!');
                $('#add-aluno-form')[0].reset(); // Limpa o formulário após o envio
            },
            error: function(error) {
                console.log(error);
                alert('Erro ao adicionar aluno. Verifique o console para mais detalhes.');
            }
        });
    });
});
