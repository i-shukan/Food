const postData = async function(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await res.json();
}

const getResources = async function(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Request error: could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData};
export {getResources};