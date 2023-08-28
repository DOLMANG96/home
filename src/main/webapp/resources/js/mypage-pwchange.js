// 에러 메세지 객체
const errMsg = {

  pwCh: "8~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요",
  pwRe: {
      success: "비밀번호가 일치합니다",
      fail: "비밀번호가 일치하지 않습니다"
  }
}

// 계정 정보 객체
const account = {
 
  pwCh: null,
  
}


/** 비밀번호*/
// pwVal: 패스워드, pwReVal: 패스워드 재입력, isPwValid: 패스워드 유효 여부
let pwVal = "", pwReVal = "", isPwValid = false
// 비밀번호와 재입력 값 일치 여부
function checkPwValid() {
    account.pwCh = null
    if(pwReVal === "") { // 미입력
        pwReErrorMsgEl.textContent = ""
    }
    else if(pwVal === pwReVal) { // 비밀번호 재입력 일치
        if(isPwValid)
        account.pwCh = pwVal
    pwReErrorMsgEl.style.color = "green"
    pwReErrorMsgEl.textContent = errMsg.pwRe.success
}
else { // 비밀번호 재입력 불일치
    pwReErrorMsgEl.style.color = "red"
    pwReErrorMsgEl.textContent = errMsg.pwRe.fail
}
}

const pwInputEl = document.querySelector('#info__pwCh input')
const pwErrorMsgEl = document.querySelector('#info__pwCh .error-msg')
pwInputEl.addEventListener('change', () => {
    const pwRegExp = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    pwVal = pwInputEl.value
  if(pwRegExp.test(pwVal)) { // 유효성 검사 성공
    isPwValid = true
    pwErrorMsgEl.textContent = ""
} 
else { // 유효성 검사 실패
    isPwValid = false
    pwErrorMsgEl.textContent = errMsg.pwCh
}
checkPwValid()
console.log(pwVal, pwReVal, isPwValid, account)
});

/** 비밀번호 확인 */
const pwReInputEl = document.querySelector('#info__pwRe input')
const pwReErrorMsgEl = document.querySelector('#info__pwRe .error-msg')
pwReInputEl.addEventListener('change', () => {
    pwReVal = pwReInputEl.value
    checkPwValid()
    console.log(pwVal, pwReVal, isPwValid, account)
});