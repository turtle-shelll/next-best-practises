// export default async function Api({ searchParams }) {
//     const searchText = await searchParams;
//     return <div>/API {searchText.sfwe}</div>
// }

import { NextResponse } from "next/server";

export function GET(req) {
    return NextResponse.json({ message: "Route:-- /API" });
};
