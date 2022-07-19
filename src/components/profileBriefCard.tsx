import React from "react";

export default function ProfileBriefCard({ profile }: { profile: unknown }) {
  return (
    <div className="cursor-pointer justify-center content-center flex flex-nowrap border-2 p-2 rounded-md shadow-sm hover:border-green-500">
      <div className="w-2/6 content-center flex flex-wrap justify-center">
        <div
          className="w-24 h-24 rounded-full border-2 bg-local bg-center bg-contain"
          style={{
            backgroundImage:
              "url(https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1022768947785978&height=300&width=300&ext=1614252702&hash=AeRLpcsZEVIfPCQF3Pc)",
          }}
        ></div>
      </div>
      <div className="w-4/6 p-2 flex flex-wrap content-center">
        <p className="w-full tracking-wide font-medium">Lin Phay Oo</p>
        <p className="w-full tracking-wide">lynnphayu@icloud.com</p>
        <p className="w-full tracking-wide">US</p>
      </div>
    </div>
  );
}
