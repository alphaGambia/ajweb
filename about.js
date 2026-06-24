function about()
 {
   var welcomeNotes = '<div>' + 
    '<marquee>'+
        'Welcome to Captital Light , where all needed light is available for a brighter house'+
    '</marquee>';
   welcomeNotes += '</div>';
   

   var productsInterPhase = '<field class="products">'+ 
   '<legend>'  + 'Home' ;
    var productsImageController = '<div>';

    var productList = ["mango","lemon"];
    var size = productList.length;
    for(var i = 0; i < size; i++)
    {
        var pList = productList[i];
        productsImageController+= '<div>' + pList + '</div>';
    }

    productsImageController+= '<legend></field>';

    productsInterPhase+= productsImageController + welcomeNotes;


    document.querySelector('.getAllElements').innerHTML = productsInterPhase;

 }

