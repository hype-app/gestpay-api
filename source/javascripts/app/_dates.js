(function() {
  var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  var date = new Date();
  var today = date.toLocaleDateString('it-IT', options);

  var yesterday = new Date(
    new Date().setDate(date.getDate() - 1)
  ).toLocaleDateString('it-IT', options);

  var minus2Day = new Date(
    new Date().setDate(date.getDate() - 2)
  ).toLocaleDateString('it-IT', options);
  var minus3Day = new Date(
    new Date().setDate(date.getDate() - 3)
  ).toLocaleDateString('it-IT', options);
  var minus4Day = new Date(
    new Date().setDate(date.getDate() - 4)
  ).toLocaleDateString('it-IT', options);
  var minus5Day = new Date(
    new Date().setDate(date.getDate() - 5)
  ).toLocaleDateString('it-IT', options);
  var minus6Day = new Date(
    new Date().setDate(date.getDate() - 6)
  ).toLocaleDateString('it-IT', options);

  $('body').children().each(function() {
    $(this).html($(this).html().replace(/TODAY_CONST/g, today));
    $(this).html($(this).html().replace(/YESTERDAY_CONST/g, yesterday));
    $(this).html($(this).html().replace(/MINUS_2_CONST/g, minus2Day));
    $(this).html($(this).html().replace(/MINUS_3_CONST/g, minus3Day));
    $(this).html($(this).html().replace(/MINUS_4_CONST/g, minus4Day));
    $(this).html($(this).html().replace(/MINUS_5_CONST/g, minus5Day));
    $(this).html($(this).html().replace(/MINUS_6_CONST/g, minus6Day));
  });
})();
