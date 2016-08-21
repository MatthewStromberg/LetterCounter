 var myFunc = function () {
     var dictionary = {};
     var keys = [];
     var outStr = "";
     var string = "";
     $("#caseSensitive").is(":checked") ? string = $("#search").val() : string = $("#search").val().toLowerCase();
     for (index in string) {
         dictionary.hasOwnProperty(string[index]) ? dictionary[string[index]] += 1 : dictionary[string[index]] = 1;
     }
     delete dictionary[" "];
     keys = Object.keys(dictionary).sort();
     for (var x in keys) {
         var key = keys[x];
         outStr += '\n' + "<div> " + key + " --> " + dictionary[key] + "</div>";
         console.log("Key is : " + key);
     }


     $("#output").html(outStr);
 };

 $('input').on('keydown', function (event) {
     var x = event.which;
     if (x === 13) {
         event.preventDefault();
     }
 });
 $("#search").keyup(function () {
     myFunc();
 });
 $("#caseSensitive").change(function () {
     myFunc();
 });