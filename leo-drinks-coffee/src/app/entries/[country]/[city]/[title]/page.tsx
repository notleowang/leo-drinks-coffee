import Navbar from "@/app/ui/navbar"

export default async function Page({
    params,
}: {
    params: Promise<{ country: string; city: string; title: string; }>
}) {
    const { country, city, title } = await params
    return (
        <div>
            <Navbar />
            {country}{city}
            {title}
        </div>
    )
}