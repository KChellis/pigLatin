var vowels = ["a", "e", "i", "o",
"u"];
function vowelWord(string) {
  for (var i = 0; i < vowels.length; i++) {
    if (string[0] === vowels[i]) {
      return true;
    }else{

    }
  }
}
function consonantWord(string){
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if(string[i] === vowels[j]) {
        if (string[i]=== "u" && string[i-1] === "q") {
          var slice = string.slice(i+1);
          var consonants= string.slice(0,i+1);
          var word = slice + consonants + "ay";
          j= vowels.length;
          i= string.length;
          return word;
        }else {
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
}


function pigLatin(text) {
  text= text.replace(/[.,\/#!$%\^&\*;@:{}=+|\-_"`~()]/g,"");
  text= text.toLowerCase();
  var textArray = text.split(" ");
  var latinArray = []
  textArray.forEach(function(word) {
    if (vowelWord(word)) {
      word += "way";
      latinArray.push(word);
    }else {
      word = consonantWord(word);
      latinArray.push(word);
    }
  });
  var finalText = latinArray.join(" ");
  return finalText;
}





$(document).ready(function(){

  $(".form1").submit(function(event){
    event.preventDefault();
    var userText = $("#text").val();
    var output = pigLatin(userText);
    $("#output").text(output);
  });



});
