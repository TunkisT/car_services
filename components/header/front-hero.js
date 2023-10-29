import Link from 'next/link';
const FrontHero = () => {
  return (
    <section className='section-front-hero'>
      <div className='container'>
        <div className='front-hero'>
          <div className='front-hero-section front-hero-text'>
            <h1>Chip Tuning Files Online & ECU Remapping </h1>
            <p>We offer only the highest possible custom remap tuning files! </p>
            <div className='flex-container'>
              <Link href='/vps/kvm-vps'>
                <a className='button button-primary'>Vehicle list</a>
              </Link>
              <Link href='/dedicated'>
                <a className='button button-secondary'>Prices</a>
              </Link>
            </div>
          </div>
          {/* front-hero-text */}
          <div className='front-hero-section front-hero-image'>
            <img
              className='hero-image'
              src='/images/hero-image.svg'
              alt='hero image'
            />
          </div>
          {/* front-hero-image */}
        </div>
      </div>
    </section>
  );
};
export default FrontHero;
