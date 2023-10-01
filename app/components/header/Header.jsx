import { NavButton } from '../navButton/NavButton';
import styles from './Header.module.css';
import Image from 'next/image';
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tittle}>
                <Image src="/kalix.png" alt="Logo" width={80} height={60} />
                <h1>Kal<span>ix</span></h1>
            </div>
            <NavButton />
        </div>
    )
}