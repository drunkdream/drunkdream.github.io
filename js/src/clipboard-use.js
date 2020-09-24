/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<div class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-globe"></i><span>COPY</span>';
    copyHtml += '</div>';
    $("pre").append(copyHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
        text: function(trigger) {
            return trigger.previousSibling.innerText;
        }
    });
	clipboard.on('success', function(e) {
		console.info('Action:', e.action);
		console.info('Text:', e.text);
		console.info('Trigger:', e.trigger);
		e.trigger.getElementsByTagName('span')[0].textContent = 'Copied';
		setTimeout(function() {
			e.trigger.getElementsByTagName('span')[0].textContent = 'COPY';
		}, 2000);
		e.clearSelection();
	 
	});
	clipboard.on('error', function(e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);
    });
  }
  setTimeout(initCopyCode, 1000);
}(window, document);