import type { Metadata } from 'next'
import { ProjectCard } from '@/components'
import { projects } from '@/data/projects'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Projetos — Luan dos Santos',
	description:
		'Projetos em que Luan dos Santos trabalhou, com tecnologias utilizadas e links para o código e demonstrações.',
}

export default function Projetos() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<h1 className={styles.title}>Projetos</h1>
				<p className={styles.subtitle}>
					Uma seleção de projetos em que trabalhei.
				</p>
			</header>

			{projects.length > 0 ? (
				<section className={styles.grid} aria-label="Lista de projetos">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</section>
			) : (
				<p className={styles.empty}>Nenhum projeto por aqui ainda.</p>
			)}
		</main>
	)
}
