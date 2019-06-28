const chromedriver = require('chromedriver');
const pathdescarga = __dirname; 

module.exports = {
    page_objects_path: "page",
    custom_assertions_path: "custom-assertions",

    test_settings: {
        default: {
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 4444,
                cli_args: ['--port=4444']
            },
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    prefs: {
                        download: {
                            prompt_for_download: false,
                            default_directory: pathdescarga //"./download_folder"
                        }
                    },
                    args: ["safebrowsing-disable-download-protection"]
                }
            }
        }
    }
};

module.exports.pathdescarga = pathdescarga;