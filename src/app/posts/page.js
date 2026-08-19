import { log } from "console";

export default async function Posts({ params, searchParams }) {
    const postParams = await params;
    log("Posts postParams  ==>>>", postParams);
    const searchText = await searchParams;
    console.log("Posts searchtext ==>>>", searchText)
    return (
        <div style={{ backgroundColor: "green", width: "min-content", margin: "auto" }}>
            <h1>Posts</h1>

        </div>
    );
};