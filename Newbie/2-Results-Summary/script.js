fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        for (let object of data) {
            let category = object['category'];
            let score = object['score'];
            let icon = object['icon'];

            let sectionTag = document.createElement("section");

            let objTag = document.createElement("object");
            objTag.setAttribute("data", icon);

            let pCategoryTag = document.createElement("p");
            pCategoryTag.innerText = category;

            let objAndCategoryDiv = document.createElement("div");
            objAndCategoryDiv.setAttribute("class", "icon-and-category");
            objAndCategoryDiv.appendChild(objTag);
            objAndCategoryDiv.appendChild(pCategoryTag);

            let pScoreTag = document.createElement("p");
            pScoreTag.setAttribute("class", "score-text")
            let spanTag = document.createElement("span");
            spanTag.innerText = "\xa0 / 100";
            pScoreTag.innerText = score;
            pScoreTag.appendChild(spanTag);

            sectionTag.appendChild(objAndCategoryDiv);
            sectionTag.appendChild(pScoreTag);

            let summaryDisplay = document.querySelector("#summary-data");
            summaryDisplay.appendChild(sectionTag);
        }

    });