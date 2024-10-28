import React, { useEffect } from 'react';

const YandexMap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.async = true;
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3b960b30b10a9d4153e72cf9443dc3617cb4347bc95dfa2ecec7d9883530b549&width=656&height=614&lang=ru_RU&scroll=true";

        document.getElementById('map-container').appendChild(script);
        return () => {
            document.getElementById('map-container').innerHTML = ''; 
        };
    }, []);

    return (
        <div>
            <div id="map-container" style={{ width: '656px', height: '614px' }}></div>
        </div>
    );
};

export default YandexMap;