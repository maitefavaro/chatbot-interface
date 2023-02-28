import React from "react";

function Acessibilidade() {
  return (
    <>
      <div className="flex sm:space-x-20 md:space-x-40">
        <button id="btn-voice icon-voice-off" class="px-4 rounded-sm">
          <img
            className="h-30 sm:w-20 md:w-40"
            src="\images\microphone.svg"
            alt=""
          />
        </button>

        <button class="px-4 rounded-sm">
          <img
            className="h-30 sm:w-20 md:w-60"
            src="\images\keyboard.svg"
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default Acessibilidade;
