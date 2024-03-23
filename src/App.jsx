//File: App.jsx
function App() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-red-700 text-center my-3 text-2xl">
            Author name
          </h1>
        </div>
        <div className="text-center w-[400px]">
          <p>
            This is introduction about the author. This introduction is written
            in paragraph element. The author is interested in programming
            languages related to web, mobile application. The author has
            expertise in JavaScript and Python language.
          </p>
        </div>
      </div>

      <div className="bg-red-900 text-white p-2 my-3">
        <ul className="flex space-x-3">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
