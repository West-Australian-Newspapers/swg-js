export namespace Constants {
    namespace Environment {
        const LOCAL: string;
        const PREPROD: string;
        const PRODUCTION: string;
        const SANDBOX: string;
        const TEST: string;
        const TIN: string;
    }
    /**
     * Supported environments.
     */
    type Environment = string;
    namespace PaymentMethod {
        const CARD: string;
        const TOKENIZED_CARD: string;
        const UPI: string;
    }
    /**
     * Supported payment methods.
     */
    type PaymentMethod = string;
    namespace AuthMethod {
        const CRYPTOGRAM_3DS: string;
        const PAN_ONLY: string;
    }
    /**
     * Auth methods.
     */
    type AuthMethod = string;
    namespace ResponseStatus {
        const CANCELED: string;
        const DEVELOPER_ERROR: string;
    }
    /**
     * Returned result status.
     */
    type ResponseStatus = string;
    namespace TotalPriceStatus {
        const ESTIMATED: string;
        const FINAL: string;
        const NOT_CURRENTLY_KNOWN: string;
    }
    /**
     * Supported total price status.
     */
    type TotalPriceStatus = string;
    namespace ButtonType {
        const SHORT: string;
        const LONG: string;
    }
    /**
     * Supported Google Pay payment button type.
     */
    type ButtonType = string;
    namespace ButtonColor {
        const DEFAULT: string;
        const BLACK: string;
        const WHITE: string;
    }
    /**
     * Supported button colors.
     */
    type ButtonColor = string;
    namespace Id {
        const POPUP_WINDOW_CONTAINER: string;
    }
    /**
     * Id attributes.
     */
    type Id = string;
    const STORAGE_KEY_PREFIX: string;
    const IS_READY_TO_PAY_RESULT_KEY: string;
    const UPI_CAN_MAKE_PAYMENT_CACHE_KEY: string;
    const CLASS_PREFIX: string;
    const IFRAME_ACTIVE_CONTAINER_CLASS: string;
    const IFRAME_CONTAINER_CLASS: string;
    const IFRAME_STYLE_CENTER_CLASS: string;
    const IFRAME_STYLE_CLASS: string;
    const IFRAME_STYLE: string;
    const IFRAME_STYLE_CENTER: string;
    const GPAY_BUTTON_WITH_CARD_INFO_IMAGE: string;
    namespace BUTTON_LOCALE_TO_MIN_WIDTH {
        const en: number;
        const bg: number;
        const cs: number;
        const de: number;
        const es: number;
        const fr: number;
        const hr: number;
        const id: number;
        const ja: number;
        const ko: number;
        const ms: number;
        const nl: number;
        const pl: number;
        const pt: number;
        const ru: number;
        const sk: number;
        const sl: number;
        const sr: number;
        const tr: number;
        const uk: number;
        const zh: number;
    }
    const GPAY_GRAYPANE: string;
    const GPAY_BUTTON_CLASS: string;
    const BUTTON_STYLE: string;
    const GPAY_BUTTON_WITH_OFFER_ICON_ADDITIONAL_STYLE: string;
    const GPAY_OFFER_ICON_CLASS: string;
    const GPAY_OFFER_ICON_SVG: string;
    const GPAY_OFFER_ICON_STYLE: string;
    const GPAY_OFFER_DESCRIPTION_CLASS: string;
    const GPAY_OFFER_DESCRIPTION_STYLE: string;
    const GPAY_BUTTON_CARD_INFO_CLASS: string;
    const GPAY_BUTTON_CARD_INFO_BUTTON_STYLE: string;
    const TRUSTED_DOMAIN: string;
}
//# sourceMappingURL=constants.d.ts.map