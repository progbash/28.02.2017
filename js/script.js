function chessboard(){
	document.write('<div style="width:1600px; height:1600px; margin:0 auto;">');
	for(j=1;j<=8;j+=2){
		for(i=1;i<=8;i+=2){
			document.write('<div class="white" style="width:200px; height:200px; float:left;"></div>')
			document.write('<div style="width:200px; height:200px; background-color:black; float:left;"></div>')
		}
		for(i=2;i<=8;i+=2){
		document.write('<div style="width:200px; height:200px; background-color:black; float:left;"></div>')
		document.write('<div class="white" style="width:200px; height:200px; float:left;"></div>')
		}
}
}
chessboard()