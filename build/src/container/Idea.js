import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '彪' }
  ];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{width:'100%',position:'fixed',zIndex:'1000',backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#fff', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                     <div style={{width:'100%',height:'45px',float:'left'}}></div>
                    <Tabs tabs={tabs2}
                initialPage={0}
                // tabBarUnderlineStyle={{width:'16%',border:'2px solid #ffdb2c'}}
                // style={{position:'relative',top:'45px'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}> */}
                    <div style={{marginTop:10}}>
                        <img style={{width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea1.jpg'/>
                        <img style={{width:'45%',marginRight:'3%'}} src='images/idea2.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea3.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea4.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea5.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea6.jpg'/>
                    </div>
                {/* </div> */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div style={{marginTop:10}}>
                        <img style={{width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea1.jpg'/>
                        <img style={{width:'45%',marginRight:'3%'}} src='images/idea2.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea3.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea4.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea5.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea6.jpg'/>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#fff' }}>
                    <div style={{marginTop:10}}>
                        <img style={{width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea1.jpg'/>
                        <img style={{width:'45%',marginRight:'3%'}} src='images/idea2.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea3.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea4.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea5.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea6.jpg'/>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#fff' }}>
                <   div style={{marginTop:10}}>
                        <img style={{width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea1.jpg'/>
                        <img style={{width:'45%',marginRight:'3%'}} src='images/idea2.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea3.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea4.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea5.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea6.jpg'/>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#fff' }}>
                    <div style={{marginTop:10}}>
                        <img style={{width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea1.jpg'/>
                        <img style={{width:'45%',marginRight:'3%'}} src='images/idea2.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea3.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea4.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea5.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea6.jpg'/>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div style={{marginTop:10}}>
                        <img style={{width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea1.jpg'/>
                        <img style={{width:'45%',marginRight:'3%'}} src='images/idea2.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea3.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea4.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea5.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea6.jpg'/>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#fff' }}>
                    <div style={{marginTop:10}}>
                        <img style={{width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea1.jpg'/>
                        <img style={{width:'45%',marginRight:'3%'}} src='images/idea2.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea3.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea4.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginLeft:'3%',marginRight:'3%'}} src='images/idea5.jpg'/>
                        <img style={{marginTop:10,width:'45%',marginRight:'3%'}} src='images/idea6.jpg'/>
                    </div>
                </div>
                </Tabs>
            </div>
        )
    }
}
