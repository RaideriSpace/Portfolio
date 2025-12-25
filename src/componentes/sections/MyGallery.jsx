import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

const MyGallery = () => {
	const navigate = useNavigate();

	const handlePortfolioClick = useCallback(() => {
		navigate("/portfolio");
	}, [navigate]);

	// Variantes para o contêiner principal
	const containerVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				// Delay para garantir que o scroll chegue antes da animação terminar
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
	};

	// Variantes para o botão (aparece deslizando de baixo)
	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<motion.div className="gallery" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
			{/* O Carousel entra com o container principal */}
			<Carousel />

			{/* O botão entra com um leve atraso (stagger) para não poluir a visão */}
			<motion.button
				variants={buttonVariants}
				whileHover={{ scale: 1.1, backgroundColor: "#e91e63" }} // Feedback no hover
				whileTap={{ scale: 0.95 }}
				className="button__pink"
				onClick={handlePortfolioClick}
				aria-label="Ir para a página de portfólio">
				Portfólio
			</motion.button>
		</motion.div>
	);
};

export default MyGallery;
