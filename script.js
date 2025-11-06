//搜索总数文本
const searchAll = "14";
document.getElementById("count").textContent = searchAll;

//搜索内容
function ok(){
    let find = document.getElementById("find").value;
    if(find == "你好"){
    //1
        alert("你好");
    }
    else if(find == "hello"){
    //2
        alert("hello");
    }
    else if(find == "尼哥"){
    //3
        alert("你妈");
    }
    else if(find == "马帅"){
    //4
        window.open("pedia/MS.html");
    }
    else if(find == "马帅工作室"){
    //5
        alert("制作中");
    }
    else if(find == "YouTube"){
    //6
        alert("一个伟大的视频软件！也是世界上最大的视频软件！");
    }
    else if(find == "去Grokipedia"){
    //7
        window.open("grokipedia.com");
    }
    else if(find == "我现在很愤怒"){
        //8随机测试
        const random = Math.random();
        if(random < 0.3) {
           alert("首先您需要冷静") ;
        }
        else if(random < 0.65){
            alert("请冷静");
        }
        else{
            alert("⚠️现在首要任务是冷静下来！");
        }
    }
    else if(find == "我不好"){
    //9
        alert("发生什么了？");
    }
    else if(find == "Grokipedia"){
        //10
        alert("马斯克势必打败维基百科的第一步");
    }
    else if(find == "Wikipedia"){
    //11
        alert("当今世界上最大的百科软件/网站");
    }
    else if(find == "不三不四中学"){
    //12
        alert("形容一个学校");
    }
    else if(find == "学校"){
        //13
        alert("未成年学习的地方");
    }
    else if(find == "年龄"){
    //14_判定句式-年龄
        let age=prompt("输入年龄");      
        if(age >= 361) {
            alert("请输入合理年龄");
        }    
        else if(age == 360){
            alert("感谢您一生为美国而战，您应该继续领取医保");
        }
        else if(age >= 100){
            alert("百岁老人您好，欢迎你能拜访我们的网站");
        }
        else if(age >= 18) {
            alert("您成年了");
        }
        else if(age <= 0){
            alert("⚠️请输入正常年龄！");
        }
        else {
            alert("您未成年");
        }
    }
    else{
        window.open("worry.html");
    }
}
//尝试加入enter搜索
document.getElementById("find").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        ok();
    }
});