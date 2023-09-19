const EnterNumber = document.querySelector(".enter");
const Gueesedbox = document.querySelector(".guessedbox");
const InputNumber = document.getElementById("number");
const outputArea = document.getElementById("output");
let num = 1;
let count = 5;
let RandomNumber = Math.floor(Math.random()*101); //設定亂數
console.log(RandomNumber);

const H1 = document.getElementById("starnumber");
const H2 = document.getElementById("count");

function TextArea(){
    if(InputNumber.value){
        // isNaN 判斷是否不是數字
        if(!isNaN(InputNumber.value)===true){
            let text = num + "." + InputNumber.value;
            outputArea.value += text + '\n';
            num ++; 
            Judgenumber();
            count--;
            H2.textContent = "remaining"+ " " + count + " "+ "chances";  //h2標籤的內容更改
            if(count == 0){ 
                H1.textContent = "Lose";  //h2標籤的內容更改
                EnterNumber.disabled = true; //按鈕設定不可使用
            }
        }else{
            H1.textContent = "Enter number , please";
        }
    }
}

function Judgenumber(){
   if(InputNumber.value == RandomNumber){
    H1.textContent = "Win";
    EnterNumber.disabled = true;
   }
   else if(InputNumber.value > RandomNumber){
    H1.textContent = 'so big';
   }
   else{
    H1.textContent = 'so small';
   }
}
H2.textContent = "remaining"+ " " + count + " "+ "chances"
EnterNumber.addEventListener("click",TextArea);