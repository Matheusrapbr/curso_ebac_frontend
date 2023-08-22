$(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault();
        const Tarefas = $("#input").val();
        if (Tarefas !== "") {
            const TarefasLinhas = $("<li>").text(Tarefas);
            $("#lista").append(TarefasLinhas);
            $("#input").val("");
        }
    });

    $("#lista").on("click", "li", function() {
        $(this).toggleClass("MarcadorDeLinha");
    });
});
