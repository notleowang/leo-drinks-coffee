import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
	return (
		<div className="flex flex-col gap-y-36">
			<div className="flex justify-center">
				<Image src={'/logo.svg'} alt="Logo" width="200" height="200" />
			</div>

			<div className="flex flex-col gap-y-10 items-center font-semibold">
				<Link className="hover:text-primary transition-colors" href="/about">ABOUT</Link>
				<Link className="hover:text-primary transition-colors" href="/entries">ENTRIES</Link>
				<p className="text-black/25">MAP (WIP)</p>
				<Link className="hover:text-primary transition-colors" href="/method">METHOD</Link>
				<Link className="hover:text-primary transition-colors" href="/contact">CONTACT</Link>
			</div>

			<div className="flex flex-row gap-x-2 justify-center">
				<a className="text-secondary hover:text-primary transition-colors" href="https://github.com/notleowang" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18.058 17.611">
						<path id="github" d="M9.029.3a9.03,9.03,0,0,0-2.855,17.6c.451.085.617-.194.617-.434,0-.214-.008-.783-.011-1.535-2.512.545-3.041-1.211-3.041-1.211a2.393,2.393,0,0,0-1-1.321c-.818-.56.063-.549.063-.549a1.893,1.893,0,0,1,1.383.93,1.924,1.924,0,0,0,2.63.751,1.925,1.925,0,0,1,.572-1.208c-2.005-.226-4.113-1-4.113-4.462A3.483,3.483,0,0,1,4.2,6.432a3.21,3.21,0,0,1,.079-2.39s.756-.242,2.483.925a8.513,8.513,0,0,1,4.515,0c1.716-1.168,2.472-.925,2.472-.925a3.3,3.3,0,0,1,.09,2.39,3.5,3.5,0,0,1,.925,2.423c0,3.469-2.111,4.232-4.12,4.454a2.162,2.162,0,0,1,.609,1.67c0,1.208-.011,2.179-.011,2.472,0,.237.158.519.621.429A9.018,9.018,0,0,0,9.029.3" transform="translate(0 -0.297)" fill="currentColor" />
					</svg>
				</a>
				<a className="text-secondary hover:text-primary transition-colors" href="https://x.com/notleowang" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 19.484 17.611">
						<path id="x" d="M15.345,1.153h2.988L11.8,8.614l7.679,10.15H13.472L8.763,12.607,3.374,18.764H.385l3.452-3.946,3.529-4.034L0,1.154H6.165l4.256,5.628ZM14.3,16.977h1.655L5.266,2.847H3.489Z" transform="translate(0 -1.153)" fill="currentColor" />
					</svg>
				</a>
			</div>
		</div>
	);
}