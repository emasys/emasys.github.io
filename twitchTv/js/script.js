/**
 * Created by EMASYS ND on 7/11/2017.
 *for easier JSON formatting, I recommend firefox developer browser
 *or https://jsonformatter.curiousconcept.com/
 *use those options and thank me later.
 **/

//Array of channels from fcc user stories
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
//Variable declaration
var url,channelNameAll,channelUrlAll, channelLogoAll, contentAll;
function getChannelInfo() {
    channels.forEach(function(channel) {
        function setURL(type, name) {
            return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
        }
        $.getJSON(setURL("streams", channel), function(data) {
            var showing, streaming,channelName,channelUrl, channelLogo, contentOnline, contentOffline;
            switch (data.stream){
                case null:
                    showing = "Not Streaming, click to see old videos";
                    streaming = '<span class="offline">offline</span>';
                    $.getJSON(setURL("channels", channel), function(data) {
                        var channelLogo2;
                        if(data.logo == null){
                            channelLogo2 = "https://dummyimage.com/200x300&text=NO+LOGO";
                        }else {
                            channelLogo2 = data.logo;
                        }
                        var channelUrl2 = data.url;
                        var channelName2 = data.display_name;
                        contentOffline = "<div class=\"card\" >" +
                            "<div class=\"row\">" +
                            "<div class=\"col-3 \"><img src='" + channelLogo2 + "' class='iconize'></div>" +
                            "<div class=\"col-4  hidden-xs-down text-right cardText\">" +
                            "<h5 class='title'>Channel Name:</h5>" +
                            "<p class=\"card-lines\">Currently Streaming:</p>" +
                            "</div>" +
                            "<div class=\"col-8  col-sm-5 offset-1 offset-sm-0 cardText\">" +
                            "<h5 class='title'><a href='" + channelUrl2 + "' target='_blank'>" + channelName2 + "</a></h5>" +
                            "<p class=\"card-lines\"><a href='" + channelUrl + "' target='_blank'>" + showing + "</a></p>" +
                            "<p class=\"card-lines borders status\" >" + streaming + "</p>" +
                            "</div></div></div>";
                        $(".offlineContent").append(contentOffline);
                    });
                    break;
                case undefined:
                    showing = "Account Closed";
                    streaming = '<span class="offline">Closed</span>';
                    break;
                default:
                    showing = data.stream.channel.status;
                    channelName = data.stream.channel.display_name;
                    if(data.stream.channel.logo == null){
                        channelLogo = "https://dummyimage.com/200x300&text=NO+LOGO";
                    }else {
                        channelLogo = data.stream.channel.logo;
                    }
                    channelUrl = data.stream.channel.url;
                    streaming = '<span class="online">online</span>';
                    contentOnline = "<div class=\"card\" >" +
                        "<div class=\"row\">" +
                        "<div class=\"col-3 \"><img src='" + channelLogo + "' class='iconize'></div>" +
                        "<div class=\"col-4  hidden-xs-down text-right cardText\">" +
                        "<h5 class='title'>Channel Name:</h5>" +
                        "<p class=\"card-lines\">Currently Streaming:</p>" +
                        "</div>"+
                        "<div class=\"col-8  col-sm-5 offset-1 offset-sm-0 cardText\">" +
                        "<h5 class='title'><a href='" + channelUrl + "' target='_blank'>" + channelName + "</a></h5>" +
                        "<p class=\"card-lines\"><a href='" + channelUrl + "' target='_blank'>" + showing + "</a></p>" +
                        "<p class=\"card-lines borders status\" >" + streaming + "</p>" +
                        "</div></div></div>";
                    $(".onlineContent").append(contentOnline);
                    break;
            }
            $.getJSON(setURL("channels", channel), function(data) {
                if(data.logo == null){
                    channelLogoAll = "https://dummyimage.com/200x300&text=NO+LOGO";
                }else {
                    channelLogoAll = data.logo;
                }
                channelUrlAll = data.url;
                channelNameAll = data.display_name;
                contentAll = "<div class=\"card\" >" +
                    "<div class=\"row\">" +
                    "<div class=\"col-3 \"><img src='" + channelLogoAll + "' class='iconize'></div>" +
                    "<div class=\"col-4  hidden-xs-down text-right cardText\">" +
                    "<h5 class='title'>Channel Name:</h5>" +
                    "<p class=\"card-lines\">Currently Streaming:</p>" +
                    "</div>"+
                    "<div class=\"col-8  col-sm-5 offset-1 offset-sm-0 cardText\">" +
                    "<h5 class='title'><a href='" + channelUrlAll + "' target='_blank'>" + channelNameAll + "</a></h5>" +
                    "<p class=\"card-lines\"><a href='" + channelUrl + "' target='_blank'>" + showing + "</a></p>" +
                    "<p class=\"card-lines borders status\" >" + streaming + "</p>" +
                    "</div></div></div>";
                $(".allContent").append(contentAll);
            });
        });
    });
}

$(document).ready(function(){
    getChannelInfo();
    $(".offlineContent").hide();
    $(".onlineContent").hide();
    $(".allContent").show();
    $(".nav-link").click(function() {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
        var display = $(this).attr('id');
        switch (display){
            case "all":
                $(".onlineContent").hide();
                $(".offlineContent").hide();
                $(".allContent").show();
                break;
            case "online":
                $(".allContent").hide();
                $(".offlineContent").hide();
                $(".onlineContent").show();
                break;
            case "offline":
                $(".allContent").hide();
                $(".onlineContent").hide();
                $(".offlineContent").show();
                break;
        }
    });

});
