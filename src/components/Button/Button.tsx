import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import { formatClassName } from '@/utils'
import styles from './Button.module.scss'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outlined'
  | 'text'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  startIcon?: ReactNode
  endIcon?: ReactNode
  loading?: boolean
  loadingLabel?: string
  fullWidth?: boolean
  ref?: Ref<HTMLButtonElement>
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  startIcon,
  endIcon,
  loading = false,
  loadingLabel = 'Carregando',
  fullWidth = false,
  disabled,
  className,
  type = 'button',
  ref,
  'aria-label': ariaLabel,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading
  const isIconOnly = !children && Boolean(startIcon || endIcon)

  return (
    <button
      ref={ref}
      type={type}
      className={formatClassName(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        fullWidth ? styles.fullWidth : undefined,
        isIconOnly ? styles.iconOnly : undefined,
        className,
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      aria-label={ariaLabel}
      data-variant={variant}
      data-size={size}
      data-loading={loading}
      {...rest}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        startIcon && (
          <span className={styles.icon} aria-hidden="true">
            {startIcon}
          </span>
        )
      )}

      {children && <span className={styles.label}>{children}</span>}

      {!loading && endIcon && (
        <span className={styles.icon} aria-hidden="true">
          {endIcon}
        </span>
      )}

      {loading && <span className={styles.srOnly}>{loadingLabel}</span>}
    </button>
  )
}

export { Button }
