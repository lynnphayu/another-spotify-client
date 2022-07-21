import React, { ReactNode } from 'react';

export default function ButtonWithIcon({
  svgIcon,
  text,
  onClick
}: {
  svgIcon: ReactNode;
  text: string;
  onClick: () => unknown;
}) {
  return (
    <div
      className="cursor-pointer w-full p-2 border-2 rounded-md shadow-sm hover:border-green-500 justify-end content-around flex flex-wrap"
      onClick={onClick}>
      <div className="w-5/6 flex flex-nowrap justify-center content-center items-center">
        {text}
      </div>
      <div className="w-1/6 flex flex-nowrap justify-center content-center items-center border-l-2">
        {svgIcon}
      </div>
    </div>
  );
}
