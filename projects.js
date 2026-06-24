function projects()
 {

   var productsInterPhase = '<div class="products">'+ 
   'Home';
    var productsImageController = '<div>';

    var productList = ["government","NGOs"];
    var size = productList.length;
    for(var i = 0; i < size; i++)
    {
        var pList = productList[i];
        productsImageController+= '<div>' + pList + '</div>';
    }

    productsImageController+= '</div>';

    productsInterPhase+= productsImageController;


    document.querySelector('.getAllElements').innerHTML = productsInterPhase;

 }
