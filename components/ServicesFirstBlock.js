import styles from '../styles/ServicesBlocks.module.sass';
import ServicesSlider from '../components/ServicesSlider.js';

export default function ServicesFirstBlock() {
	return (
		<section className={styles.services}>
			<h2 className={styles.headline}>Services</h2>

			<div className={styles.wrapper}>
				<div className={styles.services__headlineWrapper}>
					<h3 className={styles.services__headline}>SERVICES WE PROVIDE</h3>

					<p className={styles['services__main-text']}>
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.
					</p>
					<p className={styles['services__main-text']}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
					</p>
				</div>

				<ServicesSlider />
			</div>
		</section>
	);
}
