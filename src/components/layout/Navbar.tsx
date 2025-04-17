import React from 'react'
import Image from 'next/image'
import { CharacterIcons } from "@/constants/index"
import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

function Navbar() {
    return (
        <div>
            <NavigationMenu className=''>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='about' className='bg-red-600 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-white text-xl hover:bg-red-700 py-1'>
                            <Image
                                src={CharacterIcons.luffy}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>About</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='projects' className='bg-green-600 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-xl hover:bg-green-700 py-1'>
                            <Image
                                src={CharacterIcons.zoro}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>Projects</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='skills' className='bg-orange-600 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-white text-xl hover:bg-orange-700 py-1'>
                            <Image
                                src={CharacterIcons.nami}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>Skills</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='experience' className='bg-yellow-600 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-xl hover:bg-yellow-700 py-1'>
                            <Image
                                src={CharacterIcons.usopp}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>Experience</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='blog' className='bg-blue-800 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-white text-xl hover:bg-blue-900 py-1'>
                            <Image
                                src={CharacterIcons.sanji}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>Blog</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='contact' className='bg-pink-400 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-xl hover:bg-pink-500 py-1'>
                            <Image
                                src={CharacterIcons.chopper}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>Contact</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='room' className='bg-violet-700 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-white text-xl hover:bg-violet-800 py-1'>
                            <Image
                                src={CharacterIcons.robin}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>Room</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='credits' className='bg-cyan-400 flex flex-row justify-center items-center rounded-lg px-3 cursor-pointer text-xl hover:bg-cyan-500 py-1'>
                            <Image
                                src={CharacterIcons.franky}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className='ml-2'>Credits</span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Navbar