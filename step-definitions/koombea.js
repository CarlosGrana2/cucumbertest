const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const koombea = client.page.test();



Given(/^Iniciar navegador$/, () => {
    return koombea.navigate().waitForElementVisible('body', 1000);
});

Then(/^Validamos si el titulo es "([^"]*)"$/, title => {
    return client.assert.title(title);
});

Then(/^Existe el elemento de búsqueda por imagenes$/, () => {
    return koombea
        .assert
        .visible('@menuimg')
        .waitForElementVisible('@menuimg', 1000);
});

Then(/^Presionar click en imagenes$/, () => {
    return koombea
        .waitForElementVisible('@menuimg', 1000)
        .click('@menuimg');
});

Then(/^Validar si existe la barra de búsqueda$/, () => {
    return koombea
        .waitForElementVisible('@searchBar')
        .assert
        .visible('@searchBar')
        .waitForElementVisible('@searchBar');
});

Then(/^Realizar la búsqueda$/, () => {

    return koombea.setValue('@searchBar', 'koombea')
        .waitForElementVisible('@submitButton')
        .submit('@submitButton');

});

/* Escenario descargando imagen*/

Given(/^Seleccionar imagen a descargar$/, () => {
    return koombea
        .waitForElementVisible('@imagen')
        .assert
        .visible('@imagen')
        .waitForElementVisible('@imagen')
        .selectImg('@imagen');

});


Then(/^descargar imagen$/, () => {

    return koombea
        .waitForElementVisible('@imagen')
        .getAttribute('@imagen', "src", function(result) {

            client.execute(function downloadURI(srcimg) {

                const limpiarsrc = url => url.replace(/^data:image\/\w+;base64,/, '');

                const descargarimg = (nombre, archivo, tipo) => {
                    var link = document.createElement('a');
                    link.style = 'position: fixed; left -10000px;';
                    link.href = `data:application/octet-stream;base64,${encodeURIComponent(archivo)}`;
                    link.download = /\.\w+/.test(nombre) ? nombre : `${nombre}.${tipo}`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    

                }

                descargarimg('Koombea', limpiarsrc(srcimg), 'jpeg');

            }, [result.value]);

        })

    .pause(10000);


});

Then(/^validar descarga de imagen en equipo$/, () => {

    return koombea.assert
     .descarga('Koombea.jpeg');

    
});