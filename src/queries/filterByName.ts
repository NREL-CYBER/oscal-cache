
const filterByName = <T extends { name?: string }>(query?: string) => (target: T) => {
    return target.name ? target.name.toLowerCase().includes((query || "").toLowerCase()) : false;
}
export default filterByName;