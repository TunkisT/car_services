import Head from 'next/head';
import CardFeaturesDedicated from '../components/elements/card-features-dedicated';
import FaqDedicated from '../components/elements/faq/faq-dedicated';
import Header from '../components/header/Header';
import PageHeader from '../components/header/page-header';
export default function Dedicated() {
  return (
    <>
      <Head>
        <title>PRICING</title>
      </Head>
      <header className='header header-page'>
        <Header />
      </header>
      <main className='main'>
        <div className='container'>
          <div className='section'>
            <h3>Diesel Servises</h3>
            <div className='bg-light-secondary box'>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>STAGE 1</h4>
                </div>
                <div className='flex-10'>50 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>STAGE 2-3</h4>
                </div>
                <div className='flex-10'>80 - 200 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>EGR OFF</h4>
                </div>
                <div className='flex-10'>30 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>DPF OFF</h4>
                </div>
                <div className='flex-10'>30 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>ADBLUE OFF</h4>
                </div>
                <div className='flex-10'>30 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>DTC OFF</h4>
                </div>
                <div className='flex-10'>20 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>THROTTLE/FLAPS OFF</h4>
                </div>
                <div className='flex-10'>30 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>DTC OFF</h4>
                </div>
                <div className='flex-10'>20 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>OTHER FILE SERVICE</h4>
                </div>
                <div className='flex-10'>CONTACT US</div>
              </div>
              <div>
                <hr />
              </div>
            </div>
          </div>
          {/* section */}
          <div className='section'>
            <h3>Petrol Servises</h3>
            <div className='bg-light-secondary box'>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>STAGE 1</h4>
                </div>
                <div className='flex-10'>100 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>STAGE 2-3</h4>
                </div>
                <div className='flex-10'>100 - 300 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>RPM LIMITER CHANGES</h4>
                </div>
                <div className='flex-10'>30 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>LAUNCH CONTROL</h4>
                </div>
                <div className='flex-10'>50 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>POPS & BANGS</h4>
                </div>
                <div className='flex-10'>50 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>DTC OFF</h4>
                </div>
                <div className='flex-10'>20 €</div>
              </div>
              <div>
                <hr />
              </div>
              <div className='flex-container align-center server-plan'>
                <div className='flex-20'>
                  <h4>OTHER FILE SERVICE</h4>
                </div>
                <div className='flex-10'>CONTACT US</div>
              </div>
              <div>
                <hr />
              </div>
            </div>
          </div>
          {/* section */}
        </div>
      </main>
    </>
  );
}
