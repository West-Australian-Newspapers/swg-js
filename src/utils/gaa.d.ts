/**
 * Returns true if the query string contains fresh Google Article Access (GAA) params.
 * @param {string} queryString
 * @param {boolean} allowAllAccessTypes
 * @return {boolean}
 */
export function queryStringHasFreshGaaParams(queryString: string, allowAllAccessTypes?: boolean): boolean;
/** Stamp for post messages. */
export const POST_MESSAGE_STAMP: "swg-gaa-post-message-stamp";
/** Introduction command for post messages. */
export const POST_MESSAGE_COMMAND_INTRODUCTION: "introduction";
/** User command for post messages. */
export const POST_MESSAGE_COMMAND_USER: "user";
/** Error command for post messages. */
export const POST_MESSAGE_COMMAND_ERROR: "error";
/** GSI Button click command for post messages. */
export const POST_MESSAGE_COMMAND_GSI_BUTTON_CLICK: "gsi-button-click";
/** SIWG Button click command for post messages. */
export const POST_MESSAGE_COMMAND_SIWG_BUTTON_CLICK: "siwg-button-click";
/** 3P button click command for post messages. */
export const POST_MESSAGE_COMMAND_3P_BUTTON_CLICK: "3p-button-click";
/** ID for the Google Sign-In iframe element. */
export const GOOGLE_SIGN_IN_IFRAME_ID: "swg-google-sign-in-iframe";
/** ID for the Google Sign-In button element. */
export const GOOGLE_SIGN_IN_BUTTON_ID: "swg-google-sign-in-button";
/** ID for the third party Google Sign-In button element.  */
export const GOOGLE_3P_SIGN_IN_BUTTON_ID: "swg-google-3p-sign-in-button";
/** ID for the Google Sign-In button element. */
export const SIGN_IN_WITH_GOOGLE_BUTTON_ID: "swg-sign-in-with-google-button";
/** ID for the Regwall container element. */
export const REGISTRATION_BUTTON_CONTAINER_ID: "swg-registration-button-container";
/** ID for the Regwall container element. */
export const REGWALL_CONTAINER_ID: "swg-regwall-container";
/** ID for the Regwall dialog element. */
export const REGWALL_DIALOG_ID: "swg-regwall-dialog";
/** ID for the Regwall title element. */
export const REGWALL_TITLE_ID: "swg-regwall-title";
/**
 * User object that Publisher JS receives after users sign in.
 */
export type GaaUserDef = {
    idToken: string;
    name: string;
    givenName: string;
    familyName: string;
    imageUrl: string;
    email: string;
    authorizationData: {
        access_token: string;
        id_token: string;
        scope: string;
        expires_in: number;
        first_issued_at: number;
        expires_at: number;
    };
};
/**
 * User object that Publisher JS receives after users sign in.
 * @typedef {{
 *   idToken: string,
 *   name: string,
 *   givenName: string,
 *   familyName: string,
 *   imageUrl: string,
 *   email: string,
 *   authorizationData: {
 *     access_token: string,
 *     id_token: string,
 *     scope: string,
 *     expires_in: number,
 *     first_issued_at: number,
 *     expires_at: number,
 *   },
 * }} GaaUserDef
 */
export let GaaUserDef: any;
/**
 * Google Identity (V1) that Google Identity Services returns after someone signs in.
 * https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse
 */
export type GoogleIdentityV1 = {
    iss: string;
    nbf: number;
    aud: string;
    sub: string;
    hd: string;
    email: string;
    email_verified: boolean;
    azp: string;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    iat: number;
    exp: number;
    jti: string;
};
/**
 * Google Identity (V1) that Google Identity Services returns after someone signs in.
 * https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse
 * @typedef {{
 *   iss: string,
 *   nbf: number,
 *   aud: string,
 *   sub: string,
 *   hd: string,
 *   email: string,
 *   email_verified: boolean,
 *   azp: string,
 *   name: string,
 *   picture: string,
 *   given_name: string,
 *   family_name: string,
 *   iat: number,
 *   exp: number,
 *   jti: string,
 * }} GoogleIdentityV1
 */
export let GoogleIdentityV1: any;
/**
 * GoogleUser object that Google Sign-In returns after users sign in.
 * https://developers.google.com/identity/sign-in/web/reference#googleusergetbasicprofile
 */
export type GoogleUserDef = {
    getAuthResponse: (arg0: boolean) => {
        access_token: string;
        id_token: string;
        scope: string;
        expires_in: number;
        first_issued_at: number;
        expires_at: number;
    };
    getBasicProfile: () => {
        getName: () => string;
        getGivenName: () => string;
        getFamilyName: () => string;
        getImageUrl: () => string;
        getEmail: () => string;
    };
};
/**
 * GoogleUser object that Google Sign-In returns after users sign in.
 * https://developers.google.com/identity/sign-in/web/reference#googleusergetbasicprofile
 * @typedef {{
 *  getAuthResponse: function(boolean): {
 *     access_token: string,
 *     id_token: string,
 *     scope: string,
 *     expires_in: number,
 *     first_issued_at: number,
 *     expires_at: number,
 *   },
 *   getBasicProfile: function(): {
 *     getName: function(): string,
 *     getGivenName: function(): string,
 *     getFamilyName: function(): string,
 *     getImageUrl: function(): string,
 *     getEmail: function(): string,
 *   },
 * }} GoogleUserDef
 */
export let GoogleUserDef: any;
/**
 * InitParams object that GaaMetering.init accepts
 * https://developers.google.com/news/subscribe/extended-access/overview
 */
export type InitParams = {
    allowedReferrers: (Array<string> | null);
    googleApiClientId: string;
    authorizationUrl: string;
    handleLoginPromise: (Promise<any> | null);
    caslUrl: string;
    handleSwGEntitlement: () => unknown;
    publisherEntitlementPromise: (Promise<any> | null);
    registerUserPromise: (Promise<any> | null);
    showPaywall: () => unknown;
    showcaseEntitlement: string;
    unlockArticle: () => unknown;
    rawJwt: (boolean | null);
    userState: {
        paywallReason: string;
        grantReason: string;
        granted: boolean;
        id: string;
        registrationTimestamp: number;
        subscriptionTimestamp: number;
    };
};
/**
 * InitParams object that GaaMetering.init accepts
 * https://developers.google.com/news/subscribe/extended-access/overview
 * @typedef {{
 * allowedReferrers: (Array<string>|null),
 * googleApiClientId: string,
 * authorizationUrl: string,
 * handleLoginPromise: (Promise|null),
 * caslUrl: string,
 * handleSwGEntitlement: function(): ?,
 * publisherEntitlementPromise: (Promise|null),
 * registerUserPromise: (Promise|null),
 * showPaywall: function(): ?,
 * showcaseEntitlement: string,
 * unlockArticle: function(): ?,
 * rawJwt: (boolean|null),
 * userState: {
 *   paywallReason: string,
 *   grantReason: string,
 *   granted: boolean,
 *   id: string,
 *   registrationTimestamp: number,
 *   subscriptionTimestamp: number
 * }
 * }} InitParams
 */
export let InitParams: any;
/** Renders Google Article Access (GAA) Metering Regwall. */
export class GaaMeteringRegwall {
    /**
     * Returns a promise for a Google user object.
     * The user object will be a:
     * - GaaUserDef, if you use the GaaGoogleSignInButton
     * - GoogleIdentityV1, if you use the GaaSignInWithGoogleButton
     * - Custom object, if you use the GaaGoogle3pSignInButton
     *
     * This method opens a metering regwall dialog,
     * where users can sign in with Google.
     * @nocollapse
     * @param {{ iframeUrl: string, caslUrl: string }} params
     * @return {!Promise<!GaaUserDef|!GoogleIdentityV1|!Object>}
     */
    static show({ iframeUrl, caslUrl }: {
        iframeUrl: string;
        caslUrl: string;
    }): Promise<GaaUserDef | GoogleIdentityV1 | any>;
    /**
     * Returns a promise for a Google user object.
     * The user object will be a GoogleIdentityV1
     *
     * This method opens a metering regwall dialog,
     * where users can sign in with Google.
     * @nocollapse
     * @param {{ caslUrl: string, googleApiClientId: string, rawJwt: (boolean|null) }} params
     * @return {!Promise<!GoogleIdentityV1>}
     */
    static showWithNativeRegistrationButton({ caslUrl, googleApiClientId, rawJwt, }: {
        caslUrl: string;
        googleApiClientId: string;
        rawJwt: (boolean | null);
    }): Promise<GoogleIdentityV1>;
    /**
     * This method opens a metering regwall dialog,
     * where users can sign in with Google.
     *
     * @nocollapse
     * @param {{ caslUrl: string, authorizationUrl: string }} params
     * @return {boolean}
     */
    static showWithNative3PRegistrationButton({ caslUrl, authorizationUrl }: {
        caslUrl: string;
        authorizationUrl: string;
    }): boolean;
    /**
     * Removes the Regwall.
     * @nocollapse
     */
    static remove(): void;
    /**
     * Signs out of Google Sign-In.
     * This is useful for developers who are testing their
     * SwG integrations.
     * @nocollapse
     * @return {!Promise}
     */
    static signOut(): Promise<any>;
    /**
     * Renders the Regwall.
     * @private
     * @nocollapse
     * @param {{ iframeUrl: string, caslUrl: string, useNativeMode: (boolean|undefined)}} params
     */
    private static render_;
    /**
     * Gets publisher name from page config.
     * @private
     * @nocollapse
     * @return {string}
     */
    private static getPublisherNameFromPageConfig_;
    /**
     * Gets publisher name from JSON-LD page config.
     * @private
     * @nocollapse
     * @return {string|undefined}
     */
    private static getPublisherNameFromJsonLdPageConfig_;
    /**
     * Gets publisher name from Microdata page config.
     * @private
     * @nocollapse
     * @return {string|undefined}
     */
    private static getPublisherNameFromMicrodataPageConfig_;
    /**
     * Adds a click listener on the publisher sign-in button.
     * @private
     * @nocollapse
     */
    private static addClickListenerOnPublisherSignInButton_;
    /**
     * Returns the GAA user, after the user signs in.
     * @private
     * @nocollapse
     * @return {!Promise<!GoogleUserDef>}
     */
    private static getGaaUser_;
    /**
     * Logs button click events.
     * @private
     * @nocollapse
     */
    private static logButtonClickEvents_;
    /**
     * Sends intro post message to Google Sign-In iframe.
     * @private
     * @nocollapse
     * @param {{ iframeUrl: string }} params
     */
    private static sendIntroMessageToGsiIframe_;
    static createNativeRegistrationButton({ googleApiClientId }: {
        googleApiClientId: any;
    }): false | Promise<any>;
    static createNative3PRegistrationButton({ authorizationUrl }: {
        authorizationUrl: any;
    }): false | Element;
}
export class GaaGoogleSignInButton {
    /**
     * Renders the Google Sign-In button.
     * @nocollapse
     * @param {{ allowedOrigins: !Array<string> }} params
     */
    static show({ allowedOrigins }: {
        allowedOrigins: Array<string>;
    }): void;
}
export class GaaSignInWithGoogleButton {
    /**
     * Renders the Google Sign-In button.
     * @nocollapse
     * @param {{ clientId: string, allowedOrigins: !Array<string>, rawJwt: boolean }} params
     */
    static show({ clientId, allowedOrigins, rawJwt }: {
        clientId: string;
        allowedOrigins: Array<string>;
        rawJwt: boolean;
    }): void;
}
export class GaaGoogle3pSignInButton {
    /**
     * Renders the third party Google Sign-In button for external authentication.
     * @nocollapse
     * @param {{
     *    allowedOrigins: !Array<string>,
     *    authorizationUrl: string,
     *    redirectMode: boolean,
     * }} params GaaGoogle3pSignInButton operates in two modes: redirect and
     * popup. The default mode is pop-up mode which opens the authorizationUrl
     * in a new window. To use a redirect mode and open the authorizationUrl in
     * the same window, set redirectMode to true. For webview applications
     * redirectMode is recommended.
     */
    static show({ allowedOrigins, authorizationUrl, redirectMode }: {
        allowedOrigins: Array<string>;
        authorizationUrl: string;
        redirectMode: boolean;
    }): void;
    /**
     * Notify Google Intervention of a complete sign-in event.
     * @nocollapse
     * @param {{ gaaUser: GaaUserDef}} params
     */
    static gaaNotifySignIn({ gaaUser }: {
        gaaUser: GaaUserDef;
    }): void;
}
export class GaaUtils {
    /**
     * Returns query string from current URL.
     * Tests can override this method to return different URLs.
     * @return {string}
     */
    static getQueryString(): string;
}
/**
 * Types of grantReason that can be specified by the user as part of
 * the userState object
 */
export type GrantReasonType = string;
export namespace GrantReasonType {
    const FREE: string;
    const SUBSCRIBER: string;
    const METERING: string;
}
/**
 * Types of paywallReason that can be specified by the user as part of
 * the userState object
 */
export type PaywallReasonType = string;
export namespace PaywallReasonType {
    const RESERVED_USER: string;
}
export class GaaMetering {
    /**
     * Returns a promise that resolves with a gaaUser.
     * @nocollapse
     * @return {!Promise}
     */
    static getGaaUserPromise(): Promise<any>;
    static setGaaUser(jwt: any): void;
    /**
     * Returns a promise that resolves when the user clicks "Already registered? Sign in".
     * @nocollapse
     * @return {!Promise}
     */
    static getLoginPromise(): Promise<any>;
    static resolveLogin(): void;
    /**
     * Initialize GaaMetering flow
     * @nocollapse
     * @param {InitParams} params
     */
    static init(params: InitParams): boolean;
    static handleLoginRequest(handleLoginPromise: any, unlockArticleIfGranted: any): void;
    static setEntitlements(googleEntitlementsPromise: any, allowedReferrers: any, unlockArticle: any, handleSwGEntitlement: any, showGoogleRegwall: any, showPaywall: any): void;
    static isCurrentUserRegistered(): boolean;
    static isUserRegistered(userState: any): boolean;
    /**
     * Validates parameters for GaaMetering.init flow
     * @nocollapse
     * @param {InitParams} params
     */
    static validateParameters(params: InitParams): boolean;
    static isGaa(publisherReferrers?: any[]): boolean;
    static getProductIDFromPageConfig_(): string;
    /**
     * Gets publisher ID from JSON-LD page config.
     * @private
     * @nocollapse
     * @return {string|undefined}
     */
    private static getProductIDFromJsonLdPageConfig_;
    /**
     * Gets product ID from Microdata page config.
     * @private
     * @nocollapse
     * @return {string|undefined}
     */
    private static getProductIDFromMicrodataPageConfig_;
    static isArticleFreeFromPageConfig_(): boolean;
    /**
     * @private
     * @nocollapse
     * @return {boolean}
     */
    private static isArticleFreeFromJsonLdPageConfig_;
    /**
     * @private
     * @nocollapse
     * @return {boolean}
     */
    private static isArticleFreeFromMicrodataPageConfig_;
    static isPromise(p: any): boolean;
    static newUserStateToUserState(newUserState: any): {
        metering: {
            state: {
                id: any;
                standardAttributes: {
                    registered_user: {
                        timestamp: number;
                    };
                };
            };
        };
    };
    static validateUserState(newUserState: any): boolean;
    static getOnReadyPromise(): Promise<any>;
    static getSubscriptionTimestamp(): any;
    userState: {};
    gaaUserPromiseResolve_: () => void;
    loginPromiseResolve_: () => void;
}
//# sourceMappingURL=gaa.d.ts.map