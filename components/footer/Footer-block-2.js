import Link from 'next/link';
const FooterBlock2 = () => {
  return (
    <div className='footer-block'>
      <ul>
        <li>
          <Link href='/vehicle-list'>VEHICLE LIST</Link>
        </li>
        <li>
          <Link href='/pricing'>PRICING</Link>
        </li>
        <li>
          <Link href='/services'>OUR SERVICES</Link>
        </li>
        <li>
          <Link href='/projects'>PROJECTS</Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterBlock2;
