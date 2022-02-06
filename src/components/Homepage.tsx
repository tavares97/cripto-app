import { Link } from 'react-router-dom';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoAPI';
import StatsCard from './StatsCard';
import { Currencies, News } from '.';

const Homepage = () => {
	const count: any = 10;
	const { data, isFetching } = useGetCryptosQuery(count);

	const globalStats = data?.data?.stats;

	return (
		<div className='flex flex-col px-5'>
			<h1 className='text-4xl font-semibold'>Global Crypto Stats</h1>

			<div className='grid grid-rows-3 grid-cols-2 mt-10 gap-4 '>
				<StatsCard
					title='Total Cryptos'
					value={globalStats?.total && millify(globalStats?.total)}
					isFetching={isFetching}
				/>
				<StatsCard
					title='Total Exchanges'
					value={
						globalStats?.totalExchanges && millify(globalStats?.totalExchanges)
					}
					isFetching={isFetching}
				/>
				<StatsCard
					title='Total Market Cap'
					value={
						globalStats?.totalMarketCap && millify(globalStats?.totalMarketCap)
					}
					isFetching={isFetching}
				/>
				<StatsCard
					title='Total 24H Volume'
					value={
						globalStats?.total24hVolume && millify(globalStats?.total24hVolume)
					}
					isFetching={isFetching}
				/>
				<StatsCard
					title='Total Markets'
					value={
						globalStats?.totalMarkets && millify(globalStats?.totalMarkets)
					}
					isFetching={isFetching}
				/>
			</div>

			<div className='flex justify-between items-center my-6 '>
				<span className='text-xl'>Top 10 crypto right now</span>
				<Link
					to='/currencies'
					className='border p-2 rounded-md bg-gray-900 text-white shadow-md hover:bg-gray-600 '
				>
					See All
				</Link>
			</div>
			<Currencies simplified />

			<div className='flex justify-between mt-6 '>
				<span className='text-xl'>All latest crypto news</span>
				<Link
					to='/news'
					className='border p-2 rounded-md bg-gray-900 text-white shadow-md hover:bg-gray-600 '
				>
					See News
				</Link>
			</div>
			<News simplified />
		</div>
	);
};

export default Homepage;
