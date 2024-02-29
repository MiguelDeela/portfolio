
const Footer = () => {
	return (
		<div>
			<footer className="flex justify-center border-t border-zinc-600">
      <section className="flex flex-col px-11 py-5 max-w-6xl items-center w-full flex-wrap gap-3">
        <article className="flex flex-row gap-8 justify-center flex-wrap">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-subtitleColor">
              Información de contacto
            </h3>
            <div className="flex flex-row gap-3">
              <a
                className="hover:text-hover text-sm text-textPrimary"
                href="https://github.com/MiguelDeela"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github profile"
              >
                <span>Github</span>
              </a>
              <a
                className="hover:text-hover text-sm text-textPrimary"
                href="https://www.linkedin.com/in/miguel-angel-de-la-cruz-aguirre/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <span>LinkedIn</span>
              </a>
              <a
                className="hover:text-hover text-sm text-textPrimary"
                href="https://inacapmailcl-my.sharepoint.com/:b:/g/personal/miguel_delacruz_inacapmail_cl/EQLssylb8c5IsRMEJgny1-EBtwRqBngt0GSamUHR5nxiBQ?e=QUwox6"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Download Resume"
              >
                <span>Currículum</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-subtitleColor">Contactame</h3>
            <p>miguedelacruzaguirre@gmail.com</p>
          </div>
        </article>
        <p className="text-sm mt-7 flex flex-wrap gap-1">
          Creado por
          <span className="text-titleColor"> Miguel de la Cruz Aguirre.</span> © 2024
        </p>
      </section>
    </footer>
		</div>
	)
}

export default Footer
