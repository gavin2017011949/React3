import React, { Component } from 'react'
import { NavBar, Icon, Tabs ,Carousel, WingBlank,SearchBar} from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '家居'},
    { title: '餐厨' },
    { title: '床上用品' },
  ];
export default class Home extends Component {
    state = {
        data: ['1', '2','3','4'],
        // imgHeight: 176,
        data1: [
        {'key':1,'word':'桌'},
        {'key':2,'word':'床'},  
        {'key':3,'word':'椅'},  
        {'key':4,'word':'几'},     
        {'key':5,'word':'柜'},  
        {'key':6,'word':'书架'},  
        {'key':7,'word':'沙发'},  
        {'key':8,'word':'家居饰品'},  
        {'key':9,'word':'户外沙发'},  
        {'key':10,'word':'全部分类'},  
        ]
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2','3','4'],
          });
        }, 100);
      }
     
    render() {
        return (
            <div>
                <NavBar
                    style={{width:'100%',position:'fixed',zIndex:'1000',top:0,backgroundColor:'#3fcccb',color:'#fff'}}
                   rightContent={[
                    <img src='images/购物车.png' style={{width:'25px'}}/>
                        
                    ]}
                    >商城</NavBar>
                <div style={{width:'100%',position:'absolute',backgroundColor:'rgba(0, 0, 0, 0.3)',top:'45px',zIndex:999}}>
                        <img src="images/search.png" style={{float:'left',marginTop:'10px',marginLeft:'2%',width:'8%'}} />
                        <SearchBar placeholder="输入关键字搜索" style={{backgroundColor:'rgba(0, 0, 0, 0.1)',height:'90%',width:'90%', float:'left'}} />
                    </div>


                <WingBlank style={{margin:0,position:'relative',top:'45px'}}>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
            //   href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`images/store.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
  
            <div style={{position:'relative',top:'45px',backgroundColor:'#fff',height:'30%'}}>
                <div style={{width:'90%',height:'90%',marginLeft:'5%',marginRight:'5%',marginTop:10,paddingTop:10,overflow: 'auto'}}>
                    {this.state.data1.map(val => (
                        <div style={{width:'16%',marginRight:'4%',float:'left'}}>
                            {/* <a key={val} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}></a> */}
                            <img style={{width:'100%',paddingTop:0}} src={`images/store${val.key}.jpg`}/>
                            <p style={{fontSize:13,textAlign:'center'}}>{val.word}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{marginTop:10,overflow:'auto',position:'relative',top:'45px'}}>
              <div style={{width:'45%',float:'left',marginLeft:'3%',marginRight:'2%'}}>
                <img style={{width:'100%'}} src='images/store11.jpg'/>
                <p style={{fontSize:'12px',color:'#686868',textAlign:'left',marginBottom:5}}>Top Art Studio 欧式风格精细...</p>
                <p style={{fontSize:'12px',marginTop:0}}>¥39.95</p>
              </div>
              <div style={{width:'45%',float:'left',marginLeft:'2%',marginRight:'3%'}}>
                <img style={{width:'100%'}} src='images/store12.jpg'/>
                <p style={{fontSize:'12px',color:'#686868',textAlign:'left',marginBottom:5}}>顺顺工艺欧式风格外框黑...</p>
                <p style={{fontSize:'12px',marginTop:0}}>¥83.99</p>
              </div> 
              <img style={{width:'90%',marginLeft:'5%',marginRight:'5%'}} src='images/store13.png'/>
                {/* <p style={{float:'left'}}>顺顺工艺欧式风格外框黑...</p> */}
            </div>
                {/* <div style={{width:'100%',height:20,borderLeft:'2px solid #3fcccb'}}>
                  <p style={{marginLeft:10}}>热门推荐</p>
                </div> */}
                

            </div>
        )
    }
}
