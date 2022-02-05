import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from '@ant-design/icons';

import logo from '../images/logo.png';

const Navbar = () => {
	return (
		<>
			<div className='flex flex-col bg-gray-900 text-white py-4'>
				<div className='flex justify-center items-center ml-1 pb-8 pl-8 pr-4'>
					<img src={logo} className='w-20' />
					<h1 className='uppercase px-4'>All about Crypto</h1>
				</div>

				<nav className='space-y-2'>
					<Link
						to='/'
						className='flex items-center hover:bg-gray-700 pl-8 pr-36 py-3'
					>
						<HomeOutlined />
						<span className='text-sm  ml-3'>Home</span>
					</Link>
					<Link
						to='/currencies'
						className='flex items-center hover:bg-gray-700 pl-8 pr-14 py-3 '
					>
						<FundOutlined />
						<span className='text-sm  ml-3'>Currencies</span>
					</Link>
					<Link
						to='/exchanges'
						className='flex items-center hover:bg-gray-700 pl-8 pr-14 py-3'
					>
						<MoneyCollectOutlined />
						<span className='text-sm  ml-3'>Exchanges</span>
					</Link>
					<Link
						to='/news'
						className='flex items-center hover:bg-gray-700 pl-8 pr-14 py-3'
					>
						<BulbOutlined />
						<span className='text-sm  ml-3'>News</span>
					</Link>
				</nav>
				<div className='mt-auto flex justify-center'>
					<span className='text-center text-sm text-gray-300'>
						All About Crypto <br /> All rights reserved © 2022
					</span>
				</div>
			</div>
		</>
	);
};

export default Navbar;
