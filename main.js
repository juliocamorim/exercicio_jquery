
$(document).ready(function () {
    $('#botao').click( function(e) {
        e.preventDefault();
        var novaTarefa = $("#nome-tarefa").val();
            if (novaTarefa) {
        var novaTarefaLi = $("<li></li>").text(novaTarefa);
        novaTarefaLi.appendTo("#tarefas");
        document.getElementById("nome-tarefa").value = " ";
        $("#nova-tarefa").val(" ");
            novaTarefaLi.click(function () {
        $(this).toggleClass("done");
            })
        }
    })
})