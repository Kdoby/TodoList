import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Advice(){
    const [adv, setAdv] = useState('');

    const newAdvice = async () => {
        try {
            const response = await axios.get('https://korean-advice-open-api.vercel.app/api/advice');
            setAdv(response.data);
        } catch (e) {
            console.error("fail fetch: ", e);
        }
    }

    useEffect(() => {
        newAdvice();
    }, []);

    useEffect(() => {
        console.log(adv.message);
        console.log(adv.author);
    }, [adv])

    return (
        <div style={{ width: "100%",
                      height: "100%",
                      margin: "0 auto",
                      backgroundColor: "lightGray"
                   }}
        >
            <div>
                <span onClick={() => newAdvice()}>random</span>
                &nbsp;&nbsp;&nbsp;
                <span>fix</span>
            </div>
            <div style={{ fontSize:"30px", textAlign:"center", margin:"20px"}}><span>{adv.message}</span><br /><span style={{fontSize:"20px"}}>-{adv.author}</span></div>

        </div>
    );
}