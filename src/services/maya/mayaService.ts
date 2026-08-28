export interface MayaCheckoutRequest {
    amount: number;
    orderId: string;
    description: string;
}

export async function createMayaCheckout(
    data: MayaCheckoutRequest
) {
    /*
        IMPORTANT:

        This should eventually call our backend.

        React/browser
            ↓
        Botanique server
            ↓
        Maya Sandbox API

        Never put the Maya secret key in frontend code.
    */

    console.log("Maya checkout request:", data);

    return {
        success: true,
        message: "Maya integration pending backend setup.",
    };
}
