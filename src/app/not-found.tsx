import Link from "next/link";

export default function PageNotFound() {
  return (
    <div style={{
      display:'grid',
      height: '100vh',
      placeItems:'center'
    }}>
      <div style={{textAlign:'center'}}>
        <h1>404 - Page Not Found</h1>
        <Link href='/' style={{background:'#3A98B9', padding:'0.4rem', color:'white', textDecoration:'none'}}>home page</Link>
      </div>
    </div>
  )
}