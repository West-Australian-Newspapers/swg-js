declare namespace MeteringDemo {
    const GOOGLE_SIGN_IN_CLIENT_ID: string;
    const GOOGLE_SIGN_IN_IFRAME_URL: string;
    const GOOGLE_3P_SIGN_IN_IFRAME_URL: string;
    const SIGN_IN_WITH_GOOGLE_IFRAME_URL: string;
    function setupLanguage(): void;
    function setupControls(): void;
    function resetMeteringDemo(): void;
    function registerUser(gaaUser: any): void;
    function createPpid(): string;
    function getPpid(): any;
    function openPaywall(): void;
    function fetchMeteringState(): Promise<{
        id: any;
        registrationTimestamp: any;
    }>;
}
//# sourceMappingURL=metering.d.ts.map