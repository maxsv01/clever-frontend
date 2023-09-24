"use client";
import React, { FC, useEffect, useState } from "react";

const HelloComponent: FC = () => {
  const [username, setUsername] = useState<string | null>("");
  useEffect(() => {
    if (window) {
      setUsername(new URLSearchParams(window.location.search).get("username"));
    }
  }, []);
  return (
    username && <div className="text-center text-[30px]">Hello, {username}</div>
  );
};

export default HelloComponent;
