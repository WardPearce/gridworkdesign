<script lang="ts">
	import {
		ArrowRight,
		Cpu,
		Headphones,
		Laptop,
		Monitor,
		Search,
		ShoppingBag,
		Sparkles,
		Star,
		Truck
	} from '@lucide/svelte';
	import { Badge, Button, Card, Grid, Input } from '../../lib/index';

	type Category = 'All gear' | 'Laptops' | 'Desktops' | 'Accessories';
	type Product = {
		name: string;
		category: Exclude<Category, 'All gear'>;
		description: string;
		price: number;
		was?: number;
		rating: string;
		icon: typeof Laptop;
		label?: string;
	};

	const categories: Category[] = ['All gear', 'Laptops', 'Desktops', 'Accessories'];
	const products: Product[] = [
		{
			name: 'Fieldnote 14',
			category: 'Laptops',
			description: 'A bright idea machine. 14” display, 16 GB memory, all-day battery.',
			price: 1299,
			was: 1499,
			rating: '4.9',
			icon: Laptop,
			label: 'BEST SELLER'
		},
		{
			name: 'Workbench Mini',
			category: 'Desktops',
			description: 'Small footprint. Serious horsepower. Ready for your next big thing.',
			price: 999,
			rating: '4.8',
			icon: Cpu,
			label: 'NEW ARRIVAL'
		},
		{
			name: 'Studio Display 27',
			category: 'Desktops',
			description: 'A little more room to think. Crisp 4K detail with easy height adjust.',
			price: 649,
			rating: '4.7',
			icon: Monitor
		},
		{
			name: 'Sidekick Headphones',
			category: 'Accessories',
			description: 'Your focus soundtrack, minus the tangled cables. 32-hour playtime.',
			price: 149,
			was: 179,
			rating: '4.9',
			icon: Headphones,
			label: 'SAVE $30'
		}
	];

	let category = $state<Category>('All gear');
	let query = $state('');
	let cartCount = $state(0);
	let addedProduct = $state('');
	let visibleProducts = $derived(
		products.filter((product) => {
			const matchesCategory = category === 'All gear' || product.category === category;
			const searchText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
			return matchesCategory && searchText.includes(query.trim().toLowerCase());
		})
	);

	function addToCart(product: Product) {
		cartCount += 1;
		addedProduct = product.name;
		window.setTimeout(() => {
			if (addedProduct === product.name) addedProduct = '';
		}, 1800);
	}
</script>

<svelte:head>
	<title>Byte &amp; Bazaar — Good gear for good ideas</title>
	<meta
		name="description"
		content="Thoughtful computers, everyday tech, and a little more joy in your workspace."
	/>
</svelte:head>

<div class="storefront">
	<div class="announcement">
		<Truck size={16} aria-hidden="true" />
		<p>
			<strong>FREE SHIPPING</strong> on orders over $75 <span class="announcement-divider">/</span> little
			things, delivered fast.
		</p>
	</div>

	<header class="site-header">
		<a class="wordmark" href="/example" aria-label="Byte and Bazaar home">
			<span class="wordmark-mark" aria-hidden="true">b.</span>
			<span>byte <span class="wordmark-amp">&amp;</span> bazaar</span>
		</a>
		<nav class="desktop-nav" aria-label="Main navigation">
			<a href="#shop">Shop all</a>
			<a href="#shop" onclick={() => (category = 'Laptops')}>Laptops</a>
			<a href="#shop" onclick={() => (category = 'Desktops')}>Desktops</a>
			<a href="#promise">Our little promise</a>
		</nav>
		<Button class="cart-button" aria-label={`Shopping bag, ${cartCount} items`}>
			<ShoppingBag size={17} aria-hidden="true" /> <span>Bag</span><span class="cart-count"
				>{cartCount}</span
			>
		</Button>
	</header>

	<main>
		<section class="hero" aria-labelledby="hero-title">
			<div class="hero-copy">
				<p class="eyebrow"><span class="eyebrow-dot"></span> GOOD GEAR, GOOD KARMA</p>
				<h1 id="hero-title">Big ideas<br />need <span>good</span> gear.</h1>
				<p class="hero-description">
					Thoughtful tech for the things you dream up, make, and do. Picked with care. Priced with a
					little joy.
				</p>
				<a class="hero-link" href="#shop"
					>Find your next favorite <ArrowRight size={17} aria-hidden="true" /></a
				>
				<div class="hero-note">
					<Sparkles class="note-sparkle" size={17} aria-hidden="true" /> GOOD TECH. NO GATEKEEPING.
				</div>
			</div>
			<div class="hero-art" aria-label="Illustration of a laptop and desktop monitor" role="img">
				<div class="art-sun"></div>
				<div class="art-sticker sticker-one">IDEA<br />MACHINE</div>
				<div class="art-monitor">
					<div class="monitor-screen">
						<Sparkles class="screen-star" size={62} aria-hidden="true" /><span class="screen-line"
						></span><span class="screen-line short"></span>
					</div>
					<div class="monitor-neck"></div>
					<div class="monitor-base"></div>
				</div>
				<div class="art-laptop">
					<div class="laptop-screen">
						<div class="laptop-window">
							<span></span><span></span><span></span><b>hello,<br />there.</b>
						</div>
					</div>
					<div class="laptop-base"></div>
				</div>
				<div class="art-sticker sticker-two">MAKE<br />SOMETHING</div>
				<div class="art-caption">YOUR DESK CALLED. IT HAS IDEAS.</div>
			</div>
		</section>

		<section class="perks" id="promise" aria-label="Shopping benefits">
			<div>
				<span class="perk-icon">01</span>
				<p><strong>Good stuff only</strong><br />Picked by real humans.</p>
			</div>
			<div>
				<span class="perk-icon">02</span>
				<p><strong>Free, speedy shipping</strong><br />On every order over $75.</p>
			</div>
			<div>
				<span class="perk-icon">03</span>
				<p><strong>Easy-peasy returns</strong><br />30 days to change your mind.</p>
			</div>
		</section>

		<section class="shop-section" id="shop" aria-labelledby="shop-title">
			<div class="shop-heading">
				<div>
					<p class="eyebrow">THE GOOD STUFF</p>
					<h2 id="shop-title">Find your next favorite.</h2>
					<p class="section-intro">Useful, lovely, and ready to get to work.</p>
				</div>
				<label class="search-box" aria-label="Search products">
					<Search size={17} aria-hidden="true" />
					<Input bind:value={query} placeholder="Try “laptop”" aria-label="Search products" />
				</label>
			</div>

			<div class="shop-tools">
				<div class="filters" aria-label="Filter products">
					{#each categories as item (item)}
						<Button
							class={category === item ? 'active-filter' : ''}
							aria-pressed={category === item}
							onclick={() => (category = item)}>{item}</Button
						>
					{/each}
				</div>
				<p class="result-count">
					{visibleProducts.length} lovely {visibleProducts.length === 1 ? 'thing' : 'things'}
				</p>
			</div>

			{#if visibleProducts.length}
				<Grid minColumnWidth="17rem" class="product-grid">
					{#each visibleProducts as product (product.name)}
						<Card class="product-card">
							{#snippet header()}
								<div class="product-card-top">
									<span>{product.category}</span>{#if product.label}<Badge>{product.label}</Badge
										>{/if}
								</div>
							{/snippet}
							<div class="product-art">
								<div class="product-shape">
									<product.icon size={82} strokeWidth={1.25} aria-hidden="true" />
								</div>
								<div class="rating">
									<Star size={14} fill="currentColor" aria-hidden="true" />
									{product.rating} <span>· 120+ reviews</span>
								</div>
							</div>
							<div class="product-info">
								<h3>{product.name}</h3>
								<p>{product.description}</p>
								<div class="product-buy">
									<div class="price">
										${product.price}<span>.00</span>{#if product.was}<del>${product.was}</del>{/if}
									</div>
									<Button variant="alternate" onclick={() => addToCart(product)}
										>{addedProduct === product.name ? 'Added ✓' : 'Add to bag'}</Button
									>
								</div>
							</div>
						</Card>
					{/each}
				</Grid>
			{:else}
				<div class="empty-results">
					<p class="eyebrow">NO MATCHES (YET)</p>
					<h3>Nothing in the goodie drawer.</h3>
					<p>Try another search or browse all gear.</p>
					<Button
						onclick={() => {
							query = '';
							category = 'All gear';
						}}>Show me everything</Button
					>
				</div>
			{/if}
			{#if addedProduct}<p class="cart-status" role="status">
					{addedProduct} added to your bag. You have {cartCount}
					{cartCount === 1 ? 'item' : 'items'}.
				</p>{/if}
		</section>

		<section class="newsletter" aria-labelledby="newsletter-title">
			<div>
				<p class="eyebrow">A GOOD NOTE, NOW AND THEN</p>
				<h2 id="newsletter-title">A little joy in your inbox.</h2>
				<p>New finds, desk inspiration, and zero weird spam. Pinky promise.</p>
			</div>
			<form onsubmit={(event) => event.preventDefault()}>
				<label for="newsletter-email">Your email address</label>
				<div class="newsletter-form">
					<Input id="newsletter-email" type="email" placeholder="you@example.com" required /><Button
						variant="alternate"
						type="submit">Count me in <ArrowRight size={16} aria-hidden="true" /></Button
					>
				</div>
			</form>
		</section>
	</main>

	<footer class="site-footer">
		<a class="wordmark footer-mark" href="/example"
			><span class="wordmark-mark" aria-hidden="true">b.</span><span
				>byte <span class="wordmark-amp">&amp;</span> bazaar</span
			></a
		>
		<p>Good gear for whatever you’re making.</p>
		<span>© 2026 BYTE &amp; BAZAAR</span>
	</footer>
</div>

<style>
	.storefront {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 4.6vw;
		color: var(--border);
		background: var(--surface);
		font-family: var(--font-body);
	}
	.announcement {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.65rem;
		min-height: 36px;
		border-bottom: 1px solid var(--border-subtle);
		font-size: 0.72rem;
		letter-spacing: 0.01em;
	}
	.announcement p {
		margin: 0;
	}
	.announcement strong {
		font-family: var(--font-display);
		font-size: 0.67rem;
		letter-spacing: 0.08em;
	}
	.announcement-divider {
		margin: 0 0.45rem;
		color: var(--foreground-muted);
	}
	.site-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 86px;
		gap: 2rem;
		border-bottom: 1px solid var(--border-subtle);
	}
	.wordmark {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--border);
		text-decoration: none;
		font: 700 1rem var(--font-display);
		letter-spacing: -0.07em;
		white-space: nowrap;
	}
	.wordmark-mark {
		display: grid;
		width: 31px;
		height: 31px;
		place-items: center;
		border: 2px solid var(--border);
		background: var(--accent);
		color: var(--accent-foreground);
		font: 700 1.05rem var(--font-display);
		letter-spacing: -0.1em;
	}
	.wordmark-amp {
		color: var(--foreground-muted);
	}
	.desktop-nav {
		display: flex;
		align-items: center;
		gap: clamp(1rem, 2.5vw, 2.5rem);
	}
	.desktop-nav a {
		color: inherit;
		text-decoration: none;
		font-size: 0.78rem;
	}
	.desktop-nav a:hover,
	.hero-link:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	.storefront :global(.cart-button) {
		gap: 0.5rem;
		min-height: 40px;
		padding: 0.4rem 0.65rem;
		font-size: 0.78rem;
	}
	.cart-count {
		display: grid;
		width: 21px;
		height: 21px;
		place-items: center;
		border-radius: 50%;
		background: var(--surface-inverse);
		color: var(--foreground-inverse);
		font-size: 0.68rem;
	}
	.hero {
		display: grid;
		grid-template-columns: 0.92fr 1.08fr;
		align-items: center;
		min-height: 465px;
		padding: 45px 0 52px;
		border-bottom: 1px solid var(--border-subtle);
	}
	.hero-copy {
		position: relative;
		z-index: 1;
		padding: 0 0 1rem 2.5vw;
	}
	.eyebrow {
		margin: 0 0 1rem;
		font: 700 0.68rem var(--font-display);
		letter-spacing: 0.12em;
	}
	.eyebrow-dot {
		display: inline-block;
		width: 8px;
		height: 8px;
		margin-right: 0.4rem;
		border-radius: 50%;
		background: var(--accent);
	}
	h1 {
		margin: 0;
		font: 700 clamp(2.8rem, 5.5vw, 5rem)/0.99 var(--font-display);
		letter-spacing: -0.095em;
	}
	.hero h1 span {
		color: var(--foreground-muted);
	}
	.hero-description {
		max-width: 385px;
		margin: 1.4rem 0 1.15rem;
		font-size: 0.9rem;
		line-height: 1.75;
	}
	.hero-link {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: inherit;
		font-weight: 700;
		font-size: 0.81rem;
		text-underline-offset: 4px;
	}
	.hero-note {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 2.3rem;
		font: 700 0.61rem var(--font-display);
		letter-spacing: 0.09em;
	}
	.storefront :global(.note-sparkle) {
		color: var(--foreground);
		font-size: 1.1rem;
	}
	.hero-art {
		position: relative;
		min-height: 355px;
		overflow: hidden;
		background: var(--surface-subtle);
	}
	.art-sun {
		position: absolute;
		top: 30px;
		right: 14%;
		width: 160px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--surface-muted);
	}
	.art-monitor {
		position: absolute;
		top: 60px;
		right: 15%;
		width: 43%;
	}
	.monitor-screen {
		display: grid;
		height: 177px;
		align-content: center;
		justify-items: center;
		border: 11px solid var(--border);
		background: var(--surface);
		box-shadow: var(--shadow-raised);
	}
	.storefront :global(.screen-star) {
		color: var(--foreground);
		font-size: 4rem;
		line-height: 1;
	}
	.screen-line {
		width: 45%;
		height: 3px;
		margin-top: 8px;
		background: var(--border);
	}
	.screen-line.short {
		width: 27%;
		margin-top: 5px;
	}
	.monitor-neck {
		width: 13px;
		height: 35px;
		margin: auto;
		background: var(--border);
	}
	.monitor-base {
		width: 74px;
		height: 7px;
		margin: auto;
		background: var(--border);
	}
	.art-laptop {
		position: absolute;
		z-index: 1;
		bottom: 54px;
		left: 11%;
		width: 51%;
		transform: rotate(-5deg);
	}
	.laptop-screen {
		height: 173px;
		padding: 10px;
		border: 8px solid var(--border);
		border-bottom-width: 6px;
		border-radius: 7px 7px 0 0;
		background: var(--surface);
		box-shadow: var(--shadow-raised);
	}
	.laptop-window {
		position: relative;
		height: 100%;
		padding: 14px;
		background: var(--surface-muted);
	}
	.laptop-window span {
		display: inline-block;
		width: 6px;
		height: 6px;
		margin-right: 3px;
		border-radius: 50%;
		background: var(--border);
	}
	.laptop-window b {
		display: block;
		margin: 20px 0 0 15%;
		font: 700 1.5rem/1.05 var(--font-display);
		letter-spacing: -0.08em;
	}
	.laptop-base {
		height: 12px;
		margin: 0 -13px;
		border-radius: 0 0 10px 10px;
		background: var(--border);
	}
	.art-sticker {
		position: absolute;
		z-index: 2;
		display: grid;
		width: 73px;
		height: 73px;
		place-content: center;
		border: 1px solid var(--border);
		border-radius: 50%;
		background: var(--surface);
		text-align: center;
		font: 700 0.55rem/1.35 var(--font-display);
		transform: rotate(10deg);
	}
	.sticker-one {
		top: 21px;
		left: 8%;
	}
	.sticker-two {
		right: 6%;
		bottom: 29px;
		background: var(--surface-inverse);
		color: var(--foreground-inverse);
		transform: rotate(-10deg);
	}
	.art-caption {
		position: absolute;
		right: 12px;
		bottom: 8px;
		font: 700 0.53rem var(--font-display);
		letter-spacing: 0.1em;
	}
	.perks {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 1.35rem 2.5vw;
		border-bottom: 1px solid var(--border-subtle);
	}
	.perks > div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
	}
	.perk-icon {
		display: grid;
		width: 31px;
		height: 31px;
		place-items: center;
		border: 1px solid var(--border);
		border-radius: 50%;
		font: 700 0.65rem var(--font-display);
	}
	.perks p {
		margin: 0;
		font-size: 0.68rem;
		line-height: 1.55;
	}
	.perks strong {
		font-size: 0.72rem;
	}
	.shop-section {
		padding: 72px 2.5vw 78px;
	}
	.shop-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
	}
	.shop-heading .eyebrow {
		margin-bottom: 0.55rem;
		color: var(--foreground-muted);
	}
	.shop-heading h2,
	.newsletter h2 {
		margin: 0;
		font: 700 clamp(1.6rem, 3vw, 2.25rem)/1.2 var(--font-display);
		letter-spacing: -0.07em;
	}
	.section-intro {
		margin: 0.6rem 0 0;
		color: var(--foreground-muted);
		font-size: 0.82rem;
	}
	.search-box {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		width: min(290px, 36%);
		padding-left: 0.75rem;
		border: 1px solid var(--border);
		background: var(--surface-subtle);
	}
	.search-box :global(.input-wrap) {
		min-height: 42px;
		padding: 0;
		border: 0;
		box-shadow: none;
	}
	.search-box :global(.input-wrap:focus-within) {
		outline-offset: 1px;
	}
	.search-box :global(.input) {
		min-height: 40px;
		font-size: 0.76rem;
	}
	.search-box :global(.input::placeholder) {
		color: var(--foreground-muted);
	}
	.shop-tools {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 2rem 0 1rem;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.filters :global(.button) {
		min-height: 36px;
		padding: 0.4rem 0.72rem;
		font-size: 0.72rem;
	}
	.filters :global(.button.active-filter) {
		background: var(--surface-inverse);
		color: var(--foreground-inverse);
		box-shadow: var(--shadow-inset);
	}
	.result-count {
		margin: 0;
		color: var(--foreground-muted);
		font-size: 0.7rem;
	}
	.storefront :global(.product-card) {
		overflow: hidden;
		background: var(--surface-subtle);
	}
	.storefront :global(.product-card) :global(.card-header) {
		padding: 0.65rem 0.8rem;
		border-bottom-width: 1px;
		font-size: 0.68rem;
	}
	.product-card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.product-card-top :global(.badge) {
		padding: 0.16rem 0.35rem;
		background: var(--surface-muted);
		font-size: 0.53rem;
		letter-spacing: 0.02em;
	}
	.storefront :global(.product-card) :global(.card-body) {
		padding: 0;
	}
	.product-art {
		position: relative;
		display: grid;
		height: 192px;
		place-items: center;
		overflow: hidden;
	}
	.product-art {
		background: var(--surface-muted);
	}
	.product-shape {
		display: grid;
		width: 140px;
		height: 110px;
		place-items: center;
		color: var(--foreground);
	}

	.rating {
		position: absolute;
		right: 9px;
		bottom: 8px;
		display: flex;
		align-items: center;
		gap: 0.27rem;
		font-size: 0.63rem;
	}
	.rating :global(svg) {
		color: var(--foreground);
	}
	.rating span {
		color: var(--foreground-muted);
		font-size: 0.56rem;
	}
	.product-info {
		padding: 0.95rem 0.9rem 1rem;
	}
	.product-info h3 {
		margin: 0;
		font: 700 1rem var(--font-display);
		letter-spacing: -0.06em;
	}
	.product-info > p {
		min-height: 55px;
		margin: 0.5rem 0 0.8rem;
		color: var(--foreground-muted);
		font-size: 0.68rem;
		line-height: 1.55;
	}
	.product-buy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}
	.price {
		font: 700 0.95rem var(--font-display);
	}
	.price span {
		font-size: 0.68rem;
	}
	.price del {
		display: block;
		margin-top: 0.1rem;
		color: var(--foreground-muted);
		font: 0.62rem var(--font-body);
	}
	.product-buy :global(.button) {
		min-height: 36px;
		padding: 0.4rem 0.6rem;
		font-size: 0.68rem;
		white-space: nowrap;
	}
	.empty-results {
		display: grid;
		min-height: 250px;
		place-content: center;
		justify-items: center;
		border: 1px solid var(--border-subtle);
		text-align: center;
	}
	.empty-results .eyebrow {
		margin-bottom: 0.4rem;
		color: var(--foreground-muted);
	}
	.empty-results h3 {
		margin: 0.2rem;
		font: 700 1.2rem var(--font-display);
	}
	.empty-results p:not(.eyebrow) {
		margin: 0.4rem 0 1rem;
		color: var(--foreground-muted);
		font-size: 0.78rem;
	}
	.cart-status {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		z-index: 3;
		margin: 0;
		padding: 0.8rem 1rem;
		border: 2px solid var(--border);
		background: var(--surface-inverse);
		color: var(--foreground-inverse);
		box-shadow: var(--shadow-floating);
		font-size: 0.78rem;
	}
	.newsletter {
		display: grid;
		grid-template-columns: 1fr 0.85fr;
		align-items: center;
		gap: 3rem;
		padding: 2.5rem 3vw;
		border: 1px solid var(--border);
		background: var(--surface-subtle);
	}
	.newsletter .eyebrow {
		margin-bottom: 0.55rem;
		color: var(--foreground-muted);
	}
	.newsletter h2 {
		font-size: clamp(1.35rem, 2.5vw, 1.9rem);
	}
	.newsletter p:not(.eyebrow) {
		margin: 0.55rem 0 0;
		color: var(--foreground-muted);
		font-size: 0.75rem;
	}
	.newsletter form label {
		display: block;
		margin-bottom: 0.45rem;
		font-size: 0.68rem;
	}
	.newsletter-form {
		display: flex;
		gap: 0.55rem;
	}
	.newsletter-form :global(.button) {
		gap: 0.5rem;
		white-space: nowrap;
		font-size: 0.72rem;
	}
	.newsletter-form :global(.input-wrap) {
		background: var(--surface-subtle);
	}
	.site-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 88px;
	}
	.site-footer p,
	.site-footer > span {
		margin: 0;
		color: var(--foreground-muted);
		font-size: 0.65rem;
	}
	.footer-mark {
		font-size: 0.82rem;
	}
	.footer-mark .wordmark-mark {
		width: 26px;
		height: 26px;
		font-size: 0.85rem;
	}
	@media (max-width: 940px) {
		.storefront {
			padding: 0 3vw;
		}
		.hero {
			min-height: 400px;
		}
		.hero-art {
			min-height: 310px;
		}
		.monitor-screen {
			height: 145px;
		}
		.laptop-screen {
			height: 145px;
		}
		.product-art {
			height: 220px;
		}
	}
	@media (max-width: 650px) {
		.storefront {
			padding: 0 1rem;
		}
		.announcement {
			font-size: 0.61rem;
		}
		.announcement-divider {
			margin: 0 0.15rem;
		}
		.site-header {
			min-height: 68px;
			gap: 0.5rem;
		}
		.wordmark {
			font-size: 0.85rem;
		}
		.wordmark-mark {
			width: 27px;
			height: 27px;
		}
		.desktop-nav {
			display: none;
		}
		.storefront :global(.cart-button) :global(.button) {
			min-height: 36px;
		}
		.storefront :global(.cart-button) {
			font-size: 0.7rem;
		}
		.hero {
			grid-template-columns: 1fr;
			padding: 42px 0 30px;
		}
		.hero-copy {
			padding: 0 0 1.8rem;
		}
		.hero h1 {
			font-size: clamp(3rem, 13vw, 4.3rem);
		}
		.hero-description {
			max-width: 440px;
		}
		.hero-note {
			margin-top: 1.35rem;
		}
		.hero-art {
			min-height: 300px;
		}
		.art-monitor {
			top: 42px;
			right: 10%;
			width: 45%;
		}
		.monitor-screen {
			height: 140px;
		}
		.art-laptop {
			bottom: 48px;
			left: 9%;
			width: 56%;
		}
		.laptop-screen {
			height: 143px;
		}
		.perks {
			grid-template-columns: 1fr;
			gap: 0.9rem;
			padding: 1.2rem 0.3rem;
		}
		.perks > div {
			justify-content: flex-start;
		}
		.shop-section {
			padding: 48px 0.1rem;
		}
		.shop-heading {
			align-items: stretch;
			flex-direction: column;
			gap: 1.2rem;
		}
		.search-box {
			width: 100%;
		}
		.shop-tools {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.75rem;
			margin: 1.35rem 0 0.8rem;
		}
		.filters {
			gap: 0.4rem;
		}
		.filters :global(.button) {
			padding: 0.35rem 0.53rem;
			font-size: 0.65rem;
		}
		.storefront :global(.product-card) :global(.card-header) {
			padding: 0.55rem 0.6rem;
		}
		.product-card-top {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.3rem;
		}
		.product-art {
			height: 150px;
		}
		.product-shape {
			transform: scale(0.82);
		}
		.product-info {
			padding: 0.7rem 0.65rem 0.75rem;
		}
		.product-info h3 {
			font-size: 0.82rem;
		}
		.product-info > p {
			min-height: 75px;
			font-size: 0.62rem;
		}
		.product-buy {
			align-items: flex-start;
			flex-direction: column;
		}
		.product-buy :global(.button) {
			width: 100%;
		}
		.newsletter {
			grid-template-columns: 1fr;
			gap: 1.4rem;
			padding: 1.5rem 1rem;
		}
		.newsletter-form {
			flex-direction: column;
		}
		.site-footer {
			align-items: flex-start;
			flex-direction: column;
			justify-content: center;
			gap: 0.45rem;
			padding: 1.2rem 0;
		}
		.site-footer p {
			order: 1;
		}
		.site-footer > span {
			order: 2;
		}
	}
	@media (max-width: 360px) {
		.product-art {
			height: 210px;
		}
		.product-info > p {
			min-height: auto;
		}
		.product-buy {
			align-items: center;
			flex-direction: row;
		}
	}
</style>
