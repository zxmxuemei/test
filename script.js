window.onload = function() {
    var displayButton = document.getElementById('displayButton');
    var displayfusuButton = document.getElementById('displayfusuButton');
    var editButton = document.getElementById('editButton');
    var uploadInput = document.getElementById('uploadInput');
    var uploadButton = document.getElementById('uploadButton');

    displayButton.onclick = function() {
        // 处理显示操作
        console.log('Display button clicked');
        // var img=document.getElementById('image1');
        // img.src='./image1.jpg';//画像の格納場所
        //img.style.display='block';//画像が表示できる
        var imgurl='./image1.jpg';
        window.open(imgurl,'_blank');

    }
    displayfusuButton.onclick = function() {

         var imageUrls = ['http://127.0.0.1:5500/image1.jpg', 'http://127.0.0.1:5500/image2.jpg', 'http://127.0.0.1:5500/image3.jpg', 'http://127.0.0.1:5500/image4.jpg', 'http://127.0.0.1:5500/image5.jpg', 'http://127.0.0.1:5500/image6.jpg'];  //你的图片URL列表

        // // 新しいHTMLで表示する
        //  var newWindow = window.open('', '_blank');

        // // 新規webに画像を追加する
        // imageUrls.forEach(function(url) {
        //     var img = newWindow.document.createElement('img');
        //     img.src = url;
        //     newWindow.document.body.appendChild(img);
        // });
        var newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>複数図の表示案件</title>');
        // .outer-containerはページ全体を中央に配置し、.image-containerのサイズは見える領域の90％に設定します。これにより、画像は可能な限り大きく表示され、ページを超えることはありません。その結果、スクロールバーは画像コンテナにだけ表示され、ページ全体には表示されません。ページのデフォルトの余白がレイアウトに影響を与えないように、bodyのmarginとpaddingを0に設定する必要があります。
        newWindow.document.write('<style>body { margin: 0; padding: 0; } .outer-container { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; } .image-container { display: flex; width: 90%; height: 90%; overflow-x: scroll; } .image-container img { object-fit: contain; max-width: 100%; }</style>');
        newWindow.document.write('</head><body>');
        newWindow.document.write('<button id="startScroll">スクロールを開始</button>');
        newWindow.document.write('<div class="outer-container"><div class="image-container" id="imageContainer"></div></div>');
        newWindow.document.write('</body></html>');
    
        var containerElement = newWindow.document.getElementById('imageContainer');
        imageUrls.forEach(function(url) {
            var imgElement = newWindow.document.createElement('img');
            imgElement.src = url;
            containerElement.appendChild(imgElement);
        });
    
        newWindow.document.getElementById('startScroll').addEventListener('click', function() {
            var scrollInterval = setInterval(function() {
                if (containerElement.scrollLeft < containerElement.scrollWidth - containerElement.clientWidth) {
                    containerElement.scrollBy({left: 500, behavior: 'smooth'});
                } else {
                    clearInterval(scrollInterval);
                }
            }, 50);
        });

    }


    editButton.onclick = function() {
        // 处理编辑操作
        console.log('Edit button clicked');
    }
};
