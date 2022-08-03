import React from 'react';

export default function Header({ children }: { children: JSX.Element | JSX.Element[] | string }) {
  return <div className="text-lg">{children}</div>;
}
