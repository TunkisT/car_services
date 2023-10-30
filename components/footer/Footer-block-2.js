import Link from 'next/link'
const FooterBlock2 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="/hosting/web-hosting">Vehicle list</Link></li>
        <li><Link href="/hosting/reseller-hosting">Prices</Link></li>
        <li><Link href="/hosting/wordpress-hosting">Our services</Link></li>
        <li><Link href="/email">Projects</Link></li>
      </ul>
    </div>
  )
}
export default FooterBlock2;