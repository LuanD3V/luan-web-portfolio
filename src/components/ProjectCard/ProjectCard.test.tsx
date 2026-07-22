import { render, screen } from '@testing-library/react'
import type { Project } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

const baseProject: Project = {
	id: 'sample-project',
	name: 'Projeto Exemplo',
	description: 'Uma descrição de exemplo do projeto.',
	technologies: ['React', 'TypeScript'],
	imageUrl: '/projects/sample.png',
	repoUrl: 'https://github.com/example/sample',
	demoUrl: 'https://example.com',
}

describe('ProjectCard', () => {
	it('renders name, description and technologies (US-1)', () => {
		render(<ProjectCard project={baseProject} />)

		expect(
			screen.getByRole('heading', { name: 'Projeto Exemplo' }),
		).toBeInTheDocument()
		expect(
			screen.getByText('Uma descrição de exemplo do projeto.'),
		).toBeInTheDocument()
		expect(screen.getByText('React')).toBeInTheDocument()
		expect(screen.getByText('TypeScript')).toBeInTheDocument()
	})

	it('opens the repository link in a new tab with safe rel (US-2)', () => {
		render(<ProjectCard project={baseProject} />)

		const repoLink = screen.getByRole('link', {
			name: 'Repositório do projeto Projeto Exemplo',
		})
		expect(repoLink).toHaveAttribute(
			'href',
			'https://github.com/example/sample',
		)
		expect(repoLink).toHaveAttribute('target', '_blank')
		expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer')
	})

	it('does not render the demo link when demoUrl is absent (US-2)', () => {
		const { demoUrl, ...withoutDemo } = baseProject
		render(<ProjectCard project={withoutDemo} />)

		expect(
			screen.queryByRole('link', { name: /Demo do projeto/ }),
		).not.toBeInTheDocument()
		expect(
			screen.getByRole('link', { name: /Repositório do projeto/ }),
		).toBeInTheDocument()
	})

	it('renders the project image with the name as alt text', () => {
		render(<ProjectCard project={baseProject} />)

		expect(
			screen.getByRole('img', { name: 'Projeto Exemplo' }),
		).toBeInTheDocument()
	})

	it('renders a placeholder instead of an image when imageUrl is absent (error scenario)', () => {
		const { imageUrl, ...withoutImage } = baseProject
		const { container } = render(<ProjectCard project={withoutImage} />)

		expect(screen.queryByRole('img')).not.toBeInTheDocument()
		expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
	})

	it('renders long descriptions with the truncating description class (edge case)', () => {
		const longProject: Project = {
			...baseProject,
			description: 'palavra '.repeat(120).trim(),
		}
		render(<ProjectCard project={longProject} />)

		const description = screen.getByText(/palavra/)
		expect(description.className).toMatch(/description/)
	})
})
