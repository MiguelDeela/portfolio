import CaoruselObjects from "../components/CaoruselObjects"


const About = () => {
	return (
		<div className=' p-8 ' id='about'>
			<h1 className='text-7xl flex justify-center text-teal-300  mb-10 title-font'>{'<'}Sobre mi {'/>'}</h1>

			<div className='flex justify-center '>
				<div className='mr-60'>
					<h2 className='text-4xl'>Habilidades Blandas</h2>
					<ul className="steps steps-vertical">
						<li data-content="" className="step step-accent">Capacidad de aprendizaje continuo</li>
						<li data-content="" className="step step-accent">Resolución de problemas</li>
						<li data-content="" className="step step-accent">Empatía y habilidades de escucha</li>
						<li data-content="" className="step step-accent">Flexibilidad y adaptabilidad</li>
						<li data-content="" className="step step-accent">Creatividad</li>
						<li data-content="" className="step step-accent">Pensamiento crítico y analítico</li>
						<li data-content="" className="step step-accent">Trabajo en equipo</li>
					</ul>
				</div>
				<div className="flex flex-col items-center">
					<h2 className='text-4xl'>Educación</h2>
					<ul className="list-disc">
						<li>
							<div className="flex flex-col justify-center">
								Analista Programador:
								<span className="text-neutral-content">
									Universidad tecnológica de Chile Inacap
								</span>
								<span className="text-neutral-content">
									2022 - 2024
								</span>
							</div>
						</li>
						<li>
							<div className="flex flex-col justify-center">
								Ingenieria en Informática:
								<span className="text-neutral-content">
									Universidad tecnológica de Chile Inacap
								</span>
								<span className="text-neutral-content">
									En curso
								</span>
							</div>
						</li>
						<li>
							<div className="flex flex-col justify-center">
								Otros Cursos:
								<span className="text-neutral-content">
									React - La Guía Completa: Hooks Context Redux MERN +15 Apps. Udemy
								</span>
								<span className="text-neutral-content">
									OpenAI: Ejercicios prácticos y asistentes con React + NestJS. Udemy
								</span>
							</div>
						</li>
					</ul>

					<h2 className='text-4xl mt-20'>Habilidades Técnicas</h2>
					<CaoruselObjects/>
					<div className="flex justify-center mt-7">
					
				</div>		
				</div>
			</div>
		</div>
	)
}

export default About
