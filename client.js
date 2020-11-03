// console.log('JS');
$(document).ready(onReady);

function onReady() {
  $('#maintnav').on('click', maintenance);
  $('#rentnav').on('click', rent);
  $('#trashnav').on('click', trash);
  $('#movenav').on('click', move);
  $('#contnav').on('click', contact);

}

//functions down here


function maintenance (e) {    
  positionMaint = $('#maint_req').offset().top - 95;
  console.log('maintenance',positionMaint);
  console.log('top', $('#maint_req').offset().top);
  
  console.log('height', $('#navtop').outerHeight());
  
  $("html, body").animate({ scrollTop: positionMaint }, '500', 'swing');
}

function rent (e) {
  positionRent = $('#pay_rent').offset().top - 95;
  console.log('rent',positionRent);
  console.log('height', $('#navtop').height());

  $("html, body").animate({ scrollTop: positionRent }, '500', 'swing');
}

function trash (e) {
  positionTrash = $('#trash_col').offset().top - 95;
  console.log('trash', positionTrash);
  $("html, body").animate({ scrollTop: positionTrash }, '500', 'swing');
}

function move (e) {
  positionMove = $('#move_in_out').offset().top - 95;
  console.log('move', positionMove);

  $("html, body").animate({ scrollTop: positionMove }, '500', 'swing');
}

function contact(e) {
  let positionContact = $('#contact').offset().top - 95;
  console.log('contact', positionContact);
  $("html, body").animate({ scrollTop: positionContact }, '500', 'swing');
}