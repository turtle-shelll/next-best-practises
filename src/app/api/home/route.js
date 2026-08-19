// export default function ApiHome({ params }) {
//     console.log("api params =>>>>", params);
//     return <div>Api Home</div>;
// };

import { NextResponse } from "next/server";

export function GET(req) {
    return NextResponse.json({ message: "Hello World" });
};