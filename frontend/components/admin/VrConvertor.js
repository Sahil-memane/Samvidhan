import { useState } from 'react';
import { SiConvertio } from "react-icons/si";
import { ImSpinner } from "react-icons/im";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function VrConvertor() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [convertedVideoUrl, setConvertedVideoUrl] = useState(null);

    const convertFile = () => {
        if (!file) return;

        console.log(file);
        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:5000/vr-convertor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            setConvertedVideoUrl(url);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">VR Video Converter</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Upload your video file and we will convert it to a VR-compatible format for you.
            </p>

            <div className="flex items-center justify-center w-full mb-3">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        {file ? (
                            <p className="text-sm text-gray-500 dark:text-gray-400">Selected file: {file.name}</p>
                        ) : (
                            <>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">MP4, MKV, etc...</p>
                            </>
                        )}
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
                </label>
            </div>

            <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                onClick={convertFile}
                disabled={!file || loading}
            >
                {loading ? (
                    <div role="status">
                        <ImSpinner className="animate-spin inline-block mr-2 h-4 w-4" />
                        Converting...
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <SiConvertio className="inline-block mr-2 h-4 w-4" />
                        Convert File
                    </div>
                )}
            </button>

            {convertedVideoUrl && (
                <div className="mt-4">
                    <video controls className="w-full rounded-lg">
                        <source src={convertedVideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <button
                        type="button"
                        className="mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = convertedVideoUrl;
                            link.setAttribute('download', 'converted_video.mp4');
                            document.body.appendChild(link);
                            link.click();
                            link.parentNode.removeChild(link);
                        }}
                    >
                        <FaCloudDownloadAlt className="inline-block mr-2 h-4 w-4" />
                        Download Converted Video
                    </button>
                </div>
            )}
        </div>
    );
}
