'use client'

import NextLink from 'next/link'
import type { AnchorHTMLAttributes, ReactNode, Ref } from 'react'
import { formatClassName } from '@/utils'
import styles from './Link.module.scss'

export type LinkVariant = 'primary' | 'secondary' | 'tertiary' | 'plain'

export type LinkSize = 'sm' | 'md' | 'lg'

export type LinkUnderline = 'none' | 'hover' | 'always'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	variant?: LinkVariant
	size?: LinkSize
	underline?: LinkUnderline
	startIcon?: ReactNode
	endIcon?: ReactNode
	external?: boolean
	disabled?: boolean
	ref?: Ref<HTMLAnchorElement>
}

const EXTERNAL_HREF_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i

const isExternalHref = (href: string) => EXTERNAL_HREF_PATTERN.test(href)

const Link = ({
	children,
	href,
	variant = 'primary',
	size = 'md',
	underline = 'hover',
	startIcon,
	endIcon,
	external,
	disabled = false,
	className,
	target,
	rel,
	onClick,
	ref,
	'aria-label': ariaLabel,
	...rest
}: LinkProps) => {
	const isExternal = external ?? isExternalHref(href)
	const isIconOnly = !children && Boolean(startIcon || endIcon)

	const computedTarget = target ?? (isExternal ? '_blank' : undefined)
	const computedRel =
		rel ?? (computedTarget === '_blank' ? 'noopener noreferrer' : undefined)

	const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'] = (
		event,
	) => {
		if (disabled) {
			event.preventDefault()
			event.stopPropagation()
			return
		}
		onClick?.(event)
	}

	const sharedProps = {
		ref,
		className: formatClassName(
			styles.link,
			styles[`variant-${variant}`],
			styles[`size-${size}`],
			styles[`underline-${underline}`],
			isIconOnly ? styles.iconOnly : undefined,
			disabled ? styles.disabled : undefined,
			className,
		),
		target: computedTarget,
		rel: computedRel,
		onClick: handleClick,
		'aria-label': ariaLabel,
		'aria-disabled': disabled || undefined,
		'data-variant': variant,
		'data-size': size,
		'data-external': isExternal || undefined,
		tabIndex: disabled ? -1 : rest.tabIndex,
	}

	const content = (
		<>
			{startIcon && (
				<span className={styles.icon} aria-hidden="true">
					{startIcon}
				</span>
			)}

			{children && <span className={styles.label}>{children}</span>}

			{endIcon && (
				<span className={styles.icon} aria-hidden="true">
					{endIcon}
				</span>
			)}
		</>
	)

	if (isExternal) {
		return (
			<a href={href} {...rest} {...sharedProps}>
				{content}
			</a>
		)
	}

	return (
		<NextLink href={href} {...rest} {...sharedProps}>
			{content}
		</NextLink>
	)
}

export { Link }
