$(document).ready(function () {
  $("#inputTask").change(function () {
    var input = $(this).val();
    addTask(input);
    $(this).val("");
  });

  $("#listTask").on("click", "#delete", function () {
    $(this).parent("#task").fadeOut(200).remove();
  });

  $("#listTask").on("click", "#done", function () {
    console.log("asadf");
    $(this)
      .parent("#task")
      .toggleClass(
        "bg-secondary-subtle bg-success bg-opacity-50 text-decoration-line-through"
      );
  });
});

function addTask(input) {
  var taskDiv = $("<div>")
    .attr("id", "task")
    .addClass("d-flex rounded gap-2 text-break fw-bold bg-secondary-subtle");

  var inputSpan = $("<span>").addClass("me-auto px-2 p-1").text(input);

  var doneButton = $("<button>")
    .attr("id", "done")
    .attr("type", "button")
    .addClass("btn btn-success btn-sm my-1");
  var doneIcon = $("<i>").addClass("bi bi-check-lg");
  doneButton.append(doneIcon);

  var deleteButton = $("<button>")
    .attr("id", "delete")
    .attr("type", "button")
    .addClass("btn btn-danger btn-sm my-1 mx-1");
  var deleteIcon = $("<i>").addClass("bi bi-trash-fill");
  deleteButton.append(deleteIcon);

  taskDiv.append(inputSpan, doneButton, deleteButton);

  $("#listTask").append(taskDiv);
}
