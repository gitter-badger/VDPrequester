var vdprequester=new VDPrequester('ws://127.0.0.1:8080'); //eslint-disable-line

var square=21;
vdprequester.send(square,'squareroot',function(error,result) {
    'The square root of '+square+' is '+result.data;
});
