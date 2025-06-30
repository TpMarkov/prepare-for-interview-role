import React from "react";

function SumaryCard({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) {
  return (
    <div className="" onClick={onSelect}>
      <div className="" styles={{ background: "red" }}>
        <div className="">
          <div className="">
            <span className="">GU</span>

            {/* Contetnt Container */}

            <div className="container">
              <div className="">
                {/* Title and skills */}
                <div className="">
                  <h2 className="">{role}</h2>
                  <p className="">{topicsToFocus}</p>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              delete
            </button>
          </div>
          <div className="">
            <div className="">
              <div className="">
                Experience:{experience} {experience == 1 ? "Year" : "Years"}
              </div>
              <div className="">{questions} Q&A</div>

              <div className="">Last updated on : {lastUpdated}</div>
            </div>
          </div>

          {/* Description  */}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SumaryCard;
