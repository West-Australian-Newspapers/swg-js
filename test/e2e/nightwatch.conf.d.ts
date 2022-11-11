export const src_folders: string[];
export const globals_path: string;
export const page_objects_path: string;
export const test_settings: {
    default: {
        launch_url: string;
        custom_commands_path: string;
        skip_testcases_on_fail: boolean;
    };
    chrome: {
        globals: {
            webdriverProcess: string;
        };
        desiredCapabilities: {
            browserName: string;
            chromeOptions: {
                w3c: boolean;
                args: string[];
            };
        };
        webdriver: {
            start_process: boolean;
            server_path: string;
            port: number;
        };
    };
    firefox: {
        globals: {
            webdriverProcess: string;
        };
        desiredCapabilities: {
            browserName: string;
            acceptInsecureCerts: boolean;
            alwaysMatch: {
                'moz:firefoxOptions': {
                    args: string[];
                };
            };
        };
        webdriver: {
            start_process: boolean;
            server_path: string;
            cli_args: string[];
            port: number;
        };
    };
    safari: {
        globals: {
            webdriverProcess: string;
        };
        desiredCapabilities: {
            browserName: string;
            javascriptEnabled: boolean;
            acceptSslCerts: boolean;
        };
        webdriver: {
            port: number;
            start_process: boolean;
            server_path: string;
        };
    };
    selenium: {
        selenium: {
            start_process: boolean;
            port: number;
            server_path: string;
            cli_args: {
                'webdriver.chrome.driver': string;
                'webdriver.gecko.driver': string;
            };
        };
        webdriver: {
            start_process: boolean;
        };
    };
    'selenium.chrome': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            chromeOptions: {
                w3c: boolean;
                args: string[];
            };
        };
    };
    'selenium.firefox': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            acceptInsecureCerts: boolean;
            alwaysMatch: {
                'moz:firefoxOptions': {
                    args: string[];
                };
            };
        };
    };
    'selenium.safari': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            javascriptEnabled: boolean;
            acceptSslCerts: boolean;
        };
    };
    browserstack: {
        globals: {
            browserstack: boolean;
        };
        selenium: {
            host: string;
            port: number;
        };
        desiredCapabilities: {
            'browserstack.local': boolean;
            'bstack:options': {
                local: string;
                userName: string;
                accessKey: string;
            };
        };
        webdriver: {
            keep_alive: boolean;
            timeout_options: {
                timeout: number;
                retry_attempts: number;
            };
        };
    };
    'browserstack.android': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            deviceName: string;
            osVersion: string;
            realMobile: boolean;
        };
    };
    'browserstack.chrome': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            chromeOptions: {
                w3c: boolean;
                args: string[];
            };
        };
    };
    'browserstack.firefox': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            acceptInsecureCerts: boolean;
            alwaysMatch: {
                'moz:firefoxOptions': {
                    args: string[];
                };
            };
        };
    };
    'browserstack.ios': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            deviceName: string;
            osVersion: string;
            realMobile: boolean;
        };
    };
    'browserstack.safari': {
        extends: string;
        desiredCapabilities: {
            browserName: string;
            javascriptEnabled: boolean;
            acceptSslCerts: boolean;
        };
    };
};
//# sourceMappingURL=nightwatch.conf.d.ts.map