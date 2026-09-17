import { NextRequest, NextResponse } from "next/server";
import { searchCities } from "@/services/geocoding.service";

export async function GET(request: NextRequest) {
    try {
        const query =
            request.nextUrl.searchParams.get("query")?.trim() ?? "";

        if (query.length < 2) {
            return NextResponse.json(
                {
                    success: false,
                    error: "عبارت جستجو باید حداقل دو کاراکتر باشد.",
                },
                { status: 400 },
            );
        }

        const locations = await searchCities(query);

        return NextResponse.json(
            {
                success: true,
                data: locations,
            },
            {
                status: 200,
                headers: {
                    "Cache-Control":
                        "public, s-maxage=1800, stale-while-revalidate=3600",
                },
            },
        );
    } catch (error) {
        console.error("Geocoding API error:", error);

        return NextResponse.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "خطا در جستجوی شهر.",
            },
            { status: 500 },
        );
    }
}