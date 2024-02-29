
const NavBar = () => {


	return (
		<nav className=" p-4 fixed w-full bg-black z-10">
			<div className="flex flex-wrap md:justify-between justify-center items-center mx-10">
				<div className="">
				<a href="/" className=" text-xl">MAdlCA</a>
				</div>
				<div className="">
					<ul className="flex">
						<li className="p-2">
							<a href="/" className="">Inicio</a>
						</li>
						<li className="p-2">
							<a href="#about" >Sobre mi</a>
						</li>
						<li className="p-2">
							<a href="#projects" className="">Proyectos</a>
						</li>
					</ul>
				</div>
			</div>
			<hr className="border-gray-300 my-1"/>
		</nav>
	)
}

export default NavBar
