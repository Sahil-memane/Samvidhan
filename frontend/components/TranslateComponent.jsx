import React, { useEffect, useRef } from 'react';

const TranslateComponent = () => {
    const googleTranslateRef = useRef(null);

    useEffect(() => {
        let interval;

        const checkGoogleTranslate = () => {
            if (window.google && window.google.translate.TranslateElement) {
                clearInterval(interval);

                // Initialize Google Translate with only Indic languages
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'hi,kn,ml,mr,ta,te,pa,bn,gu,or,si', // Indic languages
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    googleTranslateRef.current
                );

            }
        };

        interval = setInterval(checkGoogleTranslate, 100);

        // Cleanup on component unmount
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div ref={googleTranslateRef}
            ></div>
        </div>
    );
};

export default TranslateComponent;
