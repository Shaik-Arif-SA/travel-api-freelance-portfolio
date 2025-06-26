"use client"
import React from 'react'
import { Link } from 'react-scroll'
import clsx from 'clsx'

type ScrollLinkProps = {
    children: React.ReactNode |string
    className?: string
    to: string
    [key: string]: any
}

export default function ScrollLink({ children, className, to, ...props }: ScrollLinkProps) {
    return (
        <Link
            className={clsx(className)}
            to={to}
            smooth={true}
            duration={500}
            offset={-80}
            {...props}
        >
            {children}
        </Link>
    )
}

