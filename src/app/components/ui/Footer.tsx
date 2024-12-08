export default function Footer() {
	return (
		<div className="mt-24">
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
				<a className="text-secondary hover:text-primary transition-colors" href="https://buymeacoffee.com/notleowang" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
						<path id="buymeacoffee" d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z" fill="currentColor" />
					</svg>
				</a>
			</div>
		</div>
	)
}