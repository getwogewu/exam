(function () {
	var oNav=document.querySelectorAll('.nav');
	var oList=document.querySelectorAll('.list');
	var oBox=document.querySelectorAll('.box');
	var len = oList.length;
	console.log(oNav,oList,oBox,len,oList[0]);

	for (var i = 0; i < len; i++) {
		
		oList[i].index=i;
		console.log(oList[i].index,oBox[i]);

		oList[i].addEventListener("click",function(){
				for(var i = 0 ; i < len ; i++){
					// oBox[i].className = "box";
					oList[i].className = "list";
					oBox[i].className = "box";					
				}
				this.className += " active";
				oBox[this.index].className = "box-active";
			},false);
	};

})();