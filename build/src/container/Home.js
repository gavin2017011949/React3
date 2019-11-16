import React, { Component } from 'react'
import { NavBar, Icon, Tabs ,Carousel, WingBlank} from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '家居'},
    { title: '餐厨' },
    { title: '床上用品' },
  ];
export default class Home extends Component {
    state = {
        data: ['1', '2'],
        // imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2'],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                <NavBar
                    style={{width:'100%',position:'fixed',zIndex:'1000',backgroundColor:'#3fcccb',color:'#fff'}}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ color:'#fff', marginRight: '16px' }} />,
                    // ]}
                    >住吧家居</NavBar>
                    {/* <Tabs tabs={tabs2}
                initialPage={1}
                tabBarUnderlineStyle={{border:'2px solid #ffdb2c'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }} */}
                
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    推荐
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    家居
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    餐厨
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    床上用品
                </div> */}
                {/* </Tabs> */}


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
                src={`images/banner${val}.png`}
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
  

                <div style={{position:'relative',top:'45px',marginLeft:10,marginRight:10,marginTop:10}}>
                    <img style={{width:'31%',marginRight:'3%'}} src='images/home1.jpg'/>
                    <img style={{width:'31%',marginRight:'3%'}} src='images/home2.jpg'/>
                    <img style={{width:'31%'}} src='images/home3.jpg'/>
                </div>
                <div style={{position:'relative',top:'45px',width:'100%',height:20,borderLeft:'2px solid #3fcccb'}}>
                  <p style={{marginLeft:10}}>热门推荐</p>
                </div>
                <div>
                  <img style={{position:'relative',top:'45px',width:'100%'}} src='images/home4.jpg'/>
                  </div>

            </div>
        )
    }
}
