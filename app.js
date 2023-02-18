let names = prompt(" Please enter your name ")
const result = names.toUpperCase()
console.log(result)

function myFunction() {
    const xabar = document.getElementById('answer');
    xabar.innerHTML = '';
    let x = document.getElementById('text-input').value;
    try {
        if (x.trim() == "") throw " Yaqin insoningizni tugilgan kunini kiriting";
        if (isNaN(x)) {
            throw new Error('You didint enter your age');
        } else {
            switch (x) {

                case "1":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    throw ("siz omadli kunda tugilgan ekansiz")
                    throw ("siz haqiqiy insonsiz")
                    break;
                case '10':
                case "11":
                case "12":
                    throw ("Mashhurbekning tug'ilgan kuni")
                    break
                case "13":
                case "14":
                case "15":
                    throw ("Dadamning tug'ilgan kuni")
                    break;
                case "16":
                    throw ("Muhammadqodirning tug'ilgan kuni🥳")
                    break;
                case "17":
                    throw ("siz omadsiz kunda tugilgan ekansiz")
                    break;
                case '18':
                case "19":
                case "21":
                case "21":
                case "22":
                    throw ("Volidamning tug'ilgan kuni")
                    break;
                case "23":
                case "24":
                case "25":
                case "26":
                case "27":
                case "28":
                case "29":
                    throw ("Ismigulning tug'ilgan kuni")
                    break;
                case "30":
                case "31":
                    throw ("siz yahshi  kunda tugilgan ekansiz")
                    break;

                default:
                    throw ("iltimos faqat son kiriting")
            }
        }
        x = Number(x);
    } catch (err) {
        xabar.innerHTML = "" + err;
    }



}

myFunction()

