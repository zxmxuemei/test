let urlParams = new URLSearchParams(window.location.search);
let imgUrl = urlParams.get('img');

let canvas = new fabric.Canvas('c');

fabric.Image.fromURL(imgUrl, function(img) {
    let oImg = img.set({left: 0, top: 0}).scale(1);
    canvas.add(oImg).renderAll();

    let text = new fabric.IText('点击编辑我', {
        fontFamily: 'arial',
        left: 10,
        top: 10,
        fontSize: 20,
    });

    let closeButton = new fabric.Circle({
        radius: 10, 
        fill: 'red', 
        left: 30,
        top: 30
    });

    canvas.add(text);
    canvas.add(closeButton);

    canvas.item(0).hasControls = canvas.item(0).hasBorders = false;
    canvas.selection = false;
    canvas.forEachObject(function(o) {
        o.setControlVisible('mtr', false);
        o.hasControls = o.hasBorders = true;
    });
});