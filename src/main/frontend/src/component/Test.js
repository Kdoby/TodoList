import React, {useState} from 'react';
import axios from 'axios';

export default function Test(){
    const [newCategory, setNewCategory] = useState('');
    const [userName, setUserName] = useState('');


    const addCategory = async () => {

            try {
                console.log("userName: " + userName + "\nnewCategoryName: " + newCategory);

                const response = await axios.post('/api/categories', {
                    name: newCategory,
                    userId: userName,
                });

                alert("success");
                setNewCategory("");

                if(response.data.success){
                    alert(response.data.message);
                } else{
                    alert("response error");
                }
            } catch (error) {
                alert("error");
            }
        };


    return(
    <div>
        <div>
            UserName : <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div>
            add category: <input type="text"  onChange={(e) => setNewCategory(e.target.value)}/>
            <button onClick={addCategory}>add</button>
        </div>
    </div>
    );
}