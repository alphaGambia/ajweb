function customers()
 {

   var productsInterPhase = '<field class="products">'+ 
   '<legend>'  + 'Home' ;
    var productsImageController = '<div>';

    var productList = ["masenaers","plumbers"];
    var size = productList.length;
    for(var i = 0; i < size; i++)
    {
        var pList = productList[i];
        productsImageController+= '<div>' + pList + '</div>';
    }

    productsImageController+= '<legend></field>';

    productsInterPhase+= productsImageController;


    document.querySelector('.getAllElements').innerHTML = productsInterPhase;

 }
