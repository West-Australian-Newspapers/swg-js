/**
 * Starts a simple http server at the repository root
 */
export function serve(done: any): void;
export namespace serve {
    const description: string;
    namespace flags {
        const host: string;
        const port: string;
        const https: string;
        const quiet: string;
        const publicationId: string;
        const ampLocal: string;
    }
}
export function startServer({ jsTarget }?: {
    jsTarget: any;
}): any;
/**
 * Stops the currently running server
 */
export function stopServer(): void;
//# sourceMappingURL=serve.d.ts.map