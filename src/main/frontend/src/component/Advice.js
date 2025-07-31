import './Advice.css';

import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Advice({ userName, todayDate }){
    const [adv, setAdv] = useState('');
    const [saveAdv, setSaveAdv] = useState(false);

    // lesson 조회
    const initialAdvSetting = async () => {
        if(!todayDate) { return; }
        try{
            const response = await axios.get(`/api/todo/lesson/${userName}/${todayDate}`);
            setAdv(response.data);
        } catch (e) {
            console.error("fail fetch: ", e);
        }
    }

    // lesson 등록
//    const setAdv = async () => {
//        try{
//            const response = await axios.post('api/todo/lesson');
//            setAdv(response.data);
//        } catch (e) {
//            console.error("fail fetch: ", e);
//        }
//    }

    // 새 lesson 랜덤으로
    const newAdvice = async () => {
        try {
            const response = await axios.get('https://korean-advice-open-api.vercel.app/api/advice');
            setAdv(response.data);
        } catch (e) {
            console.error("fail fetch: ", e);
        }
    }

    const selectAdvice = () => {
    };

    useEffect(() => {
        console.log("todayDate: " + todayDate);
        initialAdvSetting();
    }, [todayDate]);

    return (
        <div style={{ width: "100%",
                      height: "100%",
                      margin: "0 auto",
                      backgroundColor: "lightGray"
                   }}
        >
            <div style={{margin:"0 10px"}}>
                <img src="/images/random.png"
                     onClick={() => newAdvice()} />
                &nbsp;&nbsp;&nbsp;
                <img src="/images/star.png"
                     onClick={() => selectAdvice()}/>
            </div>
            <div style={{ fontSize:"30px", textAlign:"center", margin:"20px"}}><span>{adv.message}</span><br /><span style={{fontSize:"20px"}}>-{adv.author}</span></div>

        </div>
    );
}