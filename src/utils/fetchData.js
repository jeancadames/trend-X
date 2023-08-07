const productsData = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const resp = await fetch(url, options);
    const data = await resp.json();

    return data;
}