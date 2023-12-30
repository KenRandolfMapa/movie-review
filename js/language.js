'use strict';
import { api_key,link } from "./api_key.js";

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language');

    
    const changeLanguage = (selectedLanguage) => {
        
        if (selectedLanguage === 'tagalog') {
            document.getElementById('search').placeholder = 'maghanap dito';
            document.getElementById('searchs').textContent = 'Hanapin';
            document.getElementById('all').textContent ='Lahat';
            document.getElementById('comedy').textContent ='Komedya';
            document.getElementById('series').textContent ='Serye';
            document.getElementById('horror').textContent ='Takutan o Horror';
            document.getElementById('romance').textContent ='Romanse o Pag-ibig';
        } else {
            document.getElementById('search').placeholder = 'Search...';
            document.getElementById('searchs').textContent = 'Search';
            document.getElementById('all').textContent ='All';
            document.getElementById('comedy').textContent ='Comedy';
            document.getElementById('series').textContent ='Series';
            document.getElementById('horror').textContent ='Horror';
            document.getElementById('romance').textContent ='Romance';
            
        }
    };

    // Event listener for language change
    languageSelect.addEventListener('change', () => {
        const selectedLanguage = languageSelect.value;
        changeLanguage(selectedLanguage);
    });
});
