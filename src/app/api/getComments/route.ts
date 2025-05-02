import { NextResponse } from "next/server";
import axios from "axios";

interface ReviewResponse {
    data: {
        result: {
            reviews: Array<{
                author_name: string;
                rating: number;
                text: string;
                time: number;
            }>
        }
    }; // You can replace this with a more specific type if you know the structure of the response
}

export async function GET(): Promise<NextResponse> {

    try {
        const response: ReviewResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
            params: {
            place_id: process.env.GOOGLE_PLACE_ID,
            language: "fr-FR",
            translated: false, 
            fields: 'review',
            key: process.env.GOOGLE_PLACE_API_KEY, 
            },
        });

        // Keep only the first 4 reviews
        response.data.result.reviews = response.data.result.reviews.slice(0, 4);

        return NextResponse.json(response.data);
    } catch (error) {
        console.error("Erreur lors de la récupération des images :", error);
        return NextResponse.json({ error: "Impossible de récupérer les images" }, { status: 500 });
      }
};
