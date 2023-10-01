import styles from './NavButton.module.css'
import Link from 'next/link'
export const NavButton = () => {
    return (
        
            <div className={styles.content}>
                <button>
                    <Link href="/">Home</Link>
                </button>
                <button>
                    <Link href="/community">Comunidade</Link>
                </button>
                <button>
                    <Link href="/">Home</Link>
                </button>
                <button>
                    <Link href="/">Home</Link>
                </button>
            </div>
    )
}