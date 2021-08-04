$('option').each(function() {
    var optionText = this.text;
    var newOption = optionText.substring(0, 36);
    $(this).text(newOption + '...');
  });