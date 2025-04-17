import Navbar from "@/components/layout/Navbar";
import { Switch } from "@/components/ui/switch"
import Image from "next/image";
import { CharacterIcons } from "@/constants/index"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center">
      <header className="w-full h-25 flex flex-row justify-between items-center p-5">
        <Avatar className="">
          <AvatarImage src={CharacterIcons.skull.src} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Navbar />
        <Switch className="w-14 h-8 rounded-full bg-gray-300
             cursor-pointer
             [&>span]:w-7 [&>span]:h-7"/>
      </header>
    </div>
  );
}
