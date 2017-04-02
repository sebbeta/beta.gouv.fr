$('.attribution').each(function() {
    if ($.attr(this,'data-origin') == 'flickr') {
        var target = this;
        $.ajax({
            url: "https://api.flickr.com/services/rest/",
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data:{
                method: 'flickr.photos.getInfo',
                api_key: 'xxx',
                format: 'json',
                photo_id: $.attr(this,'data-id'),
            },
            success: function(data){
                // TODO: handle license values
                var info = '<small><a title="'+data.photo.title._content+'" href="'+data.photo.urls.url[0]._content+'">'+data.photo.title._content+
                            '</a> flickr photo by <a href="https://flickr.com/people/'+data.photo.owner.username+'">'+data.photo.owner.username+
                            '</a> shared under a <a href="https://creativecommons.org/licenses/by/2.0/">Creative Commons (BY) license</a></small>';
                $(target).replaceWith(info);
            }
        });
    }
});
