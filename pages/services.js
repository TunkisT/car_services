import Head from 'next/head';
import FeaturesEmail from '../components/elements/features-email';
import PricingEmail from '../components/elements/pricing-email';
import Header from '../components/header/Header';
import PageHeader from '../components/header/page-header';
export default function Email() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <header className='header header-page'>
        <Header />
      </header>
      <main className='main'>
        <div className='container'>
          <div className='main-container'>
            <div className='center text-center width-50'>
              <h1>Our professional file service for your car</h1>
            </div>
            <div className='section'>
              <FeaturesEmail />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
