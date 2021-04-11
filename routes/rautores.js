module.exports = function(app,swig) {
    app.get("/autores", function(req, res) {
        var autores=[{
            "nombre" : "Miguel de Unamuno",
            "grupo" : "Generación 98"
        },{
            "nombre" : "Federico García Lorca",
            "grupo" : "Generación 27"
        },{
            "nombre" : "Antonio Machado",
            "grupo" : "Generación 98"
        }];
        let respuesta = swig.renderFile('views/autores.html',{
            vendedor : 'Autores disponibles',
            autores : autores
        });
        res.send(respuesta);

    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    })

    app.post("/autores/agregar",function (req,res) {
        let respuesta="Autor agregado:";

        if (req.body.nombre !="undefined"){
            respuesta+= "nombre: "+req.body.nombre+ "<br>";
        }
        else{
            respuesta+= "nombre: No enviado a la petición "+ "<br>";
        }
        if (req.body.grupo != "undefined"){
            respuesta+= "grupo: "+req.body.grupo+"<br>";
        }
        else{
            respuesta+= "grupo: No enviado a la petición "+ "<br>";
        }
        if (req.body.rol !="undefined"){
            respuesta+= "rol: "+req.body.rol+ "<br>";
        }
        else{
            respuesta+= "rol: No enviado a la petición "+ "<br>";
        }
        res.send(respuesta);

    })

    app.get('/autores*', function (req, res) {
        res.redirect('/autores');
    })

};