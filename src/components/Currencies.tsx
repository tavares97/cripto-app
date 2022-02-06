import millify from 'millify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoAPI';

type CurrencyProps = {
	simplified?: boolean;
};

const Currencies = ({ simplified }: CurrencyProps) => {
	const count: any = simplified ? 10 : 100;

	const { data } = useGetCryptosQuery(count);
	const cryptoList = data?.data?.coins;

	const [searchTerm, setSearchTerm] = useState('');
	const [cryptos, setCryptos] = useState([]);

	useEffect(() => {
		const filter = cryptoList?.filter((coin: any) =>
			coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
		);

		setCryptos(filter);
	}, [cryptoList, searchTerm]);

	return (
		<div>
			{/* ONLY RENDERS ON NOT SIMPLIFIED VIEW */}
			{!simplified && (
				<div className='px-5'>
					<input
						type='text'
						placeholder='Search Crypto...'
						className='border-b w-full p-3 mt-4'
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</div>
			)}

			<div className={`grid grid-cols-4 gap-4 ${!simplified && 'p-5'}`}>
				{cryptos?.map((currency: any) => (
					<Link
						to={`/currencies/${currency?.uuid}`}
						key={currency?.uuid}
						className='border shadow-md rounded-sm hover:shadow-lg hover:scale-105 hover:duration-300'
					>
						<div className='flex justify-between items-center border-b-2 p-3'>
							<span className='text-xl font-semibold'>
								{currency?.rank}. {currency?.name}
							</span>
							<img src={currency?.iconUrl} alt='coin logo' className='w-10' />
						</div>
						<div className='p-3 space-y-2'>
							<p>Price: $ {millify(currency?.price)}</p>
							<p>Market Cap: {millify(currency?.marketCap)}</p>
							<p>Daily Change: {millify(currency?.change)} %</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Currencies;
