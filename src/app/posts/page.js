export default async function Posts() {

    const res = await fetch("http://localhost:3000/api/home");
    const data = await res.json();

    console.log("data =>>>>", data);
    return (
        <div style={{ backgroundColor: "green", width: "min-content", margin: "auto" }}>
            <h1>Posts</h1>
        </div>
    );
};