
//jquery para funcionar assim que a pagina for carregada
$(document).ready(function() {

    //Fuções para códigos repetitivos
    function acenderInicio(){
            $('.inicio').css("background-color", "white");
            $('.inicio').css("color", "black");

        $('.sobre').css("background-color", "transparent");
        $('.sobre').css("color", "white");
        

        $('.projetos').css("background-color", "transparent");
        $('.projetos').css("color", "white");

        $('.contato').css("background-color", "transparent");
        $('.contato').css("color", "white");
    }

    function acenderSobre(){
        $('.inicio').css("background-color", "transparent");
        $('.inicio').css("color", "white");

            $('.sobre').css("background-color", "white");
            $('.sobre').css("color", "black");

        $('.projetos').css("background-color", "transparent");
        $('.projetos').css("color", "white");

        $('.contato').css("background-color", "transparent");
        $('.contato').css("color", "white");
    }

    function acenderProjetos(){
        $('.inicio').css("background-color", "transparent");
        $('.inicio').css("color", "white");

        $('.sobre').css("background-color", "transparent");
        $('.sobre').css("color", "white");

            $('.projetos').css("background-color", "white");
            $('.projetos').css("color", "black");

        $('.contato').css("background-color", "transparent");
        $('.contato').css("color", "white");
    }

    function acenderContato(){
        $('.inicio').css("background-color", "transparent");
        $('.inicio').css("color", "white");

        $('.sobre').css("background-color", "transparent");
        $('.sobre').css("color", "white");

        $('.projetos').css("background-color", "transparent");
        $('.projetos').css("color", "white");

            $('.contato').css("background-color", "white");
            $('.contato').css("color", "black");
    }






    //Marcado ao abrir a página
    // acenderInicio();





    // //------------------------MENU-------------------------------

    // //botao Inicio --------------------------------------------------
    
    // $('.inicio').click(function(){
    //     acenderInicio();
    // });
    // $('.inicio').hover(function(){
    //     $('.inicio').css("background-color", "white");
    //     $('.inicio').css("color", "black");
    // }, function(){
    //     $('.inicio').css("background-color", "transparent");
    //     $('.inicio').css("color", "white");
    // });

    // //---------------------------------------------------------------




    // //botao sobre
    // $('.sobre').click(function(){
    //     acenderSobre();
    // });
    // $('.sobre').hover(function(){
    //     $('.sobre').css("background-color", "white");
    //     $('.sobre').css("color", "black");
    // }, function(){
    //     $('.sobre').css("background-color", "transparent");
    //     $('.sobre').css("color", "white");
    // });






    // //botao projetos
    // $('.projetos').click(function(){
    //     acenderProjetos();
    // });
    // $('.projetos').hover(function(){
    //     $('.projetos').css("background-color", "white");
    //     $('.projetos').css("color", "black");
    // }, function(){
    //     $('.projetos').css("background-color", "transparent");
    //     $('.projetos').css("color", "white");
    // });





    // //botao contato
    // $('.contato').click(function(){
    //     acenderContato();
    // });
    // $('.contato').hover(function(){
    //     $('.contato').css("background-color", "white");
    //     $('.contato').css("color", "black");
    // }, function(){
    //     $('.contato').css("background-color", "transparent");
    //     $('.contato').css("color", "white");
    // });



    // //Acesse meu github
    // $('.github_menu').hover(function(){
    //     $('.github_menu').css("background-color", "white");
    //     $('.pgithub').css("color", "black");
    // }, function(){
    //     $('.github_menu').css("background-color", "transparent");
    //     $('.pgithub').css("color", "white");
    // });


    //Parte escrita com DOM
    //-----------------------------FUNDO---------------------------------

    let stars = document.getElementById('stars');
    let meteors = document.getElementById('meteors');
    let planets = document.getElementById('planets');

    let bttn = $('.bttn');
    let welcome = document.getElementById('welcome');
    let seta = $('.seta');

    $(window).on('scroll', function(){
        let value = window.scrollY;

        if(value <= 1000){
            stars.style.left = value  * 0.25 + 'px';
            planets.style.height = 1153.190 + value + 'px';
            meteors.style.top = value * 1.5 + 'px';
            meteors.style.left = value * -0.2 + 'px';
            bttn.css("margin-left", value * 2 + 'px');
            welcome.style.marginRight = value * 2 + 'px';
    
            console.log(value);
    
            if(value >= 500){
                seta.css("opacity", 1);
            }else{
                seta.css("opacity", 0);
            }
        }
    });

    

    
    
});



