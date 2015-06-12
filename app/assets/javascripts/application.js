// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Add answer
$(document).on('click', '#add_answer_link', function(){
  var attributes = $(this).data('attributes');
  var association = $(this).data('association');
  var field = $(this).data('field');
  var new_id = new Date().getTime();
  var final_id = '"' + association + "_" + attributes + "_" + new_id + "_" + field + '"'
  var final_name = association + "[" + attributes + "][" + new_id + "][" + field + "]"
  content = $(".fields:first").clone();
  content.find('input,textarea').val('');
  content.find("textarea").attr("id", final_id)
  content.find("textarea").attr("name", final_name)
  content.find("label").attr("for", final_id)
  $("#answer_area").append(content);
});

//remove added answer
$(document).on('click', '.remove-link', function(){
  $(this).closest('li').remove();
});