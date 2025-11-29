import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  // helper that finds the first wrong word, case-insensitive
  function findFirstSuggestion(input) {
    if (!input || input.trim() === "") return "";

    // split words by whitespace and punctuation
    const words = input.split(/[\s,.!?;:()"'`]+/);

    for (let word of words) {
      if (!word) continue;
      const lower = word.toLowerCase();
      if (customDictionary[lower]) {
        return `Did you mean: ${customDictionary[lower]}?`;
      }
    }
    return "";
  }

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);

    // compute suggestion immediately
    const sugg = findFirstSuggestion(val);
    setSuggestion(sugg);

    // debug logs (remove later)
    // eslint-disable-next-line no-console
    console.log("INPUT:", JSON.stringify(val));
    // eslint-disable-next-line no-console
    console.log("SUGGESTION:", sugg);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 48 }}>
        Spell Check and Auto-Correction
      </h1>

      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
        style={{
          width: "90%",
          height: 150,
          fontSize: 18,
          padding: 10,
          border: "2px solid #777",
          borderRadius: 4,
        }}
      />

      {suggestion ? (
        <p style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>{suggestion}</p>
      ) : null}
    </div>
  );
}

export default App;
