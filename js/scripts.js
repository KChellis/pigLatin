function vowelWord(string){
  if (/[aeiou]/.test(string[0])){
    return true;
  }else {

  }
}

function consonantWord(string){
  for (var i = 1; i < string.length; i++) {
    if (/[aeiouy]/.test(string[i])) {
      if (string[i]=== "u" && string[i-1] === "q") {
        var slice = string.slice(i+1);
        var consonants= string.slice(0,i+1);
        var word = slice + consonants + "ay";
        i= string.length;
        return word;
      }else {
        var slice = string.slice(i);
        var consonants= string.slice(0,i);
        var word = slice + consonants + "ay";
        i= string.length;
        return word;
      }
    }
  }
}

function pigLatin(text) {
  text= text.replace(/[.,\/#!$%\^&\*;@:{}=+|\-_"`~()]/g,"");
  text= text.toLowerCase();
  var textArray = text.split(" ");
  console.log(textArray);
  var latinArray = []
  textArray.forEach(function(word) {
    if (vowelWord(word)) {
      word += "way";
      latinArray.push(word);
      console.log(latinArray);
    }else if (consonantWord(word)) {
      word = consonantWord(word);
      latinArray.push(word);
    }else {
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
