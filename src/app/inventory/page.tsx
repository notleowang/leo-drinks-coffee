import Navbar from "../components/ui/Navbar"
import Image from "next/image"

export default function Inventory() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-y-16">
                <div className="text-center">
                    <h1>INVENTORY</h1>
                    <p>Below is my daily brewing gear.</p>
                    <p>All links go to Canadian Retailers.</p>
                </div>

                <div>
                    <h3>ESPRESSO</h3>
                    <div className="flex flex-row gap-3 py-5">
                        <div className="flex-none">
                            <div className="w-64 h-auto bg-primary rounded-xl">
                                <div className="py-4 px-4">
                                    <div className="relative w-full h-56">
                                        <Image className="rounded-xl" src="/df64.jpg" width={300} height={300} alt="df64" />
                                    </div>
                                    <div className="mt-4">
                                        <div className="">
                                            <p className="leading-none font-semibold text-xl">Turin DF64 Gen 2</p>
                                            <p>Grinder</p>
                                        </div>
                                        <div className="text-sm py-4">
                                            <p>- Stock Steel Burrs</p>
                                            <p>- RDT (Ross Droplet Technique)</p>
                                            <p>- No mods</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button className="px-5 py-1 w-full rounded-xl bg-secondary text-white font-semibold">Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-none">
                            <div className="w-64 h-auto bg-primary rounded-xl">
                                <div className="py-4 px-4">
                                    <div className="relative w-full h-56">
                                        <Image className="rounded-xl" src="/bambino.jpg" width={300} height={300} alt="df64" />
                                    </div>
                                    <div className="mt-4">
                                        <div className="">
                                            <p className="leading-none font-semibold text-xl">Breville Bambino</p>
                                            <p>Espresso Machine</p>
                                        </div>
                                        <div className="text-sm py-4">
                                            <p>- No mods</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button className="px-5 py-1 w-full rounded-xl bg-secondary text-white font-semibold">Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>POUR OVER</h3>
                    <div className="flex flex-row gap-2 py-5">
                        <div className="flex-none">
                            <div className="w-36 h-36 border-2 border-primary">

                            </div>
                            <p className="text-center">Turin DF64 Gen 2</p>
                        </div>

                        <div className="flex-none">
                            <div className="w-36 h-36 border-2 border-primary">

                            </div>
                            <p className="text-center">Hario V60 Plastic</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>ACCESSORIES</h3>
                    <div className="flex flex-row gap-2">
                        <div className="flex-none">
                            <div className="w-36 h-36 border-2 border-primary">

                            </div>
                            <p className="text-center">Measuring Scale</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}