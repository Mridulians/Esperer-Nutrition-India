import foodImage from '../../assets/nutrition.jpg'
import leafImage from '../../assets/leaf_bg_removed.png'
import './Purpose.css'

const scienceItems = [
	{
		icon: 'clinical',
		title: 'Clinical Expertise',
		description: 'Guided by oncology nutrition specialists.',
	},
	{
		icon: 'research',
		title: 'Research Driven',
		description: 'Backed by the latest scientific evidence.',
	},
	{
		icon: 'personalized',
		title: 'Personalized Plans',
		description: 'Built around your unique needs.',
	},
	{
		icon: 'outcomes',
		title: 'Better Outcomes',
		description: 'Improved strength, tolerance and quality of life.',
	},
]

const ScienceIcon = ({ name }) => {
	const icons = {
		clinical: (
			<>
				<path d="M12 4v16M4 12h16" />
				<path d="M7.5 7.5h.01M16.5 7.5h.01M7.5 16.5h.01M16.5 16.5h.01" />
			</>
		),
		research: (
			<>
				<ellipse cx="12" cy="12" rx="8.5" ry="3.5" />
				<ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(60 12 12)" />
				<ellipse cx="12" cy="12" rx="8.5" ry="3.5" transform="rotate(120 12 12)" />
				<circle cx="12" cy="12" r="1.3" />
			</>
		),
		personalized: (
			<>
				<circle cx="12" cy="8" r="3" />
				<path d="M5.5 20c.5-3.2 2.9-5 6.5-5s6 1.8 6.5 5" />
				<path d="M4 5.5h2M18 5.5h2M4 10h1M19 10h1" />
			</>
		),
		outcomes: (
			<>
				<rect x="6" y="4.5" width="12" height="16" rx="1.5" />
				<path d="M9 4.5v-1h6v1M9 12l2 2 4-4M9 17h6" />
			</>
		),
	}

	return (
		<span className="science-icon" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none">
				{icons[name]}
			</svg>
		</span>
	)
}

const Purpose = () => {
	return (
		<section className="purpose-section" id="about" aria-labelledby="purpose-title">
			<div className="purpose-inner">
				<div className="purpose-copy">
					<p className="purpose-eyebrow">Our Purpose</p>
					<h2 id="purpose-title">Nutrition as Part<br />of Treatment.</h2>
					<p className="purpose-description">
						We combine clinical expertise, research and personalized care to create nutrition solutions for better outcomes in cancer care.
					</p>
					<a className="purpose-link" href="#services">
						Learn More <span aria-hidden="true">→</span>
					</a>
					<img className="purpose-leaf" src={leafImage} alt="" />
				</div>

				<img
					className="purpose-food-image"
					src={foodImage}
					alt="A colorful bowl of vegetables, chickpeas and grains"
				/>

				<div className="science-panel">
					<p className="purpose-eyebrow">Our Science</p>
					<h2 className="science-title">The Right Nutrition.<br />At Every Stage.</h2>
					<ul className="science-list">
						{scienceItems.map((item) => (
							<li className="science-item" key={item.title}>
								<ScienceIcon name={item.icon} />
								<div>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Purpose
