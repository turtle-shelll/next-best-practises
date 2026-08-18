export default async function Post({ params }) {
    const { postID } = await params;
    console.log("Post params ==>>>", { postID });
    return (
        <div style={{ backgroundColor: "blue", width: "max-content", margin: "auto" }}>
            <h1>Post {postID}</h1>
        </div>
    );
};