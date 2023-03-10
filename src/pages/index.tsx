/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import styles from "@/styles/Home.module.css"

import Carousel from "react-bootstrap/Carousel"

import { Button, IconButton } from "@mui/material"
import LoyaltyIcon from "@mui/icons-material/Loyalty"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import FavoriteIcon from "@mui/icons-material/Favorite"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function Home() {
	return (
		<>
			<Head>
				<title>Ana papel - Brindes personalizados</title>
				<meta
					name="description"
					content="Artesanato e brindes personalizados, fazemos entrega para todo o territorio nacional"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpg" />
			</Head>
			<main className={styles.main}>
				<header className={styles.header}>
					<Carousel
						nextLabel={false}
						prevLabel={false}
						interval={3000}
						className={styles.carroucel}>
						<Carousel.Item>
							<img src="/card_pen.jpg" alt="Card com balas e lápis" />
						</Carousel.Item>
						<Carousel.Item>
							<img src="/calendar.jpg" alt="Calendário de geladeira" />
						</Carousel.Item>
						<Carousel.Item>
							<img src="/card_candy.jpg" alt="Card com balas" />
						</Carousel.Item>
						<Carousel.Item>
							<img src="/mug.jpg" alt="Caneca personalizadas" />
						</Carousel.Item>
					</Carousel>
					<h1>Presentes, brindes e mimos com personalidade</h1>
					<section className={styles.store}>
						<div className={styles.buttonsContainer}>
							<div className={styles.buttons}>
								<Button
									disableElevation
									fullWidth
									color="secondary"
									variant="contained"
									target="_blank"
									href="https://wa.me/c/559284580339">
									Loja online
								</Button>
							</div>
							<div className={styles.buttons}>
								<Button
									disableElevation
									fullWidth
									color="primary"
									variant="contained"
									target="_blank"
									href="https://wa.me/message/V623RY5K4SCIM1">
									Atendimento
								</Button>
							</div>
						</div>
					</section>
				</header>
				<section className={styles.features}>
					<div className={styles.feature}>
						<h3>
							<div className={styles.icon}>
								<FavoriteIcon />
							</div>
							Presentei quem você ama
						</h3>
						<span>
							Presentear aqueles que você ama é uma forma de demonstração de
							amor, carinho, e fortalecimento dos laços emocionais. Isso pode
							trazer felicidade e alegria tanto para quem dá quanto para quem
							recebe o presente e nada como adicionar personalidade neste gesto
							e ajudar a construir memórias positivas e duradouras.
						</span>
					</div>
					<div className={styles.feature}>
						<h3>
							<div className={styles.icon}>
								<LoyaltyIcon />
							</div>
							Fidelize seus clientes
						</h3>
						<span>
							Fidelizar clientes é fundamental para ter um negocio de sucesso,
							com isso você não só garante a satisfação do cliente como também o
							faz ter um produto unico e especial com a cara do seu produto.
						</span>
					</div>
					<div className={styles.feature}>
						<h3>
							<div className={styles.icon}>
								<VolunteerActivismIcon />
							</div>
							Conquiste seus funcionários
						</h3>
						<span>
							Fidelizar funcionários aumenta a satisfação, motivação e lealdade
							deles, o que resulta em melhor desempenho, menos rotatividade e
							menores custos de recrutamento e treinamento. e brindes com a cara
							da sua empresa podem ser muito bem associados.
						</span>
					</div>
				</section>

				<section className={styles.pages}>
					<div>
						<h2>Nossas redes sociais</h2>
					</div>
					<IconButton
						sx={{ marginBottom: "20px", marginInline: "5px" }}
						href="https://wa.me/message/V623RY5K4SCIM1"
						size="small">
						<WhatsAppIcon
							sx={{
								color: "#e88f9e",
								fontSize: "50px",
							}}
						/>
					</IconButton>
					<IconButton
						sx={{ marginBottom: "20px", marginInline: "5px" }}
						href="https://www.instagram.com/anapapel.personalizados/"
						size="small">
						<InstagramIcon
							sx={{
								color: "#e88f9e",
								fontSize: "50px",
							}}
						/>
					</IconButton>
				</section>
				<footer className={styles.footer}>
					<span>
						Copyright® Ana papel - brindes personalizados - 2020. Todos os
						direitos reservados.
					</span>
				</footer>
			</main>
		</>
	)
}
