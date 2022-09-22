const url = document.URL + "src/projects.json"

/* First Project Card */
const firstProjectTitle = document.getElementById("firstProjectTitle")
const firstProjectDescription = document.getElementById("firstProjectDescription")
const firstProjectLanguages = document.getElementById("firstProjectLanguages")
const firstProjectImage = document.getElementById("firstProjectImage")
const firstProjectLink = document.getElementById("firstProjectLink")

function setFirstProjectsInformation(title, description, languages, image, link) {
    firstProjectTitle.textContent = title;
    firstProjectDescription.textContent = description;
    firstProjectLanguages.textContent = languages;
    firstProjectImage.src = image;
    firstProjectLink.href = link;
}

let firstIndex = 0;
fetch(url)
    .then((response) => response.json())
    .then((list) => {
        
        backward.addEventListener("click", function () {
            if (firstIndex <= 0) return;
            firstIndex--;
        
            const challengeTitle = list.firstdata[firstIndex].title;
            const challengeDescription = list.firstdata[firstIndex].description;
            const challengeLanguages = list.firstdata[firstIndex].languages;
            const challengeImage = list.firstdata[firstIndex].image;
            const challengeLink = list.firstdata[firstIndex].link;
        
            setFirstProjectsInformation(
                challengeTitle,
                challengeDescription,
                challengeLanguages,
                challengeImage,
                challengeLink
            );
        });
    
        forward.addEventListener("click", function () {  
            if (firstIndex >= 1) return;
            firstIndex++;

            const challengeTitle = list.firstdata[firstIndex].title;
            const challengeDescription = list.firstdata[firstIndex].description;
            const challengeImage = list.firstdata[firstIndex].image;
            const challengeLanguages = list.firstdata[firstIndex].languages;
            const challengeLink = list.firstdata[firstIndex].link;

            setFirstProjectsInformation(
            challengeTitle,
            challengeDescription,
            challengeLanguages,
            challengeImage,
            challengeLink
            );
        });
      });

// Second Project Card
const secondProjectTitle = document.getElementById("secondProjectTitle")
const secondProjectDescription = document.getElementById("secondProjectDescription")
const secondProjectLanguages = document.getElementById("secondProjectLanguages")
const secondProjectImage = document.getElementById("secondProjectImage")
const secondProjectLink = document.getElementById("secondProjectLink")

function setSecondProjectsInformation(title, description, languages, image, link) {
    secondProjectTitle.textContent = title;
    secondProjectDescription.textContent = description;
    secondProjectLanguages.textContent = languages;
    secondProjectImage.src = image;
    secondProjectLink.href = link;
}

let secondIndex = 0;
fetch(url)
    .then((response) => response.json())
    .then((list) => {
        
        backward.addEventListener("click", function () {
            if (secondIndex <= 0) return;
            secondIndex--;
        
            const secondChallengeTitle = list.seconddata[secondIndex].title;
            const secondChallengeDescription = list.seconddata[secondIndex].description;
            const secondChallengeLanguages = list.seconddata[secondIndex].languages;
            const secondChallengeImage = list.seconddata[secondIndex].image;
            const secondChallengeLink = list.seconddata[secondIndex].link;
        
            setSecondProjectsInformation(
                secondChallengeTitle,
                secondChallengeDescription,
                secondChallengeLanguages,
                secondChallengeImage,
                secondChallengeLink
            );
        });
    
        forward.addEventListener("click", function () {  
            if (secondIndex >= 1) return;
            secondIndex++;

            const secondChallengeTitle = list.seconddata[secondIndex].title;
            const secondChallengeDescription = list.seconddata[secondIndex].description;
            const secondChallengeImage = list.seconddata[secondIndex].image;
            const secondChallengeLanguages = list.seconddata[secondIndex].languages;
            const secondChallengeLink = list.seconddata[secondIndex].link;

            setSecondProjectsInformation(
            secondChallengeTitle,
            secondChallengeDescription,
            secondChallengeLanguages,
            secondChallengeImage,
            secondChallengeLink
            );
        });
      });

// Third Project Card
const thirdProjectTitle = document.getElementById("thirdProjectTitle")
const thirdProjectDescription = document.getElementById("thirdProjectDescription")
const thirdProjectLanguages = document.getElementById("thirdProjectLanguages")
const thirdProjectImage = document.getElementById("thirdProjectImage")
const thirdProjectLink = document.getElementById("thirdProjectLink")

function setThirdProjectsInformation(title, description, languages, image, link) {
    thirdProjectTitle.textContent = title;
    thirdProjectDescription.textContent = description;
    thirdProjectLanguages.textContent = languages;
    thirdProjectImage.src = image;
    thirdProjectLink.href = link;
}

let thirdIndex = 0;
fetch(url)
    .then((response) => response.json())
    .then((list) => {
        
        backward.addEventListener("click", function () {
            if (thirdIndex <= 0) return;
            thirdIndex--;
        
            const thirdChallengeTitle = list.thirddata[thirdIndex].title;
            const thirdChallengeDescription = list.thirddata[thirdIndex].description;
            const thirdChallengeLanguages = list.thirddata[thirdIndex].languages;
            const thirdChallengeImage = list.thirddata[thirdIndex].image;
            const thirdChallengeLink = list.thirddata[thirdIndex].link;
        
            setThirdProjectsInformation(
                thirdChallengeTitle,
                thirdChallengeDescription,
                thirdChallengeLanguages,
                thirdChallengeImage,
                thirdChallengeLink
            );
        });
    
        forward.addEventListener("click", function () {  
            if (thirdIndex >= 1) return;
            thirdIndex++;

            const thirdChallengeTitle = list.thirddata[thirdIndex].title;
            const thirdChallengeDescription = list.thirddata[thirdIndex].description;
            const thirdChallengeImage = list.thirddata[thirdIndex].image;
            const thirdChallengeLanguages = list.thirddata[thirdIndex].languages;
            const thirdChallengeLink = list.thirddata[thirdIndex].link;

            setThirdProjectsInformation(
            thirdChallengeTitle,
            thirdChallengeDescription,
            thirdChallengeLanguages,
            thirdChallengeImage,
            thirdChallengeLink
            );
        });
      });

// Fourth Project Card
const fourthProjectTitle = document.getElementById("fourthProjectTitle")
const fourthProjectDescription = document.getElementById("fourthProjectDescription")
const fourthProjectLanguages = document.getElementById("fourthProjectLanguages")
const fourthProjectImage = document.getElementById("fourthProjectImage")
const fourthProjectLink = document.getElementById("fourthProjectLink")

function setFourthProjectsInformation(title, description, languages, image, link) {
    fourthProjectTitle.textContent = title;
    fourthProjectDescription.textContent = description;
    fourthProjectLanguages.textContent = languages;
    fourthProjectImage.src = image;
    fourthProjectLink.href = link;
}

let fourthIndex = 0;
fetch(url)
    .then((response) => response.json())
    .then((list) => {
        
        backward.addEventListener("click", function () {
            if (fourthIndex <= 0) return;
            fourthIndex--;
        
            const fourthChallengeTitle = list.fourthdata[fourthIndex].title;
            const fourthChallengeDescription = list.fourthdata[fourthIndex].description;
            const fourthChallengeLanguages = list.fourthdata[fourthIndex].languages;
            const fourthChallengeImage = list.fourthdata[fourthIndex].image;
            const fourthChallengeLink = list.fourthdata[fourthIndex].link;
        
            setFourthProjectsInformation(
                fourthChallengeTitle,
                fourthChallengeDescription,
                fourthChallengeLanguages,
                fourthChallengeImage,
                fourthChallengeLink
            );
        });
    
        forward.addEventListener("click", function () {  
            if (fourthIndex >= 1) return;
            fourthIndex++;

            const fourthChallengeTitle = list.fourthdata[fourthIndex].title;
            const fourthChallengeDescription = list.fourthdata[fourthIndex].description;
            const fourthChallengeImage = list.fourthdata[fourthIndex].image;
            const fourthChallengeLanguages = list.fourthdata[fourthIndex].languages;
            const fourthChallengeLink = list.fourthdata[fourthIndex].link;

            setFourthProjectsInformation(
            fourthChallengeTitle,
            fourthChallengeDescription,
            fourthChallengeLanguages,
            fourthChallengeImage,
            fourthChallengeLink
            );
        });
      });
