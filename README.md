XSpellCheck – Real-Time Spell Check & Auto-Correction (React)

XSpellCheck is a React-based application that detects misspelled words in real-time using a custom dictionary.
Whenever the user types text, the app identifies the first misspelled word and suggests the most appropriate correction.

This project was built as part of the Crio Frontend Buildout Series.

📝 Features

Real-time spell checking

Case-insensitive word comparison

Auto-suggestion for the first incorrect word only

Supports entire sentences

Clears suggestion when input is empty

Uses a custom dictionary

Functional component–based implementation

Clean and simple UI matching Crio guidelines

📚 Custom Dictionary Used
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

📸 Screenshots

(Add screenshots once your UI is ready)

Initial UI

Misspelling detected (e.g., "wrok")

Multiple misspellings (shows suggestion for first one only)

Empty textbox (no suggestion)

🧰 Tech Stack

React.js

JavaScript (ES6+)

CSS3

🏗️ Project Structure
XSPELLCHECK-APP/
 ├─ public/
 │   └─ index.html
 ├─ src/
 │   ├─ App.js
 │   ├─ index.js
 │   └─ index.css
 ├─ package.json
 └─ README.md

⚙️ Installation & Setup

Clone the repository

git clone <repo-url>


Install dependencies

npm install


Run the development server

npm start


Your app will now be running at:

http://localhost:3000

🔧 How It Works

User types into the textarea.

Input is split into words using a punctuation/whitespace regex.

Each word is converted to lowercase.

The app checks if the word exists in the dictionary's keys.

As soon as a match is found →
Displays:

Did you mean: corrected-word?


If no misspelled word exists → no suggestion shown.

🧪 Crio Requirements Covered

✔ Uses textarea
✔ Suggestion format:

Did you mean: example?


✔ First incorrect word only
✔ Case-insensitive
✔ Clears suggestion if textbox is empty
✔ Functional component conversion from class-based component
✔ UI matches Crio reference layout
✔ Clean, isolated spell-check logic

📜 License

This project is created as part of the Crio Frontend Buildout Program.