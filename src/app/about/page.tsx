import Image from 'next/image';

import Navbar from "../components/ui/Navbar";

export default function Page() {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col gap-y-16">
				<div>
					<h1>HELLO!</h1>
					<p>My name is Leo and I am 23 years old.</p>

					<div className="flex justify-center items-center py-7">
						<Image className="rounded-lg" src="/me.jpg" width="200" height="200" alt="picture_of_me" />
					</div>

					<p>Welcome to my personal diary where I create entries on my thoughts and experiences of different espresso drinks and coffee shops all across the world.</p>
				</div>

				<div>
					<h1>BACKGROUND</h1>
					<p>I first started getting into coffee and espresso in 2020. </p>
					<p>I am by no means an expert at all. At most I consider myself a very amateur enthusiast.</p>
				</div>

				<div>
					<h1>DISCLAIMER</h1>
					<p>All entries are my own thoughts and opinions. You may disagree with some of my opinions and that is totally fine.</p>
				</div>
			</div>
		</div>
	);
}