import { render, screen } from '@testing-library/react'

describe('Projetos page', () => {
	afterEach(() => {
		jest.resetModules()
	})

	it('exposes metadata with the page title and description (FR-5)', async () => {
		const { metadata } = await import('./page')

		expect(metadata.title).toBe('Projetos — Luan dos Santos')
		expect(metadata.description).toEqual(expect.any(String))
	})

	it('renders a card for every registered project (happy path)', async () => {
		jest.doMock('../../data/projects', () => ({
			projects: [
				{
					id: 'a',
					name: 'Projeto A',
					description: 'Desc A',
					technologies: ['React'],
					repoUrl: 'https://example.com/a',
				},
				{
					id: 'b',
					name: 'Projeto B',
					description: 'Desc B',
					technologies: ['Node.js'],
					demoUrl: 'https://example.com/b',
				},
			],
		}))
		const { default: Projetos } = await import('./page')

		render(<Projetos />)

		expect(
			screen.getByRole('heading', { level: 1, name: 'Projetos' }),
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: 'Projeto A' }),
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: 'Projeto B' }),
		).toBeInTheDocument()
		expect(
			screen.getByRole('region', { name: 'Lista de projetos' }),
		).toBeInTheDocument()
	})

	it('renders a friendly empty state when there are no projects (edge case)', async () => {
		jest.doMock('../../data/projects', () => ({ projects: [] }))
		const { default: Projetos } = await import('./page')

		render(<Projetos />)

		expect(
			screen.getByText('Nenhum projeto por aqui ainda.'),
		).toBeInTheDocument()
		expect(
			screen.queryByRole('region', { name: 'Lista de projetos' }),
		).not.toBeInTheDocument()
	})
})
