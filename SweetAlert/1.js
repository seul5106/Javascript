"use strict";
/**
 * @filename  : regex_helper.js
 * @author    : 최진 (choij2494@gmail.com)
 * @description : 정규표현식 검사 수행 후 , true/false로 해당 정규 표현식 충족하는지 여부를 반환하는 함수들의 모음
 * 
 * 
 */

class Createid{
    /**
     * 값의 존재 여부를 검사한다.
     * @param {string} selector 입력요소에 해당하는 css 선택자
     * @param {string} msg  값이 없을 경우 표시할 메시지 내용
     * @param {boolean} 입력된 경우 true / 입력되지 않은 경우 false
     */
    value(selector, msg) {
        const field = document.querySelector(selector);
        console.log(selector);
        // 쿼리셀렉터로 파라미터로 받은 값을 문서상에서 가져옴
        const content = field.value.trim();
        // 띄어쓰기 앞 뒤 짤라냄
        console.log(content);

        if(!content){
            alert(msg);
            field.focus();
            return false;
        }
        return true;
    }
}