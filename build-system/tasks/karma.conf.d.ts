export declare const frameworks: string[];
export declare const preprocessors: {
    'src/**/*.js': string[];
    'test/**/*.js': string[];
};
export declare namespace browserify {
    const watch: boolean;
    const debug: boolean;
    const fast: boolean;
    const transform: ((() => any) | (string | {
        presets: string[];
    })[])[];
    const bundleDelay: number;
}
export declare const reporters: string[];
export declare namespace superDotsReporter {
    namespace color {
        const success: string;
        const failure: string;
        const ignore: string;
    }
    namespace icon {
        const success_1: string;
        export { success_1 as success };
        const failure_1: string;
        export { failure_1 as failure };
        const ignore_1: string;
        export { ignore_1 as ignore };
    }
}
export declare namespace mochaReporter {
    const output: string;
    namespace colors {
        const success_2: string;
        export { success_2 as success };
        export const error: string;
        export const info: string;
    }
    namespace symbols {
        const success_3: string;
        export { success_3 as success };
        const error_1: string;
        export { error_1 as error };
        const info_1: string;
        export { info_1 as info };
    }
}
export declare const port: number;
declare const colors_1: boolean;
export { colors_1 as colors };
export declare const proxies: {
    '/dist/': string;
    '/examples/': string;
    '/src/': string;
    '/test/': string;
};
export declare const logLevel: string;
export declare const autoWatch: boolean;
export declare const browsers: string[];
export declare const concurrency: number;
export declare namespace customLaunchers {
    namespace Chrome_no_extensions {
        const base: string;
        const flags: string[];
    }
    namespace Chrome_no_extensions_headless {
        const base_1: string;
        export { base_1 as base };
        const flags_1: string[];
        export { flags_1 as flags };
    }
}
export declare namespace client {
    namespace mocha {
        const reporter: string;
        const timeout: number;
    }
    const captureConsole: boolean;
}
export declare const singleRun: boolean;
export declare const browserDisconnectTimeout: number;
export declare const browserDisconnectTolerance: number;
export declare const browserNoActivityTimeout: number;
export declare const captureTimeout: number;
export declare const plugins: string[];
//# sourceMappingURL=karma.conf.d.ts.map