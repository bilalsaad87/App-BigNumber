  function run(){
       var var1 = document.getElementById("var1");
       var var2 = document.getElementById("var2");
       var sel1 = document.getElementById("sel1");
       var var3 = "";

      if (sel1.value == "add") {

        var3 = BigNumber(var1.value).plus(var2.value);

      } else if (sel1.value == "minus") {

        var3 = BigNumber(var1.value).minus(var2.value);

      } else if (sel1.value == "multiply") {

        var3 = BigNumber(var1.value).multiply(var2.value);

      } else if (sel1.value == "divide") {

        var3 = BigNumber(var1.value).divide(var2.value);

      } else if (sel1.value == "mod") {

        var3 = BigNumber(var1.value).mod(var2.value);

      } else if (sel1.value == "power") {

         var3 = BigNumber(var1.value).power(var2.value);

      } else {

        var3 = "N/A";

      }
       
       document.getElementById("var3").value = var3.toString();
   }  

  function toClear(){
       document.getElementById("var1").value = "0";
       document.getElementById("var2").value = "0";
       document.getElementById("sel1").value = "add";
       document.getElementById("var3").value = "0";
   }  

  function copy(){
    var copyText = document.getElementById("var3");
    copyText.select();
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }