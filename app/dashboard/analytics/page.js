'use client';

import { getPlatformList } from "@/app/context/PlatformList";

export default function ConnectPage() {
  const { platforms } = getPlatformList();

  platforms.forEach(({ name, data }) => {
    console.log('Connected to:', name);
    console.log('Data:', data);
  });

  return (
    <div>
        {platforms.map(({ name, data }) => (
        <div key={name}>
            <h2>{name}</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre> 
        </div>
        ))}
    </div>
  );
}
