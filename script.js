var dis = "";
var result;
$('document').ready(function() {
   $('.btn').on('click', function() {
      var id = $(this).attr('id');
      var cl = $('#' + id).attr('class');
      if (cl.search('digi') >= 0 || cl.search('oprtn') >= 0)
         display(id);
      else if (id == "result") {
         $('#display').text(eval(dis));
         dis = eval(dis);
      } else if (id == "c") {
         dis = "";
         $('#display').text(dis);
      }
   });
   $('body').on('keyup', function(e) {
      var allowStr = "01234567890+-*/."
      var id = e.key;
      if (allowStr.indexOf(id) >= 0)
         display(id);
      else if (e.key == "Enter") {
         $('#display').text(eval(dis));
         dis = eval(dis);
      } else if (id == 'c' || id == 'C' || e.key == "Escape") {
         dis = "";
         $('#display').text(dis);
      }
   });
});

function display(id) {
   switch (id) {
      case 'one':
      case '1':
         dis += "1";
         break;
      case 'two':
      case '2':
         dis += "2";
         break;
      case 'three':
      case '3':
         dis += "3";
         break;
      case 'four':
      case '4':
         dis += "4";
         break;
      case 'five':
      case '5':
         dis += "5";
         break;
      case 'six':
      case '6':
         dis += "6";
         break;
      case 'seven':
      case '7':
         dis += "7";
         break;
      case 'eight':
      case '8':
         dis += "8";
         break;
      case 'nine':
      case '9':
         dis += "9";
         break;
      case 'zero':
      case '0':
         dis += "0";
         break;
      case 'dot':
      case '.':
         dis += ".";
         break;
      case 'add':
      case '+':
         dis += "+";
         break;
      case 'sub':
      case '-':
         dis += "-";
         break;
      case 'mul':
      case '*':
         dis += "*";
         break;
      case 'div':
      case '/':
         dis += "/";
         break;
   }
   $('#display').text(dis);
}