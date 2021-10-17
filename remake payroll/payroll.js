const menuBar = document.getElementById("menu-bar");
const linksCon = document.querySelector(".links-con");
let ctr = 0;

menuBar.addEventListener("click", () => {
  linksCon.classList.toggle("drop");
  menuBar.classList.toggle("rotate");
});

// time
setInterval(getTime, 1000);
function getTime() {
  const todayTime = document.getElementById("day");
  const hourTime = document.getElementById("hour");
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = new Date();
  // day
  let day = today.getDay();
  let month = today.getMonth();
  let date = today.getDate();
  let year = today.getFullYear();
  // time
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let amPm = "am";
  if (hour > 12) {
    amPm = "PM";
    hour -= 12;
  } else if (hour === 12) {
    amPm === "PM";
  } else {
    amPm = "AM";
  }
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  todayTime.textContent = `${weekdays[day]}, ${monthsList[month]} ${date}, ${year}`;
  hourTime.textContent = `${hour}:${minutes}:${seconds} ${amPm}`;
}
getTime();

// all inputs
const userInputs = document.querySelectorAll(".user-input");
const allSelect = document.querySelectorAll(".select");

// keyup event for all text inputs
userInputs.forEach((inputs) =>
  inputs.addEventListener("keyup", (e) => {
    // if (e.keyCode === 13) {
    // text
    if (e.currentTarget.type === "text") {
      switch (e.currentTarget.id) {
        // check if number
        case "employee-number":
          let isNumber = /\d{4}/;
          if (isNumber.test(e.currentTarget.value) === true) {
            e.currentTarget.nextElementSibling.textContent = "";
            checkFields();
          } else if (e.currentTarget.value === "") {
            e.currentTarget.nextElementSibling.textContent =
              "Field Cannot be Emptied!";
          } else {
            //   "Invalid Value! ID Should Be 4 Digit Numbers";
            e.currentTarget.nextElementSibling.textContent =
              "Invalid Value! ID Should Be 4 Digit Numbers";
          }
          break;
        // check if not letter
        case "employee-name":
          let isLetter = /[a-zA-Z]{2,}/;
          if (isLetter.test(e.currentTarget.value) === true) {
            e.currentTarget.nextElementSibling.textContent = "";
            checkFields();
          } else if (e.currentTarget.value === "") {
            e.currentTarget.nextElementSibling.textContent =
              "Field Cannot be Emptied!";
          } else {
            // e.currentTarget.value = "";
            e.currentTarget.nextElementSibling.textContent =
              "Invalid Name Value!";
          }
          break;
        case "days":
          // validate if value is truely a number
          let less23 = parseInt(e.currentTarget.value);
          if (isNaN(e.currentTarget.value)) {
            // e.currentTarget.value = "";
            e.currentTarget.nextElementSibling.textContent =
              "Invalid Value! Not a Number";
          } else if (e.currentTarget.value === "") {
            e.currentTarget.nextElementSibling.textContent =
              "Field Cannot be Emptied!";
          } else {
            if (less23 > 22) {
              // e.currentTarget.value = "";
              e.currentTarget.nextElementSibling.textContent =
                "Invalid Number Of Days";
            } else {
              e.currentTarget.nextElementSibling.textContent = "";
              checkFields();
            }
          }
      }
    }
    // }
  })
);
const department = document.getElementById("department");
// click event for all select tags
allSelect.forEach((select) =>
  select.addEventListener("click", (e) => {
    if (/\w/.test(e.currentTarget.value) === true) {
      switch (e.currentTarget.id) {
        case "college":
          checkFields();
          const collegeDept = [
            {
              college: "CCSE",
              departments: [
                "BS in Computer Engineering",
                "BS in Computer Science",
                "BS in Electrical Engineering",
                "BS in Electronics Engineering",
                "BS in Information Technology",
              ],
            },
            {
              college: "COE",
              departments: [
                "BS in Elementary Education",
                "BS in Physical Education",
                "BS in Secondary Education",
              ],
            },
            {
              college: "COMEAC",
              departments: [
                "BS in Biology",
                "BS in Midwifery",
                "BS in Pharmacy",
              ],
            },
            {
              college: "COB",
              departments: [
                "BS in Accountancy",
                "BS in Accounting Technology",
                "BS in Business Administration",
                "BS in Customs Administration",
                "BS in Hospitality Management",
                "BS in Public Administration",
                "BS in Tourism Management",
              ],
            },
            {
              college: "CLASS",
              departments: [
                "AB in Psychology",
                "BS in Library and Information Science",
                "BS in Social Work",
              ],
            },
          ];
          department.disabled = false;
          // updating option based on choice
          // i made a dynamic option bywhich it updates its choices depending what college you selected
          switch (e.currentTarget.value) {
            case "CCSE":
              clearOption();
              for (
                let index = 0;
                index < collegeDept[0]["departments"].length;
                index++
              ) {
                let course = document.createElement("option");
                course.value = collegeDept[0]["departments"][index];
                course.textContent = collegeDept[0]["departments"][index];
                department.appendChild(course);
              }
              // e.currentTarget.disabled = true;
              break;
            case "COE":
              clearOption();
              for (
                let index = 0;
                index < collegeDept[1]["departments"].length;
                index++
              ) {
                let course = document.createElement("option");
                course.value = collegeDept[1]["departments"][index];
                course.textContent = collegeDept[1]["departments"][index];
                department.appendChild(course);
              }
              // e.currentTarget.disabled = true;
              break;
            case "COMEAC":
              clearOption();
              for (
                let index = 0;
                index < collegeDept[2]["departments"].length;
                index++
              ) {
                let course = document.createElement("option");
                course.value = collegeDept[2]["departments"][index];
                course.textContent = collegeDept[2]["departments"][index];
                department.appendChild(course);
              }
              // e.currentTarget.disabled = true;
              break;
            case "COB":
              clearOption();
              for (
                let index = 0;
                index < collegeDept[3]["departments"].length;
                index++
              ) {
                let course = document.createElement("option");
                course.value = collegeDept[3]["departments"][index];
                course.textContent = collegeDept[3]["departments"][index];
                department.appendChild(course);
              }
              // e.currentTarget.disabled = true;
              break;
            case "CLASS":
              clearOption();
              for (
                let index = 0;
                index < collegeDept[4]["departments"].length;
                index++
              ) {
                let course = document.createElement("option");
                course.value = collegeDept[4]["departments"][index];
                course.textContent = collegeDept[4]["departments"][index];
                department.appendChild(course);
              }
              // e.currentTarget.disabled = true;
              break;
          }
          break;
        case "department":
          checkFields();
          break;
        case "designation":
          checkFields();
          break;
      }
    }
  })
);
// clear function to all inputs
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  userInputs.forEach((inputs) => (inputs.value = ""));
  clearOption();
  department.disabled = true;
  // reset selection
  allSelect.forEach((select) => {
    select.selectedIndex = 0;
  });
});
// clears option in select to avoid stacking
function clearOption() {
  let cloneOption = [...department.children];
  cloneOption.shift();
  for (let index = 0; index < cloneOption.length; index++) {
    cloneOption[index].remove();
  }
  const allOutputs = document.querySelectorAll(".salary-information input");
  allOutputs.forEach((output) => {
    output.value = "";
  });
  computeBtn.disabled = true;
  ctr = 0;
}
// compute btn
const computeBtn = document.getElementById("compute");
computeBtn.addEventListener("click", () => {
  const daysPresent = document.getElementById("days");
  const monthly = document.getElementById("monthly");
  const daily = document.getElementById("daily");
  const hourly = document.getElementById("hourly");
  const grossPay = document.getElementById("grossPay");
  const netPay = document.getElementById("netPay");
  //
  const hmdf = document.getElementById("hmdf");
  const philHealth = document.getElementById("philhealth");
  const sss = document.getElementById("sss");
  const totalDeduction = document.getElementById("totalDeduction");

  switch (designation.value) {
    case "Dean":
    case "dean":
      monthly.value = `₱ 25000`;
      daily.value = `₱ 1136.36`;
      hourly.value = `₱ 142.05`;
      grossPay.value =
        "₱ " + (parseFloat(daysPresent.value) * 1136.36).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (
          parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1))
        ).toFixed(2);
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);

      break;
    case "Program Head":
    case "program head":
      monthly.value = `₱ 20000`;
      daily.value = `₱ 909.09`;
      hourly.value = `₱ 113.64`;
      grossPay.value =
        "₱" + (parseFloat(daysPresent.value) * 909.09).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (
          parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1))
        ).toFixed(2);
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);
      break;
    case "Assistant Professor":
    case "assistant professor":
      monthly.value = `₱ 15000`;
      daily.value = `₱ 681.82`;
      hourly.value = `₱ 85.23`;
      grossPay.value =
        "₱" + (parseFloat(daysPresent.value) * 681.82).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (
          parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1))
        ).toFixed(2);
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);
      break;
    case "Instructor":
    case "instructor":
      monthly.value = `₱ 10000`;
      daily.value = `₱ 454.55`;
      hourly.value = `₱ 56.82`;
      grossPay.value =
        "₱" + (parseFloat(daysPresent.value) * 454.55).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (
          parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1))
        ).toFixed(2);
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);
      break;
    default:
      designation.placeholder = "Invalid Input Position";
      designation.value = "";
      designation.disabled = false;
  }
});
// check if all complete
function checkFields() {
  const eNum = document.getElementById("employee-number");
  const eName = document.getElementById("employee-name");
  const college = document.getElementById("college");
  const department = document.getElementById("department");
  const designation = document.getElementById("designation");
  const days = document.getElementById("days");

  if (
    days.value !== "" &&
    designation.value !== "" &&
    eNum.value !== "" &&
    eName.value !== "" &&
    college.value !== "" &&
    department.value !== ""
  ) {
    computeBtn.disabled = false;
  } else {
    computeBtn.disabled = true;
  }
}
// pay roll deduction
function checkSSS(grossPay) {
  let grossPayInt = parseFloat(grossPay.value.slice(1));
  if (grossPayInt >= 19750) {
    sss.value = `₱ 900`;
  } else if (grossPayInt >= 19250 && grossPayInt <= 19749.99) {
    sss.value = `₱ 877.5`;
  } else if (grossPayInt >= 18750 && grossPayInt <= 19249.99) {
    sss.value = `₱ 855`;
  } else if (grossPayInt >= 18250 && grossPayInt <= 18749.99) {
    sss.value = `₱ 832`;
  } else if (grossPayInt >= 17750 && grossPayInt <= 18249.99) {
    sss.value = `₱ 810`;
  } else if (grossPayInt >= 17250 && grossPayInt <= 17749.99) {
    sss.value = `₱ 787.50`;
  } else if (grossPayInt >= 16750 && grossPayInt <= 17249.99) {
    sss.value = `₱ 765`;
  } else if (grossPayInt >= 16250 && grossPayInt <= 16749.99) {
    sss.value = `₱ 742.50`;
  } else if (grossPayInt >= 15750 && grossPayInt <= 16249.99) {
    sss.value = `₱ 720`;
  } else if (grossPayInt >= 15250 && grossPayInt <= 15749.99) {
    sss.value = `₱ 697.50`;
  } else if (grossPayInt >= 14750 && grossPayInt <= 15249.99) {
    sss.value = `₱ 675`;
  } else if (grossPayInt >= 14250 && grossPayInt <= 14749.99) {
    sss.value = `₱ 652.50`;
  } else if (grossPayInt >= 13750 && grossPayInt <= 14249.99) {
    sss.value = `₱ 630`;
  } else if (grossPayInt >= 13250 && grossPayInt <= 13749.99) {
    sss.value = `₱ 607.50`;
  } else if (grossPayInt >= 12750 && grossPayInt <= 13249.99) {
    sss.value = `₱ 585`;
  } else if (grossPayInt >= 12250 && grossPayInt <= 12749.99) {
    sss.value = `₱ 562.50`;
  } else if (grossPayInt >= 11750 && grossPayInt <= 12249.99) {
    sss.value = `₱ 540`;
  } else if (grossPayInt >= 11250 && grossPayInt <= 11749.99) {
    sss.value = `₱ 517.50`;
  } else if (grossPayInt >= 10750 && grossPayInt <= 11249.99) {
    sss.value = `₱ 495`;
  } else if (grossPayInt >= 10250 && grossPayInt <= 10749.99) {
    sss.value = `₱ 472.50`;
  } else if (grossPayInt >= 9750 && grossPayInt <= 10249.99) {
    sss.value = `₱ 450`;
  } else if (grossPayInt >= 9250 && grossPayInt <= 9749.99) {
    sss.value = `₱ 427.50`;
  } else if (grossPayInt >= 8750 && grossPayInt <= 9249.99) {
    sss.value = `₱ 405`;
  } else if (grossPayInt >= 8250 && grossPayInt <= 8749.99) {
    sss.value = `₱ 382.50`;
  } else if (grossPayInt >= 7750 && grossPayInt <= 8249.99) {
    sss.value = `₱ 360`;
  } else if (grossPayInt >= 7250 && grossPayInt <= 7749.99) {
    sss.value = `₱ 337.50`;
  } else if (grossPayInt >= 6750 && grossPayInt <= 7249.99) {
    sss.value = `₱ 315`;
  } else if (grossPayInt >= 6250 && grossPayInt <= 6749.99) {
    sss.value = `₱ 292.50`;
  } else if (grossPayInt >= 5750 && grossPayInt <= 6249.99) {
    sss.value = `₱ 270`;
  } else if (grossPayInt >= 5250 && grossPayInt <= 5749.99) {
    sss.value = `₱ 247.50`;
  } else if (grossPayInt >= 4750 && grossPayInt <= 5249.99) {
    sss.value = `₱ 225`;
  } else if (grossPayInt >= 4250 && grossPayInt <= 4749.99) {
    sss.value = `₱ 202.50`;
  } else if (grossPayInt >= 3750 && grossPayInt <= 4249.99) {
    sss.value = `₱ 180`;
  } else if (grossPayInt >= 3250 && grossPayInt <= 3749.99) {
    sss.value = `₱ 157.50`;
  } else if (grossPayInt < 3250) {
    sss.value = `₱ 135`;
  }
}
