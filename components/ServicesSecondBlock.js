import styles from '../styles/ServicesBlocks.module.sass';

export default function ServicesSecondBlock() {
	return (
		<section className={styles.services}>
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
				<div className={styles.services__items}>
					<div className={styles['services__items-top']}>
						<div className={styles['services__items-top-item']}>
							<div className={styles['services__items-top-item-circle']}></div>
							<div className={styles['services__items-top-item-text']}>
								<p className={'bold'}>Branding</p>
								<p className={'regular'}>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
								</p>
							</div>
						</div>
						<div className={styles['services__items-top-item']}>
							<div className={styles['services__items-top-item-circle']}></div>
							<div className={styles['services__items-top-item-text']}>
								<p className={'bold'}>Design</p>
								<p className={'regular'}>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
								</p>
							</div>
						</div>
					</div>

					<div className={styles['services__items-bottom']}>
						<div className={styles['services__items-top-item']}>
							<div className={styles['services__items-top-item-circle']}></div>
							<div className={styles['services__items-top-item-text']}>
								<p className={'bold'}>Development</p>
								<p className={'regular'}>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
								</p>
							</div>
						</div>
						<div className={styles['services__items-top-item']}>
							<div className={styles['services__items-top-item-circle']}></div>
							<div className={styles['services__items-top-item-text']}>
								<p className={'bold'}>Rocket Science</p>
								<p className={'regular'}>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
