'use client';

import { useSession, signOut } from "next-auth/react";

function Dashboard() {
    const { data: session, status } = useSession();

    if (status === "loading") {
      return <p>Loading...</p>;
    } 

    if (!session) {
      return <p>Not signed in</p>;
    }   
    return (
    <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut({ callbackUrl: "/signin"})}>Sign out</button>
        <div>dashboard page</div>
    </>
    );
}

export default Dashboard;
