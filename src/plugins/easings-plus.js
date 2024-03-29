/**

Easing equations by Robert Penner 

*/
extend( J.easings, {

	quadIn:function(B,A,D,C){return D*(B/=C)*B+A},
	quadOut:function(B,A,D,C){return -D*(B/=C)*(B-2)+A},
	quadInOut:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B+A}return -D/2*((--B)*(B-2)-1)+A},

	cubicIn:function(B,A,D,C){return D*(B/=C)*B*B+A},
	cubicOut:function(B,A,D,C){return D*((B=B/C-1)*B*B+1)+A},
	cubicInOut:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B*B+A}return D/2*((B-=2)*B*B+2)+A},

	quartIn:function(B,A,D,C){return D*(B/=C)*B*B*B+A},
	quartOut:function(B,A,D,C){return -D*((B=B/C-1)*B*B*B-1)+A},
	quartInOut:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B*B*B+A}return -D/2*((B-=2)*B*B*B-2)+A},

	quintIn:function(B,A,D,C){return D*(B/=C)*B*B*B*B+A},
	quintOut:function(B,A,D,C){return D*((B=B/C-1)*B*B*B*B+1)+A},
	quintInOut:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B*B*B*B+A}return D/2*((B-=2)*B*B*B*B+2)+A},

	expoIn:function(B,A,D,C){return(B==0)?A:D*Math.pow(2,10*(B/C-1))+A},
	expoOut:function(B,A,D,C){return(B==C)?A+D:D*(-Math.pow(2,-10*B/C)+1)+A},
	expoInOut:function(B,A,D,C){if(B==0){return A}if(B==C){return A+D}if((B/=C/2)<1){return D/2*Math.pow(2,10*(B-1))+A}return D/2*(-Math.pow(2,-10*--B)+2)+A},

	circIn:function(B,A,D,C){return -D*(Math.sqrt(1-(B/=C)*B)-1)+A},
	circOut:function(B,A,D,C){return D*Math.sqrt(1-(B=B/C-1)*B)+A},
	circInOut:function(B,A,D,C){if((B/=C/2)<1){return -D/2*(Math.sqrt(1-B*B)-1)+A}return D/2*(Math.sqrt(1-(B-=2)*B)+1)+A},

	elasticIn:function(C,A,G,F,B,E){if(C==0){return A}if((C/=F)==1){return A+G}if(!E){E=F*0.3}if(!B){B=1}if(B<Math.abs(G)){B=G;var D=E/4}else{var D=E/(2*Math.PI)*Math.asin(G/B)}return -(B*Math.pow(2,10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E))+A},
	elasticOut:function(C,A,G,F,B,E){if(C==0){return A}if((C/=F)==1){return A+G}if(!E){E=F*0.3}if(!B){B=1}if(B<Math.abs(G)){B=G;var D=E/4}else{var D=E/(2*Math.PI)*Math.asin(G/B)}return B*Math.pow(2,-10*C)*Math.sin((C*F-D)*(2*Math.PI)/E)+G+A},
	elasticInOut:function(C,A,G,F,B,E){if(C==0){return A}if((C/=F/2)==2){return A+G}if(!E){E=F*(0.3*1.5)}if(!B){B=1}if(B<Math.abs(G)){B=G;var D=E/4}else{var D=E/(2*Math.PI)*Math.asin(G/B)}if(C<1){return -0.5*(B*Math.pow(2,10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E))+A}return B*Math.pow(2,-10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E)*0.5+G+A},backOffset:1.70158,

	backIn:function(B,A,E,D,C){if(!C){C=J.easings.backOffset}return E*(B/=D)*B*((C+1)*B-C)+A},
	backOut:function(B,A,E,D,C){if(!C){C=J.easings.backOffset}return E*((B=B/D-1)*B*((C+1)*B+C)+1)+A},
	backInOut:function(B,A,E,D,C){if(!C){C=J.easings.backOffset}if((B/=D/2)<1){return E/2*(B*B*(((C*=(1.525))+1)*B-C))+A}return E/2*((B-=2)*B*(((C*=(1.525))+1)*B+C)+2)+A},

	bounceIn:function(B,A,D,C){return D-J.easings.bounceOut(C-B,0,D,C)+A},
	bounceOut:function(B,A,D,C){if((B/=C)<(1/2.75)){return D*(7.5625*B*B)+A}else{if(B<(2/2.75)){return D*(7.5625*(B-=(1.5/2.75))*B+0.75)+A}else{if(B<(2.5/2.75)){return D*(7.5625*(B-=(2.25/2.75))*B+0.9375)+A}else{return D*(7.5625*(B-=(2.625/2.75))*B+0.984375)+A}}}},
	bounceInOut:function(B,A,D,C){if(B<C/2){return J.easings.bounceIn(B*2,0,D,C)*0.5+A}return J.easings.bounceOut(B*2-C,0,D,C)*0.5+D*0.5+A}

});