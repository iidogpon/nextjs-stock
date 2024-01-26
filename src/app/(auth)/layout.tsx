"use client";
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const AuthLayout = ({children}: Props) => {
  return (
    <section>{children}</section>
  )
}

export default AuthLayout