function showLoaderFiles()
{
    
    var cTitle = document.title;
    document.title = "Capital Light Enterprise";

    var htm = '<div class="homepageDIV">';


    allElementsController = '<div class="getAllElements">';//+
            //'<div>'+ 'ggggggg '+'</div>';
    allElementsController+='</div>';
        
         var tpnavContainer = '<div class="topnavContainer">';
            logoSection = '<div class="logo">'+
                '<p>'+ 'MSC ENT'+'</p>';            
            logoSection+='</div>';
            menuList = '<div class="topMenus">';
            var tpList = ['Home','Products','Projects','Feedback','Customers','About'];
            var size = tpList.length;
            for(var i = 0; i < size; i++)
            {
                var apL = tpList[i];
                menuList+= '<li onclick="'+ apL.toLowerCase() + '()" id="'+ apL.toLowerCase() +'">'
                + apL + '</li>';
            }
        
        menuList+= '</div>';
        searchBar = '<div class="searchItemsBar">'+
            '<input type="text" class="topSearch">';
        searchBar+='</div>';

        socialSection = '<div class="socialFeeds">'+
            '<p>'+ 'o' +'</p>';
            '<p>'+ 'o' +'</p>';
            '<p>'+ 'o' +'</p>';
        socialSection+='</div>';

        // allElementsController = '<div class="getAllElements">'+
        //     '<div>'+'</div>';
        // allElementsController+='</div>';

        htm+= tpnavContainer +  logoSection + menuList + socialSection + searchBar + '</div>';
        // htm+= allElementsController;
    document.body.innerHTML = htm + allElementsController;
    home();

}


function showSlidingImages() 
    {


    }
 function home()
 {
  let slideIndex = 0;
    showSlides();

function showSlides() 
{
    let i;
    let imageconent = document.getElementsByClassName("myProducts");
    for (i = 0; i < imageconent.length; i++)
    {
        imageconent[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > imageconent.length)
    {
        slideIndex = 1
    }
    imageconent[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
   var productsInterPhase = '<fieldset class="products">'+ 
   '<legend>'  + 'Welcome to the home page' +'</legend>';
    var productsImageController = '<div>';

    var productList = ["mango","lemon"];
    var size = productList.length;
    for(var i = 0; i < size; i++)
    {
        var pList = productList[i];
        productsImageController+= '<div>' + pList + '</div>';
    }

    productsImageController+= '</fieldset>';

    productsInterPhase+= productsImageController;


    document.querySelector('.getAllElements').innerHTML = productsInterPhase;

 }


 