"use client"
import React, { useState, useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';

function App() {
  const [messages, setMessages] = useState([]);
  const [scenario, setScenario] = useState(null);
  const [finalScenario,setFinalScenario] = useState(null);
  const [loading,setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  
  // useEffect(() => {
  //   if(finalScenario){
  //     const fetchData = async () => {
  //       setLoading(true);

  //    const data = await fetch('http://localhost:5000/get_scenario', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ message: finalScenario }),
  //     })
  //     const response = await data.json();
  //     setMessages(() => response);
  //     setLoading(false);
  //   }
  //   fetchData();
  //   console.log(scenario);

  //   }
  //   },[finalScenario]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([]);
    if(scenario.trim() === '') return;
    
    setFinalScenario(scenario);
    setLoading(true); // Show loading state

    try {
      const response = await fetch('http://localhost:5000/get_scenario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: scenario }),
      });

      const data = await response.json();

      // Add bot's response to chat history
      setScenario('');
      setMessages(()=>[data.response]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Hide loading state
    }
  };
  return (
      <div className='bg-white min-h-screen flex flex-col'>
        <NavBar />
        <div className='flex-grow flex justify-center items-center p-4 '>
          <section className='w-full max-w-4xl h-[calc(100vh-6rem)]'>
            <div className="border-4 border-amber-900 rounded-lg bg-amber-50 w-full h-full flex flex-col shadow-lg overflow-hidden">
              <div className="bg-amber-800 text-amber-50 p-4 text-center text-xl font-serif">
                Constitutional Scenario Learning
              </div>
              <div className='flex-grow p-5 overflow-y-auto bg-amber-50'>
                {loading && <div className='text-center text-amber-900'>System is preparing response...</div>}
                {messages.map((message, index) => (
                  <div key={index}>
                    <div className="p-2 bg-amber-100 rounded-lg my-2">
                      <h2>Scenario:</h2>
                      <p className="text-amber-900">{message.scenario}</p>
                    </div>
                    <div className="p-2 bg-amber-100 rounded-lg my-2">
                      <h2>Applicable Laws and Regulations:</h2>
                      {message['Applicable Laws and Regulations'].map((law, index) => (
                        <div key={index}>
                          <p className="text-amber-900">{law.title}</p>
                          <p className='text-black'>{law.answer}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 bg-amber-100 rounded-lg my-2">
                      <h2>Common Scenarios and Their Legal Implications:</h2>
                      {message['Common Scenarios and Their Legal Implications'].map((law, index) => (
                        <div key={index}>
                          <p className="text-amber-900">{law.title}</p>
                          <p className='text-black'>{law.answer}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 bg-amber-100 rounded-lg my-2">
                      <h2>Relevant Constitutional Articles:</h2>
                      {message['Relevant Constitutional Articles'].map((law, index) => (
                        <div key={index}>
                          <p className="text-amber-900">{law.title}</p>
                          <p className='text-black'>{law.answer}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 bg-amber-100 rounded-lg my-2">
                      <h2>Simplified Explanations of Legal Concepts:</h2>
                      {message['Simplified Explanations of Legal Concepts'].map((law, index) => (
                        <div key={index}>
                          <p className="text-amber-900">{law.title}</p>
                          <p className='text-black'>{law.answer}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 bg-amber-100 rounded-lg my-2">
                      <h2>Articles:</h2>
                      {message['Articles'].map((law, index) => (
                        <div key={index}>
                          <p className="text-amber-900">{law.title}</p>
                          <p className='text-black'>{law.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
  
              <form className="p-4 bg-amber-100" onSubmit={handleSubmit}>
                <div className="flex flex-row input-group w-full relative">
                  <textarea
                    placeholder="Ask Your Doubt .... "
                    onChange={(e) => setScenario(e.target.value)}
                    value={scenario}
                    className="input justify-center input-bordered w-full border-2 p-2 border-amber-900 bg-amber-50 text-amber-900 placeholder-amber-700 focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                    required
                  />
                  <button className="btn2 btn-square w-auto ml-2 bg-amber-800 hover:bg-amber-900 text-amber-50" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
  );
}

export default App;