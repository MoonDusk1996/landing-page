import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { Button, Typography } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import Carousel from "../components/Carousel"
import LoyaltyIcon from "@mui/icons-material/Loyalty"
import Link from "next/link"

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
				<header>
					<Carousel />
					<h1>Presentes e brindes com a sua personalidade</h1>
				</header>
				<section className={styles.features}>
					<div className={styles.feature}>
						<FavoriteIcon
							style={{
								color: "rgb(255,111,178)",
								marginTop: "17px",
								marginRight: "5px",
							}}
						/>
						<div className={styles.featureDescription}>
							<h3>Presentei quem você ama</h3>
							<span>
								Presentear aqueles que você ama é uma forma de demonstração de
								amor, carinho, e fortalecimento dos laços emocionais. Isso pode
								trazer felicidade e alegria tanto para quem dá quanto para quem
								recebe o presente e nada como adicionar personalidade neste
								gesto e ajudar a construir memórias positivas e duradouras.
							</span>
						</div>
					</div>
					<div className={styles.feature}>
						<LoyaltyIcon
							style={{
								color: "rgb(255,111,178)",
								marginTop: "17px",
								marginRight: "5px",
							}}
						/>
						<div className={styles.featureDescription}>
							<h3>Fidelize clientes</h3>
							<span>
								Fidelizar clientes é fundamental para ter um negocio de sucesso,
								com isso você não só garante a satisfação do cliente como também
								o faz ter um produto unico e especial com a cara do seu produto.
							</span>
						</div>
					</div>
					<div className={styles.feature}>
						<VolunteerActivismIcon
							style={{
								color: "rgb(255,111,178)",
								marginTop: "17px",
								marginRight: "5px",
							}}
						/>
						<div className={styles.featureDescription}>
							<h3>Conquiste seus funcionários</h3>
							<span>
								Fidelizar funcionários aumenta a satisfação, motivação e
								lealdade deles, o que resulta em melhor desempenho, menos
								rotatividade e menores custos de recrutamento e treinamento.
								Além disso, funcionários felizes e engajados tendem a oferecer
								um atendimento mais positivo aos clientes, melhorando a imagem
								da empresa.
							</span>
						</div>
					</div>
				</section>
				<section className={styles.contact}>
					<h2>Atendimento 100% online</h2>
					<div className={styles.buttonsContainer}>
						<Button
							disableElevation
							fullWidth
							color="secondary"
							variant="contained">
							<Link target="_blank" href="https://wa.me/message/V623RY5K4SCIM1">
								Atendimento
							</Link>
						</Button>
						<Button
							disableElevation
							fullWidth
							color="secondary"
							variant="contained">
							<Link
								target="_blank"
								href="https://instagram.com/anapapel.personalizados">
								Instagram
							</Link>
						</Button>
						<Button
							disableElevation
							fullWidth
							color="secondary"
							variant="contained">
							<Link target="_blank" href="https://wa.me/c/559284580339">
								Nosso catálogo
							</Link>
						</Button>
					</div>
				</section>
			</main>
			<footer>
				<span>
					Copyright® Ana papel - brindes personalizados - 2020. Todos os
					direitos reservados.
				</span>
			</footer>
		</>
	)
}
