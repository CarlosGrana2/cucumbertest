const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const googleSearch = client.page.home();


Given(/^I open Google's search page$/, () => {
    return googleSearch.navigate().waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
    return client.assert.title(title);
});

Then(/^the Google search form exists$/, () => {
    return googleSearch
        .assert
        .visible('@menuimg')
        .waitForElementVisible('@menuimg', 1000);
});

Then(/^click on the menu image$/, () => {
    return googleSearch
        .waitForElementVisible('@menuimg', 1000)
        .click('@menuimg');
});

Then(/^validate that the search bar exists$/, () => {
    return googleSearch
        .waitForElementVisible('@searchBar')
        .assert
        .visible('@searchBar')
        .waitForElementVisible('@searchBar');
});

Then(/^perform search$/, () => {

    return googleSearch.setValue('@searchBar', 'pruebas')
        .waitForElementVisible('@submitButton')
        .submit('@submitButton');

});

/* Escenario descargando imagen*/

Given(/^select image to download$/, () => {
    return googleSearch
        .waitForElementVisible('@imagen')
        .assert
        .visible('@imagen')
        .waitForElementVisible('@imagen')
        .selectImg('@imagen');

});


Then(/^downloading the image$/, () => {

    return googleSearch
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

                descargarimg('Koombeaimg', limpiarsrc(srcimg), 'jpeg');

            }, [result.value]);

        })

    .pause(10000);


});