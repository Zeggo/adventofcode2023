export { fetchData };
async function fetchData(day) {
    const data = await fetch(`../src/${day}-data.txt`)
        .then(res => res.text());
    return data;
}
;
