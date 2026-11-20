import { AnchorHTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

export type ButtonVariant = 'ink' | 'orange' | 'ghost' | 'ghostLight'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: ReactNode
}

const variants = {
  ink: css`
    background: var(--text);
    color: var(--text-inverse);
    border-color: var(--text);

    &:hover {
      background: var(--orange);
      border-color: var(--orange);
      color: var(--ink);
    }
  `,
  orange: css`
    background: var(--orange);
    color: var(--ink);
    border-color: var(--orange);

    &:hover {
      background: var(--white);
      border-color: var(--white);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--text);
    border-color: var(--text);

    &:hover {
      background: var(--text);
      color: var(--text-inverse);
    }
  `,
  ghostLight: css`
    background: transparent;
    color: var(--white);
    border-color: rgba(255, 255, 255, 0.5);

    &:hover {
      background: var(--white);
      border-color: var(--white);
      color: var(--ink);
    }
  `,
}

export default function Button({ variant = 'ink', children, ...rest }: Props) {
  return (
    <Anchor $variant={variant} {...rest}>
      {children}
    </Anchor>
  )
}

export const Anchor = styled.a<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.95rem 1.4rem 1rem;
  border: 1px solid transparent;
  border-radius: 1000px;
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  &:active {
    transform: scale(0.97);
  }

  ${({ $variant }) => variants[$variant]}
`
