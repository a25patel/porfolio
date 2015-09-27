// 1. toggle function using a simple jquery
function design(){
  $('.designInfo').toggle('slow');
}
$(document).ready(function click(){
  $('.designInfo').hide();
  $('.design').click(design)
});

function link(){
  $('.linksInfo').toggle('slow');
}
$(document).ready(function click(){
  $('.linksInfo').hide();
  $('.links').click(link)
});

function resume(){
  $('.resumeInfo').toggle('slow');
}
$(document).ready(function click(){
  $('.resumeInfo').hide();
  $('.resume').click(resume)
});

function develop(){
  $('.developmentInfo').toggle('slow');
}
$(document).ready(function click(){
  $('.developmentInfo').hide();
  $('.development').click(develop)
});

function about(){
  $('.aboutInfo').toggle('slow');
}
$(document).ready(function click(){
  $('.aboutInfo').hide();
  $('.about').click(about)
});

function contact(){
  $('.contactInfo').toggle('slow');
}
$(document).ready(function click(){
  $('.contactInfo').hide();
  $('.contact').click(contact)
});
