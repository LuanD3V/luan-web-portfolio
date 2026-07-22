import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home page', () => {
	it('links to the projects page for internal navigation (US-3)', () => {
		render(<Home />)

		const projectsLink = screen.getByRole('link', { name: 'Projetos' })
		expect(projectsLink).toHaveAttribute('href', '/projetos')
		expect(projectsLink).not.toHaveAttribute('target', '_blank')
	})
})
