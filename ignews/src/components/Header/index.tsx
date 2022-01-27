import styles from './styles.module.scss'

import Image from 'next/image'

import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          width={120}
          height={50}
          src='/images/ig.news.svg'
          alt='ig.news'
        />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
