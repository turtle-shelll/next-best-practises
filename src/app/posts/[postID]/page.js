import { log } from "console";

export default async function Post({ params, searchParams }) {
    const { postID } = await params;
    console.log("Post params ==>>>", { postID });
    const searchText = await searchParams;
    log("Post searchText ==>>>", searchText);
    return (
        <div style={{ backgroundColor: "blue", width: "max-content", margin: "auto" }}>
            <h1>Post {postID}</h1>
        </div>
    );
};