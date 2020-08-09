 <template>
  <div id="app">

   <!-- <div>
      <div class="top"><input type="text" placeholder="搜索店铺"/><img src="./assets/img/ss.png" ></div>
    </div>
    <div class="lun">
      <img src="./assets/img/mmexport1594114090012.jpg" />
    </div>

    <p style="padding: 10px 5px; background-color: #FFFFFF;"><a href="" style="color: black;">点击下列进入门店</a></p>
    <div class="middle">
      <div class="dian" v-for="item in data1">
        <img src="./assets/img/mmexport1594114081836.jpg">
        <p >{{item}}</p>
      </div>
    </div>
    <div class="middle1">
      <div class="middle1-top">
        <div style="font-size: 16px; font-weight: bold; padding: 0 5px;">
          <a href="" style="color: black;">超级热卖商品</a></div><div style="font-size: 14px;color: grey; padding: 0 5px;">查看更多</div>
      </div>
       <div class="middle1-bet">
         <div v-for="item in data2">
           <img src="./assets/img/mmexport1594114095322.jpg" />
           <p>{{item.msg1}} </p>
           <p style="margin-top: 5px;padding-bottom: 10px;"><span style="color: red;font-size: 12px;">{{item.msg2}}</span>
           <span style="color: grey;text-decoration: line-through;">{{item.msg3}}</span></p>
         </div>
       </div>
    </div>

 <div class="middle1">
   <div class="middle1-top">
     <div style="font-size: 16px; font-weight: bold; padding: 0 5px;">
       <a href="" style="color: black;">超级好店</a></div><div style="font-size: 14px;color: grey; padding: 0 5px;">查看更多</div>
   </div>
    <div class="midd">
      <div v-for="item in data3">
        <img src="./assets/img/mmexport1594114095322.jpg" />
        <div class="middle1-bot" style="padding-bottom: 10px;">
          <div>{{item.msg1}}</div>
          <div>{{item.msg2}}</div>
        </div>
      </div>
    </div>
 </div> -->

 <router-view/>
    <div class="bottom">
      <div v-for="(item,i) in data4">
        <router-link :to="item.msg2">
        <img src="./assets/img/mmexport1594114081836.jpg" />
        <p>{{item.msg1}}</p></router-link>
      </div>
     
    </div>
 </div>

</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
      /* data1:[
        '美食小吃',
        '住宿',
        '商城',
        '婚庆传媒'
      ],
      data2:[
        {msg1: '520元订婚装饰套系',msg2:'￥499.00',msg3:'￥520.00'},
        {msg1: '德和招牌红焖鱼',msg2:'￥39.00',msg3:'￥58.00'},
         {msg1:  '仁和招牌富贵鱼',msg2:'￥30.40',msg3:'￥38.00'}
      ],
      data3:[
        {msg1: '头像',msg2:'5164人正在逛'},
        {msg1: '头像',msg2:'515人正在逛'},
        {msg1: '头像',msg2:'864人正在逛'},
      ], */
      data4:[
        {msg1:'点餐',msg2:'/dian'},
       {msg1:'拼团',msg2:'/pin'},
       {msg1:'砍价',msg2:'/kan'},
       {msg1:'我的',msg2:'/wo'}

      ]




  	}
  },
		mounted(){
			/* var _this=this;
			this.$axios.get('http://47.93.99.158:3000/mock/52/list').then(function(res){
				console.log(res.data)
				_this.data1=res.data
//				_this.list=res.data.data
//				_this.list1=res.data.new

			}).catch(function(error){
				console.log(error)
			}) */
		}
}
</script>

<style>

  .bottom{
    font-size: 14px;
    background-color:white;
    width: 100%;
    position: fixed;
    bottom: 0px;
    border-top: black 1px solid;
    box-sizing: border-box;
    padding: 10px 5px;
    display: flex;
    justify-content: space-around;
  }
  .bottom img{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    }
  /* .midd img{
    width: 120px;
    height: 120px;
  }
.middle1-bot{
  font-size: 12px;
  width: 130px;
  display: flex;
  justify-content: space-between;
}
  .middle1-bet img{
    width: 115px;
    height: 115px;
  }
  .middle1-bet{
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: 10px;
  }
  .midd{
    width:100%;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
  #app{
    padding-bottom: 75px;
    background-color: gainsboro;
  }
  .middle1{
    background-color: #FFFFFF;
    margin-top: 10px;
  }
  .middle1-top{
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .middle{
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
  }
  .dian p{
    padding-bottom: 20px;
    width: 80px;
    text-align: center;
  }
  .dian img{
    width: 80px;
    height: 80px;
    border-radius:40px;

  }
  *{
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .lun img{
    width: 100%;
    height: 13rem;
  }
  .top{
    position: relative;
    text-align:center;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background-color: #2C3E50;
  }
  .top>img{
    position: absolute;
    top: 1rem;
    left: 77%;
    width: 2rem;
    height: 2rem;
  }
  .top>input{
    box-sizing: border-box;
    padding-left: 2rem;
    font-size: 1rem;
    outline: none;
    border: 0px solid  white;
    border-radius:1.5rem ;
    width: 80%;
    height: 2.2rem;
    margin: 0 auto;
  } */
</style>
