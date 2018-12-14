// LIGHTBOX

lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
})

$('#searchBox').on('keyup', function(){
    var searchVal = $(this).val();
    var filterImg = $('[data-title]');
    if  (searchVal != ''){
        filterImg.addClass('hidden');
        $('[data-filter-item][data-title*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
    }else  {
        filterImg.removeClass('hidden');
    }
})