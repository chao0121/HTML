var header_ul=document.getElementById("header_ul");
var details=document.getElementById("details");
var logn=document.getElementById("logn");
var logn_none=document.getElementById("logn_none");
var logn_gray=document.getElementById("logn_gray");
//导航
header_ul.onmouseover=function(){
    details.style.display="block";
}
header_ul.onmouseenter=function(){
    details.style.display="none";
}
details.onmouseover=function(){
    details.style.display="block";
}
details.onmouseout=function(){
    details.style.display="none";
}
logn.onmouseover=function(){
    logn_none.style.visibility="visible";
    logn_gray.style.display="block";
}
logn.onmouseout=function(){
    logn_none.style.visibility="hidden";
    logn_gray.style.display="none";
}
logn_none.onmouseover=function(){
    logn_none.style.visibility="visible";
    logn_gray.style.display="block";
}
logn_none.onmouseout=function(){
    logn_none.style.visibility="hidden";
    logn_gray.style.display="none";
}
//视频切换
function mang_video(){
    var mangseng=document.getElementById("mangseng");
    var big_video=document.getElementById("big_video");
    var video=document.getElementById("video");
    var video_font=document.getElementById("video_font");
    var min_video=document.getElementById("min_video");
    var min_video_a=document.getElementById("min_video_a");
    var sign=0;
    mangseng.onclick=function(){
        if(sign==0) {
            video_font.style.display = "none";
            video.src = "video/leeqvideon.mp4";
            big_video.load();
            min_video.getElementsByTagName("video")[0].style.display = "none";
            min_video_a.style.display = "none";
            min_video.style.background = "url('new/img3.gif') no-repeat 100% 100%";
            min_video.style.width = "230px";
            min_video.style.height = "230px";
            mangseng.innerHTML = "洛&霞";
            sign = 1;
        }else{
            video_font.style.display = "block";
            video.src = "video/big-v2.mp4";
            big_video.load();
            min_video.getElementsByTagName("video")[0].style.display = "block";
            min_video_a.style.display = "block";
            min_video.style.background = "";
            min_video.style.width = "";
            min_video.style.height = "";
            mangseng.innerHTML = "神拳盲僧";
            sign=0;
        }
    }
}
//综合资讯
function mess(){
    var content_cut=document.getElementsByClassName("cut");
    var message_li=document.getElementById("message_ul").getElementsByTagName("li");
    var cut_num=0;
    for(var i=0;i<message_li.length;i++){
        message_li[i].onclick=function(){
            for(var i=0;i<message_li.length;i++){
                message_li[i].className="";
            }
            this.className="message_li";
            cut_num++;
            if(cut_num>1){
                cut_num=0;
            }
            for(var u=0;u<content_cut.length;u++){
                if(u==cut_num){
                    content_cut[u].style.display="block";
                }else{
                    content_cut[u].style.display="none";
                }
            }
        }
    }
}
//综合循环
function video_(){
    var loops=document.getElementById("loop");
    var max_loop=document.getElementById("max_loop");
    var min_loop_span=document.getElementById("min_loop").getElementsByTagName("span");
    var max_loop_num=0;
    var min_num=0;
    var times=setInterval(max_loops,5000);
    loops.onmouseover=function(){
        clearInterval(times);
    }
    loops.onmouseout=function(){
        times=setInterval(max_loops,5000);
    }
    for(var i= 0;i<min_loop_span.length;i++){
        min_loop_span[i].onclick=function(){
            for(var p=0;p<min_loop_span.length;p++){
                min_loop_span[p].className="";
            }
            this.className="min_loop_color";
            min_num=parseInt(this.getAttribute("minnum"));
            max_loop_num=parseInt(this.getAttribute("minnum"));
            startMove(max_loop,"margin-left",-min_num*820);
        }
    }
    function max_loops(){
        max_loop_num++;
        if(max_loop_num>4){
            max_loop_num=0;
        }
        for(var i=0;i<min_loop_span.length;i++){
            if(i==max_loop_num){
                min_loop_span[i].className="min_loop_color";
                startMove(max_loop,"margin-left",-i*820);
            }else{
                min_loop_span[i].className="";
            }
        }
    }
}
function startMove(obj,attr,iTarget){

    clearInterval(obj.timer);

    obj.timer=setInterval(function(){
        var init=parseInt(getStyle(obj,attr));
        var speed=(iTarget-init)/7;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(init==iTarget){
            clearInterval(obj.timer);
        }else{
            obj.style[attr]=init+speed+'px';
        }
    },30)
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}
//视频中心
function video_left(){
    var videos_left_ul=document.getElementById("videos_left_ul");
    var promo_span=document.getElementById("promo").getElementsByTagName("span");
    var left_ul_num=0;
    var left_ul_time=setInterval(left_ul,5000);
    videos_left_ul.onmouseover=function(){
        clearInterval(left_ul_time);
    }
    videos_left_ul.onmouseout=function(){
        left_ul_time=setInterval(left_ul,5000);
    }
    for(var i=0;i<promo_span.length;i++){

        promo_span[i].onclick=function(){
            for(var u=0;u<promo_span.length;u++){
                promo_span[u].className="promo_min";
            }
            this.className="promo_max";
            left_ul_num=parseInt(this.getAttribute("promonum"));
            startMove(videos_left_ul,"left",-left_ul_num*400);
        }
    }

    function left_ul(){
        left_ul_num++;
        if(left_ul_num>4){
            left_ul_num=0;
        }
        for(var p=0;p<promo_span.length;p++){
            if(p==left_ul_num){
                promo_span[p].className="promo_max";
                startMove(videos_left_ul,"left",-p*400);
            }else{
                promo_span[p].className="promo_min";
            }
        }
    }
}
//英雄排行榜
function relo_off(){
    var off=document.getElementById("off");
    var use=document.getElementById("use");
    var ranking_data=document.getElementsByClassName("ranking_data");
    var ranking_num=0;
    for(var i=0;i<ranking_data.length;i++){
        ranking_data[i].onclick=function(){
            for(var u=0;u<ranking_data.length;u++){
                ranking_data[u].className="ranking_data";
            }
            this.className="ranking_data datas";
            ranking_num=parseInt(this.getAttribute("rankingnum"));
            if(ranking_num==0){
                off.style.display="block";
                use.style.display="none";
            }else{
                off.style.display="none";
                use.style.display="block";
            }
        }
    }
}
//返回顶部
function get_top(){
    var return_top=document.getElementById("return");
    var return_p=return_top.getElementsByTagName("p")[0];
    return_top.onmouseover=function(){
        return_p.style.display="block";
        return_top.style.background="#fff";
    }
    return_top.onmouseout=function(){
        return_p.style.display="none";
        return_top.style.background="url('new/1139.png') no-repeat -1109px -249px";
    }
}
//滚轮 监控
function scroll(){
    var scroll_time=null;
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var return_top=document.getElementById("return");
        var head_fixd=document.getElementsByTagName("header")[0];
        startMove(return_top,"top",scrollTop+400);
        if(scrollTop>100){
            head_fixd.style.position="fixed";
        }else{
            head_fixd.style.position="relative";
        }
        if(scrollTop>700){
            return_top.style.display="block";
        }else{
            return_top.style.display="none";
        }
        return_top.onclick=function(){
            startMove(return_top,"top",scrollTop+400);
            scroll_time=setInterval(function(){
                var scrollTops = document.documentElement.scrollTop || document.body.scrollTop;
                var speed=Math.ceil(scrollTops/5);
                document.documentElement.scrollTop=document.body.scrollTop=scrollTops-speed;
                if(scrollTops==0){
                    clearInterval(scroll_time);
                }
            },30);
        }
    }
}
//战士 hreo_war  刺客  hero_assassin  坦克 hero_Tank  射手 hero_shot  法师 hero_Master  辅助  hero_assist
//"name":"Aatrox","role":"亚托克斯","title":"暗裔剑魔","type":["战士","坦克"], 大图 big_img  小图 small_img
//每个ul 添加 音频效果
function $audio() {
    var hero_ul_a = document.getElementsByClassName("hero_a");
    for (var i = 0; i < hero_ul_a.length; i++) {
        hero_ul_a[i].onmouseover = function () {
            this.style.color = "#00A383";
            this.getElementsByTagName("span")[0].style.display = "block";
            this.getElementsByTagName("audio")[0].removeAttribute("preload");
            this.getElementsByTagName("audio")[0].setAttribute("autoplay","");
            this.getElementsByTagName("audio")[0].load();
        }
        hero_ul_a[i].onmouseout = function () {
            this.style.color = "#666";
            this.getElementsByTagName("span")[0].style.display = "none";
            this.getElementsByTagName("audio")[0].removeAttribute("autoplay");
            this.getElementsByTagName("audio")[0].setAttribute("preload","");
            this.getElementsByTagName("audio")[0].load();
        }
    }
}
// 英雄类型选中  加载新英雄
function hero_sele(){
    var hero_select=document.getElementById("hero_ul").getElementsByTagName("li");
    var hero_select_span=document.getElementsByClassName("heroall");
    for(var i=0;i<hero_select.length;i++){
        hero_select[i].onclick=function(){
            var se=this.getAttribute("se");
            var hero_ul=document.getElementById("hero_li");
            var hero_ul_lis=hero_ul.getElementsByTagName("li");
            for(var i=hero_ul_lis.length-1;i>=0;i--){
                hero_ul.removeChild(hero_ul_lis[i]);
            }
            for(var u=0;u<hero_select_span.length;u++){
                hero_select_span[u].getElementsByTagName("b")[0].className="";
            }
            this.getElementsByTagName("span")[0].getElementsByTagName("b")[0].className="on";
            var xml=new XMLHttpRequest();
            xml.open("post","pero.json",true);
            xml.send();
            xml.onreadystatechange=function(){
                if(xml.readyState==4){
                    if(xml.status==200){
                        var  hero_arr=JSON.parse(xml.responseText);
                        for(var i=0;i<hero_arr[se].length;i++){
                            var new_li=document.createElement("li");
                            var new_li_a=document.createElement("a");
                            var new_li_span=document.createElement("span");
                            var new_li_b=document.createElement("b");
                            var new_li_p=document.createElement("p");
                            var new_li_audio=document.createElement("audio");
                            new_li_audio.src="audio/china/"+hero_arr[se][i].name+".mp3";
                            new_li_audio.setAttribute("preload","");
                            new_li_p.innerHTML=hero_arr[se][i].title;
                            new_li_a.className="hero_a";
                            new_li_span.className="hero_a_none";
                            new_li.className="li_center";
                            new_li.setAttribute("sus",i);
                            new_li.setAttribute("clickname",se);
                            new_li.style.backgroundImage="url(images/"+hero_arr[se][i].name+"/"+hero_arr[se][i].name+".png)";
                            new_li_span.appendChild(new_li_b);
                            new_li_a.appendChild(new_li_span);
                            new_li_a.appendChild(new_li_p);
                            new_li.appendChild(new_li_a);
                            new_li_a.appendChild(new_li_audio);
                            hero_ul.appendChild(new_li);
                        }
                        $audio();
                        hero_ad();
                        yingXiong();
                    }else{
                        alert(xml.status);
                    }
                }
            }

        }

    }
}
//默认英雄加载
function $hero_add(){

        var xml=new XMLHttpRequest();
        xml.open("get","pero.json",true);
        xml.send(null);


    xml.onreadystatechange=function(){
        if(xml.readyState==4){
            if(xml.status==200){
                var  hero_arr=JSON.parse(xml.responseText);
                // alert(hero_arr.hero_all[0].title);

                var hero_ul=document.getElementById("hero_li");
                for(var i=0;i<hero_arr.hero_all.length;i++){
                    var new_li=document.createElement("li");
                    var new_li_a=document.createElement("a");
                    var new_li_span=document.createElement("span");
                    var new_li_b=document.createElement("b");
                    var new_li_p=document.createElement("p");
                    var new_li_audio=document.createElement("audio");
                    new_li_audio.src="audio/china/"+hero_arr.hero_all[i].name+".mp3";
                    new_li_audio.setAttribute("preload","");
                    new_li_p.innerHTML=hero_arr.hero_all[i].title;
                    new_li_a.className="hero_a";
                    new_li_span.className="hero_a_none";
                    new_li.className="li_center";
                    new_li.setAttribute("sus",i);
                    new_li.setAttribute("clickname","hero_all");
                    new_li.style.backgroundImage="url(images/"+hero_arr.hero_all[i].name+"/"+hero_arr.hero_all[i].name+".png)";
                    new_li_span.appendChild(new_li_b);
                    new_li_a.appendChild(new_li_span);
                    new_li_a.appendChild(new_li_p);
                    new_li.appendChild(new_li_a);
                    new_li_a.appendChild(new_li_audio);
                    hero_ul.appendChild(new_li);
                }
            }else{
                alert(xml.status);
            }
        }
    }
}
mang_video();//新英雄视频切换
mess();//综合资讯
video_();//视频加载
video_left();//视频中心加载
hero_sele();// 英雄类型选中  加载新英雄
$hero_add(); //默认英雄加载
relo_off();//英雄排行榜
get_top();//返回顶部
scroll();//滚轮监控
close_hero();//关闭英雄详情页
window.onload=function() {
    $audio();//初始化 鼠标效果
    hero_ad();//选中英雄后，详情页数据添加
}
//点击关闭英雄页面
function close_hero(){
    var delet=document.getElementById("delet");
    delet.onclick=function(){
        var masking=document.getElementById("masking");
        masking.style.display="none";
    }
}

//选中英雄后，详情页数据添加
function hero_ad(){
    var click_li = document.getElementById("hero_li").getElementsByTagName("li");
    var click_sus = 0;
    var click_str = "";
    for (var i = 0; i < click_li.length; i++) {
        click_li[i].onclick = function () {
            click_sus = this.getAttribute("sus");
            click_str = this.getAttribute("clickname");
            var masking = document.getElementById("masking");
            var masking_pero_message = document.getElementById("masking_pero_message");
            var skin=document.getElementById("skin");
            var skin_ul_li=skin.getElementsByTagName("li");
            if(skin_ul_li[0]!=undefined){
                for(var y=skin_ul_li.length-1;y>=0;y--){
                    skin.removeChild(skin_ul_li[y]);
                }
            }
            var masking_out_img=document.getElementById("masking_out_img");
            var masking_out_li=masking_out_img.getElementsByTagName("li");
            if(masking_out_li[0]!=undefined){
                for(var i=masking_out_li.length-1;i>=0;i--){
                    masking_out_img.removeChild(masking_out_li[i]);
                    masking_out_img.style.width=0;
                    masking_out_img.style.left=0;
                }
            }
            var dv=document.getElementById("masking_pero_type");
            var new2=document.getElementById("masking_pero_message").getElementsByTagName("h2")[0];
            var new1=document.getElementById("masking_pero_message").getElementsByTagName("h1")[0];
            if(new1!=undefined){
                masking_pero_message.removeChild(new1);
                masking_pero_message.removeChild(new2);
                masking_pero_message.removeChild(dv);
            }
            masking.style.display = "block";
            var xml = new XMLHttpRequest();
            xml.open("post", "pero.json", true);
            xml.send();
            xml.onreadystatechange = function () {
                if (xml.readyState == 4) {
                    if (xml.status == 200) {
                        var hero_arr = JSON.parse(xml.responseText);
                        var h1=document.createElement("h1");
                        var h2=document.createElement("h2");
                        var new_div=document.createElement("div");

                        h1.innerHTML=hero_arr[click_str][click_sus].title;
                        h2.innerHTML=hero_arr[click_str][click_sus].role;
                        new_div.className="masking_pero_type";
                        new_div.id="masking_pero_type";
                        for(var o=0;o<hero_arr[click_str][click_sus].type.length;o++) {
                            var new_div_span=document.createElement("span");
                            new_div_span.innerHTML=hero_arr[click_str][click_sus].type[o];
                            new_div.appendChild(new_div_span);
                        }
                        masking_pero_message.insertBefore(new_div,masking_pero_video);
                        var newdiv=document.getElementById("masking_pero_type");
                        masking_pero_message.insertBefore(h2,newdiv);
                        var newh2=document.getElementById("masking_pero_message").getElementsByTagName("h2")[0];
                        masking_pero_message.insertBefore(h1,newh2);
                        //添加小ul
                        for(var i=0;i<hero_arr[click_str][click_sus].small_img.length;i++){
                            var skin_li=document.createElement("li");
                            var skin_b=document.createElement("b");
                            var skin_img=document.createElement("img");
                            skin_li.setAttribute("skinnum",i);
                            if(i==0){
                                skin_img.src="images/"+hero_arr[click_str][click_sus].name+"/"+hero_arr[click_str][click_sus].small_img[i];
                                skin_li.appendChild(skin_img);
                                skin_b.style.display="block";
                                skin_li.appendChild(skin_b);
                                skin_li.style.opacity=1;
                                skin.appendChild(skin_li);
                            }else{
                                skin_img.src="images/"+hero_arr[click_str][click_sus].name+"/"+hero_arr[click_str][click_sus].small_img[i];
                                skin_li.appendChild(skin_img);
                                skin_li.appendChild(skin_b);
                                skin.appendChild(skin_li);
                            }
                        }
                        //添加大背景
                        for(var u=0;u<hero_arr[click_str][click_sus].big_img.length;u++){
                            var out_li=document.createElement("li");
                            out_li.style.background="url('images/"+hero_arr[click_str][click_sus].name+"/"+hero_arr[click_str][click_sus].big_img[u]+"') no-repeat";
                            masking_out_img.appendChild(out_li);
                        }
                        yingXiong();
                    } else {
                        alert("错误类型:" + xml.status + "///" + xml.responseText);
                    }
                }
            }
        }
    }
}
function yingXiong(){
    var mask_ul=document.getElementById("masking_out_img");
    var skin=document.getElementById('skin');
    var skin_li=skin.getElementsByTagName("li");
    for(var i=0;i<skin_li.length;i++){
        skin_li[i].onclick=function(){
            var num=this.getAttribute("skinnum");
            for(var u=0;u<skin_li.length;u++){
                skin_li[u].getElementsByTagName("b")[0].style.display="none";
                skin_li[u].style.opacity=0.7;
            }
            this.getElementsByTagName("b")[0].style.display="block";
            this.style.opacity=1;
            mask_ul.style.width=skin_li.length*980+"px";
            startMove(mask_ul,"left",-num*980);
        }
    }
}



