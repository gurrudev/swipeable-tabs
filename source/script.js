swiperTabsNav = new Swiper('.swiper-tabs-nav', {
	spaceBetween: 0,
	slidesPerView: 3,
	// loop: true
	
});

// console.log(swiperTabsNav)

// Swiper Content	
swiperTabsContent = new Swiper('.swiper-tabs-content', {
	spaceBetween: 0,
	thumbs: {
		swiper: swiperTabsNav,
	}
	// loop: true
});

// console.log(swiperTabsContent)


