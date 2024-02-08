import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Navbar from "./Navbar";

export default async function Nav() {
    const session = await getServerSession(authOptions);
    // const data = session;
    console.log(session?.user);
    // console.log(session);

    return <Navbar user={session?.user} />


}