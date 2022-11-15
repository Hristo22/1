var i;
for(i=0; i<10;i++){
    if(i==5){
        break;
    }
    window.alert("i= "+i);
}

var j;
for(j=0; j<10;j++){
    if(j==5 || j== 7){
        continue;
    }
    window.alert("j= "+j);
}