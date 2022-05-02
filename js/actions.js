let cont = 0;
$("#btAddLista").click(function () {
  let category = addCategory.category.value;
  cont++;
  $("#container").append(
    `<div id = "lista${cont}" class="animate__animated animate__zoomIn">` +
      `<div class="row border m-2  pb-2 p-2 d-flex align-items-center position-relative">` +
      `<div class="d-flex align-items-center">` +
      `<h4 class="border-start px-2 border-5 border-secondary text-break">${category}</h4>` +
      `</div>` +
      `<div>` +
      `<a href="#!" style="color: white;" id="${cont}" class="btnRemCateg bg-danger btn position-absolute top-0 end-0 p-2 pb-0 pt-1" > <i class="material-icons small">delete</i></a>` +
      `</div> ` +
      `<ul class="list-group list-group-flush" id="listGroup${cont}"> ` +
      `<li class="list-group-item d-flex"> ` +
      `<div class="input-group"> ` +
      `<input type="text" id="txt${cont}" class="form-control" placeholder ="Insert" aria - label="Insert" aria - describedby="addon-wrapping" > ` +
      `<a href="#!" class="btnAddItem btn btn-outline-primary pt-2 pb-0" id = "${cont}"> <i class="material-icons">edit</i></a> ` +
      `</div> ` +
      `</li> ` +
      `</ul> ` +
      `</div> ` +
      `</div>`
  );
  document.getElementById("addCategory").reset();
});

let cont2 = 0;
$(".categoryContainer").on("click", ".btnAddItem", function () {
  var button_id = $(this).attr("id");
  var item = document.getElementById(`txt${button_id}`);
  cont2++;

  $("#listGroup" + button_id + "").append(
    `<li class="list-group-item animate__animated animate__zoomIn position-relative" id="item${cont2}">` +
      `<div class="row d-flex align-items-center">` +
      `<div class="col-11 ps-4">` +
      `<div class="text-break"><i class="p-3 bi bi-asterisk position-absolute top-50 start-0 translate-middle-y"></i><span class = "ps-2 text-item">${item.value}</span></div>` +
      `</div>` +
      `<div class="col-1">` +
      `<button class="btn btn-outline-primary btn-sm btnRemItem position-absolute top-50 end-0 translate-middle-y"  id="${cont2}"><i class="material-icons small">done</i></button>` +
      `</div>` +
      `</div>` +
      `</li>`
  );
  item.value = "";
});

$(".categoryContainer").on("click", ".btnRemCateg", function () {
  remove("lista", $(this));
});

$(".categoryContainer").on("click", ".btnRemItem", function () {
  remove("item", $(this));
});

function remove(elemeto, botao) {
  let button_id = botao.attr("id");
  let lista = document.getElementById(elemeto + button_id + "");
  lista.classList.add("animate__zoomOut");
  lista.style.setProperty("--animate-duration", "0.3s");
  document
    .getElementById(elemeto + button_id + "")
    .addEventListener("animationend", () => {
      $("#" + elemeto + button_id + "").remove();
    });
}
