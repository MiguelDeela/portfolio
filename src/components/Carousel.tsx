
const Carousel = ({children}: {children: React.ReactNode}) => {
	return (
		<li className="carousel-item animated">
			<svg stroke="currentColor" fill="#fbbf24" strokeWidth="0" role="img" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
				{children}
			</svg>
		</li>
	)
	
}

export default Carousel