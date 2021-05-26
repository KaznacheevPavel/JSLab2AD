"use strict"

function chooseAll() {
  var checkboxes = document.querySelectorAll('input.check_deletion');
  for (var item of checkboxes)
    item.checked = true; 
}

function deleteCard() {
  var cards = document.querySelectorAll('.card_wrapper');
  for (var card of cards) {
    var checkbox = card.querySelector('.check_deletion');
    if (checkbox.checked == true)
      card.remove();
  }
}