import { UseOnline } from "./OnlineHook";

export default function Online () {
  const isOnline = UseOnline();

  return (
    <div className="p-2 rounded-full">
      {isOnline ? <span className="text-green-500 font-bold">Online</span> : <span className="text-red-500 font-bold">Offline</span>}
    </div>
  );
};
