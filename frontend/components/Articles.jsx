import React, { useState, useEffect } from 'react';
import jsonData from '../data/data.json';
import { FaMagic } from 'react-icons/fa';

export default function Articles({ partNo }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPartNo, setCurrentPartNo] = useState(partNo || 1);
  const [loading, setLoading] = useState(false);
  const [generatedStory, setGeneratedStory] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!partNo) {
      setCurrentPartNo(1);
    } else {
      setCurrentPartNo(partNo);
    }
  }, [partNo]);

  const openModal = (article) => {
    setSelectedArticle(article);
    setGeneratedStory('');
    setMessage('');
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setGeneratedStory('');
    setMessage('');
  };

  const generateStory = async () => {
    if (!selectedArticle) return;

    setLoading(true);
    setGeneratedStory('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: selectedArticle.title }),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data.error);
      } else {
        setGeneratedStory(data.story);
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const truncateText = (title, description, maxLength) => {
    let totalLength = title.length + description.length;
    if (totalLength > maxLength) {
      let remainingLength = maxLength - title.length;
      description = description.substring(0, remainingLength) + '...';
    }
    return { truncatedTitle: title, truncatedDescription: description };
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jsonData.map((item) =>
          item.part === currentPartNo ? (
            item.articles.map((art) => {
              const { truncatedTitle, truncatedDescription } = truncateText(
                art.title,
                art.description,
                140
              );
              return (
                <div
                  key={art.article}
                  className="flex flex-col justify-between h-full w-full max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <div>
                    <h5>Article {art.article}</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {truncatedTitle}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {truncatedDescription}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => openModal(art)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              );
            })
          ) : null
        )}
      </div>

      {selectedArticle && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-4xl p-6 max-h-full overflow-y-auto">
            <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Article {selectedArticle.article} : 
                </h3>       
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedArticle.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-6 space-y-4 overflow-y-auto max-h-[70vh]">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedArticle.description}
                </p>
                <div>
                  <button
                    onClick={generateStory}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={loading}
                  >
                    {loading ? 'Generating...' : 'Generate Story'}
                    <FaMagic className="ml-2" />
                  </button>
                  {/* Select the age criteria from the dropdown below: kid teenager adult */}
                    <select
                        className="ml-4 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        id="age"
                        name="age"
                        required
                    >
                        <option value="kid">Kid</option>
                        <option value="teenager">Teenager</option>
                        <option value="adult">Adult</option>
                    </select>
                </div>
                {generatedStory && (
                  <div className="p-4 mt-4 bg-gray-100 rounded-lg dark:bg-gray-600">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Generated Story:
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {generatedStory}
                    </p>
                  </div>
                )}
                {message && (
                  <div className="text-red-500">
                    <p>{message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
