import { Routes, Route } from 'react-router-dom';
import {
	Navbar,
	Homepage,
	Currencies,
	CurrencyDetails,
	News,
} from './components';
import Exchanges from './components/Exchanges';

function App() {
	return (
		<div className='h-screen grid grid-cols-custom-sidenav-layout'>
			<Navbar />

			<Routes>
				<Route index element={<Homepage />} />
				<Route path='/exchanges' element={<Exchanges />} />
				<Route path='/currencies' element={<Currencies />} />
				<Route path='/currencies/:coinId' element={<CurrencyDetails />} />
				<Route path='/news' element={<News />} />
			</Routes>
		</div>
	);
}

export default App;
