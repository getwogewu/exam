(function () {

		var omyQ_more=document.querySelectorAll('.myQ-more');
		console.log(omyQ_more);
		var oBank=document.querySelectorAll('.bank');
		var len = omyQ_more.length;


		for (var i = 0; i < len; i++) {
				
			omyQ_more[i].index=i;
			console.log(omyQ_more[i].index,oBank[i]);

			omyQ_more[i].addEventListener("click",function(){
				for(var i = 0 ; i < len ; i++){
				oBank[i].className = "bank";					
			}
			//this.className += " active";
			oBank[this.index].className = "bank-active";
		},false);
	};
})()