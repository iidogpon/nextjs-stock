"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = { children: React.ReactNode };

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (path === "/") router.push("/stock");
  }, [path]);

  if (path === "/") return null;

  return <div>{children}</div>;
};

export default AuthProvider;
