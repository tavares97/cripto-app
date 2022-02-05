import StatsCard from './StatsCard';

const Homepage = () => {
	return (
		<div className='flex flex-col px-5'>
			<h1>Global Crypto Stats</h1>

			<div className='grid grid-rows-3 grid-cols-2 mt-10 gap-4 place-items-center'>
				<StatsCard title='Total Cryptos' value={5} />
				<StatsCard title='Total Exchanges' value={5} />
				<StatsCard title='Total Market Cap' value={5} />
				<StatsCard title='Total 24H Volume' value={5} />
				<StatsCard title='Total Markets' value={5} />
			</div>
		</div>
	);
};

export default Homepage;
