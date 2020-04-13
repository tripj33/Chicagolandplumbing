$( document ).ready( function () {
    

    
    

    // ***Toggle Menu***
    
    // Menu button is clicked, function starts
    $("#btn-m-menu").click(function(){
    
    // Sets variable for menu state
    let menuState = $('.bottom').attr('data-menu');
    
    // Checks to see if menu state is closed
    if(menuState == 'menu-closed'){
     
        // Opens Menu 
        $(".bottom").animate({marginLeft: "50vw"}, 500);
    
        // Changes menu state attribute
        $('.bottom').attr('data-menu', 'menu-open')
    
    }else{
    
        // Closes Menu
        $(".bottom").animate({marginLeft: "100vw"}, 500);
    
        // Changes menu state attribute
        $('.bottom').attr('data-menu', 'menu-closed')
    }
    
    });
    
    
    
    
    // ***Toggle Submenu***
    
    // Submenu is clicked, function starts
    $('.has-submenu').click(function(){
    
    let submenuState = $('.submenu').attr('data-submenu');
    
    let numberOfListItems = $('.submenu-item').length;
    let heightOfItems = $('.submenu-item').outerHeight(true) * numberOfListItems;
    let submenuHeight = heightOfItems + 'px';
    
    
    console.log(submenuHeight);
    
    // console.log($('.submenu-item'.outerHeight));
    // console.log(heightOfItems);
    // console.log(submenuHeight);
    
    
    
    if(submenuState == "submenu-closed"){
        console.log("opening");
        // Opens Submenu
        $('.submenu').slideToggle(300);
    
        // Changes submenu state attribute
        $('.submenu').attr('data-submenu', 'submenu-open')
        console.log("opening complete");
    }else{
        console.log("closing");
         // Closes Submenu
         $('.submenu').slideToggle(300);
    
    
         // Changes submenu state attribute
         $('.submenu').attr('data-submenu', 'submenu-closed')
         console.log("closing complete");
    }
    
    })
    
    
        
    });