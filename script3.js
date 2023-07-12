window.onload = function() {
    var displayButton = document.getElementById('displayButton');
    var displayfusuButton = document.getElementById('displayfusuButton');
    var editButton = document.getElementById('editButton');
    var uploadInput = document.getElementById('uploadInput');
    var uploadButton = document.getElementById('uploadButton');

    displayButton.onclick = function() {
        // 処理表示操作
        console.log('Display button clicked');
        var imgurl='./image1.jpg';
        window.open(imgurl,'_blank');

    }
    displayfusuButton.onclick = function() {

         var imageUrls = ['http://127.0.0.1:5500/image1.jpg', 'http://127.0.0.1:5500/image2.jpg', 'http://127.0.0.1:5500/image3.jpg', 'http://127.0.0.1:5500/image4.jpg', 'http://127.0.0.1:5500/image5.jpg', 'http://127.0.0.1:5500/image3.jpg'];  //図のURL
        // 新規WEBで表示
        // var newWindow = window.open('', '_blank');
        // newWindow.document.write('<html><head><title>複数図の画面表示</title>');
        // newWindow.document.write('<style>.controls { display: flex; gap: 10px; justify-content: start; } body { display: flex; flex-direction: column; justify-content: start; align-items: center; padding: 20px; }</style>');
        // newWindow.document.write('</head><body>');
        // newWindow.document.write('<div class="controls">');
        // newWindow.document.write('<button id="previousButton">前へ</button>');
        // newWindow.document.write('<button id="nextButton">次へ</button>');
        // newWindow.document.write('<p id="pageInfo">Page 1 of ' + imageUrls.length + '</p>');
        // newWindow.document.write('<input id="pageInput" type="number" min="1" max="' + imageUrls.length + '" value="1">');
        // newWindow.document.write('<button id="goButton">Go</button>');
        // newWindow.document.write('<p id="warning"></p>');
        // newWindow.document.write('</div>');
        // newWindow.document.write('<img id="myImage" src="' + imageUrls[0] + '">');
        // newWindow.document.write('<script>');
        // newWindow.document.write('var currentIndex = 0; var imageUrls = ' + JSON.stringify(imageUrls) + ';');
        // newWindow.document.write('document.getElementById("nextButton").addEventListener("click", function() {');
        // newWindow.document.write('currentIndex++;');
        // newWindow.document.write('if (currentIndex >= imageUrls.length) { currentIndex = 0; }');
        // newWindow.document.write('updateImageAndPageInfo();');
        // newWindow.document.write('});');
        // newWindow.document.write('document.getElementById("previousButton").addEventListener("click", function() {');
        // newWindow.document.write('currentIndex--;');
        // newWindow.document.write('if (currentIndex < 0) { currentIndex = imageUrls.length - 1; }');
        // newWindow.document.write('updateImageAndPageInfo();');
        // newWindow.document.write('});');
        // newWindow.document.write('document.getElementById("goButton").addEventListener("click", function() {');
        // newWindow.document.write('var pageIndex = document.getElementById("pageInput").value - 1;');
        // newWindow.document.write('if (pageIndex >= 0 && pageIndex < imageUrls.length) {');
        // newWindow.document.write('currentIndex = pageIndex;');
        // newWindow.document.write('updateImageAndPageInfo();');
        // newWindow.document.write('} else {');
        // newWindow.document.write('document.getElementById("warning").innerText = "このページは対象外です";');
        // newWindow.document.write('}');
        // newWindow.document.write('});');
        // newWindow.document.write('function updateImageAndPageInfo() {');
        // newWindow.document.write('document.getElementById("myImage").src = imageUrls[currentIndex];');
        // newWindow.document.write('document.getElementById("pageInfo").innerText = "Page " + (currentIndex + 1) + " of " + imageUrls.length;');
        // newWindow.document.write('document.getElementById("pageInput").value = currentIndex + 1;');
        // newWindow.document.write('document.getElementById("warning").innerText = "";');
        // newWindow.document.write('}');
        // newWindow.document.write('</script>');
        // newWindow.document.write('</body></html>');
         // 创建新的HTML页面
         var newWindow = window.open('', '_blank');
         newWindow.document.write('<html><head><title>我的图片查看器</title>');
         newWindow.document.write('<style>.controls { display: flex; gap: 10px; justify-content: start; } body { display: flex; flex-direction: column; justify-content: start; align-items: center; padding: 20px; }</style>');
         newWindow.document.write('</head><body>');
         newWindow.document.write('<div class="controls">');
         newWindow.document.write('<button id="increaseButton">放大</button>');
         newWindow.document.write('<button id="decreaseButton">缩小</button>');
         newWindow.document.write('<p id="scaleInfo">当前比例：100%</p>');
         newWindow.document.write('<button id="previousButton">上一张</button>');
         newWindow.document.write('<button id="nextButton">下一张</button>');
         newWindow.document.write('<p id="pageInfo">Page 1 of ' + imageUrls.length + '</p>');
         newWindow.document.write('<input id="pageInput" type="number" min="1" max="' + imageUrls.length + '" value="1">');
         newWindow.document.write('<button id="goButton">Go</button>');
         newWindow.document.write('<p id="warning"></p>');
         newWindow.document.write('</div>');
         newWindow.document.write('<img id="myImage" src="' + imageUrls[0] + '">');
         newWindow.document.write('<script>');
         newWindow.document.write('var currentIndex = 0; var imageUrls = ' + JSON.stringify(imageUrls) + '; var scale = 100;');
         newWindow.document.write('document.getElementById("increaseButton").addEventListener("click", function() {');
         newWindow.document.write('var img = document.getElementById("myImage");');
         newWindow.document.write('scale += 10;');
         newWindow.document.write('img.style.width = (img.naturalWidth * scale / 100) + "px";');
         newWindow.document.write('document.getElementById("scaleInfo").innerText = "当前比例：" + scale + "%";');
         newWindow.document.write('});');
         newWindow.document.write('document.getElementById("decreaseButton").addEventListener("click", function() {');
         newWindow.document.write('var img = document.getElementById("myImage");');
         newWindow.document.write('scale -= 10;');
         newWindow.document.write('img.style.width = (img.naturalWidth * scale / 100) + "px";');
         newWindow.document.write('document.getElementById("scaleInfo").innerText = "当前比例：" + scale + "%";');
         newWindow.document.write('});');
         newWindow.document.write('document.getElementById("nextButton").addEventListener("click", function() {');
         newWindow.document.write('currentIndex++;');
         newWindow.document.write('if (currentIndex >= imageUrls.length) { currentIndex = 0; }');
         newWindow.document.write('resetScale();');
         newWindow.document.write('updateImageAndPageInfo();');
         newWindow.document.write('});');
         newWindow.document.write('document.getElementById("previousButton").addEventListener("click", function() {');
         newWindow.document.write('currentIndex--;');
         newWindow.document.write('if (currentIndex < 0) { currentIndex = imageUrls.length - 1; }');
         newWindow.document.write('resetScale();');
         newWindow.document.write('updateImageAndPageInfo();');
         newWindow.document.write('});');
         newWindow.document.write('document.getElementById("goButton").addEventListener("click", function() {');
         newWindow.document.write('var pageIndex = document.getElementById("pageInput").value - 1;');
         newWindow.document.write('if (pageIndex >= 0 && pageIndex < imageUrls.length) {');
         newWindow.document.write('currentIndex = pageIndex;');
         newWindow.document.write('resetScale();');
         newWindow.document.write('updateImageAndPageInfo();');
         newWindow.document.write('} else {');
         newWindow.document.write('document.getElementById("warning").innerText = "此页已经超出范围";');
         newWindow.document.write('}');
         newWindow.document.write('});');
         newWindow.document.write('function updateImageAndPageInfo() {');
         newWindow.document.write('document.getElementById("myImage").src = imageUrls[currentIndex];');
         newWindow.document.write('document.getElementById("pageInfo").innerText = "Page " + (currentIndex + 1) + " of " + imageUrls.length;');
         newWindow.document.write('document.getElementById("pageInput").value = currentIndex + 1;');
         newWindow.document.write('document.getElementById("warning").innerText = "";');
         newWindow.document.write('}');
         newWindow.document.write('function resetScale() {');
         newWindow.document.write('var img = document.getElementById("myImage");');
         newWindow.document.write('scale = 100;');
         newWindow.document.write('img.style.width = "";');
         newWindow.document.write('document.getElementById("scaleInfo").innerText = "当前比例：" + scale + "%";');
         newWindow.document.write('}');
         newWindow.document.write('</script>');
         newWindow.document.write('</body></html>');
    }
    editButton.onclick = function() {
        // 処理編集操作
        console.log('Edit button clicked');
    }

    uploadButton.onclick = function() {
        // 处理上传操作
        var file = uploadInput.files[0];
        if (file) {
            console.log('File selected:', file.name);
        } else {
            console.log('No file selected');
        }
    }
};
