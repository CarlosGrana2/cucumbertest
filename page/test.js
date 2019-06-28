const searchCommands = {

    submit: function(elements, callback) {

        this.waitForElementVisible(elements, 1000)
            .click(elements)
            .api.pause(1000);

        return this; // Return page object for chaining
    },

    selectImg: function(elements, callback) {
        var x;
        var y;

        this.waitForElementVisible(elements);
        this.getLocationInView(elements, function(result) {
                x = result.value.x;
                y = result.value.y;
            })
            .moveToElement(elements, x, y)
            .api.pause(5000);

        return this;
    }


};

module.exports = {
    url: 'http://google.com',
    commands: [searchCommands],
    elements: {
        searchBar: { selector: 'input[type=text]' },
        submitButton: {
            selector: '//button[@type="submit"]',
            locateStrategy: 'xpath'
        },
        menuimg: {
            selector: '//a[contains(text(),"Imágenes")]',
            locateStrategy: 'xpath'
        },
        imagen: {
            selector: '//div[3]/a/img',
            locateStrategy: 'xpath'
        },
        img: {
            selector: '//div[2]/div/div[2]/div/a/img',
            locateStrategy: 'xpath'
        }


    }






};