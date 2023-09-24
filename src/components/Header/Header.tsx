import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="fixed bg-slate-500/70 w-full py-3 px-3">
      <Link href={"/"} className="w-fit block">
        <h1 className="text-[30px]">Clever</h1>
      </Link>
    </header>
  );
};

export default Header;
