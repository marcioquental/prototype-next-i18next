import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <Link href="/welcome" prefetch={false}>Welcome Page</Link>
          <Link href="/users" prefetch={false}>Users Page</Link>
        </nav>

        <h1>Home Page</h1>
      </main>
    </div>
  )
}
