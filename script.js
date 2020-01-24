//https://api.whatsapp.com/send?phone=541526487670&text=&source=&data=

function myFunction(number) {
    //return p1 * p2;   // The function returns the product of p1 and p2
    
    //linkTemplate = "https://api.whatsapp.com/send?phone=541526487670&text=&source=&data=";

    numberParsed = number;
    
    //linkTemplate = "https://api.whatsapp.com/send?phone="+ numberParsed + "&text=" + text + "&source=&data=";
    
    linkTemplate = "https://api.whatsapp.com/send?phone="+ numberParsed + "&text=&source=&data=";
    
    document.getElementById("link2").setAttribute("href",linkTemplate);
  }