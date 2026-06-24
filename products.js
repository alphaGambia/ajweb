function products()
 {
   var welcomeNotes = '<div>' + 
    '<marquee>'+
        'Welcome to Captital Light , where all needed light is available for a brighter house'+
    '</marquee>';
   welcomeNotes += '</div>';
   

   var productsInterPhase = '<div class="products">'+ 
   'Home' ;
    var productsImageController = '<div class="productDisplayController">';

    var productList = ["mango","lemon","apple","banana","computer","keyboard"];
    var size = productList.length;
    for(var i = 0; i < size; i++)
    {
        var pList = productList[i];
        productsImageController+= '<li class="productsList">' + pList + '</li>';
    }

    productsImageController+= '</div>';

    productsInterPhase+= productsImageController + welcomeNotes;


    document.querySelector('.getAllElements').innerHTML = productsInterPhase;

 }

