let sendButton = document.querySelector('button');

function send() {
    let name = document.querySelector('#nameValue').value;
    let age = document.querySelector('#ageValue').value;
    let phone = document.querySelector('#phoneValue').value;
    let mail = document.querySelector('#mailValue').value;
    let meat = "";
    let vege = "";
//     if (document.querySelector('#foodValue-meat').checked) meat = document.querySelector('#foodValue-meat').value;;
//     if (document.querySelector('#foodValue-vegetarian').checked) vege = document.querySelector('#foodValue-vegetarian').value;;
    let media = "";
    let friend = "";
    if (document.querySelector('#infosource-media').checked) media = document.querySelector('#infosource-media').value;
    if (document.querySelector('#infosource-friend').checked) friend = document.querySelector('#infosource-friend').value;
    let code = document.querySelector('#codeValue').value;

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwSYjiI0qoGRt68oWUAw18ZVQjjglegztQ5FFD0Gq7SQmQtA7NOzTskIlKrQLc9wZF0rA/exec",
        data: {
            "name": name,
            "age": age,
            "phone": phone,
            "mail": mail,
            "foodMeat": meat,
            "foodVege": vege,
            "infoMedia": media,
            "infoFriend": friend,
            "codeSkill": code
        },
        // success: function(response) {
        //     if (response == "成功") {
        //         alert("感謝您的填寫");
        //     }
        // },
    });

    document.querySelector('#btn').innerHTML = '已收到您回覆的表單';
    // document.querySelector('#btn').innerText = 'Hide Result';
    // document.querySelector('#btn').textContent = 'Hide Result';
};

sendButton.addEventListener('click', send);
