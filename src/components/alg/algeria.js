import React, {useEffect, useState} from 'react';
import {fetchAlg } from '../../api';
import { CardAlg } from '../../components';

import './algeria.css';

const Algeria = () => {
    const [dataAlg, setDataAlg] = useState();
    useEffect(() => {
        const alg = async () => {
            try {
                const  res = await fetchAlg();
                setDataAlg(res)
                console.log(res);
            } catch (error) {}
        }
        alg();
    }, []);

    return (
        <div>
            <CardAlg data= {dataAlg}/>
        </div>
    );
}

export default Algeria;