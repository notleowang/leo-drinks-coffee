import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/ui/Footer';

export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="flex justify-center mb-20">
				<Image src={'/logo.svg'} alt="Logo" width="150" height="150" />
			</div>

			<div className="flex flex-col gap-y-10 items-center font-semibold basis-1/4 py-5">
				<Link className="hover:text-primary transition-colors" href="/about">ABOUT</Link>
				<Link className="hover:text-primary transition-colors" href="/inventory">INVENTORY</Link>
				<Link className="hover:text-primary transition-colors" href="/entries">ENTRIES</Link>
				<p className="text-black/25">MAP (WIP)</p>
				<Link className="hover:text-primary transition-colors" href="/method">METHOD</Link>
				<Link className="hover:text-primary transition-colors" href="/contact">CONTACT</Link>
			</div>

			<Footer />
		</div>
	);
}