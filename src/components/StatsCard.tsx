type StatsProps = {
	title: string;
	value: any;
	isFetching: boolean;
};

const StatsCard = ({ title, value, isFetching }: StatsProps) => {
	return (
		<>
			<div className='w-3/4 rounded-lg shadow-md overflow-hidden border'>
				<div className='p-4 flex items-center'>
					<div>
						<p className='mb-2 text-lg font-light text-gray-600 '>{title}</p>
						<p className='text-lg font-semibold text-gray-700'>
							{isFetching ? 'Loading' : value}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default StatsCard;
