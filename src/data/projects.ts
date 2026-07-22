export interface Project {
	/** Identificador único e estável (kebab-case) — futuro slug de detalhe */
	id: string
	name: string
	description: string
	/** Tecnologias exibidas como tags, na ordem de relevância */
	technologies: string[]
	/** Caminho em /public ou URL absoluta; opcional (card usa placeholder) */
	imageUrl?: string
	repoUrl?: string
	demoUrl?: string
	/** Destaque futuro (ordenação); default false */
	featured?: boolean
}

export const projects: Project[] = [
	{
		id: 'portfolio-web',
		name: 'Portfólio Web',
		description:
			'Site pessoal construído com Next.js 16 e React 19, usando SCSS Modules e tokens de design inspirados no Material Design 3.',
		technologies: ['Next.js', 'React', 'TypeScript', 'SCSS'],
		repoUrl: 'https://github.com/LuanD3V/luan-web-portfolio',
		featured: true,
	},
	{
		id: 'design-system',
		name: 'Design System',
		description:
			'Biblioteca de componentes reutilizáveis com tokens de cor, espaçamento e tipografia, cobrindo temas claro e escuro.',
		technologies: ['React', 'TypeScript', 'Storybook'],
		repoUrl: 'https://github.com/LuanD3V/design-system',
		demoUrl: 'https://design-system.luan.dev',
	},
	{
		id: 'api-service',
		name: 'API Service',
		description:
			'Serviço de backend com autenticação e testes automatizados, seguindo boas práticas de arquitetura em camadas.',
		technologies: ['Node.js', 'TypeScript', 'Jest'],
		repoUrl: 'https://github.com/LuanD3V/api-service',
	},
]
