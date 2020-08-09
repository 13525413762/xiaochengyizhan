<template>
  <div id="pin">
    <div class="box-top">
      <div class="quan">全部</div>
      <div class="sh">拼团商品</div>
    </div>
<div class="xuan" v-for="item in data1">
  <div>
    <img src="../assets/img/mmexport1594114081836.jpg" />
  </div>
  <p style="padding: 10px;">{{item.msg1}}</p>
  <p class="zh">已成0团</p>
  <div class="xuan-bottom">
    <div class="bot-b">
     <span style="font-size: 14px;">{{item.msg2}}</span>
    <span style="text-decoration: line-through; color: gray; font-size: 10px;">{{item.msg3}}</span>
    </div>
    <div>
    <div class="bot-bo">2人开团</div><div class="bot-bt">去开团</div>
    </div>
  </div>
</div>

<div class="shpin" v-for="item in data1">
  <div>
    <img src="../assets/img/mmexport1594114086384.jpg" />
  </div>
  <p style="padding: 10px;">{{item.msg1}}</p>
  <p class="zh">已成0团</p>
  <div class="xuan-bottom">
    <div class="bot-b">
     <span style="font-size: 14px;">{{item.msg2}}</span>
    <span style="text-decoration: line-through; color: gray; font-size: 10px;">{{item.msg3}}</span>
    </div>
    <div>
    <div class="bot-bo">2人开团</div><div class="bot-bt">去开团</div>
    </div>
  </div>
</div>

  </div>
</template>

<script>

  export default{
    name:document.getElementById("pin"),
    data(){
      return{
      data1:[
        {msg1:'138斑鱼套餐',msg2:'￥128.00',msg3:'￥138.00'},
        {msg1:'福临门菜籽油',msg2:'￥43.90',msg3:'￥59.00'},
        {msg1:'柔和双沟（红精品）',msg2:'￥45.00',msg3:'￥68.00'}
      ],
      data2:[
        {msg1:'138斑鱼套餐',msg2:'￥128.00',msg3:'￥138.00'},
        {msg1:'福临门菜籽油',msg2:'￥43.90',msg3:'￥59.00'},
        {msg1:'柔和双沟（红精品）',msg2:'￥45.00',msg3:'￥68.00'}
      ]
      }
    },
    mounted() {
      $(function(){
        $(".xuan").show();
           $(".shpin").hide();
        $(".sh").click(function(){
           $(".xuan").hide();
           $(".shpin").show();
        });
        $(".quan").click(function(){
           $(".xuan").show();
           $(".shpin").hide();
        })
         $(".box-top div").eq(0).css("border-bottom","black 2px solid");
       $(".box-top div").click(function  () {
         $(this).css("border-bottom","black 2px solid");
         $(this).siblings().css("border-bottom","black 0px solid");
       })
      })
    }
  }
</script>

<style>
  .bot-bo{
    box-sizing: border-box;
    color: #2C3E50;
    text-align: center;
    font-size:10px ;
    display: inline-block;
    width: 60px;
    height: 21px;
    line-height: 20px;
    text-align: center;
    border: #2C3E50 1px solid;
  }
  .bot-bt{
     border: #2C3E50 1px solid;
     box-sizing: border-box;
     text-align: center;
    font-size:10px ;
    color: #DCDCDC;
    display: inline-block;
      width: 60px;
      height: 21px;
      line-height: 20px;
      background-color: #2C3E50;
  }
  .xuan-bottom{
    display: flex;
    justify-content: space-between;
  }

  .zh{
    color: #FFFFFF;
    font-size: 10px;
    text-align: center;
    border-radius: 3px;
    width: 50px;
    height: 15px;
    line-height: 15px;
    background-color: orange;
  }
  #pin{
    padding-bottom:80px ;
    padding-top: 35px;
    background-color: #DCDCDC;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .xuan{
    background-color: #FFFFFF;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px 10px;
  }
.xuan img{
  width: 100%;
  height:260px;
}
.shpin{
    background-color: #FFFFFF;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px 10px;
  }
.shpin img{
  width: 100%;
  height:260px;
}
  .box-top{
    background-color: #FFFFFF;
    width: 100%;
    position: fixed;
    height: 50px;
    top: 0px;
  }
  .box-top div{
    font-size: 12px;
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
    text-align: center;
  }
</style>
