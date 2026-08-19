import { log } from "console";

export default async function PostsLayout({ children, params }) {
    const layoutParams = await params;
    console.log("layout params", layoutParams);

    return (
        <div style={{ backgroundColor: "cyan" }}>
            <div style={{ background: "green" }}>
                <h1>Posts Layout</h1>
            </div>@@@
            <div>
                {children}
            </div>###
        </div>
    );
}