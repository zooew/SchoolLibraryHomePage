$().ready(function(){
    $(".search-nav-tab").click(handle_click_search_nav_tab);
    $(".hpEvents .titleTabs li").click(handle_click_events_tab);
});

function handle_click_search_nav_tab()
{
    var id = $(this).attr("id");
    $(".search-bar-item-now").removeClass("search-bar-item-now");
    $("#search-bar-item" + id[id.length - 1]).addClass("search-bar-item-now");
    $(".search-nav-now").removeClass("search-nav-now");
    $(this).addClass("search-nav-now");
}
function handle_click_events_tab()
{
    var this_class = $(this).attr("class");
    if(this_class.indexOf("active") >= 0){
        return;
    }
    var id = $(this).attr("id");
    $(".hpEvents .titleTabs li.active").removeClass("active");
    $(this).addClass("active");
    $(".active.hpEvents-section").removeClass("active");
    console.log()
    $("#tabpanel-" + id[id.length - 1]+" .hpEvents-section").addClass("active");
}