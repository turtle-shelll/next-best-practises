export default async function Api({ searchParams }) {
    const searchText = await searchParams;
    return <div>/API {searchText.sfwe}</div>
}