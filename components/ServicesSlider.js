import styles from '../styles/ServicesSlider.module.sass';
import Slider from 'react-slick';

export default function ServicesSlider() {
	let settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div className={styles.slider}>
			<Slider {...settings}>
				<div className={styles.slider__item}>
					<div className={styles['slider__item-circle']}>
						<span className={'icon-picture'}></span>
					</div>
					<div className={styles['slider__item-headline'] + ' ' + 'bold'}>Branding</div>
					<div className={styles['slider__item-text'] + ' ' + 'regular'}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
					</div>
				</div>

				<div className={styles.slider__item}>
					<div className={styles['slider__item-circle']}>
						<span className={'icon-picture'}></span>
					</div>
					<div className={styles['slider__item-headline'] + ' ' + 'bold'}>Design</div>
					<div className={styles['slider__item-text'] + ' ' + 'regular'}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					</div>
				</div>

				<div className={styles.slider__item}>
					<div className={styles['slider__item-circle']}>
						<span className={'icon-picture'}></span>
					</div>
					<div className={styles['slider__item-headline'] + ' ' + 'bold'}>Development</div>
					<div className={styles['slider__item-text'] + ' ' + 'regular'}>
						At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.
					</div>
				</div>

				<div className={styles.slider__item}>
					<div className={styles['slider__item-circle']}>
						<span className={'icon-picture'}></span>
					</div>
					<div className={styles['slider__item-headline'] + ' ' + 'bold'}>Rocket Science</div>
					<div className={styles['slider__item-text'] + ' ' + 'regular'}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
					</div>
				</div>
			</Slider>
		</div>
	);
}
