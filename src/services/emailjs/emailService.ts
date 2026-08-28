import emailjs from "@emailjs/browser";

export async function sendOrderEmail(
    email: string,
    orderId: string
) {
    return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            email,
            order_id: orderId,
        },
        {
            publicKey:
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
    );
}
