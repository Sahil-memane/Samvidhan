import { useState } from 'react';
import { ImSpinner } from "react-icons/im";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";


export default function DatasetGenrator() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const generateDataset = () => {
    console.log(file);
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:5000/generate_dataset', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        setResponse(data.response);
      })
      .catch(error => console.error(error)).finally(() => setLoading(false));
  }

  const downloadDataset = () => {
    fetch('http://localhost:5000/get_dataset')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'dataset.zip');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error(error
      ));
  }




  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Generate Dataset</h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Generate a dataset for your machine learning model using markdown files.</p>
      <div class="flex items-center justify-center w-full mb-3">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Click to upload markdown file</p>
          </div>
          <input type="file" id="dropzone-file" class="hidden" onChange={(e) => setFile(e.target.files[0])} />
        </label>
      </div>
      <div class="flex items-center justify-center w-full">
        <button onClick={generateDataset} class="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {loading ? <ImSpinner className="animate-spin" /> : <>
            <FiSettings className="mr-2" /> Generate Dataset
          </>
          }
        </button>
        {response &&
          <button onClick={downloadDataset} class="flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 ml-3" disabled={!response}>
            <FaCloudDownloadAlt className="mr-2" /> Download Dataset (ZIP)
          </button>
        }
      </div>  
    </div>
  )
}
