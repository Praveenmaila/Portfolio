import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="grayscale">
      <GitHubCalendar
        username="Praveenmaila"
        hideColorLegend={true}
      ></GitHubCalendar>
    </div>
  );
}

export default Github;
