import React, { useCallback, forwardRef } from "react";
import photo from "../../assets/img/photo.svg";
import { motion } from "framer-motion";

const About = forwardRef(({ onCvClick }, ref) => {
	const handleCvButtonClick = useCallback(() => {
		onCvClick?.();
	}, [onCvClick]);

	const fadeInRight = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
	};

	const fadeInTop = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
	};

	return (
		<motion.div className="about" ref={ref} initial="hidden" whileInView="visible" viewport={{ once: true, amout: 0.3 }} variants={fadeInTop}>
			<div className="about__container">
				<motion.div
					className="about__container-info"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInRight}>
					<h2 className="subtitle"> Sobre </h2>
					<p className="about__text">
						Minha trajetória profissional iniciou na Engenharia Civil, onde consolidei um perfil analítico, foco em soluções estruturadas e a
						capacidade de coordenar processos complexos sob pressão. Essa base lógica facilitou minha transição para o universo da tecnologia, onde
						hoje atuo como Desenvolvedor Full Stack especializado em Front-end e UX/UI Design, unindo o rigor da engenharia à criatividade digital
						para entregar interfaces que equilibram estética e funcionalidade.
						<br />
						<br />
						Atuei recenemtene como Instrutor de Desenvolvimento no Instituto PROA, onde mentorei novos talentos em React, JavaScript e boas práticas de Clean Code, reforçando minha autoridade técnica e capacidade de comunicação. Minha motivação reside em transformar ideias desafiadoras em	experiências fluidas e escaláveis — desde a pesquisa e prototipagem avançada no Figma até a implementação técnica minuciosa — garantindo sempre soluções com alto valor agregado para o usuário final.
					</p>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="button__blue"
						onClick={handleCvButtonClick}
						aria-label="Abrir currículo">
						Currículo
					</motion.button>
				</motion.div>

				<motion.div
					className="about__container-photo"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInLeft}>
					<motion.img
						className="about__photo"
						src={photo}
						alt="Lucas Alves Pinheiro, UX/UI Designer e Desenvolvedor Front-end"
						animate={{
							y: [2, -2, 2],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</motion.div>
			</div>
		</motion.div>
	);
});

export default About;
