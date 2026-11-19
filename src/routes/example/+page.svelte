<script lang="ts">
	import { resolve } from '$app/paths';
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
	import { Badge, Button, Card, Grid, Input, Nav, type NavItem } from '../../lib/index';

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
	let newsletterSent = $state(false);
	const navigationItems: NavItem[] = [
		{ label: 'Shop all', href: '#shop', onSelect: () => (category = 'All gear') },
		{ label: 'Laptops', href: '#shop', onSelect: () => (category = 'Laptops') },
		{ label: 'Desktops', href: '#shop', onSelect: () => (category = 'Desktops') },
		{ label: 'Our little promise', href: '#promise' }
	];
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
		<Nav items={navigationItems} class="storefront-nav" label="Main navigation">
			{#snippet brand()}
				<a class="wordmark" href={resolve('/example')} aria-label="Byte and Bazaar home">
					<span class="wordmark-mark" aria-hidden="true">b.</span>
					<span>byte <span class="wordmark-amp">&amp;</span> bazaar</span>
				</a>
			{/snippet}
			{#snippet actions()}
				<Button class="cart-button" aria-label={`Shopping bag, ${cartCount} items`}>
					<ShoppingBag size={17} aria-hidden="true" /> <span>Bag</span><span class="cart-count"
						>{cartCount}</span
					>
				</Button>
			{/snippet}
		</Nav>
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
				<Grid minColumnWidth="14.25rem" class="product-grid">
					{#each visibleProducts as product (product.name)}
						<Card class="product-card" flush stretch interactive>
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
			<form
				onsubmit={(event) => {
					event.preventDefault();
					newsletterSent = true;
				}}
			>
				<label for="newsletter-email">Your email address</label>
				<div class="newsletter-form">
					<Input
						id="newsletter-email"
						type="email"
						placeholder="you@example.com"
						autocomplete="email"
						required
					/><Button variant="alternate" type="submit"
						>Count me in
						<ArrowRight size={16} aria-hidden="true" /></Button
					>
				</div>
				{#if newsletterSent}<p class="newsletter-status" role="status">
						Thanks for your interest. Signups are not connected yet.
					</p>{/if}
			</form>
		</section>
	</main>

	<footer class="site-footer">
		<a class="wordmark footer-mark" href={resolve('/example')}
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
		border-bottom: 1px solid var(--border-subtle);
	}
	.storefront :global(.storefront-nav) {
		border: 0;
		background: transparent;
		box-shadow: none;
	}
	.storefront :global(.storefront-nav ul) {
		justify-content: center;
		gap: clamp(0.25rem, 1.2vw, 1rem);
	}
	.storefront :global(.storefront-nav li > a) {
		min-height: 44px;
		padding-inline: 0.6rem;
		border: 0;
		background: transparent;
		box-shadow: none;
		color: inherit;
		font-size: var(--store-small, 0.78rem);
		white-space: nowrap;
	}
	.storefront :global(.storefront-nav li > a:hover) {
		border-color: transparent;
		box-shadow: none;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	.storefront :global(.storefront-nav .indicator) {
		display: none;
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
	.hero-link:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	.storefront :global(.cart-button) {
		gap: 0.5rem;
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
		width: 45%;
		transform: rotate(-5deg);
	}
	.laptop-screen {
		box-sizing: border-box;
		aspect-ratio: 16 / 9;
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
		padding: 0;
		border: 0;
		box-shadow: none;
	}
	.search-box :global(.input-wrap:focus-within) {
		outline-offset: 1px;
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
		.product-art {
			height: 220px;
		}
	}
	@media (max-width: 800px) {
		.hero {
			grid-template-columns: minmax(0, 1fr);
			gap: 1.5rem;
			min-height: 0;
			padding: 36px 0;
		}
		.hero-copy {
			padding: 0;
		}
		.hero-art {
			min-height: clamp(260px, 42vw, 340px);
		}
		.newsletter {
			grid-template-columns: 1fr;
			gap: 1.4rem;
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
		.wordmark {
			font-size: 0.85rem;
		}
		.wordmark-mark {
			width: 27px;
			height: 27px;
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
			width: 50%;
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
	/* Storefront rules build on the library's monochrome palette and tactile controls. */
	.storefront {
		--store-space: clamp(1.25rem, 4vw, 4rem);
		--store-small: var(--type-small);
		--store-body: var(--type-body);
		width: min(100%, 1440px);
		padding-inline: var(--store-space);
	}
	.storefront :global(a:focus-visible) {
		outline: var(--focus-ring);
		outline-offset: 4px;
	}
	.hero {
		grid-template-columns: minmax(0, 0.93fr) minmax(0, 1.07fr);
		gap: clamp(1.5rem, 3vw, 3.5rem);
	}
	.hero-copy {
		padding-left: 0;
	}
	.hero h1 {
		font-size: clamp(3rem, 5.1vw, 4.8rem);
		line-height: 1.03;
	}
	.hero-description {
		font-size: var(--store-body);
		line-height: 1.65;
	}
	.hero-link {
		min-height: 44px;
		font-size: var(--store-small);
	}
	.hero-art {
		width: 100%;
	}
	.perks {
		padding-inline: 0;
		gap: 1rem;
	}
	.perks p {
		font-size: 0.76rem;
	}
	.perks strong {
		font-size: 0.8rem;
	}
	.shop-section {
		padding: clamp(3.25rem, 6vw, 5rem) 0;
	}
	.section-intro {
		font-size: var(--store-small);
		line-height: 1.5;
	}
	.search-box {
		min-width: 245px;
		background: var(--surface-subtle);
	}
	.search-box:focus-within {
		outline: var(--focus-ring);
		outline-offset: 2px;
	}
	.search-box :global(.input-wrap:focus-within) {
		outline: 0;
	}
	.filters :global(.button) {
		padding-inline: 0.85rem;
		font-size: 0.76rem;
	}
	.result-count {
		font-size: 0.75rem;
		white-space: nowrap;
	}
	.storefront :global(.product-card) :global(.card-header) {
		min-height: 36px;
	}
	.product-art {
		height: 180px;
		flex: 0 0 auto;
	}
	.product-card-top :global(.badge) {
		font-size: 0.62rem;
	}
	.rating {
		font-size: 0.72rem;
	}
	.rating span {
		font-size: 0.67rem;
	}
	.product-info {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 1rem;
	}
	.product-info h3 {
		font-size: 1rem;
		line-height: 1.3;
	}
	.product-info > p {
		min-height: 0;
		margin: 0.55rem 0 1rem;
		font-size: 0.78rem;
		line-height: 1.55;
	}
	.product-buy {
		margin-top: auto;
	}
	.price {
		font-size: 1rem;
		white-space: nowrap;
	}
	.price del {
		font-size: 0.7rem;
	}
	.product-buy :global(.button) {
		padding-inline: 0.7rem;
		font-size: 0.74rem;
	}
	.newsletter {
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
		gap: 2rem;
		padding: clamp(1.5rem, 3vw, 2.5rem);
	}
	.newsletter p:not(.eyebrow),
	.newsletter form label {
		font-size: 0.78rem;
		line-height: 1.5;
	}
	.newsletter form {
		min-width: 0;
	}
	.newsletter-form :global(.input-wrap) {
		min-width: 0;
	}
	.newsletter-status {
		margin-top: 0.6rem !important;
		color: var(--foreground) !important;
	}
	.site-footer p,
	.site-footer > span {
		font-size: 0.72rem;
	}
	@media (max-width: 1100px) {
		.hero {
			gap: 1.5rem;
		}
		.hero h1 {
			font-size: clamp(2.7rem, 5.7vw, 4rem);
		}
		.storefront :global(.product-grid) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.newsletter {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 650px) {
		.storefront {
			--store-space: 1rem;
		}
		.announcement {
			min-height: 44px;
			padding: 0.4rem 0;
			font-size: 0.68rem;
			line-height: 1.4;
			text-align: center;
		}
		.hero {
			grid-template-columns: 1fr;
			gap: 0;
			padding-top: 2.5rem;
		}
		.hero h1 {
			font-size: clamp(2.7rem, 11.5vw, 4.3rem);
		}
		.hero-art {
			min-height: 300px;
		}
		.perks {
			gap: 1rem;
		}
		.shop-heading {
			gap: 1.4rem;
		}
		.search-box {
			min-width: 0;
		}
		.shop-tools {
			gap: 0.8rem;
		}
		.filters {
			width: 100%;
		}
		.filters :global(.button) {
			font-size: 0.72rem;
		}
		.storefront :global(.product-grid) {
			grid-template-columns: 1fr;
		}
		.product-art {
			height: 200px;
		}
		.product-card-top {
			flex-direction: row;
			align-items: center;
		}
		.product-info {
			padding: 1rem;
		}
		.product-info h3 {
			font-size: 1rem;
		}
		.product-info > p {
			font-size: 0.8rem;
		}
		.product-buy {
			flex-direction: row;
			align-items: center;
		}
		.product-buy :global(.button) {
			width: auto;
		}
		.newsletter-form {
			flex-direction: row;
		}
	}
	@media (max-width: 420px) {
		.hero h1 {
			font-size: clamp(2.5rem, 12vw, 3.2rem);
		}
		.hero-art {
			min-height: 260px;
		}
		.laptop-screen {
			padding: 5px;
			border-width: 5px;
			border-bottom-width: 4px;
		}
		.laptop-window {
			padding: 6px;
		}
		.laptop-window b {
			margin-top: 0.45rem;
			font-size: clamp(0.8rem, 5vw, 1.1rem);
		}
		.newsletter-form {
			flex-direction: column;
		}
		.newsletter-form :global(.button) {
			width: 100%;
		}
	}
</style>
