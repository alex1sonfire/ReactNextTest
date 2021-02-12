import styles from '../styles/Main.module.sass';
import ServicesFirstBlock from '../components/ServicesFirstBlock.js';
import ServicesSecondBlock from '../components/ServicesSecondBlock.js'

export default function Main() {
	return (
		<div className={styles.container}>
			<ServicesFirstBlock />
			<ServicesSecondBlock />
		</div>
	);
}
