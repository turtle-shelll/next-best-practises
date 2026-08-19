import { log } from "console";

export default async function PostsLayout({ children, params, searchParams }) {
    const layoutParams = await params;
    console.log("layout params", layoutParams);

    const layoutSearchText = await searchParams;
    log("layoutSearchText  ==>>", layoutSearchText)
    return (
        <div>
            <div style={{ background: "green" }}>
                <h1>Posts Layout</h1>
            </div>@@@
            <div>
                {children}
            </div>###
        </div>
    );
}