import React,{ useEffect } from 'react';
import { connect  } from 'dva';
import axios from 'axios';
import { Input } from 'antd';
import styles from './upLoad.scss';

function UpLoad(props){
    let updateImg = e => {
        let files = e.target.files;
        var reader = new FileReader();
        var canvas = e.target.nextSibling,
            ctx = canvas.getContext("2d"),
            img = new Image();
        ctx.arc(40, 40, 40, 0, Math.PI * 2, false);
        ctx.clip(); 
        reader.onload = function(){
            axios({
                method: 'post',
                url: 'http://123.206.55.50:11000/upload_base64',
                data: {base64: this.result}
            }).then(body=>{
                console.log('body...', body);
                img.src = body.data.data.path;
                img.onload = function() {
                    ctx.drawImage(img, 0, 0, 200,200,0,0,80,80);
                }
            }).catch(e=>{
                console.log('e..', e);
            })
        }
        reader.readAsDataURL(files[0]);
        var base64 = canvas.toDataURL();
        var img = e.target.nextSibling.nextSibling;
        img.setAttribute('src', base64);
    }
    return <div className={styles.wrapper}>
        <Input type="file" onChange={updateImg}></Input>
        <canvas width="200" height="200"></canvas>
        <img src="" alt="" />
    </div>
}


const mapStateToProps = state=>{
    return {
    }
}

const mapDisaptchToProps = dispatch=>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(UpLoad)
