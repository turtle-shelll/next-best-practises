import { NextResponse, NextRequest, NextFetchEvent, URLPattern, URLSearchParams, URL, after, before, middleware, userAgent, connection, userAgentFromString } from "next/server";

export async function GET(request) {

    // request
    // console.log("request =>>>>", request);

    // NextRequest
    // console.log("NextRequest =>>>>", NextRequest);

    // NextFetchEvent
    // console.log("NextFetchEvent =>>>>", NextFetchEvent);

    // URLPattern
    // console.log("URLPattern =>>>>", URLPattern);

    // URLSearchParams
    // console.log("URLSearchParams =>>>>", URLSearchParams);

    // URL
    // console.log("URL =>>>>", URL);

    // after
    // console.log("after =>>>>", after);

    // before
    // console.log("before =>>>>", before);

    // middleware
    // console.log("middleware =>>>>", middleware);

    // userAgent
    // console.log("userAgent =>>>>", userAgent);

    // connection
    // console.log("connection =>>>>", connection);

    // userAgentFromString
    // console.log("userAgentFromString =>>>>", userAgentFromString);


    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const age = searchParams.get("age");
    return NextResponse.json({ message: "Hello World", data: { name, age } });
};