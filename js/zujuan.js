(function () {

		var omyQ_more=document.querySelectorAll('.myQ-more');
		console.log(omyQ_more);
		var oBank=document.querySelectorAll('.bank');
		// var len = omyQ_more.length;
		var close=document.querySelectorAll('.iconfont1');
        console.log(close);

		for (var i = 0; i < 2; i++) {
				
			omyQ_more[i].index=i;
			console.log(omyQ_more[i].index,oBank[i]);

			omyQ_more[i].addEventListener("click",function(){
				for(var i = 0 ; i < 2 ; i++){
					oBank[i].className = "bank";					
				}
				//this.className += " active";
				oBank[this.index].className = "bank-active";
				
			},false);

		};


		for (var i = 0; i < 2; i++) {
				
			close[i].index=i;
			console.log(close[i].index,oBank[i]);

			close[i].addEventListener("click",function(){
				// for(var i = 0 ; i < 2 ; i++){
				// 	oBank[i].className = "bank";					
				// }
				//this.className += " active";
				oBank[this.index].className = "bank";
				
			},false);

		};


})()