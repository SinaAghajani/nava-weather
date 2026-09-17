import { NextRequest, NextResponse } from "next/server";
import { getWeather } from "@/services/weather.service";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = request.nextUrl;

        const latitude = Number(searchParams.get("latitude"));
        const longitude = Number(searchParams.get("longitude"));

        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "مختصات جغرافیایی معتبر نیست.",
                },
                { status: 400 },
            );
        }

        const weather = await getWeather(latitude, longitude);

        return NextResponse.json(
            {
                success: true,
                data: weather,
            },
            {
                status: 200,
                headers: {
                    "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
                },
            },
        );
    } catch (error) {
        console.error("Weather API error:", error);

        return NextResponse.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "خطا در دریافت اطلاعات آب‌وهوا.",
            },
            { status: 500 },
        );
    }
}