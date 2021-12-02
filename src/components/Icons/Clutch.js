const Clutch = ({ clazz, fill }) => {
	return (
		<svg
			className={clazz}
			fill='none'
			width='28'
			height='29'
			viewBox='0 0 28 29'>
			<g>
				<path
					d='M19.2414 18.4917C18.1207 19.3897 16.5517 20.0632 14.9828 20.0632C11.3966 20.0632 8.93103 17.3693 8.93103 13.7775C8.93103 10.1856 11.3966 7.71624 14.9828 7.71624C16.5517 7.71624 18.1207 8.16522 19.2414 9.28766L19.9138 9.96113L23.5 6.59379L22.6035 5.92032C20.5862 4.1244 17.8966 3.00195 14.9828 3.00195C8.7069 3.00195 4 7.71624 4 14.002C4 20.2877 8.7069 25.002 14.9828 25.002C17.8966 25.002 20.5862 23.8795 22.6035 22.0836L23.5 21.4101L19.9138 17.8183L19.2414 18.4917Z'
					fill={fill}
				/>
				<path
					d='M14.7586 17.5938C16.7392 17.5938 18.3448 15.9857 18.3448 14.002C18.3448 12.0183 16.7392 10.4102 14.7586 10.4102C12.778 10.4102 11.1724 12.0183 11.1724 14.002C11.1724 15.9857 12.778 17.5938 14.7586 17.5938Z'
					fill={fill}
				/>
			</g>
		</svg>
	);
};

export default Clutch;