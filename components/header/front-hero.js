import Link from 'next/link';
const FrontHero = () => {
  return (
    <section className='section-front-hero'>
      <div className='container'>
        <div className='front-hero'>
          <div className='front-hero-section front-hero-text'>
            <h1>ONLINE FILE SERVICE FOR CUSTOM HIGH-QUALITY TUNING FILES</h1>
            <p>
              Our online tuning file service include Car Tuning stage 1 and stage 2,
              Vmax off, DPF + EGR off and DTC off. Other solutions that Effective
              Tuning offers are AdBlue off, reprogramming ALS, disabling ACT, E85
              Flexfuel and programming of Hard Cut Limiter for diesel engines. Also,
              software modification for better cold start, Launch Control, Rev
              Limiter, Immo off, MD1 and MG1 tuning and etc.
            </p>
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
