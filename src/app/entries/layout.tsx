import Providers from "@/lib/providers"

export default function EntriesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Providers>{children}</Providers>
        </section>
    )
}