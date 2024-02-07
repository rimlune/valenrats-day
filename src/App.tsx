import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "ratthew plz...",
      "why not?",
      "Last chance!",
      "???",
      "dont do this to me",
      "but i thought you liked rats",
      "nooooo",
      "but i wanna be yours",
      "what will the rats think of this!?",
      "okay, respectful",
      "im going to eat you",
      "no chance?",
      "duuude, might as well click again",
      "heartbreaking </3",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <a
        href="https://github.com/dikshikaaa/Valentine-s-day-experiment"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Visit Source Code on GitHub
      </a>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://tenor.com/view/rat-rats-smooch-kiss-ily-gif-2381147896675869421" />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://tenor.com/view/rat-thumbs-up-heart-locket-gif-27672143"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
