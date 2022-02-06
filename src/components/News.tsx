import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

type NewsProps = {
	simplified?: boolean;
};

const News = ({ simplified }: NewsProps) => {
	const category = 'crypto';
	const { data } = useGetCryptoNewsQuery({
		category,
		count: simplified ? 6 : 12,
	});

	const demoImage =
		'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

	return (
		<div
			className={`grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 ${
				!simplified && 'p-5'
			}`}
		>
			{data?.value?.map((news: any, idx: number) => (
				<a href={news?.url} className='card p-3' key={idx}>
					<div className='flex justify-between mb-14'>
						<span className='text-xl font-semibold'>{news?.name}</span>

						<img
							src={news?.image?.thumbnail?.contentUrl || demoImage}
							alt='image new'
							className='ml-12 h-20 w-20 rounded-full'
						/>
					</div>

					<p>
						{news?.description > 100
							? `${news.description.substring(0, 100)} ...`
							: news.description}
					</p>
				</a>
			))}
		</div>
	);
};

export default News;
