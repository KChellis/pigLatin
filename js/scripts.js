var vowels = ["a", "e", "i", "o",
"u"];
function vowelWord(string) {
  for (var i = 0; i < vowels.length; i++) {
    if (string[0] === vowels[i]) {
      return true
    }else {
      return false
    }
  }
}
function consonantWord(string){
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if(string[i] === vowels[j]) {
        var slice = string.slice(i);
        var consonants= string.slice(0,i);
        var word = slice + consonants + "ay";
        j= vowels.length;
        i= string.length;
        return word;
      }
    }
  }
}
function pigLatin(text) {
  if (vowelWord(text)) {
    text += "way";
  }else {
    text = consonantWord(text);
  }

  return text;
}





$(document).ready(function(){

  $(".form1").submit(function(event){
    event.preventDefault();
    var userText = $("#text").val();
    var output = pigLatin(userText);
    $("#output").text(output);
  });



});
