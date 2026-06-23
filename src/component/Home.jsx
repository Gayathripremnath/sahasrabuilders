import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import './Home.css';

// Import local assets
import heroVilla from '../assets/hero_villa.png';
import interiorArch from '../assets/interior_arch.png';
import exteriorPainting from '../assets/exterior_painting.png';
import interiorPainting from '../assets/interior_painting.png';
import homeRenovations from '../assets/home_renovations.png';
import modernLiving from '../assets/modern_living.png';

// External high-quality fallbacks for missing generations due to rate limits
const greenHavenImg = "https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&q=80&w=800";
const carpentryImg = "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800";

export default function Home() {
  const servicesRef = useRef(null);

  const scroll = (direction) => {
    if (servicesRef.current) {
      const scrollAmount = 360; // Approximate card width + gap
      servicesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="home">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Sahasra Builders</h1>
          <p className="hero-subtitle">
            WE USES ITS KNOWLEDGE AND FORESIGHT TO SHAPE THE WAY PEOPLE LIVE,
            WORK, AND CONNECT.
          </p>
          <div className="hero-image-wrapper">
            <img src={heroVilla} alt="Sahasra Builders Villa" className="hero-image" />
            
            <div className="hero-overlay-cards">
              <div className="glass-card">
                <h3>Take a journey around the Sahasra Builders world</h3>
                <p>
                  In Prague, we're transforming an industrial site, an old sugar factory, into 800 modern riverside apartments. Modřanský Cukrovar will feature advanced innovative water- and energy-saving solutions that will help the homeowners live with less impact one the climate.
                </p>
                <a href="#explore" className="card-link">
                  EXPLORE MORE <span className="arrow">›</span>
                </a>
              </div>

              <div className="glass-card">
                <h3>Knowledge and foresight to shape sustainable places</h3>
                <p>
                  Welcome to Foresight, our platform for knowledge and insights about shaping sustainable places. It is also the home of our new podcast, highlighting solutions making a difference today.
                </p>
                <a href="#foresight" className="card-link">
                  VISIT FORESIGHT <span className="arrow">›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO SECTION */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="what-we-do-grid">
            <div className="what-we-do-content">
              <div className="section-tag">
                <span className="line"></span> WHAT WE DO
              </div>
              <h2 className="section-heading">
                Working <span className="highlight-blue">with You</span>,<br />
                Building <span className="highlight-blue">Your Dream</span>.
              </h2>
              <p className="section-description">
                We specialise in residential renovations, additions, and extensions. With a focus on quality craftsmanship, we proudly serve the Illawarra and Sutherland Shire areas.
              </p>
            </div>
            
            <div className="what-we-do-image-container">
              <div className="blue-background-accent"></div>
              <img src={interiorArch} alt="Minimalist interior with archway" className="what-we-do-image" />
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                {/* Custom Home Builds Outline SVG */}
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 26 L32 8 L54 26 V54 H10 Z" />
                  <path d="M44 11 V18" />
                  <path d="M26 54 V38 H38 V54" />
                </svg>
              </div>
              <h3>Custom Home Builds</h3>
              <p>We build custom homes, delivering high-quality craftsmanship from start to finish.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                {/* Renovations & Additions Crossed Tools SVG */}
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 26 L32 8 L54 26 V54 H10 Z" />
                  <path d="M44 11 V18" />
                  {/* Crossed hammer and wrench */}
                  <path d="M22 42 L38 26" />
                  <path d="M34 22 C34 22 39 19 41 21 C43 23 40 28 40 28" />
                  <path d="M42 42 L26 26" />
                  <path d="M22 22 L26 18 L30 22 L26 26 Z" />
                </svg>
              </div>
              <h3>Renovations & Additions</h3>
              <p>We transform and expand your spaces to enhance both functionality and design.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                {/* Commercial Fit-outs Storefront SVG */}
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 28 V54 H52 V28" />
                  <path d="M8 20 H56 V28 H8 Z" />
                  <path d="M16 28 V20 M24 28 V20 M32 28 V20 M40 28 V20 M48 28 V20" />
                  <path d="M8 28 Q12 32 16 28 Q20 32 24 28 Q28 32 32 28 Q36 32 40 28 Q44 32 48 28 Q52 32 56 28" />
                  <path d="M32 54 V40 H44 V54" />
                  <path d="M18 40 H26 V48 H18 Z" />
                </svg>
              </div>
              <h3>Commercial Fit-outs</h3>
              <p>We create tailored, functional workspaces that reflect your brand and business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-tag-center">
            <span className="line"></span> TESTIMONIALS <span className="line"></span>
          </div>
          <h2 className="testimonials-heading">
            What Our Clients Say
          </h2>
          
          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-svg" width="18" height="18" viewBox="0 0 24 24" fill="#0f3d6c" stroke="#0f3d6c">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">
                "Sahasra Builders built our dream custom home. Their craftsmanship, communication, and attention to detail from the initial planning to the final handover were second to none."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-details">
                  <h4>Sarah & Mark T.</h4>
                  <span>Custom Home Clients</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-svg" width="18" height="18" viewBox="0 0 24 24" fill="#0f3d6c" stroke="#0f3d6c">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">
                "We renovated our cottage with Sahasra Builders. They completely transformed our kitchen and living spaces while preserving the home's original character."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">DL</div>
                <div className="author-details">
                  <h4>David L.</h4>
                  <span>Renovation Client</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-svg" width="18" height="18" viewBox="0 0 24 24" fill="#0f3d6c" stroke="#0f3d6c">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">
                "Superb execution on our commercial retail fit-out. Sahasra Builders delivered the project on time and within budget, with an exceptional standard of joinery."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ER</div>
                <div className="author-details">
                  <h4>Elena R.</h4>
                  <span>Commercial Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                alt="Sahasra Builders Architecture Design" 
                className="about-image"
              />
              <div className="about-image-accent"></div>
            </div>

            <div className="about-content">
              <div className="section-tag">
                <span className="line"></span> WHO WE ARE
              </div>
              <h2 className="section-heading">
                Crafting Spaces <br />
                that <span className="highlight-blue">Inspire Life</span>.
              </h2>
              <p className="about-description">
                At Sahasra Builders, we believe that architecture is more than just erecting structures; it's about shaping environments where communities thrive, families connect, and individuals find daily inspiration.
              </p>
              <p className="about-description">
                With over fifteen years of premium craftsmanship across Europe and Australia, our dedicated team brings foresight, environmental consciousness, and meticulous attention to detail to every project we undertake.
              </p>

              <div className="about-stats-grid">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">250+</div>
                  <div className="stat-label">Completed Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER SERVICES SECTION (DARK THEME) */}
      <section className="other-services-section" id="services">
        <div className="container">
          <div className="section-header-dark">
            <h2 className="dark-heading">Other services</h2>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={() => scroll('left')} aria-label="Previous service">
                <ArrowLeft size={20} />
              </button>
              <button className="carousel-btn" onClick={() => scroll('right')} aria-label="Next service">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="services-carousel" ref={servicesRef}>
            <div className="service-card">
              <div className="service-image-wrapper">
                <img src={exteriorPainting} alt="Exterior Painting" />
              </div>
              <div className="service-info">
                <h3>Exterior Painting</h3>
                <p>Our team dependable exterior painting professionals will tackle your list of painting jobs. Beginning with a complete prep work all the way to finish.</p>
                <a href="#exterior" className="service-action-link">
                  More about us <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-wrapper">
                <img src={interiorPainting} alt="Interior Painting" />
              </div>
              <div className="service-info">
                <h3>Interior Painting</h3>
                <p>Tired of the same old walls, our company specializes in interior house painting. You will be amazed how a fresh coat of paint on your walls will brighten your home.</p>
                <a href="#interior" className="service-action-link">
                  More about us <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-wrapper">
                <img src={homeRenovations} alt="Home Renovations" />
              </div>
              <div className="service-info">
                <h3>Home Renovations</h3>
                <p>Is you house old and badly need a makeover? Or did you just buy a fixer-upper? At Impeccable Builders, we got all of your home renovation needs covered.</p>
                <a href="#renovations" className="service-action-link">
                  More about us <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-wrapper">
                <img src={carpentryImg} alt="Carpentry Services" />
              </div>
              <div className="service-info">
                <h3>Carpentry</h3>
                <p>At At Impeccable Builders, we offer quality carpentry services to transform your home, from bespoke cabinetry to wood panelling.</p>
                <a href="#carpentry" className="service-action-link">
                  More about us <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LATEST PROJECTS SECTION (DARK THEME) */}
      <section className="latest-projects-section" id="projects">
        <div className="container">
          <div className="section-header-dark">
            <h2 className="dark-heading">Latest projects</h2>
            <a href="#all-projects" className="all-projects-link">
              All projects <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-wrapper">
                <img src={modernLiving} alt="Modern Living Spaces Project" />
                <button className="project-arrow-btn white-btn" aria-label="View project">
                  <ArrowUpRight size={24} />
                </button>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  <span className="tag-chip">Home Renovations</span>
                </div>
                <h3>Modern Living Spaces</h3>
                <p>
                  Transforming a dated living room into a modern and cozy retreat. This project featured custom-built shelving, premium hardwood flooring, and a sleek fireplace design that blends functionality with aesthetics.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <img src='https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8fDA%3D' alt="The Green Haven Project" />
                <button className="project-arrow-btn black-btn" aria-label="View project">
                  <ArrowUpRight size={24} />
                </button>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  <span className="tag-chip">Home Renovations</span>
                  <span className="tag-chip">Interior Painting</span>
                </div>
                <h3>The Green Haven</h3>
                <p>
                  A custom-built eco-home designed with sustainable materials, energy-efficient solutions, and a lush outdoor garden. The result was a harmonious space that balances modern architecture with nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
