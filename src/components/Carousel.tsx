import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styles from "@/styles/Home.module.css"

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div className={styles.carrousel}>
				<Carousel showThumbs={false}>
					<div>
						<img src="/card_pen.jpg" alt="Card com balas e lápis" />
						<p className="legend">Card com balas e lápis</p>
					</div>
					<div>
						<img src="/calendar.jpg" alt="Calendário de geladeira" />
						<p className="legend">Calendários de geladeira</p>
					</div>
					<div>
						<img src="/card_candy.jpg" alt="Card com balas" />
						<p className="legend">Card com balas simples</p>
					</div>
					<div>
						<img src="/mug.jpg" alt="Caneca personalizadas" />
						<p className="legend">Canecas personalizadas</p>
					</div>
				</Carousel>
			</div>
		)
	}
}
