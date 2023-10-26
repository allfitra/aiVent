import { useState } from "react";
import OpenAI from "openai";

function AiBox() {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      setResult(response.choices[0].message.content);
      console.log(result);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleResetClick = () => {
    setPrompt("");
    setResult("");
  };
  return (
    <>
      <div className=" mt-6 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <textarea
          type="text"
          rows="1"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="block p-2.5 w-full mr-4 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        <div className="flex flex-col items-end mt-2">
          <div>
            <button onClick={handleClick} disabled={loading || prompt.length === 0} className="inline-flex justify-center p-1 px-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
              {loading ? "Generating..." : "Generate"}
            </button>
            {result !== "" ? (
              <button onClick={handleResetClick} className="inline-flex justify-center p-1 px-2 text-red-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                Reset
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        {result !== "" ? <p className="result-prompt whitespace-pre-line max-w-[300px] mt-4 text-justify bg-slate-200 rounded-lg p-4">{result}</p> : <></>}
      </div>
    </>
  );
}

export default AiBox;
