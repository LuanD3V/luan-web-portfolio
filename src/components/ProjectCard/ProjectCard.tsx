import Image from 'next/image'
import { Link } from '@/components/Link'
import type { Project } from '@/data/projects'
import { formatClassName } from '@/utils'
import styles from './ProjectCard.module.scss'

export interface ProjectCardProps {
	project: Project
	className?: string
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
	const { name, description, technologies, imageUrl, repoUrl, demoUrl } =
		project

	return (
		<article className={formatClassName(styles.card, className)}>
			<div className={styles.media}>
				{imageUrl ? (
					<Image
						className={styles.image}
						src={imageUrl}
						alt={name}
						fill
						sizes="(max-width: 600px) 100vw, 33vw"
					/>
				) : (
					<div className={styles.placeholder} aria-hidden="true" />
				)}
			</div>

			<div className={styles.body}>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.description}>{description}</p>

				{technologies.length > 0 && (
					<ul className={styles.technologies}>
						{technologies.map((technology) => (
							<li key={technology} className={styles.tag}>
								{technology}
							</li>
						))}
					</ul>
				)}

				{(repoUrl || demoUrl) && (
					<div className={styles.links}>
						{repoUrl && (
							<Link
								href={repoUrl}
								external
								variant="primary"
								aria-label={`Repositório do projeto ${name}`}
							>
								Repositório
							</Link>
						)}
						{demoUrl && (
							<Link
								href={demoUrl}
								external
								variant="secondary"
								aria-label={`Demo do projeto ${name}`}
							>
								Demo
							</Link>
						)}
					</div>
				)}
			</div>
		</article>
	)
}

export { ProjectCard }
