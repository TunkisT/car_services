import Image from 'next/image';
import Link from 'next/link';
const FooterBlock1 = () => {
  return (
    <div className='footer-block'>
      <div className='site-logo'>
        <Image
          className='logo'
          src='/images/remaplogo.svg'
          width={270}
          height={80}
          alt='hext'
        />
      </div>
      <p>
        Chip Tuning & Online ECU Remapping files service! We offer only the highest
        possible custom remap tuning files!
      </p>
    </div>
  );
};
export default FooterBlock1;
