import './App.css';
import logo from '../../images/logo.svg';
import curvedline from '../../images/pattern-curved-line-1.svg';
import heroImage from '../../images/image-hero-portrait@2x.webp';
import cmoImage from '../../images/image-jeremy-large@2x.webp';
import patternBlur from '../../images/pattern-blur.svg';
import smallLine from '../../images/pattern-curved-line-2.svg';
import fb from '../../images/icon-facebook.svg';
import tw from '../../images/icon-twitter.svg';
import inst from '../../images/icon-instagram.svg';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <div>
          <img className='logo' src={logo} alt='suite logo' />
        </div>
        <button className='request-beta_secondary'>Request Beta Access</button>
      </header>

      <main className='main'>
        <section className='hero'>
          <div className='hero__cta'>
            <div className='hero__cta-header-container'>
              <div className='curvedline__container'>
                <img className='curvedline' src={curvedline} alt='' />
              </div>
              <h1 className='hero__cta-title'>
                <span className='hero__cta-title_regular'>A </span>
                super solution
                <span className='hero__cta-title_regular'> for your </span>
                business.
              </h1>
            </div>
            <p className='hero__cta-text'>
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </p>
            <button className='request-beta_primary'>
              Request Beta Access
            </button>
            <div>
              <img
                src={heroImage}
                className='hero__image'
                alt='landscape image of a mobile phone'
              />
            </div>
          </div>
          <div className='hero__stat-container'>
            <ul className='hero__stats'>
              <li className='hero__stat'>
                <h3 className='hero__stat-number'>2K+</h3>
                <p className='hero__stat-name'>companies</p>
              </li>
              <li className='hero__stat'>
                <h3 className='hero__stat-number'>8</h3>
                <p className='hero__stat-name'>languages</p>
              </li>
              <li className='hero__stat'>
                <h3 className='hero__stat-number'>1.2M</h3>
                <p className='hero__stat-name'>leads</p>
              </li>
            </ul>
          </div>
        </section>

        <section className='testimonial'>
          <div className='testimonial__image-container'>
            <img
              className='testimonial__image'
              src={cmoImage}
              alt='jeremy robinson'
            />
            <img className='testimonial__pattern' src={patternBlur} alt='' />
          </div>
          <div className='testimonial__curvedLine'>
            <img src={smallLine} alt='' />
          </div>
          <div className='testimonial__content'>
            <h2 className='testimonial__content-title'>
              <span className='testimonial__content-title_regular'>
                it just{' '}
              </span>
              works.
            </h2>
            <figure className='testimonial__content-quote-container'>
              <blockquote className='testimonial__content-quote'>
                “I really like how it is an all-in-one solution that handle many
                of the tasks that you would normally need separate tools to do
                the same job. This thing is a miracle worker.”
              </blockquote>
              <figcaption className='testimonial__content-caption'>
                JEREMY ROBINSON
                <span className='testimonial__content-caption_span'>
                  CMO, FYLO
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='footer__container'>
          <img className='footer__logo' src={logo} alt='footer logo' />
          <p className='footer__copyright'>Copyright - Suite</p>
          <ul className='footer__social-icons'>
            <li>
              <button className='social-icon__button'>
                <img src={fb} alt='' className='social-icon' />
              </button>
            </li>

            <li>
              <button className='social-icon__button'>
                <img src={tw} alt='' className='social-icon' />
              </button>
            </li>
            <li>
              <button className='social-icon__button'>
                <img src={inst} alt='' className='social-icon' />
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
