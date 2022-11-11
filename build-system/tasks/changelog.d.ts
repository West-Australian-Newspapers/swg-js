export type ReleaseMetadata = {
    id: string;
    publishedAt: string;
    name: string;
    author: string;
    tag: string;
    logs: Array<{
        sha: string;
        title: string;
    }>;
    prs: Array<any>;
    changelog: string;
    version: string;
};
/**
 * @typedef {{
 *   id: string,
 *   publishedAt: string,
 *   name: string,
 *   author: string,
 *   tag: string,
 *   logs: !Array<{sha: string, title: string}>,
 *   prs: !Array<!Object>,
 *   changelog: string,
 *   version: string,
 * }} ReleaseMetadata
 */
/**
 * @return {!Promise<!ReleaseMetadata>}
 */
export function changelog(): Promise<ReleaseMetadata>;
export namespace changelog {
    const description: string;
}
//# sourceMappingURL=changelog.d.ts.map