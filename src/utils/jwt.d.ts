/**
 * Provides helper methods to decode and verify JWT tokens.
 */
export class JwtHelper {
    /**
     * Decodes JWT token and returns its payload.
     * @param {string} encodedToken
     * @return {?JsonObject|undefined}
     */
    decode(encodedToken: string): (JsonObject | undefined) | null;
    /**
     * @param {string} encodedToken
     * @return {!JwtTokenInternalDef}
     * @private
     */
    private decodeInternal_;
}
//# sourceMappingURL=jwt.d.ts.map