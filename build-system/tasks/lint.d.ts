/**
 * Run the eslinter on the src javascript and log the output
 * @return {!Stream} Readable stream
 */
export function lint(): Stream;
export namespace lint {
    const description: string;
    namespace flags {
        const w: string;
        const fix: string;
        const files: string;
        const local_changes: string;
        const quiet: string;
    }
}
//# sourceMappingURL=lint.d.ts.map