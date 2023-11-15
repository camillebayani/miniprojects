let yourName = prompt("Hello! What's your name?")
console.log(`Hi ${yourName}! Let's calculate your average grade.`);
document.getElementById("name").innerHTML = `Hi, ${yourName}! Let's calculate your average grade.`

let subjects = [];
let failed = [];
let passed = [];

function getAverage() {
    // input grades for each subject
    let math = parseInt(document.getElementById("mathGrade").value);
    document.getElementById('mathRate').innerHTML = `Math: ${math}%`;
    let english = parseInt(document.getElementById("engGrade").value);
    document.getElementById('engRate').innerHTML = `English: ${english}%`;
    let science = parseInt(document.getElementById("sciGrade").value);
    document.getElementById('sciRate').innerHTML = `Science: ${science}%`;
    let economics = parseInt(document.getElementById("econGrade").value);
    document.getElementById('econRate').innerHTML = `Economics: ${economics}%`;
    let music = parseInt(document.getElementById("musicGrade").value);
    document.getElementById('musicRate').innerHTML = `Music: ${music}%`;
    let pe = parseInt(document.getElementById("peGrade").value);
    document.getElementById('peRate').innerHTML = `PE: ${pe}%`;
    let philo = parseInt(document.getElementById("philoGrade").value);
    document.getElementById('philoRate').innerHTML = `Philosophy: ${philo}%`;
    let history = parseInt(document.getElementById("histoGrade").value);
    document.getElementById('histoRate').innerHTML = `History: ${history}%`;

    subjects.push(math,english,science,economics,music,pe,philo,history);
    console.log(subjects);

    // add total grades
    let avgGrade = 0;
    let totalGrades = math + english + science + economics + music + pe + philo + history;

    avgGrade = (totalGrades / 8).toFixed(2);
    console.log(`Your grade point average is ${avgGrade}%.`);
    document.getElementById('gradeResult').innerHTML = `Your grade point average is ${avgGrade}%.`;

    if (avgGrade >= 75 && avgGrade <= 100) {
        console.log(`Congratulations! You qualify to join the Squid Games!`);
        document.getElementById('passFail').innerHTML = `Congratulations! You qualify to join the Squid Game!`;
    }
    else if (avgGrade >= 68 && avgGrade < 75){
        console.log(`Please take REMEDIAL classes to improve your grades.`);
        document.getElementById('passFail').innerHTML = `Please take REMEDIAL classes to improve your grades.`;
    }
    else if(avgGrade >= 50){
        console.log(`Sorry, you FAILED. Please study harder.`);
        document.getElementById('passFail').innerHTML = `Sorry, you FAILED. Please study harder.`;
    }
    else{
        console.log(`Please input a valid number between 0 to 100.`);
        document.getElementById('passFail').innerHTML = `Please input a valid number between 0 to 100.`;
    }

    const gradeSubject = {
        Math : math,
        English : english,
        Science : science,
        Economics : economics,
        Music : music,
        PE : pe,
        Philosophy : philo,
        History : history
    };

    for(let subject in gradeSubject) {
        let grade = gradeSubject[subject];

        if (grade < 75){
            failed.push(`${subject}: ${grade}%`)
        }
    }

    document.getElementById("failed").textContent = `You have to audit/retake these subjects: ${failed.join(", ")}`;
}







