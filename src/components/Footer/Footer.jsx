import contactBackground from '../../assets/getInTouchbg.png'
import footerBackground from '../../assets/footerBgImg.png'
import logo from '../../assets/Logo.png'
import './Footer.css'

const ContactIcon = ({ kind }) => {
	const paths = {
		phone: (
			<path d="M7.2 4.5 9.5 8l-1.4 1.8a13.2 13.2 0 0 0 6.1 6.1l1.8-1.4 3.5 2.3-.7 3c-.2.8-1 1.3-1.8 1.2C9.6 20 4 14.4 3 7c-.1-.8.4-1.6 1.2-1.8l3-.7Z" />
		),
		email: (
			<>
				<rect x="3.5" y="5.5" width="17" height="13" rx="2" />
				<path d="m4.5 7 7.5 6 7.5-6" />
			</>
		),
		location: (
			<>
				<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
				<circle cx="12" cy="10" r="2.2" />
			</>
		),
	}

	return (
		<span className="contact-icon" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none">{paths[kind]}</svg>
		</span>
	)
}

const SocialIcon = ({ network }) => {
	const icons = {
		linkedin: <path d="M7 9v8M7 6.5v.1M11 17v-8h3v1.2c.5-.9 1.3-1.4 2.4-1.4 2 0 2.6 1.3 2.6 3.4V17h-3v-4.1c0-1-.2-1.7-1.2-1.7s-1.6.7-1.6 1.7V17h-2.2Z" />,
		instagram: (
			<>
				<rect x="5" y="5" width="14" height="14" rx="4" />
				<circle cx="12" cy="12" r="3.2" />
				<circle cx="16.5" cy="7.8" r=".7" fill="currentColor" stroke="none" />
			</>
		),
		youtube: (
			<>
				<rect x="3.5" y="6" width="17" height="12" rx="3" />
				<path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
			</>
		),
	}

	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			{icons[network]}
		</svg>
	)
}

const Footer = () => {
	return (
		<>
			<section
				className="contact-section"
				id="contact"
				aria-labelledby="contact-title"
				style={{ '--contact-background': `url(${contactBackground})` }}
			>
				<div className="contact-inner">
					<div className="contact-copy">
						<p className="contact-eyebrow">Get in Touch</p>
						<h2 id="contact-title">Let’s Build a<br />Healthier Future Together</h2>
						<p className="contact-description">
							Have questions or need guidance? Our team is here to support you at every step.
						</p>
						<a className="contact-explore" href="#about">
							Explore More <span aria-hidden="true">→</span>
						</a>
					</div>

					<form
						className="contact-form"
						action="mailto:hello@esperernutrition.com"
						method="post"
						encType="text/plain"
					>
						<label className="visually-hidden" htmlFor="contact-name">Full Name</label>
						<input id="contact-name" name="name" type="text" placeholder="Full Name *" autoComplete="name" required />
						<label className="visually-hidden" htmlFor="contact-email">Email Address</label>
						<input id="contact-email" name="email" type="email" placeholder="Email Address *" autoComplete="email" required />
						<label className="visually-hidden" htmlFor="contact-phone">Phone Number</label>
						<input id="contact-phone" name="phone" type="tel" placeholder="Phone Number *" autoComplete="tel" required />
						<label className="visually-hidden" htmlFor="contact-message">Your Message</label>
						<textarea id="contact-message" name="message" placeholder="Your Message *" rows="3" required />
						<button className="contact-submit" type="submit">
							Send Message <span aria-hidden="true">→</span>
						</button>
					</form>

					<address className="contact-details">
						<a className="contact-detail" href="tel:+919876543210">
							<ContactIcon kind="phone" />
							<span><strong>+91 98765 43210</strong><small>Mon – Sat, 9 AM – 6 PM</small></span>
						</a>
						<a className="contact-detail" href="mailto:hello@esperernutrition.com">
							<ContactIcon kind="email" />
							<span><strong>hello@esperernutrition.com</strong></span>
						</a>
						<a className="contact-detail" href="https://maps.google.com/?q=New+Delhi,+India" target="_blank" rel="noreferrer">
							<ContactIcon kind="location" />
							<span><strong>New Delhi, India</strong></span>
						</a>
						<div className="contact-socials" aria-label="Social media">
							<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon network="linkedin" /></a>
							<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon network="instagram" /></a>
							<a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><SocialIcon network="youtube" /></a>
						</div>
					</address>
				</div>
			</section>

			<footer
				className="site-footer"
				id="site-footer"
				style={{ '--footer-background': `url(${footerBackground})` }}
			>
				<div className="footer-inner">
					<div className="footer-main">
						<nav className="footer-links" aria-label="Footer navigation">
							<h2>Quick Links</h2>
							<a href="#home">Home</a>
							<a href="#about">About Us</a>
							<a href="#services">Our Services</a>
							<a href="#products">Products &amp; Solutions</a>
							<a href="#resources">Resources</a>
							<a href="#contact">Contact</a>
						</nav>

						<a className="footer-brand" href="#home" aria-label="Esperer Nutrition home">
							<span className="footer-logo-window"><img src={logo} alt="" /></span>
							<span className="footer-brand-leaf" aria-hidden="true" />
							<span className="footer-tagline">Better Nutrition. Brighter Tomorrows.</span>
						</a>

						<div className="footer-newsletter">
							<h2>Stay Connected</h2>
							<p>Subscribe to our newsletter for nutrition tips, research updates and more.</p>
							<form action="mailto:hello@esperernutrition.com" method="post" encType="text/plain">
								<label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
								<input id="newsletter-email" name="email" type="email" placeholder="Your email address" autoComplete="email" required />
								<button type="submit" aria-label="Subscribe by email"><span aria-hidden="true">→</span></button>
							</form>
						</div>
					</div>

					<div className="footer-legal">
						<p>© {new Date().getFullYear()} Esperer Nutrition. All rights reserved.</p>
						<div>
							<a href="#privacy">Privacy Policy</a>
							<span aria-hidden="true">|</span>
							<a href="#terms">Terms &amp; Conditions</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
