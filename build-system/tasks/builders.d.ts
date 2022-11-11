/**
 * Main development build.
 * @return {!Promise}
 */
export function build(): Promise<any>;
export namespace build {
    const description: string;
}
/**
 * Type check path.
 * @return {!Promise}
 */
export function checkTypes(): Promise<any>;
export namespace checkTypes {
    const description_1: string;
    export { description_1 as description };
}
/**
 * Clean up the build artifacts.
 * @return {!Promise}
 */
export function clean(): Promise<any>;
export namespace clean {
    const description_2: string;
    export { description_2 as description };
}
/**
 * Dist build for prod.
 * @return {!Promise}
 */
export function dist(): Promise<any>;
export namespace dist {
    const description_3: string;
    export { description_3 as description };
    export namespace flags {
        const pseudoNames: string;
    }
}
/**
 * Enables watching for file changes and re-compiles.
 * @return {!Promise}
 */
export function watch(): Promise<any>;
export namespace watch {
    const description_4: string;
    export { description_4 as description };
}
//# sourceMappingURL=builders.d.ts.map