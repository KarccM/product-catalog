import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display:'grid',
      height:'100vh',
      placeItems:'center'
    }}>
      <Link href='/products' style={{
        fontSize: '2.2rem',
        textDecoration:'none',
        border: '1px dashed #eeeeee',
        padding: '2rem',
        color:'#555555',
        cursor:'pointer',
        backgroundColor:'#EEEEEE',
      }}>products</Link>
    </div>
  )
}
