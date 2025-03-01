"use client";
import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import NavBar from '@/components/NavBar';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef((props, ref) => {
    const { leftPage, rightPage } = props;
    return (
        <div ref={ref} style={{ display: 'flex', width: '100%', height: '100%' }}>
            {/* Left Page */}
            <div style={{ flex: 1, marginRight: rightPage ? '10px' : '0px' }}>
                {leftPage && (
                    <div style={{ width: '100%', height: '100%' }}>
                        <Page pageNumber={leftPage} width={600} />
                    </div>
                )}
            </div>
            {/* Right Page */}
            {rightPage && (
                <div style={{ flex: 1 }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <Page pageNumber={rightPage} width={600} />
                    </div>
                </div>
            )}
        </div>
    );
});

Pages.displayName = 'Pages';

function Flipbook() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <NavBar />
            <div className="flex justify-center mt-20">
                <a href="/Constitution.pdf" download>
                    <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-200 hover:text-black border-black border-2">
                        Download PDF
                    </button>
                </a>
            </div>
            <div className="flex justify-center items-center h-screen w-screen">
                <Document file="/Constitution.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    {numPages && (
                        <HTMLFlipBook
                            width={1200}  // Total width for two pages side by side
                            height={800}  // Adjust based on your page height
                            size="stretch"
                            drawShadow={true}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={true}
                        >
                            {/* Iterate through all pages */}
                            {[...Array(numPages)].map((_, index) => {
                                // First page is alone, subsequent pages are in pairs
                                const isFirstPage = index === 0;
                                const leftPage = isFirstPage ? 1 : index + (isFirstPage ? 0 : 1);
                                const rightPage = !isFirstPage && leftPage + 1 <= numPages ? leftPage + 1 : null;

                                return (
                                    <Pages key={index} leftPage={leftPage} rightPage={rightPage} />
                                );
                            })}
                        </HTMLFlipBook>
                    )}
                </Document>
            </div>
        </div>
    );
}

export default Flipbook;
