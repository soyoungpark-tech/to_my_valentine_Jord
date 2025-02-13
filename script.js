$(document).ready(function() {
    const correctPassword = "1212"; // 올바른 비밀번호

    // 계산기 버튼 클릭 시 숫자 입력
    $('.num').click(function() {
        let currentVal = $('#password').val();
        let value = $(this).data('value');
        
        // 비밀번호 필드에 값 추가
        if (currentVal.length < 4) {
            $('#password').val(currentVal + value);
        }
    });

    // C 버튼 클릭 시 비밀번호 입력 초기화
    $('.clear').click(function() {
        $('#password').val('');
        $('#errorMessage').hide(); // 오류 메시지 숨기기
    });

    // 확인 버튼 클릭 시 비밀번호 확인
    $('#submitBtn').click(function() {
        const enteredPassword = $('#password').val();

        if (enteredPassword === correctPassword) {
            // 비밀번호가 맞으면 페이지 전환
            window.location.href = "/to_my_valentine_Jord/pages/section1.html";  // 다른 페이지로 이동 (예: nextpage.html)
        } else {
            // 비밀번호가 틀리면 오류 메시지 표시하고 입력 필드 초기화
            $('#errorMessage').show();
            setTimeout(function() {
                $('#password').val(''); // 비밀번호 틀렸을 때 입력 필드 지우기
                $('#errorMessage').hide(); // 오류 메시지 숨기기
            }, 2000); // 2초 후에 입력 필드 지우기
        }
    });

    // 비밀번호 입력 필드에서 엔터키를 누를 경우에도 동작하도록 설정
    $('#password').keypress(function(event) {
        if (event.key === "Enter") {
            $('#submitBtn').click();
        }
    });


});


