$(function () {
	var video = $('.modal-video');
	video.map(function (index, ele) {
		ele.onplay = function () {
			$(ele).next().hide();
		};
		ele.onpause = function () {
			$(ele).next().show();
		};
	});
});

$(function () {
	var playIcon = $('img[class="play-video-img"]');
	playIcon.map(function (index, ele) {
		ele.onclick = function () {
			$(ele).prev()[0].play();
		}
	});
});


function showModal(modalId) {
	$(modalId).modal('show');
}

$(function () {
	var modal = $('div[class="modal fade"]');

	modal.on('show.bs.modal', function () {
		$(this).find('img[class="play-video-img"]').show();
	});

	modal.on('hide.bs.modal', function () {
		try {
			$(this).find('video')[0].pause();
			$(this).find('img[class="play-video-img"]').hide();
		} catch (err) {
		}
	});
});
