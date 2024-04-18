import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Halaman Index</h1>

      <Link href="/about">Halaman About</Link> <br />
      <Link href="/posts">Halaman Post</Link>
    </>
  );
}
