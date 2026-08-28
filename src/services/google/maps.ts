export async function loadGoogleMaps() {
    const apiKey =
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        throw new Error(
            "Google Maps API key is missing."
        );
    }

    return apiKey;
}