

let swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	slidesPerView: 1,
	paginationClickable: true,
	loop: true,
    paginationBulletRender: function (index, className) {
		let tabsName = ['All', 'Credit Only', 'Debit Only',"ACD"];
		

		if(tabsName[0] == "All"){
			let data1 = document.getElementById('data1');
			data1.textContent= "Hello"
		} 
		if (tabsName[1] == "Credit Only"){
			let data2 = document.getElementById('data2');
			data2.textContent= "Hi"
		}

		if (tabsName[2] == "Debit Only"){
			let data3 = document.getElementById('data3');
			data3.textContent= "Bye"
			// console.log(data3)
		}

		if ( index === (tabsName.length - 1) ) {
          	return	'<span class="' + className + '">'
          		+ tabsName[index] + '</span>'
          		+ '<div class="active-mark "></div>';
		}
		return '<span class="' + className + '">' + tabsName[index] + '</span>';


		
    }
});

