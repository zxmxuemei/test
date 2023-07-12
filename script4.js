window.onload = function() {
    var displayButton = document.getElementById('displayButton');
    var displayfusuButton = document.getElementById('displayfusuButton');
    var editButton = document.getElementById('editButton');
    var uploadInput = document.getElementById('uploadInput');
    var uploadButton = document.getElementById('uploadButton');

     // 一つ図の表示ボタン
    displayButton.onclick = function() {
        // 処理表示操作
        console.log('Display button clicked');
        var imgurl='./image1.jpg';
        window.open(imgurl,'_blank');

    }

     // 複数図の表示ボタン
    displayfusuButton.onclick = function() {

         var imageUrls = ['http://127.0.0.1:5500/image1.jpg', 'http://127.0.0.1:5500/image2.jpg', 'http://127.0.0.1:5500/image3.jpg', 'http://127.0.0.1:5500/image4.jpg', 'http://127.0.0.1:5500/image5.jpg', 'http://127.0.0.1:5500/image6.jpg'];  //図のURL

        var newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>複数図の表示案件</title>');
        newWindow.document.write('<style>.controls { display: flex; gap: 10px; justify-content: start; } body { display: flex; flex-direction: column; justify-content: start; align-items: center; padding: 20px; }</style>');
        newWindow.document.write('</head><body>');
        newWindow.document.write('<div class="controls" id="controls"></div>');
        newWindow.document.write('<img id="myImage" src="' + imageUrls[0] + '">');
        newWindow.document.write('</body></html>');
        
        var currentIndex = 0;
        var scale = 100;

        function createButton(id, text, listener) {
            var button = newWindow.document.createElement('button');
            button.id = id;
            button.innerText = text;
            button.addEventListener('click', listener);
            return button;
        }

        function createParagraph(id, text) {
            var p = newWindow.document.createElement('p');
            p.id = id;
            p.innerText = text;
            return p;
        }

        function createInput(id, value, type, min, max) {
            var input = newWindow.document.createElement('input');
            input.id = id;
            input.value = value;
            input.type = type;
            input.min = min;
            input.max = max;
            return input;
        }

        function updateImageAndPageInfo() {
            var imageElement = newWindow.document.getElementById('myImage');
            imageElement.src = imageUrls[currentIndex];
            newWindow.document.getElementById('pageInfo').innerText = 'Page ' + (currentIndex + 1) + ' of ' + imageUrls.length;
            newWindow.document.getElementById('pageInput').value = currentIndex + 1;
            newWindow.document.getElementById('warning').innerText = '';
            scale = 100;
            imageElement.style.width = scale + '%';
            newWindow.document.getElementById('scaleInfo').innerText = '当前比例：' + scale + '%';
        }
        // 画面にボタンを追加する
        var controlElement = newWindow.document.getElementById('controls');
        // controlElement.appendChild(createButton('increaseButton', '拡大', function() {
        //     var imageElement = newWindow.document.getElementById('myImage');
        //     scale += 10;
        //     imageElement.style.width = scale + '%';
        //     newWindow.document.getElementById('scaleInfo').innerText = '現在の比率：' + scale + '%';
        // }));
        // controlElement.appendChild(createButton('decreaseButton', 'ズームアウト', function() {
        //     var imageElement = newWindow.document.getElementById('myImage');
        //     scale -= 10;
        //     imageElement.style.width = scale + '%';
        //     newWindow.document.getElementById('scaleInfo').innerText = '現在の比率：' + scale + '%';
        // }));
        // controlElement.appendChild(createParagraph('scaleInfo', '現在の比率：100%'));
        controlElement.appendChild(createButton('previousButton', '前へ', function() {
            currentIndex--;
            if (currentIndex < 0) { currentIndex = imageUrls.length - 1; }
            updateImageAndPageInfo();
        }));
        controlElement.appendChild(createButton('nextButton', '次へ', function() {
            currentIndex++;
            if (currentIndex >= imageUrls.length) { currentIndex = 0; }
            updateImageAndPageInfo();
        }));
        controlElement.appendChild(createParagraph('pageInfo', 'Page 1 of ' + imageUrls.length));
        controlElement.appendChild(createInput('pageInput', '1', 'number', '1', imageUrls.length));
        controlElement.appendChild(createButton('goButton', 'Go', function() {
            var pageIndex = newWindow.document.getElementById('pageInput').value - 1;
            if (pageIndex >= 0 && pageIndex < imageUrls.length) {
                currentIndex = pageIndex;
                updateImageAndPageInfo();
            } else {
                newWindow.document.getElementById('warning').innerText = 'このページは対象外';
            }
        }));
        controlElement.appendChild(newWindow.document.createElement('br'));
        controlElement.appendChild(createParagraph('warning', ''));
    }

   // 編集ボタン
    editButton.onclick = function() {
        // 現在の画像の URL を取得する
        var imageUrl='http://127.0.0.1:5500/image1.jpg';
        // 編集ページの URL を構築し、画像の URL をクエリパラメータとして渡す
        var editUrl = 'edit.html?image=' + encodeURIComponent(imageUrl);
        // 新しいタブまたはウィンドウで編集ページを開く
        window.open(editUrl, '_blank');
        console.log('Edit button clicked');


    }
};
