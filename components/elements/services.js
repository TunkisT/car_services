import Link from 'next/link';
import { ServicesData } from '../data/ServicesData';
const Services = () => {
  return (
    <div className='section'>
      <div className='section-title'>
        <h2>EcuRemap services</h2>
      </div>
      <div className='cards'>
        {ServicesData.map((item) => (
          <div key={item.id} className='card'>
            <div className='card-image'>
              <img src={item.image} alt={item.title} />
            </div>
            <h4 className='card-ttile'>{item.title}</h4>
            <div className='card-text'>{item.text}</div>
            <div className='bg-light-secondary color-secondary box'>
              <div>From {item.price}</div>
              <div>
                <Link href={item.link}>View plans</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
