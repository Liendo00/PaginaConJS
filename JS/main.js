$(document).ready(function () {
    //Slider

    if (window.location.href.indexOf("index") > -1) {

    
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1360,
            responsive: true,
            pager: true


        });
    }

    //Post

    if (window.location.href.indexOf("index") > -1) {
        var posts = [
            {
                title:'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY") ,
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit metus, suscipit in nisi non, luctus vestibulum sem. Fusce convallis arcu eget libero porta pharetra. Nam ornare rutrum placerat. Aliquam mollis, mauris vitae dapibus luctus, risus lectus ultrices nisi, non euismod massa enim condimentum massa. Duis nec tincidunt magna, ut eleifend velit. Duis sem odio, pretium nec condimentum ac, pulvinar sit amet urna. Cras sit amet lobortis dui. Vestibulum ac molestie nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla convallis, felis nec porttitor malesuada, est nisl porttitor justo, vel ultrices massa turpis et nulla. Maecenas maximus mi eget orci bibendum suscipit. In vestibulum, turpis condimentum ullamcorper pretium, lectus enim fermentum ante, quis vestibulum dui tortor porttitor urna.'
            },
            {
                title:'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY") ,
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit metus, suscipit in nisi non, luctus vestibulum sem. Fusce convallis arcu eget libero porta pharetra. Nam ornare rutrum placerat. Aliquam mollis, mauris vitae dapibus luctus, risus lectus ultrices nisi, non euismod massa enim condimentum massa. Duis nec tincidunt magna, ut eleifend velit. Duis sem odio, pretium nec condimentum ac, pulvinar sit amet urna. Cras sit amet lobortis dui. Vestibulum ac molestie nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla convallis, felis nec porttitor malesuada, est nisl porttitor justo, vel ultrices massa turpis et nulla. Maecenas maximus mi eget orci bibendum suscipit. In vestibulum, turpis condimentum ullamcorper pretium, lectus enim fermentum ante, quis vestibulum dui tortor porttitor urna.'
            },
            {
                title:'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY") ,
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit metus, suscipit in nisi non, luctus vestibulum sem. Fusce convallis arcu eget libero porta pharetra. Nam ornare rutrum placerat. Aliquam mollis, mauris vitae dapibus luctus, risus lectus ultrices nisi, non euismod massa enim condimentum massa. Duis nec tincidunt magna, ut eleifend velit. Duis sem odio, pretium nec condimentum ac, pulvinar sit amet urna. Cras sit amet lobortis dui. Vestibulum ac molestie nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla convallis, felis nec porttitor malesuada, est nisl porttitor justo, vel ultrices massa turpis et nulla. Maecenas maximus mi eget orci bibendum suscipit. In vestibulum, turpis condimentum ullamcorper pretium, lectus enim fermentum ante, quis vestibulum dui tortor porttitor urna.'
            },
            {
                title:'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY") ,
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit metus, suscipit in nisi non, luctus vestibulum sem. Fusce convallis arcu eget libero porta pharetra. Nam ornare rutrum placerat. Aliquam mollis, mauris vitae dapibus luctus, risus lectus ultrices nisi, non euismod massa enim condimentum massa. Duis nec tincidunt magna, ut eleifend velit. Duis sem odio, pretium nec condimentum ac, pulvinar sit amet urna. Cras sit amet lobortis dui. Vestibulum ac molestie nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla convallis, felis nec porttitor malesuada, est nisl porttitor justo, vel ultrices massa turpis et nulla. Maecenas maximus mi eget orci bibendum suscipit. In vestibulum, turpis condimentum ullamcorper pretium, lectus enim fermentum ante, quis vestibulum dui tortor porttitor urna.'
            },
            {
                title:'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del "+ moment().format("YYYY") ,
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit metus, suscipit in nisi non, luctus vestibulum sem. Fusce convallis arcu eget libero porta pharetra. Nam ornare rutrum placerat. Aliquam mollis, mauris vitae dapibus luctus, risus lectus ultrices nisi, non euismod massa enim condimentum massa. Duis nec tincidunt magna, ut eleifend velit. Duis sem odio, pretium nec condimentum ac, pulvinar sit amet urna. Cras sit amet lobortis dui. Vestibulum ac molestie nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla convallis, felis nec porttitor malesuada, est nisl porttitor justo, vel ultrices massa turpis et nulla. Maecenas maximus mi eget orci bibendum suscipit. In vestibulum, turpis condimentum ullamcorper pretium, lectus enim fermentum ante, quis vestibulum dui tortor porttitor urna.'
            },

            

        ];

        posts.forEach ((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        
                        ${item.content}

                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>

            `;
            $("#posts").append(post);
        })
    }

    // Selector de temas 

    var theme =$("#theme");

    $("#to-green").click(function(){
        theme.attr("href","CSS/green.css")
        localStorage.setItem("tema","CSS/green.css")
    });

    $("#to-red").click(function(){
        theme.attr("href","CSS/red.css")
        localStorage.setItem("tema","CSS/red.css")

    });

    $("#to-blue").click(function(){
       theme.attr("href","CSS/blue.css")
       localStorage.setItem("tema","CSS/blue.css")

    });

    // Comprobar si existe un tema guardado en el Storage

    if(localStorage.getItem("tema")) {
        var storage = localStorage.getItem("tema");
        theme.attr('href',storage);

    }else {
        theme.attr('href', 'CSS/green.css');
    }
    
    // Scroll hasta arriba 

    $(".subir").click(function(e){
        e.preventDefault();

        $('html,body').animate ({
            scrollTop: 0
        }, 500)

        return false;
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name);

    });


    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name !="undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong> Bienvenido "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
       
        $("#login").hide();

 
        $("#logout").click(function () {

            localStorage.removeItem("form_name"); // Sirve para borrar un item en concreto del local storage
            location.reload(); //Funciona para recargar la pagina
            
        });
    }

    
    if (window.location.href.indexOf("about") > -1) { // Comprueba si existe 'about' en la url actual
        $("#acordeon").accordion();
    }


    if (window.location.href.indexOf("reloj") > -1) {
        
        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
            
        }, 1000);
     
    }    


    // Validacion del formulario

    if (window.location.href.indexOf("contacto") > -1) {

        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });

        $.validate({
            lang:'en'
        });
    }

});
