import React from "react";
import { motion } from "framer-motion";

const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"ECMAScript",
	"React",
	"jQuery",
	"Bootstrap",
	"Material UI",
	"Tailwind CSS",
	"Node.js",
	"Nest.js",
	"Express.js",
	"PHP",
	"Python",
	"MySQL",
	"MongoDB",
	"Jest",
	"SaaS",
	"Versionamento de código",
	"Photoshop",
	"Illustrator",
	"Figma",
	"SketchUp",
	"Blender",
	"Scrum",
	"Metodologias Ágeis",
	"Git/GitHub",
	"SEO",
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const fadeInTop = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

const Skills = React.forwardRef((_, ref) => {
	return (
		<motion.div ref={ref} initial="hidden" whileInView="visible" viewport={{ once: true, amout: 0.2}} variants={fadeInTop}>
			<div className="skills">
				<h2 className="subtitle">Competências</h2>

				<div className="skills__container">
					<motion.ul
						className="skills__list"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						{skillsData.map((skill, index) => (
							<motion.li key={skill} className="skills__list-item" variants={itemVariants}>
								<span> {skill} </span>
								{index < skillsData.length - 1 && <em> • </em>}
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
			<div className="skills__wave"></div>
		</motion.div>
	);
});

export default Skills;
