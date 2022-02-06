import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type QueryType = {
	category: string;
	count: number;
};

const cryptoNewsApiHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'x-rapidapi-key': '58b9f35818msh0ff4de351b39a87p1e1cadjsn6e77822d14ea',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url: string) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: build => ({
		getCryptoNews: build.query<any, QueryType>({
			query: ({ count, category }: QueryType) =>
				createRequest(
					`/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
