import Link from 'next/link';
const FooterBlock3 = () => {
  return (
    <div className='footer-block'>
      <ul>
        <li>
          <Link href='/vps/kvm-vps'>Stage 1</Link>
        </li>
        <li>
          <Link href='/vps/managed-vps'>Stage 2</Link>
        </li>
        <li>
          <Link href='/vps/storage-vps'>Stage 3</Link>
        </li>
        <li>
          <Link href='/dedicated'>Custom stage</Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterBlock3;
