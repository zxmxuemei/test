var editedImage = null;
var selectedBubble = null;

function addComment() {
    var comment = document.getElementById('commentInput').value;
    var bubble = document.createElement('div');
    bubble.innerHTML = comment;
    bubble.classList.add('bubble');
    setBubblePosition(bubble);
    document.getElementById('editContainer').appendChild(bubble);
  
    bubble.addEventListener('mousedown', function(event) {
      selectedBubble = bubble;
      var offsetX = event.clientX - bubble.offsetLeft;
      var offsetY = event.clientY - bubble.offsetTop;
  
      document.addEventListener('mousemove', moveBubble);
      document.addEventListener('mouseup', releaseBubble);
  
      function moveBubble(event) {
        bubble.style.left = event.clientX - offsetX + 'px';
        bubble.style.top = event.clientY - offsetY + 'px';
      }
  
      function releaseBubble() {
        document.removeEventListener('mousemove', moveBubble);
        document.removeEventListener('mouseup', releaseBubble);
      }
    });
  }
  
  

function setBubblePosition(bubble) {
  var image = document.getElementById('editedImage');
  var containerRect = document.getElementById('editContainer').getBoundingClientRect();
  var imageRect = image.getBoundingClientRect();
  var x = imageRect.left - containerRect.left + imageRect.width / 2;
  var y = imageRect.top - containerRect.top + imageRect.height / 2;
  bubble.style.left = x + 'px';
  bubble.style.top = y + 'px';
}

function saveImage() {
    // 保存编辑后的图像的代码
  
    // 取消选中的注释元素
    selectedBubble = null;
  
    // 关闭编辑页面
    closeEditor();
  }
  
  function closeEditor() {
    // 取消选中的注释元素
    selectedBubble = null;
  
    // 关闭当前标签页或窗口
    window.close();
  }
  
  
  document.addEventListener('mousemove', function(event) {
    if (selectedBubble) {
      var offsetX = event.clientX - selectedBubble.offsetWidth / 2;
      var offsetY = event.clientY - selectedBubble.offsetHeight / 2;
      selectedBubble.style.left = offsetX + 'px';
      selectedBubble.style.top = offsetY + 'px';
    }
  });
  
window.addEventListener('load', function() {
  var urlParams = new URLSearchParams(window.location.search);
  var imageUrl = urlParams.get('image');
  document.getElementById('editedImage').src = imageUrl;

  // 画像の読み込みが完了した後に吹き出しの位置を再設定する（画像の完全な読み込みを確認するため）
  document.getElementById('editedImage').addEventListener('load', function() {
    if (editedImage === null) {
      editedImage = document.getElementById('editedImage');
      setBubblePosition(document.querySelector('.bubble'));
    }
  });
}
);
